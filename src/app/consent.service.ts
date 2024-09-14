import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsentService {
  private _consentGiven = false;

  constructor() { }

  get consentGiven(): boolean {
    return this._consentGiven;
  }

  set consentGiven(val: boolean) {
    this._consentGiven = val;
  }
}
