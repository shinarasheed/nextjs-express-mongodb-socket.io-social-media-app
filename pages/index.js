import React, { useEffect } from 'react';

function Index({ user, userFollowStats }) {
  useEffect(() => {
    document.title = `Welcome, ${user.name.split(' ')[0]}`;
  }, []);
  return <div>hello</div>;
}

export default Index;
