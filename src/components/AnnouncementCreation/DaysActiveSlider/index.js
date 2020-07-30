import React, { useEffect } from 'react';
import { Slider } from 'react-native';
import { SwitchContainer, Label } from './styles';
import { colors } from 'general';

import { useDynamic } from 'context/AnnouncementCreation/Dynamic';
import { useDaysActive } from 'context/AnnouncementCreation/DaysActive';

export default function DaysActiveSlider() {
  const { dynamic } = useDynamic();
  const { daysActive, setDaysActive } = useDaysActive();

  useEffect(() => {
    setDaysActive(2);
  }, [dynamic]);

  return (
    <SwitchContainer>
      <Label>Dias em Anúncio</Label>
      <Slider
        minimumTrackTintColor={colors.noticeBlue}
        maximumTrackTintColor={colors.noticeBlue}
        thumbTintColor={colors.noticeBlue}
        minimumValue={2}
        maximumValue={dynamic ? 3 : 7}
        step={1}
        value={daysActive}
        onValueChange={(value) => setDaysActive(value)}
        style={{ width: '100%' }}
      />
      <Label style={{ color: colors.noticeBlue }}>
        {daysActive.toString()}
      </Label>
    </SwitchContainer>
  );
}
