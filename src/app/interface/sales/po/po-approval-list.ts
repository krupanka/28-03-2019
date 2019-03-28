export interface PoApprovalList {
    id: string,
    customer: string,
            name: string,
            location: string,
            code: string,
            address:string,
            city:string,
            state: string,
            pin: number,
            country: string,
            office_email1: string,
            office_email2: string,
            office_phone1: number,
            office_phone2:  number,
            gst_number: number,
            vendor_code: string,
            payment_term: number,
            inco_term: string,
            tax_type: string,
            billing_address: string,
            shipping_address: string,
            created_at: any,
            updated_at: any,
            created_by: number

  customer_contact_person: string,
            mobileNo1: number,
            mobileNo2: number,
            email1: string,
            email2: string,  
         customer_po_no: string,
         customer_po_date: Date
    
}
