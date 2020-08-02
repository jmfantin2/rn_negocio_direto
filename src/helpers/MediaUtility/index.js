import api from '../../services/storage';

const sendMedia = async (mediaObj) => {
  const formdata = new FormData();

  formdata.append('file', {
    uri: mediaObj.uri,
    name: mediaObj.filename,
    type: mediaObj.type,
  });

  try {
    const response = await api.post('/v1/storage', formdata);

    console.log('RESPOSTA', response.data);
    return response.data;
  } catch (e) {
    console.log('Erro:', e);
  }
};

export { sendMedia };
