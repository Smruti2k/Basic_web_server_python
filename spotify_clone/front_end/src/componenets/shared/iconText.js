import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const IconText = ({ iconName, displayText, active ,targetLink}) => {
  return (
    <Link to={targetLink} className = "block">
      <div className="flex justify-start items-center">
        <div className="px-6 py-2.5">
          <Icon
            icon={iconName}
            color={active ? "white" : "grey"}
            fontSize={23}
          />
        </div>
        <div
          className={`${
            active ? "text-white" : "text-gray-400"
          } text-sm font-semibold hover:text-white`}
        >
          {displayText}
        </div>
      </div>
    </Link>
  );
};

export default IconText;
