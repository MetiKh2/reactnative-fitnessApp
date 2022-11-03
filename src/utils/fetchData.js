/* eslint-disable prettier/prettier */
export const exerciseOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": '1024195529mshff1c0b0a78945a2p1809dejsnd5cb1bd09a08',
      "X-RapidAPI-Host":'exercisedb.p.rapidapi.com'
    },
  };
  export const youtubeOpions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": '1024195529mshff1c0b0a78945a2p1809dejsnd5cb1bd09a08',
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
  };
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };