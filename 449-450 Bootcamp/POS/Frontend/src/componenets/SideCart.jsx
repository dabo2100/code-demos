import { useEffect, useState } from 'react';
import { useCart, useCheckOut } from '../store';
import { motion } from 'motion/react';
import Checkout from './Checkout';
import { MdDelete } from 'react-icons/md';

export default function SideCart() {
  const { closeCart, cartContent, removeItem, incrementQty, decrementQty } = useCart();
  const [billTotal, setBillTotal] = useState(0);
  const { index, openCheckout } = useCheckOut();

  useEffect(() => {
    let total = cartContent?.reduce((acc, el) => (acc += +el.price * +el.qty), 0);
    setBillTotal(total);
  }, [cartContent]);

  return (
    <motion.div exit={{ opacity: 0, transition: { duration: 1 } }} className="w-full h-dvh fixed top-0 left-0 bg-black/50 z-50" onClick={closeCart}>
      <motion.div onClick={(event) => event.stopPropagation()} initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }} exit={{ x: 500, opacity: 0, transition: { duration: 1 } }} className="w-[500px] p-3 h-full bg-gray-900 absolute right-0">
        {index && <Checkout />}
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th> Qty</th>
              <th> Price</th>
              <th> Total</th>
            </tr>
          </thead>
          <tbody>
            {cartContent.map((el, index) => (
              <tr key={el.documentId}>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>
                  <div className="flex items-center justify-center gap-3">
                    <button onClick={() => decrementQty(index)} className="btn btn-error">
                      -
                    </button>
                    <p>{el.qty}</p>
                    <button onClick={() => incrementQty(index)} className="btn btn-success">
                      +
                    </button>
                  </div>
                </td>
                <td>{el.price}</td>
                <td>{+el.price * +el.qty}</td>
                <td>
                  <MdDelete onClick={() => removeItem(index)} />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total Bill</td>
              <th colSpan={2}>{billTotal}</th>
            </tr>
          </tfoot>
        </table>

        <button onClick={openCheckout} className="btn btn-primary">
          Proceed to Checkout
        </button>
      </motion.div>
    </motion.div>
  );
}
