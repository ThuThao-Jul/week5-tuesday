import { useState } from "react";

const Button =({handle, props}) => {
    return <button onClick={handle}>{props}</button>
}



export default Button;
