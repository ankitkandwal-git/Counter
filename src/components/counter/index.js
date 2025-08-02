import {Component} from 'react'

import './index.css'

class Counter extends Component{
    state = {
        count : 0
    }
    onIncreaseCount = ()=>{
        this.setState(prevState=>({
            count : prevState.count +1
        }),console.log("count done"))
    }
    onDecreaseCount = () =>{
        this.setState(prevState=>({
            count : prevState.count -1
        })) 
    }
    render(){
        const {count} = this.state
        return(
            <div className="app-container">
                <div className="counter-container">
                  <h1 className="heading">Counter</h1>
                  <p className="paragraph">Count is : {count}</p>
                  <div className="button-container">
                    <button className="increase-button" type="button" onClick={this.onIncreaseCount}>
                      Increase      
                    </button>
                    <button className="decrease-button" type="button" onClick={this.onDecreaseCount}>
                        Decrease
                    </button>
                  </div>
                </div>
            </div>
        )
    }
}
export default Counter