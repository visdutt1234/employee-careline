import React, { useEffect, useState } from "react";

const hocForUser = (WrapperComponent, data) => {
  const MyComponent = (props) => {
    console.log(props, "LLLL")
    const [isOnline, setIsOnlie] = useState(null)

    useEffect(() => {
      let hitem = data.items;
      let result = hitem.filter((item) => item.id == props.id);
      setIsOnlie(result[0].heading);
    });

    return <WrapperComponent isOnline={isOnline}/>;
  };
  return MyComponent;
}

export default hocForUser;
