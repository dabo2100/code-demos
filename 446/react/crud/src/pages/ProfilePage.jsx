import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("currentUser"));
  const handleLogOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  return (
    <div>
      Welcome {userInfo.name}
      <button onClick={handleLogOut} className="btn btn-danger">
        Log Out
      </button>
    </div>
  );
}
