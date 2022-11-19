import axios from "axios";

const fetchTransactions = async (reqBody) => {
  const url = `https://api.covalenthq.com/v1/${reqBody.chainId}/address/${reqBody.walletAddress}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${process.env.COVALENT_API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    return error;
  }
};
const handler = async (req, res) => {
  if (req.method == "POST") {
    res.status(200).json("not allowed");
  } else {
    if (req.query && req.query.walletAddress) {
      const response = await fetchTransactions(req.query);
      res.status(200).send(response);
    } else {
      res.status(300).json("invalid paramerters, wallet address and contract address required");
    }
  }
};
export default handler;
