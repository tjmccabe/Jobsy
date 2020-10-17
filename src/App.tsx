import React, { useEffect } from "react";

interface Options {
  useSockets: boolean;
}

interface Props {
  options: Options;
  socket: any;
}

const App = ({ options, socket }: Props) => {
  const connect = () => {
    if (options.useSockets) {
      console.log("connecting");
      let connectEvent = "hello";

      socket.addEventListener("open", (event: any) => {
        console.log("connected to socket");
        socket.send(
          JSON.stringify({
            type: "message",
            text: "haha",
            user: 123321,
            channel: options.useSockets ? "websocket" : "webhook",
          })
        );
      });

      socket.addEventListener("message", (event: any) => {
        let message = JSON.parse(event.data);
        console.log(message);
      });
    }
  };

  useEffect(() => {
    connect();
  }, []);

  return <div>{options.useSockets}</div>;
};

export default App;
