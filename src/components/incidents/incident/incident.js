import React from 'react';
import PropTypes from 'prop-types';
import { numerationsRemoval } from '../../../common/util';
import Typography, { TYPOGRAPHY_TYPES } from '../../common/typography';

import { IncidentContainer, IncidentStatus } from './incident.styles';

const Incident = ({
  type: { value: typeValue },
  subtype: { value: subtypeValue },
  status,
}) => (
  <IncidentContainer>
    <Typography type={TYPOGRAPHY_TYPES.BODY_TEXT} bold>
      {numerationsRemoval(subtypeValue)}
    </Typography>
    <Typography type={TYPOGRAPHY_TYPES.SMALL_TEXT}>
      {numerationsRemoval(typeValue)}
    </Typography>
    <IncidentStatus type={TYPOGRAPHY_TYPES.TINY_TEXT}>{status}</IncidentStatus>
  </IncidentContainer>
);

Incident.propTypes = {
  type: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
  subtype: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
  status: PropTypes.string.isRequired,
};

export default Incident;
