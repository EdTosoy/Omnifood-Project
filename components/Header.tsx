import Image from "next/image";

export default function Header() {
  return (
    <header className="h-screen bg-hero-bg bg-clip-border bg-cover bg-fixed  ">
      <div className="grid grid-cols-10 h-full bg-black bg-opacity-70">
        <nav className="flex justify-between items-center h-36 col-start-2  col-end-10 py-4 ">
          <div>
            <Image
              src={"/images/logo-white.png"}
              width="100px"
              height="100px"
            />
          </div>
          <ul className="flex justify-center gap-8 ">
            <li className="text-white text-lg py-1 border-yellow-600 border-b-2 ">
              <a className="font-thin tracking-wide font-sans" href="#features">
                FOOD DELIVERY
              </a>
            </li>
            <li className="text-white text-lg py-1 border-yellow-600 border-b-2">
              <a className="font-thin tracking-wide font-sans" href="#works">
                HOW IT WORKS
              </a>
            </li>
            <li className="text-white text-lg py-1 border-yellow-600 border-b-2">
              <a className="font-thin tracking-wide font-sans" href="#cities">
                OUR LOCATIONS
              </a>
            </li>
            <li className="text-white text-lg py-1 border-yellow-600 border-b-2">
              <a className="font-thin tracking-wide font-sans" href="#plans">
                SIGN UP
              </a>
            </li>
          </ul>
        </nav>
        <div className="col-start-2 con col-end-8  place-content-center">
          <h1 className="text-6xl text-white font-extralight mb-8 leading-leading-10">
            GOODBYE JUNK FOOD.
            <br />
            HELLO SUPER HEALTHY MEALS.
          </h1>
          <a
            className="font-ligth text-xl text-white rounded-full border-yellow-600 border py-3 px-8 mr-5 bg-yellow-600"
            href="#"
          >
            I'm Hungry
          </a>
          <a
            className="font-ligth text-yellow-600 text-xl rounded-full border-yellow-600 border py-3 px-8 mr-5"
            href="#"
          >
            Show me more
          </a>
        </div>
      </div>
    </header>
  );
}
