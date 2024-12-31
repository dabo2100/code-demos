import { useRecoilState } from "recoil";
import { $Cart } from "../store";

export default function useCart() {
    const [cart] = useRecoilState($Cart);
    // const addToCart = () => {
    //     let oCart = [...cart];
    //     oCart.push(4);
    //     setCart(oCart);
    // }
    const removeComponent = () => {
        console.log('Remove from cart logic Done')
    }

    const countCart = () => {
        return cart.length;
    }
    return { removeComponent, countCart }
}
