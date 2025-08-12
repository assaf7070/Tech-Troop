const Contact = ({ name , onSelect}) => {
  return (
    <div style={{ fontSize: "1.5rem", margin: "10px 0" }} onClick={() => onSelect(name)}>
      {name}
    </div>
  );
};

export default Contact;
