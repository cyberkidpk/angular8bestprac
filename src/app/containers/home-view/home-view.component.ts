import { Component, OnInit, AfterViewChecked, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { HomeComponent } from '../../components/home/home.component';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit, AfterViewChecked {
  @ViewChild('homeViewContainer', { read: ViewContainerRef, static: true })
  homeView: ViewContainerRef;
  constructor(private cFactResolve: ComponentFactoryResolver) {
  }

  ngOnInit() {

    const componentFactory = this.cFactResolve.resolveComponentFactory(HomeComponent);
    const viewContainerRef = this.homeView;
    setTimeout(() => {
      const componentFactoryOne = this.cFactResolve.resolveComponentFactory(AppComponent);
      viewContainerRef.createComponent(componentFactoryOne);
    }, 3000);

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    console.log(componentRef);

  }
  ngAfterViewChecked() {
    console.log(this.homeView);


  }

}
