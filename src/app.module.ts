import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

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
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
