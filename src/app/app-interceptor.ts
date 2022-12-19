import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http"
import { Inject, Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { API_ERROR } from "./shared/constants";

const apiURL = environment.apiURL;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor(@Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.startsWith('/api')) {
            req = req.clone({ url: req.url.replace('/api', apiURL), withCredentials: true })
        }
        return next.handle(req)
            ;
    }
}

export const AppInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};