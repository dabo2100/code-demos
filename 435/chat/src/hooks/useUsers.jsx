import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useRecoilState } from "recoil";
import { $RefreshIndex } from "../store";

export default function useUsers() {
    const [, setRefreshIndex] = useRecoilState($RefreshIndex);
    const deleteUSer = async (id) => {
        await deleteDoc(doc(db, "users", id));
        setRefreshIndex((prev) => prev + 1);
    }

    async function getAllUsers() {
        let final = [];
        const data = await getDocs(collection(db, "users"));
        data.forEach((doc) => {
            final.push({ id: doc.id, ...doc.data() })
        });
        return final;
    }

    const addNewUser = async (formInputs) => {
        let obj = {
            user_name: formInputs.current[0].value,
            user_age: formInputs.current[1].value,
            is_sub: formInputs.current[2].value
        }
        await addDoc(collection(db, "users"), obj);
        setRefreshIndex((prev) => prev + 1);
    }

    return { deleteUSer, getAllUsers, addNewUser }
}
