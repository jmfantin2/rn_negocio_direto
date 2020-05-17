import React, { useState } from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { useVideo } from "../../context/Video";

import { Area, Message, CameraIcon, CheckIcon } from "./styles";
import { general } from "../../../../../assets/general";

export default function VideoUpload() {
  const { video, setVideo } = useVideo();
  const [loading, setLoading] = useState(false);

  function handleVideoUpload() {
    //TBD
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2222);
    setVideo("s78q35va12");
  }

  return (
    <TouchableOpacity onPress={() => handleVideoUpload()}>
      <Area>
        {loading ? (
          <>
            <ActivityIndicator
              size="large"
              color={general.styles.colors.oceanGreen}
            />
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
