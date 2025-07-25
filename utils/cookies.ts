export const setCookie = (
	name: string,
	value: any,
	days: number
) => {
	const expires = new Date();
	expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
	console.log(`Cookie set: ${name}`);
};

export const getCookie = (name: string) => {
	const nameEQ = name + "=";
	const ca = document.cookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === " ") c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) {
			const value = c.substring(nameEQ.length, c.length);
			console.log(
				`Cookie retrieved: ${name}=${value ? "[exists]" : "[empty]"}`
			);
			return value;
		}
	}
	console.log(`Cookie not found: ${name}`);
	return null;
};

export const deleteCookie = (name: string) => {
	document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
	console.log(`Cookie deleted: ${name}`);
};
