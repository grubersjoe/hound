import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import { getYouTubeId } from '../services/regions';

class YouTubeVideo extends React.Component {
  state = {
    videoId: null,
  };

  componentDidMount() {
    getYouTubeId()
      .then(videoId => this.setState({ videoId }));
  }

  render() {
    const StyledYouTube = styled(YouTube)`
      margin-bottom: 3rem;
      border-radius: 0.25rem;
    `;

    return (
      <StyledYouTube
        videoId={this.state.videoId}
        opts={{
          width: 480,
          height: 321,
          playerVars: {
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
          },
        }}
      />
    );
  }
}

export default YouTubeVideo;
