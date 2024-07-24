"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { sendEmail } from "@/utils/send-email";
import styles from "./styles.module.scss";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [messageSent, setMessageSent] = useState(false);

  function onSubmit(data) {
    // sendEmail(data);
    console.log("data form", data)
    setMessageSent(true)
  }


  return (
    <div className={styles.formcontainer}>
  

      {messageSent ? (<>

      </>) : <>
  
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputcontainer}>
          <input
            type="text"
            placeholder="Full Name"
            className={styles.input}
            {...register("name", { required: true })}
          />
        </div>
        <div className={styles.inputcontainer}>
          <input
            type="email"
            placeholder="E-mail"
            className={styles.input}
            {...register("email", { required: true })}
          />
        </div>
        <div className={styles.inputcontainer}>
          <input
            type="tel"
            placeholder="Phone number"
            className={styles.input}
            {...register("phone", { required: true })}
          />
        </div>
        <div className={styles.inputcontainertextarea}>
          <textarea
            placeholder="Message"
            className={`${styles.input} ${styles.textarea}`}
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div className={styles.buttoncontainer}>
          {/* <Button text="Send" color="#AAA9A9"/> */}
          <button className={styles.button}>
            {" "}
            send
          </button>
        </div>
      </form>
      
      </>}

     
    </div>
  );
};

export default Contact;