import Button from "components/Button/Button";
import Toast from "components/Toast/Toast";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isloading, setIsloading] = useState(false);

  const [data, setData] = useState({
    email: "admin@gmail.com",
    password: "admin",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    if (!data.email || !data.password) {
      return Toast.warning("Please enter all fields");
    }
    setIsloading(true);
    try {
      // const response = await userLoginApi(data);
      // dispatch(loginUser(response.data));
      setTimeout(() => {
        Toast.success("User Login!");
        setIsloading(false);
        navigate("/");
      }, 2000);
    } catch (error) {
      // Toast.error(`${error.response.data.message}`);
      setIsloading(false);
      console.error(error);
    }
  };

  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-8 px-8 rounded-xl">
        <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
        <div className="mt-6">
          <div className="my-5 text-sm">
            <label htmlFor="username" className="block text-black">
              Username
            </label>
            <input
              type="text"
              autoFocus
              name="email"
              value={data.email}
              onChange={handleChange}
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Username"
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Password"
            />
            <div className="flex justify-end mt-2 text-xs text-gray-600">
              <Link to="/forgot-password">Forget Password?</Link>  {/* Update the link */}
            </div>
          </div>
          <Button
            backgroundColor="gray"
            title="Login"
            disabled={isloading}
            loading={isloading}
            onClick={handleLogin}
          />
        </div>

        <div className="flex md:justify-between justify-center items-center mt-10">
          <div className="bg-gray-300 md:block hidden w-4/12"></div>
          <p className="md:mx-2 text-sm font-light text-gray-400">
            Login With Social{" "}
          </p>
          <div className="bg-gray-300 md:block hidden w-4/12"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-2 mt-7">
          <div>
            <button className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">
              Facebook
            </button>
          </div>
          <div>
            <button className="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">
              Twitter
            </button>
          </div>
        </div>
        <p className="mt-12 text-xs text-center font-light text-gray-400">
          Don't have an account?
          <Link to="/register" className="text-black font-medium ml-2">
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
