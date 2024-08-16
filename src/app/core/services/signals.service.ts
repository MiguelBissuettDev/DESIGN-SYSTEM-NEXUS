import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {

  public openConfigSideState = signal<boolean>(true);

  public setOpenConfigSideState = (state: boolean) => {
    this.openConfigSideState.set(state)
  }
}
