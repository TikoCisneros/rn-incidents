import React from 'react';
import PropTypes from 'prop-types';

import MessagePrompt from '../../messagePrompt';
import { PROMPT_TYPES } from '../../../common/constants';
import Typography, { TYPOGRAPHY_TYPES } from '../../common/typography';

import { Description, CompanyName, Copyrigth } from './infoPrompt.styles';

const InfoPrompt = ({ visible, onHidePrompt }) => (
  <MessagePrompt
    type={PROMPT_TYPES.info}
    visible={visible}
    onHideModal={onHidePrompt}
    title="Sity App">
    <Description type={TYPOGRAPHY_TYPES.BODY_TEXT}>Esta es una aplicación desarrollada por:</Description>
    <CompanyName type={TYPOGRAPHY_TYPES.BODY_TEXT} bold>Up-Company</CompanyName>
    <Typography>www.up-company.dev</Typography>
    <Typography>Telf: 0980365958</Typography>
    <Typography>up.company19@gmail.com</Typography>
    <Copyrigth type={TYPOGRAPHY_TYPES.TINY_TEXT}>Todos los derechos reservados.</Copyrigth>
  </MessagePrompt>
);

InfoPrompt.propTypes = {
  visible: PropTypes.bool.isRequired,
  onHidePrompt: PropTypes.func.isRequired,
};

export default InfoPrompt;
