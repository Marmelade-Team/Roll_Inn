import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Lobbies from '../components/lobbies/lobbies'
import * as lobbiesActions from '../action/lobbiesActions'


function mapStateToProps (state) {
  return {
    lobbies : state.lobbiesReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    lobbiesActions: bindActionCreators(lobbiesActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lobbies)
