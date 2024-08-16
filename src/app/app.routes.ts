import { Routes } from '@angular/router';
import { MaterialUiComponent } from './material-ui/material-ui.component';

export const routes: Routes = [
    { path: '', redirectTo: 'design-ui', pathMatch: 'full'},
    { path: 'design-ui', component: MaterialUiComponent }
];
