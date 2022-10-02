import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { Promotions } from "./promotions.entity";

@Injectable()
export class PromotionsService extends TypeOrmCrudService<Promotions>
{
    constructor(@InjectRepository(Promotions) repo){
        super(repo);
    }
}