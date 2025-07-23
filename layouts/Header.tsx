import logo from "@/assets/main-logo-full-light.png";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
	return (
		<header>
			<div>Header</div>
			<Link href={"/"}>
				<Image width={250} height={100} alt='logo' src={logo} />
			</Link>{" "}
		</header>
	);
};
export default Header;
