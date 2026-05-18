import { motion } from 'framer-motion';

export const Float = ({children, className = ""}) => {
  return (
    <motion.div
      initial={{y: 25, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      viewport={{ amount: .2 }}
      transition={{duration: 1, ease: "easeInOut"}}
      style={{marginBottom: 40}}
      className={className}
    >
      {children}
    </motion.div>
  );
};