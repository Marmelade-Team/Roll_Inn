import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LobbyCard from '../components/lobbies/lobbyCard'
import * as lobbiesActions from '../action/lobbiesActions'


function mapStateToProps (state) {
  return {
    store: {
        style: state.lobbiesReducer.style
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    lobbiesActions: bindActionCreators(lobbiesActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LobbyCard)
