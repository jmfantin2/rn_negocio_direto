import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useMainCategory } from 'context/AnnouncementCreation/MainCategory';
import { useMainObservations } from 'context/AnnouncementCreation/MainObservations';

import { colors } from 'general';

export default function MainObservationsInput() {
  const { mainCategory } = useMainCategory(); // READ
  const { mainObservations, setMainObservations } = useMainObservations();

  const [possibleVariants, setPossibleVariants] = useState([]);

  useEffect(() => {
    setPossibleVariants(getPossibleVariants(mainCategory));
  }, [mainCategory]);

  return (
    <>
      <Text>Forneça mais informações</Text>

      {possibleVariants.map((v) => (
        <Text key={v.key} style={{ fontWeight: 'bold' }}>
          {v.case
            .charAt(0)
            .toUpperCase()
            .concat(v.case.substring(1))
            .replace('_', ' ')}
          ?
        </Text>
      ))}
      {/*
        <Input
          textAlignVertical={'top'}
          multiline={true}
          value={mainObservations}
          onChangeText={(text) => setMainObservations(text)}
        />
        */}
      <TextInput
        label="Observações"
        value={mainObservations}
        onChangeText={(text) => setMainObservations(text)}
        multiline={true}
        mode={'outlined'}
      />
    </>
  );
}

function getPossibleVariants(value) {
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
