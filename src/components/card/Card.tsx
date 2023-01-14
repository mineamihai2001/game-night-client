import React from "react";
import { Color } from "../../modules";

export const Card = (props: ICardProp) => (
    <div
        className={`rounded-lg border-4 ${new Color().color.border} ${
            typeof props.extraClassName !== "undefined" ? props.extraClassName : ""
        }`}
    >
        {props.children}
    </div>
);
