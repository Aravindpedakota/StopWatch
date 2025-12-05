import {Component} from 'react'
import './index.css'

class StopWatch extends Component{
    state= {isTimerRunning:false,timeElapsedInSeconds:0}

    componentWillUnmount=()=>{
        clearInterval(this.timerInterval)
    }

    updateTimer=()=>{
        this.setState(prevState=>({
             timeElapsedInSeconds:prevState.timeElapsedInSeconds+1
        }))
    }

    startTimer=()=>{
        this.timerInterval = setInterval(this.updateTimer,1000)
        this.setState({isTimerRunning:true})
    }

    stopTimer=()=>{
        clearInterval(this.timerInterval)
        this.setState({isTimerRunning:false})
    }

    resetTimer=()=>{
        clearInterval(this.timerInterval)
        this.setState({isTimerRunning:false, timeElapsedInSeconds:0})
    }

    renderSeconds=()=>{
        const {timeElapsedInSeconds}=this.state
        const seconds = Math.floor(timeElapsedInSeconds%60)
        if (seconds < 10 ){
            return `0${seconds}`
        }return seconds
    }  

    renderMinutes=()=>{
        const {timeElapsedInSeconds}=this.state
        const minutes = Math.floor(timeElapsedInSeconds/60)
        if (minutes < 10 ){
            return `0${minutes}`
        }return minutes
    }

    render(){
        const {isTimerRunning}= this.state
        const time = `${this.renderMinutes()}:${this.renderSeconds()}`
        return (
            <div className='main-container'>
                <h1 className="head">Stop Watch</h1>
                <div className="sub-container">
                    <p>timer</p>
                    <h1>{time}</h1>
                    <div className="button-container">
                        <button type="button" className="start" disabled={isTimerRunning} onClick={this.startTimer}>Start</button>
                        <button type="button" className="stop" onClick={this.stopTimer}>Stop</button>
                        <button type='button' className="reset" onClick={this.resetTimer}>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default StopWatch