import { useRecoilState } from "recoil";
import styles from "./Modal.module.css";
import { $ModalIndex } from "../store";
import useUsers from "../hooks/useUsers";
import { useRef } from "react";
import { toast } from "react-toastify";
export default function Modal() {
    const notify = () => toast('User Added Succssufully !');
    const [, setModalIndex] = useRecoilState($ModalIndex);
    const { addNewUser } = useUsers();
    const formInputs = useRef([]);
    const handleSumbit = (e) => {
        e.preventDefault();
        addNewUser(formInputs).then(() => { setModalIndex(false); notify() })
    }

    return (
        <div className={`col-12`} id={styles.Modal} onClick={() => setModalIndex(false)}>
            <form className={styles.content} onClick={(event) => { event.stopPropagation() }}>

                <input ref={(el) => { formInputs.current[0] = el }} type="text" placeholder="User Name" />
                <input ref={(el) => { formInputs.current[1] = el }} type="text" placeholder="User Age" />
                <select ref={(el) => { formInputs.current[2] = el }}>
                    <option value="-1" hidden disabled>Choose Is Sub</option>
                    <option value="true">Yes</option>
                    <option value="flase">No</option>
                </select>
                <button className="btn btn-success" onClick={handleSumbit}>Add New</button>
            </form>
        </div>
    )
}
