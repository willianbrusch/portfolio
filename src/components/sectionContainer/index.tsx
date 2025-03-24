import "./sectionContainer.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  name: string;
}

function SectionContainer({ children, name }: SectionContainerProps) {
  const sectionContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionContainerRef,
    offset: ["start end", "center 50%"],
  });

  const x = useSpring(
    useTransform(scrollYProgress, [0, 0.6], ["50vw", "0vw"]),
    { stiffness: 50, damping: 20 }
  );

  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.6], [0, 1]), {
    stiffness: 50,
    damping: 20,
  });

  return (
    <motion.section
      ref={sectionContainerRef}
      id={name}
      className="section-container"
      style={{ x, opacity }}
    >
      {children}
    </motion.section>
  );
}

export default SectionContainer;
