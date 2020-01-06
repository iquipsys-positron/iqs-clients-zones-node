import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IZonesClientV1 } from './IZonesClientV1';
//import { IZonesController } from 'iqs-services-zones-node';
import { ZoneV1 } from './ZoneV1';

export class ZonesDirectClientV1 extends DirectClient<any> implements IZonesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-zones", "controller", "*", "*", "*"))
    }

    public getZones(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ZoneV1>) => void): void {
        let timing = this.instrument(correlationId, 'zones.get_zones');
        this._controller.getZones(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getZoneById(correlationId: string, zoneId: string, 
        callback: (err: any, zone: ZoneV1) => void): void {
        let timing = this.instrument(correlationId, 'zones.get_zone_by_id');
        this._controller.getZoneById(correlationId, zoneId, (err, zone) => {
            timing.endTiming();
            callback(err, zone);
        });
    }

    public createZone(correlationId: string, zone: ZoneV1, 
        callback: (err: any, zone: ZoneV1) => void): void {
        let timing = this.instrument(correlationId, 'zones.create_zone');
        this._controller.createZone(correlationId, zone, (err, zone) => {
            timing.endTiming();
            callback(err, zone);
        });
    }

    public updateZone(correlationId: string, zone: ZoneV1, 
        callback: (err: any, zone: ZoneV1) => void): void {
        let timing = this.instrument(correlationId, 'zones.update_zone');
        this._controller.updateZone(correlationId, zone, (err, zone) => {
            timing.endTiming();
            callback(err, zone);
        });
    }

    public deleteZoneById(correlationId: string, zoneId: string,
        callback: (err: any, zone: ZoneV1) => void): void {
        let timing = this.instrument(correlationId, 'zones.delete_zone_by_id');
        this._controller.deleteZoneById(correlationId, zoneId, (err, zone) => {
            timing.endTiming();
            callback(err, zone);
        });
    }

    public unsetObject(correlationId: string, orgId: string, objectId: string,
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'zones.unset_object');
        this._controller.unsetObject(correlationId, orgId, objectId, (err) => {
            timing.endTiming();
            if (callback) callback(err);
        });
    }

    public unsetGroup(correlationId: string, orgId: string, groupId: string,
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'zones.unset_group');
        this._controller.unsetGroup(correlationId, orgId, groupId, (err) => {
            timing.endTiming();
            if (callback) callback(err);
        });
    }

}