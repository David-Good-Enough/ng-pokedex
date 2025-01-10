import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import localFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localFR);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
