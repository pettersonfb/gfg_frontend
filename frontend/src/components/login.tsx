import { useState } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { username, password });
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
    } catch (error) {
      alert("Login failed!" + error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div className="p-field">
        <label htmlFor="username">Username</label>
        <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="p-field">
        <label htmlFor="password">Password</label>
        <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} />
      </div>
      <Button label="Login" onClick={handleLogin} />
    </div>
  );
};

export default Login;