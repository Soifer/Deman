import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { CollapseModule, Ng2BootstrapModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { SideNavComponent } from './SideNav/sideNav.component';
import { MenuBarComponent } from './MenuBar/menuBar.component';
import { GridComponent } from './Center/Grid/grid.component';
import { GridItemComponent } from './Center/GridItem/gridItem.component';
import { ExpandedCardComponent } from './ExpandedItem/expandedItem.component';
import { GenreService } from './Vod/Services/genre.service';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';
import { MdModule } from './md.module';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState } from './app.service';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';

// Import diretives
import { XLarge } from './home/x-large';
import { MdIconRegistry } from '@angular2-material/icon';
// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
    About,
    Home,
    NoContent,
    XLarge, SideNavComponent, MenuBarComponent, GridComponent, GridItemComponent, ExpandedCardComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: false }),
    MdModule.forRoot(), CollapseModule, ModalModule, Ng2BootstrapModule, FormsModule, InfiniteScrollModule, DragulaModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS, MdIconRegistry, GenreService
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) { }
  hmrOnInit(store) {
    if (!store || !store.state) return;
    console.log('HMR store', store);
    this.appState._state = store.state;
    this.appRef.tick();
    delete store.state;
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    let state = this.appState._state;
    store.state = state;
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
