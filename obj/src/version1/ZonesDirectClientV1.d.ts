import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { IZonesClientV1 } from './IZonesClientV1';
import { ZoneV1 } from './ZoneV1';
export declare class ZonesDirectClientV1 extends DirectClient<any> implements IZonesClientV1 {
    constructor();
    getZones(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<ZoneV1>) => void): void;
    getZoneById(correlationId: string, zoneId: string, callback: (err: any, zone: ZoneV1) => void): void;
    createZone(correlationId: string, zone: ZoneV1, callback: (err: any, zone: ZoneV1) => void): void;
    updateZone(correlationId: string, zone: ZoneV1, callback: (err: any, zone: ZoneV1) => void): void;
    deleteZoneById(correlationId: string, zoneId: string, callback: (err: any, zone: ZoneV1) => void): void;
    unsetObject(correlationId: string, orgId: string, objectId: string, callback: (err: any) => void): void;
    unsetGroup(correlationId: string, orgId: string, groupId: string, callback: (err: any) => void): void;
}
