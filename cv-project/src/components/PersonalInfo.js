import React, { useState, useEffect } from 'react';

function PersonalInfo(props) {
        const { info, onChange } = props;
        return (
            <div className='personalInfo'>
                <input name='firstName' value={info.firstName} onChange={onChange} placeholder="First name" required></input>
                <input name='lastName' value={info.lastName} onChange={onChange} placeholder="Last name" required></input>
                <input name='phoneNumber' type='tel' value={info.phoneNumber} onChange={onChange} placeholder="Phone Number" required></input>
                <input name='email' type='email' value={info.email} onChange={onChange} placeholder="Email" required></input>
            </div>
        )
}

export default PersonalInfo;