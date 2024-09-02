import styles from "./style.module.scss";

// import { slideUp } from "./animation";
import AnimatedDiv from "../AnimatedDiv";

export default function Index() {


  // const phrase =
  //   "Vinte is a professional website design and development studio based in Argentina. We create human experience in a digital world; using the best practices and latest web standards guidelines.";
  // const description = useRef(null);
  // const isInView = useInView(description);

  return (
    <>
      <div 
      // ref={description} 
      className={styles.description} id="description">
        <AnimatedDiv>
        <div className={styles.body}>


          <p class="styled-paragraph">
            <span class="highlighted">who we are </span> Vinte is a professional
            website design and development studio based in Argentina. We create
            human experience in a digital world; using the best practices and
            latest web standards guidelines.
          </p>

       
        </div>
        </AnimatedDiv>
      </div>

      {/* <div className={styles.header}>
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Vinte</p>
            <p className={styles.dennis}>Studio</p>
            <p className={styles.snellenberg}>Vinte Studio</p>
          </div>
        </div>
      </div>



      <div className={styles.header2}>
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Vinte</p>
            <p className={styles.dennis}>Studio</p>
            <p className={styles.snellenberg}>Vinte</p>
            <p className={styles.snellenberg2}> Studio</p>
          </div>
        </div>
      </div> */}
    </>
  );
}
