import { findByLabelText } from "@testing-library/react";
import React, { useState, useEffect } from "react";

function Cv(props) {
    const { info } = props;
    if (Object.keys(info).length !== 0) {
        return (
            <div>
                <h1>{info.personalInfo.firstName} {info.personalInfo.lastName}</h1>
                <p>{info.personalInfo.phoneNumber} - {info.personalInfo.email}</p>
                <hr/>
                <h2>Education</h2>
                {info.Education.map((entry) => {
                    return (
                        <div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <p>{entry.university}</p>
                                <p>{entry.city}</p>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <p>{entry.program}</p>
                                <p>{entry.from} - {entry.to}</p>
                            </div>
                        </div>
                    )
                })}
                <hr/>
                <h2>Experience</h2>
                {info.Experience.map((entry) => {
                    return (
                        <div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <p>{entry.position}</p>
                                <p>{entry.company}</p>
                                <p>{entry.from} - {entry.to}</p>
                            </div>
                            <p>{entry.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
    else {
        return null;
    }
}

export default Cv;