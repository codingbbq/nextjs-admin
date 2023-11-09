import styles from "./footer.module.css";

const Footer = () => {
    return (
        <>
            <footer className={styles.container}>
                <span className={styles.logo}>CodingBBQ</span>
                <span className={styles.text}>&copy; Learn and Fun with NextJs</span>
            </footer>
        </>
    )
};

export default Footer;