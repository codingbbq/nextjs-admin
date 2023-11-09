import Navbar from "../ui/dashboard/navbar/Navbar";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import Footer from "../ui/dashboard/footer/Footer";
import styles from "../ui/dashboard/dashboard.module.css";

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<aside className={styles.menu}>
				<Sidebar />
			</aside>

			<main className={styles.content}>
				<Navbar />
				{children}
				<Footer />
			</main>
		</div>
	);
};

export default Layout;
