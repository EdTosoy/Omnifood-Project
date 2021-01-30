import Image from "next/image";
export default function Footer() {
  const others = ["About Us", "Blog", "Press", "iOS App", "Andriod App"];
  const social = [
    "/images/facebook.svg",
    "/images/twitter.svg",
    "/images/google.svg",
    "/images/github.svg",
  ];
  return (
    <footer className="max-h-screen grid grid-cols-10 bg-gray-600 py-16 text-gray-200">
      <div className="flex items-center col-start-2 col-end-6 gap-5">
        {others.map((element) => (
          <div className="text-lg font-thin cursor-pointer" key={element}>{element}</div>
        ))} 
      </div>
      <div className=" flex col-start-7 col-end-10 gap-3 justify-end">
        {social.map((link) => (
          <div className="cursor-pointer" key={link}>
            <Image src={link} width={32} height={32} alt={link} />
          </div>
        ))}
      </div>
      <p className="col-start-1 col-span-full text-center mt-10 font-thin">copyright © 2015 by Omnifood. All rights reserved.</p>
    </footer>
  );
}
