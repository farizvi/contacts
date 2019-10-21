import React, { Component } from 'react';
import AddNewContact from './containers/AddNewContact';
import ContactsList from './containers/ContactsList';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const stylesApp = {
  marginTop: 40
}

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
          <div className="navbar-brand">
            Contact Form
          </div>
        </nav>
        <br></br>
        <div className="container">
          <div className="row" style={stylesApp}>
            <div className="col-md-6">
              <AddNewContact />
            </div>
            <div className="col-md-6">
              <ContactsList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;