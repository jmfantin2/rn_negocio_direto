import React from 'react';

import { Dimensions, View, StyleSheet, Text } from 'react-native';
import { useVideo } from 'context/AnnouncementCreation/Video';
import { useImage } from 'context/AnnouncementCreation/Image';

export default function MediaUploader() {
  const { video, setVideo } = useVideo();
  const { image, setImage } = useImage();
  return (
    <>
      <View style={custom.bar}>
        <View style={custom.section} />
        <View style={[custom.section, { backgroundColor: 'orange' }]} />
      </View>
    </>
  );
}

const screenW = Dimensions.get('window').width;
const custom = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'pink',
  },
  section: {
    width: screenW / 2,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
