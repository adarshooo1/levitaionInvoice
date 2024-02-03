import React from "react";

type Props = {
  name: string;
  email: string;
  phone: string; // Changed to string since phone numbers can contain characters like '+'
  bankName: string;
  bankAccountNumber: string; // Changed to string since bank account numbers are generally treated as strings
  website: string; // Changed to string since URLs are strings
};

const Footer: React.FC<Props> = ({
  name,
  email,
  phone,
  bankName,
  bankAccountNumber,
  website,
}: Props) => {
  return (
    <footer className="footer border-t-2 border-gray-300 pt-5">
      <ul className="flex flex-wrap items-center justify-center">
        <li>
          <span className="font-bold">Your name:</span> {name}
        </li>

        <li>
          <span className="font-bold">Your email:</span> {email}
        </li>

        <li>
          <span className="font-bold">Phone Number:</span> {phone}
        </li>

        <li>
          <span className="font-bold">Bank Name:</span> {bankName}
        </li>

        <li>
          <span className="font-bold">Account Holder Name:</span> {name}
        </li>

        <li>
          <span className="font-bold">Account Holder Number:</span>
          {bankAccountNumber}
        </li>

        <li>
          <span className="font-bold">Website:</span> {website}
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
