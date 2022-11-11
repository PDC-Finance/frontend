import React, { useEffect, useState } from "react";
import { convertDate, formatDate } from "../utils/web3";

const ShowPdcList = ({pdcList}:any) => {
  return (
    <>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Created Date</th>
            <th>Receiver</th>
            <th>Token</th>
            <th>Payment DateTime</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {pdcList.map((item: any, index: number) => (
            <tr key={index}>
              <td>{convertDate(item.createdAt)}</td>
              <td>{item.receiver}</td>
              <td>{item.token}</td>
              <td>{formatDate(item.date)}</td>
              <td>{item.amount / 10 ** 18}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShowPdcList