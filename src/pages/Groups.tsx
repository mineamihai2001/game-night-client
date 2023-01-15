import { useState } from "react";
import { Card } from "../components";
import { Color } from "../modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export const Groups = () => {
  const [color, setColor] = useState(new Color().color);
  const classString: string = `${color.text} items-center flex`;

  return (
    <div className="p-10">
      <Card
        extraClassName="text-4xl font-extrabold flex items-center\
         justify-between px-5 mx-20 py-10"
        color={color}
      >
        <div className={classString}>Lorem</div>
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
    </div>
  );
};
