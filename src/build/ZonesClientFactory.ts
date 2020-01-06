import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { ZonesNullClientV1 } from '../version1/ZonesNullClientV1';
import { ZonesMemoryClientV1 } from '../version1/ZonesMemoryClientV1';
import { ZonesDirectClientV1 } from '../version1/ZonesDirectClientV1';
import { ZonesHttpClientV1 } from '../version1/ZonesHttpClientV1';
import { ZonesLambdaClientV1 } from '../version1/ZonesLambdaClientV1';

export class ZonesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-zones', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-zones', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('iqs-services-zones', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-zones', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-zones', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-zones', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(ZonesClientFactory.NullClientV1Descriptor, ZonesNullClientV1);
		this.registerAsType(ZonesClientFactory.MemoryClientV1Descriptor, ZonesMemoryClientV1);
		this.registerAsType(ZonesClientFactory.DirectClientV1Descriptor, ZonesDirectClientV1);
		this.registerAsType(ZonesClientFactory.HttpClientV1Descriptor, ZonesHttpClientV1);
		this.registerAsType(ZonesClientFactory.LambdaClientV1Descriptor, ZonesLambdaClientV1);
	}
	
}
