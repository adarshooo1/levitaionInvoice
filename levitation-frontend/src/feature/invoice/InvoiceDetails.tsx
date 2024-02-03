import React from "react";

type Props = {
  invoiceNumber: string;
  date: Date;
  dueDate: Date;
};

const InvoiceDetails: React.FC<Props> = ({
  invoiceNumber,
  date,
  dueDate,
}: Props) => {
  return (
    <>
      <article className="my-5 flex items-end justify-end">
        <ul>
          <li className="p-1 ">
            <span className="font-bold">Invoice Number:</span>
            {invoiceNumber}
          </li>
          <li className="p-1 bg-gray-100">
            <span className="font-bold">Invoice Date:</span>
            {date.toDateString()}
          </li>
          <li className="p-1 ">
            <span className="font-bold">Due Date:</span>
            {dueDate.toDateString()}
          </li>
        </ul>
      </article>
    </>
  );
};

export default InvoiceDetails;
