import React, { useState } from 'react'
import cross from '../assets/cross.png'
import plus from '../assets/plus.png'

import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

function Drawer({ show, setshow, data, setdata, category, setcategory }) {
    const [newWidget, setnewWidget] = useState(false)
    const [newWidgetName, setnewWidgetName] = useState("")
    const [newWidgetDesc, setnewWidgetDesc] = useState('')
    const addNewWidget = () => {
        const widget = {
            id: Math.floor(Math.random() * 899999 + 100000),
            name: newWidgetName,
            desc: newWidgetDesc,
            show: true
        }

        setdata((prevState) => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                widgets: [...prevState[category].widgets, widget]
            }
        }));

        setnewWidgetName("")
        setnewWidgetDesc("")
        setnewWidget(false)
    };

    const hideWidget = (widgetId, value) => {
        console.log(e.target);
        alert(value)
        setdata(prevState => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                widgets: prevState[category].widgets.map(widget =>
                    widget.id === widgetId ? { ...widget, show: value } : widget
                )
            }
        }));
    };

    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" checked={show} type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
            </div>
            <div className="drawer-side ">
                <label onClick={() => setshow(false)} htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-base-20 bg-gray-200  w-1/3 text-base-content min-h-full  p-0 ">
                    <div className="bg-blue-950 px-3 py-2 flex justify-between text-slate-300 text-lg">Add Widget
                        <span className="cursor-pointer" onClick={() => setshow(false)}>
                            <img src={cross} className="invert w-7 h-7 mr-3" alt="" />
                        </span>
                    </div>
                    <p className="text-sm p-2 text-slate-600">
                        Personalise your dashboard by adding the following widget
                    </p>
                    <div className="flex  gap-  border-b-2 border-black/15 text-gray-600 font-semibold">
                        {Object.keys(data).map((key) => {
                            {/* <DashboardSection key={key} name={data[key].name} widgets={data[key].widgets} /> */ }
                            return <div className={`capitalize p-3 ${category == key && "border-b-4 border-purple-700 hover:border-b-4 hover:border-purple-700 text-purple-700 bg-gray-300/75  "} rounded-t-lg px-4 cursor-pointer hover:border-b-2 hover:border-purple-400 `}
                                onClick={() => setcategory(key)}
                            >{key}</div>
                        })}
                    </div>

                    {data[category].widgets.map((item) => {
                        {/* <DashboardSection key={key} name={data[key].name} widgets={data[key].widgets} /> */ }
                        return <div key={item.id} className="flex items-center border-2 p-1 mr-5 border-gray-400 m-1 rounded-md hover:bg-gray-100/70 text-gray-700">
                            <Checkbox
                                icon={<Icon.FiCheck color="#611A9E" size={24} />}
                                name="my-input"
                                checked={item.show}
                                onChange={(value) => {
                                    setdata(prevState => ({
                                        ...prevState,
                                        [category]: {
                                            ...prevState[category],
                                            widgets: prevState[category].widgets.map(widget =>
                                                widget.id === item.id ? { ...widget, show: value } : widget
                                            )
                                        }
                                    }));
                                    return
                                }}
                                borderColor="#611A9E"
                                borderWidth={3}
                                style={{ cursor: "pointer", marginLeft: "5px" }}
                                labelStyle={{ marginLeft: 5, userSelect: "none" }}
                                label={item.name}
                                labelClassName="capitalize"
                            />
                        </div>
                    })}

                    {newWidget ?
                        <div className="flex flex-col">
                            <div className='flex flex-col   p-2 items-center gap-4 mt-3 '>
                                <input value={newWidgetName} onChange={(e) => setnewWidgetName(e.target.value)} type="text" name="" placeholder="Widget name" className='placeholder:text-gray-600 outline-none border-2 border-gray-500  text-gray-600 bg-gray-200 p-2 w-3/4 rounded-lg' id="" />
                                <textarea value={newWidgetDesc} onChange={(e) => setnewWidgetDesc(e.target.value)} name="" rows="5" placeholder="Description" className=" resize-none placeholder:text-gray-600 outline-none border-2 border-gray-500  text-gray-600 bg-gray-200 p-2 w-3/4 rounded-lg" id=""></textarea>
                            </div>
                            <div onClick={addNewWidget} className=" self-center border-2 py-2 m-2 w-1/5 flex justify-center mr-5 cursor-pointer  bg-purple-700  border-gray-400  items-center p-1 rounded-md">
                                <p className="text- font-semibold text-gray-200 mx-2" >Save</p>
                            </div>
                        </div>
                        :

                        <div onClick={() => setnewWidget(true)} className="border-2 m-2 w-1/5 flex justify-center mr-5 cursor-pointer  bg-purple-700  border-gray-400  items-center p-1 rounded-md">
                            <img src={plus} className="w-4 invert " alt="" />
                            <p className="text- font-semibold text-gray-200 mx-2" >Add</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Drawer