import styles from "./style.module.scss";
import MovingTitle from "../MovingTitle";
import Contact from "../ContactForm";
import AnimatedDiv from "../AnimatedDiv";

export default function Index() {
  return (
    <>
      <div className={styles.section} id="contact">
        <MovingTitle title="CONTACT" svgColor="background" />

        <div className={styles.contentcontainer}>
          <div className={styles.left}>
            <AnimatedDiv delay="200">
              <p class="styled-paragraph">
                <span class="highlighted">let&apos;s conect </span>I&apos;ll be happy to discuss how we can bring your digital vision to life. Let&apos;s connect and make your website stand out!
              </p>
            </AnimatedDiv>

          </div>
          <AnimatedDiv>
            <div className={styles.right}>
              <Contact />
            </div>
          </AnimatedDiv>
        </div>

       
      </div>
    </>
  );
}
