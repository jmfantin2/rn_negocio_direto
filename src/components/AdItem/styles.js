import styled from 'styled-components/native'
import {general} from '../../../assets/general'

export const Container = styled.View`
  flex: 1;
  background-color: ${general.styles.colors.white};
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${general.styles.colors.light};
  padding: 10px;
`;

export const AdImage = styled.Image`
  height: 52px;
  width: 70px;
  border-radius: 4px;
  align-self: center;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

export const AdName = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;
