import Image from "next/image";
import React from "react";

const TwoGrid = () => {
  return (
    <div className="mx-auto flex max-w-8xl items-start  justify-between lg:px-8 mt-4 mb-4 gap-4">
      <div className="bg-red-500 w-9/12">
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                From the blog
              </h1>

              <p className="max-w-lg mx-auto mt-4 text-gray-500">
                Salami mustard spice tea fridge authentic Chinese food dish salt
                tasty liquor. Sweet savory foodtruck pie.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-2">
              <div className="group relative transition-transform duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-xl cursor-pointer rounded-md border">
                <div className="relative">
                  <Image
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="/assets/i2.jpg"
                    alt=""
                    height={400}
                    width={400}
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                    <Image
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="/assets/i2.jpg"
                      alt=""
                      height={400}
                      width={400}
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        Tom Hank
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Creative Director
                      </p>
                    </div>
                  </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white p-2 pb-0">
                  What do you want to know about UI
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500 dark:text-gray-400 p-2 pt-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis fugit dolorum amet dolores praesentium, alias nam?
                  Tempore
                </p>

                <a
                  href="#"
                  className="inline-block mt-4 text-NavBackground underline p-2"
                >
                  Read more
                </a>
              </div>
              <div className="group relative transition-transform duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-xl cursor-pointer rounded-md border">
                <div className="relative">
                  <Image
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="/assets/i2.jpg"
                    alt=""
                    height={400}
                    width={400}
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                    <Image
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="/assets/i2.jpg"
                      alt=""
                      height={400}
                      width={400}
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        Tom Hank
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Creative Director
                      </p>
                    </div>
                  </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white p-2 pb-0">
                  What do you want to know about UI
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500 dark:text-gray-400 p-2 pt-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis fugit dolorum amet dolores praesentium, alias nam?
                  Tempore
                </p>

                <a
                  href="#"
                  className="inline-block mt-4 text-NavBackground underline  p-2"
                >
                  Read more
                </a>
              </div>
              <div className="group relative transition-transform duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-xl cursor-pointer rounded-md border">
                <div className="relative">
                  <Image
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="/assets/i2.jpg"
                    alt=""
                    height={400}
                    width={400}
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                    <Image
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="/assets/i2.jpg"
                      alt=""
                      height={400}
                      width={400}
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        Tom Hank
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Creative Director
                      </p>
                    </div>
                  </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white p-2 pb-0">
                  What do you want to know about UI
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500 dark:text-gray-400 p-2 pt-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis fugit dolorum amet dolores praesentium, alias nam?
                  Tempore
                </p>

                <a
                  href="#"
                  className="inline-block mt-4 text-NavBackground underline p-2"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-yellow-500 w-3/12">Grid 2</div>
    </div>
  );
};

export default TwoGrid;
