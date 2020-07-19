import api from '../../services/storage';
import axios from 'axios';

const sendImage = async (imageObj) => {
  const formdata = new FormData();
  formdata.append('image', imageObj);
  try {
    await api.post('/v1/storage', formdata);
  } catch (e) {
    console.log('Erro:', e);
  }
};

export { sendImage };
