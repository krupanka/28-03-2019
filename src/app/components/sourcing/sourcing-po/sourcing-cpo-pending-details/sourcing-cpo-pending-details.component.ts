import { Component, OnInit } from '@angular/core';
import { PoVendorService } from 'src/app/services/sourcing/po/po-vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sourcing-cpo-pending-details',
  templateUrl: './sourcing-cpo-pending-details.component.html',
  styleUrls: ['./sourcing-cpo-pending-details.component.css']
})
export class SourcingCpoPendingDetailsComponent implements OnInit {
  cpopendingdetails:object[]=[];
  vendor_id="";
  cpo_id = "";
  display='none';
 
 
  constructor(private PoVendorService:PoVendorService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    let id= this.route.snapshot.paramMap.get('sourcingdetail');
    this.cpo_id=id;
    this.CPOPendingDetails(id)
   
    
  }
  CPOPendingDetails(id){
    
    this.PoVendorService.getCPOPendingDetailsList(id).subscribe(data=>{
      this. cpopendingdetails=data;
      console.log(data);
    })
  }
  
  mark_po_releasing_complete(event){
    let id= this.route.snapshot.paramMap.get('sourcingdetail');
    this.cpo_id=id;
    this.PoVendorService.postmark_po_releasing_complete(id).subscribe(data=>{
     
      console.log(data['Message']);

      if (data['Message']!='Success'){
        window.alert(data['Message']);
      }
      else{
        window.alert(data['Message']);

      }
      this.router.navigate(['sourcing/sourcing-po/sourcing-cpo-pending-list']);
       
    
  });
  }
  openModalDialog()
  {
    this.display='block';
  }
  closeModalDialog()
  {
    this.display='none';
    }
}


