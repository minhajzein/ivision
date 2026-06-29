'use client';
import { useEffect, useRef } from 'react';
import type * as THREE from 'three';

/**
 * IVisionOrb — 4-segment glass ring in brand red.
 */

const DEG  = Math.PI / 180;
const GAP  = 20 * DEG;
const ARC  = 70 * DEG;
const SLOT = 90 * DEG;
const INNER = 0.48;
const OUTER = 1.28;
const DEPTH = 0.50;
const BASE_SCALE = 1.38;

const RED = {
  face: 0xea2032,
  edge: 0xbf1a28,
  emissive: 0x5a0810,
};

const SEGMENTS = 4;

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
      camera.position.set(0, 0, 6.7);
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

      Array.from({ length: SEGMENTS }, (_, i) => {
        const face = new THREE.MeshPhysicalMaterial({
          color:           new THREE.Color(RED.face),
          emissive:        new THREE.Color(RED.emissive),
          emissiveIntensity: 0.12,
          metalness:       0.0,
          roughness:       0.08,
          transmission:    0.94,
          thickness:       0.75,
          ior:             1.52,
          transparent:     true,
          opacity:         0.28,
          side:            THREE.DoubleSide,
          reflectivity:    0.95,
          envMapIntensity: 1.4,
        });

        const edge = new THREE.MeshPhysicalMaterial({
          color:           new THREE.Color(RED.edge),
          emissive:        new THREE.Color(RED.emissive),
          emissiveIntensity: 0.08,
          metalness:       0.05,
          roughness:       0.15,
          transmission:    0.88,
          transparent:     true,
          opacity:         0.42,
        });

        const startA = i * SLOT + GAP / 2;
        group.add(makeSector(INNER, OUTER, startA, startA + ARC, DEPTH, face, edge));
      });

      group.rotation.x = 0.38;
      group.scale.setScalar(BASE_SCALE);
      scene.add(group);

      // ── Coloured point lights matching each service ───────────
      // Positioned at the centre of each segment face — they illuminate
      // the glass from within, making the colours rich and glowing
      Array.from({ length: SEGMENTS }, (_, i) => {
        const midA = i * SLOT + GAP / 2 + ARC / 2;
        const r    = (INNER + OUTER) / 2;
        const light = new THREE.PointLight(RED.face, 1.4, 3);
        light.position.set(
          Math.cos(midA) * r,
          Math.sin(midA) * r,
          0.4,
        );
        group.add(light);
      });

      // ── Scene lights ──────────────────────────────────────────
      // Bright key from upper-left front
      const key = new THREE.DirectionalLight(0xffffff, 3);
      key.position.set(-3, 4, 6);
      scene.add(key);

      const fill = new THREE.DirectionalLight(RED.face, 0.8);
      fill.position.set(4, -2, 4);
      scene.add(fill);

      const rim = new THREE.PointLight(0xffffff, 2.5, 14);
      rim.position.set(0, 0, -5.5);
      scene.add(rim);

      scene.add(new THREE.AmbientLight(0xffffff, 0.22));

      // ── Floating particles ────────────────────────────────────
      const pPos = new Float32Array(120 * 3);
      for (let i = 0; i < 120; i++) {
        const th = Math.random() * Math.PI * 2;
        const ph = Math.acos(2 * Math.random() - 1);
        const r  = 1.65 + Math.random() * 0.7;
        pPos[i * 3]     = r * Math.sin(ph) * Math.cos(th);
        pPos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
        pPos[i * 3 + 2] = r * Math.cos(ph);
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      group.add(new THREE.Points(pGeo, new THREE.PointsMaterial({
        color: RED.face, size: 0.018,
        transparent: true, opacity: 0.2, depthWrite: false,
        vertexColors: false,
      })));

      // ── Animation ─────────────────────────────────────────────
      let t = 0;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.005;
        group.rotation.y = t * 0.45;
        group.rotation.x = 0.38 + Math.sin(t * 0.38) * 0.2;
        group.scale.setScalar(BASE_SCALE + Math.sin(t * 0.85) * 0.018);
        rim.intensity = 2 + Math.sin(t * 1.1) * 0.8;
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
