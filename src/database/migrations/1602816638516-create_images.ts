import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602816638516 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "images",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "path",
            type: "varchar",
          },
          {
            name: "abrigo_id",
            type: "integer",
          },
        ],
        // chaves estrageiras
        foreignKeys: [
          {
            // nome da chave posso colocar qualquer nome
            name: "ImageAbrigo",
            // qual o nome da columa que vai armazenar o relacionamento
            columnNames: ["abrigo_id"],
            // qual tabela ela esta se realacionando
            referencedTableName: "abrigos",
            // qual a coluna que esta relacionando na tabela orphanages
            referencedColumnNames: ["id"],
            // ATUALIZA OS RELACIONAMENTO JUNTO COM A TABELA
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("images");
  }
}
