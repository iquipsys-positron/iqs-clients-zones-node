"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class ZonesHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/zones');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getZones(correlationId, filter, paging, callback) {
        this.callCommand('get_zones', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getZoneById(correlationId, zoneId, callback) {
        this.callCommand('get_zone_by_id', correlationId, {
            zone_id: zoneId
        }, callback);
    }
    createZone(correlationId, zone, callback) {
        this.callCommand('create_zone', correlationId, {
            zone: zone
        }, callback);
    }
    updateZone(correlationId, zone, callback) {
        this.callCommand('update_zone', correlationId, {
            zone: zone
        }, callback);
    }
    deleteZoneById(correlationId, zoneId, callback) {
        this.callCommand('delete_zone_by_id', correlationId, {
            zone_id: zoneId
        }, callback);
    }
    unsetObject(correlationId, orgId, objectId, callback) {
        this.callCommand('unset_object', correlationId, {
            org_id: orgId,
            object_id: objectId
        }, callback);
    }
    unsetGroup(correlationId, orgId, groupId, callback) {
        this.callCommand('unset_group', correlationId, {
            org_id: orgId,
            group_id: groupId
        }, callback);
    }
}
exports.ZonesHttpClientV1 = ZonesHttpClientV1;
//# sourceMappingURL=ZonesHttpClientV1.js.map