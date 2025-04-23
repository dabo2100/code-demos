import  { useEffect, useRef, useState } from 'react'
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
    const [todos, setTodos] = useState();
    const newTaskInput = useRef();
    const navigate = useNavigate();

    const getAllTodos = async (user_id) => {
        const q = query(collection(db, "todos"), where("user_id", "==", user_id));
        const querySnapshot = await getDocs(q);
        let userTodos = [];
        querySnapshot.forEach((doc) => {
            userTodos.push({ id: doc.id, name: doc.data().name })
        });
        setTodos(userTodos);
    }


    const addNewTask = async (event) => {
        event.preventDefault();
        let name = newTaskInput.current.value;
        let user_id = sessionStorage.getItem('user_id');
        let data = { name, user_id };
        await addDoc(collection(db, "todos"), data);
        getAllTodos(user_id);
    }


    const logOut = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    useEffect(() => {
        let user_id = sessionStorage.getItem('user_id') || navigate('/login');
        getAllTodos(user_id);
    }, []);

    return (
        <div>
            <h1>My Todos</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos?.map((el, index) => (
                            <tr key={el.id} onClick={() => navigate(`edit/${el.id}`)}>
                                <td>{index + 1}</td>
                                <td>{el.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


            <form onSubmit={addNewTask}>
                <input ref={newTaskInput} type="text" className='input' placeholder='Enter New Task Name' />
                <button className='btn btn-primary'>Add New</button>
            </form>
            <button className='btn btn-error' onClick={logOut}>Logout</button>
        </div>
    )
}
