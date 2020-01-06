let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ZonesMemoryPersistence } from 'iqs-services-zones-node';
import { ZonesController } from 'iqs-services-zones-node';
import { ZonesHttpServiceV1 } from 'iqs-services-zones-node';
import { IZonesClientV1 } from '../../src/version1/IZonesClientV1';
import { ZonesHttpClientV1 } from '../../src/version1/ZonesHttpClientV1';
import { ZonesClientFixtureV1 } from './ZonesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ZonesHttpClientV1', ()=> {
    let service: ZonesHttpServiceV1;
    let client: ZonesHttpClientV1;
    let fixture: ZonesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ZonesMemoryPersistence();
        let controller = new ZonesController();

        service = new ZonesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-zones', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-zones', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-zones', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new ZonesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ZonesClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

    test('Unset References', (done) => {
        fixture.testUnsetReferences(done);
    });

});
