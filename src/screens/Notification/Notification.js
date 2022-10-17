import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import FlatText from '../../components/FlatText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppNotificationQuery} from '../../store/services/api';
import NotificationCard from './NotificationCard';
import {useDispatch} from 'react-redux';
import {notificationViewed} from '../../store/slices/notificationSlice';
export default function Notification({navigation, route}) {
  const {data, isFetching} = useAppNotificationQuery();

  const {newNotification} = route?.params;

  const [viewAllNotification, setViewAllNotification] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(notificationViewed());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <FlatText text="Notification" font="q_bold" size={18} color="white" />
      </View>
      <ScrollView>
        <View>
          {newNotification.length > 0 && !viewAllNotification && (
            <FlatList
              data={newNotification}
              renderItem={({item}) => <NotificationCard item={item} />}
              keyExtractor={item => item.id}
            />
          )}
          {newNotification?.length === 0 && viewAllNotification === false && (
            <View style={styles.noNotification}>
              <FlatText
                text="No New Notification Found"
                font="q_bold"
                size={18}
                color="black"
              />
            </View>
          )}
        </View>
        <>
          {!viewAllNotification && (
            <>
              <TouchableOpacity
                style={styles.viewAllNotification}
                onPress={() => setViewAllNotification(true)}>
                <FlatText
                  text="View All"
                  font="q_bold"
                  size={18}
                  color="white"
                />
              </TouchableOpacity>
            </>
          )}
        </>
        {viewAllNotification && (
          <>
            {isFetching ? (
              <ActivityIndicator size="large" color="#ff3252" />
            ) : (
              <FlatList
                data={data?.notifications?.data}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <NotificationCard item={item} />}
              />
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
}
