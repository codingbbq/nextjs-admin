import { MdPlayCircle, MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import styles from "./rightbar.module.css";
import Image from "next/image";

const RightBar = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.bgContainer}>
                        <Image src="/astronaut.png" alt="" fill className={styles.bg} />
                    </div>
                    <div className={styles.text}>
                        <span className={styles.notification}>Available Now</span>
                        <h3 className={styles.title}>How to use the new version of admin dashboard</h3>
                        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consequuntur nobis placeat doloribus, ad, error sapiente aut adipisci dolore, voluptate consectetur recusandae ex! Necessitatibus, corrupti ipsa officia nostrum error qui.</p>
                        <button className={styles.button}>
                            <MdPlayCircleFilled />
                            Watch
                        </button>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.text}>
                        <span className={styles.notification}>Coming soon</span>
                        <h3 className={styles.title}>Lorem ipsum dolor sit amet.</h3>
                        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consequuntur nobis placeat doloribus, ad, error sapiente aut adipisci dolore, voluptate consectetur recusandae ex! Necessitatibus, corrupti ipsa officia nostrum error qui.</p>
                        <button className={styles.button}>
                            <MdReadMore />
                            More
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RightBar;