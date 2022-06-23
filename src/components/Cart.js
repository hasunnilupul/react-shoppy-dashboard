import React from 'react';
import {MdOutlineAdd, MdOutlineCancel, MdOutlineRemove} from "react-icons/md";

import {useStateContext} from '../contexts/ContextProvider';
import {cartData} from '../data/dummy';

const Cart = () => {
    const {currentColor, handleClick} = useStateContext();

    return (
        <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 flex justify-between">
            <span className="flex flex-grow h-screen" onClick={() => handleClick('cart')}/>
            <div className="flex flex-col flex-shrink-0 h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400">
                <div className="flex justify-between items-center p-4 ml-4">
                    <p className="font-semibold text-xl">Shopping Cart</p>
                    <button type="button" onClick={() => handleClick('cart')} style={{color: 'rgb(153,171,180)'}}
                            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full">
                        <MdOutlineCancel/>
                    </button>
                </div>

                {/* Cart Items */}
                <div className="overflow-y-auto">
                    {cartData.map((item, index) => (<CartItem key={index} {...item}/>))}
                </div>

                {/* Sub Total */}
                <div className="flex justify-between items-center px-4 py-1.5">
                    <p className="text-base text-gray-400">Sub Total</p>
                    <p className="font-semibold text-base">$800</p>
                </div>
                {/* Total */}
                <div className="flex justify-between items-center px-4 py-1.5">
                    <p className="text-base text-gray-400">Total</p>
                    <p className="font-semibold text-base">$800</p>
                </div>
                <div className="flex flex-col mb-2 px-4 py-1.5">
                    <button className="py-2 rounded-md text-base text-white" style={{backgroundColor:currentColor}}>Place Order</button>
                </div>
            </div>
        </div>
    );
};

const CartItem = ({name, category, image, price}) => {
    const {currentColor} = useStateContext();

    return (<div className="flex px-6 py-3 mx-4 border-b-1 border-color">
        <img
            src={image}
            alt="item-1" className="w-24 h-24"/>
        <div className="ml-3 items-start w-full h-full">
            <h2 className="text-base font-semibold">{name}</h2>
            <p className="text-sm font-semibold text-gray-500">{category}</p>
            <div className="flex justify-between items-center mt-1">
                <span className="text-bas font-semibold">{price}</span>
                <div className="flex items-center justify-between mr-10 border-1 border-gray-300 rounded-md"
                     style={{color: currentColor}}>
                    <button type="button" className="py-1.5 px-1.5" onClick={() => {
                    }}>
                        <MdOutlineRemove/>
                    </button>
                    <span className="py-1.5 px-1.5 border-l-1 border-r-1 border-gray-300">0</span>
                    <button type="button" className="py-1.5 px-1.5" onClick={() => {
                    }}>
                        <MdOutlineAdd/>
                    </button>
                </div>
            </div>
        </div>
    </div>);
}

export default Cart;
