"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  let org_id;
  let auc_id: string | null;
  let auc_start_time: string | null;
  let auc_end_time: string | null;
  if (typeof window !== "undefined") {
    org_id = localStorage.getItem("auction-org-id");
    auc_id = localStorage.getItem("auc-id");
    auc_start_time = localStorage.getItem("auc-start-time");
    auc_end_time = localStorage.getItem("auc-end-time");
  }
  if (!org_id || org_id === "") {
    router.push("/organiser-login");
  }

  const [formData, setFormData] = useState({
    auc_id: "",
    name: "",
    description: "",
    tag: "",
    base_price: 0,
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const [infoMsg, setInfoMsg] = useState("");

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check for empty submission
    if (
      !formData.name ||
      !formData.description ||
      !formData.tag ||
      !formData.base_price
    ) {
      console.log("Please fill in all required fields");
      return;
    }

    try {
      await axios.post("/api/addItemToAuction", {
        name: formData.name,
        desc: formData.description,
        tag: [formData.tag],
        basePrice: formData.base_price,
        has3dModel: false,
        startTime: auc_start_time,
        endTime: auc_end_time,
        auc_id: auc_id,
      });
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
    setFormData({
      auc_id: "",
      base_price: 0,
      description: "",
      name: "",
      tag: "",
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 flex align-center justify-center flex-col gap-5">
      <h1 className="text-center font-bold text-4xl mb-4">Add Items</h1>
      {formSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 mb-4 rounded-2xl">
          {formSuccessMessage}
        </div>
      ) : (
        <div></div>
      )}
      <form
        method="POST"
        action="/api/addItemToAuction"
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

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Add Item
          </button>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={(e) => {
              setInfoMsg(
                `Auction scheduled successfully from ${new Date(
                  Date.parse(auc_start_time as string)
                ).toLocaleString()} to ${new Date(
                  Date.parse(auc_end_time as string)
                ).toLocaleDateString()}`
              );
            }}
          >
            Submit
          </button>
        </div>
      </form>
      {infoMsg !== "" ? (
        <div className="rounded border border-green-500 text-green-500 p-1 text-center">
          {infoMsg}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Page;
