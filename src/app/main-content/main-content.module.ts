import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content.component';
import { ThumbnailListComponent } from './thumbnail-list/thumbnail-list.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule
    ],
    declarations: [
        MainContentComponent,
        ThumbnailListComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: []
})
export class MainContentModule { }
