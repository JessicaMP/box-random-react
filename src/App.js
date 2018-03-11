import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Box extends React.Component {
  render() {
      const title = 'Box-random';
      const style = ['blue', 'yellow', 'red', 'pink', 'aqua', 'green', 'purple', 'black', 'white', 'orange'];
      const styles = style[Math.floor(Math.random() * style.length)];

      return (
          <div className={styles}>
              <center><h1>{title}</h1></center>
          </div>
      );
  }
};

export default Box;
