import React from "react";

export default function Page() {
  return (
    <>
      <section className="bg-white h-full px-10 pt-5">
        <div className="mb-5">
          <p className="text-xl font-semibold text-gray-700">Artikel</p>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/Y23YC07/image-02.jpg"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/7jdcnwn/image-03.jpg"
          />
        </div>
      </section>
    </>
  );
}

const BlogCard = ({ image, date, CardTitle, CardDescription }: any) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-gray-900 sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-gray-700">{CardDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};
