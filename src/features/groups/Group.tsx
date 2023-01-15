import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../../components";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export const Group = (props: Props.IGroupProps) => {
    const { key, color, details } = props;

    return (
        <>
            <Card
                key={key}
                extraClassName="text-4xl font-extrabold flex items-center\
           justify-between px-5 mx-20 py-10 my-5"
                color={color}
            >
                <div className={`${color.text} items-center flex`}>Lorem</div>
                <div className="flex items-center">
                    <img src="src\assets\images\group.png" alt="groupLogo" className="h-8" />
                    <span>{details.members.length}</span>
                </div>
                <div className="flex items-center">
                    <img src="src\assets\images\dice.png" alt="groupLogo" className="h-8" />
                    <span>{details.nights.length}/69</span>
                </div>
                <div className="flex items-center">
                    <img src="src\assets\images\poker-cards.png" alt="groupLogo" className="h-8" />
                    <span>{details.games.length}/12</span>
                </div>
                <div className="scale-75">
                    <span>
                        <FontAwesomeIcon color="gray" size="xl" icon={faCircleInfo} />
                    </span>
                </div>
            </Card>
        </>
    );
};
