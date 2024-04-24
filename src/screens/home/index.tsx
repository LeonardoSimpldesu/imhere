import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Participant from '../../components/Participant';
import { useState } from 'react';

export default function Home() {
    const [eventName, setEventName] = useState('Nome Do Evento')

    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert('Participante Existe', 'Já existe um participante na lista com esse nome')
        } else if(participantName == ''){
            return Alert.alert('Nome Inválido', 'Escreva o nome de um participante para que ele seja adicionado a lista')
        }

        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('')

    }

    function handleParticipantRemove(name: string) {


        return Alert.alert('Remover', `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants(prevState => prevState.filter(participant => participant !== name))
                    Alert.alert('Participante Removido!')
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.eventName} value={eventName} onChangeText={setEventName}/>
            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022.
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor={'#6B6B6B'}
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant name={item} key={item} onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
                    </Text>
                )}
            />

            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {participants.map((participant) => {
                    return (
                        <Participant name={participant} key={participant} onRemove={() => handleParticipantRemove('Rodigro')} />
                    )
                })}
            </ScrollView> */}
        </View>
    );
}