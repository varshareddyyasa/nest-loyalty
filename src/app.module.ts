import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './modules/user/user.module';
import { VendorModule } from './modules/vendor/vendor.module';
import { VendorLocationModule } from './modules/vendorLocation/vendorLocation.module';
import { PromotionsModule } from './modules/promotions/promotions.module';
import { UsedPromotionsModule } from './modules/usedPromotions/usedPromotions.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { UserVendorModule } from './modules/user-vendor/user-vendor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '<YourStrong@Passw0rd>',
      database: 'Loyalty',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: false,
      options: { encrypt: false },
      cli: {
        migrationsDir: "src/db/migration"
      }
    }),
    UserModule,
    VendorModule,
    VendorLocationModule,
    PromotionsModule,
    UsedPromotionsModule,
    TransactionModule,
    UserVendorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
