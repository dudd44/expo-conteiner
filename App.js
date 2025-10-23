import React from "react";
import { ScrollView } from "react-native";
import  Titulo from "./componente/Titulo";
import Saudacao from "./componente/Saldacao";

export default function App(){
  return(
    <ScrollView style={{ padding:20 }}>
      <Titulo/>
      <Saudacao nome="Duda"/>


    </ScrollView>
  )
}