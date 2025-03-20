import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/Introducao';
import DetailsScreen from './components/pai/intropai';
import CadastroPai from './components/pai/cadastro-pai';
import CadastroPai2 from './components/pai/cadastro-pai2';
import CadastroPai3 from './components/pai/cadastro-pai3';
import Verificacao from './components/pai/verificacao';
import VerificacaoM from './components/Motorista/verificacaoM';
import Loginpais from './components/pai/Loginpais';
import HomePage from './components/pai/homepage';
import Rastrear from './components/pai/rastrear';
import RastrearM from './components/Motorista/rastrearM';
import Chat from './components/pai/chat';
import Chat1 from './components/pai/chat1';
import Chat2 from './components/pai/chat2';
import Chat3 from './components/pai/chat3'; 
import Chat4 from './components/pai/chat4';
import Chat5 from './components/pai/chat5';
import Chat6 from './components/pai/chat6';
import Chat7 from './components/pai/chat7';
import Chat8 from './components/pai/chat8';
import Calendario from './components/pai/calendario';
import Perfil from './components/pai/perfil';
import Perfil1 from './components/pai/perfil1';
import PerfilM from './components/Motorista/perfilM';
import PerfilM1 from './components/Motorista/perfilM1'; 
import Notificacoes from './components/pai/notificacoes';
import NotificacoesM from './components/Motorista/notificacoesM';
import Pagamentos from './components/pai/Pagamentos';
import PagamentosM from './components/Motorista/PagamentosM';
import CadastroMotorista from './components/Motorista/cadastro-motorista';
import CadastroMotorista2 from './components/Motorista/cadastro-motorista2';
import CadastroMotorista3 from './components/Motorista/cadastro-motorista3';
import CadastroMotorista4 from './components/Motorista/cadastro-motorista4';
import IntroMotorista from './components/Motorista/introMotorista';
import Cnh from './components/Motorista/cnh'; 
import DadosVan from './components/Motorista/dadosVan';
import Termos from './components/Motorista/termos';
import LoginMotorista from './components/Motorista/loginMotorista';
import DocumentoVan from './components/Motorista/documentovan';
import FotoPerfil from './components/Motorista/fotoperfil';
import HomepageMotorista from './components/Motorista/homepageMotorista';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Introdução">
        <Stack.Screen name="Introdução" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="IntroPai" component={DetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroPai" component={CadastroPai} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroPai2" component={CadastroPai2} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroPai3" component={CadastroPai3} options={{ headerShown: false }} />
        <Stack.Screen name="Verificacao" component={Verificacao} options={{ headerShown: false }} />
        <Stack.Screen name="VerificacaoM" component={VerificacaoM} options={{ headerShown: false }} />
        <Stack.Screen name="Loginpais" component={Loginpais} options={{ headerShown: false }} />
        <Stack.Screen name="Homepage" component={HomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="Rastrear" component={Rastrear} options={{ headerShown: false }} />
        <Stack.Screen name="RastrearM" component={RastrearM} options={{ headerShown: false }} />
         <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
         <Stack.Screen name="Perfil1" component={Perfil1} options={{ headerShown: false }} />
         <Stack.Screen name="PerfilM" component={PerfilM} options={{ headerShown: false }} />
         <Stack.Screen name="PerfilM1" component={PerfilM1} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
        <Stack.Screen name="Chat1" component={Chat1} options={{ headerShown: false }} />
        <Stack.Screen name="Chat2" component={Chat2} options={{ headerShown: false }} />
        <Stack.Screen name="Chat3" component={Chat3} options={{ headerShown: false }} />
        <Stack.Screen name="Chat4" component={Chat4} options={{ headerShown: false }} />
        <Stack.Screen name="Chat5" component={Chat5} options={{ headerShown: false }} />
        <Stack.Screen name="Chat6" component={Chat6} options={{ headerShown: false }} />
        <Stack.Screen name="Chat7" component={Chat7} options={{ headerShown: false }} />
        <Stack.Screen name="Chat8" component={Chat8} options={{ headerShown: false }} />
        <Stack.Screen name="Calendario" component={Calendario} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroMotorista" component={ CadastroMotorista} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroMotorista2" component={ CadastroMotorista2} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroMotorista3" component={ CadastroMotorista3} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroMotorista4" component={ CadastroMotorista4} options={{ headerShown: false }} />
       <Stack.Screen name="Notificacoes" component={Notificacoes} options={{ headerShown: false }} />
       <Stack.Screen name="NotificacoesM" component={NotificacoesM} options={{ headerShown: false }} />
       <Stack.Screen name="Pagamentos" component={Pagamentos} options={{ headerShown: false }} />
       <Stack.Screen name="PagamentosM" component={PagamentosM} options={{ headerShown: false }} />
       <Stack.Screen name="IntroMotorista" component={IntroMotorista} options={{ headerShown: false }} />
       <Stack.Screen name="Cnh" component={Cnh} options={{ headerShown: false }} />
       <Stack.Screen name="DadosVan" component={DadosVan} options={{ headerShown: false }} />
       <Stack.Screen name="DocumentoVan" component={DocumentoVan} options={{ headerShown: false }} />
       <Stack.Screen name="Termos" component={Termos} options={{ headerShown: false }} />
       <Stack.Screen name="FotoPerfil" component={FotoPerfil} options={{ headerShown: false }} />
       <Stack.Screen name="LoginMotorista" component={LoginMotorista} options={{ headerShown: false }} />
       <Stack.Screen name="HomepageMotorista" component={HomepageMotorista} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
