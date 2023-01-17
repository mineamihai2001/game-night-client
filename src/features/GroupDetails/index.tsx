import { Outlet } from "react-router-dom";
import { GroupDetailsHeader } from "./Layout/GroupDetailsHeader";
import { GroupDetailsOptions } from "./Layout/GroupDetailsOptions";
import { useState } from "react";
import { Color } from "../../modules";

export const GroupDetails = () => {
    const [membersColor, setMembersColor] = useState<Color.IColor>(new Color().color);
    const [nightsColor, setNightsColor] = useState<Color.IColor>(new Color([membersColor]).color);
    const [gamesColor, setGamesColor] = useState<Color.IColor>(
        new Color([nightsColor, membersColor]).color
    );

    return (
        <>
            <div className="p-10">
                <GroupDetailsHeader />
                <div className="flex">
                    <GroupDetailsOptions
                        membersContext={[membersColor, setMembersColor]}
                        nightsContext={[nightsColor, setNightsColor]}
                        gamesContext={[gamesColor, setGamesColor]}
                    />
                    <section id="details" className="px-10 pt-5 w-full h-[55vh] overflow-auto">
                        <Outlet context={{ membersColor, nightsColor, gamesColor }} />
                    </section>
                </div>
            </div>
        </>
    );
};
