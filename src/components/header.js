import React from 'react'
import imagenHeader from '../assets/img/whatsapp.png'
import css from '../assets/css/app.css'

class Header extends React.Component {

    render() {
        return (
            <header>
                <img src={imagenHeader}/>
            </header>
        )
    }
}

export default Header;