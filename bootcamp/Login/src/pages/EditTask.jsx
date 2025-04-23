import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where, documentId } from "firebase/firestore";
import { db } from "../firebase";

export default function EditTask() {
    const params = useParams();

    const getTaskDetails = async (task_id) => {
        const q = query(collection(db, "todos"), where(documentId(), "==", task_id));
        const querySnapshot = await getDocs(q);
        let data = {};
        querySnapshot.forEach((doc) => {
            data = { id: doc.id, name: doc.data().name }
        });
        console.log(data);
    }
    useEffect(() => {
        getTaskDetails(params.taskId);
    }, []);
    return (
        <div></div>
    )
}
