import React, { useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import Notes from "./Notes";
import Table from "./Table";
import InvoiceDetails from "./InvoiceDetails";
import ClientDetail from "./ClientDetail";
import MainDetail from "./MainDetail";
import Header from "./Header";
import TableForm from "./TableForm";

import { useReactToPrint } from "react-to-print";

import { TableItem } from "./types";

// type Props = {};

const Invoice = () => {
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [showInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState("Adarsh Singh");
  const [email, setEmail] = useState("levitationinfotech@gmail.com");
  const [phone, setPhone] = useState("+91-9999999900");
  const [address, setAddress] = useState("Noida");
  const [bankName, setBankName] = useState("State Bank of India");
  const [bankAccountNumber, setBankAccountNumber] = useState("001000100");
  const [clientName, setClientName] = useState("Supra Limited");
  const [clientAddress, setClientAddress] = useState("Noida");
  const [date, setDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [invoiceNumber, setInvoiceNumber] = useState("#322k12");
  const [notes, setNotes] = useState("Terms and Condition");
  const [website, setWebsite] = useState("https://levitationinfotech.com");

  // Table State with default values
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState<number>(parseInt("")); // Default value set to 0
  const [productQuantity, setProductQuantity] = useState<number>(parseInt("")); // Default value set to 0
  const [productTotal, setProductTotal] = useState<number>(parseInt(""));
  const [productSubTotal, setProductSubTotal] = useState<number>(parseInt(""));
  const [gst, setGST] = useState<number>(parseInt(""));
  const [grandTotal, setGrantTotal] = useState<number>(parseInt(""));

  // Table List
  const [tableList, setTableList] = useState<TableItem[]>([]);
  const componentRef = useRef(null);

  useEffect(() => {
    const total = productQuantity * productPrice;

    // This helps in totaling each;
    setProductTotal(total);

    const tableListSubTotal = tableList.reduce(
      (acc, curr) => acc + curr.productTotal,
      0
    );
    setProductSubTotal(tableListSubTotal);

    const gstAmount = tableListSubTotal * (gst / 100);
    const grandTotal = tableListSubTotal + gstAmount;

    setGrantTotal(grandTotal);
  }, [productQuantity, productPrice, gst, tableList]);
  return (
    <div className="bg-[#f1f1f1]">
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:mx-w-4xl xl:mx-auto rounded shadow-md bg-white">
        {/* <ReactToPrint /> */}
        <button
          className="border-none outline-none bg-red-300 text-gray-800 font-bold shadow-md mx-2 rounded px-3 py-1"
          onClick={handlePrint}
        >
          Print / Download
        </button>

        {showInvoice ? (
          <div ref={componentRef} className="p-5">
            {/* Header*/}
            <Header />

            <div className="flex justify-between items-center mt-6 xs:flex-col">
              <div>
                <h2 className="uppercase font-bold">Bill to</h2>
                {/* Details */}
                <MainDetail name={name} address={address} />
              </div>

              <div>
                <h2 className="uppercase font-bold">Ship to</h2>
                {/* Client Detail */}
                <ClientDetail
                  clientName={clientName}
                  clientAddress={clientAddress}
                />
              </div>

              <div>
                <InvoiceDetails
                  invoiceNumber={invoiceNumber}
                  date={date}
                  dueDate={dueDate}
                />
              </div>
            </div>

            {/* Table */}
            <Table
              gst={gst}
              grandTotal={grandTotal}
              tableList={tableList}
              productSubTotal={productSubTotal}
            />

            {/* Notes */}
            <Notes notes={notes} />

            {/* Footer */}
            <Footer
              name={name}
              email={email}
              phone={phone}
              bankName={bankName}
              bankAccountNumber={bankAccountNumber}
              website={website}
            />

            <button
              className=" mt-5 font-bold text-white bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              onClick={() => {
                setShowInvoice(!showInvoice);
              }}
            >
              Edit Invoice
            </button>
          </div>
        ) : (
          <>
            {/* Todo: Name, address, client Name, Client address , invoice Number, invoice Date, Due Date, table context, notes , email, bank, acc number, account holder, website */}
            <div className="flex flex-col justify-center">
              {/* Client Detail */}
              <div className="md:grid grid-cols-2 gap-3">
                {/* Client Name */}
                <div className="flex flex-col">
                  <label
                    className="mb-1 text-xs font-bold text-gray-800"
                    htmlFor="name"
                  >
                    Enter your name
                  </label>
                  <input
                    className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                {/* Client Address */}
                <div className="flex flex-col">
                  <label
                    className="mb-1 text-xs font-bold text-gray-800"
                    htmlFor="address"
                  >
                    Enter your address
                  </label>
                  <input
                    className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                    type="text"
                    name="text"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Client Extra Detail */}
              <div className="md:grid grid-cols-3 gap-2">
                {/* Client Number */}
                <div className="flex flex-col">
                  <label
                    className="mb-1 text-xs font-bold text-gray-800"
                    htmlFor="phone"
                  >
                    Enter your phone
                  </label>
                  <input
                    className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                    type="tel"
                    name="text"
                    id="phone"
                    placeholder="Enter your phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                {/* Client Email */}
                <div className="flex flex-col">
                  <label
                    className="mb-1 text-xs font-bold text-gray-800"
                    htmlFor="email"
                  >
                    Enter your email
                  </label>
                  <input
                    className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                    type="email"
                    name="text"
                    id="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                {/* Client Website */}
                <div className="flex flex-col">
                  <label
                    className="mb-1 text-xs font-bold text-gray-700"
                    htmlFor="website"
                  >
                    Enter Website
                  </label>
                  <input
                    className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                    type="url"
                    id="website"
                    placeholder="Enter Website"
                    value={website}
                    onChange={(e) => {
                      setWebsite(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Customer Detail */}
              <div className="md:grid grid-cols-2 gap-3">
                {/* Customer Name */}
                <div className="flex flex-col">
                  <label
                    className="mb-1 text-xs font-bold text-gray-800"
                    htmlFor="clientName"
                  >
                    Enter Client Name
                  </label>
                  <input
                    className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                    type="text"
                    name="text"
                    id="clientName"
                    placeholder="Enter Client Name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => {
                      setClientName(e.target.value);
                    }}
                  />
                </div>
                {/* Customer Address */}
                <div className="flex flex-col">
                  <label
                    className="mb-1 text-xs font-bold text-gray-800"
                    htmlFor="clientAddress"
                  >
                    Enter Client Address
                  </label>
                  <input
                    className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                    type="text"
                    name="text"
                    id="clientAddress"
                    placeholder="Enter Client Address"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => {
                      setClientAddress(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Customer Bank and Account Number */}
              <div className="md:grid grid-cols-2 gap-3 mt-10">
                {/* Bank Account Name */}
                <div className="flex flex-col">
                  <label
                    className="mb-1 text-xs font-bold text-gray-800"
                    htmlFor="bankName"
                  >
                    Enter Bank Name
                  </label>
                  <input
                    className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                    type="text"
                    name="text"
                    id="Bank"
                    placeholder="Enter Bank Name"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => {
                      setBankName(e.target.value);
                    }}
                  />
                </div>
                {/* Bank Account Number */}
                <div className="flex flex-col">
                  <label
                    className="mb-1 text-xs font-bold text-gray-800"
                    htmlFor="bankAccountNumber"
                  >
                    Enter Bank Account Number
                  </label>
                  <input
                    className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                    type="text"
                    name="text"
                    id="bankAccountNumber"
                    placeholder="Enter Bank Account Number"
                    autoComplete="off"
                    value={bankAccountNumber}
                    onChange={(e) => {
                      setBankAccountNumber(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Invoice and Dates */}
              <div className="md:grid grid-cols-3 gap-3">
                {/* Invoice Number */}
                <div className="flex flex-col">
                  <label
                    className="mb-1 text-xs font-bold text-gray-800"
                    htmlFor="invoiceNumber"
                  >
                    Enter Invoice Number
                  </label>
                  <input
                    className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                    type="text"
                    name="text"
                    id="invoiceNumber"
                    placeholder="Enter Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => {
                      setInvoiceNumber(e.target.value);
                    }}
                  />
                </div>
                {/* Bill Date */}
                <div className="flex flex-col">
                  <label
                    className="mb-1 text-xs font-bold text-gray-800"
                    htmlFor="date"
                  >
                    Enter Bill Date
                  </label>
                  <input
                    className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                    type="date"
                    id="date"
                    value={date.toISOString().split("T")[0]}
                    onChange={(e) => {
                      setDate(new Date(e.target.value));
                    }}
                  />
                </div>
                {/* Due Date */}
                <div className="flex flex-col">
                  <label
                    className="mb-1 text-xs font-bold text-gray-800"
                    htmlFor="dueDate"
                  >
                    Enter Due Date
                  </label>
                  <input
                    className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                    type="date"
                    id="dueDate"
                    value={dueDate.toISOString().split("T")[0]}
                    onChange={(e) => {
                      setDueDate(new Date(e.target.value));
                    }}
                  />
                </div>
              </div>

              {/* Table  */}
              <div>
                <TableForm
                  productName={productName}
                  setProductName={setProductName}
                  productQuantity={productQuantity}
                  setProductQuantity={setProductQuantity}
                  productPrice={productPrice}
                  setProductPrice={setProductPrice}
                  productTotal={productTotal}
                  setProductTotal={setProductTotal}
                  gst={gst}
                  setGST={setGST}
                  grandTotal={grandTotal}
                  tableList={tableList}
                  setTableList={setTableList}
                />
              </div>

              <label
                className="mb-1 text-xs font-bold text-gray-800"
                htmlFor="notes"
              >
                Enter Notes
              </label>
              <textarea
                className="bg-gray-200 py-1 px-2 rounded mb-2 text-gray-700 font-semibold"
                id="notes"
                cols={30}
                rows={10}
                placeholder="Enter Notes"
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              />

              <button
                className="font-bold text-white bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
                onClick={() => {
                  setShowInvoice(!showInvoice);
                }}
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Invoice;
