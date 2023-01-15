import { COLORS } from "./colors";

export class Color {
    private _color: Color.IColor;

    public get color(): Color.IColor {
        return this._color;
    }

    public constructor();
    public constructor(taken?: Array<Color.IColor>) {
        this._color = this.createColor();
    }

    private createColor(): Color.IColor {
        const length: number = COLORS.length;
        const index: number = Math.floor(Math.random() * length);
        return COLORS[index];
    }

    // private createDifferent(taken: Array<Color.IColor>): Color.IColor {
    //     const length: number = COLORS.length;
    //     let index: number = Math.floor(Math.random() * length);
    //     let found: Color.IColor = 
    //     // while()
    // }
}
