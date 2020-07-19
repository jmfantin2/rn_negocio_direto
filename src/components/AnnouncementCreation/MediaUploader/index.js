import React, { useState, useEffect } from 'react';

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
  Button,
  Image,
} from 'react-native';

import { colors } from 'general';

import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function MediaUploader() {
  const { video, setVideo } = useVideo();
  const { image, setImage } = useImage();
  const [imgPreview, setImgPreview] = useState(null);

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

      setImgPreview(uri);
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
          <View style={custom.section}>
            {video ? (
              <>
                <CheckIcon />
                <Text style={custom.label}>VÍDEO</Text>
              </>
            ) : (
              <CameraIcon />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={_pickImage}>
          <View style={custom.section}>
            {imgPreview ? (
              <>
                {imgPreview && (
                  <Image
                    source={{ uri: imgPreview }}
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
