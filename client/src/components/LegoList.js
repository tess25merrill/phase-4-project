import React from "react";
import Lego from "./Lego";

function LegoList({renderForm, legos}) {

    const renderLegos = legos.map((lego) => {
        return <Lego
            key={lego.id}
            lego={lego}
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