import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { accounts, vipAccounts, privateAccounts } from "../constants/account";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/features/authSlice";

const basePath =import.meta.env.REACT_APP_BASE_PATH;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Example accounts list

  const handleLogin = async (e) => {
    e.preventDefault();
    // setLoading(true);

    // Check VIP accounts
    const vipUser = vipAccounts.find(
      (acc) => acc.username === username && acc.password === password
    );

    // Check PRIVATE accounts
    const privateUser = privateAccounts.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (vipUser) {
      // Lưu vào localStorage
      localStorage.setItem("username", vipUser.username);
      localStorage.setItem("password", vipUser.password);
      localStorage.setItem("role", "vip");

      dispatch(loginSuccess({ username: vipUser.username, role: "vip" }));
      navigate(`${basePath}/booking`);
      return;
    }

    if (privateUser) {
      // Lưu vào localStorage
      localStorage.setItem("username", privateUser.username);
      localStorage.setItem("password", privateUser.password);
      localStorage.setItem("role", "private");
      
      dispatch(loginSuccess({ username: privateUser.username, role: "private" }));
      navigate(`${basePath}/booking/private`);
      return;
    }

    // Check Normal accounts
    const normalUser = accounts.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (normalUser) {
      // Không lưu localStorage
      localStorage.setItem("role", "normal");
      dispatch(loginSuccess({ username: normalUser.username, role: "normal" }));
      navigate(`${basePath}/booking`);
      
      return;
    }

    alert("Sai tài khoản hoặc mật khẩu");

    // try {
    //   const res = await fetch('/auth/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });

    //   if (!res.ok) {
    //     throw new Error('Login failed');
    //   }

    //   const data = await res.json();

    //   // ✅ tuỳ API trả về, có thể là token hoặc user info
    //   localStorage.setItem('token', data.accessToken || '');
    //   localStorage.setItem('username', username);

    //   navigate(`${basePath}/latienvilla/tmb-vip`);
    // } catch (err) {
    //   alert('Sai tài khoản hoặc mật khẩu');
    //   console.error(err);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <section className="flex items-center justify-center h-screen w-full absolute bg-[url('assets/images/bg_loading.png')] bg-center bg-cover bg-no-repeat">
      <div className="bg-[radial-gradient(circle,_rgba(96,161,21,0.5)_0%,_rgba(6,24,0,0.8)_0%)] w-full h-full absolute z-40"></div>
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80 z-50"
      >
        <h2 className="text-xl text-center font-bold mb-4 text-gradient">
          Đăng nhập
        </h2>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          className="w-full p-2 border mb-3 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full p-2 border mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="relative w-max mx-auto px-5 md:px-10 p-3 cursor-pointer z-10 button-gradient rounded-full border-secondary border-2 overflow-hidden group flex justify-center items-center"
        >
          <p className="text-white font-semibold text-xs md:text-sm uppercase w-full">
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </p>
          <div
            className={`absolute top-0 left-0  bg-[radial-gradient(circle_at_bottom,_rgba(253,231,128,0.1),_rgba(0,0,0,0))] w-full group-hover:h-full
                          `}
          />
          <div
            className={`absolute top-8 left-0 bg-[radial-gradient(circle_closest-side,_rgba(253,231,128,0.2),_rgba(253,231,128,0))] w-full group-hover:h-full `}
          />
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
