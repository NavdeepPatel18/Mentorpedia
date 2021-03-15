import React from "react";
import Container from "react-bootstrap/Container"

export default function FooterSmall(props) {
  const container = {
    padding: '10px 20px',
    margin: '-200px 0px 0px 0px',
    position: 'relative',
  };

  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-gray-900"
            : "relative") + " pb-6"
        }

        style={container}
      >
        <Container fluid > 
          <hr className="mb-6 border-b-1 border-gray-700" />
              <div className="text-sm text-black-600 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.charusat.ac.in/"
                  className="text-black hover:text-gray-400 text-sm font-semibold py-1"
                >
                  Charusat
                </a>
              </div>
        </Container>
      </footer>
    </>
  );
}
