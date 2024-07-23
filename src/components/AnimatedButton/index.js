// import React from 'react';
// import { motion } from 'framer-motion';
// import styles from './styles.module.scss';

// const AnimatedButton = ({ children }) => {
//   return (
//     <motion.button
//       className={styles.button}
//       whileHover="hover"
//       initial="rest"
//       animate="rest"
//     >
//       {children}
//       <motion.div
//         className={styles.underline}
//         variants={{
//           rest: { width: 0 },
//           hover: { width: '100%' },
//         }}
//         transition={{ duration: 0.5 }}
//       />
//     </motion.button>
//   );
// };

// export default AnimatedButton;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

const AnimatedButton = ({ initialText, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={styles.button}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {isHovered ? hoverText : initialText}
      <motion.div
        className={styles.underline}
        variants={{
          rest: { width: 0 },
          hover: { width: '100%' },
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default AnimatedButton;