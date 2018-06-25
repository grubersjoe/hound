import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import { blockMargin } from '../utils/constants';
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
    const video = { width: 1614, height: 1080 };

    // see https://github.com/troybetz/react-youtube/issues/118
    const ResponsiveWrapper = styled.div`
      position: relative;
      height: 0;
      padding-bottom: ${(video.height / video.width) * 100}%;
      overflow: hidden;
      margin-bottom: ${blockMargin};
    `;

    const StyledYouTube = styled(YouTube)`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0.25rem;
    `;

    // FIXME: fix static origin
    return (
      <ResponsiveWrapper>
        <StyledYouTube
          videoId={this.state.videoId}
          opts={{
            playerVars: {
              color: 'white',
              rel: 0,
              showinfo: 0,
            },
          }}
        />
      </ResponsiveWrapper>
    );
  }
}

export default YouTubeVideo;
