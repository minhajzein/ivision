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
import { Masterpiece } from '@/components/sections/masterpiece'
import { motion } from 'framer-motion'

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

			<Masterpiece />

			<HomeCTA />

			<Footer />
		</main>
	)
}
