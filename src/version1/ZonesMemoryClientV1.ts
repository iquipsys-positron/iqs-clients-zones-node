let _ = require('lodash');

import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IdGenerator } from 'pip-services3-commons-node';

import { IZonesClientV1 } from './IZonesClientV1';
import { ZoneV1 } from './ZoneV1';

export class ZonesMemoryClientV1 implements IZonesClientV1 {
    private _zones: ZoneV1[] = [];
            
    private matchString(value: string, search: string): boolean {
        if (value == null && search == null)
            return true;
        if (value == null || search == null)
            return false;
        return value.toLowerCase().indexOf(search) >= 0;
    }

    private matchSearch(item: ZoneV1, search: string): boolean {
        search = search.toLowerCase();
        if (this.matchString(item.name, search))
            return true;
        return false;
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        
        let search = filter.getAsNullableString('search');
        let id = filter.getAsNullableString('id');
        let orgId = filter.getAsNullableString('org_id');
        let type = filter.getAsNullableString('type');
                
        return (item) => {
            if (id && item.id != id) 
                return false;
            if (orgId && item.org_id != orgId) 
                return false;
            if (type && item.type != type) 
                return false;
            if (search && !this.matchSearch(item, search)) 
                return false;
            return true; 
        };
    }

    public getZones(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ZoneV1>) => void): void {
        let zones = _.filter(this._zones, this.composeFilter(filter));
        callback(null, new DataPage<ZoneV1>(zones, zones.length));
    }

    public getZoneById(correlationId: string, zoneId: string, 
        callback: (err: any, zone: ZoneV1) => void): void {

        let zone = _.find(this._zones, z => z.id == zoneId);
        callback(null, zone);
    }

    public createZone(correlationId: string, zone: ZoneV1, 
        callback: (err: any, zone: ZoneV1) => void): void {

        zone.id = zone.id || IdGenerator.nextLong();
        // Todo: Calculate parameters
        this._zones.push(zone);

        callback(null, zone);
    }

    public updateZone(correlationId: string, zone: ZoneV1, 
        callback: (err: any, zone: ZoneV1) => void): void {

        this._zones = _.filter(this._zones, z => z.id != zone.id);
        this._zones.push(zone);

        callback(null, zone);
    }

    public deleteZoneById(correlationId: string, zoneId: string,
        callback: (err: any, zone: ZoneV1) => void): void {

        let zone = _.find(this._zones, z => z.id == zoneId);
        this._zones = _.filter(this._zones, z => z.id != zoneId);

        callback(null, zone);
    }

    public unsetObject(correlationId: string, orgId: string, objectId: string,
        callback: (err: any) => void): void {
        _.each(this._zones, (z: ZoneV1) => {
            z.include_object_ids = _.filter(z.include_group_ids, i => i != objectId);
            z.exclude_object_ids = _.filter(z.exclude_group_ids, i => i != objectId);
        });

        callback(null);
    }

    public unsetGroup(correlationId: string, orgId: string, groupId: string,
        callback: (err: any) => void): void {
        _.each(this._zones, (z: ZoneV1) => {
            z.include_group_ids = _.filter(z.include_group_ids, i => i != groupId);
            z.exclude_group_ids = _.filter(z.exclude_group_ids, i => i != groupId);
        });

        callback(null);
    }

}