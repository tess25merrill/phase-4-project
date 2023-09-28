import React from "react";
import LegoPiece from "./LegoPiece";

function LegoList({renderForm, legos}) {

    const renderLegos = legos.map((legoPiece) => {
        return <LegoPiece
            key={legoPiece.id}
            legoPiece={legoPiece}
            renderForm={renderForm}
            />
            //Add piece_num and quantity fields
    })

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Design ID</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                {renderLegos}
            </tbody>
        </table>        
    );
}

export default LegoList;