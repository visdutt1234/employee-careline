import React, { useEffect, useState } from "react";

function Navigation() {
  const [navMenu, setNavMenu] = useState([]);

  useEffect(() => {
    let response = fetch("https://pimapi-d2jn4z2hbq-el.a.run.app/api/v1/pim/navigation/1");
    response.then(response => response.json())
        .then(result => setNavMenu(result.data[0].navigation));
    }, [])

  return (
    <header className="mb-8">
      <nav class="w-full py-7 bg-white shadow-sm space-x-4">
          <ul className="flex justify-center">
            {navMenu.map((item) => {
                return <li  key={item.id}>
                    <a href="/dashboard" class="font-bold px-5 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">{item.name}</a>
                </li>
            })
            }
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
