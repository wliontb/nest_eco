import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDB1692240668331 implements MigrationInterface {
    name = 'InitDB1692240668331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`categoryName\` varchar(255) NOT NULL, \`description\` varchar(600) NOT NULL, \`picture\` varchar(255) NOT NULL, \`active\` tinyint NOT NULL DEFAULT 0, \`goodCategoryId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`customer\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`class\` varchar(255) NOT NULL, \`room\` varchar(255) NOT NULL, \`building\` varchar(255) NOT NULL, \`address1\` varchar(255) NOT NULL, \`address2\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`state\` varchar(255) NOT NULL, \`postalCode\` varchar(255) NOT NULL, \`country\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`dateEntered\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`payment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`paymentType\` varchar(255) NOT NULL, \`allowed\` tinyint NOT NULL DEFAULT 0, \`supplierId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`supplier\` (\`id\` int NOT NULL AUTO_INCREMENT, \`companyName\` varchar(40) NOT NULL, \`contactFname\` varchar(30) NOT NULL, \`contactLName\` varchar(50) NOT NULL, \`contactTitle\` varchar(30) NOT NULL, \`address1\` varchar(60) NOT NULL, \`address2\` varchar(50) NOT NULL, \`city\` varchar(15) NOT NULL, \`state\` varchar(25) NOT NULL, \`postalCode\` varchar(15) NOT NULL, \`country\` varchar(50) NOT NULL, \`phone\` varchar(25) NOT NULL, \`fax\` varchar(25) NOT NULL, \`email\` varchar(75) NOT NULL, \`url\` varchar(100) NOT NULL, \`discountType\` varchar(100) NOT NULL, \`discountRate\` int NOT NULL, \`discountAvailable\` tinyint NOT NULL DEFAULT 0, \`currentOrder\` tinyint NOT NULL DEFAULT 0, \`sizeURL\` varchar(100) NOT NULL, \`logo\` varchar(75) NOT NULL, \`ranking\` int NOT NULL, \`notes\` varchar(255) NOT NULL, \`customerId\` int NULL, UNIQUE INDEX \`REL_b28bf31339aa7f2a202bb8146c\` (\`customerId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`goods_category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`goodName\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`supplierId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`productdetail\` (\`id\` int NOT NULL AUTO_INCREMENT, \`color\` varchar(255) NOT NULL, \`size\` varchar(255) NOT NULL, \`productId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`productName\` varchar(60) NOT NULL, \`productDescription\` varchar(255) NOT NULL, \`quantityPerUnit\` int NOT NULL, \`unitSize\` varchar(20) NOT NULL, \`unitPrice\` varchar(15) NOT NULL, \`MSRP\` varchar(255) NOT NULL, \`availableSize\` varchar(50) NOT NULL, \`availableColors\` varchar(100) NOT NULL, \`discount\` int NOT NULL, \`unitWeight\` int NOT NULL, \`unitsInStock\` int NOT NULL, \`unitsOnOrder\` int NOT NULL, \`reorderLevel\` int NOT NULL, \`productAvailable\` tinyint NOT NULL DEFAULT 1, \`discountAvailable\` tinyint NOT NULL DEFAULT 0, \`currentOrder\` tinyint NOT NULL DEFAULT 0, \`picture\` varchar(50) NOT NULL, \`ranking\` int NOT NULL, \`note\` varchar(255) NOT NULL, \`supplierId\` int NULL, \`categoryId\` int NULL, UNIQUE INDEX \`REL_4346e4adb741e80f3711ee09ba\` (\`supplierId\`), UNIQUE INDEX \`REL_ff0c0301a95e517153df97f681\` (\`categoryId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shipper\` (\`id\` int NOT NULL AUTO_INCREMENT, \`companyName\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`orderdetail\` (\`id\` int NOT NULL AUTO_INCREMENT, \`price\` int NOT NULL, \`quantity\` int NOT NULL, \`discount\` int NOT NULL, \`total\` int NOT NULL, \`size\` varchar(50) NOT NULL, \`color\` varchar(50) NOT NULL, \`fulfilled\` tinyint NOT NULL DEFAULT 0, \`billDate\` datetime NOT NULL, \`shipDate\` datetime NOT NULL, \`freight\` int NOT NULL, \`salesTax\` int NOT NULL, \`orderId\` int NULL, \`shipperId\` int NULL, \`productId\` int NULL, UNIQUE INDEX \`REL_aa8ab952b0b4cead542acbe18e\` (\`shipperId\`), UNIQUE INDEX \`REL_ed57365b5815a7e0b94f8c5421\` (\`productId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`orderNumber\` int NOT NULL, \`orderDate\` datetime NOT NULL, \`requiredDate\` datetime NOT NULL, \`timestamp\` varchar(255) NOT NULL, \`transactStatus\` varchar(255) NOT NULL, \`fulfilled\` tinyint NOT NULL DEFAULT 0, \`deleted\` tinyint NOT NULL DEFAULT 0, \`paid\` int NOT NULL, \`paymentDate\` datetime NOT NULL, \`customerId\` int NULL, \`paymentId\` int NULL, UNIQUE INDEX \`REL_124456e637cca7a415897dce65\` (\`customerId\`), UNIQUE INDEX \`REL_9ad13532f48db4ac5a3b3dd70e\` (\`paymentId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD CONSTRAINT \`FK_d75549613c2ae44496853c6de26\` FOREIGN KEY (\`goodCategoryId\`) REFERENCES \`goods_category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD CONSTRAINT \`FK_a3772a91be111b4b6a8a496fffa\` FOREIGN KEY (\`supplierId\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD CONSTRAINT \`FK_b28bf31339aa7f2a202bb8146cd\` FOREIGN KEY (\`customerId\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`goods_category\` ADD CONSTRAINT \`FK_f7e43721110769200c794b3c897\` FOREIGN KEY (\`supplierId\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` ADD CONSTRAINT \`FK_42f77c2d330e36a128dec7e6570\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_4346e4adb741e80f3711ee09ba4\` FOREIGN KEY (\`supplierId\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_ff0c0301a95e517153df97f6812\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD CONSTRAINT \`FK_c2354396f8361da558b647ed342\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD CONSTRAINT \`FK_aa8ab952b0b4cead542acbe18e7\` FOREIGN KEY (\`shipperId\`) REFERENCES \`shipper\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD CONSTRAINT \`FK_ed57365b5815a7e0b94f8c54217\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_124456e637cca7a415897dce659\` FOREIGN KEY (\`customerId\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_9ad13532f48db4ac5a3b3dd70e5\` FOREIGN KEY (\`paymentId\`) REFERENCES \`payment\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_9ad13532f48db4ac5a3b3dd70e5\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_124456e637cca7a415897dce659\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP FOREIGN KEY \`FK_ed57365b5815a7e0b94f8c54217\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP FOREIGN KEY \`FK_aa8ab952b0b4cead542acbe18e7\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP FOREIGN KEY \`FK_c2354396f8361da558b647ed342\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_ff0c0301a95e517153df97f6812\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_4346e4adb741e80f3711ee09ba4\``);
        await queryRunner.query(`ALTER TABLE \`productdetail\` DROP FOREIGN KEY \`FK_42f77c2d330e36a128dec7e6570\``);
        await queryRunner.query(`ALTER TABLE \`goods_category\` DROP FOREIGN KEY \`FK_f7e43721110769200c794b3c897\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP FOREIGN KEY \`FK_b28bf31339aa7f2a202bb8146cd\``);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP FOREIGN KEY \`FK_a3772a91be111b4b6a8a496fffa\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_d75549613c2ae44496853c6de26\``);
        await queryRunner.query(`DROP INDEX \`REL_9ad13532f48db4ac5a3b3dd70e\` ON \`order\``);
        await queryRunner.query(`DROP INDEX \`REL_124456e637cca7a415897dce65\` ON \`order\``);
        await queryRunner.query(`DROP TABLE \`order\``);
        await queryRunner.query(`DROP INDEX \`REL_ed57365b5815a7e0b94f8c5421\` ON \`orderdetail\``);
        await queryRunner.query(`DROP INDEX \`REL_aa8ab952b0b4cead542acbe18e\` ON \`orderdetail\``);
        await queryRunner.query(`DROP TABLE \`orderdetail\``);
        await queryRunner.query(`DROP TABLE \`shipper\``);
        await queryRunner.query(`DROP INDEX \`REL_ff0c0301a95e517153df97f681\` ON \`product\``);
        await queryRunner.query(`DROP INDEX \`REL_4346e4adb741e80f3711ee09ba\` ON \`product\``);
        await queryRunner.query(`DROP TABLE \`product\``);
        await queryRunner.query(`DROP TABLE \`productdetail\``);
        await queryRunner.query(`DROP TABLE \`goods_category\``);
        await queryRunner.query(`DROP INDEX \`REL_b28bf31339aa7f2a202bb8146c\` ON \`supplier\``);
        await queryRunner.query(`DROP TABLE \`supplier\``);
        await queryRunner.query(`DROP TABLE \`payment\``);
        await queryRunner.query(`DROP TABLE \`customer\``);
        await queryRunner.query(`DROP TABLE \`category\``);
    }

}
