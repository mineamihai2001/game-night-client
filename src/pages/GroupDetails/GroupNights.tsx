import { useOutletContext } from "react-router-dom";
import { Card } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const nights: Array<IUser> = [
    {
        username: "Night1",
    },
    {
        username: "Night2",
    },
    {
        username: "Night3",
    },
    {
        username: "Night4",
    },
    {
        username: "Night1",
    },
    {
        username: "Night2",
    },
    {
        username: "Night3",
    },
    {
        username: "Night4",
    },
];

export const GroupNights = () => {
    const context = useOutletContext<{
        membersColor: Color.IColor;
        nightsColor: Color.IColor;
        gamesColor: Color.IColor;
    }>();

    return (
        <div className="px-5 w-full flex flex-col justify-start items-center">
            {nights.map((night, index) => {
                return (
                    <Card
                        key={index}
                        extraClassName="w-full mb-5 py-5 flex p-10"
                        color={context.nightsColor}
                    >
                        <span className="text-xl font-bold">{night.username}</span>
                        <span className="ml-auto cursor-pointer">
                            <FontAwesomeIcon color="gray" size="xl" icon={faCircleInfo} />
                        </span>
                    </Card>
                );
            })}
        </div>
    );
};
