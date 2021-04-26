import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import { Segment, Header, Divider, Comment, Grid } from 'semantic-ui-react';
import Chat from '../components/Chats/Chat';
import ChatListSearch from '../components/Chats/ChatListSearch';
import { NoMessages } from '../components/Layout/NoData';

function Messages({ chatsData }) {
  const [chats, setChats] = useState(chatsData);
  const router = useRouter();

  const socket = useRef();

  useEffect(() => {
    //connect to the server
    if (!socket.current) {
      socket.current = io(baseUrl);
    }

    //if the socket is connected
    if (socket.current) {
      socket.current.emit('helloword', { name: 'shina', age: '32' });
    }
  }, []);

  useEffect(() => {
    if (chats.length > 0 && !router.query.message)
      router.push(`/messages?message=${chats[0].messagesWith}`, undefined, {
        shallow: true,
      });
  }, []);

  return (
    <>
      <Segment padded basic size="large" style={{ marginTop: '5px' }}>
        <Header
          icon="home"
          content="Go Back!"
          onClick={() => router.push('/')}
          style={{ cursor: 'pointer' }}
        />
        <Divider hidden />

        <div style={{ marginBottom: '10px' }}>
          <ChatListSearch chats={chats} setChats={setChats} />
        </div>

        {chats.length > 0 ? (
          <>
            <Grid stackable>
              <Grid.Column width={4}>
                <Comment.Group size="big">
                  <Segment
                    raised
                    style={{ overflow: 'auto', maxHeight: '32rem' }}
                  >
                    {chats.map((chat, i) => (
                      <Chat key={i} chat={chat} />
                    ))}
                  </Segment>
                </Comment.Group>
              </Grid.Column>
            </Grid>
          </>
        ) : (
          <NoMessages />
        )}
      </Segment>
    </>
  );
}

Messages.getInitialProps = async (ctx) => {
  try {
    const { token } = parseCookies(ctx);

    const res = await axios.get(`${baseUrl}/api/chats`, {
      headers: { Authorization: token },
    });

    return { chatsData: res.data };
  } catch (error) {
    return { errorLoading: true };
  }
};

export default Messages;
