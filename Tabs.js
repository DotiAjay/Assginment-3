import {Component} from 'react'
import './index.css'

class Tabs extends Component {
  render() {
    const {TabDetails, OnTabClick, onActive} = this.props
    const {displayText, tabId} = TabDetails
    const tabChange = () => {
      OnTabClick(tabId)
    }
    const style = onActive && 'selectedButton'

    return (
      <li key={tabId}>
        <button className={`${style} Tabbutton`} onClick={tabChange}>
          {displayText}
        </button>
      </li>
    )
  }
}

export default Tabs
