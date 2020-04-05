import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

import api from '../../services/api'
import { deleteUser } from '../../utils'
import ProductItem from '../../components/ProductItem'
import { general } from '../../../assets/general'
import { Container, LogoutText, ProductList } from './styles'

export default function Home() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products')
      console.log(response.data)
      setData(response.data.products);
    }

    loadProducts();
  }, []);

  renderListItem = ({ item }) => <ProductItem product={item} />

  return (
    <Container>
      <ProductList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={renderListItem}
        // onRefresh={loadProducts}
        // refreshing={refreshing}
      />
    </Container>
  );
}

Home.navigationOptions = ({ navigation }) => {

  return {
    title: `${general.strings.CLIENT_TITLE}`,
    headerBackTitleVisible: true,
    headerRight: () => (
      <TouchableOpacity
        onPress={() => (
          deleteUser().then(() => {
            navigation.navigate('AuthLoading')
          })
        )}
        style={{ marginRight: 10 }}
      >
        <Text style ={{color:general.styles.colors.white}}>   
          {general.strings.EXIT}
        </Text>
      </TouchableOpacity>
    ),
  };
  
};

Home.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};
