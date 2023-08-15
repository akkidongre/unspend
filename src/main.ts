import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { AppRoutingModule } from "./app/app-routing.module";
import { provideStore } from '@ngrx/store';
import { navigationReducer } from "./app/common-components/sidebar/state/navigation.reducer";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule), 
    provideStore({navigation: navigationReducer})
  ]
})
