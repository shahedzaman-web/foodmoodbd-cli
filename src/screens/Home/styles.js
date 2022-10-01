
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hconatiner: {
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        flex: 1,
        paddingVertical: 5,
    },
    dFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    renderfeaured: {
        marginRight: 15,
        marginTop: 10,
        paddingBottom: 10
    },
    renderfeaureds: {
        marginTop: 10,
        paddingBottom: 10,
        marginBottom: 10
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        borderRadius: 100
    },
    marginBottomView: {
        marginTop: 10,
        marginBottom: 10
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    paddingLeft: {
        marginBottom: 10
    },
    imageWidth: {
        width: '100%', 
        height: 200,
        borderRadius: 10
    },
    badge: {
        position: 'absolute', 
        right: 0, 
        top: 0, 
        backgroundColor: '#E8F9FD', 
        paddingHorizontal: 15, 
        paddingVertical: 5,
        borderTopRightRadius: 10
    },
    productTitle: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingTop: 5
    },
    productContentFlex: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    paddingHorizontal5: {
        paddingHorizontal: 5
    },
    renderCategory: {
        marginRight: 15, 
        marginBottom: 15, 
        marginTop: 15
    },
    renderBg: {
        backgroundColor: '#fff', 
        borderRadius: 10
    },
    categoryBgImg: {
        width: 150, 
        height: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryImageStyle: {
        borderRadius: 15
    },
    categoryNameStyle: {
        backgroundColor: '#C01C27', 
        borderRadius: 5, 
        paddingHorizontal: 10, 
        paddingVertical: 6
    },
    renderItemStyle: {
        marginRight: 15, 
        marginBottom: 15, 
        marginTop: 15
    },
    renderItemContent: {
        backgroundColor: '#fff', 
        borderRadius: 10
    },
    renderItemImg: {
        width: 190, 
        height: 150, 
        borderRadius: 5
    },
    renderItemBadge: {
        position: 'absolute', 
        bottom: 15, 
        color: '#fff', 
        left: 15, 
        backgroundColor: '#C01C27', 
        borderRadius: 5, 
        paddingHorizontal: 10, 
        paddingVertical: 6
    }
});

export default styles