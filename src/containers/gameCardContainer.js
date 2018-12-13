import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import gameCard from '../components/game/gameCard'
import * as gameActions from '../action/gameActions'


function mapStateToProps (state) {
  return {
    store: {
        resizingCard: state.gameReducer.resizingCard
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    gameActions: bindActionCreators(gameActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(gameCard)
