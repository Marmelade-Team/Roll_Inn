import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CardQuest from '../components/game/cardQuest'
import * as gameActions from '../action/gameActions'


function mapStateToProps (state) {
  return {
    store: {
        quest: state.gameReducer.quest
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    gameActions: bindActionCreators(gameActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardQuest)
