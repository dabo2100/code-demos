import { useState } from "react";
export default function App() {
  const [phones, setPhones] = useState(
    [
      { name: "iPhone X", price: 400, qty: 3 },
      { name: "iPhone 11", price: 450, qty: 3 },
      { name: "iPhone 12", price: 500, qty: 3 },
    ]
  )
  return (
    <div className="App">
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>-</th>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Qty</th>
          </tr>
        </thead>
        <tbody>
          {
            phones.map((el, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <th>{el.name}</th>
                  <th>{el.price}</th>
                  <th>{el.qty}</th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}