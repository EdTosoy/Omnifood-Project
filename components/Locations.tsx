import Image from "next/image";
const cities = [
  {
    img: "/images/lisbon-3.jpg",
    name: "Lisbon",
    people: 1600,
    stars: 60,
    twitter: "lx",
  },
  {
    img: "/images/san-francisco.jpg",
    name: "San Francisco",
    people: 3700,
    stars: 160,
    twitter: "sf",
  },
  {
    img: "/images/berlin.jpg",
    name: "Berlin",
    people: 2300,
    stars: 110,
    twitter: "berlin",
  },
  {
    img: "/images/london.jpg",
    name: "London",
    people: 500,
    stars: 60,
    twitter: "london",
  },
];

export default function Locations() {
  return (
    <main
      className="max-h-screen grid grid-cols-10 py-20 text-gray-600 "
      id="cities"
    >
      <header className="col-span-full max-w-2xl mx-auto  mb-16">
        <h1 className="text-4xl font-thin text-center mb-5 uppercase">
          We're curren
          <span className="border-yellow-600 border-b-2 pb-2">tly in</span>
          these cities
        </h1>
      </header>
      <div className="grid grid-cols-4 col-start-2 col-end-10">
        {cities.map(({ img, name, people, stars, twitter }) => (
          <div className="w-96 h-9" key={name}>
            <div className="">
              <Image src={img} width={250} height={180} />
            </div>
            <h1 className="text-2xl font-light mb-3">{name}</h1>
            <div className="">
              <div className="flex gap-3">
                <span>
                  <Image src="/images/person.svg" width="25" height="25" alt="person" />
                </span>
                <p className="text-xl font-thin">{people}+ happy eaters</p>
              </div>
              <div className="flex gap-3">
                <span>
                  <Image src="/images/star.svg" width="25" height="25" alt="stars" />
                </span>
                <p className="text-xl font-thin">{stars}+ top chefs</p>
              </div>
              <div className="flex gap-3 ">
                <span>
                  <Image
                    src="/images/twitterOrange.svg"
                    width="25"
                    height="25"
                    alt="twitter"
                  />
                </span>
                <a
                  className="text-xl font-thin mb-20"
                  href={`http://twitter.com/@omnifood_${twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`@omnifood_${twitter}`}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
