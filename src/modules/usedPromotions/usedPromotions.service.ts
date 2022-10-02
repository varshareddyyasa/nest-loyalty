import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { UsedPromotions } from "./usedPromotions.entity";

@Injectable()
export class UsedPromotionsService extends TypeOrmCrudService<UsedPromotions>
{
    constructor(@InjectRepository(UsedPromotions) repo){
        super(repo);
    }
}