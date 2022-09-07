
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Cv from './components/Cv';
function App() {
  const [form, setForm] = useState({
    personalInfo: {firstName: '', lastName: '', phoneNumber: '', email: ''},
    Experience: [{position: '', company: '', from: '', to: '', description: ''}],
    Education: [{university: '', city: '', program: '', from: '', to: ''}]
  });

  const [submitted, setSubmitted] = useState({});

  const handleSubmit = function(e) {
    e.preventDefault();
    console.log('submit');
    e.target.querySelectorAll('input, textarea, div>button').forEach(input => input.setAttribute('disabled', ''));
    setSubmitted({...form});
    return false; 
  }
  const handleEdit = function(e) {
    console.log('edit');
    e.target.parentElement.querySelectorAll('input, textarea, div>button').forEach(input => input.removeAttribute('disabled'));
    setSubmitted({});
  }
  const handleAdd = function(e) {
    console.log('add');
    let section = e.target.parentElement.className;
    let newEntry = {...form[section][0]};
    for (let property in newEntry) {newEntry[property] = '';}
    setForm(form => ({
      ...form, 
      [section]: [...form[section], newEntry]
    }));
  }
  const handleDelete = function(e) {
    console.log('delete');
    const section = e.target.parentElement.className;
    const index = parseInt(e.target.parentElement.getAttribute('name'));
    if (form[section].length > 1) {
      setForm(form => ({
        ...form,
        [section]: [...form[section].slice(0, index), ...form[section].slice(index+1)]
      }));
    }
  }
  const handleChange = function(e) {
    console.log('change');
    e.preventDefault();
    const target = e.target;
    const section = target.parentElement.className;

    if (section === 'personalInfo') {
      setForm(form => ({
        ...form,
        personalInfo: {
          ...form.personalInfo,
          [target.name]: target.value
        }
      }))
    }
    else {
      const index = parseInt(target.parentElement.getAttribute('name'));
      setForm(form => ({
        ...form,
        [section]: [...form[section].slice(0,index), 
          {...form[section][index], [target.name]: target.value},
          ...form[section].slice(index+1)]
      }))
    }
  }
  return (
    <div>
      <Form info={form} onChange={handleChange} onSubmit={handleSubmit} edit={handleEdit} add={handleAdd} del={handleDelete}/>
      <Cv info={submitted}></Cv>
    </div>
  );
}

export default App;
