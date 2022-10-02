import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { Transaction } from "./transaction.entity";

@Injectable()
export class TransactionService extends TypeOrmCrudService<Transaction>
{
    constructor(@InjectRepository(Transaction) repo){
        super(repo);
    }
}