import { init, type Configuration } from '@andreyskn/sql-builder';

const cfg: Configuration = {
	schemaOutPath: './schema.sql',
	queryOutPath: './query.sql',
	dialect: 'SQLite',
};

const { compile, db } = init<Schema>(cfg);

type Schema = {
	table: Table;
};

type Table = {};

compile({
	schema: [],
	query: [],
});
