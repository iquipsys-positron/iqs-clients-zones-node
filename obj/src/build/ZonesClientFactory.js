"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const ZonesNullClientV1_1 = require("../version1/ZonesNullClientV1");
const ZonesMemoryClientV1_1 = require("../version1/ZonesMemoryClientV1");
const ZonesDirectClientV1_1 = require("../version1/ZonesDirectClientV1");
const ZonesHttpClientV1_1 = require("../version1/ZonesHttpClientV1");
const ZonesLambdaClientV1_1 = require("../version1/ZonesLambdaClientV1");
class ZonesClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(ZonesClientFactory.NullClientV1Descriptor, ZonesNullClientV1_1.ZonesNullClientV1);
        this.registerAsType(ZonesClientFactory.MemoryClientV1Descriptor, ZonesMemoryClientV1_1.ZonesMemoryClientV1);
        this.registerAsType(ZonesClientFactory.DirectClientV1Descriptor, ZonesDirectClientV1_1.ZonesDirectClientV1);
        this.registerAsType(ZonesClientFactory.HttpClientV1Descriptor, ZonesHttpClientV1_1.ZonesHttpClientV1);
        this.registerAsType(ZonesClientFactory.LambdaClientV1Descriptor, ZonesLambdaClientV1_1.ZonesLambdaClientV1);
    }
}
exports.ZonesClientFactory = ZonesClientFactory;
ZonesClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-zones', 'factory', 'default', 'default', '1.0');
ZonesClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-zones', 'client', 'null', 'default', '1.0');
ZonesClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-zones', 'client', 'memory', 'default', '1.0');
ZonesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-zones', 'client', 'direct', 'default', '1.0');
ZonesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-zones', 'client', 'http', 'default', '1.0');
ZonesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-zones', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=ZonesClientFactory.js.map