import React, { Component } from 'react';
import Axios from 'axios';
import Game from './Game';
import './GameList.css';
const apiUrl = 'http://www.campus-bordeaux.ovh:3002/joysticks/api/games';

export default class GameList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      filteredGames: []
    };
  }

  componentDidMount() {
    Axios.get(apiUrl)
      .then((response) => this.setState({ games: response.data, filteredGames: response.data }))
      .catch((err) => console.log(err));
  }

  deleteGame(index) {
    let { games } = this.state;
    games.splice(index, 1);
    this.setState({ games: [...games] });
  }

  filterByTheme(theme) {
    if (theme === '0') {
      this.setState({ filteredGames: this.state.games });
    } else {
      const filteredGames = this.state.games.filter(game => game.theme === theme);
      this.setState({ filteredGames });
    }
  }

  render() {
    console.log(this.state);
    const themes = [...new Set(this.state.games.map((game) => game.theme))];
    return (
      <div className="games-container">
        <select
          onChange={(e) => this.filterByTheme(e.target.value)}
        >
          <option value="0">All themes</option>
          {
            themes.map((theme) => {
              return <option value={theme}>{theme}</option>;
            })
          }
        </select>
        {
          this.state.filteredGames.map((game, idx) => {
            return <Game {...game} key={idx} deleteGame={() => this.deleteGame(idx)} />;
          })
        }
      </div>
    );
  }
}
