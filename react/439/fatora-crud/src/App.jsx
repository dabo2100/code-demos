import { useRef, useState } from "react"
import { FaTrash } from "react-icons/fa";
import { RiEditBoxLine } from "react-icons/ri";
import "./App.css";
import Swal from "sweetalert2";

export default function App() {
  const nameInput = useRef();
  const priceInput = useRef();
  const qtyInput = useRef();

  const [phones, setPhones] = useState(
    [
      { name: "iPHone x", price: 400, qty: 3 },
      { name: "iPHone 11", price: 450, qty: 5 },
      { name: "iPHone 12", price: 500, qty: 2 },
    ]
  );


  const handleSubmit = (event) => {
    event.preventDefault()
    let newPhone = {
      name: nameInput.current.value,
      price: +priceInput.current.value,
      qty: +qtyInput.current.value
    }
    let copy = [...phones]
    copy.push(newPhone);
    setPhones(copy);
    Swal.fire({
      icon: "success",
      title: "Phone Added Success",
      timer: 1200,
    }).then(() => {
      setModalIndex(false);
    })
  }

  const [modalIndex, setModalIndex] = useState(false);
  return (
    <div className="col-12 App container d-flex flex-column align-items-center">
      <h1>Fatora System</h1>

      <button onClick={() => { setModalIndex(true) }} className="btn btn-primary">Add New Phone</button>

      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th>-</th>
            <th>Phone Name</th>
            <th>Phone Price</th>
            <th>Phone Qty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            phones.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <td>{el.qty}</td>
                  <td>
                    <div className="d-flex">
                      <FaTrash className="text-danger" />
                      <RiEditBoxLine className="text-warning" />
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      {
        modalIndex == true ? (
          <div onClick={() => { setModalIndex(false) }} className="myModal d-flex align-items-center justify-content-center ">
            <form onSubmit={handleSubmit} onClick={(event) => event.stopPropagation()} className="bg-white rounded shadow border p-3 d-flex flex-column gap-3 col-12 col-md-5 animate__animated animate__fadeInDown">
              <input ref={nameInput} className="form-control" type="text" placeholder="Enter new Phone Name" />
              <input ref={priceInput} className="form-control" type="number" placeholder="Enter new Phone Price" />
              <input ref={qtyInput} className="form-control" type="number" placeholder="Enter new Phone Qty" />
              <button className="btn btn-primary">Add New Phone</button>
            </form>
          </div>
        ) : null
      }
    </div>
  )
}