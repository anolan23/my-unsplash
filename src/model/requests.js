import axios from 'axios';

export async function getImages(label) {
  try {
    const response = await axios.get('/api/images', {
      params: {
        label,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addImage(image) {
  try {
    const response = await axios.post('/api/images', image);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteImage(id) {
  try {
    const response = await axios.delete(`/api/images/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
