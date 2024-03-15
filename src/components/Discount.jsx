import React from "react";

export const Discount = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 flex flex-col capitalize mb-5">
      <button className="text-xs inline-flex items-center justify-between gap-5">
        <p className=" font-semibold text-left">
          Add a discount code (optional)
        </p>
        <p className="text-right">&#128184;</p>
      </button>
    </section>
  );
};
