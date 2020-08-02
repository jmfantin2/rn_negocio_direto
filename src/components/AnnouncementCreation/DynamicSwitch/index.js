import React, { useEffect } from 'react';
import { Switch, TouchableOpacity, Alert, View } from 'react-native';
import { Button } from 'react-native-paper';
import { SwitchContainer, Label, Description } from './styles';
import { AntDesign } from '@expo/vector-icons';

import { colors } from 'general';

import { useDynamic } from 'context/AnnouncementCreation/Dynamic';
import { useDaysActive } from 'context/AnnouncementCreation/DaysActive';
import { useOtherCategory } from 'context/AnnouncementCreation/OtherCategory';

export default function DynamicSwitch() {
  const { daysActive, setDaysActive } = useDaysActive(); //WRITE
  const { setOtherCategory } = useOtherCategory(); //WRITE
  const { dynamic, toggle } = useDynamic();

  useEffect(() => {
    if (dynamic && daysActive > 3) {
      setDaysActive(3);
    }
    setOtherCategory(null);
    //invalids second animal info, for safety
    //(submit won't accept it if null)
  }, [dynamic]);

  return (
    <View style={{ alignItems: 'center' }}>
      <Button
        style={{
          backgroundColor: colors.noticeBlue,
          width: 200,
          marginBottom: 16,
        }}
        mode="contained"
        onPress={() => (dynamic ? toggle(false) : toggle(true))}
      >
        {dynamic ? 'PREÇO DINÂMICO' : 'PREÇO FIXO'}
      </Button>

      <TouchableOpacity
        onPress={() =>
          Alert.alert(
            'Modalidades de anúncio',
            dynamic
              ? 'Dinâmico: o valor do seu anúncio fica em aberto, aproveitando ao máximo o potencial de venda através da proposta dos compradores. Em preço dinâmico, você pode anunciar apenas uma categoria de gado por até 3 dias.'
              : 'Fixo: o valor mínimo desejado para o anúncio é determinado, mas pode não ser atingido. Em preço fixo, você pode anunciar por até 7 dias e declarar duas categorias de gado.',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false }
          )
        }
      >
        <AntDesign name="questioncircleo" size={22} color={colors.noticeBlue} />
      </TouchableOpacity>
    </View>
  );
}
