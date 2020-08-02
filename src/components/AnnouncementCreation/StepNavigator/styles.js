import styled from 'styled-components/native';
import { colors } from 'general';

export const Container = styled.View`
  flex-direction: row;
  padding: 0px 20px 20px 20px;
  height: 160px;
  align-items: center;
`;

export const CenterContent = styled.View`
  flex: 1;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${colors.light};
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 2px 0px;
`;
