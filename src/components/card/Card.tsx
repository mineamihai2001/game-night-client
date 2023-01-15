import React, { useState } from "react";
import { Color } from "../../modules";

export const Card = (props: ICardProp) => {
    // const color = new Color().color;
    const [color, setColor] = useState(new Color().color);

    return (
        <div
            className={`rounded-xl border-8 shadow-2xl
                        transform transition duration-150 
                        hover:scale-105 hover:${color.hover} ${color.border} 
                        ${typeof props.extraClassName !== "undefined" ? props.extraClassName : ""}`}
        >
            {props.children}
        </div>
    );
};
