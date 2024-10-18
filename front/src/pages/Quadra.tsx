import { styled } from "styled-components";
import Title, { TextTitleHorarios } from "../components/Title";
import Text from "../components/Text";
import { ButtonPrimary } from "../components/Button";
import { QuadraType } from "models/quadra.interface";
import { useState, useEffect, forwardRef } from "react";
import { AgendamentoAPI, QuadraAPI } from "../api";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { AgendamentoType } from "models/agendamento.interface";

export const SectionQuadra = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #E4DED0;
    min-height: calc(100vh - 120px);
`;

export const BoxQuadra = styled.section`
    width: 95%;
    height: 500px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export const BoxLeft = styled.section`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2%;
`;

export const BoxDia = styled.div`
    width: 80%;
    height: 30%;
    display: flex;
    flex-direction: column;
`;

export const BoxAluguel = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 10px;
`;

export const BoxInfos = styled.div<{ bg?: string }>`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.bg || '#4da999a1'};
    border-radius: 10px;
    padding: 10px;
    margin: 5% 0;
`;

export const BoxValores = styled.div<{ bg?: string }>`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    background-color: ${(props) => props.bg || '#4da999a1'};
    border-radius: 10px;
    padding: 10px;
    margin: 5% 0;
`;

export const BoxValor = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BoxValorMultiplicado = styled.div`
    width: 12%;
    height: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BoxRight = styled.section`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const BoxHorarios = styled.div`
    width: 90%;
    height: 92%;
    display: flex;
    justify-content: space-between;
`;

export const SubBoxHorarios = styled.div`
    width: 49.5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const BoxHorario = styled.div<{ isAvailable: boolean }>`
    width: 100%;
    height: 10%;
    display: flex;
    margin-bottom: 2%;
    opacity: ${({ isAvailable }) => (isAvailable ? 0.5 : 1)};
`;

export const HorarioCheck = styled.div`
    background-color: #2F5D55;
    width: 15%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    display: flex;
    justify-content: center;

    label {
        padding-left: 30px;
        cursor: pointer;
    }
`;

const Check = styled.input`
    width: 35%;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;

    &:checked {
        background-color: #89AE29;
        border-color: #fff;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

export const Horario = styled.div`
    background-color: #4da999a1;
    width: 85%;
    height: 100%;
    border-radius: 0 10px 10px 0;
    font-size: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledDatePicker = styled(DatePicker)`
  padding: 5px;
  font-size: 16px;
  border: 2px solid #84a09b42;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    border-color: #2F5D55;
    outline: none;
  }
`;

const DivDate = styled.div`
    width: 35%;
`;

