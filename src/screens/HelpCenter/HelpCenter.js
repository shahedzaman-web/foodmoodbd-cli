import React from 'react';
import {Modal, Platform, TouchableOpacity, View} from 'react-native';
import {Bubble, GiftedChat, Send, Actions} from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-crop-picker';
import FlatText from '../../components/FlatText';
import styles from './styles';
import Toast from 'react-native-toast-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActivityIndicator, Avatar} from 'react-native-paper';
import {
  useChatFileUploadMutation,
  useChatIndexQuery,
  useConversationDeleteMutation,
  useGetChatHistoryByIdQuery,
  useMessageDeleteByIdMutation,
  useSendMessageMutation,
} from '../../store/services/api';
import formatMessageFun from './formatMessageFun';
import {useTranslation} from 'react-i18next';
const HelpCenter = ({navigation}) => {
  const {t} = useTranslation();
  const [messages, setMessages] = React.useState([]);
  const [id, setId] = React.useState(0);
  const [isIdStored, setIsIdStored] = React.useState(false);
  const chatIndex = useChatIndexQuery();
  const getChatHistoryById = useGetChatHistoryByIdQuery(id);
  const [chatFileUpload] = useChatFileUploadMutation();
  const [messageDeleteById] = useMessageDeleteByIdMutation();
  const [conversationDelete] = useConversationDeleteMutation();
  const [isDataSending, setIsDataSending] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [conversationId, setConversationId] = React.useState('');
  const MINUTE_MS = 5000;

  const handleDeleteConversation = async () => {
    try {
      const {data, error} = await conversationDelete(conversationId);

      if (data?.status === 'success') {
        setIsModalVisible(false);
        setConversationId('');
        Toast.show({
          text1: data.msg,
          type: 'success',
        });
      } else {
        Toast.show({
          text1: 'Something went wrong',
          type: 'error',
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const check = React.useCallback(async () => {
    if (!isDataSending) {
      getChatHistoryById?.refetch();
    }
  }, [getChatHistoryById, isDataSending]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      check();
    }, MINUTE_MS);
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);
  // console.log("getChatHistoryById.data=============>", isDataSending);
  React.useEffect(() => {
    if (getChatHistoryById.data !== undefined && !isDataSending) {
      let formatMessage = formatMessageFun(getChatHistoryById.data);
      // console.log("formatMessage================>", getChatHistoryById.data);
      // console.log("formatMessage================>", formatMessage);
      setMessages(formatMessage);
    }
  }, [getChatHistoryById, conversationId, isDataSending]);

  const getConversationId = React.useCallback(() => {
    if (
      (chatIndex?.data !== undefined && !isIdStored) ||
      chatIndex?.data?.message?.messages[0]?.conversation_id !== undefined
    ) {
      let chatId = chatIndex?.data?.message?.supporter?.id;
      let conversationIds =
        chatIndex?.data?.message?.messages[0]?.conversation_id;

      setId(chatId);
      setConversationId(conversationIds);
      setIsIdStored(true);
    }
  }, [chatIndex, isIdStored]);

  React.useEffect(() => {
    getConversationId();
  }, [getConversationId]);

  let handlePickImage = React.useCallback(async () => {
    try {
      setIsDataSending(true);
      let image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      if (!image.cancelled && id !== 0) {
        let sendPhoto = {
          name: 'image',
          filename: 'image.jpg',
          type: 'image/jpg',
          uri:
            Platform.OS === 'ios'
              ? image.path.replace('file://', '')
              : image.path,
        };

        const formData = new FormData();
        formData.append('file', sendPhoto);
        formData.append('user_id', id);

        const {data, error} = await chatFileUpload(formData);

        if (data !== undefined) {
          setIsDataSending(false);
        } else {
          setIsDataSending(false);
          return null;
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [id, chatFileUpload]);

  let handleTakePhoto = React.useCallback(async () => {
    try {
      setIsDataSending(true);
      let image = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      });
      console.log({image});
      if (!image.cancelled && id !== 0) {
        let sendPhoto = {
          name: 'image',
          filename: 'image.jpg',
          type: 'image/jpg',
          uri:
            Platform.OS === 'ios'
              ? image.path.replace('file://', '')
              : image.path,
        };

        const formData = new FormData();
        formData.append('file', sendPhoto);
        formData.append('user_id', id);

        const {data, error} = await chatFileUpload(formData);

        if (data !== undefined) {
          setIsDataSending(false);
        } else {
          setIsDataSending(false);
          return null;
        }
      }
    
    } catch (err) {
      setIsDataSending(false);
      console.log({err});
    }
  }, [id, chatFileUpload]);

  const renderSend = props => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  const RenderActions = (props, id) => {
    return (
      <Actions
        {...props}
        options={{
          [' Choose From Gallery']: handlePickImage,
          ['Take Photo']: handleTakePhoto,
        }}
        icon={() => (
          <MaterialCommunityIcons name="attachment" size={24} color="black" />
        )}
        onSend={args => console.log(args)}
      />
    );
  };

  const [sendMessage] = useSendMessageMutation();

  const sendTextMessage = React.useCallback(
    async messages => {
      if (messages.length > 0 && id !== 0) {
        try {
          setIsDataSending(true);

          const payload = {user_id: id, message: messages[0].text};

          const {data, error} = await sendMessage(payload);

          // console.log({
          //   data,
          //   error,
          //   payload,
          // });
          if (data?.status === 'success') {
            setMessages(prevMessages =>
              GiftedChat.append(prevMessages, messages),
            );
            setIsDataSending(false);
          } else {
            setIsDataSending(false);
          }
        } catch (e) {
          setIsDataSending(false);
          console.log(e);
        }
      }
    },
    [sendMessage, id],
  );

  const handleDelete = async messageIdToDelete => {
    try {
      setIsDataSending(true);
      const {data, error} = await messageDeleteById(messageIdToDelete);
      if (data?.msg === 'Message deleted') {
        setIsDataSending(false);
      }
    } catch (err) {
      setIsDataSending(false);
      console.log(err);
    }
  };

  return (
    <View
      style={styles.container}
      accessible
      accessibilityLabel="main"
      testID="main">
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <FlatText
              text={t('deleteConversation')}
              font="bold"
              size={18}
              color="#333"
              textalign={'center'}
            />
            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={handleDeleteConversation}
                style={[styles.btn, styles.btnDelete]}>
                <FlatText
                  text={t('delete')}
                  font="q_semibold"
                  size={14}
                  color="#fff"
                />
                <MaterialCommunityIcons name="delete" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                style={[styles.btn, styles.btnClose]}>
                <FontAwesome name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.mr12}
            onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-sharp" size={24} color="#333" />
          </TouchableOpacity>
          <Avatar.Image
            style={styles.mr12}
            size={50}
            source={require('../../../assets/support.png')}
          />
          <FlatText
            text={t('chatWith')}
            font="q_semibold"
            size={18}
            color="#333"
          />
        </View>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <MaterialCommunityIcons name="delete" size={24} color="#dc3545" />
        </TouchableOpacity>
      </View>
      <View style={styles.chatContainer}>
        <GiftedChat
          messages={messages}
          onSend={messages => sendTextMessage(messages)}
          user={{
            _id: 1,
          }}
          renderLoading={() => <ActivityIndicator size="large" />}
          onLongPress={(context, message) => {
            const options = ['Delete Message', 'Cancel'];
            const cancelButtonIndex = options.length - 1;
            context.actionSheet().showActionSheetWithOptions(
              {
                options,
                cancelButtonIndex,
              },
              buttonIndex => {
                switch (buttonIndex) {
                  case 0:
                    handleDelete(message.id);
                    break;
                  default:
                    break;
                }
              },
            );
          }}
          onDelete={messageIdToDelete => handleDelete(messageIdToDelete)}
          renderActions={props => <RenderActions props={props} id={id} />}
          renderBubble={renderBubble}
          alwaysShowSend
          renderSend={renderSend}
          scrollToBottom
          scrollToBottomComponent={scrollToBottomComponent}
        />
      </View>
    </View>
  );
};

export default HelpCenter;
