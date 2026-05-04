import React from "react";


function Container({ children }){
    const estilo = {
        border: "1px solid ccc",
        padding: "16px",
        margin: "16px 0px",
        "background-color": "blue",
    };
    return(
        <div style={estilo}>{children}</div>
    );
}

export default Container