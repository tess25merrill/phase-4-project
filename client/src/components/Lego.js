import React from "react";

function Lego({lego, renderForm}) {

    const{id, pieceNum, count} = lego

    return (
        <tr>
            <td>{pieceNum}</td>
            <td>{count}</td>
            <td>
                <button onClick={() => renderForm(lego)} 
                type="button" 
                className="btn btn-primary">
                Edit Pizza
                </button>
            </td>
        </tr>
    );
}

export default Lego;