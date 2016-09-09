import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule} from '@angular/forms';

import { MdButtonModule} from '@angular2-material/button';
import { MdCardModule} from '@angular2-material/card';
import { MdCheckboxModule} from '@angular2-material/checkbox';
import { MdIconModule } from '@angular2-material/icon';
import { MdToolbarModule} from '@angular2-material/toolbar';
import { MdListModule} from '@angular2-material/list';
import { MdInputModule} from '@angular2-material/input';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { LandingComponent }   from './landing.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { EventListComponent } from '../../components/event/event-list.component';
import { EventCreateComponent } from '../../components/event/event-create.component';

import { EventService } from '../../components/event/event.service';

import { landingRouting } from './landing.routing';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdButtonModule,
        MdCardModule,
        MdCheckboxModule,
        MdIconModule,
        MdToolbarModule,
        MdListModule,
        MdInputModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBpgAKFAdX_Lwpshvg_KhbIDNVJb1xivHo'
        }),
        landingRouting
    ],
    exports: [],
    declarations: [
        LandingComponent,
        WelcomeComponent,
        EventListComponent,
        EventCreateComponent
    ],
    providers: [
        EventService
    ],
})
export class LandingModule { }
