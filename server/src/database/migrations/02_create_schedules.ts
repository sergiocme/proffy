import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('schedules', table => {
    table.increments('id').primary;
    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    table.integer('leasson_id')
      .notNullable()
      .references('id')
      .inTable('leassons');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('schedules');
}
