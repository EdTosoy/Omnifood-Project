const others = ["About Us", "Blog", "Press", "iOS App", "Andriod App"];
const social = ["About Us", "Blog", "Press", "iOS App", "Andriod App"];
export default function Footer() {
  return (
    <footer>
      <div className="flex">
        {others.map((link) => {
          <div className="">{link}</div>;
        })}
        {social.map((link) => {
          <div className="">{link}</div>;
        })}
      </div>
    </footer>
  );
}
