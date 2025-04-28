import React, { FC } from "react";
import { Place } from "../../types";

interface Props {
  place: Place;
}
const Overview: FC<Props> = ({ place }) => {
  return (
    <div>
      <div className="border-b pb-4 flex gap-6 text-zinc-500">
        <span className="cursor-pointer text-blue-500">Genel</span>
        <span className="cursor-pointer">Odalar</span>
        <span className="cursor-pointer">Özellikler</span>
        <span className="cursor-pointer">Kurallar</span>
      </div>

      <div className="flex justify-between max-lg:flex-col gap-5 mt-5">
        <div>
          <h1 className="text-2xl">Özellikler</h1>
          <div className="grid grid-cols-2">
            {place.amenities.map((item, i) => (
              <span
                key={i}
                className="border border-gray-300 rounded-md p-2 line-clamp-1 overflow-hidden"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.6059676668!2d29.01217945000001!3d41.00532150000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1740754569611!5m2!1str!2str"
          loading="lazy"
          className="w-full h-full aspect-video rounded-md max-lg:max-h-[200px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Overview;
