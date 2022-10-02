import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserVendorController } from "./user-vendor.controller";
import { UserVendor } from "./user-vendor.entity";
import { UserVendorService } from "./user-vendor.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserVendor])],
    providers: [UserVendorService],
    controllers: [UserVendorController] 
})
export class UserVendorModule{}