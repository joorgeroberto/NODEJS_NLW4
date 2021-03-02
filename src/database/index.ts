import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  // Verificando se é ambiente de teste. Se for, pega o banco de teste sobrescrevendo. Se não for usa o banco de prod normal.
  return createConnection(
    Object.assign(defaultOptions, {
      database: process.env.NODE_ENV === 'test'
      ?"./src/database/database.test.sqlite" 
      : defaultOptions.database,
    })
  );
};