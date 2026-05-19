import { motion } from 'framer-motion';

export const Float = ({children, className = "", id=""}) => {
  return (
    <motion.div
      id={id}
      initial={{y: 25, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      viewport={{ amount: .2 }}
      transition={{duration: 1, ease: "easeInOut"}}
      className={className}
    >
      {children}
    </motion.div>
  );
};