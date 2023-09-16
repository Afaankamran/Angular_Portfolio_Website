import { Component} from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import  emailjs  from '@emailjs/browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageService]
})
export class ContactComponent {


constructor( private messageService:MessageService){
}







  userform = new FormGroup({
    from_name: new FormControl('',[Validators.required]),
    to_name:new FormControl('Admin'),
    from_email: new FormControl('',[Validators.required,Validators.email]),
    number: new FormControl('',[Validators.required]),
    subject:new FormControl('',[Validators.required]),
    message: new FormControl('',[Validators.required])
   
   
  });

  async user()
  {
    try{
    emailjs.init(''); // paste your email.js key here
     let response  = await emailjs.send("service_zp9jbrm","template_azegcoa",{
      from_name: this.userform.value.from_name,
      to_name: this.userform.value.to_name,
      from_email: this.userform.value.from_email,
      subject: this.userform.value.subject,
      message: this.userform.value.message,
      number: this.userform.value.number,
      });
      this.success();
      this.userform.reset();
  }
  catch(error){
    console.error('Error sending email:', error);
  }
  
  }

  success()
  {
     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message has been sent successfully'});
    }



    get from_name()
    {
      return this.userform.get('from_name');
    }
    get from_email()
    {
      return this.userform.get('from_email');
    }
    get number()
    {
      return this.userform.get('number');
    }
    get subject()
    {
      return this.userform.get('subject');
    }
    get message()
    {
      return this.userform.get('message');
    }
  }



