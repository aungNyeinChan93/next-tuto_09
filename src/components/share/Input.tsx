"use client";

import React from "react";

interface InputProps {
  label: string | undefined;
  type?: string | undefined;
  value?: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action?: any;
}

const Input = ({ label, type = "text", value, action }: InputProps) => {
  return (
    <React.Fragment>
      <main>
        <div className="w-full max-w-xs p-5 bg-white rounded-lg font-mono">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={label}
          >
            {label ?? "Your Label"}
          </label>
          <input
            className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            placeholder="Enter text here"
            type={type}
            id={label}
            defaultValue={value}
            onChange={action}
          />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Input;
