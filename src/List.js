import React, { Component } from 'react';
import './App.css';

const ReactMarkdown = require('react-markdown')



class List extends Component {



  render() {
    let {myList} = this.props;
    
        return (
            <div className= "Preview">
              <h4> Result preview  </h4>
              <div>{

                      myList.map((item, index) => {
                       let num = item.markd.indexOf('  ');
                       let t = num<0 ? item.markd + " " + item.text
                       : item.markd.substr(0, num) + item.text + item.markd.substr(num+2, item.markd.length)

                       
                        console.log(t);

                           return (
                            <p> 
                             <ReactMarkdown source={t} />
                            </p>)
                          
                          })               
                    }   
              </div>
            </div>
          );
  }
}

export default List;