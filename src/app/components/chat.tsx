"use client";

import { useChat } from "ai/react";

export default function MyComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ul className="flex flex-col items-center justify-center w-full">
        {messages.map((m, index) => (
          <li key={index} className="test-white p-2 my-2 rounded-md">
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="space-x-4">
        <label className="mr-2">
          Ask away...
          <input
            value={input}
            onChange={handleInputChange}
            className="rounded-md text-black shadow-sm p-2 ml-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}
