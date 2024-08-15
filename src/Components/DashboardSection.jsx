import React from 'react';
import Widget from './Widget';
import plus from '../assets/plus.png'
const DashboardSection = ({ name, widgets,category,setcategory,categoryName,setshow ,setdata}) => {
    
    const handleAddWidget=() => {        
        setcategory(categoryName)
        setshow(true)
    }
    return (
        <div className="p-4 bg-whit bg-gray-400/60 my-2  rounded ">
            <h2 className="text-xl font-semibold text-gray-800 capitalize
             mb-4">{name}</h2>
            <div className="flex flex-  pb-6  overflow-x-scroll  scrollbar-thumb-transparent scrollbar-track-transparent scrollbar-thin gap-4">

                {widgets.length > 0 && (
                    widgets.map((widget) => widget.show && <Widget key={widget.id} id={widget.id} name={widget.name} desc={widget.desc} category={category} setdata={setdata} />)
                )}

                <div onClick={handleAddWidget} className="p-4 w-1/4 flex justify-center  items-center  bg-gray-200/70 hover:bg-gray-200/80  cursor-pointer ease-in-out border-2 border-gray-400  transition-shadow shadow-xl   rounded-lg text-gray-800 min-w-80  ">
                <div className="border-2 border-dashed hover:bg-gray-200 border-gray-600 flex items-center p-1 rounded-md">
                        <img src={plus} className="w-6 m-2" alt="" />
                        <p className="text-lg mx-2">Add Widget</p>
                </div>
                </div>

            </div>
        </div>
    );
};

export default DashboardSection;
