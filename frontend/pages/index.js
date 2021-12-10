import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <span className={styles.logo}>
            <Image src="/logo.svg" alt="my Logo" width={72} height={72} />
          </span>
      </main>
    </div>
  );
}
