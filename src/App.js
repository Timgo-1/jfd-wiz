import React from "react";
import "./App.css";
import data from "./dataz.json";
import SideBar from './sidebar';
import Products from "./Products";
import mill from './imagez/loqo.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <a href="/">
            <img src={mill} width="45" height="45" alt="Logo"></img>
            &nbsp;Junior Frontend Developer
          </a>
        </header>
        <main>
          <div className="con">
            <SideBar />
          </div>
          <div className="chill">
            <Products products={this.state.products}></Products>
          </div>
        </main>
        <footer>
        <div className="coy">
            © 2021 All rights reserved.
        </div>
        </footer>
      </div>
      );
    }
}

export default App;