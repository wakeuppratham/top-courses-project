import React from 'react';

import Card from "./Cards"


const Cards = ({courses}) => {
    let allCourses = [];


    const getCourses = () =>{

        console.log("printing courses");
        console.log(courses);

        Object.values(courses).forEach((courseCategory) =>{
            courseCategory.forEach((course) =>{
                allCourses.push(course);
            })
        })

        return allCourses;
    }



  return (
    <div>

        {!courses ? (
            <div><p>No Data Found</p>
            </div>
        ) : (
            getCourses().map((course) => {
                return  <Card key={course.id} course={course}/>
            }))}


    </div>
  )
}

export default Cards;