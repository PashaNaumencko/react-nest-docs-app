import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export default {
  get<TResponse>(endpoint: string, params = {}, headers = {}): Promise<AxiosResponse<TResponse>> {
    return axios.get(endpoint, {
      params,
      headers
    });
  },
  post<TBody, TResponse>(endpoint: string, body: TBody, config: AxiosRequestConfig = {}): Promise<AxiosResponse<TResponse>>{
    return axios.post(endpoint, body, config);
  },
  put<TBody, TResponse>(endpoint: string, body: TBody, config: AxiosRequestConfig = {}): Promise<AxiosResponse<TResponse>> {
    return axios.put(endpoint, body, config);
  },
  delete<TResponse>(endpoint: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<TResponse>> {
    return axios.delete(endpoint, config);
  }
};
