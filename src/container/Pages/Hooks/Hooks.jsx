import React, {Component, useEffect, useState} from 'react';
import './Hooks.css'

// !stateful component
// class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

// !untuk mengganti title (dinamis)
//     componentDidMount() {
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentDidUpdate() {
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentWillUnmount() {
//         document.title = 'ReactJS Hello World'
//     }

//     render() {
//         return (
//             <div className="p-hooks">
//                 <p>Nilai saya saat ini adalah : {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0);

    // !componentDidMount, componentDidUpdate, componentWillUnmount
    useEffect(() => {
        document.title = `Title change: ${count}`;
        return () => {
            document.title = 'ReactJS Hello World';
        }
    })

    return (
        <div className="p-hooks">
            <p>Nilai saya saat ini adalah : {count}</p>
            <button onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
    )
}

export default Hooks;