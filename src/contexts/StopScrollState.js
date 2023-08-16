// Creating the state for the stopScrollContext using Context API.
import { useState } from "react";
import stopScrollContext from "./stopScrollContext";

const StopScrollState = (props) => {
    const [stopScroll, setstopScroll] = useState(false);

    return (
        <stopScrollContext.Provider value = {{stopScroll, setstopScroll}}>
            {props.children}
        </stopScrollContext.Provider>
    )
}

export default StopScrollState;