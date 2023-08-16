// Creating the refs for the prominentContext using Context API.
import { createRef } from "react";
import prominentContext from "./prominentContext";

const ProminentState = (props) => {
    const positionRefs = [];
    for (let i = 0; i < 6; i++)
        positionRefs[i] = createRef();

    return (
        <prominentContext.Provider value={positionRefs}>
            {props.children}
        </prominentContext.Provider>
    )
}

export default ProminentState;