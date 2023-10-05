import { StyleSheet, Text } from 'react-native'
import { Dialog, Portal, Button } from 'react-native-paper';

const PopUpSignOut = ({ visible, onDismiss, onSignOut }) => {
    return (
        <Portal>
            <Dialog
                className="bg-blue-200"
                visible={visible} onDismiss={onDismiss}>
                <Dialog.Content>
                    <Text className="text-lg text-center font-medium text-gray-500">Are you sure sign out ?</Text>
                </Dialog.Content>

                <Dialog.Actions className="flex justify-around">
                    <Button className="bg-blue-500 rounded-xl w-24"
                        onPress={onSignOut} title='ok'>
                        <Text className="text-lg font-bold text-white">Ok</Text>
                    </Button>
                    <Button className="bg-blue-500 rounded-xl w-24"
                        onPress={onDismiss} title='cancel'>
                        <Text className="text-lg font-bold text-white">Cancel</Text>
                    </Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}

export default PopUpSignOut

const styles = StyleSheet.create({})