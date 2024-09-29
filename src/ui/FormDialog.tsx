import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Dialog, Portal } from "react-native-paper";

interface Props {
  message: any;
}

const FormDialog = ({ message }: Props) => {
  const [visible, setVisible] = React.useState(true);

  const hideDialog = () => setVisible(false);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Icon icon="alert" />
        <Dialog.Title style={styles.title}>{message}</Dialog.Title>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Close</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});

export default FormDialog;
