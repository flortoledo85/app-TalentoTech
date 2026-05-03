import React from "react";

export function Usercard({ nombre, tarea, emoji }){
    return(
        <div>
            <h3>{nombre}</h3>
            <p>{tarea}
                {emoji}
            </p>
        </div>
    );
}