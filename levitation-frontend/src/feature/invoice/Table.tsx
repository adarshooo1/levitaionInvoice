import React from "react";
import { TableItem } from "./types";

type Props = {
  // productName: string;
  // productQuantity: number;
  // productPrice: number;
  // productTotal: number;
  gst: number;
  grandTotal: number;
  tableList: TableItem[];
  productSubTotal: number;
};

const Table = ({
  // productName,
  // productQuantity,
  // productPrice,
  // productTotal,
  gst,
  grandTotal,
  tableList,
  productSubTotal,
}: Props) => {
  return (
    <>
      {/* Table Product */}
      <table className="w-[100%] my-10">
        <thead className="bg-gray-300">
          <tr className="justify-center ">
            <td className="p-1">Product</td>
            <td className="p-1">Quantity</td>
            <td className="p-1">Price</td>
            <td className="p-1">Total</td>
          </tr>
        </thead>
        {tableList.map(
          ({
            id,
            productName,
            productQuantity,
            productPrice,
            productTotal,
          }) => (
            <React.Fragment key={id}>
              <tbody>
                <td className="p-1">{productName}</td>
                <td className="p-1">{productQuantity}</td>
                <td className="p-1">{productPrice}</td>
                <td className="p-1">{productTotal}</td>
              </tbody>
            </React.Fragment>
          )
        )}
      </table>

      {/* Table Product Tax */}

      {productSubTotal ? (
        <div className="flex justify-end w-full p-1">
          <table className="w-1/2">
            <tr>
              <th className="text-left">Sub Total</th>
              <td>{productSubTotal || ""}</td>
            </tr>
            <tr>
              <th className="text-left">GST</th>
              <td>
                {gst || ""}
                {gst ? "%" : ""}
              </td>
            </tr>
            <tr>
              <th className="text-left">Grand Total</th>
              <td>{grandTotal || ""}</td>
            </tr>
          </table>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Table;
