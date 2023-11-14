import Search from "@/app/ui/dashboard/search/Search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";

const Users = () => {
	return (
		<>
			<section className={styles.container}>
				<div className={styles.top}>
					<Search placeholder="Search for a user" />
					<Link href="/dashboard/users/add">
						<button className={styles.addButton}>Add New</button>
					</Link>
				</div>
				<table className={styles.table}>
					<thead>
						<tr>
							<td>Name</td>
							<td>Email</td>
							<td>Created At</td>
							<td>Role</td>
							<td>Status</td>
							<td>Action</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div className={styles.user}>
									<Image
										src="/noavatar.png"
										alt="User"
										width={40}
										height={40}
										className={styles.userImage}
									/>
									<div className={styles.userName}>
										John Doe
									</div>
								</div>
							</td>
							<td>john@gmail.com</td>
							<td>13.10.2023</td>
							<td>Admin</td>
							<td>active</td>
							<td>
								<div className={styles.button}>
									<Link href="/">
										<button
											className={`${styles.button} ${styles.view}`}
										>
											View
										</button>
									</Link>
									<Link href="/">
										<button
											className={`${styles.button} ${styles.delete}`}
										>
											Delete
										</button>
									</Link>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
                <Pagination />
			</section>
		</>
	);
};

export default Users;
