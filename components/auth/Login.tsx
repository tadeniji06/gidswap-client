"use client";

import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Login submitted:", { email, password });
		// Add actual login logic here (e.g., API call)
	};

	return (
		<div className='bg-secondary min-h-screen flex items-center justify-center px-6'>
			<div className='bg-white/5 backdrop-blur-md border border-main rounded-2xl shadow-lg p-10 w-full max-w-md'>
				<div className='flex justify-center mb-6'>
					<Image src={logo} alt='Logo' width={200} height={100} />
				</div>

				<h2 className='text-white text-2xl font-semibold text-center mb-2'>
					Login to Continue
				</h2>
				<p className='text-gray-400 text-sm text-center mb-6'>
					Enjoy seamless trading functions.
				</p>

				<form onSubmit={handleSubmit} className='space-y-5'>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-white mb-1'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className='w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-main'
						/>
					</div>

					<div>
						<label
							htmlFor='password'
							className='block text-sm font-medium text-white mb-1'
						>
							Password
						</label>
						<input
							type='password'
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							className='w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-main'
						/>
					</div>

					<div className='mt-5 flex items-center justify-between'>
						<p>Forgot Password</p>
						<Link href={"/signup"}>
							<p>Create Account?</p>
						</Link>
					</div>

					<button
						type='submit'
						className='w-full bg-main text-white font-semibold py-3 rounded-lg hover:bg-secondary transition-all'
					>
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
