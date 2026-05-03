import React from "react";
import { Usercard } from "./cards/UserCard";

const asistentes =[ { nombre: 'Juan Pérez', tarea: 'Frontend Developer', emoji: '' },
                    { nombre: 'Ana Gómez', tarea: 'Diseñadora UX/UI', emoji: '' },
                    { nombre: 'Carlos Ruiz', tarea: 'Backend Developer', emoji: '' }];

export function Asistente({asistentes}){
    return(
        <div>
        {asistentes.map( (asistentes, index) => (
        <Usercard key={index} 
        nombre={asistentes.nombre} 
        tarea={asistentes.tarea} 
        emoji={asistentes.emoji}/>
        ))}
        </div>
    );
}



