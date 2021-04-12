import data from '../Data/data.json';
import Card from './card';
import Header from './Header'
import Footer from './Footer'
function Result(props) {

  const { state } = props.location;

  return (
    <div className="w-full h-auto">
      <Header searchString={state}/>
      
      <div>
        {data.map((name,index) => {
          return <Card data={name} key={index}/>
        })}
      </div>
      <Footer/>
    </div>
  );
}

export default Result;
