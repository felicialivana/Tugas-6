import React, {Component} from 'react';
import './Card.css';

const Card = {
    Container : (props)=>{
        return <div className="card"> {props.children} </div>
    },
    Header : (props)=>{
        return <div className="card-header"> {props.children} </div>
    },
    Body : (props)=>{
        return <div className="card-body"> {props.children} </div>
    }
}

export default Card;



// export default class Card extends Component{
//     ////4.7. CHILDREN COMPONENT
//     render(){
//         return(
//             <div className="card">
//                 <div className="card-header">
//                     My Card
//                 </div>
//                 <div className="card-body">
//                     {this.props.children}
//                 </div>
//             </div> 
//         )
//     }
// }