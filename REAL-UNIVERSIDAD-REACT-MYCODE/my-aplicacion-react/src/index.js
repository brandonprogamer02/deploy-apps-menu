import React from 'react'
import ReactDOM from 'react-dom'

// const Comp = (props) => {
//     console.log(props)
//     return <div>
//         <p>Mi nombre es {props.nombre} y tengo {props.edad} anos de edad</p>
//     </div>
// }

class Comp extends React.Component {
    constructor() {
        super()
        this.state = {
            nombre: 'mere',  
            cantidad: 0
        }
    }
    render() {
        // console.log('esta es la instancia de objeto Comp',this)
        return <div>
            <p>state.nombre es: {this.state.nombre} y la state.cantidad es: {this.state.cantidad}</p>
            <button onClick={
                () => {
                    this.setState({nombre: 'nuevo estado', cantidad: this.state.cantidad+ 1})
                    
                }
            }>Click me</button>

        </div>
    }

}

const Container = () => (
    <div>
        <span>=============================================</span>
            <Comp state ={ { nombre: 'primer valor', cantidad: 300.00}}/>
        <span>=============================================</span>
    </div>
)

ReactDOM.render(<Container/>, document.getElementById('root'));




