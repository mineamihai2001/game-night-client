declare module "*.png";

interface IGroup {
    members: Array<IUser>;
    nights: Array<INight>;
    games: Array<Games>;
}

/// GAME
interface IGame {
    name: string;
}

interface ILeaderBoard {
    ranking: Array<IUser>;
}

/// NIGHT
interface INight {
    location: IOnlineLocation | IPhysicalLocation;
    games: Array<IGame>;
}

interface IPhysicalLocation {
    type: "physical";
    address: string;
}

interface IOnlineLocation {
    type: "online";
}

/// USER
interface IUser {
    username: string;
}

namespace Props {
    export interface IProps {}
    export interface IGroupProps extends IProps {
        key: number | string;
        color: Color.IColor;
        details: IGroup
    }
    export interface INightProps extends IProps {}
    export interface IGameProps extends IProps {}
    export interface IUserProps extends IProps {}
}

namespace Color {
    interface IColor {
        name: string;
        border: string;
        text: string;
        hover: string;
    }

    declare const COLORS: Array<IColor>;
}
