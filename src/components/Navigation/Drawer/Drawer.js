import React, {Component} from 'react'
import './Drawer.scss'

const links = [1, 2, 3];

class Drawer extends Component{
    renderLinks(){
        return links.map((link, index) => {
            return(
            <li key={index}>
                <a> Link {link}</a>
            </li>
            )
        })
    }

    render() {
        const cls  = ['Drawers'];

        if(!this.props.isOpen){
            cls.push('Drawer.close')
        }

        return(
            <nav className={'Drawers'}>
                {this.renderLinks()}
            </nav>
        )
    }
}

export default Drawer