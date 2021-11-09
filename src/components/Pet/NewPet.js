import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const NewPet = (props) => {
    const [ownerCorreo, setOwnerCorreo] = useState ("");
    const [petNombre, setPetNombre] = useState ("");
    const [ownerEstreno, setOwnerEstreno] = useState ("");
    const [ownerDirector, setOwnerDirector] = useState ("");
    const [ownerPrecio, setOwnerPrecio] = useState ("");
    
    const ownerCorreoHandler = (event) => {
        setOwnerCorreo(event.target.value);
    };

    const petNombreHandler = (event) => {
        //console.log(event.target.value);
        setPetNombre(event.target.value);
    };

    const ownerEstrenoHandler = (event) => {
        setOwnerEstreno(event.target.value);
    };

    const ownerDirectorHandler = (event) => {
        setOwnerDirector(event.target.value);
    };

    const ownerPrecioHandler = (event) => {

        setOwnerPrecio(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onNewPet(ownerCorreo, petNombre, ownerEstreno, ownerDirector, ownerPrecio);
    };


    return (
        <React.Fragment>
            <Card>
            <form onSubmit={submitHandler}>
                <label>Correo electronico</label>
                <input type="email" onChange={ownerCorreoHandler} placeholder="@gmail.com" />
                <label>Nombre de la Pelicula</label>
                <input type="text" onChange={petNombreHandler} />
                <label>Año de estreno</label>
                <input type="number" onChange={ownerEstrenoHandler} />
                <label>Director</label>
                <input type="text" onChange={ownerDirectorHandler} />
                <label>Precio</label>
                <input type="number" onChange={ownerPrecioHandler}/>
                
                <Button>Crear</Button>
            </form>
            </Card>
            <p> Correo Electronico: {ownerCorreo} </p>
            <p> Nombre de la Pelicula: {petNombre}</p>
            <p> Año de estreno: {ownerEstreno}</p>
            <p> Director: {ownerDirector}</p>
            <p> Precio: {ownerPrecio}</p>
        </React.Fragment>
        
    );
   
};

export default NewPet;
