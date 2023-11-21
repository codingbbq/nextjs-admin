import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
	return (
		<>
			<section className={styles.container}>
				<div className={styles.infoContainer}>
					<div className={styles.imgContainer}>
						<Image
							src="/noproduct.jpg"
							alt=""
							width={250}
							height={250}
							className={styles.img}
						/>
						<span>Iphone</span>
					</div>
				</div>
				<div className={styles.formContainer}>
					<form action="" className={styles.form}>
						<label htmlFor="title">Title</label>
						<input
							type="text"
							id="title"
							name="title"
							placeholder="Iphone"
						/>

						<label htmlFor="price">Price</label>
						<input
							type="number"
							id="price"
							name="price"
							placeholder="999"
						/>

						<label htmlFor="stock">stock</label>
						<input
							type="number"
							id="stock"
							name="stock"
							placeholder="23"
						/>

						<label htmlFor="color">Color</label>
						<input
							type="text"
							id="color"
							name="color"
							placeholder="red"
						/>

						<label htmlFor="size">Size</label>
						<input
							type="text"
							id="size"
							name="size"
							placeholder="L"
						/>

						<label htmlFor="category">Category</label>
						<select name="category" id="category">
							<option value="kitchen">Kitchen</option>
							<option value="computers">Computers</option>
						</select>

						<label htmlFor="description">Description</label>
						<textarea
							name="description"
							id="description"
							cols="30"
							rows="10"
							defaultValue={"Iphone Description"}
						></textarea>

						<button>Uupdate</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default SingleProductPage;
