import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { UsedPromotions } from "./usedPromotions.entity";
import { UsedPromotionsService } from "./usedPromotions.service";

@Crud({
    model: {
    type: UsedPromotions
}})
@Controller('usedPromotions')
export class UsedPromotionsController implements CrudController<UsedPromotions>
{
    constructor(public service: UsedPromotionsService){}
}