import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Button, Chip, Card, Paragraph, Title } from 'react-native-paper';
import { Video } from 'expo-av';
import { colors } from 'general';
import { FontAwesome } from '@expo/vector-icons';

const MiniPlayer = ({ media }) => {
  const [selectedURL, setSelectedURL] = useState('');

  return (
    <View>
      {selectedURL === '' ? (
        <Video
          useNativeControls={true}
          source={media}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={false}
          isLooping
          style={[custom.media, { height: 200 }]}
        />
      ) : (
        <Image
          style={[
            custom.media,
            { width: 300, height: 200, backgroundColor: 'black' },
          ]}
          source={{ uri: selectedURL }}
        />
      )}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={() => setSelectedURL('')}>
          <View style={[custom.tile, { backgroundColor: colors.darker }]}>
            <FontAwesome name="play" size={42} color={colors.white} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setSelectedURL(
              'https://i.ytimg.com/vi/mhgpg2w4HMM/maxresdefault.jpg'
            )
          }
        >
          <View style={[custom.tile, { backgroundColor: 'orange' }]}>
            <FontAwesome name="picture-o" size={42} color={colors.white} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setSelectedURL('https://i.ytimg.com/vi/wA73guYV4Yk/hqdefault.jpg')
          }
        >
          <View style={[custom.tile, { backgroundColor: 'pink' }]}>
            <FontAwesome name="picture-o" size={42} color={colors.white} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const custom = StyleSheet.create({
  tile: {
    height: 75,
    width: 75,
    marginLeft: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  media: {
    marginBottom: 16,
    backgroundColor: colors.darker,
    borderRadius: 4,
  },
});

export default MiniPlayer;
