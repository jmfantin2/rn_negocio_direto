import React, { useState } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { useVideo } from 'context/AnnouncementCreation/Video';

import { Area, Message, CameraIcon, CheckIcon } from './styles';
import { colors } from 'general';

export default function VideoUpload() {
  const { video, setVideo } = useVideo();
  const [loading, setLoading] = useState(false);

  function handleVideoUpload() {
    //TBD
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2222);
    setVideo('some_url');
  }

  return (
    <TouchableOpacity onPress={() => handleVideoUpload()}>
      <Area>
        {loading ? (
          <>
            <ActivityIndicator size="large" color={colors.ruralGreen} />
            <Message> POR FAVOR AGUARDE </Message>
          </>
        ) : video ? (
          <>
            <CheckIcon />
            <Message> VÍDEO SELECIONADO </Message>
          </>
        ) : (
          <>
            <CameraIcon />
            <Message> ENVIE UM VÍDEO </Message>
          </>
        )}
      </Area>
    </TouchableOpacity>
  );
}
