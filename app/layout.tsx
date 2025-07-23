import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

export const metadata: Metadata = {
	title: "Gidswap Exchange | Your Trusted Crypto Paddy!",
	description:
		"Trade your digital assets with ease, peak user experience and fastest payout!",
	icons: {
		icon: "/favicon.png",
	},
	openGraph: {
		title: "Gidswap Exchange | Your Trusted Crypto Paddy!",
		description:
			"Trade your digital assets with ease, peak user experience and fastest payout!",
		url: "",
		siteName: "Gidswap Exchange",
		images: [
			{
				url: "",
				width: 700,
				height: 300,
				alt: "Gidswap Exchange",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "Gidswap Exchange | Your Trusted Crypto Paddy!",
		description:
			"Trade your digital assets with ease, peak user experience and fastest payout!",
		images: ["/favicon.png"],
		creator: "@",
		site: "@",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='antialiased'>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
