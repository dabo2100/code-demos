
import "./App.css";
import ChangeCounter from "./components/ChangeCounter";
import Modal from "./components/Modal";
import { $counter, globalModalIndex } from "./store";

export default function App() {
    const { modalIndex, openModal } = globalModalIndex();
    const { counter } = $counter();
    return (
        <div className="col-12 App">
            <h1>Counter is : {counter}</h1>
            <ChangeCounter />
            <h1>Hello This is Content</h1>
            <button onClick={openModal}>Open Modal</button>
            {
                modalIndex && (<Modal />)
            }
        </div>
    )
}