import { List } from "lodash";
import { OrganizacaoType } from "./organizacao.interface";
import { ModalidadeType } from "./modalidade.interface";

export interface QuadraType {
	id?: number;
	nome: string;
	status: string;
	endereco: string;
	organizacao: OrganizacaoType;
	modalidades: [ModalidadeType];
	valor: number;
    quadras: List<QuadraType>;
	foto_path: string;
}