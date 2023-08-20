import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateDB1692508142231 implements MigrationInterface {
    name = 'UpdateDB1692508142231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`productprop\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nameProp\` varchar(255) NOT NULL, \`valueProp\` varchar(255) NOT NULL, \`productId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`class\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`room\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`building\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`city\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`state\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`postalCode\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`country\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`dateEntered\``);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP COLUMN \`paymentType\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`companyName\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`contactFname\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`contactLName\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`contactTitle\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`address1\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`address2\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`state\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`fax\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`discountType\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`discountRate\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`discountAvailable\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`currentOrder\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`sizeURL\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`notes\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`active\``);
        await queryRunner.query(`ALTER TABLE \`productdetail\` DROP COLUMN \`color\``);
        await queryRunner.query(`ALTER TABLE \`productdetail\` DROP COLUMN \`size\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`productName\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`productDescription\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`quantityPerUnit\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`unitSize\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`unitPrice\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`MSRP\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`availableSize\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`availableColors\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`unitWeight\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`unitsInStock\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`unitsOnOrder\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`reorderLevel\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`currentOrder\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`ranking\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`note\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP COLUMN \`discount\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP COLUMN \`total\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP COLUMN \`size\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP COLUMN \`color\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP COLUMN \`freight\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP COLUMN \`salesTax\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`timestamp\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`paymentDate\``);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`avatar\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`jcoin\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`active\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD \`paymentName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD \`description\` varchar(600) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`description\` varchar(1000) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`address\` varchar(60) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`active\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`goods_category\` ADD \`picture\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` ADD \`nameDetail\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` ADD \`price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` ADD \`discount\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` ADD \`discountAvailable\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` ADD \`picture\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` ADD \`qty\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`name\` varchar(60) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`shipper\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`shipper\` ADD \`avatar\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`shipper\` ADD \`active\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`shipper\` ADD \`rate\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD \`finalPrice\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD \`finalTotalPrice\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`paidDate\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP FOREIGN KEY \`FK_a3772a91be111b4b6a8a496fffa\``);
        await queryRunner.query(`ALTER TABLE \`payment\` CHANGE \`supplierId\` \`supplierId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP FOREIGN KEY \`FK_b28bf31339aa7f2a202bb8146cd\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` CHANGE \`customerId\` \`customerId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`goods_category\` DROP FOREIGN KEY \`FK_f7e43721110769200c794b3c897\``);
        await queryRunner.query(`ALTER TABLE \`goods_category\` CHANGE \`supplierId\` \`supplierId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_d75549613c2ae44496853c6de26\``);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`goodCategoryId\` \`goodCategoryId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` DROP FOREIGN KEY \`FK_42f77c2d330e36a128dec7e6570\``);
        await queryRunner.query(`ALTER TABLE \`productdetail\` CHANGE \`productId\` \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_4346e4adb741e80f3711ee09ba4\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_ff0c0301a95e517153df97f6812\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`picture\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`picture\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`supplierId\` \`supplierId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`categoryId\` \`categoryId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP FOREIGN KEY \`FK_c2354396f8361da558b647ed342\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP FOREIGN KEY \`FK_aa8ab952b0b4cead542acbe18e7\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP FOREIGN KEY \`FK_ed57365b5815a7e0b94f8c54217\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` CHANGE \`orderId\` \`orderId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` CHANGE \`shipperId\` \`shipperId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` CHANGE \`productId\` \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_124456e637cca7a415897dce659\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_9ad13532f48db4ac5a3b3dd70e5\``);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`customerId\` \`customerId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`paymentId\` \`paymentId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD CONSTRAINT \`FK_a3772a91be111b4b6a8a496fffa\` FOREIGN KEY (\`supplierId\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD CONSTRAINT \`FK_b28bf31339aa7f2a202bb8146cd\` FOREIGN KEY (\`customerId\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`goods_category\` ADD CONSTRAINT \`FK_f7e43721110769200c794b3c897\` FOREIGN KEY (\`supplierId\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD CONSTRAINT \`FK_d75549613c2ae44496853c6de26\` FOREIGN KEY (\`goodCategoryId\`) REFERENCES \`goods_category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` ADD CONSTRAINT \`FK_42f77c2d330e36a128dec7e6570\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productprop\` ADD CONSTRAINT \`FK_980b1ed324498ac3e048f0448e6\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
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
        await queryRunner.query(`ALTER TABLE \`productprop\` DROP FOREIGN KEY \`FK_980b1ed324498ac3e048f0448e6\``);
        await queryRunner.query(`ALTER TABLE \`productdetail\` DROP FOREIGN KEY \`FK_42f77c2d330e36a128dec7e6570\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_d75549613c2ae44496853c6de26\``);
        await queryRunner.query(`ALTER TABLE \`goods_category\` DROP FOREIGN KEY \`FK_f7e43721110769200c794b3c897\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP FOREIGN KEY \`FK_b28bf31339aa7f2a202bb8146cd\``);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP FOREIGN KEY \`FK_a3772a91be111b4b6a8a496fffa\``);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`paymentId\` \`paymentId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`customerId\` \`customerId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_9ad13532f48db4ac5a3b3dd70e5\` FOREIGN KEY (\`paymentId\`) REFERENCES \`payment\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_124456e637cca7a415897dce659\` FOREIGN KEY (\`customerId\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` CHANGE \`productId\` \`productId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` CHANGE \`shipperId\` \`shipperId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` CHANGE \`orderId\` \`orderId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD CONSTRAINT \`FK_ed57365b5815a7e0b94f8c54217\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD CONSTRAINT \`FK_aa8ab952b0b4cead542acbe18e7\` FOREIGN KEY (\`shipperId\`) REFERENCES \`shipper\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD CONSTRAINT \`FK_c2354396f8361da558b647ed342\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`categoryId\` \`categoryId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`supplierId\` \`supplierId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`picture\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`picture\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_ff0c0301a95e517153df97f6812\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_4346e4adb741e80f3711ee09ba4\` FOREIGN KEY (\`supplierId\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` CHANGE \`productId\` \`productId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` ADD CONSTRAINT \`FK_42f77c2d330e36a128dec7e6570\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`goodCategoryId\` \`goodCategoryId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD CONSTRAINT \`FK_d75549613c2ae44496853c6de26\` FOREIGN KEY (\`goodCategoryId\`) REFERENCES \`goods_category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`goods_category\` CHANGE \`supplierId\` \`supplierId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`goods_category\` ADD CONSTRAINT \`FK_f7e43721110769200c794b3c897\` FOREIGN KEY (\`supplierId\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`supplier\` CHANGE \`customerId\` \`customerId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD CONSTRAINT \`FK_b28bf31339aa7f2a202bb8146cd\` FOREIGN KEY (\`customerId\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`payment\` CHANGE \`supplierId\` \`supplierId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD CONSTRAINT \`FK_a3772a91be111b4b6a8a496fffa\` FOREIGN KEY (\`supplierId\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`paidDate\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP COLUMN \`finalTotalPrice\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP COLUMN \`finalPrice\``);
        await queryRunner.query(`ALTER TABLE \`shipper\` DROP COLUMN \`rate\``);
        await queryRunner.query(`ALTER TABLE \`shipper\` DROP COLUMN \`active\``);
        await queryRunner.query(`ALTER TABLE \`shipper\` DROP COLUMN \`avatar\``);
        await queryRunner.query(`ALTER TABLE \`shipper\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`productdetail\` DROP COLUMN \`qty\``);
        await queryRunner.query(`ALTER TABLE \`productdetail\` DROP COLUMN \`picture\``);
        await queryRunner.query(`ALTER TABLE \`productdetail\` DROP COLUMN \`discountAvailable\``);
        await queryRunner.query(`ALTER TABLE \`productdetail\` DROP COLUMN \`discount\``);
        await queryRunner.query(`ALTER TABLE \`productdetail\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`productdetail\` DROP COLUMN \`nameDetail\``);
        await queryRunner.query(`ALTER TABLE \`goods_category\` DROP COLUMN \`picture\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`active\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`address\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP COLUMN \`paymentName\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`active\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`jcoin\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`avatar\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`paymentDate\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`timestamp\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD \`salesTax\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD \`freight\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD \`color\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD \`size\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD \`total\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD \`discount\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD \`price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`note\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`ranking\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`currentOrder\` tinyint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`reorderLevel\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`unitsOnOrder\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`unitsInStock\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`unitWeight\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`availableColors\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`availableSize\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`MSRP\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`unitPrice\` varchar(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`unitSize\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`quantityPerUnit\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`productDescription\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`productName\` varchar(60) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` ADD \`size\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` ADD \`color\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`active\` tinyint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`notes\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`sizeURL\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`currentOrder\` tinyint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`discountAvailable\` tinyint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`discountRate\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`discountType\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`fax\` varchar(25) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`state\` varchar(25) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`address2\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`address1\` varchar(60) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`contactTitle\` varchar(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`contactLName\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`contactFname\` varchar(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD \`companyName\` varchar(40) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD \`paymentType\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`dateEntered\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`country\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`postalCode\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`state\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`city\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`building\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`room\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`class\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`productprop\``);
    }

}
