import React from "react";

class Education extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { info, onChange, index, add, del } = this.props;
        return (
            <div className="Education" name={index}>
                <input name='university' required value={info.university} onChange={onChange} placeholder="University Name"></input>
                <input name='city' required value={info.city} onChange={onChange} placeholder="Location"></input>
                <input name='program' required value={info.program} onChange={onChange} placeholder="Program Name"></input>
                <input name='from' required type='date' value={info.from} onChange={onChange} placeholder="From"></input>
                <input name='to' required type='date' value={info.to} onChange={onChange} placeholder="To"></input>
                <button onClick={add} type='button'> Add Entry</button>
                <button onClick={del} type='button'> Delete Entry</button>
            </div>
        )
        
    }
}

export default Education;