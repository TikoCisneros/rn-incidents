import styled from 'styled-components/native';
import Palette from '../../../styles/palette';
import Typography from '../../common/typography';

const Description = styled(Typography)`
  text-align: center;
`;

const CompanyName = styled(Typography)`
  margin: 15px 0;
`;

const Copyrigth = styled(Typography)`
  color: ${Palette.black};
  font-style: italic;
  margin-top: 25px;
`;

export { Description, CompanyName, Copyrigth };
