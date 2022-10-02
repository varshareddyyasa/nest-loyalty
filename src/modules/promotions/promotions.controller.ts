import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { Promotions } from "./promotions.entity";
import { PromotionsService } from "./promotions.service";

@Crud({
    model: {
    type: Promotions
}})
@Controller('promotions')
export class PromotionsController implements CrudController<Promotions>
{
    constructor(public service: PromotionsService){}
}