import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Data } from "./data";
import Wrapper from "../wrapper/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <div className="p-10">
        <h2 className=" py-4 space-y-7">
          {Data.map((item) => {
            return (
              <div
                key={item.id}
                className="border hover:scale-105 hover:bg-slate-600 shadow-blue-700 shadow-xl"
              >
                <Link href={`./data/${item.id}`}>
                  <Image
                    src={item.image}
                    alt="images"
                    width={500}
                    height={400}
                  />
                  <h2 className="p-5 font-semibold"> {item.tittle}</h2>
                </Link>
              </div>
            );
          })}
        </h2>
      </div>
    </Wrapper>
  );
};
export default Home;
