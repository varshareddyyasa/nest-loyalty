import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { VendorLocation } from "./vendorLocation.entity";
import { VendorLocationService } from "./vendorLocation.service";

@Crud({
    model: {
    type: VendorLocation
}})
@Controller('vendorLocation')
export class VendorLocationController implements CrudController<VendorLocation>
{
    constructor(public service: VendorLocationService){}
}