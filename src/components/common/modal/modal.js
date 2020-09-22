import React from 'react';
import { Modal as RNModal } from 'react-native';
import { ModalBackground, ModalContainer } from './modal.styles';

const Modal = ({ visible, children, containerStyles }) => (
  <RNModal animationType="fade" visible={visible} transparent>
    <ModalBackground>
      <ModalContainer style={containerStyles}>{children}</ModalContainer>
    </ModalBackground>
  </RNModal>
);

export default Modal;
