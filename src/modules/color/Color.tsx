import { COLORS } from "./colors";

export class Color {
    private _color: Color.IColor;

    public get color(): Color.IColor {
        return this._color;
    }

    public constructor() {
        const length: number = COLORS.length;
        const index: number = Math.floor(Math.random() * length);
        this._color = COLORS[index];
    }
}
