import axios, { AxiosResponse } from 'axios';
import { AgendamentoType } from 'models/agendamento.interface';
import { OrganizacaoType } from 'models/organizacao.interface';
import { QuadraType } from 'models/quadra.interface';

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
	getOrgs: (): Promise<OrganizacaoType[]> => requests.get('organizacoes'),
	getOrg: (id: number): Promise<OrganizacaoType> => requests.get(`org/${id}`),
	// createOrg: (post: OrganizacaoType): Promise<OrganizacaoType> =>
	// 	requests.post('posts', post),
	// updateOrg: (post: OrganizacaoType, id: number): Promise<OrganizacaoType> =>
	// 	requests.put(`posts/${id}`, post),
	// deleteOrg: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};

export const QuadraAPI = {
	getQuadras: (id_org: number): Promise<QuadraType[]> => requests.get(`quadras/${id_org}`),
	getQuadra: (id: number): Promise<QuadraType> => requests.get(`quadra/${id}`),
	// creatQuadra: (post: QuadraType): Promise<QuadraType> =>
	// 	requests.post('posts', post),
	// updatQuadra: (post: QuadraType, id: number): Promise<QuadraType> =>
	// 	requests.put(`posts/${id}`, post),
	// deletQuadra: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};

export const AgendamentoAPI = {
	getAgendamentos: (id_quadra: number): Promise<AgendamentoType[]> => requests.get(`agendamentos/${id_quadra}`),
	getAgendamento: (id: number): Promise<AgendamentoType> => requests.get(`agendamento/${id}`),
	// creatAgendamento: (post: AgendamentoType): Promise<AgendamentoType> =>
	// 	requests.post('posts', post),
	// updatAgendamento: (post: AgendamentoType, id: number): Promise<AgendamentoType> =>
	// 	requests.put(`posts/${id}`, post),
	// deletAgendamento: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};