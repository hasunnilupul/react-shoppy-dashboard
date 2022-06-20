import React from 'react';

const Button = ({bgColor, color, text, textSize, borderRadius}) => {
    return (
        <button type="button" style={{backgroundColor: bgColor, color, borderRadius}} className={`text-${textSize} p-3 hover:drop-shadow-xl`}>
            {text}
        </button>
    );
};

export default Button;
