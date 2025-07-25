import logo from "@/assets/main-logo-full-light.png";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
	const isAuthenticated = false;
	return (
		<header>
			{isAuthenticated && (
				<Link href={"/"}>
					<Image width={250} height={100} alt='logo' src={logo} />
				</Link>
			)}
		</header>
	);
};
export default Header;
