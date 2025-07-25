"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { logo, eth, btc, rocket, rates, secure } from "@/assets";
import Link from "next/link";
import Image from "next/image";

const Onboarding = () => {
	const [isVideoLoaded, setIsVideoLoaded] = useState(false);
	const controls = useAnimation();

	useEffect(() => {
		controls.start("visible");
	}, [controls]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const floatingVariants = {
		animate: {
			y: [-10, 10, -10],
			transition: {
				duration: 3,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	};

	const pulseVariants = {
		animate: {
			scale: [1, 1.05, 1],
			transition: {
				duration: 2,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	};

	return (
		<div className='min-h-screen  relative overflow-hidden'>
			{/* Background Elements */}
			<div className='absolute inset-3'></div>

			{/* Floating Crypto Icons */}
			<motion.div
				variants={floatingVariants}
				animate='animate'
				className='absolute top-20 left-10 opacity-30'
			>
				<Image src={btc} alt='Bitcoin' width={60} height={60} />
			</motion.div>

			<motion.div
				variants={floatingVariants}
				animate='animate'
				className='absolute top-25 right-10 opacity-70'
				style={{ animationDelay: "1s" }}
			>
				<Image src={eth} alt='Ethereum' width={50} height={50} />
			</motion.div>

			<motion.div
				variants={floatingVariants}
				animate='animate'
				className='absolute bottom-32 left-20 opacity-20'
				style={{ animationDelay: "2s" }}
			>
				<Image src={rocket} alt='Rocket' width={40} height={40} />
			</motion.div>

			{/* Main Content */}
			<motion.div
				variants={containerVariants}
				initial='hidden'
				animate={controls}
				className='relative z-10 container mx-auto px-6 py-8 min-h-screen flex flex-col items-center justify-center'
			>
				{/* Logo */}
				<motion.div variants={itemVariants} className='mb-8'>
					<Image
						src={logo}
						alt='Gidswap Exchange'
						width={200}
						height={60}
						className='h-16 w-auto'
					/>
				</motion.div>

				{/* Main Heading */}
				<motion.div
					variants={itemVariants}
					className='text-center mb-6'
				>
					<h1 className='text-4xl md:text-6xl font-bold text-white mb-4 leading-tight'>
						<span className='bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent'>
							Gidswap Exchange
						</span>
					</h1>
					<p className='text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed'>
						Your Trusted Crypto Paddy! Trade digital assets with ease,
						experience peak performance, and enjoy the fastest payouts
						in the market.
					</p>
				</motion.div>

				{/* Video Section */}
				<motion.div variants={itemVariants} className='mb-8 relative'>
					<div className='relative rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20'>
						<video
							autoPlay
							loop
							muted
							playsInline
							onLoadedData={() => setIsVideoLoaded(true)}
							className='w-full max-w-4xl h-auto rounded-2xl'
							style={{ maxHeight: "60vh" }}
						>
							<source src='/video.mp4' type='video/mp4' />
							Your browser does not support the video tag.
						</video>
					</div>
				</motion.div>

				{/* Features Grid */}
				<motion.div
					variants={itemVariants}
					className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl'
				>
					<motion.div
						variants={pulseVariants}
						animate='animate'
						className='bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300'
					>
						<div className='flex items-center justify-center mb-3'>
							<Image
								src={rocket}
								alt='Bitcoin'
								width={60}
								height={60}
							/>
						</div>
						<h3 className='text-white font-semibold mb-2'>
							Lightning Fast
						</h3>
						<p className='text-gray-400 text-sm'>
							Execute trades in milliseconds with our optimized
							processes
						</p>
					</motion.div>

					<motion.div
						variants={pulseVariants}
						animate='animate'
						style={{ animationDelay: "0.5s" }}
						className='bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300'
					>
						<div className='flex items-center justify-center mb-3'>
							<Image
								src={secure}
								alt='Bitcoin'
								width={60}
								height={60}
							/>
						</div>
						<h3 className='text-white font-semibold mb-2'>
							Bank-Grade Security
						</h3>
						<p className='text-gray-400 text-sm'>
							Your assets protected with military-grade encryption
						</p>
					</motion.div>

					<motion.div
						variants={pulseVariants}
						animate='animate'
						style={{ animationDelay: "1s" }}
						className='bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300'
					>
						<div className='flex items-center justify-center mb-3'>
							<Image
								src={rates}
								alt='Bitcoin'
								width={60}
								height={60}
							/>
						</div>
						<h3 className='text-white font-semibold mb-2'>
							Best Rates
						</h3>
						<p className='text-gray-400 text-sm'>
							Competitive rates with the fastest payout guaranteed
						</p>
					</motion.div>
				</motion.div>

				{/* CTA Button */}
				<motion.div variants={itemVariants}>
					<Link href='/signin'>
						<motion.button
							whileHover={{
								scale: 1.05,
								boxShadow: "0 10px 40px rgba(168, 85, 247, 0.4)",
							}}
							whileTap={{ scale: 0.95 }}
							className='relative overflow-hidden bg-secondary text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg transition-all duration-300 border border-purple-400/30'
						>
							<motion.div
								className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0'
								animate={{
									x: [-100, 300],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatDelay: 3,
								}}
							/>
							<span className='relative z-10 flex items-center gap-3'>
								Get Started Now
								<motion.span
									animate={{ x: [0, 5, 0] }}
									transition={{ duration: 1.5, repeat: Infinity }}
								></motion.span>
							</span>
						</motion.button>
					</Link>
				</motion.div>

				{/* Trust Indicators */}
				<motion.div
					variants={itemVariants}
					className='mt-12 text-center'
				>
					<p className='text-gray-500 font-bold mb-4'>
						Tested and Trusted
					</p>
					<div className='flex justify-center items-center gap-8 '>
						<motion.div
							animate={{ rotate: 360 }}
							transition={{
								duration: 20,
								repeat: Infinity,
								ease: "linear",
							}}
						>
							<Image src={btc} alt='Bitcoin' width={60} height={40} />
						</motion.div>
						<motion.div
							animate={{ rotate: -360 }}
							transition={{
								duration: 25,
								repeat: Infinity,
								ease: "linear",
							}}
						>
							<Image
								src={eth}
								alt='Ethereum'
								width={60}
								height={40}
							/>
						</motion.div>
						<motion.div
							animate={{ y: [-2, 2, -2] }}
							transition={{ duration: 2, repeat: Infinity }}
						>
							<Image
								src={rocket}
								alt='Rocket'
								width={60}
								height={40}
							/>
						</motion.div>
					</div>
				</motion.div>
			</motion.div>

			{/* Gradient Overlay at Bottom */}
			<div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none'></div>
		</div>
	);
};

export default Onboarding;
