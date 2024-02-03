import React from "react";

type Props = {
  notes: string;
};

const Notes = ({ notes }: Props) => {
  return (
    <>
      <section className="mb-5 mt-10">
        <p className="lg:w-1/2 text-justify font-bold">{notes}</p>
      </section>
    </>
  );
};

export default Notes;
