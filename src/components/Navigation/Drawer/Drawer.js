import React, {Component} from 'react'
import  classes from './Drawer.scss'

const links = [1, 2, 3];

class Drawer extends Component{
    static renderLinks(){
        return links.map((link, index) => {
            return(
            <li key={index}>
                <a href={'#'}> Link {link}</a>
            </li>
            )
        })
    }


    render() {
        const cls = [];
        if(!this.props.isOpen){
            cls.push(classes.Drawer)
        }

        return(
            <nav className={cls.join(' ')}>
                {Drawer.renderLinks()}
            </nav>
        )
    }
}

export default Drawer