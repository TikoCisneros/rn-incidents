import { connect } from 'react-redux';
import Home from './home';
import { REQUEST_INCIDENTS_LIST } from '../../store/actions/incidents';

const mapStateToProps = ({
  auth: { username },
  incidents: { status, incidents },
}) => ({
  username,
  status,
  incidents,
});

const mapDispatchToProps = (dispatch) => ({
  getIncidents: () => dispatch(REQUEST_INCIDENTS_LIST.action()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
