import { View, Image, Text } from "react-native";
import React from "react";
import { Timeline } from "react-native-just-timeline";

import moment from "moment";

export default function OrderLog({ data }) {
  // console.log("data===============>", data);
  const [status, setStatus] = React.useState([]);

  React.useLayoutEffect(() => {
    if (data !== undefined) {
      let logStatus = [];
      data?.map((item, ) => {
        logStatus.push({
          title: ({ styles }) => (
            <View>
              <Text style={[styles, { marginBottom: 0, color: "#00b48b" }]}>
                Order {item.log_status}
              </Text>
            </View>
          ),

          time: {
            content: moment(item.updated_at).format("MMM DD, YYYY HH:mm"),
          },
          icon: {
            content:"circle",
            style: {
              width: 35,
              height: 35,
              backgroundColor: "#d2584b",
              color: "#FFF",
              borderColor: "#FFF",
              fontSize: 16,
              paddingTop: 10,
              borderRadius: 18,
            },
          },
        });
      });
      logStatus.unshift({
        title: ({ styles }) => (
          <View>
            <Text style={[styles, { marginBottom: 0, color: "#00b48b" }]}>
              Order Created
            </Text>
          </View>
        ),
        time: {
          content: moment(data[0]?.created_at).format("MMM DD, YYYY "),
        },
        icon: {
          content:"circle",
          style: {
            width: 35,
            height: 35,
            backgroundColor: "#d2584b",
            color: "#FFF",
            borderColor: "#FFF",
            fontSize: 16,
            paddingTop: 10,
            borderRadius: 18,
          },
        },
      });

      setStatus(logStatus);
    }
  }, [data]);


  return (
    <Timeline
      contentContainerStyle={{
        paddingHorizontal: 20,
        marginLeft: 6,
        evaluation: 5,
        backgroundColor: "#EAF6F6",
      }}
      eventStyle={{
        marginTop: 0,
        // borderWidth: 3,
        borderColor: "blue",
        padding: 6,
        evaluation: 5,
        borderRadius: 10,
        backgroundColor: "#FFF",
        feedback: 4,
      }}
      data={status}
    />
  );
}
