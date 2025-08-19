import { useCart } from '../store';
import { motion } from 'motion/react';

export default function SideCart() {
  const { closeCart } = useCart();
  return (
    <motion.div exit={{opacity:0, transition:{duration:1}}} className="w-full h-dvh fixed top-0 left-0 bg-black/50 z-50" onClick={closeCart}>
      <motion.div
        initial={{ x:500 ,opacity:0}}
        animate={{  x:0 ,opacity:1 ,transition: { duration: 0.5 }}} 
        exit={{x:500 , opacity:0, transition:{duration:1}}}
        className="w-[300px] h-full bg-gray-900 absolute right-0">
       </motion.div>
    </motion.div>
  );
}
