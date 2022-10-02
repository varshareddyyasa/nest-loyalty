import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsedPromotionsController } from './usedPromotions.controller';
import { UsedPromotions } from './usedPromotions.entity';
import { UsedPromotionsService } from './usedPromotions.service';

@Module({
    imports: [TypeOrmModule.forFeature([UsedPromotions])],
    providers: [UsedPromotionsService],
    controllers: [UsedPromotionsController] 
})
export class UsedPromotionsModule{}