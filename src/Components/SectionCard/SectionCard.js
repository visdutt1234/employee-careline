import React, { useEffect, useState } from "react";

function SectionCard() {
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    let response = fetch("https://pimapi-d2jn4z2hbq-el.a.run.app/product/1");
    response.then(response => response.json())
        .then(result => setCardItems(result.data));
    }, [])

  return (
    <section className="flex justify-center flex-wrap w-full">
      {cardItems.map((item) => (
       <div key={item.sku} className="px-3 mb-6 w-1/4">
       <div class="bg-white font-sans shadow-md rounded-md">
          <div class="flex-none w-full relative">
            <img src={item.image.all.url} alt="" loading="lazy" class="w-full h-full object-cover" />
          </div>
          <form class="w-full p-6">
            <div class="flex flex-wrap">
              <h1 class="flex-auto text-lg line-clamp-2 font-semibold text-slate-900">
                {item.name}
              </h1>
              <div class="py-2 text-lg font-semibold text-slate-500">
                 <span className="block"><b className="text-black">code: </b> {item.code}</span>
                 <span className="block"><b className=" text-black ">sku: </b> {item.sku}</span>
              </div>
            </div>
          </form>
        </div>
       </div>
      ))}
    </section>
  );
}

export default SectionCard;
