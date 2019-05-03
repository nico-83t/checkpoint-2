import React, { Component } from 'react';
import Axios from 'axios';
import YouTube from 'react-youtube';
const apiUrl = 'http://www.campus-bordeaux.ovh:3002/joysticks/api/games';
export default class Trailer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: { trailer: '' }
    };
  }

  componentDidMount() {
    Axios.get(`${apiUrl}/${this.props.match.params.id}`)
      .then((response) => this.setState({ game: response.data }))
      .catch((err) => console.log(err));
  }

  extractIdFromUrl(url) {
    // https://www.youtube.com/watch?v=_loRDrWCv10
    return url.split('?v=')[1];
  }

  render() {
    return (
      <div>
        <YouTube
          videoId={this.extractIdFromUrl(this.state.game.trailer)}
        />
      </div>
    );
  }
}
