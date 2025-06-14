import LoginForm from "../../components/Login/LoginForm";
import LoignSlider from "../../components/Login/LoignSlider";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div
      id="LoginPage"
      className="h-100 w-100 d-flex flex-wrap overflow-auto"
    >
      <LoignSlider />
      <LoginForm />
    </div>
  );
}
