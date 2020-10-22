// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  isDebugEnable: false,
  endPointReturnPath: '../../',
  endpointRedirectS3: 'http://localhost:9010/amigos-pichincha/',
  endpointAddPerson: 'http://localhost:9010/amigos-pichincha/add/person/',
  endPointAddReferCdt: 'http://localhost:9010/amigos-pichincha/refer/cdt/',
  endPointAddReferTdc: 'http://localhost:9010/amigos-pichincha/refer/tcd/',
  endPointReferAccept: 'http://localhost:9010/amigos-pichincha/refer/accept/cdt/',
  endPointReferTdc: 'http://localhost:9010/amigos-pichincha/refer/accept/tcd/',
  endPointValidateTokenForm: 'http://localhost:9010/amigos-pichincha/validate/link/',
  endpointSendConfirmation: 'http://localhost:9010/amigos-pichincha/confirmacion/',
  endPointForwardEmail: 'http://localhost:9010/amigos-pichincha/refer/forward/mail/',
  endpointConfirmationToken: 'http://localhost:9010/amigos-pichincha/activacion/',
  endpointLogin: 'http://localhost:9010/amigos-pichincha/login/',
  endPointForwardToken: 'http://localhost:9010/amigos-pichincha/forward/confirmation/',
  endPointSendEmailPassword: 'http://localhost:9010/amigos-pichincha/recover/account/',
  endPointResetPassword: 'http://localhost:9010/amigos-pichincha/reset/password/now/',
  endPointGraphicalData: 'http://localhost:9010/amigos-pichincha/get/graphical/data/',
  endPointGetReferrals: 'http://localhost:9010/amigos-pichincha/get/referrals/',
  endPointHome: 'http://localhost:9010/amigos-pichincha/',
  endPointRedirectForm: 'http://localhost:9010/amigos-pichincha/vincular',
  endPointRedirectFormTdc: 'http://localhost:9010/amigos-pichincha/vincular-tcd',
  endPointRedirectTcd: 'https://digital.bancopichincha.com.co/tarjeta-de-credito',
  endpointHealth: 'http://localhost:9010/amigos-pichincha/health',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
