import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";

const Products = () => {
    return (
        <>
			<section className={styles.container}>
				<div className={styles.top}>
					<Search placeholder="Search for a product" />
					<Link href="/dashboard/products/add">
						<button className={styles.addButton}>Add New</button>
					</Link>
				</div>
				<table className={styles.table}>
					<thead>
						<tr>
							<td>Title</td>
							<td className={styles.desc}>Description</td>
							<td>Prices</td>
							<td>Created At</td>
							<td>Stock</td>
							<td>Action</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div className={styles.product}>
									<Image
										src="/noproduct.jpg"
										alt="Product"
										width={40}
										height={40}
										className={styles.productImage}
									/>
									<div className={styles.productName}>
										IPhone
									</div>
								</div>
							</td>
							<td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, temporibus?</td>
							<td>$999</td>
							<td>13.10.2023</td>
							<td>72</td>
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
    )
};

export default Products;