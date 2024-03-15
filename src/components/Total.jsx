import React from "react";
import { formatNumber } from "../services/helper";

const Total = ({subtotal, total}) => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 flex flex-col capitalize mb-5">
      <h2 className="mb-4 font-bold">the total amount of</h2>
      <div className=" inline-flex text-sm py-1">
        <p className="basis-3/5">temporary amount</p>
        <p className="basis-2/5 text-right">${formatNumber(subtotal)}</p>
      </div>
      <div className=" inline-flex text-sm pt-1 pb-2">
        <p className="basis-3/5">shipping</p>
        <p className="basis-2/5 text-right">free</p>
      </div>
      <div className=" inline-flex text-sm pt-2 pb-1 border-t">
        <p className="basis-3/5">the total amount of (including VAT)</p>
        <p className="basis-2/5 text-right">${formatNumber(total)}</p>
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-slate-50 rounded p-2 uppercase text-xs mt-5">
        go to checkout
      </button>
    </section>
  );
};

export default Total;
