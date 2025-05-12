import React from 'react';


export class GreenComponent extends React.Component <{},{count:number}> {
    constructor(props:{}){
        super(props);
        this.state={count:0};
    }
    componentDidMount(): void {
        setInterval(() => {
            this.setState({count:this.state.count+1});
            console.log(this.state.count);  
        }, 
        1000); 
    }
    render(){
        const style:React.CSSProperties={
            width:200,
            height:200,
            backgroundColor:'green',
            fontSize:40
        }
        

        return (
            <div style={style}>{this.state.count}</div>
        )
    };
}