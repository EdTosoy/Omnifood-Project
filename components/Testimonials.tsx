import Image from "next/image";
const testimonials = [
  {
    img: "/images/customer-1.jpg",
    name: "Alberto Duncan",
    text:
      "Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals! ",
  },
  {
    img: "/images/customer-2.jpg",
    name: "Joana Silva",
    text:
      "Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. My family is so in love! ",
  },
  {
    img: "/images/customer-3.jpg",
    name: "Milton Chapman",
    text:
      "I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work! ",
  },
];

export default function Testimonials() {
  return (
    <div className=" max-h-screen   mt-72  text-gray-600  bg-testimonial-bg bg-center relative   bg-clip-border bg-cover bg-fixed  ">
      <main
        className="bg-black py-20 bg-opacity-70 grid grid-cols-10 "
        id="cities"
      >
        <header className="text-white col-span-full max-w-4xl mx-auto  mb-16">
          <h1 className=" text-4xl font-thin text-center mb-5 uppercase">
            Our customers
            <span className="border-yellow-600 border-b-2 pb-2"> can't </span>
            live without u
          </h1>
        </header>
        <div className="grid grid-cols-3 col-start-2 col-end-10 text-white ">
          {testimonials.map(({ img, name, text }) => (
            <div className="px-5">
              <q className="text-xl font-thin font-300">{text}</q>
              <div className="flex items-center my-5">
                <div className="rounded-full  relative overflow-hidden w-12 h-12 mr-5">
                  <Image src={img} layout="fill" />
                </div>
                <cite className="font-thin">- {name}</cite>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
