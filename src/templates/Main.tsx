import React, { ReactNode } from "react";

import Link from "next/link";

import { Navbar } from "../navigation/Navbar";
import { AppConfig } from "../utils/AppConfig";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="flex justify-between pt-16 pb-8">
          <div>
            <div className="font-semibold text-3xl text-gray-900">
              {AppConfig.title}
            </div>
            <div className="text-xl">{AppConfig.description}</div>
          </div>
          <div>
            <button
              type="button"
              className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <Link href="/login">
                Log in
              </Link>
            </button>
          </div>
        </div>
        <div>
          <Navbar>
            <li className="mr-6 p-2">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="mr-6 p-2">
              <Link href="/?content_type=lifestyle">
                <a>Lifestyle</a>
              </Link>
            </li>
            <li className="mr-6 p-2">
              <Link href="/?content_type=fitness">
                <a>Fitness</a>
              </Link>
            </li>
            <li className="mr-6 p-2">
              <Link href="/about/">
                <a>About</a>
              </Link>
            </li>
          </Navbar>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>
    </div>
  </div>
);

export { Main };
