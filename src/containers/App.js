/**
 * Created by gongy on 4/11/16.
 */
import {connect} from 'react-redux';
import ActionTypes from '../actions/action-types';
import {push} from 'react-router-redux'
import App from '../components/App';
import Actions from '../actions/'
import withLifecycle from '../utils/hoc-lifecycle';

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
};

const mapDispatchToProps = (dispatch) => {
  const fetchAccount = () => dispatch(Actions.fetchAccount.requested());

  return {
    goTo: (url) => dispatch(push(url)),
    signOut: () => dispatch({type: ActionTypes.SIGN_OUT.REQUESTED}),
    onWillMount: [fetchAccount]
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLifecycle(App));
