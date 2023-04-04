import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Form = ({ isSignInPage = true }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });

  console.log(data);
  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center ">
      <div className="text-4xl font-serif font-extrabold">
        Welcome {isSignInPage && `Back`}
      </div>
      <div className="text-xl font-light mt-2 mb-12">
        {isSignInPage
          ? " Sign in to get started "
          : " Sign up now to get started. "}
      </div>
      <form
        className="flex flex-col items-center w-full"
        onSubmit={() => console.log("submit")}
      >
        {!isSignInPage && (
          <Input
            label="Full name"
            name="name"
            placeholder="Enter your full name"
            className="mb-6"
            value={data.fullName}
            onChange={(e) => {
              setData({ ...data, fullName: e.target.value });
            }}
          />
        )}
        <Input
          label="Email address"
          name="email"
          placeholder="Enter your Email"
          className="mb-6"
          type="email"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          className="mb-6"
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <Button
          label={isSignInPage ? "Sign in" : "Sign up"}
          className="w-[25%] mt-4 "
          type="submit"
        />
      </form>

      <div>
        {isSignInPage ? "Don't have an account? " : "Already have an account?"}
        <span className="text-primary cursor-pointer underline">
          {isSignInPage ? "Sign up" : " Sign in"}
        </span>
      </div>
    </div>
  );
};

export default Form;
