import {Component} from 'react'
import './index.css'

class WinOrLoss extends Component {
  render() {
    const {Score, Replay} = this.props
    console.log(Score)
    const ReplayGame = () => {
      Replay()
    }
    return (
      <div className="GameBg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p>YOUR SCORE</p>
        <p className="scoretext">{Score}</p>
        <button className="replay" onClick={Replay}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <p>PLAY AGAIN</p>
        </button>
      </div>
    )
  }
}
export default WinOrLoss
