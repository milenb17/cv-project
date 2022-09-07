import React, { useState, useEffect } from 'react';
import PersonalInfo from "./PersonalInfo";
import Experience from './Experience';
import Education from './Education';

function Form(props) {
        const { info, onChange, onSubmit, edit, add, del } = props;
        return (
            <form onSubmit={onSubmit}>
                <p>Personal Information</p>
                <PersonalInfo info={info.personalInfo} onChange={onChange}/>

                <p>Experience</p>
                   {info.Experience.map(function(entry, i) {
                        return (
                                <Experience info={entry} index={i} onChange={onChange} add={add} del={del}/>
                        )
                    })}

                <p>Education</p>
                   {info.Education.map(function(entry, i) {
                        return (
                                <Education info={entry} index={i} onChange={onChange} add={add} del={del}/>
                        )
                    })}  
                <button type='button' onClick={edit}>Edit</button>
                <button type='submit'>Submit</button>
            </form>
        )
}

export default Form;