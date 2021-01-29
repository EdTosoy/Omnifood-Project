import Image from "next/image";

const plans = [
  {
    name: "premium",
    price: "399",
    info: "That's only $13.30 per meal",
    meals: "1 meal every day",
    order: "Order 24/7",
    access: "Access to newest creations",
    delivery: "Free delivery",
  },
  {
    name: "pro",
    price: "199",
    info: "That's only $14.90 per meal",
    meals: "1 meal 10 days/month",
    order: "Order 24/7",
    access: "Access to newest creations",
    delivery: "Free delivery",
  },
  {
    name: "starter",
    price: "19",
    info: " `",
    meals: "1 meal",
    order: "Order 24/7",
    access: " ",
    delivery: "Free delivery",
  },
];
export default function Plans() {
  return (
    <main
      className="max-h-screen grid grid-cols-10 py-20 text-gray-600 bg-gray-100 "
      id="plans"
    >
      <header className="col-span-full max-w-2xl mx-auto ">
        <h1 className="text-4xl font-thin text-center mb-5 uppercase">
          Start eatin
          <span className="border-yellow-600 border-b-2 pb-2">g hea</span>lthy
          today
        </h1>
      </header>
      <div className="grid grid-cols-3 col-start-2 col-end-10  ">
        {plans.map(({ name, price, info, meals, order, access, delivery }) => (
          <div className=" border m-8 bg-white rounded-br-lg rounded-bl-lg overflow-hidden shadow-md">
            <div className="border-b border-yellow-600 p-4">
              <p className="uppercase text-xl font-thin">{name}</p>
              <p className="text-yellow-600 text-6xl font-thin">
                ${price} <span className="text-2xl font-thin">/ month</span>
              </p>
              <i className="text-sm font-light">{info}</i>
            </div>
            <div className="p-4 border-b border-yellow-600 font-thin text-xl">
              <div className="flex ">
                <div className="text-yellow-600 mr-3">[]</div>
                <p>{meals}</p>
              </div>
              <div className="flex">
                <div className="text-yellow-600 mr-3">[]</div>
                <p>{order}</p>
              </div>
              <div className="flex">
                <div className="text-yellow-600 mr-3">[]</div>
                <p>{access}</p>
              </div>
              <div className="flex">
                <div className="text-yellow-600 mr-3">[]</div>
                <p>{delivery}</p>
              </div>
            </div>
            <div className="p-5 text-yellow-600 text-xl grid place-content-center mb-4">
              <button
                className={
                  name === "premium"
                    ? " bg-yellow-600 text-white font-thin text-xl border border-yellow-600 rounded-full py-2 px-8"
                    : "font-thin text-xl border border-yellow-600 rounded-full py-2 px-8"
                }
              >
                Sign Up now
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
