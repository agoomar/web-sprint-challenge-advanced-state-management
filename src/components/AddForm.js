import React, { useState } from 'react';
import {connect} from 'react-redux';
import { postSmurf,addSmurf } from '../actions';

class AddForm extends React.Component {
    state = {
        name:'',
        position:'',
        nickname: '',
        description:''
    };

    handleChange = e => {
        this.setState({...this.state,[e.target.name]:e.target.value});
    }

    handleAddSmurf =  e => {
        e.preventDefault();
        this.props.postSmurf(this.state);
        this.props.addSmurf(this.state);
    }

    render() {
        console.log(this.props);
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleAddSmurf} >
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={this.handleChange} name="name" id="name" className="required"/>            
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position:</label><br/>
                    <input onChange={this.handleChange} name="position" id="position" className="required"/>            
                </div>

                <div className="form-group">
                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input onChange={this.handleChange} name="nickname" id="nickname" className="required"/>            
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label><br/>
                    <input onChange={this.handleChange} name="description" id="description" />            
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.state.error}</div>
                <button>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = state =>{
    return{
        state: state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postSmurf: (smurf) => dispatch(postSmurf(smurf)),
        addSmurf: (smurf) => dispatch(addSmurf(smurf))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value. 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.