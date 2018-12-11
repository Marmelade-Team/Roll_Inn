import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GameGrid from '../components/game/gameGrid'
import * as gameActions from '../action/gameActions'


function mapStateToProps (state) {
  return {
    store: state.gameReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    GameActions: bindActionCreators(gameActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameGrid)
