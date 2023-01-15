import { useOutletContext } from "react-router-dom";
import { Card } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const members: Array<IUser> = [
    {
        username: "Member1",
    },
    {
        username: "Member2",
    },
    {
        username: "Member3",
    },
    {
        username: "Member4",
    },
    {
        username: "Member1",
    },
    {
        username: "Member2",
    },
    {
        username: "Member3",
    },
    {
        username: "Member4",
    },
];

export const GroupMembers = () => {
    const context = useOutletContext<{
        membersColor: Color.IColor;
        nightsColor: Color.IColor;
        gamesColor: Color.IColor;
    }>();

    return (
        <div className="px-5 w-full flex flex-col justify-start items-center">
            {members.map((member, index) => {
                return (
                    <Card
                        key={index}
                        extraClassName="w-full mb-5 py-5 flex p-10"
                        color={context.membersColor}
                    >
                        <span className="text-xl font-bold">{member.username}</span>
                        <span className="ml-auto cursor-pointer">
                            <FontAwesomeIcon color="gray" size="xl" icon={faCircleInfo} />
                        </span>
                    </Card>
                );
            })}
        </div>
    );
};
