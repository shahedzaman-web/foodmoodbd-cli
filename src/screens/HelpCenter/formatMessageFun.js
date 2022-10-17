const formatMessageFun = data => {
  let text, image;
  const message = Object.values(data.messages);

  let formattedMessage = [];
  message.map((x, index) => {
    if (
      x.message.includes('https://www.foodmoodbd.com/uploads/attachment') ||
      x.message.includes('https://foodmoodbd.com/uploads/attachment')
    ) {
      let message = x.message;
      let position = message.split("src='")[1];
      let position2 = position.split("'")[0];
      text = null;
      image = position2;
    } else {
      text = x.message;
      image = null;
    }

    let data = {
      _id: index,
      id: x.id,
      text: text,
      image: image,
      createdAt: x.created_at,
      user: {
        _id: x.sender.name === 'support' ? 2 : 1,
        name: x.sender.name,
        avatar: x.sender.avatar,
      },
      sent: true,
      received: x.is_seen == 1 ? true : false,
    };
    formattedMessage.push(data);
  });

  return formattedMessage;
};
export default formatMessageFun;
