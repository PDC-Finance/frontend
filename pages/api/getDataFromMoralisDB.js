var axios = require('axios');
var qs = require('qs');

const fetchPdcList = async (tableName, ownerAddress) => {
  console.log("fetching pdc list....", ownerAddress);
  var data = qs.stringify({
    where: `{"owner":"${ownerAddress}"}`,
  });
  var config = {
    method: "get",
    url: `https://o7qbw6blidxt.usemoralis.com:2053/server/classes/${tableName}?where={"owner":"0xed00f46b808f35436036e3785ba0d28ce9292f67"}`,
    headers: {
      "X-Parse-Application-Id": "gzTPVse171cOrai0yDjhUrNgwrLz9h3DPfD34poY",
      "X-Parse-REST-API-Key": "undefined",
      "X-Parse-Session-Token": "r:4b650e7ea934c293ef388efd12225f0f",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  try {
    const response = await axios(config);

    //console.log("data : ", response.data.results);
    return response.data.results;
  } catch (error) {
    console.log('error: ',error);
    return error.response;
  }
};
const handler = async (req, res) => {
  if (req.method == "POST") {
    res.status(200).json("not allowed");
  } else {
      if (req.query && req.query.tableName && req.query.ownerAddress) {
        const response = await fetchPdcList(req.query.tableName, req.query.ownerAddress);
       
          res.status(200).send(response);
        
      } else {
        res.status(300).json("invalid query parameters",req.query);
      }
    
  }
};
export default handler;
