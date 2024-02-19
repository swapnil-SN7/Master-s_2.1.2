"use client";
import React from "react";
import { useState, useEffect } from "react";
const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    tag: "",
    base_price: "",
    has3dMode: "",
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

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
          name: "",
          description: "",
          tag: "",
          base_price: "",
          has3dMode: "",
        });

        setFormSuccess(true);
        setFormSuccessMessage(data.submission_text);
      });
  };
  return (
    <div className="max-w-md mx-auto p-4 flex align-center justify-center flex-col gap-5">
      <h1 className="text-center font-bold text-4xl mb-4">Add Items</h1>
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
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              value={formData.name}
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
              htmlFor="tag"
            >
              Tag
            </label>
            <select
              name="tag"
              onChange={handleInput}
              value={formData.tag}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select Tag</option>
              <option value="Arts">Arts</option>
              <option value="Collectables">Collectables</option>
              {/* Add more options based on your requirements */}
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="base_price"
            >
              Base Price
            </label>
            <input
              type="number"
              name="base_price"
              onChange={handleInput}
              value={formData.base_price}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="has3dMode"
            >
              Has 3D Mode
            </label>
            <select
              name="has3dMode"
              onChange={handleInput}
              value={formData.has3dMode}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select Tag</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Send message
          </button>
        </form>
      )}
    </div>
  );
};

export default Page;
