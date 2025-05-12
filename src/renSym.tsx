import React from 'react';


export class RendSymComponent extends React.Component<{height:number,symbol:string},{currentHeight:number,currentString:string}>{
    constructor(props:{height:number,symbol:string}){
        super(props);
        this.state = {currentHeight:1, currentString:''}; 
    }
    componentDidMount(): void {
        
        let a = setInterval(()=>{
            let curSt=''
            for (let i=0; i < this.state.currentHeight; i++){
            curSt += this.props.symbol;
        }
        this.setState({currentString:curSt, currentHeight:this.state.currentHeight+1});
        if (this.state.currentHeight===this.props.height){
            clearInterval(a);
        }
        }, 1000);
        
    }
    render(){
        return <div>{this.state.currentString}</div>
    }
}
