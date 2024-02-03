import React from "react";

type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <>
      {" "}
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-center">
        <div className="flex justify-center items-center">
          <img
            src="https://levitation.in/wp-content/uploads/2023/04/levitation-Infotech.png"
            alt="levitation"
            className="h-9"
          />
          <h1 className="uppercase text-3xl text-center font-bold">Invoice</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
