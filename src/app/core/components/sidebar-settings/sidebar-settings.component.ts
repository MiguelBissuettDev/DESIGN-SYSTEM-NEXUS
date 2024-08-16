import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import * as CORE_SERVICE from '../../../core/services'

@Component({
  selector: 'app-sidebar-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-settings.component.html',
  styleUrl: './sidebar-settings.component.scss'
})
export class SidebarSettingsComponent {

  public signalsService = inject(CORE_SERVICE.SignalsService);
  public stateOpenSideSettings;

  constructor() {
    this.stateOpenSideSettings = this.signalsService.openConfigSideState();
  }
}
