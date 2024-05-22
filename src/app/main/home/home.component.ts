import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { TableComponent } from '@app/components/table/table.component';
import { Tasks } from '@app/common/data/tasks';
import { HttpClientService } from '@app/services/http-service/http-service.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgbNavModule,
    NavbarComponent,
    TableComponent,
    FooterComponent,
    JsonPipe,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  tasks:any = Tasks;
  tableData:any = null
  showNav: boolean = false;
  tableCols: any = [
    'name',
    'description',
    'added',
    'updated',
    'status',
  ];
  currentYear!: number;
  user:any = null;

  constructor(
    private httpService: HttpClientService
  ) { }
  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.tableData = this.tasks.filter((task:any) => task.user === this.user.userName);
  }


}
