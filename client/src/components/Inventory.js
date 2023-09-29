import React, {useEffect, useState} from "react";
import LegoList from "./LegoList";
import LegoForm from "./LegoForm";

function Inventory(){
    
    const [legos, setLegos] = useState([])
    const [legoToEdit, setLegoToEdit] = useState(null)
    
    const renderForm = (legoPiece) => {
        setLegoToEdit(legoPiece)
    }

    const fetchLegos = () => {
        fetch("http://localhost:5555/lego_pieces")
        .then(r=>r.json())
        .then(setLegos)
    }

    useEffect(fetchLegos, [] )

    const updateLegoPieceInfo = (e, editedLegoPiece) => {
        e.preventDefault()
        if (legoToEdit) {
            editedLegoPiece.id = legoToEdit.id
            fetch('url/lego.id', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(editedLegoPiece)
        })
        .then(r => r.json())
        .then(legoData => {
            const updateInventoryList = legos.map(lego => lego.id === legoData.id ? legoData : legos)
            setLegos(updateInventoryList)
        })
        }
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
