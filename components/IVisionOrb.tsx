'use client';
import { useEffect, useRef } from 'react';
import type * as THREE from 'three';

/**
 * IVisionOrb — 4-segment glass ring, each segment a different service colour.
 *
 *  0 → Architecture & Fit-out  → Royal Blue  (#1565C0)
 *  1 → Events & Media          → Deep Purple (#6A1B9A)
 *  2 → Portable Cabins         → Emerald     (#1B5E20)
 *  3 → Real Estate             → Amber/Gold  (#E65100)
 */

const DEG  = Math.PI / 180;
const GAP  = 10 * DEG;
const ARC  = 80 * DEG;
const SLOT = 90 * DEG;
const INNER = 0.40;
const OUTER = 1.00;
const DEPTH = 0.42;

// Each service: face colour, edge colour, emissive glow
const SERVICES = [
  { name: 'Architecture',    face: 0x1565C0, edge: 0x0D47A1, emissive: 0x0a2a60 },
  { name: 'Events & Media',  face: 0x6A1B9A, edge: 0x4A148C, emissive: 0x2a0840 },
  { name: 'Portable Cabins', face: 0x1B5E20, edge: 0x0a3d10, emissive: 0x0a2810 },
  { name: 'Real Estate',     face: 0xE65100, edge: 0xBF360C, emissive: 0x602200 },
];

