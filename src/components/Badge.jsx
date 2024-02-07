import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Badge({ caption }) {

  useEffect(() => {
    
  }, [])
  
  return (
    <motion.span
      animate={{ scale: [1, 1.25, 1] }}
      transition={{ type: "keyframes", duration: 0.3 }}
      className="badge"
    >
      {caption}
    </motion.span>
  );
}
