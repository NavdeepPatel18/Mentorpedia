import React from "react";
import { Link } from "react-router-dom";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute === "1"
            ? "absolute w-full bottom-0 ml-4"
            : props.absolute === "2"
            ? "absolute w-full bottom-0"
            : "relative") + " pb-6"
        }
      >
        <div className="mx-auto px-4" style={{ height: "40px" }}>
          <hr className="mb-6 border-b-1 border-blue-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-gray-600 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm font-semibold py-1 text-center md:text-left">
                <Link className="text-gray-600" to="/aboutUs">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
