import React,{Component} from 'react';
import logoTec from '../logoTec.jpg'

class Logo extends Component{
    render(){
        return(
            <img src={logoTec}  alt="logo" />
        );
    }
}

export default Logo;