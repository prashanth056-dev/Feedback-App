import './index.css'
import {Component} from 'react'
import EmojiCont from '../EmojiCont'

class Feedback extends Component {
  state = {value: ''}

  onClickBtn = () => {
    this.setState({value: 'prashanth'})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {value} = this.state
    return value.length === 0 ? (
      <div className="mainBg">
        <div className="card">
          <h1 className="head">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="row">
            {emojis.map(eachItem => (
              <EmojiCont
                key={eachItem.id}
                obj={eachItem}
                func={this.onClickBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <div className="mainBg">
        <div className="card">
          <img src={loveEmojiUrl} className="emoji" alt="love emoji" />
          <h1>Thank You!</h1>
          <p>
            We will use your feedback to improve our costumer support
            performance
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
