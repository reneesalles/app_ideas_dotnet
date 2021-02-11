import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bin2dec',
  templateUrl: './bin2dec.component.html',
  styleUrls: ['./bin2dec.component.scss']
})
export class Bin2decComponent implements OnInit {

  bin_val: string = "";
  dec_val: string = "";

  constructor() { }

  ngOnInit(): void {
    this.updateOutput();
  }

  updateOutput() {
    if (this.bin_val.trim() == "") {
      this.dec_val = "";
      return;
    }

    let bin_rgx = new RegExp("^[0-1]+$", "g");
    if (!this.bin_val.match(bin_rgx)) {
      this.dec_val = "Binary Input Invalid";
      return;
    }

    // Converting from binary to decimal:
    // 1) initialize the decimalValue and step to zero
    // 2) reverse the binary digits
    // 3) run a loop over the binary digits
    // 3.1) sum to the decimalValue the result of (bin digit * 2^step)
    // 3.2) increment the step
    // 4) return the decimalValue
    let decimalValue = 0, step = 0;

    for (let i = this.bin_val.length - 1; i >= 0; i--) {
      decimalValue += Number.parseInt(this.bin_val[i]) * Math.pow(2, step);
      step++;
    }

    this.dec_val = decimalValue.toString();
  }

}
