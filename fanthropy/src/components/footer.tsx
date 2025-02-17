import { Link } from "react-router";

export const Footer = () => {
  return (
    <>
      <div className="bg-primary pt-12">
        <div className="w-full h-fit min-h-32 p-4 flex text-text flex-row justify-evenly items-start">
          <div>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
            </ul>
          </div>
          <div>SOCIALS / HOURS</div>
        </div>
        <div className="w-full flex flex-row justify-center items-center p-4">
          {" "}
          © 4Front 2025
        </div>
      </div>
    </>
  );
};
