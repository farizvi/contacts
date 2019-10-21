import React from 'react';

class AddContact extends React.Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() && this.state.email.trim()) {
      this.props.onAddContact(this.state);
      this.handleReset();
      window.location.reload();
    }
  };

  handleReset = () => {
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  };

  render() {
    return (
      <div>
          <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              onChange={ this.handleInputChange }
              value={ this.state.name }
              required
            />            
          </div>
          <div className="form-group">
              <input
              type="text"
              placeholder="Email"
              className="form-control"
              name="email"
              onChange={ this.handleInputChange }
              value={ this.state.email }
              required
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Message"
              className="form-control"
              name="message"
              onChange={ this.handleInputChange }
              value={ this.state.message }
              required>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Send Message</button>
            &nbsp;
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;