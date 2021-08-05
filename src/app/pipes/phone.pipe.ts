import { Injectable, Pipe } from "@angular/core";

@Pipe({
  name: "phone",
})
export class PhonePipe {
  transform(tel: number) {
    let value = tel.toString().trim().replace(/[^0-9]/, "");

    if (value.match(/[^0-9]/) || value.length < 10) {
      return tel;
    }

    return '+91-' + value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }
}