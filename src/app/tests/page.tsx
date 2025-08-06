"use client";

import Input from "@/components/share/Input";
import React, { useState } from "react";

const TestPage = () => {
  const [name, setname] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <React.Fragment>
      <main className="w-full h-screen flex justify-center items-center">
        {name.firstName}
        {name.lastName}
        <form
          action=""
          className="w-[400px] py-9  px-4 flex flex-col gap-4 justify-center items-center"
        >
          <div className="flex-1 w-full">
            <Input
              label="first name"
              type="text"
              value={name.firstName}
              action={(e: Event) =>
                setname((prev) => ({ ...prev, firstName: e.target!.value }))
              }
            />
          </div>

          <div className="flex-1 w-full">
            <Input
              label="last name"
              type="text"
              value={name.lastName}
              action={(e: Event) =>
                setname((prev) => ({ ...prev, lastName: e.target!.value }))
              }
            />
          </div>
        </form>
      </main>
    </React.Fragment>
  );
};

export default TestPage;
