"use client";
import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";
const Page = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    start_time: "",
    end_time: "",
    org_id: "",
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const org_id = localStorage.getItem("auction-org-id");
  if (!org_id || org_id === "") {
    router.push("/organiser-login");
  }

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };
  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault();

    const formURL = e.target.action;
    const data = new FormData();

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          title: "",
          description: "",
          start_time: "",
          end_time: "",
          org_id: "",
        });

        setFormSuccess(true);
        setFormSuccessMessage(data.submission_text);
      });
  };
  return (
    <div className="max-w-md mx-auto p-4 flex align-center justify-center flex-col gap-5">
      <h1 className="text-center font-bold text-4xl mb-4">Add Auction</h1>
      {formSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 mb-4">
          {formSuccessMessage}
        </div>
      ) : (
        <form
          method="POST"
          action="https://www.formbackend.com/f/664decaabbf1c319"
          onSubmit={submitForm}
          className="mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Auction Title
            </label>
            <input
              type="text"
              name="title"
              onChange={handleInput}
              value={formData.title}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            onChange={handleInput}
            value={formData.email}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div> */}

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              name="description"
              onChange={handleInput}
              value={formData.description}
              className="w-full px-3 py-2 border rounded-md"
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="start_time"
            >
              Start time
            </label>
            <input
              type="datetime-local"
              name="start_time"
              onChange={handleInput}
              value={formData.start_time}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="end_time"
            >
              End time
            </label>
            <input
              type="datetime-local"
              name="end_time"
              onChange={handleInput}
              value={formData.end_time}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="org_id"
            >
              Organisation id
            </label>
            <input
              type="number"
              name="org_id"
              onChange={handleInput}
              value={formData.org_id}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Add Auction
          </button>
        </form>
      )}
    </div>
  );
};

export default Page;
