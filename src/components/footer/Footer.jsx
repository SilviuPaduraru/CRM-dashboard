import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>ISIOSERV</div>
      <div className={styles.text}>ISIOSERV © All rights reserved.</div>
    </div>
  );
};

export default Footer;
