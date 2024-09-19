"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../../public/logo.webp";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["About", "Music", "Finance", "Tokenomics", "Roadmap","Contact"];

  return (
    <motion.div className="links" variants={variants}>
      <Image width={200} height={200} src={logo} alt="abc" className="py-5"/>
      {items.map((item , index) => (
        
        <motion.a
          href={`#${item}`}
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
