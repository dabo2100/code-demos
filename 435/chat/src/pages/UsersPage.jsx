import { useEffect, useState } from "react"
import { useRecoilState } from "recoil";
import { $ModalIndex, $RefreshIndex } from "../store";
import Modal from "../components/Modal";
import useUsers from "../hooks/useUsers";
import { ToastContainer } from "react-toastify";

export default function UsersPage() {
    const { deleteUSer, getAllUsers } = useUsers();
    const [users, setUsers] = useState([]);
    const [modalIndex, setModalIndex] = useRecoilState($ModalIndex);
    const [refreshIndex] = useRecoilState($RefreshIndex);

    useEffect(() => { getAllUsers().then(setUsers) }, [refreshIndex]);

    return (
        <div className="col-12">
            <ToastContainer />
            {modalIndex && <Modal />}
            <button onClick={() => setModalIndex(true)}>Add NEw User</button>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>-</th>
                        <th>User Name</th>
                        <th>User Age</th>
                        <th>Is Sub</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((el, index) => {
                            return (
                                <tr key={el.id}>
                                    <td>{index + 1}</td>
                                    <td>{el.user_name}</td>
                                    <td>{el.user_age}</td>
                                    <td>{el.is_sub ? "True" : "Not"}</td>
                                    <td><button onClick={() => deleteUSer(el.id)}>delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
