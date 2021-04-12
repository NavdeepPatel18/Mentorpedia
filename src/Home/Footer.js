import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 "
            : "relative") + " pb-6"
        }
      >
        <div className="mx-auto px-4" style={{height:'40px'}}>
          <hr className="mb-6 border-b-1 border-blue-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
            <div className="text-sm text-gray-600 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <span className="text-gray-600 text-sm mr-4 font-semibold block py-1 px-3">
                    About Us
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
