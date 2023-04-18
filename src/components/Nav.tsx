import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in top-[-490px]}`}
        >
          <li key="jwtparser" className="md:ml-8 text-xl md:my-0 my-7">
            <Link to="/jwt" className="text-gray-800 hover:text-gray-400 duration-500">
              JWT Parser
            </Link>
          </li>

          <li key="jsonformater" className="md:ml-8 text-xl md:my-0 my-7">
            <Link to="/json" className="text-gray-800 hover:text-gray-400 duration-500">
              Json Formater
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
