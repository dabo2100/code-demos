import { useRecoilState } from 'recoil';
import { $Counter } from '../store';
import axios from 'axios';

export default function useCounter() {
    const [counter, setCounter] = useRecoilState($Counter);
    // Apis
    const fetchProducts = async () => {
        let final = [];
        await axios.get("https://fakestoreapi.com/products").then((res) => {
            final = res.data;
        })
        return final;
    }
    // Logic
    const incrment = () => { setCounter(counter + 1) }
    const decrment = () => { setCounter(counter - 1) }

    const sayHello = () => {
        alert('Hello Ahmed')
    }

    return { incrment, decrment, sayHello, fetchProducts }
}
