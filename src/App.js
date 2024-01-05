import React from "react";
import { filterData , apiUrl } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {toast} from "react-toastify"
import { useState } from "react";
import { useEffect } from "react";


const App = ()=> {

  const [courses,setCourses] = useState(null);

    useEffect(()=>{

      const fetchData = async()=>{
        try{
          const res = await fetch(apiUrl);
          const output = await res.json();

          setCourses(output.data);

          console.log("course value updated");
          console.log(courses);
        }
        catch(error){
          toast.error("Something went wrong")
        }
      }
      fetchData();
    },[]);

  return (
    <div>
      <Navbar/>

      <Filter filterData={filterData}/>

      <Cards courses={courses}/>
    </div>
  );
}

export default App;
