// dumb component => styled right away!

import styled from "styled-components/native";
import { colors, strings } from "../../../../../assets/general";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.light};
  padding: 30px;
`;

export default Container;
