import "./login.css";
import { Link } from "react-router-dom";
import carroPNG from "./carro.png";

function Login() {
  return (
    <>
      <nav>
        <h1>Pagina de Login</h1>
        <Link to="/index">Ir a index</Link>
      </nav>
      <form>
        <label>Email</label>
        <input type="email"></input>
      </form>
      <img src={carroPNG} alt="" />
    </>
  );
}
export default Login;
