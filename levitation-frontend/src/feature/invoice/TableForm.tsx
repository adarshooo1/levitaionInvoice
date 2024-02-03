import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TableItem } from "./types";

type Props = {
  productName: string;
  setProductName: React.Dispatch<React.SetStateAction<string>>;
  productPrice: number;
  setProductPrice: React.Dispatch<React.SetStateAction<number>>;
  productQuantity: number;
  setProductQuantity: React.Dispatch<React.SetStateAction<number>>;
  productTotal: number;
  setProductTotal: React.Dispatch<React.SetStateAction<number>>;
  gst: number;
  setGST: React.Dispatch<React.SetStateAction<number>>;
  grandTotal: number;
  tableList: TableItem[]; // Use the defined interface or type
  setTableList: React.Dispatch<React.SetStateAction<TableItem[]>>;
};

const TableForm = ({
  productName,
  setProductName,
  productQuantity,
  setProductQuantity,
  productPrice,
  setProductPrice,
  productTotal,
  setProductTotal,
  gst,
  setGST,
  grandTotal,
  tableList,
  setTableList,
}: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!productName || !productQuantity || !productPrice || gst) {
      alert("Please enter product detail first");
      return;
    }
    const newItems = {
      id: uuidv4(),
      productName,
      productQuantity,
      productPrice,
      productTotal,
    };
    setProductName("");
    setProductQuantity(0);
    setProductPrice(0);
    setProductTotal(0);
    setTableList([...tableList, newItems]);
  };

  const deleteRow = (id: string) => {
    setTableList(tableList.filter((row) => row.id !== id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="my-10">
          <div className="flex flex-col">
            <label
              className="mb-1 text-xs font-bold text-gray-800"
              htmlFor="productName"
            >
              Product
            </label>
            <input
              className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
              type="text"
              placeholder="Product Name"
              id="productName"
              value={productName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setProductName(e.target.value);
              }}
            />
          </div>

          <div className="md:grid grid-cols-3 gap-5">
            <div className="flex flex-col">
              <label
                className="mb-1 text-xs font-bold text-gray-800"
                htmlFor="productQuantity"
              >
                Quantity
              </label>
              <input
                className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                type="number"
                placeholder="Product Quantity"
                id="productQuantity"
                value={productQuantity ? productQuantity : ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setProductQuantity(Number(e.target.value));
                }}
              />
            </div>

            <div className="flex flex-col">
              <label
                className="mb-1 text-xs font-bold text-gray-800"
                htmlFor="productPrice"
              >
                Price
              </label>
              <input
                className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                type="number"
                placeholder="Product Price"
                id="productPrice"
                value={productPrice ? productPrice : ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setProductPrice(Number(e.target.value));
                }}
              />
            </div>

            <div className="flex flex-col">
              <label
                className="mb-1 text-xs font-bold text-gray-800"
                htmlFor="productTotal"
              >
                Total
              </label>
              <p className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold">
                {productTotal ? productTotal : 0}
              </p>
            </div>
          </div>

          <button
            className="border-none outline-none bg-blue-300 text-gray-800 font-bold shadow-md my-3 rounded px-3 py-1"
            type="submit"
          >
            Add More Item
          </button>

          {tableList.length <= 0 ? (
            ""
          ) : (
            <table className="w-[100%] my-10">
              <thead className="bg-gray-300">
                <tr className="justify-center ">
                  <td className="p-1">Product</td>

                  <td className="p-1">Qty</td>

                  <td className="p-1">Price</td>

                  <td className="p-1">Total</td>

                  <td className="p-1">Action</td>
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
                      <td>
                        <button
                          onClick={() => {
                            deleteRow(id);
                          }}
                          type="button"
                          className="bg-red-300 m-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tbody>
                  </React.Fragment>
                )
              )}
            </table>
          )}

          <div className="md:grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label
                className="mb-1 text-xs font-bold text-gray-800"
                htmlFor="productPrice"
              >
                GST
              </label>
              <input
                className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                type="gst"
                placeholder="GST"
                id="productPrice"
                value={gst ? gst : ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setGST(Number(e.target.value));
                }}
              />
            </div>

            <div className="flex flex-col">
              <label
                className="mb-1 text-xs font-bold text-gray-800"
                htmlFor="productTotal"
              >
                Grand Total
              </label>
              <p className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold">
                {grandTotal ? grandTotal : 0}
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default TableForm;
