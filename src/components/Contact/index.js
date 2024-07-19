import styles from "./style.module.scss";

import MovingTitle from "../MovingTitle";

export default function Index() {

  return (
    <>
      <div className={styles.section}>
        <MovingTitle title="CONTACT" />

        <h2>LET'S WORK TOGHETER</h2>

        <div className={styles.contentcontainer}>
          <div className={styles.left}>
            <p>vintestudio@gmai.com</p>
            <p>+54 3446 584076</p>
            <p>Linkedin</p>
            <p></p>
          </div>
          <div className={styles.right}>{/* <p>contact form</p> */}</div>
        </div>


        <div className={styles.line}></div>
      </div>
    </>
  );
}
