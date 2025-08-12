import Contact from "./Contact";

const List = ({ contacts , onSelect}) => {
  return (
    <div>
      {contacts.map(name => (
        <Contact key={name} name={name} onSelect={onSelect}/>
      ))}
    </div>
  );
};

export default List;
