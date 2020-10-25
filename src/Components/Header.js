import React,{Component} from 'react';
import './Header.css'
import logo from '../logo.svg'

class Header extends Component{
    render(){
        const {titulo,boolean}=this.props;
        return(
            <div className="Header">
                <img src={boolean && logo} className="App-logo" />
                <p>
                    {titulo}
                </p>
            </div>
        );
    }
}

export default Header;