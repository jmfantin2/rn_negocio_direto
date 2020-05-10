// dumb component => styled right away!

import styled from "styled-components/native";
import { general } from "../../../../../assets/general";

const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${general.styles.colors.light};
  padding: 30px;
`;

export default Container;
