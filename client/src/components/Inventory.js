import React, {useState} from "react";
import LegoList from "./LegoList";
import LegoForm from "./LegoForm";

function Inventory(){
    
    const [legos, setLegos] = useState([])
    const [legoToEdit, setLegoToEdit] = useState(null)
    
    const renderForm = (legoPiece) => {
        setLegoToEdit(legoPiece)
    }

    //useEffect() for Lego inventory from db
    //double check how that works...

    const updateLegoPieceInfo = (e, editedLegoPiece) => {
        e.preventDefault()
        //PATCH REQUEST
        //update setLegos
    }

    return (
        <>
            <LegoForm 
                legoToEdit={legoToEdit}
                updateLegoPieceInfo={updateLegoPieceInfo}/>
            <LegoList 
                renderForm={renderForm}
                legos={legos}/>
        </>
    );
}

export default Inventory;