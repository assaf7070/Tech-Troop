import { useState } from "react";
import List from "./List";
import Conversation from "./Conversation";

const Exercise2 = () => {
  const [conversationsElem, setConversationsElem] = useState({
    displayConversation: null,
    conversations: [
      {
        with: "Laura",
        convo: [
          { text: "Hi", sender: "self" },
          { text: "You there?", sender: "self" },
          { text: "Yeah, hi, what's up?", sender: "other" },
        ],
      },
      {
        with: "Dad",
        convo: [
          { text: "Have you finished your school work yet?", sender: "other" },
          { text: "Yes.", sender: "self" },
          { text: "What do you mean, yes?", sender: "other" },
          { text: "??", sender: "self" },
        ],
      },
      {
        with: "Shoobert",
        convo: [
          { text: "Shoobert!!!", sender: "self" },
          { text: "Dude!!!!!!!!", sender: "other" },
          { text: "Shooooooooo BERT!", sender: "self" },
          { text: "You're my best friend", sender: "other" },
          { text: "No, *you're* my best friend", sender: "self" },
        ],
      },
    ],
  });

  const displayConvo = (name) => {
    setConversationsElem((prev) => ({ ...prev , displayConversation: name  }));
  };

  const goBack = () => {
    setConversationsElem((prev) => ({
      ...prev,
      displayConversation: null,
    }));
  };

  const { displayConversation, conversations } = conversationsElem;
  const contacts = conversations.map((c) => c.with);

  // find selected conversation data
  const selectedConvo = conversations.find(
    c => c.with === displayConversation
  );

  return (
    <div>
      {displayConversation === null ? (
        <List contacts={contacts} onSelect={displayConvo} />
      ) : (
        <Conversation
          convo={selectedConvo.convo}
          sender={displayConversation}
          onBack={goBack}
        />
      )}
    </div>
  );
};

export default Exercise2;
