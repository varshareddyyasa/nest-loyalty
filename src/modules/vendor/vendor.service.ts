import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { Vendor } from "./vendor.entity";

@Injectable()
export class VendorService extends TypeOrmCrudService<Vendor>
{
    constructor(@InjectRepository(Vendor) repo){
        super(repo);
    }
}