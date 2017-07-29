import React from 'react';
import ReactDOM from 'react-dom'
import Father from './app3.js'

class App extends React.Component{
    render(){
        return (
            <div>
<h1>hello react</h1>
        <Father></Father>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('app'))