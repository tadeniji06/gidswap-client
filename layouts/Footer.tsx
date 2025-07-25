import { logo } from "@/assets";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { socials, headerLinks } from "@/utils/data";
import Image from "next/image";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-secondary text-white border-t border-gray-200'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Main Footer Content */}
				<div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Brand Section */}
					<div className='lg:col-span-2'>
						<Link href='/' className='inline-block mb-4'>
							<Image 
              width={180}
              height={50}
              alt='logo' src={logo} />
						</Link>
						<p className='mb-6 max-w-md leading-relaxed text-white'>
							Trade with confidence on Gidswap.
						</p>

						{/* Social Links */}
						<div className='flex space-x-4'>
							{socials.map((social) => (
								<a
									key={social.name}
									href={social.url}
									target='_blank'
									rel='noopener noreferrer'
									className='group p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 transform hover:scale-110'
									aria-label={`Follow on ${social.name}`}
								>
									<Icon
										icon={social.icon}
										className='w-5 h-5 text-white group-hover:text-white'
									/>
								</a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-lg font-semibold mb-4 text-white'>
							Quick Links
						</h3>
						<ul className='space-y-2'>
							{headerLinks.map((link) => (
								<li key={link.title}>
									<Link
										href={link.link}
										className='text-white hover:text-white/70 transition-colors duration-200 block py-1'
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className='text-lg font-semibold mb-4 text-white'>
							Get In Touch
						</h3>
						<div className='space-y-3'>
							<a
								href='mailto:gidswap@gmail.com'
								className='flex items-center text-white hover:text-white/70 transition-colors duration-200'
							>
								<Icon
									icon='mdi:email-outline'
									className='w-5 h-5 mr-2'
								/>
								<span className='text-sm'>gidswap@gmail.com</span>
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='border-t border-white/20 py-6'>
					<div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
						<p className='text-white text-sm text-center md:text-left'>
							© {currentYear} Gidswap Exchange. All rights reserved.
						</p>

						<div className='flex space-x-6 text-sm'>
							<Link
								href='/privacy'
								className='text-white hover:text-white/70 transition-colors duration-200'
							>
								Privacy Policy
							</Link>
							<Link
								href='/terms'
								className='text-white hover:text-white/70 transition-colors duration-200'
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
