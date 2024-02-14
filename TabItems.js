import {Component} from 'react'
import './index.css'

class TabItems extends Component {
  render() {
    const {imageDetails, onImageClick} = this.props
    const {imageUrl, thumbnailUrl, category, id} = imageDetails
    const MatchImg = () => {
      onImageClick(id)
    }
    return (
      <li key={id}>
        <button className="but">
          <img
            src={thumbnailUrl}
            className="listImg"
            alt="thumbnail"
            onClick={MatchImg}
          />
        </button>
      </li>
    )
  }
}

export default TabItems
