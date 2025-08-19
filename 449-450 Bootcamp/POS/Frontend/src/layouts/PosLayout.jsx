import { Outlet } from 'react-router-dom';
import PosHeader from '../componenets/PosHeader';
import SideCart from '../componenets/SideCart';
import { useCart } from '../store';
import { AnimatePresence } from 'motion/react';
export default function PosLayout() {
  const { index } = useCart();
  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      <PosHeader />
      <AnimatePresence>{index && <SideCart />}</AnimatePresence>
      <Outlet />
    </div>
  );
}
