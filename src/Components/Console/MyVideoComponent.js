import React from 'react';
import MyVideo from './categoryvideo.mp4';

class MyVideoComponent extends React.Component {
  render() {
    return (
      <video width="100%" height="100%" preload="auto" autoplay="true" loop="true">
        <source src={MyVideo} type="video/mp4" />
      </video>
    );
  }
}

export default MyVideoComponent;
