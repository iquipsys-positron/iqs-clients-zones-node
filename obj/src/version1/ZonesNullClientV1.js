"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class ZonesNullClientV1 {
    getZones(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getZoneById(correlationId, zoneId, callback) {
        callback(null, null);
    }
    createZone(correlationId, zone, callback) {
        callback(null, zone);
    }
    updateZone(correlationId, zone, callback) {
        callback(null, zone);
    }
    deleteZoneById(correlationId, zoneId, callback) {
        if (callback)
            callback(null, null);
    }
    unsetObject(correlationId, orgId, objectId, callback) {
        if (callback)
            callback(null);
    }
    unsetGroup(correlationId, orgId, groupId, callback) {
        if (callback)
            callback(null);
    }
}
exports.ZonesNullClientV1 = ZonesNullClientV1;
//# sourceMappingURL=ZonesNullClientV1.js.map