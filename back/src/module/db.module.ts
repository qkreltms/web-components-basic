import { Module } from '@nestjs/common';
import { Pool } from 'pg';

export const PROVIDER_DB = 'pg';

/**
 * create database mytodo;
 * \l
 * \c mytodo
 */
const dbProvider = {
  provide: PROVIDER_DB,
  useValue: new Pool({
    user: 'bagjeonghun',
    host: 'localhost',
    database: 'mytodo',
    password: '',
    port: 5432,
  }),
};

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DbModule {}