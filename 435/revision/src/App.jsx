import { useEffect, useRef, useState } from "react"
import Card from "./Card";

export default function App() {
  // Number - Boolean - Array - Object - String
  const [customerCounter, setCustomerCounter] = useState(0);
  const [serviceCounter, serServiceCounter] = useState(0);

  const formRefs = useRef([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      email: formRefs.current[0].value,
      password: formRefs.current[1].value,
      check: formRefs.current[2].checked,
      car: formRefs.current[3].value
    }
    console.log(obj)
  }

  return (
    <div className="col-12">
      <form onSubmit={handleSubmit}>
        <input ref={(el) => { formRefs.current[0] = el }} type="text" placeholder="Enter you email" />
        <input ref={(el) => { formRefs.current[1] = el }} type="text" placeholder="Enter you passsowrd" />
        <input ref={(el) => { formRefs.current[2] = el }} id="check" type="checkbox" />
        <label htmlFor="check">Remember Me</label>
        <select ref={(el) => { formRefs.current[3] = el }}>
          <option value="-1" hidden disabled>Select You Favorit Model</option>
          <option value="1">BMW</option>
          <option value="2">Audi</option>
          <option value="3">Merceds</option>
          <option value="4">Porche</option>
        </select>
        <button>Sumbit</button>
      </form>

      <Card color="bg-warning" content="Card 1" />
      <Card color="bg-danger" content="Hello 2" />
      <button className="btn btn-primary" onClick={() => setCustomerCounter(customerCounter + 1)}>خدمة عملاء</button>
      <button className="btn btn-primary" onClick={() => serServiceCounter(serviceCounter + 1)}>دفع فاتورة</button>


      <table className="table table-dark">
        <thead>
          <tr>
            <th>عدد العملاء</th>
            <td>{customerCounter + serviceCounter}</td>
          </tr>
          <tr>
            <th>خدمة العملاء</th>
            <td>{serviceCounter}</td>
          </tr>
          <tr>
            <th>دفع فواتير</th>
            <td>{customerCounter}</td>
          </tr>
        </thead>
      </table>
    </div >
  )
}
