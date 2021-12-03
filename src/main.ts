import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const data = {
  nit: '800220154'
}

fetch('https://4rcti6yv14.execute-api.us-east-2.amazonaws.com/test/?', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json'
  }
}).then(response => response.json())
  .then(json => {
    console.log(json)
  })
