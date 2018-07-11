import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

    private token: string;

    constructor(private router: Router) {
        this.getToken();
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.token) {
            req = req.clone({ setHeaders: { 'Authorization': 'Bearer ' + this.token } });
        }
        console.log(req);
        return next.handle(req)
            .map(resp => {
                if (resp instanceof HttpResponse) {
                    return resp;
                }
            })
            .catch(err => {
                console.log(err);
                if (err instanceof HttpErrorResponse) {
                    console.log(err.status);
                    console.log(err.statusText);
                    if (err.status === 401) {
                        this.router.navigate(['/login']);
                    }
                }
                return Observable.of(err);
            });
    }

    private getToken() {
        if (localStorage.getItem("data")) {
            this.token = JSON.parse(localStorage.getItem("data")).token;
        }
    }
}
