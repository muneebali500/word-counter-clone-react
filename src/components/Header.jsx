import { Link } from "react-router-dom";

export default function Header() {
  const wordStyle = "text-2xl font-bold text-white px-2 rounded-md sm:text-4xl";
  const counterStyle =
    "font-bold text-white px-1 rounded-md sm:text-sm sm:px-2";
  const navBtnStyle =
    "px-2 py-2 rounded border text-white hover:bg-blue-700 sm:px-6 outline-none";

  return (
    <header className="py-3 px-2 bg-indigo-500 flex items-center justify-between md:px-5 lg:px-20">
      <div>
        <h2>
          <span className={`${wordStyle} bg-indigo-700`}>W</span>
          <span className={`${wordStyle} bg-indigo-700`}>O</span>
          <span className={`${wordStyle} bg-indigo-700`}>R</span>
          <span className={`${wordStyle} bg-indigo-700`}>D</span>
        </h2>
        <h4 className="text-center">
          <span className={`${counterStyle} bg-indigo-700`}>C</span>
          <span className={`${counterStyle} bg-indigo-700`}>O</span>
          <span className={`${counterStyle} bg-indigo-700`}>U</span>
          <span className={`${counterStyle} bg-indigo-700`}>N</span>
          <span className={`${counterStyle} bg-indigo-700`}>T</span>
          <span className={`${counterStyle} bg-indigo-700`}>E</span>
          <span className={`${counterStyle} bg-indigo-700`}>R</span>
        </h4>
      </div>
      <nav>
        <Link to="/" className={navBtnStyle}>
          Home
        </Link>
        <Link to="/contact" className={`${navBtnStyle} ml-4`}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
