import useCounter from './Hooks/useCounter'
import { useRecoilState } from 'recoil';
import { $Counter } from './store';
import { useEffect, useState } from 'react';

export default function Counter() {
    const [products, setProducts] = useState([]);
    const [counter] = useRecoilState($Counter);
    const { incrment, decrment, fetchProducts } = useCounter();
    useEffect(() => {
        fetchProducts().then(setProducts);
    }, [])
    return (
        <div>
            <button className='btn btn-danger' onClick={decrment}>-</button>
            <h1>Counter Value : {counter}</h1>
            <button className='btn btn-primary' onClick={incrment}>+</button>
        </div>
    )
}
