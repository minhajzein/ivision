'use client'

import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { About } from '@/components/sections/about'
import { Stats } from '@/components/sections/stats'
import { Clients } from '@/components/sections/clients'
import { CameraExperience } from '@/components/sections/camera-experience'
import { Process } from '@/components/sections/process'
import { HomeCTA } from '@/components/sections/home-cta'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LandingPage() {
	return (
		<main className='relative bg-background min-h-screen'>
			<Navbar />

			<Hero />

			<Stats />

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Services />
			</motion.div>

			<Clients />

			<CameraExperience />

			<Process />

			<About />

			{/* Visual Break / Portfolio Section Placeholder */}
			<section
				id='portfolio'
				className='py-32 bg-background border-t border-white/5'
			>
				<div className='container mx-auto'>
					<div className='flex justify-between items-end mb-20 uppercase'>
						<div>
							<span className='text-primary font-bold tracking-[0.3em] text-sm mb-4 block'>
								PORTFOLIO
							</span>
							<h2 className='text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter'>
								OUR <span className='text-primary'>MASTERPIECES.</span>
							</h2>
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
						{[
							{
								id: 1,
								img: '/interior_design_red_black_png_1770067816051.png',
								title: 'LUXURY VILLA',
							},
							{
								id: 2,
								img: '/event_management_red_black_png_1770067847667.png',
								title: 'EXHIBITION STAND',
							},
							{
								id: 3,
								img: '/media_production_red_black_png_1770067832500.png',
								title: 'MEDIA STUDIO',
							},
							{
								id: 4,
								img: '/corporate-office.png',
								title: 'CORPORATE OFFICE',
							},
							{
								id: 5,
								img: '/gala-events.png',
								title: 'GALA EVENT',
							},
							{
								id: 6,
								img: '/3d-visualization.png',
								title: '3D VISUALIZATION',
							},
						].map((project, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
								viewport={{ once: true }}
								className='group relative aspect-4/5 overflow-hidden border border-white/5'
							>
								<Link href='/portfolio' className='absolute inset-0 z-30' />
								<div className='absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80 z-10' />
								<div className='absolute bottom-8 left-8 z-20 transition-transform group-hover:-translate-y-2 uppercase'>
									<h4 className='text-2xl font-black tracking-tighter leading-none'>
										{project.title}
									</h4>
									<p className='text-[10px] text-primary font-black tracking-[0.2em] mt-2'>
										VIEW PROJECT —
									</p>
								</div>
								<div
									className='w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110'
									style={{
										backgroundImage: `url(${project.img})`,
									}}
								/>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<HomeCTA />

			<Footer />
		</main>
	)
}
