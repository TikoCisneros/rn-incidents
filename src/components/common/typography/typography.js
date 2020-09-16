import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Palette from '../../../styles/palette';

const TYPOGRAPHY_TYPES = {
  HEADING_1: 'HEADING_1',
  HEADING_2: 'HEADING_2',
  HEADING_3: 'HEADING_3',
  HEADING_4: 'HEADING_4',
  HEADING_5: 'HEADING_5',
  BODY_TEXT: 'BODY_TEXT',
  SMALL_TEXT: 'SMALL_TEXT',
  TINY_TEXT: 'TINY_TEXT',
};

const getFontSize = (type) => {
  let size;

  switch (type) {
    case TYPOGRAPHY_TYPES.HEADING_1:
      size = '32px';
      break;
    case TYPOGRAPHY_TYPES.HEADING_2:
      size = '28px';
      break;
    case TYPOGRAPHY_TYPES.HEADING_3:
      size = '24px';
      break;
    case TYPOGRAPHY_TYPES.HEADING_4:
      size = '20px';
      break;
    case TYPOGRAPHY_TYPES.HEADING_5:
      size = '18px';
      break;
    case TYPOGRAPHY_TYPES.BODY_TEXT:
      size = '16px';
      break;
    case TYPOGRAPHY_TYPES.TINY_TEXT:
      size = '12px';
      break;
    case TYPOGRAPHY_TYPES.SMALL_TEXT:
    default:
      size = '14px';
      break;
  }

  return size;
};

const Typography = styled.Text`
  font-size: ${(props) => getFontSize(props.type)};
  font-family: Roboto;
  color: ${(props) => props.color ?? Palette.grayPrincipal};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

Typography.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  bold: PropTypes.bool,
};

export default Typography;

export { TYPOGRAPHY_TYPES };
