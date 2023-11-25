"use client";
import { authenticate } from "@/app/lib/actions";
import styles from "./loginform.module.css";
import { useState } from "react";

const LoginForm = () => {
	
    const [error, setError] = useState("");

    const handleLogin = async (formData) => {
        const data = await authenticate(formData);
        data.error && setError(data.error);
    };

    return (
		<>
			<form action={handleLogin} className={styles.form}>
				<h1>Login</h1>
				<input
					type="text"
					name="username"
					id="username"
					placeholder="username"
				/>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="password"
				/>
				<button>Login</button>
                {error && error}
			</form>

		</>
	);
};

export default LoginForm;
