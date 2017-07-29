import React,{Component} from 'react'
import PropTypes from 'prop-types';
import Child from './Child'
class Father extends Component{
    constructor(){
        super()
        this.state={
            xing:'fei'
        }
    }
   
  
    getChildContext(){
        return {
            xing:this.state.xing
        }
    }
  
    render(){
        return(
            <Child></Child>
        )
    }
}
Father.childContextTypes={
 xing:PropTypes.string
}
export default Father