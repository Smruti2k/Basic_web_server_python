import {Icon} from "@iconify/react";

const IconText = ({iconName, displayText ,active}) =>
{
    return(
        <div className = "flex justify-start items-center">
            <div className="px-6 py-2.5">
                <Icon icon={iconName} color ="white" fontSize={23}/>
            </div>
            <div className="text-white text-sm font font-semibold">
                {displayText}
            </div>
        </div>
    )
};

export default IconText;