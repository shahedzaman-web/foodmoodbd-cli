import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 0
    },
    headerTitle: {
        marginBottom: 20
    },
    singleOrder: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexDirection: {
        flexDirection: 'row',
        marginBottom: 5
    },
    orderPrice: {
        marginTop: 7
    },
    viewOrderBtn: {
        backgroundColor: '#C01C27',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5
    },
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});

export default styles