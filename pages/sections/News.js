import React from 'react'
import FeedIcon from '@mui/icons-material/Feed';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

function News() {
  return (
    <div className="news-container">
      <div className="news-body">
        <div className="news-upper-div">
          <div className="news-upper-upper">
            <div className="img-div"></div>
            <div className="content-div">
              <h2 className="hech-two">Flosmart Fourth Quarter 2023 Earnings Conference Call</h2>
              <p className="news-para">Hunting PLC (LSE: HTG), the global engineering group, 
              today announces that as part of a wider</p>
              <button className="news-btn">READ MORE</button>
            </div>
          </div>
          <div className="news-upper-upper">
            <div className="img-div"></div>
            <div className="content-div">
              <h2 className="hech-two">Flosmart Fourth Quarter 2023 Earnings Conference Call</h2>
              <p className="news-para">Hunting PLC (LSE: HTG), the global engineering group, 
              today announces that as part of a wider</p>
              <button className="news-btn">READ MORE</button>
            </div>
          </div>
        </div>
        <div className="news-lower-div">
          <h4 className="news-header">NEWS FEED</h4>
          <div className="feed-div">
            <a href="#" className="feed-link">
              <FeedIcon className="feed-icon" />
              <span>The world is changing rapidly, and we need to increase sustainable power resources and CO₂</span>
            </a>
            <a href="#" className="feed-link">
              <FeedIcon className="feed-icon" />
              <span>The world is changing rapidly, and we need to increase sustainable power resources and CO₂</span>
            </a>
            <a href="#" className="feed-link">
              <FeedIcon className="feed-icon" />
              <span>The world is changing rapidly, and we need to increase sustainable power resources and CO₂</span>
            </a>
            <a href="#" className="feed-link">
              <FeedIcon className="feed-icon" />
              <span>The world is changing rapidly, and we need to increase sustainable power resources and CO₂</span>
            </a>
            <a href="#" className="feed-link">
              <FeedIcon className="feed-icon" />
              <span>The world is changing rapidly, and we need to increase sustainable power resources and CO₂</span>
            </a>
          </div>
          <Link href="/news" className="news-feed-btn">MORE NEWS&nbsp;&nbsp;&nbsp;<ArrowForwardIcon /></Link>
        </div>
      </div>
    </div>
  )
}

export default News