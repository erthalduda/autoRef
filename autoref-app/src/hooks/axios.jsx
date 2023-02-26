import { useLocalStorage } from "./local_storage"
import axios from "axios"

export const useAxios = () => {
    const localStorage = useLocalStorage()
    const fetchData = async (
      params,
      useAuthentication
    ) => {
     

      if (useAuthentication) {
        params.headers = { "X-Auth-Token": localStorage.get("token") }
      }
  
      try {
        const response = await axios.request(params)
        console.log(response);
        return {
          response: response,
          error: null,
        }
      } catch (err) {
        return {
          response: null,
          error: err,
        }
      }
    }
  
    return { fetchData }
  }