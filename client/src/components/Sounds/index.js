import React, { Component } from 'react';
import Sound from 'react-sound';
import shufflesound from './mp3/shuffling-cards-5.mp3'
import failsound from './mp3/fail-buzzer-02.mp3'
import bellring from './mp3/small-bell-ring-01a.mp3'
import dreamharp from './mp3/dream-harp-03.mp3'

class ShuffleSound extends Component {
  render() {
    return (
      <Sound
      url={shufflesound}
      playStatus={Sound.status.PLAYING}
      />
    );
  }
}

class FailSound extends Component {
  render() {
    return (
      <Sound
      url={failsound}
      playStatus={Sound.status.PLAYING}
      />
    );
  }
}

class BellSound extends Component {
  render() {
    return (
      <Sound
      url={bellring}
      playStatus={Sound.status.PLAYING}
      />
    );
  }
}

class DoneSound extends Component {
  render() {
    return (
      <Sound
      url={dreamharp}
      playStatus={Sound.status.PLAYING}
      />
    );
  }
}

export { ShuffleSound, FailSound, BellSound, DoneSound };