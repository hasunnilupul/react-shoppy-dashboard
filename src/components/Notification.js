import React from 'react';
import {MdOutlineCancel} from "react-icons/md";

import {useStateContext} from '../contexts/ContextProvider';
import {chatData} from '../data/dummy';

const Notification = () => {
    const {currentColor, handleClick} = useStateContext();

    return (
        <div className="w-auto h-auto fixed nav-item top-16 right-5 md:right-20 lg:right-48 flex shadow-2xl">
            <div className="flex flex-col flex-shrink-0 rounded-md dark:text-gray-200 bg-white dark:bg-[#484B52] w-[350px]">
                <div className="flex justify-between items-center p-4 ml-4">
                    <p className="font-semibold text-base">Notifications</p>
                    <button type="button" onClick={() => handleClick('notification')} style={{color: 'rgb(153,171,180)'}}
                            className="text-xl p-2 hover:drop-shadow-xl hover:bg-light-gray rounded-full">
                        <MdOutlineCancel/>
                    </button>
                </div>
                {/* Cart Items */}
                <div className="overflow-y-auto">
                    {chatData.map((item, index) => (<NotificationItem key={index} {...item}/>))}
                </div>
                <div className="flex flex-col my-2 px-4 py-1.5">
                    <button type="button" className="py-2.5 rounded-md text-sm text-white" style={{backgroundColor:currentColor}}>See all notifications</button>
                </div>
            </div>
        </div>
    );
};

const NotificationItem = ({message, desc, image, time}) => {
    return (<div className="flex justify-between items-center px-5 py-3 mx-5 border-b-1 border-color">
        <img
            src={image}
            alt={message} className="my-1.5 w-10 h-10 rounded-full cursor-pointer"/>
        <div className="ml-4 items-start w-full h-full">
            <h2 className="text-sm font-semibold cursor-pointer">{message}</h2>
            <p className="mt-1 text-xs font-semibold text-gray-400">{desc}</p>
        </div>
    </div>);
}

export default Notification;
