import React from 'react';
import {MdOutlineCancel} from "react-icons/md";

import {useStateContext} from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import {userProfileData} from '../data/dummy';

const UserProfile = () => {
    const {currentColor, handleClick} = useStateContext();

    return (
        <div className="w-auto h-auto fixed nav-item top-16 right-10 flex shadow-2xl">
            <div className="flex flex-col flex-shrink-0 rounded-md dark:text-gray-200 bg-white dark:bg-[#484B52] w-[320px]">
                <div className="flex justify-between items-center p-4 ml-4">
                    <p className="font-semibold text-base">User Profile</p>
                    <button type="button" onClick={() => handleClick('userProfile')} style={{color: 'rgb(153,171,180)'}}
                            className="text-xl p-2 hover:drop-shadow-xl hover:bg-light-gray rounded-full">
                        <MdOutlineCancel/>
                    </button>
                </div>
                <div className="flex justify-between items-center px-2 py-3 mx-6 border-b-1 border-color">
                    <img
                        src={avatar}
                        alt={'avatar'} className="w-20 h-20 rounded-full cursor-pointer"/>
                    <div className="ml-4 items-start w-full">
                        <h2 className="text-sm font-semibold cursor-pointer">{'John Doe'}</h2>
                        <p className="mt-0.5 text-xs font-semibold text-gray-400">{'Administrator'}</p>
                        <p className="m-0 text-xs font-semibold text-gray-500">{'johnd@shoppy.com'}</p>
                    </div>
                </div>
                {/* Cart Items */}
                <div className="overflow-y-auto">
                    {userProfileData.map((item, index) => (<UserProfileItem key={index} {...item}/>))}
                </div>
                <div className="flex flex-col my-2 px-4 py-1.5">
                    <button type="button" className="py-2.5 rounded-md text-sm text-white" style={{backgroundColor:currentColor}}>Logout</button>
                </div>
            </div>
        </div>
    );
};

const UserProfileItem = ({title, desc, icon, iconColor, iconBg}) => {
    return (<div className="flex justify-between items-center px-5 py-3 mx-6 border-b-1 border-color group">
        <span className="flex justify-center items-center w-10 h-9 px-2 rounded-md cursor-pointer" style={{color: iconColor, backgroundColor: iconBg}}>
            {icon}
        </span>
        <div className="ml-4 items-start w-full h-full">
            <h2 className="text-sm font-semibold cursor-pointer">{title}</h2>
            <p className="mt-0.5 text-xs font-semibold text-gray-400">{desc}</p>
        </div>
    </div>);
}

export default UserProfile;
