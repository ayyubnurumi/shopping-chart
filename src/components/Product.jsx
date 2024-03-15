import React from "react";
import delIcon from "../assets/icon-delete.1e080ddb.svg";
import { formatNumber } from "../services/helper";

const Product = ({item, handleDelete, handleDecrement, handleIncrement}) => {
  return (
    <section
      className="flex justify-between items-center gap-6 py-3 border-t"
    >
      <img
        src={item.image}
        alt="product"
        className="rounded-lg aspect-[9/11] h-32 object-cover"
      />
      <ul className="capitalize grow shrink flex flex-col justify-between items-start self-stretch">
        <li>
          <h3 className="text-lg font-medium">{item.title}</h3>
        </li>
        <li className="mb-1 text-sm">
          <p>{`${item.type} - ${item.color}`}</p>
        </li>
        <li className="inline-flex mt-1 text-sm">
          <p className="w-14">color</p>
          <p>: {item.color}</p>
        </li>
        <li className="inline-flex mb-1 text-sm">
          <p className="w-14">size</p>
          <p>: {item.size}</p>
        </li>
        <li className="inline-flex items-center gap-6 mt-1">
          <button
            className="inline-flex gap-1 items-baseline uppercase opacity-75 hover:opacity-100"
            onClick={() => handleDelete(item.id)}
          >
            <img src={delIcon} alt="delete icon" className="h-4" />
            remove item
          </button>
          <button className="group inline-flex gap-1 items-baseline uppercase opacity-75 hover:opacity-100">
            <span className="text-2xl leading-4 group-hover:text-red-500">
              &hearts;
            </span>{" "}
            move to wishlist
          </button>
        </li>
      </ul>
      <div className="flex flex-col justify-between items-end self-stretch">
        <div className="rounded border border-gray-400 overflow-hidden">
          <button
            className="hover:bg-slate-200 bg-slate-100 disabled:cursor-not-allowed disabled:hover:bg-slate-50 aspect-square w-8"
            onClick={() => handleDecrement(item.id)}
            disabled={item.amount == 0}
          >
            -
          </button>
          <button
            className="bg-slate-100 aspect-[5/3] h-8 border-x border-gray-400"
            disabled
          >
            {item.amount}
          </button>
          <button
            className="hover:bg-slate-200 bg-slate-100 aspect-square w-8"
            onClick={() => handleIncrement(item.id)}
          >
            +
          </button>
        </div>
        <p>${formatNumber(item.price)}</p>
      </div>
    </section>
  );
};

export default Product;
