// dumb component => styled right away!

import styled from "styled-components/native";
import { general } from "../../../../../assets/general";

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${general.styles.colors.light};
  padding: 30px;
`;

export default Container;
