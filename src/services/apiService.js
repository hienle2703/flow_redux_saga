const url =
  'https://gist.githubusercontent.com/nvthai/65dc75b2a575498d782748d4d0fabee4/raw/5742d9f7bb71abf4a1cc422c332b75a92e4ffad4/radio_songs.json';

function* getAudioApi() {
  const response = yield fetch(url);
  const data = yield response.status === 200 ? yield response.json() : null;
  return data;
}

export const apiService = {getAudioApi};
