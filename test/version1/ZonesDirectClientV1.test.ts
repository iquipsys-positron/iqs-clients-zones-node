let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ZonesMemoryPersistence } from 'iqs-services-zones-node';
import { ZonesController } from 'iqs-services-zones-node';
import { IZonesClientV1 } from '../../src/version1/IZonesClientV1';
import { ZonesDirectClientV1 } from '../../src/version1/ZonesDirectClientV1';
import { ZonesClientFixtureV1 } from './ZonesClientFixtureV1';

suite('ZonesDirectClientV1', ()=> {
    let client: ZonesDirectClientV1;
    let fixture: ZonesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ZonesMemoryPersistence();
        let controller = new ZonesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-zones', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-zones', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new ZonesDirectClientV1();
        client.setReferences(references);

        fixture = new ZonesClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

    test('Unset References', (done) => {
        fixture.testUnsetReferences(done);
    });

});
