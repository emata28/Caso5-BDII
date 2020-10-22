import { Application } from 'express';
import Post from "../mongo/schemas";
import mongoConnect from '../mongo/database';
import mongoData from '../mongo/data';
import sqlConnect from '../sqlserver/database';
import logger from '../logger/logger';


/** Metodo para configurar las bases de datos de Sql Server y Mongo */
export default (app: Application) => {
  // Se conecta y genera la informacion de pruebas para Mongo
  mongoConnect(app)
    .then(() => mongoData())
    .catch((err) => logger.error('No se pudo conectar con MongoDB', err));

  // Se conecta y genera la informacion de pruebas para Sql Server
  sqlConnect(app).catch((err) =>
    logger.error('No se pudo conectar a la base de datos de Sql Server', err)
  );
};
