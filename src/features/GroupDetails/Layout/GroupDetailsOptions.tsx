import { Link, useLocation } from "react-router-dom";
import { Card } from "../../../components";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface IGroupDetailsBody {
    membersContext: [Color.IColor, Dispatch<SetStateAction<Color.IColor>>];
    nightsContext: [Color.IColor, Dispatch<SetStateAction<Color.IColor>>];
    gamesContext: [Color.IColor, Dispatch<SetStateAction<Color.IColor>>];
}

export const GroupDetailsOptions = ({
    membersContext: [membersColor, setMembersColor],
    nightsContext: [nightsColor, setNightsColor],
    gamesContext: [gamesColor, setGamesColor],
}: IGroupDetailsBody) => {
    const initialSelect = {
        members: false,
        nights: false,
        games: false,
    };

    const [selected, setSelected] = useState<{
        members: boolean;
        nights: boolean;
        games: boolean;
    }>(initialSelect);

    const preview: "members" | "nights" | "games" = useLocation().pathname.split("/")[3] as
        | "members"
        | "nights"
        | "games";

    useEffect(() => {
        setSelected({ ...initialSelect, [preview]: true });
    }, [preview]);
    return (
        <>
            <section id="body" className="h-[90vh] pt-5">
                <div id="categories" className="h-3/5 flex flex-col justify-between">
                    <Link to="members">
                        <Card
                            extraClassName="px-24 py-10 cursor-pointer flex justify-center items-center"
                            color={membersColor}
                        >
                            <div className={`text-3xl font-black`}>
                                <span>Members</span>
                            </div>
                            {selected.members ? <Selected color={membersColor} /> : <NotSelected />}
                        </Card>
                    </Link>
                    <Link to="nights">
                        <Card
                            extraClassName="px-24 py-10 cursor-pointer flex justify-center items-center"
                            color={nightsColor}
                        >
                            <div className={`text-3xl font-black`}>Nights</div>
                            {selected.nights ? <Selected color={nightsColor} /> : <NotSelected />}
                        </Card>
                    </Link>
                    <Link to="games">
                        <Card
                            extraClassName="px-24 py-10 cursor-pointer flex justify-center items-center"
                            color={gamesColor}
                        >
                            <div className={`text-3xl font-black`}>Games</div>
                            {selected.games ? <Selected color={gamesColor} /> : <NotSelected />}
                        </Card>
                    </Link>
                </div>
            </section>
        </>
    );
};

const Selected = ({
    color = {
        name: "black",
        border: "border-black",
        text: "text-black",
        hover: "bg-black",
    },
}: {
    color?: Color.IColor;
}) => {
    return (
        <>
            <div className="ml-1 w-4 overflow-hidden">
                <div className={`h-6  ${color.hover} -rotate-45 transform origin-top-right`}></div>
            </div>
        </>
    );
};
const NotSelected = () => {
    return (
        <>
            <div className="ml-1 w-4 overflow-hidden">
                <div className=" h-6  -rotate-45 transform origin-top-right"></div>
            </div>
        </>
    );
};
