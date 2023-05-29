import { useState, useEffect } from "react";
import { data } from "../data/data_card";

function OnlineStatus(id) {
    const [isOnline, setIsOnlie] = useState(null)

    useEffect(() => {
      let hitem = data.items;
      let result = hitem.filter((item) => item.id === id);
      setIsOnlie(result[0].heading);
    });

    return isOnline;
}

export default OnlineStatus;