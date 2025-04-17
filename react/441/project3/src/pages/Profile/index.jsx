import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
    const [isLoged, setIsLoged] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token && token == 1234) {
            setIsLoged(true);
        } else {
            navigate('/login');
        }
    }, []);
    return (
        isLoged ? (
            <div className="col-12 profilePage">
                <h1>Profile Page From Page</h1>
                <button className="btn btn-danger" onClick={() => {
                    localStorage.clear();
                    navigate('/login');
                }}>Log Out</button>
            </div>
        ) : null
    )
}