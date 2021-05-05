import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

interface Props { }

export const SyncingEditor: React.FC<Props> = () => {
  const [roomPin, setRoomPin] = useState(0);
  const [player, setPlayer] = useState('');
  const [playerId, setPlayerId] = useState('');



  useEffect(() => {

  }, []);

  return (
    <>
      <input type="text" placeholder="username" onChange={e => setPlayer(e.target.value)} />
      <input type="text" placeholder="player id" onChange={e => setPlayerId(e.target.value)} />
      <button onClick={() => {
        socket.emit('create-room', { playerId: playerId, playerUserName: player })
      }}>create room</button>
      <div></div>
      <input type="number" placeholder="pin" onChange={e => {
        setRoomPin(Number(e.target.value))
      }} />
      <button onClick={() => {
        socket.emit('join-room', { roomPin: roomPin, playerId: playerId, player, playerUserName: player });
      }}>join room</button>
      <div></div>
      <button onClick={() => {
        socket.emit('engage-room', { roomPin: roomPin, playerId: playerId, playerUserName: player })
      }}>say hello</button>
      <div></div>
      <button onClick={() => {
        console.log(socket.id);
      }}>whoami</button>
    </>
  );
};
