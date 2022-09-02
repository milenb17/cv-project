
import React from 'react';
import Form from './components/Form';
import Cv from './components/Cv';
class App extends React.Component {
  constructor() {
    super()
    this.state = { form: {
      personalInfo: {firstName: '', lastName: '', phoneNumber: '', email: ''},
      Experience: [{position: '', company: '', from: '', to: '', description: ''}],
      Education: [{university: '', city: '', program: '', from: '', to: ''}]
    },
    submitted: {}
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    e.target.querySelectorAll('input, textarea, div>button').forEach(input => input.setAttribute('disabled', ''));
    this.setState((prevState) => {
      let copy = {...prevState.form};
      return {submitted: copy}
      })
    return false; 
  }
  handleEdit(e) {
    console.log('edit');
    e.target.parentElement.querySelectorAll('input, textarea, div>button').forEach(input => input.removeAttribute('disabled'));
    this.setState({submitted: {}});
  }
  handleAdd(e) {
    console.log('add');
    let section = e.target.parentElement.className;
    this.setState((prevState) => {
      let newEntry = {...prevState.form[section][0]};
      for (let property in newEntry) {
        newEntry[property] = '';
      }
      let copy = {...prevState.form};
      copy[section] = [...copy[section], newEntry];
      return {form: copy};
    })
  }
  handleDelete(e) {
    console.log('delete');
    const section = e.target.parentElement.className;
    const index = parseInt(e.target.parentElement.getAttribute('name'));
    if (this.state.form[section].length > 1) {
      this.setState((prevState) => {
        let copy = {...prevState.form};
        copy[section]= [...copy[section].slice(0, index), ...copy[section].slice(index+1)];
        return {form: copy};
      })
    }
  }
  handleChange(e) {
    console.log('change');
    e.preventDefault();
    const target = e.target;
    const section = target.parentElement.className;


    if (section === 'personalInfo') {
      this.setState((prevState) => {
        let copy = {...prevState.form};
        copy.personalInfo[target.name] = target.value;
        return{form: copy}
      })
    }
    else {
      const index = parseInt(target.parentElement.getAttribute('name'));
      this.setState((prevState) => {
        let copy = {...prevState.form};
        copy[section][index][target.name] = target.value;
        return {form: copy}
      });
    }
  }
  render() {
    return (
      <div>
      <Form info={this.state.form} onChange={this.handleChange} onSubmit={this.handleSubmit} edit={this.handleEdit} add={this.handleAdd} del={this.handleDelete}/>
      <Cv info={this.state.submitted}></Cv>
      </div>
    );
  }
    
}

export default App;
