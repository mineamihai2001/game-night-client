interface ICardProp {
    children?: React.ReactNode;
    extraClassName?: string;
    color?: Color.IColor;
}

interface ITooltipProp {
    children?: React.ReactNode;
    color?: "dark" | "light" | "success" | "warning" | "error" | "info";
    position?: "top" | "right" | "left" | "bottom";
    text: Array<string>;
    id: string;
}
