import React from 'react';
import { StatusBar } from 'expo-status-bar';

// IMPORT CUSTOM COMPONENTS
import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledBtn,
  BtnText,
  Line,
  WelcomeContainer,
  // WelcomeImage,
  Avatar,
  Text,
} from '../components/styles';

const WelcomeScreen = ({ navigation, route }) => {
  const { name, email } = route.params;
  return (
    <>
      <StatusBar style='dark' />
      <InnerContainer>
        <WelcomeContainer>
          <PageTitle welcome={true}>
            Welcome {name.charAt(0).toUpperCase() + name.slice(1) || 'John'}
          </PageTitle>
          <SubTitle welcome={true}>{name || 'John Doe'}</SubTitle>
          <SubTitle welcome={true}>{email || 'JohnDoe@example.com'}</SubTitle>
          <StyledFormArea>
            <Avatar
              resizeMode='cover'
              source={require('../assets/img/imgLogo.png')}
            />
            <StyledBtn onPress={() => navigation.navigate('Home')}>
              <BtnText>Go To Home</BtnText>
            </StyledBtn>
            <Line />
            {/* <Text onPress={() => navigation.navigate('Home')}>Go To Home</Text> */}
            <StyledBtn onPress={() => navigation.navigate('Login')}>
              <BtnText>Logout</BtnText>
            </StyledBtn>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default WelcomeScreen;
