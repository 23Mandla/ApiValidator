'use client'

import { useState } from "react";
import FormValidation from "./components/FormValidation";

export default function Home() {
   const [member, setMember] = useState({
    email: "",
    endpoint: "",
  });
  const [serverResponse, setServerResponse] = useState({});

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
        
        const response = await fetch("/api/validate", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(member),
         });

         setServerResponse(await response.json());
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (

      <main className="flex min-h-screen w-full flex-col sm:px-6 py-12 lg:px-8 lg:items-center sm:items-start">
        <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-primary/5 to-transparent -z-10" />
        <div className="w-full max-w-4xl text-center mb-12 space-y-5 ">
          <div className="inline-flex bg-red-100 gap-2 px-3 py-1 rounded-full  border  text-xs font-bold tracking-widest uppercase">
              <p>
                String WebHook sort
              </p>
          </div>
          <p className="text-3xl font-bold tracking-widest sm:text-4xl ">
            API testing <span className="text-sky-900">Hub</span>
          </p>
        </div>
        <FormValidation
          member={member}
          handleChange={handleChange}
          submitHandler={submitHandler}
          serverResponse={serverResponse}
         />
      </main>
  );
}
