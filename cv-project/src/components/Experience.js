import React from "react";

class Experience extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { info, onChange, index, add, del } = this.props;
        return (
            <div className="Experience" name={index}>
                <input name='position' required value={info.position} onChange={onChange} placeholder="Position"></input>
                <input name='company' required value={info.company} onChange={onChange} placeholder="Company Name"></input>
                <input name='from' required type='date' value={info.from} onChange={onChange} placeholder="From"></input>
                <input name='to' required type='date' value={info.to} onChange={onChange} placeholder="To"></input>
                <textarea name='description' required value={info.description} onChange={onChange} placeholder="Description"/>
                <button onClick={add} type='button'> Add Entry</button>
                <button onClick={del} type='button'> Delete Entry</button>
            </div>
        )
        
    }
}

export default Experience;