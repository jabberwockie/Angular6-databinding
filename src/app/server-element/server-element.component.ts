import {
  Component,
  OnInit,
  Input,
  SimpleChange,
  DoCheck,
  AfterContentInit,
  OnChanges,
  OnDestroy,
  ViewChild,
  ElementRef, ContentChild
} from '@angular/core';
import {SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  DoCheck,
  AfterContentInit,
  OnChanges,
  OnDestroy{
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ContentChild('contentParagraph') paragraph: ElementRef; /* get access to a content that is stored in another component and then passed on via ngContent*/

  constructor() {
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
    console.log('Paragraph Content: ' + this.paragraph.nativeElement.textContent);
  }


  ngOnDestroy() {
    console.log('OnDestroy called!');
  }

}
