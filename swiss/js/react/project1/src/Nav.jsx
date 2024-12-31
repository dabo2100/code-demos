import axios from "axios";
import { useState } from "react";

export default function Nav() {
    // axios.get("https://fakestoreapi.com/products").then((res) => {
    //     console.log(res.data);
    // })
    // States
    // Number
    const [counter, setCounter] = useState(0); // [1000 , function ]
    // String
    const [user, setUser] = useState("Ahmed");
    // Boolean
    const [isDark, setIsDark] = useState(false);
    // Array
    const [colors, setColors] = useState(["red", "blue", "green"]);
    const [links, setLinks] = useState(["Home", "About", "Contact", "Blog"]);
    const [phones, setPhones] = useState([
        { name: "iPhone x", price: 400 },
        { name: "iPhone 11", price: 450 },
        { name: "iPhone 12", price: 500 },
        { name: "iPhone 13", price: 600 },
    ]);
    // Object
    const incrment = () => {
        setCounter(counter + 1);
    }

    const decrment = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        } else {
            alert('Counter Cannot be negative');
        }
    }
    // Coponent View
    return (
        <div>
            <div className="col-12">
                {
                    phones.map((el, index) => {
                        return (
                            <button onClick={()=>{alert('Hello')}} key={index} className="btn btn-primary">{el.name} [{el.price} $]</button>
                        )
                    })
                }
            </div>
            <ul>
                {
                    links.map((el, index) => {
                        return <li key={index}>{el}</li>
                    })
                }
            </ul>
            <h1 onClick={() => { setIsDark(!isDark) }}>Dark mode is : {isDark == true ? 'dark' : 'light'}</h1>
            <h1 onClick={() => { setUser("Ali") }}>username is : {user}</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={() => { decrment() }}>-</button>
            <button onClick={() => { incrment() }}>+</button>
        </div>
    )
}
// click => function
// test.addEventListiner("click",()=>{})
// map