'use client'

import { useEffect, useRef, useMemo } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
	const containerRef = useRef<HTMLDivElement>(null)
	const textRef = useRef<HTMLDivElement>(null)
	const pixelContainerRef = useRef<HTMLDivElement>(null)

	// Generate grid for pixel effect
	const gridSize = 10 // 10x10 grid
	const pixels = useMemo(() => Array.from({ length: gridSize * gridSize }), [])

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline()

			// Clear initial state to prevent flash
			gsap.set('.hero-title span', { y: 120, opacity: 0 })
			gsap.set('.hero-desc', { opacity: 0, y: 30 })
			gsap.set('.hero-btns', { opacity: 0, scale: 0.9 })

			tl.to('.hero-title span', {
				y: 0,
				opacity: 1,
				duration: 1.2,
				stagger: 0.15,
				ease: 'expo.out',
			})
				.to(
					'.hero-desc',
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: 'power3.out',
					},
					'-=0.6',
				)
				.to(
					'.hero-btns',
					{
						opacity: 1,
						scale: 1,
						duration: 0.8,
						ease: 'back.out(1.7)',
					},
					'-=0.4',
				)

			// Pixel Organization Animation
			tl.from(
				'.hero-pixel',
				{
					opacity: 0,
					scale: 0,
					rotation: 45,
					stagger: {
						amount: 1.5,
						grid: [gridSize, gridSize],
						from: 'center',
					},
					duration: 0.8,
					ease: 'back.out(1.2)',
				},
				'-=1.2',
			).to('.hero-pixel', {
				opacity: 0,
				scale: 0.8,
				stagger: {
					amount: 1,
					grid: [gridSize, gridSize],
					from: 'edges',
				},
				duration: 1,
				delay: 0.5,
				ease: 'power2.inOut',
			})

			// Floating Glows
			gsap.to('.glow-1', {
				x: '30%',
				y: '20%',
				duration: 15,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',
			})
			gsap.to('.glow-2', {
				x: '-20%',
				y: '-30%',
				duration: 20,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',
			})

			// Standby Image Breathing
			gsap.to('.hero-inner-image', {
				scale: 1.1,
				duration: 8,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',
			})

			// Subtle Standby Pixel Shimmer
			gsap.to('.hero-pixel', {
				opacity: 0.03,
				duration: 'random(1, 3)',
				repeat: -1,
				yoyo: true,
				stagger: {
					amount: 2,
					from: 'random',
				},
				ease: 'sine.inOut',
			})

			// Parallax effect on scroll
			gsap.to('.hero-image-container', {
				scrollTrigger: {
					trigger: containerRef.current,
					start: 'top top',
					end: 'bottom 20%',
					scrub: true,
				},
				y: 250,
				scale: 1.3,
				ease: 'none',
			})
		}, containerRef)

		return () => ctx.revert()
	}, [])

	return (
		<section
			ref={containerRef}
			className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'
		>
			{/* Pixel Reveal Overlay */}
			<div
				ref={pixelContainerRef}
				className='absolute inset-0 z-20 pointer-events-none grid'
				style={{
					gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
					gridTemplateRows: `repeat(${gridSize}, 1fr)`,
				}}
			>
				{pixels.map((_, i) => (
					<div
						key={i}
						className='hero-pixel bg-background border-[0.5px] border-primary/5 opacity-0'
					/>
				))}
			</div>

			{/* Background with Overlay */}
			<div className='hero-bg absolute inset-0 z-0'>
				<div className='hero-image-container w-full h-full relative z-0 origin-center'>
					<div className="hero-inner-image w-full h-full bg-[url('/hero-background-2.png')] bg-cover bg-center" />
				</div>
				<div className='absolute inset-0 bg-linear-to-b from-background/0 via-background/40 to-background z-10' />

				{/* Animated Glows */}
				<div className='glow-1 absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-primary/20 blur-[120px] rounded-full z-1' />
				<div className='glow-2 absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] bg-primary/10 blur-[100px] rounded-full z-1' />
			</div>

			<div className='container mx-auto relative z-30 text-center'>
				<div ref={textRef} className='max-w-4xl mx-auto uppercase'>
					<h1 className='hero-title text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-[0.9]'>
						<span className='inline-block text-primary'>MORE</span>{' '}
						<span className='inline-block'>VISION.</span> <br />
						<span className='inline-block'>LESS</span>{' '}
						<span className='inline-block'>LIMITS.</span>
					</h1>
					<p className='hero-desc text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed normal-case font-medium'>
						At i Vision, we transform your aspirations into immersive
						experiences. From luxury interiors to global events and cutting-edge
						media solutions across the Kingdom.
					</p>
					<div className='hero-btns flex flex-col sm:flex-row items-center justify-center gap-4 normal-case'>
						<Link href='/services'>
							<Button
								size='lg'
								className='bg-primary hover:bg-primary/90 text-white min-w-50 text-lg py-8 font-bold rounded-none'
							>
								EXPLORE SERVICES <ChevronRight className='ml-2 w-5 h-5' />
							</Button>
						</Link>
						<Link href='/portfolio'>
							<Button
								size='lg'
								variant='outline'
								className='border-white/20 text-white hover:bg-white/10 min-w-50 text-lg py-8 font-bold rounded-none'
							>
								PORTFOLIO
							</Button>
						</Link>
					</div>
				</div>
			</div>

			{/* Decorative Elements */}
			<div className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50'>
				<div className='w-px h-12 bg-linear-to-b from-primary to-transparent mx-auto' />
			</div>
		</section>
	)
}
