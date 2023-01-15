import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

export const Tooltip = (props: ITooltipProp) => {
    const color = typeof props.color === "undefined" ? "dark" : props.color;
    const position = typeof props.position === "undefined" ? "top" : props.position;

    return (
        <>
            <div
                id={props.id}
                data-tooltip-html={props.text.join("<br>")}
                data-tooltip-place={position}
                data-tooltip-varian={color}
            >
                {props.children}
            </div>
            <ReactTooltip anchorId={props.id} />
        </>
    );
};
