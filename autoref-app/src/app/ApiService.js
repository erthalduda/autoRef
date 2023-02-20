import axios from "axios";

const urlBase = process.env.REACT_APP_API_URL;

export const httpClient = axios.create({
  baseURL: urlBase,
  withCredentials: true,
});

class ApiService {
  constructor(urlApi) {
    this.urlApi = urlApi;
  }

  static registrar(token) {
    if (token) {
      httpClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }

  post(url, objeto) {
    const urlRequisicao = `${this.apiurl}${url}`;
    return httpClient.post(urlRequisicao, objeto);
  }

  put(url, objeto) {
    const urlRequisicao = `${this.apiurl}${url}`;
    return httpClient.put(urlRequisicao, objeto);
  }

  delete(url) {
    const urlRequisicao = `${this.apiurl}${url}`;
    return httpClient.delete(urlRequisicao);
  }

  get(url) {
    const urlRequisicao = `${this.apiurl}${url}`;
    return httpClient.get(urlRequisicao);
  }
}

export default ApiService;
