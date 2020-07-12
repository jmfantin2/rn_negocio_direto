import React from "react";
import { Container, TimeLabel } from "./styles";
import { FontAwesome } from "@expo/vector-icons";

export default function TimeIndicator({ days }) {
  return (
    <Container>
      <TimeLabel>
        {days < 1 ? "Hoje" : days > 1 ? days + " dias" : days + " dia"}
      </TimeLabel>
      <FontAwesome
        name="clock-o"
        size={20}
        style={{ marginLeft: 10, marginRight: 10 }}
      />
    </Container>
  );
}
