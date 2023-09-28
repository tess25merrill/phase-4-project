import React from "react";

function LegoPiece({legoPiece, renderForm}) {

    const{id, pieceNum, count} = legoPiece

    return (
        <tr>
            <td>{pieceNum}</td>
            <td>{count}</td>
            <td>
                <button onClick={() => renderForm(legoPiece)} 
                type="button" 
                className="btn btn-primary">
                Edit Pizza
                </button>
            </td>
        </tr>
    );
}

export default LegoPiece;