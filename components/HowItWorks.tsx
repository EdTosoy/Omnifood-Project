import Image from "next/image";

const steps = [
  {
    stepNumber: 1,
    text:
      "Choose the subscription plan that best fits your needs and sign up today.",
  },
  {
    stepNumber: 2,
    text:
      "Order your delicious meal using our mobile app or website. Or you can even call us!",
  },
  {
    stepNumber: 3,
    text: "Enjoy your meal after less than 20 minutes. See you the next time!",
  },
];

export default function HowItWorks() {
  return (
    <main className="max-h-screen grid py-20 text-gray-600 bg-gray-100" id="works">
      <header className="col-span-full max-w-2xl mx-auto  mb-16">
        <h1 className="text-4xl font-extralight text-center mb-5 uppercase">      
          How it work
          <span className="border-yellow-600 border-b-2 pb-2">s — Si</span>mple
          as 1, 2, 3
        </h1>
      </header>
      <div className=" grid grid-cols-2 justify-center">
        <div className="text-right">
          <Image src="/images/app-iPhone.png" width={230} height={430} alt="Iphone Apps" />
        </div>
        <div className="flex-col flex justify-center">
          <div className="grid grid-cols-7">
            {steps.map(({ stepNumber, text }) => (
              <>
                <div className="rounded-full border-yellow-600 border-2 w-14 h-14 col-start-1  grid place-content-center text-yellow-600 ml-6 mb-12">
                  <h1 className="text-xl">{stepNumber}</h1>
                </div>
                <p className="col-span-4 text-xl font-thin">{text}</p>
              </>
            ))}
          </div>
          <div className="mt-14 flex">
            <div className="relative w-36 h-14 ml-6">
              <Image src="/images/download-app-android.png" layout="fill" alt="andriod-app" />
            </div>
            <div className="relative w-40 h-14 ml-6">
              <Image src="/images/download-app.svg" layout="fill" alt="IOS app" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
