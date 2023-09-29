import React, {useState, useEffect} from "react";
import Inventory from "./Inventory";

function LegoForm({legoToEdit, updateLegoInfo}) {

    const [formPieceNum, setFormPieceNum] = useState('')
    const [formCount, setFormCount] = useState('')

    useEffect(() => {
        if(legoToEdit) {
            setFormPieceNum(legoToEdit.piece_num)
            setFormCount(legoToEdit.count)
        }
    }, [legoToEdit])

    const changeFormPieceNum = (e) => setFormPieceNum(e.target.value)
    const changeFormCount = (e) => setFormCount(e.target.value)

    const editedLego = {
        piece_num: formPieceNum,
        count: formCount
    }

    return (
        <form onSubmit={(e) => updateLegoInfo(e, editedLego)}>
            <div>
            <input
                className="form-control"
                type="text"
                name="piecenum"
                placeholder="Lego Design ID"
                value={formPieceNum}
                onChange={changeFormPieceNum}
            />
            <input
                className="form-control"
                type="text"
                name="count"
                placeholder="Quantity"
                value={formCount}
                onChange={changeFormCount}
            />
            <button type="submit">Submit</button>
            </div>
            </form>
        )
}

export default LegoForm;