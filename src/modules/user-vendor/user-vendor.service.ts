import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { UserVendor } from './user-vendor.entity';

@Injectable()
export class UserVendorService extends TypeOrmCrudService<UserVendor>
{
    constructor(@InjectRepository(UserVendor) repo){
        super(repo);
    }
}