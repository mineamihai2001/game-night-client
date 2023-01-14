import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Color } from "../../modules";
import icon from "../../assets/images/icon.png";

const Title = () => {
    const title: string = "GameNight";
    return (
        <div className="flex justify-center items-center">
            <img src={icon} alt="logo" className="w-9 mr-3" />
            <div className="border-b-4 border-gray-700">
                {[...title].map((letter, index) => {
                    const color = new Color().color;
                    return (
                        <span className={color.text} key={index}>
                            {letter}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export const Navbar = () => {
    return (
        <>
            <div id="navbar" className="flex justify-start px-10 items-center py-7">
                <div id="nav-brand" className="flex w-56 justify-center ">
                    <Link
                        to="/"
                        className="text-4xl flex justify-center 
                        font-black 
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
