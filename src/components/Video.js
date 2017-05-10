import React, {Component} from 'react';

class Video extends Component {
  state = {
    hover: false,
    extend: false
    }
  styles = {
    video: {
      height: '150px',
      width: '87%',
      backgroundImage: 'url(https://image.tmdb.org/t/p/w300'+this.props.backdrop_path+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto 100%',
      transition: 'all 0.1s'
    },
    videoHover: {
      height: '180px',
      width: '100%',
      backgroundImage: 'url(https://image.tmdb.org/t/p/w500'+this.props.backdrop_path+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto 100%',
      position: 'relative',
      marginLeft: '-8%',
      marginRight: '5%',
      marginTop: '-1rem',
      paddingRight: '0.5rem',
      paddingBottom: '1rem',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1,
      transition: 'all 0.2s'
    },
    bottom: {
      cursor: 'pointer',
      fontSize: '40px',
      marginLeft: '43%',
      marginRight: 'auto',
      marginBottom: '-20px'
    }
  }
  mouseOver = () => {
    setTimeout(function() {
      this.setState({hover: true})
    }.bind(this), 200)
  }
  mouseOut = () => {
    setTimeout(function() {
      this.setState({hover: false})
    }.bind(this), 200)
  }
  handleExtend = () => {
    this.props.handleExtend(this.props.id)
  }
  render () {
    const stylePic = this.state.hover ?  this.styles.videoHover : this.styles.video;
    return (
      <div style={stylePic} onMouseOver={this.mouseOver} onMouseLeave={this.mouseOut}>
          <div style={{flex: 1, paddingLeft: '5%', paddingTop: '2%', textShadow: '1px 2px #333', fontSize: '1.2rem'}}>{this.props.original_title}</div>
          {this.state.hover && <i style={this.styles.bottom} className="material-icons" onClick={this.handleExtend}>keyboard_arrow_down</i>}
      </div>
    )
  }
}

export default Video;
