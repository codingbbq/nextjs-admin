import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import { searchParams } from "next/navigation";
import { fetchProducts } from "@/app/lib/data";

const Products = async ({searchParams}) => {
	const q = searchParams?.q || "";
	const page = searchParams?.page || 1;

	const { count, products } = await fetchProducts(q, page);

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
						{products.map((product) => (
							<tr key={product.id}>
								<td>
									<div className={styles.product}>
										<Image
											src={product.img || "/noproduct.jpg"}
											alt={product.title}
											width={40}
											height={40}
											className={styles.productImage}
										/>
										<div className={styles.productName}>
											{product.title}
										</div>
									</div>
								</td>
								<td>
									{product.desc}
								</td>
								<td>${product.price}</td>
								<td>{product.createdAt?.toString().slice(4,16)}</td>
								<td>{product.stock}</td>
								<td>
									<div className={styles.button}>
										<Link href={`/dashboard/products/${product.id}`}>
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
				<Pagination count={count} />
			</section>
		</>
	);
};

export default Products;
