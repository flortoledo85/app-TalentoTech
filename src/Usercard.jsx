import React from "react";

export function Usercard({ nombre, profesion }){
    return(
        <div>
            <h2>{nombre}</h2>
            <p>{profesion}</p>
        </div>
    );
}