import { Link, Outlet } from "react-router-dom";
import { Card } from "../../components";
import { useState } from "react";
import { Color } from "../../modules";

export const GroupDetails = () => {
    const [membersColor, setMembersColor] = useState<Color.IColor>(new Color().color);
    const [nightsColor, setNightsColor] = useState<Color.IColor>(new Color().color);
    const [gamesColor, setGamesColor] = useState<Color.IColor>(new Color().color);

    return (
        <div className="p-10">
            <section id="header" className="flex justify-center">
                <div className="text-5xl mb-20">Group X</div>
            </section>
            <div className="flex">
                <section id="body" className="h-[90vh]">
                    <div id="categories" className="h-3/5 flex flex-col justify-between">
                        <Link to="members">
                            <Card
                                extraClassName="px-24 py-10 cursor-pointer flex justify-center"
                                color={membersColor}
                            >
                                <div className="text-3xl font-black">Members</div>
                            </Card>
                        </Link>
                        <Link to="nights">
                            <Card
                                extraClassName="px-24 py-10 cursor-pointer flex justify-center"
                                color={nightsColor}
                            >
                                <div className="text-3xl font-black">Nights</div>
                            </Card>
                        </Link>
                        <Link to="games">
                            <Card
                                extraClassName="px-24 py-10 cursor-pointer flex justify-center"
                                color={gamesColor}
                            >
                                <div className="text-3xl font-black">Games</div>
                            </Card>
                        </Link>
                    </div>
                </section>
                <section id="details" className="px-10 w-full h-[80vh] overflow-auto">
                    <Outlet context={{ membersColor, nightsColor, gamesColor }} />
                </section>
            </div>
        </div>
    );
};
