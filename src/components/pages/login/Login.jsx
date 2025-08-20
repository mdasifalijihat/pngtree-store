import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../../authContext/AuthContext";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  //
  const { signInUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to
  const validatePassword = (password) => {
    return {
      length: password.length >= 6,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      symbol: /[\W_]/.test(password),
      number: /\d/.test(password),
    };
  };

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const valid = validatePassword(password);
    // const allValid = Object.values(valid).every(Boolean);

    // If any condition is not met, show an alert
    if (!valid.upper) {
      Swal.fire({
        icon: "error",
        title: "Password must include at least one uppercase letter!",
        text: "Please ensure your password contains a capital letter.",
      });
      return;
    }

    if (!valid.lower) {
      Swal.fire({
        icon: "error",
        title: "Password must include at least one lowercase letter!",
        text: "Please ensure your password contains a small letter.",
      });
      return;
    }

    if (!valid.number) {
      Swal.fire({
        icon: "error",
        title: "Password must include at least one number!",
        text: "Please ensure your password contains a number.",
      });
      return;
    }

    if (!valid.symbol) {
      Swal.fire({
        icon: "error",
        title: "Password must include at least one symbol!",
        text: "Please ensure your password contains a special character like !, @, #, etc.",
      });
      return;
    }

    console.log("Login data:", { email, password });

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome! You have been registered successfully.",
        });
        navigate( location?.state || '/') 
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      });
  };

  // Password validation
  const passwordValid = validatePassword(password);
  const isPasswordValid = Object.values(passwordValid).every(Boolean);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className={`w-full px-4 py-2 border rounded-md pr-10 focus:outline-none focus:ring-2 ${
                  isPasswordValid ? "border-gray-300" : "border-red-500"
                }`}
                placeholder="Your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2.5 right-3 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="space-y-4 pt-4">
          <p className="text-center"> Or Sign Up Using </p>
          <SocialLogin></SocialLogin>
          {/* Register link */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
