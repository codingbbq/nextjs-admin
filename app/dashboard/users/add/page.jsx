import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
    return (
        <>
            <section className={styles.container}>
                <form action={addUser} className={styles.form}>
                    <input type="text" name="username" placeholder="username" required />
                    <input type="email" name="email" placeholder="email" required />
                    <input type="password" name="password" placeholder="password" required />
                    <input type="text" name="phone" placeholder="phone" />

                    <select name="isAdmin" id="isAdmin">
                        <option value={false}>is Admin?</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <select name="isActive" id="isActive">
                        <option value={true}>is Active?</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <textarea name="address" id="address" rows="16" placeholder="Address"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
};

export default AddUserPage;