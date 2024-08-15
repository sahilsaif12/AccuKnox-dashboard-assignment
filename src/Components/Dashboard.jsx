import React from 'react';
import DashboardSection from './DashboardSection';
import plus from '../assets/plus.png'
const Dashboard = ({ data,setshow, setdata, category,setcategory }) => {
  const handleAddWidget=() => {        
    setcategory('csmp')
    setshow(true)
}
  return (
    <div className="p-2 bg-gray-300/80  w- flex flex-col w-ful gap-">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold text-gray-700/90 p-2">CNAPP Dashboard</div>
        <div onClick={handleAddWidget} className="border-2 mr-5 cursor-pointer  bg-gray-200 hover:shadow-lg border-gray-400 flex items-center p-1 rounded-md">
          <img src={plus} className="w-6 m-2" alt="" />
          <p className="text-lg font-semibold text-gray-600 mx-2" >Add Widget</p>
        </div>
      </div>
      {Object.keys(data).map((key) => (
        <DashboardSection key={key} categoryName={key} setdata={setdata} name={data[key].name} widgets={data[key].widgets  }  category={category} setcategory={setcategory} setshow={setshow} />
      ))}
    </div>
  );
};

export default Dashboard;
