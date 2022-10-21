import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FlatText from '../../components/FlatText';
import HeadText from '../../components/HeadText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import config from '../../utils/config';
import axios from 'axios';
import {useAppNotificationQuery} from '../../store/services/api';
import Toast from 'react-native-toast-message';
import styles from './styles';
export default function NotificationCard({item}) {
  // const [image, setImage] = React.useState(null);
  const token = useSelector(state => state.auth.token);

  const regex = /<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g;

  const body = item.notification.body;
  const image =
    item.notification.image !== null
      ? config.https + item.notification.image
      : null;
  const {refetch} = useAppNotificationQuery();
  const bodyWithoutHtml = body.replace(regex, '');
  const bodyWithoutHtml2 = bodyWithoutHtml.replace(
    /^(\s+<br( \/)?>)*|(<br( \/)?>\s)*$/gm,
    '',
  );

  const handleDeleteNotification = async () => {
    try {
      const {data} = await axios.get(
        `${config.base_url}/delete-notification/${item.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log({data});
      if (data?.message === 'Deleted Notification') {
        Toast.show({
          text1: 'Notification Deleted',
          type: 'success',
        });
        refetch();
      } else {
        Toast.show({
          text1: 'Something went wrong',
          type: 'error',
        });
      }
    } catch (error) {
      console.log({error});
    }
  };
  return (
    <View style={styles.cardContainer}>
      <View>
        <View style={styles.dFlex}>
          <HeadText
            text={item.notification.title}
            font="q_bold"
            size={18}
            color="#C01C27"
          />
          <TouchableOpacity onPress={handleDeleteNotification}>
            <MaterialIcons name="delete" size={24} color="#C01C27" />
          </TouchableOpacity>
        </View>
        <FlatText
          text={bodyWithoutHtml2}
          font="q_bold"
          size={16}
          color="#333333"
        />
        {image !== null && (
          <Image source={{uri: image}} style={styles.cardImg} />
        )}
      </View>
    </View>
  );
}
