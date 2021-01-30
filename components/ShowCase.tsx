import Image from "next/image";

const imagesNumber = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ShowCase() {
  return (
    <main className="grid grid-cols-4  h-600px bg-black">
      {imagesNumber.map((number) => (
        <div className="overflow-hidden" key={number}>
          <div className="h-64 w-full relative opacity-70 transform scale-110 hover:opacity-100 hover:scale-100 transition-all duration-200 ease-linear">
            <Image src={`/images/${number}.jpg`} layout="fill" />
          </div>
        </div>
      ))}
    </main>
  );
}
