import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Button, Card, Chip, Paragraph, Title } from 'react-native-paper';

import api from '../../services/ann';

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    async function fetchAnnouncements() {
      const response = await api.get('/api/v1/announcements');

      setAnnouncements(response.data.content);
    }

    fetchAnnouncements();
  }, []);

  return (
    <FlatList
      data={announcements}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card style={{ width: 180 }}>
          <Card.Cover
            style={{ height: 120, margin: 12, borderRadius: 5 }}
            source={{
              uri:
                'https://www.peta.org/wp-content/uploads/2017/07/iStock-502605347_emholk-1-668x336-1564757931.jpg?20190802025851',
            }}
          />
          <Card.Content>
            <View
              style={{
                marginBottom: 8,
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              {item.category.map(({ name }) => (
                <Chip key={name} style={{ marginRight: 8, marginBottom: 8 }}>
                  {name}
                </Chip>
              ))}
            </View>
            <Paragraph
              style={{ color: '#b5b5b5' }}
            >{`${item.animalsQuantity} cabeças`}</Paragraph>
            <Title>{`R$ ${item.currentPrice},00`}</Title>
            <Text style={{ color: '#6B9061', fontSize: 16, marginTop: 8 }}>
              {`${item.location.city} (${item.location.state})`}
            </Text>
          </Card.Content>
        </Card>
      )}
    />
  );
};

export default AnnouncementList;
