import { useSelector } from "react-redux";

export default function Header() {
  const display = useSelector((state) => state.display);
  return (
    <header>
      <nav className="flex w-full py-4 h-20 bg-teal-800 px-4">
        <div className="container">
          <h1 className="font-bold text-4xl text-teal-50">
            {display.type !== "start" && "Quiz App"}
          </h1>
        </div>
      </nav>
    </header>
  );
}
