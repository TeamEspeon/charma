import { SecureStore } from "expo-secure-store";

const deviceStorage = {

  async saveItem(key, value) {
    try {
      await SecureStore.setItemAsync(key, value)
    } 
    catch(error) {
      console.log('AsyncStorage Error: ' + error.message)
    }

  }
};

export default deviceStorage;