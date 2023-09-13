import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTblInvoiceandChild1694627000986 implements MigrationInterface {
    name = 'CreateTblInvoiceandChild1694627000986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`invoice\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`full_name\` varchar(255) NOT NULL, \`phone\` int NOT NULL, \`nation\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`district\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`shipping\` int NOT NULL DEFAULT '1', \`payment\` int NOT NULL DEFAULT '1', \`total\` int NOT NULL, \`status\` enum ('1', '2', '0') NOT NULL DEFAULT '1', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`invoice_child\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`qty\` int NOT NULL DEFAULT '1', \`total\` int NOT NULL, \`productId\` int NULL, \`invoiceId\` int NULL, UNIQUE INDEX \`REL_076c4f08a3e421d44878978d2a\` (\`productId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`goods_category\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`productprop\` DROP FOREIGN KEY \`FK_980b1ed324498ac3e048f0448e6\``);
        await queryRunner.query(`ALTER TABLE \`productprop\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`productprop\` CHANGE \`productId\` \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`firstName\` \`firstName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`lastName\` \`lastName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`address1\` \`address1\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`address2\` \`address2\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`avatar\` \`avatar\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP FOREIGN KEY \`FK_a3772a91be111b4b6a8a496fffa\``);
        await queryRunner.query(`ALTER TABLE \`payment\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` CHANGE \`supplierId\` \`supplierId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP FOREIGN KEY \`FK_b28bf31339aa7f2a202bb8146cd\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` CHANGE \`customerId\` \`customerId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_d75549613c2ae44496853c6de26\``);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`goodCategoryId\` \`goodCategoryId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_124456e637cca7a415897dce659\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_9ad13532f48db4ac5a3b3dd70e5\``);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`customerId\` \`customerId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`paymentId\` \`paymentId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`shipper\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP FOREIGN KEY \`FK_c2354396f8361da558b647ed342\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP FOREIGN KEY \`FK_aa8ab952b0b4cead542acbe18e7\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP FOREIGN KEY \`FK_ed57365b5815a7e0b94f8c54217\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` CHANGE \`orderId\` \`orderId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` CHANGE \`shipperId\` \`shipperId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` CHANGE \`productId\` \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`invoice_child\` ADD CONSTRAINT \`FK_076c4f08a3e421d44878978d2af\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`invoice_child\` ADD CONSTRAINT \`FK_2de8bf244406b73bffbf01b123f\` FOREIGN KEY (\`invoiceId\`) REFERENCES \`invoice\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productprop\` ADD CONSTRAINT \`FK_980b1ed324498ac3e048f0448e6\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD CONSTRAINT \`FK_a3772a91be111b4b6a8a496fffa\` FOREIGN KEY (\`supplierId\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD CONSTRAINT \`FK_b28bf31339aa7f2a202bb8146cd\` FOREIGN KEY (\`customerId\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD CONSTRAINT \`FK_d75549613c2ae44496853c6de26\` FOREIGN KEY (\`goodCategoryId\`) REFERENCES \`goods_category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_124456e637cca7a415897dce659\` FOREIGN KEY (\`customerId\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_9ad13532f48db4ac5a3b3dd70e5\` FOREIGN KEY (\`paymentId\`) REFERENCES \`payment\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD CONSTRAINT \`FK_c2354396f8361da558b647ed342\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD CONSTRAINT \`FK_aa8ab952b0b4cead542acbe18e7\` FOREIGN KEY (\`shipperId\`) REFERENCES \`shipper\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD CONSTRAINT \`FK_ed57365b5815a7e0b94f8c54217\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP FOREIGN KEY \`FK_ed57365b5815a7e0b94f8c54217\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP FOREIGN KEY \`FK_aa8ab952b0b4cead542acbe18e7\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP FOREIGN KEY \`FK_c2354396f8361da558b647ed342\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_9ad13532f48db4ac5a3b3dd70e5\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_124456e637cca7a415897dce659\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_d75549613c2ae44496853c6de26\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP FOREIGN KEY \`FK_b28bf31339aa7f2a202bb8146cd\``);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP FOREIGN KEY \`FK_a3772a91be111b4b6a8a496fffa\``);
        await queryRunner.query(`ALTER TABLE \`productprop\` DROP FOREIGN KEY \`FK_980b1ed324498ac3e048f0448e6\``);
        await queryRunner.query(`ALTER TABLE \`invoice_child\` DROP FOREIGN KEY \`FK_2de8bf244406b73bffbf01b123f\``);
        await queryRunner.query(`ALTER TABLE \`invoice_child\` DROP FOREIGN KEY \`FK_076c4f08a3e421d44878978d2af\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` CHANGE \`productId\` \`productId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` CHANGE \`shipperId\` \`shipperId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` CHANGE \`orderId\` \`orderId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD CONSTRAINT \`FK_ed57365b5815a7e0b94f8c54217\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD CONSTRAINT \`FK_aa8ab952b0b4cead542acbe18e7\` FOREIGN KEY (\`shipperId\`) REFERENCES \`shipper\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD CONSTRAINT \`FK_c2354396f8361da558b647ed342\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`shipper\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`paymentId\` \`paymentId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`customerId\` \`customerId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_9ad13532f48db4ac5a3b3dd70e5\` FOREIGN KEY (\`paymentId\`) REFERENCES \`payment\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_124456e637cca7a415897dce659\` FOREIGN KEY (\`customerId\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`goodCategoryId\` \`goodCategoryId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD CONSTRAINT \`FK_d75549613c2ae44496853c6de26\` FOREIGN KEY (\`goodCategoryId\`) REFERENCES \`goods_category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`supplier\` CHANGE \`customerId\` \`customerId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`supplier\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD CONSTRAINT \`FK_b28bf31339aa7f2a202bb8146cd\` FOREIGN KEY (\`customerId\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`payment\` CHANGE \`supplierId\` \`supplierId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`payment\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD CONSTRAINT \`FK_a3772a91be111b4b6a8a496fffa\` FOREIGN KEY (\`supplierId\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`avatar\` \`avatar\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`address2\` \`address2\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`address1\` \`address1\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`lastName\` \`lastName\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`firstName\` \`firstName\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`productprop\` CHANGE \`productId\` \`productId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`productprop\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`productprop\` ADD CONSTRAINT \`FK_980b1ed324498ac3e048f0448e6\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`goods_category\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP INDEX \`REL_076c4f08a3e421d44878978d2a\` ON \`invoice_child\``);
        await queryRunner.query(`DROP TABLE \`invoice_child\``);
        await queryRunner.query(`DROP TABLE \`invoice\``);
    }

}
