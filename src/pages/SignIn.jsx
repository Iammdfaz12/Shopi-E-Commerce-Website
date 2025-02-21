import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/FirebaseConfig";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userName = user.displayName;
      navigate("/", { state: { name: userName } });
    } catch (error) {
      const errorCode = error.code;

      if (errorCode === "auth/invalid-credential") {
        setErrorMessage(
          "Enterd email or password is wrong! Please check the credentials."
        );
      } else if (errorCode === "auth/user-not-found") {
        setErrorMessage(
          "No account found with this email. Please sign up first."
        );
        setTimeout(() => {
          navigate("/signup");
        }, 3000);
      } else {
        console.error("Login error:", error.message);
        setErrorMessage(
          "An error occurred during login. Please try again later."
        );
      }
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      }
    });
  });
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-center text-2xl text-gray-900 font-bold">
            Shopi
          </h1>
          <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  onChange={(event) => setEmail(event.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <p className="font-semibold underline cursor-pointer text-gray-900 hover:text-gray-600">
                    Forgot password?
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-600 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            {errorMessage && (
              <span className="text-red-600 w-full inline-block text-center text-[12px] font-medium p-0 m-0">
                {errorMessage}
              </span>
            )}
          </div>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Don't have an account?{" "}
            <span className="font-semibold cursor-pointer text-indigo-600 hover:text-indigo-500">
              <Link to={"/signup"}>Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
