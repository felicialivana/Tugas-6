import React, { Component } from 'react';
import './Input.css'

export default class Input extends Component {
    
    //4.10. PROPS FUNCTION
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="input">
                <input type="text" name="your_name" placeholder="Enter Your Name" onChange={(ev)=> this.props.getValues(ev.target.name, ev.target.value)} />

                <input type="text" name="status" placeholder="Enter Your Status" onChange={(ev)=> this.props.getValues(ev.target.name, ev.target.value)} />
            </div>
            
        );
    }
}


    //4.9. UPDATE STATE DENGAN INPUT
//     constructor(){
//         super();
//         this.state={status: ''}
//     }

//     render(){
//         return(
            
//             <div className="input">

//                 <input type="text" name="status" placeholder="Enter Your Status" onChange={(ev)=> this.setState({status:ev.target.value})} />
//                 <p>Your status : {this.state.status}</p>
//             </div>
            
//         );
//     }
// }