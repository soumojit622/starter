"use client";
import React from "react";

export default function Form() {
  return (
    <div className="flex flex-col gap-3 bg-white rounded-xl p-5 w-full md:w-[400px]">
      <h1 className="font-semibold">{id ? "Update" : "Create"} Category</h1>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="category-name" className="text-gray-500 text-sm">
            Image <span className="text-red-500">*</span>{" "}
          </label>
        </div>
      </form>
    </div>
  );
}
