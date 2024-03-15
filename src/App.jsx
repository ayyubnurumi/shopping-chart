import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementAmount,
  incrementAmount,
  removeItem,
} from "./services/dataSlice";
import { Discount } from "./components/Discount";
import Total from "./components/Total";
import Product from "./components/Product";

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data.items);

  const handleIncrement = (id) => {
    dispatch(incrementAmount({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementAmount({ id }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem({ id }));
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  const vat = subtotal * 0.15;

  const totalPriceWithVat = subtotal + vat;

  return (
    <>
      <header className="bg-slate-100 h-24 w-full flex justify-center items-center">
        <h1 className="text-gray-700 capitalize text-2xl font-bold">
          Shopping Chart
        </h1>
      </header>
      <main className="text-gray-700 bg-slate-50 min-h-[calc(100vh-6rem)] w-full px-11 py-10 flex justify-between items-start gap-6">
        <article className="shrink grow basis-3/4 bg-white rounded-xl roun shadow-md p-6 flex flex-col">
          <h2 className="capitalize text-xl font-medium mb-5">{`chart (${
            items.length
          } ${items.length < 2 ? "item" : "items"})`}</h2>
          {items &&
            items.map((item) => {
              return (
                <Product
                  key={item.id}
                  item={item}
                  handleDelete={handleDelete}
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                />
              );
            })}
        </article>
        <aside className="shrink grow basis-1/4">
          <Total subtotal={subtotal} total={totalPriceWithVat} />
          <Discount />
        </aside>
      </main>
    </>
  );
}

export default App;
