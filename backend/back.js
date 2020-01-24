const express = require('express');
const axios = require('axios');

const app = express();


app.get('/filtered', (request, response) => {
  axios.get(`https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=${this.state.sun}&water=${this.state.water}&pets=${this.state.pet}`)
    .then(response => {
      return response.data;
    })
})