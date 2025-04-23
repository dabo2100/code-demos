import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where, documentId } from "firebase/firestore";
import { db } from "../firebase";

export default function RegisterDoctors() {
    const navigate = useNavigate()
    const checkIsSuper = async (user_id) => {
        const q = query(collection(db, "supers"), where('user_id', "==", user_id));
        const querySnapshot = await getDocs(q);
        let isHere = querySnapshot.docs.length
        isHere == 0 && navigate('/profile');
    }

    useEffect(() => {
        let user_id = sessionStorage.getItem('user_id');
        checkIsSuper(user_id);
    }, []);
    return (
        <div>This is Super User</div>
    )
}
