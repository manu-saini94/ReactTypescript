type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
  renderItem: (item: T) => React.ReactNode;
};

export const List = <T extends {}>({
  items,
  onClick,
  renderItem,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {renderItem(item)}
          </div>
        );
      })}
    </div>
  );
};
