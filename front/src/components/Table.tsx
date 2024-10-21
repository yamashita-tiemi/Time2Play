import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { QuadraType } from '../models/quadra.interface';
import { QuadraAPI } from '../api';

export default function Table() {
    const [quadras, setQuadras] = useState<QuadraType[]>([]);
    const [isError, setIsError] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<QuadraType | null>(null);

    useEffect(() => {
        QuadraAPI.getQuadras(1)
            .then((data) => {
                setQuadras(data)
            })
            .catch((err) => {
                setIsError(true)
            });
        return () => { };
    }, []);

    if(selectedProduct) {
        console.log(selectedProduct.id)
    }

    return (
        <DataTable 
            value={quadras}
            selection={selectedProduct} 
            onSelectionChange={(e) => setSelectedProduct(e.value)}
            dataKey="id"
            stripedRows
            tableStyle={{ minWidth: '50rem' }}>
            <Column selectionMode="single" headerStyle={{ width: '3rem' }}></Column>
            <Column field="id" header="ID"></Column>
            <Column field="nome" header="Nome"></Column>
            <Column field="valor" header="Valor/Hora"></Column>
        </DataTable>
    );
}
