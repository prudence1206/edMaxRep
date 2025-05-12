import React from 'react';
//import { text } from 'stream/consumers';



export class CustomInput extends React.Component <{errMessText:string[]},{valState:string, errMessArray:string[]}>{
    constructor(props:{errMessText:string[]}){
    super(props);
    this.state={valState:'', errMessArray:[]};
    }
    render(){
        return (
        <div>
            {this.state.errMessArray.length === 0  ? null : <h1 style={{color:"red"}}> 
                {this.state.errMessArray.at(-1)}
                </h1>}
        <input type="text" value={this.state.valState} onChange={(event)=>{
      
           if("<>?/';*$^&*%()!@#".includes(event.target.value[event.target.value.length-1])){
                return;
            }
            this.setState({valState:event.target.value});
            let messageArray: string[] = [...this.state.errMessArray];
            if (event.target.value.match(" ")){
                if (!messageArray.includes("Введен пробел")){
                    messageArray.push("Введен пробел");
                }

            }
            else if (messageArray.includes("Введен пробел")){
                messageArray.splice(messageArray.indexOf('Введен пробел'),1);
            }
            if(event.target.value.match(/[0-9]/)){
                if (!messageArray.includes("Введены цифры")){
                    messageArray.push('Введены цифры');
                }
            } 
            else if (messageArray.includes("Введены цифры")){
                messageArray.splice(messageArray.indexOf('Введены цифры'),1);
            }

            if (this.state.valState.length>10){
                if (!messageArray.includes("10 символов")){
                messageArray.push('10 символов');
            }
        } else if(messageArray.includes("10 символов")){
            messageArray.splice(messageArray.indexOf('10 символов'),1);
        }
            // }    объект ошибок!Сделать! добавить еще несколько ошибок!цензура(символ на звезду если есть в объекте)
            console.log(messageArray);
           
            this.setState({errMessArray: messageArray});
        }}/> 
        </div>
        )
    }
}