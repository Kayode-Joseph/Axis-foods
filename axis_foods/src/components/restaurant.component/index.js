import {
    StyleSheet,
    Text,
    View,
    Image,
    useWindowDimensions,
    Pressable,
} from 'react-native';


let widthOfWindow= null;

export const RestaurantComponent = ({
    restaurant,
    style,
    isForRestaurantDetailScreen,
    order,
    onPress
}) => {
const { width } = useWindowDimensions();

widthOfWindow=width

    return (
        <Pressable onPress={onPress}>
            <Image
                source={{
                    uri: restaurant.image,
                }}
                style={styles.imageContainer}
            />
            <View style={styles.row}>
                <View>
                    <Text style={style ? style.title : null || styles.title}>
                        {restaurant.name}
                    </Text>

                    <Text
                        style={style ? style.subtitle : null || styles.subtitle}
                    >
                        {isForRestaurantDetailScreen
                            ? '$' +
                              restaurant.deliveryFee.toFixed(1) +
                              '•' +
                              restaurant.minDeliveryTime +
                              '-' +
                              restaurant.maxDeliveryTime +
                              ' minutes'
                            : order
                            ? order.status + '•' + ' 2 days ago'
                            : 'null'}
                    </Text>
                </View>

                <View style={styles.rating}>
                    <Text>{restaurant.rating.toFixed(1)}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',

    aspectRatio: 5/ 3,

 
  },

  restaurantContainer: {
    margin: 10,
  },

  title: {
    fontWeight: '500',

    marginTop: 5,
  },

  subtitle: {
    fontSize: 12,

    marginTop: 5,

    color: 'grey',
  },
  row: {
    flexDirection: 'row',

    alignItems: 'center',

    marginHorizontal:10
  },

  rating:{

    marginLeft: 'auto' ,

    marginTop:10,
    
    height:30,

    width:30,

    justifyContent: 'center',

    alignItems:'center',

    backgroundColor: 'grey',

    borderRadius: 10

  }
});
