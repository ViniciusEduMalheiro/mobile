import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api';
// Não possuem valor semântico (significado)
// Não possuem estilização propria
// Todos componentes possuem "Display: flex"

// View: div, footer, section, header, main
// Text: h1, h2, h3, p, span, strong

export default function App() {
     const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        })
    }, []);

    return (
        <>
    <StatusBar  barStyle="light-content" backgroundColor="#7159c1"/>

    <SafeAreaView style={styles.container}>
        <FlatList 
    data={projects}
    keyExtractor={project => project.id}
    renderItem={({item: project }) => (
        <Text style={styles.project} key={project.id}>{project.title}</Text>
          )}
       />
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
    },

    project: {
        color: '#FFF',
        fontSize: 25,
    },
 });