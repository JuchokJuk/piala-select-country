import Head from "next/head";
import styles from "./404.module.scss";
import Image from "next/image";
import Link from "next/link";
import error from "public/images/404.png";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Ошибочка вышла!</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <Image src={error} alt="404" />
          <h1>Ошибочка вышла!</h1>
          <p>Такой страницы не существует</p>
          <div className={styles.linkWrapper}>
            <Link href="/" className="scaleOnHover2">
              На главную
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
