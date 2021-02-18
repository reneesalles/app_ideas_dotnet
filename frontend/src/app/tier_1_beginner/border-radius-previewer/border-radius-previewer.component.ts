import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-border-radius-previewer',
  templateUrl: './border-radius-previewer.component.html',
  styleUrls: ['./border-radius-previewer.component.scss']
})
export class BorderRadiusPreviewerComponent implements OnInit {

  mode: string = "B";

  w: string = "100px";
  h: string = "100px";

  border_style: string = "0";

  ctrl_tlh: number = 0;
  ctrl_tlv: number = 0;
  ctrl_trh: number = 0;
  ctrl_trv: number = 0;
  ctrl_brh: number = 0;
  ctrl_brv: number = 0;
  ctrl_blh: number = 0;
  ctrl_blv: number = 0;

  ctrl_blob_t: number = 50;
  ctrl_blob_r: number = 50;
  ctrl_blob_b: number = 50;
  ctrl_blob_l: number = 50;

  constructor() { }

  ngOnInit(): void {
    this.updateSize();
    this.resetRanges();
  }


  public get get_border_style() : string {
    return `#bordered_box {\n\tborder-radius: ${this.border_style};\n}`;
  }

  updateSize() {
    let root = document.documentElement;

    root.style.setProperty("--width", this.w);
    root.style.setProperty("--height", this.h);
  }

  resetRanges() {
    switch (this.mode) {
      case "B":
        this.ctrl_blob_t = 0;
        this.ctrl_blob_r = 0;
        this.ctrl_blob_b = 0;
        this.ctrl_blob_l = 0;
        break;
      default:
        this.ctrl_tlh = 0;
        this.ctrl_tlv = 0;
        this.ctrl_trh = 0;
        this.ctrl_trv = 0;
        this.ctrl_brh = 0;
        this.ctrl_brv = 0;
        this.ctrl_blh = 0;
        this.ctrl_blv = 0;
        break;
    }
  }

  randomRanges() {
    switch (this.mode) {
      case "B":
        this.ctrl_blob_t = Math.min(80, Math.max(20, Math.floor(Math.random() * 100)));
        this.ctrl_blob_r = Math.min(80, Math.max(20, Math.floor(Math.random() * 100)));
        this.ctrl_blob_b = Math.min(80, Math.max(20, Math.floor(Math.random() * 100)));
        this.ctrl_blob_l = Math.min(80, Math.max(20, Math.floor(Math.random() * 100)));

        this.updateRangesElement(document.querySelector(".handler.blob-t input") as HTMLInputElement, this.ctrl_blob_t);
        this.updateRangesElement(document.querySelector(".handler.blob-r input") as HTMLInputElement, this.ctrl_blob_r);
        this.updateRangesElement(document.querySelector(".handler.blob-b input") as HTMLInputElement, this.ctrl_blob_b);
        this.updateRangesElement(document.querySelector(".handler.blob-l input") as HTMLInputElement, this.ctrl_blob_l);

        break;
      case "A":
        this.ctrl_tlh = Math.min(40, Math.max(10, Math.floor(Math.random() * 50)));
        this.updateRangesElement(document.querySelector(".handler.h-tlh input") as HTMLInputElement, this.ctrl_tlh);

        break;
      default:
        this.ctrl_tlh = Math.min(40, Math.max(10, Math.floor(Math.random() * 50)));
        this.ctrl_tlv = Math.min(40, Math.max(10, Math.floor(Math.random() * 50)));
        this.ctrl_trh = Math.min(40, Math.max(10, Math.floor(Math.random() * 50)));
        this.ctrl_trv = Math.min(40, Math.max(10, Math.floor(Math.random() * 50)));
        this.ctrl_blh = Math.min(40, Math.max(10, Math.floor(Math.random() * 50)));
        this.ctrl_blv = Math.min(40, Math.max(10, Math.floor(Math.random() * 50)));
        this.ctrl_brh = Math.min(40, Math.max(10, Math.floor(Math.random() * 50)));
        this.ctrl_brv = Math.min(40, Math.max(10, Math.floor(Math.random() * 50)));

        this.updateRangesElement(document.querySelector(".handler.h-tlh input") as HTMLInputElement, this.ctrl_tlh);
        this.updateRangesElement(document.querySelector(".handler.h-tlv input") as HTMLInputElement, this.ctrl_tlv);
        this.updateRangesElement(document.querySelector(".handler.h-trh input") as HTMLInputElement, this.ctrl_trh);
        this.updateRangesElement(document.querySelector(".handler.h-trv input") as HTMLInputElement, this.ctrl_trv);
        this.updateRangesElement(document.querySelector(".handler.h-blh input") as HTMLInputElement, this.ctrl_blh);
        this.updateRangesElement(document.querySelector(".handler.h-blv input") as HTMLInputElement, this.ctrl_blv);
        this.updateRangesElement(document.querySelector(".handler.h-brh input") as HTMLInputElement, this.ctrl_brh);
        this.updateRangesElement(document.querySelector(".handler.h-brv input") as HTMLInputElement, this.ctrl_brv);

        break;
    }
  }

  updateRanges(e: Event) {
    let sender = e.target as HTMLInputElement;
    this.updateRangesElement(sender, Number(sender.value));
  }

  updateRangesElement(sender: HTMLInputElement, val: number) {
    try {
      let root = document.documentElement;
      let parent = sender ? sender.parentElement : null;
      this.border_style = "";

      switch (this.mode) {
        case "A":
          let c = Number(val);
          this.ctrl_tlh = c;
          this.ctrl_tlv = c;
          this.ctrl_trh = c;
          this.ctrl_trv = c;
          this.ctrl_blh = c;
          this.ctrl_blv = c;
          this.ctrl_brh = c;
          this.ctrl_brv = c;

          this.border_style = `${c}%`;
          break;
        case "C":
          let tl = this.ctrl_tlh,
            tr = this.ctrl_trh,
            br = this.ctrl_brh,
            bl = this.ctrl_blh;

          if ((parent?.className ?? "").indexOf("h-tl") >= 0) {
            tl = Number(val);
            this.ctrl_tlh = tl;
            this.ctrl_tlv = tl;
          }
          else if ((parent?.className ?? "").indexOf("h-tr") >= 0) {
            tr = Number(val);
            this.ctrl_trh = tr;
            this.ctrl_trv = tr;
          }
          else if ((parent?.className ?? "").indexOf("h-br") >= 0) {
            br = Number(val);
            this.ctrl_brh = br;
            this.ctrl_brv = br;
          }
          else if ((parent?.className ?? "").indexOf("h-bl") >= 0) {
            bl = Number(val);
            this.ctrl_blh = bl;
            this.ctrl_blv = bl;
          }

          this.border_style = `${tl}% ${tr}% ${br}% ${bl}%`;
          break;
        case "B":
          this.border_style = `${this.ctrl_blob_t}% ${100 - this.ctrl_blob_t}% ${this.ctrl_blob_b}% ${100 - this.ctrl_blob_b}% / ${100 - this.ctrl_blob_l}% ${this.ctrl_blob_r}% ${100 - this.ctrl_blob_r}% ${this.ctrl_blob_l}%`;
          break;
        case "F":
          this.border_style = `${this.ctrl_tlh}% ${this.ctrl_trh}% ${this.ctrl_brh}% ${this.ctrl_blh}% / ${this.ctrl_tlv}% ${this.ctrl_trv}% ${this.ctrl_brv}% ${this.ctrl_blv}%`;
          break;
      }

      root.style.setProperty("--border-radius", this.border_style);
    }
    catch (error) {
      console.error(error);
    }
  }
}
