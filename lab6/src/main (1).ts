import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient(), provideForms()] // <-- Добавь provideForms()
}).catch(err => console.error(err));




bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()]
}).catch(err => console.error(err));
