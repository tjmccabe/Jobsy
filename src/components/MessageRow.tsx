import React, { useState } from "react";
import styled from "styled-components";
import { Message, Event } from "../Types";
import { colors } from "../constants";

const Container = styled.div<{ incoming: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.incoming ? "row" : "row-reverse")};
  align-items: flex-start;
  gap: 8px;
`;

const Space = styled.div`
  min-width: 200px;
`;

const MessageBody = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 6px ${colors.shadow};
`;

const Incoming = styled(MessageBody)`
  background-color: white;
`;

const Outgoing = styled(MessageBody)`
  background-color: ${colors.persianGreen};
  color: white;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const QuickReplies = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  & > button {
    opacity: 0.4;
    padding: 4px 8px;
    font-size: 14px;
    background-color: ${colors.persianGreen};
    border-color: transparent;
    transition: opacity 0.3s;
    color: white;
    border-radius: 4px;
  }

  & > button:hover {
    opacity: 1;
  }
`;

const ProfilePhoto = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

interface Props {
  message: Message;
  sendEvent: (event: Event) => void;
}

const MessageRow = ({ message, sendEvent }: Props) => {
  const [userReplied, setUserReplied] = useState(false);

  const sendReply = (text: string) => {
    setUserReplied(true);
    sendEvent({
      user: 1,
      type: "message",
      text,
    });
  };

  return (
    <Container incoming={message.direction === "incoming"}>
      <ProfilePhoto src={"https://via.placeholder.com/40"} />
      {message.direction === "incoming" ? (
        <FlexColumn>
          <Incoming>{message.text}</Incoming>
          {message.quick_replies && !userReplied && (
            <QuickReplies>
              {message.quick_replies.map((option, index) => (
                <button key={index} onClick={() => sendReply(option.payload)}>
                  {option.title}
                </button>
              ))}
            </QuickReplies>
          )}
        </FlexColumn>
      ) : (
        <Outgoing>{message.text}</Outgoing>
      )}
      <Space />
    </Container>
  );
};

export default MessageRow;
