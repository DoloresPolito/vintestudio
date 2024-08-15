"use client";
import styles from "./style.module.scss";

export default function WorkProgressV2() {
  const items = [
    {
      index: "01",
      title: "Discuss",
      text: "Once a new client contacts us, we chat with them to get to know them better and what their needs and goals are.",
    },
    {
      index: "02",
      title: "Creative Concept",
      text: "Based on the chat, we analyze and send to our customers different proposals to be able to define the most appropriate graphic concept.",
    },
    {
      index: "03",
      title: "Production",
      text: "Its time to start producing! Definitely our favorite part in which we try to interpret the established in the previous steps.",
    },
  ];

  return (
    <>
      <div className={styles.section}>
        {items.map((item, i) => {
          return <Item key={i} item={item} />;
        })}
      </div>
    </>
  );
}

const Item = ({ item }) => {
  return (
    <>
      <div className={styles.item}>
        
        <div className={styles.indexcontainer}>
          <h2>{item.index}</h2>
        </div>
        <div className={styles.titlecontainer}>
          <h4>{item.title}</h4>
        </div>
        <div className={styles.textcontainer}>
          <p>{item.text}</p>
        </div>
      </div>
    </>
  );
};
