import React, { Component } from 'react';
import axios from 'axios';



function startSession () {
  return axios.post(`https://sparkapi.com/v1/session${params}`)
    .then(function (response) {
      return response.json();
    });
}

