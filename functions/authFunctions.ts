import { prodUrl } from "@/utils/api";
import axios from "axios";

// Type definitions
interface LoginCredentials {
	email: string;
	password: string;
}

interface SignUpData {
	fullName: string;
	email: string;
	password: string;
}

interface AuthResponse {
	user: {
		id: string;
		fullName: string;
		email: string;
	};
	token: string;
	message: string;
}

export const login = async ({
	email,
	password,
}: LoginCredentials): Promise<AuthResponse> => {
	try {
		const response = await axios.post<AuthResponse>(
			`${prodUrl}/auth/login`,
			{
				email,
				password,
			}
		);
		return response.data;
	} catch (error) {
		// Enhanced error handling
		if (axios.isAxiosError(error)) {
			throw new Error(
				error.response?.data?.message ||
					error.message ||
					"An error occurred during login"
			);
		}
		throw error;
	}
};

export const signUp = async ({
	fullName,
	email,
	password,
}: SignUpData): Promise<AuthResponse> => {
	try {
		const response = await axios.post<AuthResponse>(
			`${prodUrl}/auth/signup`,
			{
				fullName,
				email,
				password,
			}
		);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error(
				error.response?.data?.message ||
					error.message ||
					"An error occurred during sign up"
			);
		}
		throw error;
	}
};
