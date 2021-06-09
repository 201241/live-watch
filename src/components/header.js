import React from 'react'
import imagenHeader from '../assets/img/fastify.svg'

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