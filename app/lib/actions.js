"use server";

import { revalidatePath } from "next/cache";
import { User, Product } from "./models";
import { CONNECT } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
	const { username, email, password, phone, address, isAdmin, isActive } =
		Object.fromEntries(formData);
	try {
		CONNECT();

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = User({
			username,
			email,
			password: hashedPassword,
			phone,
			address,
			isAdmin,
			isActive,
		});
		await newUser.save();
	} catch (error) {
		console.log(error);
		throw new Error("Failed to create user!");
	}

	revalidatePath("/dashboard/users");
	redirect("/dashboard/users");
};

// Update user
export const updateUser = async (formData) => {
	const { id, username, email, password, phone, address, isAdmin, isActive } =
		Object.fromEntries(formData);
	try {
		CONNECT();

		const updatedUserFields = {
			username,
			email,
			password,
			phone,
			address,
			isAdmin,
			isActive,
		};

		Object.keys(updatedUserFields).forEach(
			(key) =>
				(updatedUserFields[key] === "" || undefined) &&
				delete updatedUserFields[key]
		);

		await User.findByIdAndUpdate(id, updatedUserFields);

	} catch (error) {
		console.log(error);
		throw new Error("Failed to create user!");
	}

	revalidatePath("/dashboard/users");
	redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
	const { title, desc, price, stock, color, size } =
		Object.fromEntries(formData);
	try {
		CONNECT();

		const addProduct = Product({
			title,
			desc,
			price,
			stock,
			color,
			size,
		});
		await addProduct.save();
	} catch (error) {
		console.log(error);
		throw new Error("Failed to create Product!");
	}

	revalidatePath("/dashboard/products");
	redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
	const { id } = Object.fromEntries(formData);
	try {
		CONNECT();
		await Product.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
		throw new Error("Failed to delete Product!");
	}
	revalidatePath("/dashboard/products");
};

export const deleteUser = async (formData) => {
	const { id } = Object.fromEntries(formData);
	try {
		CONNECT();
		await User.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
		throw new Error("Failed to delete Uesr!");
	}
	revalidatePath("/dashboard/users");
};

export const authenticate = async (formData) => {
    const { username, password } = Object.fromEntries(formData);
    try {
        await signIn("credentials", { username, password });
    } catch (error) {
        console.log(error);
        return { error : "Wrong credentials!" }
    }
}