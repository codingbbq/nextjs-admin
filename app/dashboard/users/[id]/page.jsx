import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
	return (
		<>
			<section className={styles.container}>
				<div className={styles.infoContainer}>
					<div className={styles.imgContainer}>
						<Image
							src="/noavatar.png"
							alt=""
							width={250}
							height={250}
							className={styles.img}
						/>
						<span>John Doe</span>
					</div>
				</div>
				<div className={styles.formContainer}>
					<form action="" className={styles.form}>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							name="username"
							placeholder="John Doe"
						/>

						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="johndoe@email.com"
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
							placeholder="+1234567891"
						/>

						<label htmlFor="address">Address</label>
						<textarea
							name="address"
							id="address"
							cols="30"
							rows="10"
                            defaultValue={"New York"}
						>
						</textarea>

						<label htmlFor="isAdmin">isAdmin?</label>
						<select name="isAdmin" id="isAdmin">
							<option value={true}>Yes</option>
							<option value={false}>No</option>
						</select>

						<label htmlFor="isActive">isActive?</label>
						<select name="isActive" id="isActive">
							<option value={true}>Yes</option>
							<option value={false}>No</option>
						</select>

                        <button>Uupdate</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default SingleUserPage;
