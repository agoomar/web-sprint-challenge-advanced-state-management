import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

 export class SmurfList extends React.Component {
     componentDidMount(){
         this.props.fetchSmurfs();
     }

    render() { 
        const isLoading= this.props.state.isLoading;
        const testSmurfs = this.props.state.smurfs;
        return(
            isLoading ? <div>Loading</div> 
            : <div>
                {testSmurfs.map((item, index) => <Smurf key={index} smurf={item}/>)}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        state: state
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchSmurfs: () => dispatch(fetchSmurfs())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.