import Image from "next/image";
const features = [
  {
    icon: "/images/infinite.svg",
    name: "Up to 365 days/year",
    text:
      "Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style. ",
  },
  {
    icon: "/images/stopWatch.svg",
    name: "Ready in 20 minutes",
    text:
      "You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy. ",
  },
  {
    icon: "/images/nutrition.svg",
    name: "100% organic",
    text:
      " cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style. ",
  },
  {
    icon: "/images/cart.svg ",
    name: "Order anything",
    text:
      "We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you! ",
  },
];
interface features {
  icon: string;
  name: string;
  text: string;
}

export default function Features() {
  return (
    <main className="max-h-screen grid grid-cols-10 my-20 text-gray-600" id="features">
      <header className="col-span-full max-w-2xl mx-auto  mb-24">
        <h1 className="text-4xl font-thin text-center mb-5 uppercase">
          Get food fas<span className="border-yellow-600 border-b-2 pb-2">t — n</span>ot fast food.
        </h1>
        <p>
          Hello, we're Omnifood, your new premium food delivery service. We know
          you're always busy. No time for cooking. So let us take care of that,
          we're really good at it, we promise!
        </p>
      </header>
      <div className="grid grid-cols-4 col-start-2 col-end-10">
        {features.map(({ icon, name, text }: features) => (
          <div className=" px-6">
            <Image src={icon} width="70px" height="70px" />
            <h1 className="text-2xl uppercase font-thin mb-3">{name}</h1>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
