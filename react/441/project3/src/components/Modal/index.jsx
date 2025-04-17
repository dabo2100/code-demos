import {globalModalIndex} from "../../store"
export default function Modal() {
    const { closeModal } = globalModalIndex()
    return (
        <div onClick={closeModal} className="col-12 myModal h-100 d-flex align-items-center justify-content-center">
            <form onClick={(e) => { e.stopPropagation() }} className="bg-white shadow rounded p-3">
                <h1>Modal Content</h1>
            </form>
        </div>
    )
}