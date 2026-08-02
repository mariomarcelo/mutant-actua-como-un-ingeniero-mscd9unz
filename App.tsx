import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, 
  TextInput, ScrollView, SafeAreaView, 
  StatusBar, Alert
} from 'react-native';

export default function App() {
  const [navState, setNavState] = useState({ current: 'chat' });
  const [chatState, setChatState] = useState({
    messages: [{ role: 'ai', text: '🧬 MUTANT v1 activado. Soy tu desarrollador autónomo...' }],
    input: ''
  });
  const [settingsState, setSettingsState] = useState({
    provider: 'Cerebras',
    model: 'Llama 3.3 70B',
    apiKeys: {
      gemini: '',
      cerebras: '',
      openrouter: '',
      groq: ''
    }
  });
  const [projectsState, setProjectsState] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

  // Navegación manual
  const navigate = (screen: string) => {
    setNavState({ current: screen });
  };

  // Lógica de IA simulada (reemplazar con API real)
  const getAIResponse = async (prompt: string) => {
    try {
      // Simular respuesta de IA
      const response = `Respuesta generada por IA para: ${prompt}`;
      return response;
    } catch (error) {
      Alert.alert('Error', 'No se pudo conectar con el modelo de IA');
      return null;
    }
  };

  if (navState.current === 'chat') return <ChatScreen 
    navigate={navigate} 
    chatState={chatState} 
    setChatState={setChatState} 
    setSettingsState={setSettingsState} 
    navigateToSettings={() => navigate('settings')} 
    navigateToProjects={() => navigate('projects')} 
  />;
  if (navState.current === 'settings') return <SettingsScreen 
    navigate={navigate} 
    settingsState={settingsState} 
    setSettingsState={setSettingsState} 
    navigateToProjects={() => navigate('projects')} 
    navigateToRepair={() => navigate('repair')} 
  />;
  if (navState.current === 'projects') return <ProjectsScreen 
    navigate={navigate} 
    projectsState={projectsState} 
    setProjectsState={setProjectsState} 
    navigateToProject={(id) => setCurrentProject(id)} 
  />;
  if (navState.current === 'repair') return <RepairScreen 
    navigate={navigate} 
    currentProject={currentProject} 
  />;
  return <View style={styles.container}>Cargando...</View>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#030712' },
  header: { padding: 20, backgroundColor: '#111827' },
  title: { color: '#00ff88', fontSize: 24, fontWeight: 'bold' },
  button: { margin: 10, backgroundColor: '#00ff88', borderRadius: 12 },
  input: { height: 50, borderRadius: 8, padding: 10 }
});