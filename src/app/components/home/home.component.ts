import { Component, OnInit } from '@angular/core';
import { DatagridService } from '../../services/datagrid.service';
import { DatagridData } from '../../models/datagrid.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [DatagridService]
})
export class HomeComponent implements OnInit{
  public datagridData: DatagridData[] = [];

  constructor(private datagridSerivce: DatagridService){}

  private getDatagridData(){
    this.datagridSerivce.getDatagridData().subscribe({
      next: (result) => {
        this.datagridData = result.map(item=>({...item,checked: false}));
      },
      error: (err)=>{
        console.error(err);
      }
    });
  }
  
  public ngOnInit(): void {
    this.getDatagridData();
  }
}
