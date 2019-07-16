import React from 'react';
import CountDisplay from './CountDisplay'

class CounterClass extends React.Component{
    state ={
        count:0
    }

    addToCount = () =>{
        this.setState(
            prevState => ({count:prevState.count+1})
        )
    }

    removeTOCount = () => {
        this.setState(
            prevState => ({count:prevState.count-1})
        )
    }

    render(){
        return (
            <div className ="counter">
                <CountDisplay count={this.state.count}/>

                <div className="counter-button">
                    <button onClick={this.addToCount}>Añadir</button>
                    <button onClick={this.removeTOCount}>Quitar</button>
                </div>
            </div>
        )
    }
}

export default CounterClass;