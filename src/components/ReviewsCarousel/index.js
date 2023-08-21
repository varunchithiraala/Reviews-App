// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onLeftArrowClicked = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({activeReviewIndex: prevState.activeReviewIndex - 1}))
    }
  }

  onRightArrowClicked = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({activeReviewIndex: prevState.activeReviewIndex + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewIndex
    ]

    return (
      <div className="reviews-app-container">
        <h1 className="reviews-app-heading">Reviews</h1>
        <div className="reviews-carousel-container">
          <button
            className="reviews-app-button"
            onClick={this.onLeftArrowClicked}
            type="button"
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow-image"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} className="review-image" alt={username} />
            <p className="review-username">{username}</p>
            <p className="review-company">{companyName}</p>
            <p className="review-description">{description}</p>
          </div>
          <button
            className="reviews-app-button"
            onClick={this.onRightArrowClicked}
            type="button"
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow-image"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
