import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MembersComponent } from './pages/members/members.component';
import { TuningGuideComponent } from './pages/tuning-guide/tuning-guide.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'members', component: MembersComponent },
  { path: 'tuning-guide', component: TuningGuideComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'contact', component: ContactComponent },
];
