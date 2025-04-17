import { $counter } from "../store"

export default function ChangeCounter() {
    const { increment, decrmenet } = $counter();
    return (
        <>
            <button onClick={decrmenet}>-</button>
            <button onClick={increment}>+</button>

        </>
    )
}