import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { Vendor } from "./vendor.entity";
import { VendorService } from "./vendor.service";

@Crud({
    model: {
    type: Vendor
}})
@Controller('vendor')
export class VendorController implements CrudController<Vendor>
{
    constructor(public service: VendorService){}
}