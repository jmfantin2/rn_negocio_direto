import React from "react";
import { TouchableOpacity, Text } from "react-native";
import TimeIndicator from "../TimeIndicator";
import { navigate } from "../../utils";

import {
  Container,
  CattleContainer,
  CategoryAndBreed,
  Tag,
  TagLabel,
  DynamicBadge,
  FixedBadge,
} from "./styles";

export default function AdItem({ product }) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigate("AnnouncementDetail", { id: "5eb0dcfb5323ef2e375f02dd" })
      }
    >
      <Container>
        {parseInt(product.currentPrice) === 0 ? (
          <DynamicBadge />
        ) : (
          <FixedBadge />
        )}
        <CattleContainer>
          <CategoryAndBreed>
            <Tag category={product.category[0].name}>
              <TagLabel>
                {product.category[0].name
                  .replace("INVERNAR", "INV")
                  .replace("_", " ")}
                {product.category.length === 2 ? <Text> {"&"} +</Text> : null}
              </TagLabel>
            </Tag>
            <Tag breed={product.breed[0].name}>
              <TagLabel>
                {product.breed[0].name
                  .replace("CRUZAS", "CZ")
                  .replace("ABERDEEN", "ABD")
                  .replace("_", " ")}
              </TagLabel>
            </Tag>
          </CategoryAndBreed>
          <Tag quantity={"true"} category={product.category[0].name}>
            <TagLabel type="quantity">{product.animalsQuantity}</TagLabel>
          </Tag>
          <TimeIndicator days={product.endDate} />
        </CattleContainer>
      </Container>
    </TouchableOpacity>
  );
}
