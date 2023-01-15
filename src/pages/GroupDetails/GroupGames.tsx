import { useOutletContext } from "react-router-dom";
import { Card } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const games: Array<IUser> = [
    {
        username: "Game1",
    },
    {
        username: "Game2",
    },
    {
        username: "Game3",
    },
    {
        username: "Game4",
    },
    {
        username: "Game1",
    },
    {
        username: "Game2",
    },
    {
        username: "Game3",
    },
    {
        username: "Game4",
    },
];

export const GroupGames = () => {
    const context = useOutletContext<{
        membersColor: Color.IColor;
        nightsColor: Color.IColor;
        gamesColor: Color.IColor;
    }>();

    return (
        <div className="px-5 w-full flex flex-col justify-start items-center">
            {games.map((game, index) => {
                return (
                    <Card
                        key={index}
                        extraClassName="w-full mb-5 py-5 flex p-10"
                        color={context.gamesColor}
                    >
                        <span className="text-xl font-bold">{game.username}</span>
                        <span className="ml-auto cursor-pointer">
                            <FontAwesomeIcon color="gray" size="xl" icon={faCircleInfo} />
                        </span>
                    </Card>
                );
            })}
        </div>
    );
};
