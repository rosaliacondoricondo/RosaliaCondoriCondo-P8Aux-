import React from 'react';
import "./PetsList.css";

const PetsList = (props) => {
    return (
        <div>
            {props.pets.map((pet) => {
                return (
                <div className = "blog-preview">
                    <h2>{pet.petNombre}</h2>
                    <p>{pet.ownerCorreo}</p>
                    <p>{pet.ownerEstreno}</p>
                    <p>{pet.ownerDirector}</p>
                    <p>{pet.ownerPrecio}</p>

                </div>
            );

            })};
        </div>
    );
};

export default PetsList;