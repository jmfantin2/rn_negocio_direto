import React, { useState, useEffect } from 'react';
import { Card } from 'react-native-paper';

import { useVideo } from 'context/AnnouncementCreation/Video';
import { useImage } from 'context/AnnouncementCreation/Image';

import { sendImage } from 'helpers/MediaUtility';

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
} from 'react-native';

import { colors } from 'general';

import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function MediaUploader() {
  const { video, setVideo } = useVideo();
  const { image, setImage } = useImage();
  //const [imgPreview, setImgPreview] = useState(null);
  // /\ uncomment this (and setImgPreview in _pickImage)
  //if you want to preview the sent image (use a Image tag for it)
  const [sendingImage, setSendingImage] = useState(false);

  useEffect(() => {
    getPermissionAsync();
  }, []);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Precisamos da permissão de CAMERA.');
      }
    }
  };

  const _pickImage = async () => {
    setSendingImage(true);
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (result.cancelled) return;

      //console.log('RESULTADO', result);

      const uri = result.uri;
      const filename = uri.split('/').pop();

      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : `image`;

      const img = {
        uri,
        filename,
        type,
      };

      console.log('LOCAL IMAGE:', img);

      //setImgPreview(uri);
      const payload = await sendImage(img);
      console.log('IMAGE PAYLOAD:', payload);
      setImage(payload);
    } catch (e) {
      console.log(e);
    }
  };

  function handleVideoUpload() {
    setVideo('some_url');
  }

  return (
    <>
      <View style={custom.bar}>
        <TouchableOpacity onPress={() => handleVideoUpload()}>
          <Card style={custom.section}>
            <Card.Content
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              {video ? (
                <>
                  <CheckIcon />
                  <Text style={custom.label}>VÍDEO</Text>
                </>
              ) : (
                <CameraIcon />
              )}
            </Card.Content>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={_pickImage}>
          <Card style={custom.section}>
            <Card.Content
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              {image ? (
                <>
                  <CheckIcon />
                  <Text style={custom.label}>IMAGEM</Text>
                </>
              ) : sendingImage ? (
                <ActivityIndicator size="large" color={colors.ruralGreen} />
              ) : (
                <PictureIcon />
              )}
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
    </>
  );
}

const screenW = Dimensions.get('window').width;
const custom = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    height: 80,
    width: screenW / 2 - 12,
    marginLeft: 4,
    marginRight: 4,
  },
  label: {
    fontWeight: 'bold',
    color: colors.ruralGreen,
  },
});

export const CameraIcon = () => {
  return <Ionicons name="md-videocam" size={42} color={colors.noticeBlue} />;
};

export const PictureIcon = () => {
  return <FontAwesome name="picture-o" size={42} color={colors.noticeBlue} />;
};

export const CheckIcon = () => {
  return (
    <Ionicons
      name="md-checkmark-circle-outline"
      size={42}
      color={colors.ruralGreen}
    />
  );
};
