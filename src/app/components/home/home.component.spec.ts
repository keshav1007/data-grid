import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DatagridService } from '../../services/datagrid.service';
import { DatagridComponent } from '../datagrid/datagrid.component';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterModule
      ],
      declarations: [
        HomeComponent,
        DatagridComponent
      ],
      providers: [
        DatagridService
      ]
    }).compileComponents();
  });

  it('should create the Home Component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have 5 datagrid row data', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.datagridData.length).toEqual(5);
  });
});
