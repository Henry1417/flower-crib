import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
} from './../components/styles';

const Welcome = ({ navigation, route }) => {
  const { name, email, photoUrl, handleMessage } = route.params;
  const AvatarImg = photoUrl ? { uri: photoUrl } : require('./../assets/img/expo-bg1.png');

  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/img/expo-bg2.png')} />
        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
          <SubTitle welcome={true}>{name || 'Henry Test'}</SubTitle>
          <SubTitle welcome={true}>{email || 'henry_test@gmail.com'}</SubTitle>

          <StyledFormArea>
            <Avatar resizeMode="cover" source={AvatarImg} />
            <Line />
            <StyledButton
              onPress={() => {
                handleMessage('');
                navigation.navigate('Login');
              }}
            >
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
