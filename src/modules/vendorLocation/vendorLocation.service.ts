import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { VendorLocation } from "./vendorLocation.entity";

@Injectable()
export class VendorLocationService extends TypeOrmCrudService<VendorLocation>
{
    constructor(@InjectRepository(VendorLocation) repo){
        super(repo);
    }
}