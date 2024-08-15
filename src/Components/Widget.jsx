import React from 'react';
import icon from '../assets/analyze.png' 
import cross from '../assets/cross.png' 
const Widget = ({ name, desc,category,setdata,id }) => {
  const handleCross=() => {
    setdata(prevState => ({
      ...prevState,
      [category]: {
          ...prevState[category],
          widgets: prevState[category].widgets.map(widget =>
              widget.id === id ? { ...widget, show: false } : widget
          )
      }
  }));
  }
  return (
    <div className="p-4 w-1/4 relative bg-gray-200 hover:bg-gray-100 cursor-pointer ease-in-out border-2 border-gray-400  transition-shadow shadow-xl   rounded-lg text-gray-800 min-w-96  ">
    <span onClick={handleCross} className="absolute right-2 top-2">
      <img src={cross} className="w-7" alt="" />
    </span>
      <h3 className="text-xl my-2 font-medium capitalize">{name}</h3>
      <div className="p-2 flex flex-col items-center ">
        <img src={icon} className="w-12" alt="" />
        <p className="text-md">No graph data available</p>
      </div>
      <p className="text-gray-700 font-semibold  py-3">{desc} </p>
    </div>
  );
};

export default Widget;
