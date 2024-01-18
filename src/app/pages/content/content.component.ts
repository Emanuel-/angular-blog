import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  //@Input()
  photoCover:String="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XEzCus7qBZWaiCmf-FtfTKJ2XbQQzjP_gnVgv1Bal8BbRBkBulnxOGvxacDtDKJmml8&usqp=CAU"
  contentTitle:String="algo"
  contentDescription:String="alguma coisa"

  constructor() { }

  ngOnInit(): void {
  }

}
