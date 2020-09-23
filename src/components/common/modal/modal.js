import React from 'react';
import { Modal as RNModal } from 'react-native';
import PropTypes from 'prop-types';

import { ModalBackground, ModalContainer } from './modal.styles';

const Modal = ({ visible, children, containerStyle }) => (
  <RNModal animationType="fade" visible={visible} transparent>
    <ModalBackground>
      <ModalContainer style={containerStyle}>{children}</ModalContainer>
    </ModalBackground>
  </RNModal>
);

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Modal;
