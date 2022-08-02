// Write your code here

import {Component} from 'react'

import './index.css'

const HeadsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsImage = '    https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossOutputImage: HeadsImage, totalHeadCount: 0, totalTailCount: 0}

  tossTheCoin = () => {
    const {totalHeadCount, totalTailCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = totalHeadCount
    let latestTailCount = totalTailCount

    if (toss === 0) {
      tossImage = HeadsImage
      latestHeadCount += 1
    } else {
      tossImage = TailsImage
      latestTailCount += 1
    }

    this.setState({
      tossOutputImage: tossImage,
      totalHeadCount: latestHeadCount,
      totalTailCount: latestTailCount,
    })
  }

  render() {
    const {tossOutputImage, totalHeadCount, totalTailCount} = this.state
    const totalCount = totalHeadCount + totalTailCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={tossOutputImage}
            alt="toss result"
            className="toss-output-img-styling"
          />
          <button type="button" className="button" onClick={this.tossTheCoin}>
            Toss Coin
          </button>
          <div className="counting-container">
            <p className="counter">Total:{totalCount}</p>
            <p className="counter">Heads:{totalHeadCount}</p>
            <p className="counter">Tails:{totalTailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
