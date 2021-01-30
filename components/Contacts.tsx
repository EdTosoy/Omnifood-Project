export default function Contact() {
  return (
    <main className=" max-h-screen grid  py-20 text-gray-600 ">
      <header className="col-span-full max-w-4xl mx-auto  mb-16">
        <h1 className=" text-4xl font-extralight text-center mb-5 uppercase">
          We're happy
          <span className="border-yellow-600 border-b-2 pb-2"> to he</span>
          ar from you
        </h1>
      </header>
      <form action="" className="mx-auto max-w-4xl grid grid-cols-3 gap-3 ">
        <label className="col-start-1 mb-2" htmlFor="name">
          Name
        </label>
        <input
          className=" col-span-2 p-2 text-yellow-600 text-lg font-thin border border-gray-600 rounded-sm focus:border-b-2 focus:border-yellow-600"
          type="text"
          name="name"
          id="name"
        />
        <label className="col-start-1 mb-2" htmlFor="email">
          Email
        </label>
        <input
          className=" col-span-2 p-2 text-yellow-600 text-lg font-thin border border-gray-600 rounded-sm focus:border-b-2 focus:border-yellow-600"
          type="email"
          name="email"
          id="email"
        />

        <label className="col-start-1 mb-2" htmlFor="find-us">
          How did you find us?
        </label>

        <div className="">
          <select name="find-us" id="find-us">
            <option value="Friends" defaultValue="true">
              Friends
            </option>
            <option value="search-engine">Search Engine</option>
            <option value="advertisement">Advertisement</option>
            <option value="other">Other</option>
          </select>
        </div>
        <label className="col-start-1 mb-2" htmlFor="news">
          News Letter
        </label>
        <div className="">
          <input type="checkbox" name="news" id="news" defaultChecked={true} />
          Yes please!
        </div>
        <label className="col-start-1 mb-2" htmlFor="message">
          Drop Us a line
        </label>
        <textarea
          className=" col-span-2 p-2 text-yellow-600 text-lg font-thin border border-gray-600  rounded-sm focus:border-b-2 focus:border-yellow-600"
          name="message"
          id="message"
          placeholder="Your Message"
        ></textarea>
        <label className="col-start-1 mb-2">&nbsp;</label>
        <button
          type="submit"
          className=" border border-yellow-600 rounded-full text-white bg-yellow-600 mt-2 py-2"
        >
          Send It!
        </button>
      </form>
    </main>
  );
}
