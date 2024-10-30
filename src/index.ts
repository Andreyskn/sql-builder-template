import { Compiler, type Configuration } from '@andreyskn/sql-builder';

const cfg: Configuration = {
	schemaOutPath: 'schema.sql',
	queryOutPath: 'query.sql',
	dialect: 'SQLite',
	noEmit: true, // output to the console only
};

const { compile, db } = new Compiler<Schema>(cfg);

type Schema = {
	example_table: Table;
};

type Table = {
	example_column: string;
};

compile({
	schema: [
		{
			annotation: 'example annotation',
			builder: db.schema
				.createTable('example_table')
				.addColumn('example_column', 'text'),
		},
	],
	query: [
		{
			builder: db.selectFrom('example_table').selectAll(),
		},
	],
});
