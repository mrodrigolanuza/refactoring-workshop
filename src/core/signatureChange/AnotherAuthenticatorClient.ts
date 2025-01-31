import {AuthenticationService, Id} from './AuthenticationService';

export class AnotherAuthenticatorClient {
	unusedClientCode() {
		try {
			(new AuthenticationService().isAuthenticatedNew(Id.create(3545)));
		}
		catch (e /*:Exception*/) {
			//  ignored
		}
	}
}