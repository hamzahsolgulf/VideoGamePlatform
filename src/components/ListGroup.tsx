import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; //this works by: when we click on an item, we want to call onSelectItem and pass the item that we clicked on, the item is a string bc we are passing an array of strings and it returns void because we are not returning anything
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //useState is a Hook that lets you add React state to function components
  //hook is a function that lets you use state and other React features inside function components
  const [selectedIndex, setSelectedIndex] = useState(-1); // this is -1 because we want to select nothing at the beginning and 0 is the first index

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