export default function IVisionOrb({ className }: { className?: string }) {
  const mountRef      = useRef<HTMLDivElement>(null);
  const generationRef = useRef(0);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const myGen = ++generationRef.current;
    let renderer: import('three').WebGLRenderer | undefined;
    let animId   = 0;
    let onResize = () => {};
    let onMouse  = (_e: MouseEvent) => {};

    (async () => {
      const THREE = await import('three');
      if (generationRef.current !== myGen) return;

      mount.querySelectorAll('canvas').forEach(c => c.remove());

      const W = mount.clientWidth  || 520;
      const H = mount.clientHeight || 520;

      // ── Renderer ─────────────────────────────────────────────
      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, W / H, 0.1, 100);
      camera.position.set(0, 0, 7.5);
      camera.lookAt(0, 0, 0);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W, H);
      renderer.setClearColor(0x000000, 0);
      renderer.shadowMap.enabled   = false;
      renderer.toneMapping         = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      renderer.outputColorSpace    = THREE.SRGBColorSpace;
      mount.appendChild(renderer.domElement);

      // ── Ring-sector geometry ──────────────────────────────────
      function makeSector(
        inner: number, outer: number,
        startA: number, endA: number, depth: number,
        faceMat: THREE.Material, edgeMat: THREE.Material,
      ): THREE.Mesh {
        const shape = new THREE.Shape();
        shape.moveTo(Math.cos(startA) * outer, Math.sin(startA) * outer);
        shape.absarc(0, 0, outer, startA, endA, false);
        shape.lineTo(Math.cos(endA) * inner, Math.sin(endA) * inner);
        shape.absarc(0, 0, inner, endA, startA, true);
        shape.closePath();

        const geo = new THREE.ExtrudeGeometry(shape, {
          depth,
          bevelEnabled:   true,
          bevelThickness: 0.045,
          bevelSize:      0.045,
          bevelSegments:  5,
          curveSegments:  80,
          steps:          1,
        });
        geo.translate(0, 0, -depth / 2);
        return new THREE.Mesh(geo, [faceMat, edgeMat]);
      }

      // ── Build the ring ────────────────────────────────────────
      const group = new THREE.Group();

      SERVICES.forEach((svc, i) => {
        // Per-segment glass material — unique colour per service
        const face = new THREE.MeshPhysicalMaterial({
          color:           new THREE.Color(svc.face),
          emissive:        new THREE.Color(svc.emissive),
          emissiveIntensity: 0.45,
          metalness:       0.0,
          roughness:       0.05,
          transmission:    0.78,    // glass-like
          thickness:       0.5,
          ior:             1.52,
          transparent:     true,
          opacity:         0.55,
          side:            THREE.DoubleSide,
          reflectivity:    0.9,
          envMapIntensity: 1.2,
        });

        const edge = new THREE.MeshPhysicalMaterial({
          color:           new THREE.Color(svc.edge),
          emissive:        new THREE.Color(svc.emissive),
          emissiveIntensity: 0.3,
          metalness:       0.2,
          roughness:       0.12,
          transparent:     true,
          opacity:         0.85,
        });

        const startA = i * SLOT + GAP / 2;
        group.add(makeSector(INNER, OUTER, startA, startA + ARC, DEPTH, face, edge));
      });

      // ── Central glowing ring (white-hot core) ─────────────────
      const torusMat = new THREE.MeshStandardMaterial({
        color:             0xffffff,
        emissive:          new THREE.Color(0xffffff),
        emissiveIntensity: 1.5,
        roughness:         0.0,
        metalness:         0.0,
      });
      group.add(new THREE.Mesh(new THREE.TorusGeometry(INNER, 0.018, 20, 160), torusMat));

      // Outer edge ring
      const outerTorusMat = new THREE.MeshStandardMaterial({
        color:             0xffffff,
        emissive:          new THREE.Color(0xcccccc),
        emissiveIntensity: 0.6,
        roughness:         0.1,
        metalness:         0.5,
        transparent:       true,
        opacity:           0.4,
      });
      group.add(new THREE.Mesh(new THREE.TorusGeometry(OUTER, 0.012, 20, 160), outerTorusMat));

      group.rotation.x = 0.38;
      group.scale.setScalar(1.25);
      scene.add(group);

      // ── Coloured point lights matching each service ───────────
      // Positioned at the centre of each segment face — they illuminate
      // the glass from within, making the colours rich and glowing
      SERVICES.forEach((svc, i) => {
        const midA = i * SLOT + GAP / 2 + ARC / 2;
        const r    = (INNER + OUTER) / 2;
        const light = new THREE.PointLight(svc.face, 3.5, 3);
        light.position.set(
          Math.cos(midA) * r,
          Math.sin(midA) * r,
          0.4,
        );
        group.add(light);
      });

      // ── Scene lights ──────────────────────────────────────────
      // Bright key from upper-left front
      const key = new THREE.DirectionalLight(0xffffff, 5);
      key.position.set(-3, 4, 6);
      scene.add(key);

      // Soft fill from lower-right
      const fill = new THREE.DirectionalLight(0xffffff, 2);
      fill.position.set(4, -2, 4);
      scene.add(fill);

      // Rim from behind — cool blue-white
      const rim = new THREE.PointLight(0x88aaff, 5, 14);
      rim.position.set(0, 0, -5.5);
      scene.add(rim);

      scene.add(new THREE.AmbientLight(0xffffff, 0.5));

      // ── Floating particles ────────────────────────────────────
      const pPos = new Float32Array(120 * 3);
      for (let i = 0; i < 120; i++) {
        const th = Math.random() * Math.PI * 2;
        const ph = Math.acos(2 * Math.random() - 1);
        const r  = 1.35 + Math.random() * 0.6;
        pPos[i * 3]     = r * Math.sin(ph) * Math.cos(th);
        pPos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
        pPos[i * 3 + 2] = r * Math.cos(ph);
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      group.add(new THREE.Points(pGeo, new THREE.PointsMaterial({
        color: 0xffffff, size: 0.018,
        transparent: true, opacity: 0.35, depthWrite: false,
        vertexColors: false,
      })));

      // ── Animation ─────────────────────────────────────────────
      let t = 0;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.005;
        group.rotation.y = t * 0.45;
        group.rotation.x = 0.38 + Math.sin(t * 0.38) * 0.2;
        group.scale.setScalar(1.25 + Math.sin(t * 0.85) * 0.018);
        rim.intensity = 4 + Math.sin(t * 1.1) * 1.5;
        renderer!.render(scene, camera);
      };
      animate();

      // ── Resize ────────────────────────────────────────────────
      onResize = () => {
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        if (!w || !h) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer!.setSize(w, h);
      };
      window.addEventListener('resize', onResize);

      // ── Mouse parallax ────────────────────────────────────────
      onMouse = (e: MouseEvent) => {
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;
        group.rotation.x += (-ny * 0.12 - group.rotation.x) * 0.025;
      };
      window.addEventListener('mousemove', onMouse);
    })();

    return () => {
      generationRef.current++;
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
      if (renderer) {
        renderer.dispose();
        mount.querySelectorAll('canvas').forEach(c => c.remove());
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  );
}
