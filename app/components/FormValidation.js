"use client";

import Link from "next/link";

//import axios from "axios";
import { FaCheck } from "react-icons/fa";

export default function FormValidation({
  member,
  handleChange,
  submitHandler,
  serverResponse,
}) {
  return (
    <div className="w-full max-w-2xl md:max-w-xl mx-auto px-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="border-none bg-blue-50 shadow-lg rounded-xl  p-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <FaCheck className="text-green-500 text-2xl" />
          </div>
          <p className="text-xl font-headline font-bold text-sky-900 sm:text-2xl">
            API Validator
          </p>
        </div>
        <p className="text-muted-foreground mt-4 text-md leading-6">
          Verify api endpoints and services in seconds.
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
             <p className="text-xs text-gray-500 mt-2">
            <span className="text-sky-950">endpoint:</span> https://icbxi96m01.execute-api.eu-west-1.amazonaws.com/prod/sort
          </p>
          </div>
         

          <div className="flex justify-center gap-4 mb-8 mt-4 w-full">
            <button
              type="submit"
              className="flex-1 rounded-2xl h-12 cursor-pointer bg-sky-900 hover:bg-primary/90 w-full max-w-xs text-white font-semibold transition-all shadow-lg shadow-primary/20"
            >
              Validate
            </button>
          </div>
        </form>
        <div className="w-full max-w-lg mx-auto">
          {serverResponse.message && (
            <>
              <div className="flex gap-10">
                <FaCheck
                  className={`text-2xl mb-4 ${serverResponse.status === 200 ? "text-green-500" : "text-transparent"}`}
                />
                <p
                  className={`text-lg font-semibold mb-2 ${serverResponse.status === 200 ? "text-green-700" : "text-red-700"}`}
                >
                  {serverResponse.status === 200
                    ? "Working url"
                    : "Url has an error"}
                </p>
              </div>
              <div className="flex gap-10">
                <FaCheck
                  className={`text-2xl mb-4 ${serverResponse.beginsWithHttp ? "text-green-500" : "text-transparent"}`}
                />
                <p
                  className={`text-lg font-semibold mb-2 ${serverResponse.beginsWithHttp ? "text-green-700" : "text-red-700"}`}
                >
                  {serverResponse.beginsWithHttp
                    ? "Url begins with http(s)://"
                    : "Something went wrong with the url"}
                </p>
              </div>
              <div
                className={`p-4 mt-5  rounded-lg ${serverResponse.status === 200 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
              >
                <p className="font-semibold">{serverResponse.message}</p>
                {serverResponse.body && (
                  <pre className="text-sm mt-2 overflow-auto">
                    {JSON.stringify(serverResponse.body, null, 2)}
                  </pre>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
