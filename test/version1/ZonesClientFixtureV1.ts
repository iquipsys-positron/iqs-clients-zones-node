let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { ZoneV1 } from '../../src/version1/ZoneV1';
import { ZoneTypeV1 } from '../../src/version1/ZoneTypeV1';
import { IZonesClientV1 } from '../../src/version1/IZonesClientV1';

let ZONE1: ZoneV1 = {
    id: '1',
    org_id: '1',
    type: 'line',
    name: 'Test zone 1',
    geometry: { type: 'LineString', coordinates: [[0, 0], [1, 1]] },
};
let ZONE2: ZoneV1 = {
    id: '2',
    org_id: '1',
    type: 'circle',
    name: 'Test zone 2',
    center: { type: 'Point', coordinates: [1, 1] },
};

export class ZonesClientFixtureV1 {
    private _client: IZonesClientV1;
    
    constructor(client: IZonesClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let zone1, zone2;

        async.series([
        // Create one zone
            (callback) => {
                this._client.createZone(
                    null,
                    ZONE1,
                    (err, zone) => {
                        assert.isNull(err);

                        assert.isObject(zone);
                        assert.equal(zone.org_id, ZONE1.org_id);
                        assert.equal(zone.type, ZONE1.type);
                        assert.equal(zone.name, ZONE1.name);

                        zone1 = zone;

                        callback();
                    }
                );
            },
        // Create another zone
            (callback) => {
                this._client.createZone(
                    null,
                    ZONE2,
                    (err, zone) => {
                        assert.isNull(err);

                        assert.isObject(zone);
                        assert.equal(zone.org_id, ZONE2.org_id);
                        assert.equal(zone.type, ZONE2.type);
                        assert.equal(zone.name, ZONE2.name);

                        zone2 = zone;

                        callback();
                    }
                );
            },
        // Get all zones
            (callback) => {
                this._client.getZones(
                    null,
                    null,
                    new PagingParams(0,5,false),
                    (err, zones) => {
                        assert.isNull(err);

                        assert.isObject(zones);
                        assert.isTrue(zones.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the zone
            (callback) => {
                zone1.name = 'Updated zone 1';

                this._client.updateZone(
                    null,
                    zone1,
                    (err, zone) => {
                        assert.isNull(err);

                        assert.isObject(zone);
                        assert.equal(zone.name, 'Updated zone 1');
                        assert.equal(zone.id, ZONE1.id);

                        zone1 = zone;

                        callback();
                    }
                );
            },
        // Delete zone
            (callback) => {
                this._client.deleteZoneById(
                    null,
                    zone1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete zone
            (callback) => {
                this._client.getZoneById(
                    null,
                    zone1.id,
                    (err, zone) => {
                        assert.isNull(err);
                        
                        assert.isNull(zone || null);

                        callback();
                    }
                );
            }
        ], done);
    }

    public testUnsetReferences(done) {
        async.series([
        // Create zone
            (callback) => {
                this._client.createZone(
                    null,
                    {
                        id: '5',
                        org_id: '1',
                        type: 'line',
                        name: 'Test zone 1',
                        geometry: { type: 'LineString', coordinates: [[0, 0], [1, 1]] },
                        include_object_ids: ['1', '2'],
                        exclude_object_ids: ['1', '2'],
                        include_group_ids: ['1', '2'],
                        exclude_group_ids: ['1', '2']
                    },
                    (err, zone) => {
                        assert.isNull(err);

                        assert.isObject(zone);
                        assert.equal(zone.org_id, ZONE1.org_id);
                        assert.lengthOf(zone.include_object_ids, 2);
                        assert.lengthOf(zone.exclude_object_ids, 2);
                        assert.lengthOf(zone.include_group_ids, 2);
                        assert.lengthOf(zone.exclude_group_ids, 2);

                        callback();
                    }
                );
            },
        // Unset object
            (callback) => {
                this._client.unsetObject(
                    null, '1', '1',
                    (err) => {
                        assert.isNull(err);
                        callback();
                    }
                );
            },
        // Unset group
            (callback) => {
                this._client.unsetGroup(
                    null, '1', '1',
                    (err) => {
                        assert.isNull(err);
                        callback();
                    }
                );
            },
        // Get and check the zone
            (callback) => {
                this._client.getZoneById(
                    null,
                    '5',
                    (err, zone) => {
                        assert.isNull(err);

                        assert.isObject(zone);
                        assert.equal(zone.org_id, ZONE1.org_id);
                        assert.lengthOf(zone.include_object_ids, 1);
                        assert.lengthOf(zone.exclude_object_ids, 1);
                        assert.lengthOf(zone.include_group_ids, 1);
                        assert.lengthOf(zone.exclude_group_ids, 1);

                        callback();
                    }
                );
            }
        ], done);
    }

}
