import React, { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Email is ${email} `);
    console.log(`Password is ${password} `);
    setemail("");
    setpassword("");
  };
  return (
    <div className="flex items-center justify-center">
      <div className="border-2 border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center h-screen w-screen "
        >
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            className=" border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-black outline-none bg-transparent placeholder:text-red "
            type="email"
            placeholder="Enter your Email.."
          />

          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-black outline-none bg-transparent placeholder:text-red mt-3 "
            type="password"
            placeholder="Enter your Password.."
          />
          <button className=" mt-5 border-2 bg-emerald-600 rounded-full py-3 px-5 text-xl text-black outline-none  ">
            Login In{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
