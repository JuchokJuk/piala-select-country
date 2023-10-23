import styles from "./Home.module.scss";
import logo from "public/images/logo.png";
import Image from "next/image";
import Kazakhstan from "public/icons/countries/kazakhstan.svg";
import Kyrgyzstan from "public/icons/countries/kyrgyzstan.svg";
import Uzbekistan from "public/icons/countries/uzbekistan.svg";
import Head from "next/head";
import cx from "classnames";

export default function Home() {
  return (
    <>
      <Head>
        <title>Выбор страны</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.gradient} />
        <div className={styles.container}>
          <div className={styles.pattern} />
          <div className={styles.pattern} />
          <div className={styles.content}>
            <Image src={logo} alt="logo" />
            <h1>Выберите вашу страну</h1>

            <div className={styles.select}>
              <div className={styles.itemWrapper}>
                <a href="https://piala.kz" className={cx(styles.item, "scaleOnHover2")}>
                  <Kazakhstan />
                  Казахстан
                </a>
              </div>
              <div className={styles.itemWrapper}>
                <a href="https://piala.kg" className={cx(styles.item, "scaleOnHover2")}>
                  <Kyrgyzstan />
                  Кыргызстан
                </a>
              </div>
              <div className={styles.itemWrapper}>
                <a href="https://pialapromo.uz" className={cx(styles.item, "scaleOnHover2")}>
                  <Uzbekistan />
                  Узбекистан
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
