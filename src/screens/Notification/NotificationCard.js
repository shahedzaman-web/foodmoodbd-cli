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
export default function NotificationCard({item}) {
  const [image, setImage] = React.useState(null);
  const token = useSelector(state => state.auth.token);

  const regex = /<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g;

  const body = item.notification.body;
  const {refetch} = useAppNotificationQuery();
  const bodyWithoutHtml = body.replace(regex, '');
  const bodyWithoutHtml2 = bodyWithoutHtml.replace(/^(\s+<br( \/)?>)*|(<br( \/)?>\s)*$/gm, '');


  React.useEffect(() => {
    if (
      body.includes('https://www.foodmoodbd.com/uploads') ||
      body.includes('https://foodmoodbd.com/uploads')
    ) {
      let position = body.split('src="')[1];
      let position2 = position.split('"')[0];


      setImage(position2);
    }
  }, [body]);
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
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        margin: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
      }}>
      <View>
        <HeadText
          text={item.notification.title}
          font="q_bold"
          size={18}
          color="#C01C27"
        />
        <FlatText text={bodyWithoutHtml2} font="q_bold" size={16} color="#666" />
              {image && (
              <Image source={{uri: image}}
       style={{width: 300,height:200, resizeMode:"contain"}} />
      )}
      </View>

      <TouchableOpacity onPress={handleDeleteNotification}>
        <MaterialIcons name="delete" size={24} color="#C01C27" />
      </TouchableOpacity>
    </View>
  );
}
