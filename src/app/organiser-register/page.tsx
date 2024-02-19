"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function OrganiserRegister() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post("/api/organiserRegister", formData);
    const id = res.data.org.id;
    localStorage.setItem("auction-org-id", id);
    router.push("/addAuction");
  };

  return (
    <div className="max-w-md mx-auto p-4 flex align-center justify-center flex-col gap-5">
      <h1 className="text-center font-bold text-4xl mb-4">
        Register Organiser
      </h1>
      {formSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 mb-4">
          {formSuccessMessage}
        </div>
      ) : (
        <form method="POST" onSubmit={submitForm} className="mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              value={formData.name}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              value={formData.email}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Password
            </label>
            <input
              name="message"
              type="password"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              value={formData.password}
              className="w-full px-3 py-2 border rounded-md"
            ></input>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
}
