import { User } from "./models";
import { CONNECT } from "./utils";

export const fetchUsers = async (q) => {
	const regex = new RegExp(q, "i");
	try {
		await CONNECT();
		const users = await User.find({ username: { $regex: regex } });
		return users;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch users");
	}
};
