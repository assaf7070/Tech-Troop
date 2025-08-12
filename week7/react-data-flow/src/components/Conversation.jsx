const Conversation = ({ convo, sender, onBack }) => {
  return (
    <div>
      <button className="back" onClick={onBack}>
        Back
      </button>
      
      {convo.map((msg, index) => (
        <div key={index}>
          <span className="sender">
            {msg.sender === "self" ? "Me" : sender}:
          </span>{" "}
          "{msg.text}"
        </div>
      ))}
    </div>
  );
};

export default Conversation;
