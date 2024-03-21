import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { DatagridService } from '../../services/datagrid.service';
import { DatagridComponent } from '../datagrid/datagrid.component';
import { FormsModule } from '@angular/forms';
import { DATAGRID_DATA } from '../../mocks/mock-datagrid.data';
import { MESSAGES_EN } from '../../messages/en';

describe('DatagridComponent', () => {
const messages_en = MESSAGES_EN;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterModule
      ],
      declarations: [
        DatagridComponent
      ],
      providers: [
        DatagridService
      ]
    }).compileComponents();
  });

  it('should create the Datagrid Component', () => {
    const fixture = TestBed.createComponent(DatagridComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have 5 datagrid rows', () => {
    const fixture = TestBed.createComponent(DatagridComponent);
    const component = fixture.componentInstance;
    component.datagridData = DATAGRID_DATA; //provide input
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('.table-row');
    expect(rows.length).toBe(5);
  });

  it('Check Download Selected button', () => {
    spyOn(window,'alert');
    const fixture = TestBed.createComponent(DatagridComponent);
    const component = fixture.componentInstance;
    component.datagridData = DATAGRID_DATA; //provide input
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const downloadBtn = compiled.querySelector('.download-button') as HTMLButtonElement;
    expect(downloadBtn.disabled).toBeTruthy(); //button should be disabled initially
    const checkboxes = compiled.querySelectorAll('.checkbox');
    (checkboxes[2] as HTMLInputElement).click(); //click the available status row
    fixture.detectChanges();
    expect(downloadBtn.disabled).toBeFalsy(); //button should be enabled
    downloadBtn.click();
    fixture.detectChanges();
    expect(window.alert).toHaveBeenCalled(); //check whether alert is called
  });

  it('Check No data scenario', () => {
    const fixture = TestBed.createComponent(DatagridComponent);
    const component = fixture.componentInstance;
    component.datagridData = []; //provide empty input
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.no-data-div')?.textContent).toContain(messages_en['app.datagrid.no-data'])
  });

});
