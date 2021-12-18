import { getConnection as getTypeConnection, createConnection} from 'typeorm'; 
//aqui estamos renomeando a getConnection do type, porque queremos usar esse nome para a nossa const.

export const getConnection = () => {
    return getTypeConnection();
}


export const initConnection = async () => {
    return createConnection();
}