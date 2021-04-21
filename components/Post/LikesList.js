import React, { useffect, useState } from 'react';
import { List, Popup, Image } from 'semantic-ui-react';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import catchErrors from '../../utils/catchErrors';
import cookie from 'js-cookie';
import Link from 'next/link';
import { LikesPlaceHolder } from '../Layout/PlaceHolderGroup';

const LikesList = ({ postId, trigger }) => {
  const [likeList, setLikeList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLikesList = async () => {
    setLoading(true);
    try {
      const token = cookie.get('token');
      const res = await axios.get(`${baseUrl}/api/posts/like/${postId}`, {
        headers: { Authorization: token },
      });
      setLikeList(res.data);
    } catch (error) {
      alert(catchErrors(error));
    }
    setLoading(false);
  };
  return (
    <Popup
      on="click"
      onClose={() => setLikeList([])}
      onOpen={getLikesList}
      popperDependencies={[LikesList]}
      trigger={trigger}
      wide
    >
      {loading ? (
        <LikesPlaceHolder />
      ) : (
        <>
          {likeList.length > 0 && (
            <div
              style={{
                overflow: 'auto',
                maxHeight: '15rem',
                height: '15rem',
                minWidth: '210px',
              }}
            >
              <List selection size="large">
                {likeList.map((like) => (
                  <List.Item key={like._id}>
                    <Image avatar src={like.user.profilePicUrl} />

                    <List.Content>
                      <Link href={`/${like.user.username}`}>
                        <List.Header as="a" content={like.user.name} />
                      </Link>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </div>
          )}
        </>
      )}
    </Popup>
  );
};

export default LikesList;
