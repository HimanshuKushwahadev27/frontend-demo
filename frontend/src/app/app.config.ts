import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { requestInterceptor } from './rooms/request-interceptor';
import { InitService } from './init';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideAppInitializer(() => {
    //   const initService = inject(InitService);
    //   return initService.init();
    // }),
    
    provideHttpClient(withInterceptors([requestInterceptor])),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};
