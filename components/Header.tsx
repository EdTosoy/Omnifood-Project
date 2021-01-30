import Image from "next/image";

const nav = [
  {
    name: "FOOD DELIVERY",
    id: "features",
  },
  {
    name: "HOW IT WORKS",
    id: "works",
  },
  {
    name: "OUR LOCATIONS",
    id: "cities",
  },
  {
    name: "SIGN UP",
    id: "plans",
  },
];

export default function Header() {
  return (
    <header className="h-screen bg-hero-bg bg-clip-border bg-cover bg-fixed  ">
      <div className="grid grid-cols-10 h-full bg-black bg-opacity-70">
        <nav className="flex justify-between items-center h-36 col-start-2  col-end-10 py-4 ">
          <div className="w-100px">
            <Image
              src={"/images/logo-white.png"}
              width="100px"
              height="100px"
              alt="Logo"
            />
          </div>
          <ul className="flex justify-center gap-8 ">
            {nav.map(({ name, id }) => (
              <li className="text-white text-lg " key={id}>
                <a
                  className="font-thin tracking-wide py-1  border-b-2 border-transparent  hover:border-yellow-600"
                  href={`#${id}`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="col-start-2 con col-end-10  place-content-center">
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
            className="font-ligth text-yellow-600 text-xl rounded-full border-yellow-600 border py-3 px-8 mr-5 hover:bg-yellow-600 hover:text-white"
            href="#"
          >
            Show me more
          </a>
        </div>
      </div>
    </header>
  );
}
