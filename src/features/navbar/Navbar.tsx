import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { Color } from "../../modules";

const Title = () => {
    const title: string = "Game Night";
    return (
        <>
            {[...title].map((letter, index) => {
                const color = new Color().color;
                return <span className={color.text} key={index}>{letter}</span>;
            })}
        </>
    );
};

const Navbar = () => {
    return (
        <>
            <div id="navbar" className="flex justify-start px-10 items-center py-7">
                <div id="nav-brand" className="flex w-56 justify-center ">
                    <Link
                        to="groups"
                        className="text-4xl flex justify-center 
                        font-black border-b-4 border-gray-700 
                        transform transition-all duration-500 "
                    >
                        <Title />
                    </Link>
                </div>
                <div id="nav-user" className="w-10 ml-auto">
                    <FontAwesomeIcon icon={faUser} size="2xl" color="" className="" />
                </div>
            </div>
        </>
    );
};

export default Navbar;
