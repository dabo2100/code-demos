import React from 'react'
import { useState } from 'react'

export default function Fatora() {
    const [phones, setPhones] = useState([
        { id: 1001, name: "iPhone x", price: 400 },
        { id: 1002, name: "iPhone 11", price: 450 },
        { id: 1003, name: "iPhone 12", price: 500 },
        { id: 1004, name: "iPhone 13", price: 550 },
        { id: 1005, name: "iPhone 14", price: 550 },
    ]);

    const [fatora, setFatora] = useState([
    ]);

    const addToFatora = (index) => {
        let phone = { ...phones[index], qty: 1 };
        let oFatoa = [...fatora];
        oFatoa.push(phone);
        setFatora(oFatoa);
    }

    return (
        <div className='col-12 d-flex flex-wrap'>
            <div className='col-12 d-flex gap-3'>
                {
                    phones.map((el, index) => {
                        return (
                            <button onClick={() => { addToFatora(index) }} key={el.id}>{el.name} [{el.price} $]</button>
                        )
                    })
                }
            </div>
            <table className='table table-dark table-bordered'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Phone Name</th>
                        <th>Phone Price</th>
                        <th>Phone Qty</th>
                        <th>Phone Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fatora.map((el, index) => {
                            return (
                                <tr key={el.id}>
                                    <td>{index + 1}</td>
                                    <td>{el.name}</td>
                                    <td>{el.price} $</td>
                                    <td>
                                        <div className='col-12 d-flex gap-2 align-items-center justify-content-center'>
                                            <button className='btn btn-danger'>-</button>
                                            <span>{el.qty}</span>
                                            <button className='btn btn-success'>+</button>
                                        </div>
                                    </td>
                                    <td>{el.price * el.qty} $</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Total</td>
                        <td colSpan={2}>1200$</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
