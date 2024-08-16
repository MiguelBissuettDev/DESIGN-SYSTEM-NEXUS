import { Component, inject, OnInit } from '@angular/core';

import * as CODE_SERVICE from '../../../core/services'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  private signalsService = inject(CODE_SERVICE.SignalsService)

  public openConfigSide = () => {
    this.signalsService.setOpenConfigSideState(!this.signalsService.openConfigSideState())
    console.log(this.signalsService.openConfigSideState());
  }

  ngOnInit(): void {}

}
