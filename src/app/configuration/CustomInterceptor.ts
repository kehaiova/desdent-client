import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {SnackbarService} from "../services/snackbar.service";
@Injectable()
export class CustomInterceptor implements HttpInterceptor{

  constructor(private snackbarService: SnackbarService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      withCredentials: true
    });
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error)
          this.snackbarService.openSnackbar(
            error.error.message,
            'error'
          );
          return throwError(error.message);
        })
      );
  }
}
