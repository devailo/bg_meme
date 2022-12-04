import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  @ViewChild('files', { static: true }) files!: ElementRef<HTMLInputElement>;

  constructor() { }

  newPostHandler(form: NgForm): void {
    if (form.invalid) { return; }
    console.log(form.value);
    console.log(this.files.nativeElement.files);

  }
}
