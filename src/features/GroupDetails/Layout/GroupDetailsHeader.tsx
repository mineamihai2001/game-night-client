import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faCircleInfo, faPencil, faS } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Tooltip } from "../../../components/Tooltip/Tooltip";

const groupDetails = {
    Created: "15-01-2023",
    Members: 69,
    "Total Nights": 12,
    "Total Games Played": 10,
    "Total Games Discovered": 2,
};

export const GroupDetailsHeader = () => {
    const [groupName, setGroupName] = useState<string>("Group XYX");
    const [edit, setEdit] = useState<boolean>(false);
    const toggleEdit = (): void => {
        setEdit(!edit);
    };

    return (
        <>
            <section
                id="header"
                className="flex items-center mb-16 bg-gray-100 p-10 rounded-2xl shadow-lg shadow-teal-100"
            >
                <div className="">
                    {edit ? (
                        <input
                            className="rounded-lg text-3xl font-black ml-3 py-2
                                        focus:outline focus:outline-4 focus:outline-teal-300"
                            placeholder="Group Name"
                            onChange={(e) => setGroupName(e.target.value)}
                            defaultValue={groupName}
                        ></input>
                    ) : (
                        <span className="text-5xl font-black ml-3">{groupName}</span>
                    )}
                </div>
                <div className="cursor-pointer ml-5 relative">
                    {!edit && (
                        <Tooltip
                            id="group-info"
                            text={Object.entries(groupDetails).map(([label, detail]) => {
                                return label + ": " + detail;
                            })}
                            position={"right"}
                        >
                            <FontAwesomeIcon color="gray" size="xl" icon={faCircleInfo} />
                        </Tooltip>
                    )}
                </div>
                <button
                    type="button"
                    className=" ml-auto mr-10 px-10 py-2 rounded-lg bg-teal-300 text-white text-2xl font-black shadow-xl 
                                transition-all duration-200 
                                hover:outline hover:outline-teal-300 hover:outline-4 hover:bg-white hover:text-teal-500"
                    onClick={toggleEdit}
                >
                    <span>Edit</span>
                    <FontAwesomeIcon icon={faPencil} className="ml-6" />
                </button>
            </section>
        </>
    );
};
