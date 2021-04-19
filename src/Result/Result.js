import data from "../Data/IIT-CSE.json";
import Card from "./card";
import Header from "./Header";
import Footer from "./Footer";
// import bg from "../image/bg2.jpg";

function Result(props) {
  const { state } = props.location;

  return (
    <div className="w-full h-auto">
      <Header searchString={state} />
      <hr style={{ height: "10px" }} className=" border-blue-700" />
      <div
        style={{
          padding: "7px",
          // backgroundColor: "rgba(54, 102, 151)",
          // backgroundImage: "url(" + bg + ")",
          // backgroundSize: "100%",
        }}
      >
        {data.map((name, index) => {
          return <Card data={name} key={index} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Result;
