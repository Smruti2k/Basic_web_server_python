import { Link,useNavigate } from "react-router-dom";

const TextWithHover = ({displayText ,active}) =>
{
    const Navigate = useNavigate();
    const handleClick = () => {
        switch (displayText) {
            case "Upload Song":
                Navigate("/uploadSong");
                // Add functionality for Option 1

                break;
            case "Option 2":
                console.log("Option 2 clicked!");
                // Add functionality for Option 2
                break;
            case "Option 3":
                console.log("Option 3 clicked!");
                // Add functionality for Option 3
                break;
            default:
                console.log("Default action triggered.");
        }
    };

    return(
        <div className = "flex justify-start items-center cursor-pointer">
            <div className={`${
                        active ? "text-white" : "text-gray-500"
                    } font-semibold text-lg hover:text-white`} onClick={handleClick}>
                {displayText}
            </div>
        </div>
    )
};

export default TextWithHover;