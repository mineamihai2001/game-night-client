import { useState } from "react";
import { Card } from "../components";
import { Color } from "../modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export const Groups = () => {
  const [colors, setColors] = useState([new Color().color]);
  const [numCards, setNumCards] = useState(0);

  const createCard = () => {
    setNumCards(numCards + 1);
    setColors([...colors, new Color().color]);
  };

  return (
    <div className="p-10">
      {Array(numCards).fill(0).map((_, index) => (
        <Card
          key={index}
          extraClassName="text-4xl font-extrabold flex items-center\
           justify-between px-5 mx-20 py-10 my-5"
          color={colors[index]}
        >
          <div className={`${colors[index].text} items-center flex`}>Lorem</div>
          <div className="flex items-center">
            <img
              src="src\assets\images\group.png"
              alt="groupLogo"
              className="h-8"
            />
            <span>7</span>
          </div>
          <div className="flex items-center">
            <img
              src="src\assets\images\dice.png"
              alt="groupLogo"
              className="h-8"
            />
            <span>28</span>
          </div>
          <div className="flex items-center">
            <img
              src="src\assets\images\poker-cards.png"
              alt="groupLogo"
              className="h-8"
            />
            <span>5/12</span>
          </div>
          <div className="scale-75">
            <span>
              <FontAwesomeIcon color="gray" size="xl" icon={faCircleInfo} />
            </span>
          </div>
        </Card>
      ))}
      
      <button onClick={createCard}>Create Card</button>
    </div>
  );
};
