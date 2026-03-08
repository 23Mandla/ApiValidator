"use client";

import Link from "next/link";
import { useState } from "react";
//import axios from "axios";
import { FaCheck } from "react-icons/fa";

export default function FormValidation() {
  const [member, setMember] = useState({
    email: "",
    endpoint: "",
  });
  const [serverResponse, setServerResponse] = useState("");

  const handleChange = (evt) => {
    setMember((member) => ({
      ...member,
      [evt.target.name]: evt.target.value,
    }));
  };

  async function submitHandler(evt) {
    evt.preventDefault();
    try {
      if (member.endpoint === "" || member.email === "") {
        return setServerResponse("Email and endpoint are required!");
      } else {
        //used the fetch method, easier to handle error messages from the server
        console.log(member);
        // const response = await fetch("http://localhost:3000/api/users/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(member),
        // });

        /*const response = await axios.post(
        "http://localhost:3000/api/users/login",
        member
      );*/

        // const result = await response.json();
        // if (response.status === 200) {
        //   router.push("/profile");
        //   ctx.onLogIn();
        // } else {
        //   setServerResponse(result.message);
        // }
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
    }
  }

  return (
    <div className="w-full max-w-2xl md:max-w-xl mx-auto px-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="border-none bg-blue-50 shadow-lg rounded-xl  p-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <FaCheck className="text-green-500 text-2xl" />
          </div>
          <p className="text-3xl font-headline font-bold text-sky-900">
            API Validator
          </p>
        </div>
        <p className="text-muted-foreground mt-4 text-md leading-6">
          Verify your service api and security endpoints in seconds.
        </p>
        <form
          onSubmit={submitHandler}
          className="w-full space-y-8 py-6 relative"
        >
          <div className="mb-5 w-full">
            <label htmlFor="email" className="block text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={member.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              className="bg-transparent border-2 border-gray-400 px-4 py-2 rounded-lg w-full max-w-lg"
            />
          </div>

          <div className="mb-8 w-full">
            <label htmlFor="endpoint" className="block text-lg mb-2">
              Endpoint URL
            </label>
            <input
              type="text"
              id="endpoint"
              name="endpoint"
              value={member.endpoint}
              onChange={handleChange}
              placeholder="https://api.example.com/v1/health"
              className="bg-transparent border-2 border-gray-400 px-4 py-2 rounded-lg w-full max-w-lg"
            />
          </div>

          <div className="flex justify-center gap-4 mb-8 mt-4 w-full">
            <button type="submit" 
                  className="flex-1 rounded-2xl h-12 cursor-pointer bg-sky-900 hover:bg-primary/90 w-full max-w-xs text-white font-semibold transition-all shadow-lg shadow-primary/20"
                >
              Validate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
