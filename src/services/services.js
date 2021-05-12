import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://codebae-backend.herokuapp.com/api',
  baseURL: 'http://localhost:8080/api',
});

export const checkReferral = referCode =>
  instance.put('/checkRefer', { referCode: referCode });

export const createUser = user => instance.post('/createUser', user);

export const redirectToPayU = (
  txnid,
  amount,
  name,
  firstname,
  email,
  phone,
  lastname,
  hash
) =>
  axios.post(
    `https://secure.payu.in`,
    {
      key: 'SRRiLT',
      txnid: txnid,
      amount: amount,
      productinfo: name,
      firstname: firstname,
      email: email,
      phone: phone,
      lastname: lastname,
      surl: 'http:localhost:3000/confirmBooking',
      furl: 'http:localhost:3000/confirmBooking',
      hash: hash,
      pg: 'DC',
    },
    {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
