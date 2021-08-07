import * as SecureStore from "expo-secure-store";

const deviceStorage = {

  async saveItem(key, value) {
    try {
      await SecureStore.setItemAsync(key, value)
    } 
    catch(error) {
      console.log(error.message)
    }
  }
};

export default deviceStorage;