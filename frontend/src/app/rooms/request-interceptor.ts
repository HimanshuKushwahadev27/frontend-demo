import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const newRequest = req.clone({headers : new HttpHeaders({'token': '1u310941041-49-12'})})
  return next(newRequest);
};
