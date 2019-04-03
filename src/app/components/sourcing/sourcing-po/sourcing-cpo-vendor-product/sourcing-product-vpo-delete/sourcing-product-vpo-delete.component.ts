import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';


import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoVendorService} from 'src/app/services/sourcing/po/po-vendor.service';

@Component({
  selector: 'app-sourcing-product-vpo-delete',
  templateUrl: './sourcing-product-vpo-delete.component.html',
  styleUrls: ['./sourcing-product-vpo-delete.component.css']
})
export class SourcingProductVpoDeleteComponent implements OnInit {
  cpo_id="";
  vpo_id="";
  display='none';
  constructor(private formBuilder: FormBuilder,private PoVendorService:PoVendorService,private router:Router,private route:ActivatedRoute,) {  }  

  ngOnInit() {
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');  
    this.cpo_id = cpo_id;
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');  
    this.vpo_id = vpo_id;    
  }
  delete_vpo_list($event){
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');  
    this.cpo_id = cpo_id;
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');  
    this.vpo_id = vpo_id; 
    this.PoVendorService.delete_VPO_List(cpo_id,vpo_id).subscribe((data)=>{  // delete method
      
      console.log(data['Message']);

      if (data['Message']!='Success'){
        window.alert(data['Message']);
      }
      else{
        window.alert(data['Message']);

      }
      this.router.navigate(['sourcing/sourcing-po/'+cpo_id+'/souring-cpo-vendor-product']);
     
    })

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

