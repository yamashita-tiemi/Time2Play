import axios, { AxiosResponse } from 'axios';
import { OrganizacaoType } from 'models/organizacao.interface';

const instance = axios.create({
 baseURL: 'http://localhost:8080',
 timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) =>
		instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Organizacao = {
	getPosts: (): Promise<OrganizacaoType[]> => requests.get('organizacoes'),
	getAPost: (id: number): Promise<OrganizacaoType> => requests.get(`org/${id}`),
	// createPost: (post: OrganizacaoType): Promise<OrganizacaoType> =>
	// 	requests.post('posts', post),
	// updatePost: (post: OrganizacaoType, id: number): Promise<OrganizacaoType> =>
	// 	requests.put(`posts/${id}`, post),
	// deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};