import React from "react";

export default function Page() {
  return (
    <>
      <section className="bg-white px-10 mx-auto">
        <div className="pt-5 pb-3">
          <p className=" font-semibold text-lg">Produk</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SingleCard
            image="https://i.ibb.co/r2zns1m/image-01.jpg"
            CardTitle="CV"
            titleHref="/#"
            btnHref="/#"
            CardDescription="Belajar membuat CV yang jannah-friendly."
            Button="View Details"
          />
          <SingleCard
            image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
            CardTitle="Konsultasi"
            CardDescription="Konsultasi dengan tim ahli kami untuk persiapan karir kamu."
            Button="View Details"
          />
        </div>
      </section>
    </>
  );
}

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}: any) => {
  return (
    <>
      {/*  */}
      <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};
