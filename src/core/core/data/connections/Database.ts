import { createConnection, getConnection as getConnectionTypeORM,} from 'typeorm'; 
//aqui estamos renomeando a getConnection do type, porque queremos usar esse nome para a nossa const.

export const initConnection = async () => createConnection();



export const getConnection = () => {

    let conn = getConnectionTypeORM();

    if(!conn){
        throw new Error("Database is not connected!");
    }

    return conn;
};


