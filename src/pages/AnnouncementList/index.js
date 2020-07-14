import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card, Chip, Paragraph, Title } from 'react-native-paper';

const AnnouncementList = () => {
  return (
    <View style={{ margin: 16 }}>
      <Card style={{ width: 200 }}>
        <Card.Cover
          style={{ height: 120, margin: 12, borderRadius: 5 }}
          source={{
            uri:
              'https://www.peta.org/wp-content/uploads/2017/07/iStock-502605347_emholk-1-668x336-1564757931.jpg?20190802025851',
          }}
        />
        <Card.Content>
          <View style={{ marginBottom: 8, flexDirection: 'row' }}>
            <Chip style={{ marginRight: 8 }}>Terneiros</Chip>
            <Chip>Vacas</Chip>
          </View>
          <Paragraph style={{ color: '#b5b5b5' }}>62 cabeças</Paragraph>
          <Title>R$ 650,00</Title>
          <Text style={{ color: '#6B9061', fontSize: 16, marginTop: 8 }}>
            Porto Alegre (RS)
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default AnnouncementList;
