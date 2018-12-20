import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CardAdventure from '../components/game/cardAdventure'
import * as gameActions from '../action/gameActions'


function mapStateToProps (state) {
  return {
    store: {
        adventure: state.gameReducer.adventure
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    gameActions: bindActionCreators(gameActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardAdventure)
