import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { UserVendor } from "./user-vendor.entity";
import { UserVendorService } from "./user-vendor.service";

@Crud({
    model: {
    type: UserVendor
}})
@Controller('user-vendor')
export class UserVendorController implements CrudController<UserVendor>
{
    constructor(public service: UserVendorService){}
}