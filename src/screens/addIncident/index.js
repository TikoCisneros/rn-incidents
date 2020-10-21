import { connect } from 'react-redux';
import AddIncident from './addIncident';

const mapStateToProps = ({
  incidents: {
    catalogs: { definitions, types, subtypes },
  },
}) => ({
  definitions,
  types,
  subtypes,
});

export default connect(mapStateToProps)(AddIncident);
