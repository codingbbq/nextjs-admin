import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
	const { id } = params
	const user = await fetchUser(id);
	return (
		<>
			<section className={styles.container}>
				<div className={styles.infoContainer}>
					<div className={styles.imgContainer}>
						<Image
							src={user.img || "/noavatar.png"}
							alt={user.username}
							width={250}
							height={250}
							className={styles.img}
						/>
						<span>{user.username}</span>
					</div>
				</div>
				<div className={styles.formContainer}>
					<form action={updateUser} className={styles.form}>
						<input type="hidden" name="id" value={user.id} />
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							name="username"
							placeholder={user.username}
						/>

						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder={user.email}
						/>

						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="password"
						/>

						<label htmlFor="phone">Phone</label>
						<input
							type="text"
							id="phone"
							name="phone"
							placeholder={user.phone}
						/>

						<label htmlFor="address">Address</label>
						<textarea
							name="address"
							id="address"
							cols="30"
							rows="10"
                            defaultValue={user.address}
							value={user.address}
						>
						</textarea>

						<label htmlFor="isAdmin">isAdmin?</label>
						<select name="isAdmin" id="isAdmin">
							<option value={true} selected={user.isAdmin}>Yes</option>
							<option value={false} selected={!user.isAdmin}>No</option>
						</select>

						<label htmlFor="isActive">isActive?</label>
						<select name="isActive" id="isActive">
							<option value={true} selected={user.isActive}>Yes</option>
							<option value={false} selected={!user.isActive}>No</option>
						</select>

                        <button>Update</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default SingleUserPage;
