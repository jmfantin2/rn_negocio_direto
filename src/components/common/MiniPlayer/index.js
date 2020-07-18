import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Button, Chip, Card, Paragraph, Title } from 'react-native-paper';
import { Video } from 'expo-av';
import { colors } from 'general';
import { FontAwesome } from '@expo/vector-icons';

const MiniPlayer = ({ media }) => {
  const [selectedURL, setSelectedURL] = useState('');

  return (
    <View style={{ alignItems: 'center' }}>
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
          style={custom.media}
        />
      ) : (
        <Image style={custom.media} source={{ uri: selectedURL }} />
      )}

      <View style={custom.gallery}>
        <TouchableOpacity onPress={() => setSelectedURL('')}>
          <View style={custom.tile}>
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
          <View style={custom.tile}>
            <FontAwesome name="picture-o" size={42} color={colors.white} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const custom = StyleSheet.create({
  gallery: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  tile: {
    width: 75,
    height: 75,
    marginLeft: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: colors.darkCyan,
  },
  media: {
    marginBottom: 16,
    backgroundColor: colors.darker,
    borderRadius: 4,
    width: 300,
    height: 200,
  },
});

export default MiniPlayer;
