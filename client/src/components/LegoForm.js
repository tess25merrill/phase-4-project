import React, {useState} from "react";
import Inventory from "./Inventory";

function LegoForm() {

    const [formPieceNum, setFormPieceNum] = useState('')
    const [formCount, setFormCount] = useState('')

    //useEffect - if setForm(legoToEdit.field), [legoToEdit]

    const changeFormPieceNum = (e) => setFormPieceNum(e.target.value)
    const changeFormCount = (e) => setFormCount(e.target.value)

}

export default LegoForm;