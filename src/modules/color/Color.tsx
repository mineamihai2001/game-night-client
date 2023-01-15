import { COLORS } from "./colors";

export class Color {
    private _color: Color.IColor;

    public get color(): Color.IColor {
        return this._color;
    }

    public constructor(taken?: Array<Color.IColor>) {
        this._color =
            typeof taken === "undefined" ? this.createColor() : this.createDifferent(taken);
    }

    private createColor(): Color.IColor {
        const length: number = COLORS.length;
        const index: number = Math.floor(Math.random() * length);
        return COLORS[index];
    }

    private createDifferent(taken: Array<Color.IColor>): Color.IColor {
        const length: number = COLORS.length;
        let index: number = Math.floor(Math.random() * length);
        let color: Color.IColor = COLORS[index];
        let found: Color.IColor | undefined = taken.find((col) => col.name === color.name);
        while (typeof found !== "undefined") {
            index = Math.floor(Math.random() * length);
            color = COLORS[index];
            found = taken.find((col) => col.name === color.name);
        }
        return color;
    }
}
