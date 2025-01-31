import {AuthenticationService, Id} from '../../core/signatureChange/AuthenticationService';

describe('The authentication service', ()=>{
	it('distinguishes the administrator role',()=>{
		const service = new AuthenticationService()
		const adminId = 12345;
		expect(service.isAuthenticatedNew(Id.create(adminId))).toBeTruthy();
	})
	it('distinguishes the non-administrator role',()=>{
		const service = new AuthenticationService()
		const normalUserId = 11111;
		expect(service.isAuthenticatedNew(Id.create(normalUserId))).toBeFalsy();
	})
})
