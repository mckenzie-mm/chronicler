/* This is a wrapper for the javascript fetch function*/

import { API_URL } from "../config";

type DataType = {
  evenArr: number[]
  oddArr: number[]
};

async function fetchWrapper(listData: DataType) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(listData)
    };

    const response = await fetch(API_URL, requestOptions); 
    if (response.ok) {
      const data = await response.json(); 
      return {err: false, evenArr: listData.evenArr, oddArr: listData.oddArr, sum: data.sum};
    } else {
      if (response.status === 400) { // bad request from client
        const errorMessage = await response.text();
        return {message: errorMessage, err: true};
      } else if (response.status === 404) { // page not found
        return {message: "page not found", err: true};
      }
      else {
        return {message: "page not found", err: true};
      }
    }
  } catch (error) {
    console.error('Network or other error:', error);
    return {message: 'Network or other error:', err: true};
  }
}

export default fetchWrapper;