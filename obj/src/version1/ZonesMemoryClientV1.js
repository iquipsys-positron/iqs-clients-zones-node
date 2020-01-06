"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
class ZonesMemoryClientV1 {
    constructor() {
        this._zones = [];
    }
    matchString(value, search) {
        if (value == null && search == null)
            return true;
        if (value == null || search == null)
            return false;
        return value.toLowerCase().indexOf(search) >= 0;
    }
    matchSearch(item, search) {
        search = search.toLowerCase();
        if (this.matchString(item.name, search))
            return true;
        return false;
    }
    composeFilter(filter) {
        filter = filter || new pip_services3_commons_node_1.FilterParams();
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
    getZones(correlationId, filter, paging, callback) {
        let zones = _.filter(this._zones, this.composeFilter(filter));
        callback(null, new pip_services3_commons_node_2.DataPage(zones, zones.length));
    }
    getZoneById(correlationId, zoneId, callback) {
        let zone = _.find(this._zones, z => z.id == zoneId);
        callback(null, zone);
    }
    createZone(correlationId, zone, callback) {
        zone.id = zone.id || pip_services3_commons_node_3.IdGenerator.nextLong();
        // Todo: Calculate parameters
        this._zones.push(zone);
        callback(null, zone);
    }
    updateZone(correlationId, zone, callback) {
        this._zones = _.filter(this._zones, z => z.id != zone.id);
        this._zones.push(zone);
        callback(null, zone);
    }
    deleteZoneById(correlationId, zoneId, callback) {
        let zone = _.find(this._zones, z => z.id == zoneId);
        this._zones = _.filter(this._zones, z => z.id != zoneId);
        callback(null, zone);
    }
    unsetObject(correlationId, orgId, objectId, callback) {
        _.each(this._zones, (z) => {
            z.include_object_ids = _.filter(z.include_group_ids, i => i != objectId);
            z.exclude_object_ids = _.filter(z.exclude_group_ids, i => i != objectId);
        });
        callback(null);
    }
    unsetGroup(correlationId, orgId, groupId, callback) {
        _.each(this._zones, (z) => {
            z.include_group_ids = _.filter(z.include_group_ids, i => i != groupId);
            z.exclude_group_ids = _.filter(z.exclude_group_ids, i => i != groupId);
        });
        callback(null);
    }
}
exports.ZonesMemoryClientV1 = ZonesMemoryClientV1;
//# sourceMappingURL=ZonesMemoryClientV1.js.map