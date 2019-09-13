import React from "react";
import { connect } from "react-redux";
import { teleportSmurf } from '../store/actions'

class SmurfForm extends React.Component {
  constructor(){
        super();
        this.state = {
            name:'',
            age:'',
            height:''
        }
    }

    handleChange = e => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
      }
    handleSubmit = e => {
        e.preventDefault();
        const { name, age, height } = this.state;
        this.props.teleportSmurf({ name, age, height });
        this.setState({ name: '', age: '', height: '' });
    };

    render(){
      return (
        <div>
            <h1>Add Smurfs to Smurf Village</h1>
            <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Smurf name"
              required
            />
            <input
              type="text"
              value={this.state.age}
              onChange={this.handleChange}
              placeholder="Smurf age"
              required
            />
            <input
              type="text"
              value={this.state.height}
              onChange={this.handleChange}
              placeholder="Smurf height"
              required
            />
            <button type="submit">Teleport Smurf to Village</button>
            </form>
        </div>
      )
    }
}

const mapStateToProps = state => {
    return {error: state.error}
}

export default connect(mapStateToProps,{ teleportSmurf })(SmurfForm);
