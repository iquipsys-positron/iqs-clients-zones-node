let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { ZoneV1 } from './ZoneV1';
import { IZonesClientV1 } from './IZonesClientV1';

export class ZonesLambdaClientV1 extends CommandableLambdaClient implements IZonesClientV1 {       

    constructor(config?: any) {
        super('zones');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getZones(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<ZoneV1>) => void): void {
        this.callCommand( 
            'get_zones', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getZoneById(correlationId: string, zoneId: string,
        callback: (err: any, zone: ZoneV1) => void): void {
        this.callCommand( 
            'get_zone_by_id',
            correlationId,
            {
                zone_id: zoneId
            }, 
            callback
        );        
    }

    public createZone(correlationId: string, zone: ZoneV1,
        callback: (err: any, zone: ZoneV1) => void): void {
        this.callCommand(
            'create_zone',
            correlationId,
            {
                zone: zone
            }, 
            callback
        );
    }

    public updateZone(correlationId: string, zone: ZoneV1,
        callback: (err: any, zone: ZoneV1) => void): void {
        this.callCommand(
            'update_zone', 
            correlationId,
            {
                zone: zone
            }, 
            callback
        );
    }

    public deleteZoneById(correlationId: string, zoneId: string,
        callback: (err: any, zone: ZoneV1) => void): void {
        this.callCommand(
            'delete_zone_by_id', 
            correlationId,
            {
                zone_id: zoneId
            }, 
            callback
        );
    }

    public unsetObject(correlationId: string, orgId: string, objectId: string,
        callback: (err: any) => void): void {
        this.callCommand(
            'unset_object', 
            correlationId,
            {
                org_id: orgId,
                object_id: objectId
            }, 
            callback
        );
    }

    public unsetGroup(correlationId: string, orgId: string, groupId: string,
        callback: (err: any) => void): void {
        this.callCommand(
            'unset_group', 
            correlationId,
            {
                org_id: orgId,
                group_id: groupId
            }, 
            callback
        );
    }
    
}
