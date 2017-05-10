import React, { Component } from 'react';
import ReactStars from 'react-stars'

import Menu from './Menu';

const styles = {
  container: {
    padding: '0 20px'
  },
  title: {
    alignSelf: 'flex-start',
    order: 22
  },
  stars: {
    order: 1
  },
  overview: {
    marginRight: '12%',
    lineHeight: '1.4',
    fontSize: '1.2rem'
  }
}

class Overview extends Component {

  render() {
    console.log(this.props);
    const { release_date, original_title, overview, vote_average } = this.props;
    const stars = vote_average/2+1;
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>{original_title}</h2>
        <p>{release_date}</p>
        <ReactStars
            edit={false}
            count={5}
            size={24}
            value={stars}
            color2={'#ffd700'} />
        <p style={styles.overview}>{overview}</p>
      </div>
    )
  }
}

export default Overview;
