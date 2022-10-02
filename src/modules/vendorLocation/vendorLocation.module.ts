import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorLocationController } from "./vendorLocation.controller";
import { VendorLocation } from "./vendorLocation.entity";
import { VendorLocationService } from "./vendorLocation.service";

@Module({
    imports: [TypeOrmModule.forFeature([VendorLocation])],
    providers: [VendorLocationService],
    controllers: [VendorLocationController] 
})
export class VendorLocationModule{}