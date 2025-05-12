import React from 'react';
import ReactDOM from 'react-dom/client';
import { CountComponent } from './add_listner_fun';
import { CustomInput } from './input_class_component';
import {GreenComponent} from './green_sqrt'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<CountComponent value={20}/>);
root.render(<CustomInput errMessText={["Введен пробел"]}/>);
root.render(<GreenComponent/>);

// const var_el = <div>123</div>;

// root.render(var_el);

// type ComponentProps ={
//   width:number;
//   height:number;
//   backgroundColor:string;
//   border:string;
//   children?: React.ReactNode;
// }

// function ComponentRed(props: ComponentProps){
//   const array_al = [];
//   for (let i = 0; i<5; i++){
//   array_al.push(<div style={{width:props.width, height:props.height, backgroundColor:props.backgroundColor, border:props.border}}></div>);
//   }
//   return <div>{array_al}</div>;
// }

// root.render(<ComponentRed width={10} height={10} backgroundColor='red' border='1px solid black'/>);

// class ComponentClassRed extends React.Component<ComponentProps,{}>{
  
//   render() {
//     const array_al = [];
//     for (let i = 0; i<5; i++){
//       array_al.push(<div style={{width:this.props.width, height:this.props.height, backgroundColor:this.props.backgroundColor, border:this.props.border}}>{this.props.children}</div>);
//       }
//       return <div>{array_al}</div>;
//   }
// }

// root.render(<ComponentClassRed width={200} height={200} backgroundColor='green' border='1px solid pink' children={<ComponentRed width={10} height={10} backgroundColor='red' border='1px solid black'/>}></ComponentClassRed>);




// function ComponentWithoutJsx({width,height,backgroundColor,border}:ComponentProps){
//   const array_al = [];
//     for (let i = 0; i<5; i++){
//       array_al.push(React.createElement("div",{style:{width:width, height:height, backgroundColor:backgroundColor, border:border}},i));
//       }
//     return React.createElement("div",null,array_al);  
// }
// root.render(React.createElement(ComponentWithoutJsx,{width:100, height:100, backgroundColor:"grey", border:"1px solid black"}));

// class ComponentClassWithOutJsx extends React.Component<ComponentProps,{}>{
//   render() {
//    const {width, height, backgroundColor, border}= this.props;
//    const array_al = [];
//    for (let i = 0; i<5; i++){
//      array_al.push(React.createElement("div",{style:{width:width, height:height, backgroundColor:backgroundColor, border:border}},i));
//      }
//    return React.createElement("div",null,array_al); 
//   }
// }
// root.render(React.createElement(ComponentClassWithOutJsx,{width:100, height:100, backgroundColor:"pink", border:"1px solid black"}));
// //props 5 elements


//classcomponent with props 



//Пять в пяти использую функциональный в классовом