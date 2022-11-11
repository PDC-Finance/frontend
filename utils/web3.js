import axios from "axios";

export const fetchTokenBalancesFromMoralis = (address, callback) => {
  var config = {
    method: "get",
    url: `https://deep-index.moralis.io/api/v2/${address}/erc20?chain=mumbai`,
    headers: {
      "X-API-Key": "PXkjLss3RlL4CquQtGeLKoG1fkrgpWxlQ7RIpYMyG8wZkAqM1KBXjNHWFceHfCHy",
      "Content-Type": "application/json",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      if (response && response.data) {
        callback(response.data);
        //setTokenBalanceList(response.data);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const fetchNftListFromMoralis = (address, callback) => {
  const options = {
    method: "GET",
    url: `https://deep-index.moralis.io/api/v2/${address}/nft`,
    params: { chain: "mumbai", format: "decimal", normalizeMetadata: "true" },
    headers: { accept: "application/json", "X-API-Key": "PXkjLss3RlL4CquQtGeLKoG1fkrgpWxlQ7RIpYMyG8wZkAqM1KBXjNHWFceHfCHy" },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log("nft-result:  ", response.data);
      callback(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
export function formatDate(value) {
  if (!value) {
    return "";
  }
  const time = new Date(Number(value * 1000));
  if (isNaN(time.valueOf())) {
    return "";
  }
  return time.toLocaleString("en-US", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "numeric", hour12: true });
}

export function convertDate(date) {
  return new Date(date).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}
module.exports = {
  fetchTokenBalancesFromMoralis: fetchTokenBalancesFromMoralis,
  fetchNftListFromMoralis: fetchNftListFromMoralis,
  convertDate: convertDate,
  formatDate: formatDate,
};
