import api from '../../services/storage';

const sendImage = async (imageObj) => {
  const formdata = new FormData();

  formdata.append('file', {
    uri: imageObj.uri,
    name: imageObj.filename,
    type: imageObj.type,
  });

  try {
    const response = await api.post('/v1/storage', formdata);

    console.log('RESPOSTA', response.data);
  } catch (e) {
    console.log('Erro:', e);
  }
};

export { sendImage };
