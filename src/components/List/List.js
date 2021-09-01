import React, { useEffect, useState } from "react";
import ListRow from "./ListRow";
const List = ({ data, forceReload, isListed }) => {
  const [listItems, setListItems] = useState([]);
  useEffect(() => {
    data !== [] && processData(data);
  }, [data]);
  const processData = (data) => {
    let listArray = [];
    listArray = data.map((item) => {
      return (
        <ListRow
          key={item.id}
          id={item.id}
          name={item.name}
          tel={item.tel}
          age={item.age}
          email={item.email}
          forceReload={forceReload}
          isListed={isListed || false}
        />
      );
    });
    setListItems(listArray);
  };
  return (
    <table>
      <tr>
        <th>نام و نام خانوادگی</th>
        <th>شماره تلفن</th>
        <th>سن</th>
        <th>ایمیل</th>
        <th>تاریخ ایجاد</th>
        <th>{""}</th>
        <th>{""}</th>
      </tr>
      {listItems}
    </table>
  );
};

export default List;
