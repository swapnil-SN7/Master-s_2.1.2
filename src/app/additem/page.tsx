"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const org_id = localStorage.getItem("auction-org-id");
  if (!org_id || org_id === "") {
    router.push("/organiser-login");
  }

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    tag: "",
    base_price: "",
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

  const submitForm = async (e) => {
    e.preventDefault();

    // Check for empty submission
    if (
      !formData.name ||
      !formData.description ||
      !formData.tag ||
      !formData.base_price
    ) {
      // toast.error("Please fill in all required fields.");
      console.log("Please fill in all required fields");
      return;
    }

    // axios.post("/api/addItemToAuction", formData, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => {
    //     setFormData({
    //       name: "",
    //       description: "",
    //       tag: "",
    //       base_price: "",
    //     });

    //     // toast.success('Item added successfully!');
    //
    //   })
    //   .catch((error) => {
    //     console.error('Error submitting form:', error);
    //     // toast.error("Item can't be added.");
    //   });
    try {
      await axios.post("/api/addItemToAuction", formData);
      // router.replace("/issues/new");
      setFormSuccess(true);
      console.log("Form submitted succesfully");
      setFormSuccessMessage("Item added successfully");

      // setFormSuccessMessage(response.data.submission_text);

      // setsubmitting(false);
    } catch (error) {
      // setsubmitting(false);
      console.log("AN unexpected error occured");
      // setError("An unexpected error occured");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 flex align-center justify-center flex-col gap-5">
      <h1 className="text-center font-bold text-4xl mb-4">Add Items</h1>
      {formSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 mb-4 rounded-2xl">
          {formSuccessMessage}
        </div>
      ) : (
        <form
          method="POST"
          action="http://localhost:3000/api/addItemToAuction"
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

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Add Item
          </button>
        </form>
      )}
    </div>
  );
};

export default Page;
