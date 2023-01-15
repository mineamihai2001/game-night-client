import { Link, Outlet, useLocation } from "react-router-dom";
import { Card } from "../../components";
import { useEffect, useState } from "react";
import { Color } from "../../modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faCircleInfo, faS } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "../../components/Tooltip/Tooltip";

const groupDetails = {
    Created: "15-01-2023",
    Members: 69,
    "Total Nights": 12,
    "Total Games Played": 10,
    "Total Games Discovered": 2,
};

export const GroupDetails = () => {
    const [membersColor, setMembersColor] = useState<Color.IColor>(new Color().color);
    const [nightsColor, setNightsColor] = useState<Color.IColor>(new Color([membersColor]).color);
    const [gamesColor, setGamesColor] = useState<Color.IColor>(
        new Color([nightsColor, membersColor]).color
    );

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
        <div className="p-10">
            <section id="header" className="flex items-center mb-20">
                <div className="text-5xl font-black ml-3">Group XYZ</div>
                <div className="cursor-pointer ml-5 relative">
                    <Tooltip
                        id="group-info"
                        text={Object.entries(groupDetails).map(([label, detail]) => {
                            return label + ": " + detail;
                        })}
                        position={"right"}
                    >
                        <FontAwesomeIcon color="gray" size="xl" icon={faCircleInfo} />
                    </Tooltip>
                </div>
            </section>
            <div className="flex">
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
                                {selected.members ? (
                                    <Selected color={membersColor} />
                                ) : (
                                    <NotSelected />
                                )}
                            </Card>
                        </Link>
                        <Link to="nights">
                            <Card
                                extraClassName="px-24 py-10 cursor-pointer flex justify-center items-center"
                                color={nightsColor}
                            >
                                <div className={`text-3xl font-black`}>Nights</div>
                                {selected.nights ? (
                                    <Selected color={nightsColor} />
                                ) : (
                                    <NotSelected />
                                )}
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
                <section id="details" className="px-10 pt-5 w-full h-[55vh] overflow-auto">
                    <Outlet context={{ membersColor, nightsColor, gamesColor }} />
                </section>
            </div>
        </div>
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