export const Quadra = () => {
    const [quadra, setQuadra] = useState<QuadraType | undefined>(undefined);
    const [isError, setIsError] = useState<boolean>(false);
    const [agenda, setAgenda] = useState<AgendamentoType[]>([]);

    const location = useLocation();
    const { id } = location.state as { id: number }

    useEffect(() => {
        QuadraAPI.getQuadra(id)
            .then((data) => {
                setQuadra(data)
            })
            .catch((err) => {
                setIsError(true)
            });
        return () => { };
    }, []);

    const [dateTimeInicio, setDateTimeInicio] = useState([])
    // const [dateTimeFim, setDateTimeFim] = useState([])

    useEffect(() => {
        AgendamentoAPI.getAgendamentos(id)
            .then((data) => {
                setAgenda(data)

                setDateTimeInicio(data.map(item => item.inicio))
                // setDateTimeFim(data.map(item => item.fim))
            })
            .catch((err) => {
                setIsError(true)
            });
        return () => { };
    }, []);

    const transformedDatesInicio = dateTimeInicio.map(dateString => {
        const date = new Date(dateString);
        const formattedDate = format(date, 'dd-MM-yyyy')
        const formattedHour = format(date, 'HH:mm:ss')
        return {
            data: formattedDate,
            hora: formattedHour
        };
    });


    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date: Date | null) => {
        if (date) {
            setSelectedDate(date);
        }
    };

    const [horasIndisponiveis, setHorasIndisponiveis] = useState([]);

    useEffect(() => {
        verificarHoras();
    }, [selectedDate]);

    const formattedSelectedDate = format(selectedDate, 'dd-MM-yyyy')

    const verificarHoras = () => {
        const horas = transformedDatesInicio
            .filter(dateInicio => dateInicio.data === formattedSelectedDate)
            .map(dateInicio => parseInt(dateInicio.hora.split(':')[0]));

        setHorasIndisponiveis(horas);
    };
        
    const [selectedHours, setSelectedHours] = useState<number[]>([]);

    const handleCheckboxChange = (hour: number) => {
        if (selectedHours.includes(hour)) {
            setSelectedHours(selectedHours.filter(h => h !== hour))
        } else {
            setSelectedHours([...selectedHours, hour])
        }
    }

    const sendObject = (id: number, formattedSelectedDate: string, selectedHours: number[]) => {
        const dateTime = parse(formattedSelectedDate, 'dd-MM-yyyy', new Date());
        dateTime.setHours(selectedHours[0])
        const objectAgendamento = {
            quadra_id: id,
            dateTime: format(dateTime, "yyyy-MM-dd'T'HH:mm:ss"),
            numeroHoras: selectedHours.length
        }
    }

    return (
        <>
            {quadra ? (
                <SectionQuadra>
                    <Title> {quadra.nome} </Title>
                    <BoxQuadra>
                        <BoxLeft>
                            <BoxDia>
                                <TextTitleHorarios>Passo 1:</TextTitleHorarios>
                                <BoxInfos>
                                    <Text color="#000" fontSize="20px">Selecione o Dia</Text>
                                    <DivDate>
                                        <StyledDatePicker
                                            selected={selectedDate}
                                            onChange={handleDateChange}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText="Selecione a data"
                                            locale={ptBR}
                                            showPopperArrow={false}
                                        />
                                    </DivDate>
                                </BoxInfos>
                            </BoxDia>
                            <BoxAluguel>
                                <BoxValores bg="#84a09b42">
                                    <BoxValor>
                                        <Text color="#000" fontSize="18px">Valor por Hora</Text>
                                        <Text color="#000" fontSize="18px">R$ {quadra.valor}</Text>
                                    </BoxValor>
                                    <BoxValorMultiplicado>
                                        <Text color="#000" fontSize="14px">X</Text>
                                        <Text color="#000" fontSize="14px">{selectedHours.length}</Text>
                                    </BoxValorMultiplicado>
                                    <BoxValor>
                                        <Text color="#000" fontSize="22px">Valor Total</Text>
                                        <Text color="#000" fontSize="22px">R$ {quadra.valor * selectedHours.length}</Text>
                                    </BoxValor>
                                </BoxValores>
                                <ButtonPrimary onClick={() => sendObject(id,formattedSelectedDate,selectedHours)}>Alugar</ButtonPrimary>
                            </BoxAluguel>
                        </BoxLeft>
                        <BoxRight>
                            <TextTitleHorarios>Passo 2: Selecione o(s) Horário(s)</TextTitleHorarios>
                            <BoxHorarios>
                                <SubBoxHorarios>
                                    {Array.from({ length: 7 }, (_, i) => 8 + i).map(hour => (
                                        <BoxHorario isAvailable={horasIndisponiveis.includes(hour)}>
                                            <HorarioCheck>
                                                <Check
                                                    type="checkbox"
                                                    id={`hour-${hour}`}
                                                    checked={selectedHours.includes(hour)}
                                                    onChange={() => handleCheckboxChange(hour)}
                                                    disabled={horasIndisponiveis.includes(hour)}
                                                />
                                            </HorarioCheck>
                                            <Horario>
                                                {hour}:00 - {hour + 1}:00
                                            </Horario>
                                        </BoxHorario>
                                    ))}
                                </SubBoxHorarios>
                                <SubBoxHorarios>
                                    {Array.from({ length: 7 }, (_, i) => 15 + i).map(hour => (
                                        <BoxHorario isAvailable={horasIndisponiveis.includes(hour)}>
                                            <HorarioCheck>
                                                <Check
                                                    type="checkbox"
                                                    id={`hour-${hour}`}
                                                    checked={selectedHours.includes(hour)}
                                                    onChange={() => handleCheckboxChange(hour)}
                                                    disabled={horasIndisponiveis.includes(hour)}
                                                />
                                            </HorarioCheck>
                                            <Horario>
                                                {hour}:00 - {hour + 1}:00
                                            </Horario>
                                        </BoxHorario>
                                    ))}
                                </SubBoxHorarios>
                            </BoxHorarios>
                        </BoxRight>
                    </BoxQuadra>
                </SectionQuadra>
            ) : (<p>Erro</p>)}
        </>
    )
}