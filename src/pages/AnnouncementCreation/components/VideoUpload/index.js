import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useVideo } from "../../context/Video";

import { Area, Message, CameraIcon, CheckIcon } from "./styles";

export default function VideoUpload() {
  const { video, setVideo } = useVideo();

  function handleVideoUpload() {
    //TBD
    setVideo("s78q35va12");
  }

  return (
    <TouchableOpacity onPress={() => handleVideoUpload()}>
      <Area>
        {video ? (
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
