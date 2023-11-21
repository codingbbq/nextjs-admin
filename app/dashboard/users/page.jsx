import Search from "@/app/ui/dashboard/search/Search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import { fetchUsers } from "@/app/lib/data";

const Users = async ({searchParams}) => {

	const q = searchParams?.q || "";

	const users = await fetchUsers(q);
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
						{users.map((user) => (
							<tr key={user.id}>
								<td>
									<div className={styles.user}>
										<Image
											src={user.img || "/noavatar.png"}
											alt={user.username}
											width={40}
											height={40}
											className={styles.userImage}
										/>
										<div className={styles.userName}>
											{user.username}
										</div>
									</div>
								</td>
								<td>{user.email}</td>
								<td>{user.createdAt?.toString().slice(4,16)}</td>
								<td>{user.isAdmin ? "Admin": "No"}</td>
								<td>{user.isActive ? "Active" : "No"}</td>
								<td>
									<div className={styles.button}>
										<Link href={`/dashboard/users/${user.id}`}>
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
						))}
					</tbody>
				</table>
				<Pagination />
			</section>
		</>
	);
};

export default Users;
