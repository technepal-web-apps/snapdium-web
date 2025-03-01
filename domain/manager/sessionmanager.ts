// import AsyncStorage from"@react-native-async-storage/async-storage";

export class SessionManager { 
    public static SESSION_ACCESS_TOKEN?: string 

    static storeData = async (key: string, value: string) => {
      try {
        // await AsyncStorage.setItem(key, value)
      } catch (e) {
        // saving error
      }
    }

    static retrieveString = async (key: string) => {
      try {
        // return await AsyncStorage.getItem(key)
      } catch (e) {
        // error reading value
      }
    }
}