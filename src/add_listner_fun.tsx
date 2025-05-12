//import { count } from 'console';
import React from 'react';
//import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
//   );

export class CountComponent extends React.Component<{value:number},{valState:number}>{
    constructor(props:{value:number}){
        super(props);
        this.state={valState:this.props.value}
        
    }
    onClickHandler(){
        this.setState({valState:this.state.valState+1})
        console.log(this.state.valState);
    }
    render() {
        //let countClick = 0;
        
        return (<div
         style={{width:200,height:200,backgroundColor:"green",border:"1px solid black"}}
         onClick={()=>{this.onClickHandler()}}
         >
        {this.state.valState}
         </div>);
    } 
}
