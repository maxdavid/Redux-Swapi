import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
import { fetchCharacters } from '../actions';

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      return <h1>Loading...</h1>;
    }
    console.log(this.props);
    return (
      <div className='CharactersList_wrapper'>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.characters.characters,
    fetching: state.characters.fetching,
    error: state.characters.error
  };
};

export default connect(
  mapStateToProps,
  { fetchCharacters }
)(CharacterListView);
