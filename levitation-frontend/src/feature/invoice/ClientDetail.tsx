import React from "react";

type Props = {
  clientName: string;
  clientAddress: string;
};

const ClientDetail: React.FC<Props> = ({
  clientName,
  clientAddress,
}: Props) => {
  return (
    <>
      <section>
        <h2 className="text-lg uppercase">{clientName}</h2>
        <p>{clientAddress}</p>
      </section>
    </>
  );
};

export default ClientDetail;
