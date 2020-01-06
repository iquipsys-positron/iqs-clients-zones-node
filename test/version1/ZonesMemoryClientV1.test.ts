let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { IZonesClientV1 } from '../../src/version1/IZonesClientV1';
import { ZonesMemoryClientV1 } from '../../src/version1/ZonesMemoryClientV1';
import { ZonesClientFixtureV1 } from './ZonesClientFixtureV1';

suite('ZonesMemoryClientV1', ()=> {
    let client: ZonesMemoryClientV1;
    let fixture: ZonesClientFixtureV1;

    setup(() => {
        let logger = new ConsoleLogger();

        client = new ZonesMemoryClientV1();
        fixture = new ZonesClientFixtureV1(client);
    });
    
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

    test('Unset References', (done) => {
        fixture.testUnsetReferences(done);
    });

});
