import React, {useEffect, useState} from "react";
import LegoList from "./LegoList";
import LegoForm from "./LegoForm";
import NavBar from './NavBar';


function Inventory(){
    
    const [legos, setLegos] = useState([])
    const [legoToEdit, setLegoToEdit] = useState(null)
    
    const renderForm = (lego) => {
        setLegoToEdit(lego)
    }

    const fetchLegos = () => {
        fetch("http://localhost:5555/userlegos")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Legos data:", data);
            setLegos(data);
        })
        .catch(error => {
            console.error('Error fetching legos:', error);
        });
    }
    
    useEffect(() => {
        console.log("Fetching legos...");
        fetchLegos();
    }, []);

    const updateLegoInfo = (e, editedLego) => {
        e.preventDefault()
        if (legoToEdit) {
            editedLego.id = legoToEdit.id
            fetch("http://localhost:5555//legos", {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(editedLego)
        })
        .then(r => r.json())
        .then(legoData => {
            const updateInventoryList = legos.map(lego => lego.id === legoData.id ? legoData : lego)
            setLegos(updateInventoryList)
        })
        }
    }

    return (
        <>  <NavBar />
            <LegoForm 
                legoToEdit={legoToEdit}
                updateLegoInfo={updateLegoInfo}/>
            <LegoList 
                renderForm={renderForm}
                legos={legos}/>
        </>
    );
}

export default Inventory;
