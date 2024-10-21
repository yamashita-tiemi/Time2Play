import { QuadraType } from "./quadra.interface";

export interface AgendamentoType {
	id?: number;
	inicio: Date;
	fim: Date;
    cliente: string;
    quadra: QuadraType;
	numHoras: number;
	valorTotal: number;
}

export interface AgendamentoTypePost {
	quadraId: number;
	inicio: string;
	fim: string;
}