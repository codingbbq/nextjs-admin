import styles from "@/app/ui/login/login.module.css";
import LoginForm from "../ui/login/loginForm/LoginForm";

const Login = () => {
    return (
        <>
            <section className={styles.container}>
                <LoginForm />                
            </section>
        </>
    )
};

export default Login;