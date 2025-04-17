import { useEffect } from "react"
import CreditCard from "../components/CreditCard";

export default function CheckoutPage() {
    useEffect(() => {
        sessionStorage.removeItem('redirect');
    }, []);
    return (
        <div>
            <CreditCard />
            <button>Success Payment</button>
            <button>Failed Payment</button>
        </div>
    )
}
