    /*eslint-disable*/
import {React,useEffect,useState} from "react";
import { Link } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import SearchIcon from "@material-ui/icons/Search";
import logo from '../image/Logo.png';
// components



export default function Header(props) {

  const [value, setValue] = useState("");

  const String = props.searchString;

  useEffect(() => {
    setValue(String);
  }, [])
  
  function toResult(string){

     props.history.push({  
    pathname: '/result',
    state: string,
    });
  }
  return (
  
    <>
      <nav className="container-fluid px-2 py-3">
      <div className="col-sm-2 row float-left">
        <Link to='/search'>
       <img className="ml-5" src={logo} style={{width:'70%'}}/>
       </Link>
      </div>  
        <div className="col-sm-8 px-4 mx-auto ">
          <div className="col-sm-12 relative flex lg:static lg:block lg:justify-start">
            <Link
              className="text-blue-600 text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              to="/"
            >
              MENTORPEDIA
              
            </Link>
         
          </div>

           <SearchBar
            // style={{fontcolor:'red'}}
            className="col-sm-8 text-red-500"
            placeholder="Search by name,university and technology,"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            onRequestSearch={() => toResult(value) }
            // searchIcon={<SearchIcon className="absolute" style={{ color:'#808'}} />}
          />
          
        </div>
        <hr className="mb-6 border-b-1 border-blue-700" />
      </nav>
    </>
  );
}
