import {View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FlatText from '../../components/FlatText';
import {
  useSearchResultQuery,
  useSearchTextMutation,
} from '../../store/services/api';
import SearchFoodItem from './components/SearchFoodItem';
import {Searchbar} from 'react-native-paper';

export default function AppSearch({navigation}) {
  const [search, setSearch] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  const [selectedSearchResult, setSelectedSearchResult] = React.useState('');
  const [searchText] = useSearchTextMutation();
  const {data} = useSearchResultQuery(selectedSearchResult);

  const handleInputSearch = React.useCallback(
    async text => {
      try {
        setSearch(x => (x = text));
        if (text.length > 0) {
          const res = await searchText(text);
          const searchResultData = res?.data?.data;

          setSearchResult(searchResultData);
        } else {
          setSearchResult([]);
        }
      } catch (err) {
        console.log({err});
        setSearchResult([]);
      }
    },
    [searchText],
  );

  const handleSearchResult = async item => {
    try {
      setSearch(item);
      setSelectedSearchResult(item);
      setSearchResult([]);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    if (search === '') {
      setSearchResult([]);
      setSelectedSearchResult('');
    }
  }, [search]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.flex}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.flex}>
            <Ionicons name="arrow-back" size={24} color="#C01C27" />
          </TouchableOpacity>
          <View style={styles.searchResultContainer}>
            <Searchbar
              style={styles.input}
              placeholder="Search Restaurant"
              onChangeText={text => handleInputSearch(text)}
              value={search}
            />
          </View>
        </View>
        <View style={styles.searchResultBtnContainer}>
          {searchResult !== undefined &&
            searchResult?.map((item, index) => (
              <View key={index} style={{flexDirection: 'row'}}>
                <Ionicons name="search-sharp" size={24} color="black" />
                <TouchableOpacity
                  key={item}
                  onPress={() => handleSearchResult(item)}
                  style={styles.searchResult}>
                  <FlatText
                    text={item}
                    font="q_regular"
                    size={18}
                    color="#333333"
                  />
                </TouchableOpacity>
              </View>
            ))}
          {search !== '' && !data && (
            <FlatText
              text={`Search Result for "${search}"`}
              font="q_bold"
              size={18}
              color="#333333"
            />
          )}
        </View>
      </View>
      <View style={{marginLeft: 20}}>
        {data && search !== '' && (
          <FlatText
            text={`${data?.restuarants?.length} Results Found with "${search}"`}
            font="q_bold"
            size={18}
            color="#333333"
          />
        )}
      </View>
      {search !== '' && data && (
        <View style={styles.restuarantSearchResultContainer}>
          {data && data.restuarants.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.list}
              data={data.restuarants}
              renderItem={({item}) => <SearchFoodItem item={item} />}
              keyExtractor={item => item.id}
            />
          ) : (
            <FlatText
              text="No Result Found"
              font="q_bold"
              size={18}
              color="#333333"
            />
          )}
        </View>
      )}
    </View>
  );
}
