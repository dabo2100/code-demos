import { fatora } from "../store";

export default function Fatora() {
  const { items } = fatora();
  return (
    <div className="w-full flex justify-center">
      <table className="table text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Qty</th>
            <th>Item Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((el, index) => (
            <tr key={el.id}>
              <th>{index + 1}</th>
              <th>{el.name}</th>
              <th>{el.price} $</th>
              <th>
                <div className="w-full flex justify-center gap-3 items-center">
                  <button className="btn btn-error">-</button>
                  <p>{el.qty}</p>
                  <button className="btn btn-success">+</button>
                </div>
              </th>
              <th>{el.price * el.qty} $</th>
            </tr>
          ))}
          {/*  */}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={4}>Total</th>
            <th>3000 $</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
