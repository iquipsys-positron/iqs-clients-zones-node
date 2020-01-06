import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { IZonesClientV1 } from './IZonesClientV1';
import { ZoneV1 } from './ZoneV1';

export class ZonesNullClientV1 implements IZonesClientV1 {
            
    public getZones(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ZoneV1>) => void): void {
        callback(null, new DataPage<ZoneV1>([], 0));
    }

    public getZoneById(correlationId: string, zoneId: string, 
        callback: (err: any, zone: ZoneV1) => void): void {
        callback(null, null);
    }

    public createZone(correlationId: string, zone: ZoneV1, 
        callback: (err: any, zone: ZoneV1) => void): void {
        callback(null, zone);
    }

    public updateZone(correlationId: string, zone: ZoneV1, 
        callback: (err: any, zone: ZoneV1) => void): void {
        callback(null, zone);
    }

    public deleteZoneById(correlationId: string, zoneId: string,
        callback: (err: any, zone: ZoneV1) => void): void {
        if (callback) callback(null, null);
    }

    public unsetObject(correlationId: string, orgId: string, objectId: string,
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }

    public unsetGroup(correlationId: string, orgId: string, groupId: string,
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }

}