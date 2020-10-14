import { connect } from 'react-redux';
import Login from './login';
import { REQUEST_AUTHENTICATE_USER } from '../../store/actions/auth';

const mapDispatchToProps = (dispatch) => ({
  doLogin: ({ username, password }, callback) =>
    dispatch(
      REQUEST_AUTHENTICATE_USER.action({ username, password }, callback),
    ),
});

export default connect(null, mapDispatchToProps)(Login);
