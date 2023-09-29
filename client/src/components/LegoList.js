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
        <table>
            <tbody>
                {renderLegos}
            </tbody>
        </table>        
    );
}

export default LegoList;