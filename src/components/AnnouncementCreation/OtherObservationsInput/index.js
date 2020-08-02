import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Chip } from 'react-native-paper';
import { useOtherCategory } from 'context/AnnouncementCreation/OtherCategory';
import { useOtherObservations } from 'context/AnnouncementCreation/OtherObservations';

import { colors } from 'general';

export default function OtherObservationsInput() {
  const { otherCategory } = useOtherCategory(); // READ
  const { otherObservations, setOtherObservations } = useOtherObservations();

  const [possibleVariants, setPossibleVariants] = useState([]);

  useEffect(() => {
    setPossibleVariants(getPossibleVariants(otherCategory));
  }, [otherCategory]);

  return (
    <>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: colors.businessGreen,
        }}
      >
        Forneça mais informações
      </Text>

      <TextInput
        label="Observações"
        value={otherObservations}
        onChangeText={(text) => setOtherObservations(text)}
        multiline={true}
        mode={'outlined'}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 4,
        }}
      >
        {possibleVariants.map((v) => (
          <Chip
            key={v.key}
            style={{
              fontWeight: 'bold',
              marginRight: 2,
              backgroundColor: colors.oceanGreen,
            }}
            textStyle={{ color: colors.white }}
          >
            {v.case
              .charAt(0)
              .toUpperCase()
              .concat(v.case.substring(1))
              .replace('_', ' ')}
            ?
          </Chip>
        ))}
      </View>
    </>
  );
}

function getPossibleVariants(value) {
  if (!value) {
    return [];
  }
  let possibleVariants = [];
  switch (value.toLowerCase()) {
    case 'novilho':
      possibleVariants = [{ key: 0, case: 'castrados' }];
      break;
    case 'terneiro':
      possibleVariants = [{ key: 0, case: 'castrados' }];
      break;
    case 'touro':
      possibleVariants = [{ key: 0, case: 'com_registro' }];
      break;
    case 'novilha':
      possibleVariants = [{ key: 0, case: 'prenhes' }];
      break;
    case 'vaca':
      possibleVariants = [
        { key: 0, case: 'prenhes' },
        { key: 1, case: 'com_cria' },
      ];
      break;
    default:
      // "terneira", "vaca invernar", null
      possibleVariants = [];
      break;
  }
  // console.log("Possible variants for", value, ":", possibleVariants);
  return possibleVariants;
}
