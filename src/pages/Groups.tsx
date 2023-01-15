import { useState } from "react";
import { Card } from "../components";
import { Color } from "../modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Group } from "../features";
import { groups as groupsData } from "../data/groups";

export const Groups = () => {
    const [groups, setGroups] = useState<Array<IGroup>>(groupsData);

    const createCard = () => {
        const newGroup = groupsData[0]; // Get from FORM => send to database
        setGroups([...groups, newGroup]);
    };

    return (
        <div className="p-10">
            {groups.map((group, index) => (
                <Group key={index} color={new Color().color} details={{ ...group }} />
            ))}

            <button onClick={createCard}>Create Card</button>
        </div>
    );
};
