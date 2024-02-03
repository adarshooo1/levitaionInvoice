import React from "react";

type Props = {
  name: string;
  address: string;
};

const MainDetail: React.FC<Props> = ({ name, address }: Props) => {
  return (
    <>
      <section className="flex flex-col items-start justify-center">
        <h2 className="text-lg uppercase">{name}</h2>
        <p>{address}</p>
      </section>
    </>
  );
};

export default MainDetail;
