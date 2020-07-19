import React, { useState, useEffect } from 'react';

import { useVideo } from 'context/AnnouncementCreation/Video';
import { useImage } from 'context/AnnouncementCreation/Image';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import {
  ActivityIndicator,
  Dimensions,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';

import { colors } from 'general';

import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function MediaUploader() {
  const { video, setVideo } = useVideo();
  const [uploadingV, setUploadingV] = useState(false);
  const { image, setImage } = useImage();
  const [uploadingI, setUploadingI] = useState(false);

  useEffect(() => {
    getPermissionAsync();
  }, []);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

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
        <TouchableOpacity onPress={() => _pickImage()}>
          <View style={custom.section}>
            {uploadingI ? (
              <ActivityIndicator size="large" color={colors.oceanGreen} />
            ) : image ? (
              <>
                {image && (
                  <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                  />
                )}
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
