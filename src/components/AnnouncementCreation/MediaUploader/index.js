import React, { useState } from 'react';

import { useVideo } from 'context/AnnouncementCreation/Video';
import { useImage } from 'context/AnnouncementCreation/Image';

import {
  ActivityIndicator,
  Dimensions,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { colors } from 'general';

import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function MediaUploader() {
  const { video, setVideo } = useVideo();
  const [uploadingV, setUploadingV] = useState(false);
  const { image, setImage } = useImage();
  const [uploadingI, setUploadingI] = useState(false);

  function handleVideoUpload() {
    setUploadingV(true);
    setTimeout(() => {
      setUploadingV(false);
    }, 2222);
    setVideo('some_url');
  }

  function handleImageUpload() {
    setUploadingI(true);
    setTimeout(() => {
      setUploadingI(false);
    }, 2222);
    setImage('some_url');
  }

  return (
    <>
      <View style={custom.bar}>
        <TouchableOpacity onPress={() => handleVideoUpload()}>
          <View style={custom.section}>
            {uploadingV ? (
              <ActivityIndicator size="large" color={colors.oceanGreen} />
            ) : video ? (
              <>
                <CheckIcon />
                <Text style={custom.label}>VÍDEO</Text>
              </>
            ) : (
              <CameraIcon />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImageUpload()}>
          <View style={custom.section}>
            {uploadingI ? (
              <ActivityIndicator size="large" color={colors.oceanGreen} />
            ) : image ? (
              <>
                <CheckIcon />
                <Text style={custom.label}>IMAGEM</Text>
              </>
            ) : (
              <PictureIcon />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const screenW = Dimensions.get('window').width;
const custom = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    height: 80,
  },
  section: {
    height: 80,
    width: screenW / 2,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: colors.oceanGreen,
    borderEndColor: colors.white,
    borderStartColor: colors.white,
    borderTopColor: colors.white,
  },
  label: {
    fontWeight: 'bold',
    color: colors.oceanGreen,
  },
});

export const CameraIcon = () => {
  return <Ionicons name="md-videocam" size={42} color={colors.oceanGreen} />;
};

export const PictureIcon = () => {
  return <FontAwesome name="picture-o" size={42} color={colors.oceanGreen} />;
};

export const CheckIcon = () => {
  return (
    <Ionicons
      name="md-checkmark-circle-outline"
      size={42}
      color={colors.oceanGreen}
    />
  );
};
