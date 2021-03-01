import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CloseButton from '../CloseButton';
import styles from './styles'
import { deleteShelf } from '../../handlers/socketHandler';
import { closeDeleteShelfDialogue } from '../../state/uiSlice';
import { globalStyles } from '../../constants';

const DeleteShelfDialogue = () => {

    const shelf = useSelector(state => state.ui.shelfForDeletion)

    const headerText = `Delete ${shelf ? shelf.name : ''} from collection?`

    const dispatch = useDispatch()

    const close = () => {

        dispatch(closeDeleteShelfDialogue())
        
    }

    const removeShelf = async () => {

        try {

            const message = await deleteShelf(shelf)

            console.log(message)

            dispatch(closeDeleteShelfDialogue())

        }
        catch (error) {

            console.error(error)

        }
  
    }

    return (
        <View style={[ globalStyles.dialogueBackground, styles.background ]}>

            <Text style={[ globalStyles.dialogueHeader, styles.header ]}>{ headerText }</Text>
            
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity 
                style={[ globalStyles.button, styles.button ]}
                onPress={ close }
                >

                    <Text style={ globalStyles.buttonText }>Cancel</Text>

                </TouchableOpacity>

                <TouchableOpacity 
                style={[ globalStyles.button, styles.button ]}
                onPress={ removeShelf }
                >

                    <Text style={ globalStyles.buttonText }>Okay</Text>

                </TouchableOpacity>

            </View>

            <CloseButton close={ close } />

        </View>
    );
};

export default DeleteShelfDialogue;