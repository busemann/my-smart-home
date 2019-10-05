// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { UserFacade } from '../+states/user/user.facade';
// import { first, flatMap } from 'rxjs/operators';
// import { Config } from '../models/firebase/config.model';
//
// @Injectable()
// export class CustomHttpInterceptor implements HttpInterceptor {
//   constructor(private userFacade: UserFacade) {}
//
//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     return this.userFacade.config$.pipe(
//       first(),
//       flatMap((config: Config) => {
//         request = request.clone({
//           setHeaders: {
//             Authorization: `Bearer ${config.hassio.token}`,
//             'Content-Type': 'application/json'
//           }
//         });
//         return next.handle(request);
//       })
//     );
//   }
// }
