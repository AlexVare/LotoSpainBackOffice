import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/auth/login.service';
import { ProductosComponent } from './home/productos/productos.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PrincIpalPageComponent } from './princ-ipal-page/princ-ipal-page.component';
import { PostComponent } from './post/post.component';
import { AutoresComponent } from './autores/autores.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './home/productos/dialog-component/dialog.component';
import { EditDialogComponent } from './home/productos/edit-dialog/edit-dialog.component';
import { NboletoComponent } from './home/productos/nboleto/nboleto.component';
import { DialogAutoresComponent } from './autores/dialog-autores/dialog-autores.component';
import { DialogpostComponent } from './post/dialogpost/dialogpost.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MostrardialogComponent } from './post/mostrardialog/mostrardialog.component';
import { EditardialogComponent } from './post/editardialog/editardialog.component';
import { EditDialogAutoresComponent } from './autores/edit-dialog.autores/edit-dialog.autores.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { AuthClassGuard } from './services/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { EuroPipe } from './euro.pipe';
import { DBonolotoComponent } from './resultados/d-bonoloto/d-bonoloto.component';
import { MatSelectModule } from '@angular/material/select';
import { DPrimitivaComponent } from './resultados/d-primitiva/d-primitiva.component';
import { DEuromillonesComponent } from './resultados/d-euromillones/d-euromillones.component';
import { DLototurfComponent } from './resultados/d-lototurf/d-lototurf.component';
import { DGordoComponent } from './resultados/d-gordo/d-gordo.component';
import { DEurodreamsComponent } from './resultados/d-eurodreams/d-eurodreams.component';
import { DNacionalComponent } from './resultados/d-nacional/d-nacional.component';
import { DQuinielaComponent } from './resultados/d-quiniela/d-quiniela.component';

const appRoutes: Routes = [
  { path: 'i/home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PostComponent,
    LoginComponent,
    ProductosComponent,
    DialogComponent,
    PrincIpalPageComponent,
    DialogpostComponent,
    MostrardialogComponent,
    AutoresComponent,
    EditDialogComponent,
    NboletoComponent,
    DialogAutoresComponent,
    EditardialogComponent,
    EditDialogAutoresComponent,
    EuroPipe,
    DBonolotoComponent,
    DPrimitivaComponent,
    DEuromillonesComponent,
    DLototurfComponent,
    DGordoComponent,
    DEurodreamsComponent,
    DNacionalComponent,
    DQuinielaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatSortModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatExpansionModule,
    NgxPaginationModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,

    SweetAlert2Module.forRoot(),
  ],
  providers: [LoginService,CookieService,AuthClassGuard,AuthService],

  bootstrap: [AppComponent],
})
export class AppModule {}
