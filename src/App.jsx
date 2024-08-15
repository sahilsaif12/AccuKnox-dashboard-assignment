import React, { useEffect, useState } from 'react';
import Dashboard from './Components/Dashboard';
import dashboardData from './assets/dashboardData.json'; 
import Drawer from './Components/Drawer.jsx';
function App() {
  const [show, setshow] = useState(false)
  const [data, setdata] = useState(dashboardData)
  const [category, setcategory] = useState("csmp")
  const [prevData, setprevData] = useState({...data})
  const [searching, setsearching] = useState(false)
  
  useEffect(() => {
    if (!searching) {
      const d={...data}
      setprevData(d)
    }
    console.log(prevData);
    
  }, [data])
  
  const handleSearch=(searchTerm) => {
    // console.log(searchTerm);
    
    // setsearching(true)

    // Object.keys(updatedData).forEach((key) => {
      //   updatedData[key].widgets = updatedData[key].widgets.map((widget) =>widget.show= false )
      // })
      
      if (searchTerm.trim() === ""){
        console.log(prevData);
        const updatedData = { ...prevData };
      Object.keys(updatedData).forEach((key) => {
        updatedData[key].widgets.forEach((widget) =>  widget.show=true 
        );
      })
      setdata(updatedData);
      
    }
      else {
      const updatedData = { ...data };
      Object.keys(updatedData).forEach((key) => {
        updatedData[key].widgets = updatedData[key].widgets.map((widget) =>
          widget.name.toLowerCase().includes(searchTerm.toLowerCase())
            ? widget
            :   { ...widget, show: false }
        );
      });
    
      setdata(updatedData);
    }
  }
  
  return (
    <div className="min-h-screen w-screen text-black bg-white/90 ">
    <div className="relative">
      <h1 className="text-base font-bold text-gray-500 p-4 py-3">Home ⇝ Dashboard V2</h1>
      <input type="search" onTouchCancel={()=>{
        setdata(prevData); 
        setsearching(false);
      }} name="" onChange={(e)=>handleSearch(e.target.value)} placeholder="Search widget by name" className='bg-gray-300 placeholder:text-gray-700 border-2 absolute top-0 right-10 outline-none border-gray-400 rounded p-1 m-1 w-1/6' id="" />
    </div>
      <Dashboard category={category} setcategory={setcategory} data={data} setdata={setdata} setshow={setshow} />
    <Drawer category={category} setcategory={setcategory} show={show} data={data}  setdata={setdata} setshow={setshow} />
    </div>
  );
}

export default App;
