import { useEffect, useRef, useState } from 'react';
import { domain, useCart, useCheckOut } from '../store';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Checkout() {
  const payType = useRef();
  const { cartContent, clearCart, closeCart } = useCart();
  const [total, setTotal] = useState(0);
  const [paid, setPaid] = useState(0);
  const { closeCheckout } = useCheckOut();

  const saveInvoice = () => {
    let invoice = [...cartContent];
    // Create Just Invoice
    axios
      .post(domain + '/api/invoices', {
        data: {
          content: JSON.stringify(cartContent),
          type: payType.current.value,
          users_permissions_user: {
            id: JSON.parse(sessionStorage.getItem('user-info')).id,
          },
        },
      })
      .then((res) => {
        let newInvoiceDocumentId = res.data.data.documentId;
        invoice.forEach(async (item) => {
          await axios.post(domain + '/api/invoice-items', {
            data: {
              qty: item.qty,
              products: item.documentId,
              invoice: newInvoiceDocumentId,
            },
          });
        });
        toast.success('Invoice Added Success');
        closeCheckout();
        clearCart();
        closeCart();
      });
  };
  const handleClose = (event) => {
    closeCheckout();
    event.stopPropagation();
  };
  useEffect(() => {
    setTotal(cartContent.reduce((acc, el) => (acc += +el.price * +el.qty), 0));
  }, []);

  return (
    <div onClick={(event) => handleClose(event)} className="bg-black/60 w-full h-full fixed top-0 left-0 flex items-center justify-center z-50">
      <div onClick={(event) => event.stopPropagation()} className="w-[400px] bg-gray-900 gap-3 rounded shadow border p-3 flex flex-col">
        <h1>CheckOut Bill</h1>
        <p>Total :{total} </p>
        <input onChange={(event) => setPaid(event.target.value)} className="input w-full" type="number" />
        <p>Remain : {paid - total}</p>
        <select ref={payType}>
          <option value={'cash'}>Cash</option>
          <option value={'visa'}>Visa</option>
        </select>
        <button onClick={saveInvoice} className="btn btn-success" disabled={paid < total ? true : false}>
          Save Bill
        </button>
      </div>
    </div>
  );
}
