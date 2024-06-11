const axios = require('axios');
const qs = require('qs');
const { config } = require("../data/secret");
const { taseKey, taseSecret } = config;

const authHeader = Buffer.from(`${taseKey}:${taseSecret}`).toString('base64');

exports.getIndiceData = async (req, res) => {
  let indexId = req.query.indexId
  try {
    const tokenResponse = await axios.post(
      'https://openapigw.tase.co.il/tase/prod/oauth/oauth2/token',
      qs.stringify({
        grant_type: 'client_credentials',
        scope: 'tase'
      }),
      {
        headers: {
          Authorization: `Basic ${authHeader}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    const accessToken = tokenResponse.data.access_token;

    const apiResponse = await axios.get(
      `https://openapigw.tase.co.il/tase/prod/api/v1/tase-indices-online-data/last-rate?indexId=${indexId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Accept-Language': 'he-IL',
          'Content-Type': 'application/json'
        }
      }
    );

    res.json(apiResponse.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
};
