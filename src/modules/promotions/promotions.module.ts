import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromotionsController } from './promotions.controller';
import { Promotions } from './promotions.entity';
import { PromotionsService } from './promotions.service';

@Module({
    imports: [TypeOrmModule.forFeature([Promotions])],
    providers: [PromotionsService],
    controllers: [PromotionsController] 
})
export class PromotionsModule{}