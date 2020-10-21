import { connect } from 'react-redux';
import Login from './login';
import { REQUEST_AUTHENTICATE_USER } from '../../store/actions/auth';
import { REQUEST_INCIDENTS_CATALOGS } from '../../store/actions/incidents';

const mapDispatchToProps = (dispatch) => ({
  doLogin: ({ username, password }, callback) =>
    dispatch(
      REQUEST_AUTHENTICATE_USER.action({ username, password }, callback),
    ),
  fetchIncidentCatalogs: () => dispatch(REQUEST_INCIDENTS_CATALOGS.action()),
});

export default connect(null, mapDispatchToProps)(Login);
