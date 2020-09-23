import React from 'react';
import PropTypes from 'prop-types';

import { TYPOGRAPHY_TYPES } from '../common/typography';
import Modal from '../common/modal';
import Button from '../common/button';

import {
  PromptIcon,
  PromptTitle,
  PromptDescription,
  containerStyles,
} from './messagePrompt.styles';
import Icons from '../../styles/icons';

const MessagePrompt = ({
  visible,
  onHideModal,
  title,
  description,
  type,
  children,
}) => (
  <Modal visible={visible} containerStyle={containerStyles}>
    <PromptIcon name={Icons[type]} colorType={type} />
    <PromptTitle type={TYPOGRAPHY_TYPES.HEADING_2} colorType={type}>
      {title}
    </PromptTitle>
    {children || (
      <PromptDescription type={TYPOGRAPHY_TYPES.BODY_TEXT}>
        {description}
      </PromptDescription>
    )}
    <Button title="Cerrar" onPress={onHideModal} secondary />
  </Modal>
);

MessagePrompt.propTypes = {
  visible: PropTypes.bool.isRequired,
  onHideModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string.isRequired,
};

MessagePrompt.defaultProps = {
  description: undefined,
};

export default MessagePrompt;
