"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class ZonesDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-zones", "controller", "*", "*", "*"));
    }
    getZones(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'zones.get_zones');
        this._controller.getZones(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getZoneById(correlationId, zoneId, callback) {
        let timing = this.instrument(correlationId, 'zones.get_zone_by_id');
        this._controller.getZoneById(correlationId, zoneId, (err, zone) => {
            timing.endTiming();
            callback(err, zone);
        });
    }
    createZone(correlationId, zone, callback) {
        let timing = this.instrument(correlationId, 'zones.create_zone');
        this._controller.createZone(correlationId, zone, (err, zone) => {
            timing.endTiming();
            callback(err, zone);
        });
    }
    updateZone(correlationId, zone, callback) {
        let timing = this.instrument(correlationId, 'zones.update_zone');
        this._controller.updateZone(correlationId, zone, (err, zone) => {
            timing.endTiming();
            callback(err, zone);
        });
    }
    deleteZoneById(correlationId, zoneId, callback) {
        let timing = this.instrument(correlationId, 'zones.delete_zone_by_id');
        this._controller.deleteZoneById(correlationId, zoneId, (err, zone) => {
            timing.endTiming();
            callback(err, zone);
        });
    }
    unsetObject(correlationId, orgId, objectId, callback) {
        let timing = this.instrument(correlationId, 'zones.unset_object');
        this._controller.unsetObject(correlationId, orgId, objectId, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
    unsetGroup(correlationId, orgId, groupId, callback) {
        let timing = this.instrument(correlationId, 'zones.unset_group');
        this._controller.unsetGroup(correlationId, orgId, groupId, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
}
exports.ZonesDirectClientV1 = ZonesDirectClientV1;
//# sourceMappingURL=ZonesDirectClientV1.js.map