// import React, { useState } from 'react';
// import { FaPlusCircle } from "react-icons/fa"


// function Form(props) {
//   const [formData, setFormData] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.onSubmit(formData);
//   }

//   const handleChange = (event) => {
//     setFormData(event.target.value);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
       
//       <input type="text" value={formData} onChange={handleChange} />
//       <button type="submit">Submit</button>
//       <button className="input-submit">
//   <FaPlusCircle />
// </button> 
// <button className="input-submit">
//   <FaPlusCircle
//     color="#5e5e5e"
//     size="20px"
//     className="submit-icon"
//   />
// </button>



//     </form>
//   );
// }

// export default Form;






import React, { Component } from 'react'
import './FormStyle.css'

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleUsernameChange(event) {
      this.setState({ username: event.target.value });
    }
  
    handlePasswordChange(event) {
      this.setState({ password: event.target.value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      console.log('Username:', this.state.username);
      console.log('Password:', this.state.password);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Username: 
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      );
    }
  }

export default Form