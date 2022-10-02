import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { Transaction } from "./transaction.entity";
import { TransactionService } from "./transaction.service";

@Crud({
    model: {
    type: Transaction
}})
@Controller('transaction')
export class TransactionController implements CrudController<Transaction>
{
    constructor(public service: TransactionService){}
}