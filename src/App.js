import React, {useState} from "react";
import NewPet from "./components/Pet/NewPet";
import NavBar from "./components/navigation/NavBar";
import PetsList from "./components/Pet/PetsList";

function App() {
  const [petsList, setpetsList] = useState([]);
  const newPetHandler = (ownerCorreo, petNombre, ownerEstreno, ownerDirector, ownerPrecio) => {
    setpetsList()
  };




  return (
  <div className ="content">
    <NavBar/>
    <NewPet onNewPet={newPetHandler} />
    <PetsList pets={petsList} />
    </div>
  );
};

export default App;