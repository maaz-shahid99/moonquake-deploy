const axios = require('axios').default;

export const getData = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/moonQuake/get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return res;
  } catch (e) {}
};
