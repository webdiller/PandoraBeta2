import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Messages, ChatInput, Status, Sidebar } from 'containers';
import { connect } from 'react-redux';

import './ChatPage.scss';

import { dialogsActions } from 'redux/actions';

const ChatPage = props => {
  const { setCurrentDialogId, user } = props;
  useEffect(() => {
    const { pathname } = props.location;
    const dialogId = pathname.split('/').pop();
    setCurrentDialogId(dialogId);
  }, [props.location.pathname]);

  return (
    <section className="chatpage">
      <div className="chat">
        <Sidebar />
        {user && (
          <div className="chat__dialog">
            <Status />
            <Messages />
            <div className="chat__dialog-input">
              <ChatInput />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default withRouter(
  connect(
    ({ user }) => ({ user: user.data }),
    dialogsActions,
  )(ChatPage),
);
