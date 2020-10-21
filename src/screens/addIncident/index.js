import { connect } from 'react-redux';
import AddIncident from './addIncident';
import {
  REQUEST_ADD_INCIDENT,
  REQUEST_INCIDENTS_LIST,
} from '../../store/actions/incidents';

const mapStateToProps = ({
  incidents: {
    catalogs: { definitions, types, subtypes },
  },
}) => ({
  definitions,
  types,
  subtypes,
});

const mapDispatchToProps = (dispatch) => ({
  addNewIncident: ({ definition, type, subtype, description }, callback) =>
    dispatch(
      REQUEST_ADD_INCIDENT.action(
        { definition, type, subtype, description },
        callback,
      ),
    ),
  getIncidents: () => dispatch(REQUEST_INCIDENTS_LIST.action()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIncident);
