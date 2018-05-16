import React, { Component } from 'react';
import './App.css';
import List from './List';

import PropTypes from 'prop-types';



const CustomButton = ({name, type, placeholder, value, handler}) => {
  return(
    <label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handler}
      />
    </label>
  );
};


CustomButton.propTypes ={
      type: PropTypes.oneOf(['text', 'password', 'number']).isRequired,
      placeholder: PropTypes.string,
      value: PropTypes.oneOf(['string', 'any']),
      handler: PropTypes.func.isRequired
};




class App extends Component {
    constructor(props){
    super(props);
    this.state = {
      data: [{text:'',
              markd: ''
      }]
    };
   }


  inputChange = event => {
    let value = event.target.value;
     this.setState({
     ...this.state.data[this.state.data.length-1].text =(value)
      });
    }

   markDInput = event => {
    let value = event.target.value;

     this.setState({
     ...this.state.data[this.state.data.length-1].markd =(value)
  
      });
        console.log(this.state.data[this.state.data.length-1].markd);
    }

   handleSubmit = (event) => {
      event.preventDefault();

      this.setState({
        ...this.state.data.push({text:'', markd: ''})
        });
  }

  render() {
    return (
    <div className="Aside">

    < form onSubmit={this.handleSubmit} autoComplete="off">
    
      <select name="mydropdown"  onChange={this.markDInput}>
        <optgroup label="Headers">
          <option value="#">H1</option>
          <option value="##">H2</option>
          <option value="###">H3</option>
        </optgroup>
        <optgroup label="Emphasis">
          <option value='_  _'>italic</option>
          <option value='**  **'>strong</option>
          <option value='~~  ~~'>Strikethrough</option>
        </optgroup>
          <option value='[  ]'>Link</option>
          <option value='`  `'>Inline code</option>
          <option value='*'>Unordered list</option>
          <option value='1.'>Ordered list</option>

      </select>

       <CustomButton 
          name="Input text" 
          type="text"
          placeholder="Enter your text"
          handler={this.inputChange}
        /> 
      
      <button type="submit">Enter new </button>
    
    </form>
     <List myList={this.state.data} />
    </div>
     
  
    );
  }
}

export default App;

