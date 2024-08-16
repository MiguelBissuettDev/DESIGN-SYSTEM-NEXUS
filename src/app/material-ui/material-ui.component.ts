import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../core/components/header/header.component';
import { SidebarSettingsComponent } from '../core/components/sidebar-settings/sidebar-settings.component';

@Component({
  selector: 'app-material-ui',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarSettingsComponent],
  templateUrl: './material-ui.component.html',
  styleUrl: './material-ui.component.scss'
})
export class MaterialUiComponent {

}
