import React from "react";
import button from "./components/button";
import StudentList from "./components/ui/Studentlist";


function App() {
  const Studentlist=[
    {id:'1',name:'bermet'},
    {id:'2',name:'aidana'},
    {id:'3',name:'meerim'},
    {id:'4',name:'aziz'},
  ]
  return (
    <div>
      <input trye='password'input></input>
      <StudentList stydent={stydentList}/>
    </div>
  )
}
  






export default App
