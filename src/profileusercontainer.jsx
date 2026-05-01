import React from "react";
import { Usercard } from "./Usercard";

export function Profileusercontainer(){
    const usuario = { nombre: "Matias", profesion: "Desarrollador" };
    return(
        <Usercard nombre={usuario.nombre} profesion={usuario.profesion} />
    );
}

export function OtroPerfil(){
    return(
        <div>
            <h2>Nombre</h2>
            <p>Profesion</p>
        </div>
    );
}


export function HelperFunction() {
    return "Función auxiliar";
}

export const config = { theme: "dark" };