import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../App'
import * as gameActions from '../action/gameActions'


function mapStateToProps (state) {
  return {
    game : state.gameReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    GameActions: bindActionCreators(gameActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
