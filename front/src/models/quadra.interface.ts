import { List } from "lodash";
import { OrganizacaoType } from "./organizacao.interface";

export interface QuadraType {
	id?: number;
	nome: string;
	status: string;
	endereco: string;
	organizacao: OrganizacaoType;
	// modalidades: List<>;
	valor: number;
    quadras: List<QuadraType>;
}