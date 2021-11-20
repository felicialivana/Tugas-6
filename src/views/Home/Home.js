//Home.js
import React from 'react';
import Main from '../../Main';

export default class Home extends React.Component{
    
   //// TUGAS 4.1 
   constructor(props){
    super(props);
    this.state = {name : this.props.name}
    }
    render(){
        return(
            <div>
                <Main />
            </div>
        )
    }
}




//4.5. & 4.6 STATE
//         constructor(props){
//         super(props);
//         this.state = {name : this.props.name}
//     }
//     render(){
//         return(
//             <div>
//                 <h2>Title Home Component</h2>
//                 <p>Hello my name is {this.state.name}</p>
//                 <button onClick={()=>this.setState({name:'Tyrion Lannister'})}>Change my name</button>
//             </div>
//         )
//     }
// }




// constructor(props){
//         super(props);
//         this.state={name: this.props.name}
//     }

//     render(){
//         return(
//             <div>
//                 <h2>Ini adalah halaman Home</h2>
//             </div>
//         )
//     }
//     }




    //4.4. PROPS
//     render(){
//         return(
//             <div>
//                 <h2>Title Home Component</h2>
//                 <p>Hello my name is {this.props.name}</p>
//             </div>
//         )
//     }
// }





//     //4.3. Class Component Home
//     render(){
//         return(
//             <div>
//                 <h2>Title Home Component</h2>
//                 <p>Content Home Component</p>
//             </div>
//         )
//     }
// }
