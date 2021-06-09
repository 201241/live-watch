import React from 'react'

class Main extends React.Component {
    render(){
        return (
            <main>
                <section id="chat">
                    <section id="chat-entradas">
                        Hola Mundo
                    </section>
                    <section id="chat-salidas">
                        <div className="chat-salidas_input">
                            <input id="entrada" type="text"/>
                            <button id="boton-enviar">enviar</button>
                        </div>
                    </section>
                </section>
            </main>
        )
    }
}

export default Main;