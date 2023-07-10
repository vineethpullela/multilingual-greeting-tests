import {Component} from 'react'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeLanguage: 'English',
  }

  onClickChangeTab = event => {
    this.setState({
      activeLanguage: event.target.value,
    })
  }

  render() {
    const {activeLanguage} = this.state
    const activeData = languageGreetingsList.filter(
      each => each.buttonText === activeLanguage,
    )

    const {imageUrl, imageAltText} = activeData[0]

    return (
      <div className="app-container">
        <h1 className="main-heading">Multilingual Greetings</h1>
        <ul className="button-tabs-container">
          <li>
            {' '}
            <button
              type="button"
              className={`button ${
                activeLanguage === 'English' ? 'active' : ''
              }`}
              value="English"
              onClick={this.onClickChangeTab}
            >
              English
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`button ${activeLanguage === 'Tamil' ? 'active' : ''}`}
              value="Tamil"
              onClick={this.onClickChangeTab}
            >
              Tamil
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`button ${
                activeLanguage === 'Telugu' ? 'active' : ''
              }`}
              value="Telugu"
              onClick={this.onClickChangeTab}
            >
              Telugu
            </button>
          </li>
        </ul>
        <div className="greeting-container">
          <img src={imageUrl} alt={imageAltText} className="greeting-img" />
        </div>
      </div>
    )
  }
}
export default App
