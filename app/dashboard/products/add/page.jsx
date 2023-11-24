
import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
    return (
        <>
            <section className={styles.container}>
                <form action={addProduct} className={styles.form}>
                    <input type="text" name="title" placeholder="title" required />
                    <select name="cat" id="cat">
                        <option value="">Choose a category</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="phone">Phone</option>
                        <option value="computer">Computer</option>
                    </select>
                    <input type="number" name="price" placeholder="price" />
                    <input type="number" name="stock" placeholder="stock" />
                    <input type="text" name="color" placeholder="color" />
                    <input type="text" name="size" placeholder="size" />
                    <textarea name="desc" id="desc" rows="16" placeholder="description"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
};

export default AddProductPage;