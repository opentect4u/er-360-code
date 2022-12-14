import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxSpinnerService } from 'ngx-spinner';
import { VirtualEmergencyService } from 'src/app/Services/virtual-emergency.service';
import { jsPDF } from 'jspdf';
import { Form, NgForm } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IncDetails } from 'src/app/Model/IncDetails';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogalertComponent } from 'src/app/CommonDialogAlert/dialogalert/dialogalert.component';
@Component({
  selector: 'app-log-sheet',
  templateUrl: './log-sheet.component.html',
  styleUrls: ['./log-sheet.component.css'],
  animations: [
        trigger('openClose', [
            state('open', style({
                height: '*',
                opacity: 1,
            })),
            state('closed', style({
                height: '0',
                opacity: 0
            })),
            transition('open => closed', [
                animate('0.35s')
            ]),
            transition('closed => open', [
                animate('0.35s')
            ]),
        ]),
    ]
})
export class LogSheetComponent implements OnInit {
  @ViewChild('submitBtn') submitBtn!:ElementRef;
  showCardBody:boolean=true;
  @ViewChild('ManualLog') manuallog!: NgForm;
  @ViewChild('logForm') LogForm!: NgForm;
  displayedColumns: string[] = ['act_by', 'act_at', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) matsort!: MatSort;
  icon: any = 'fa-file-excel-o';
  headername: any = 'Log Sheet';
  flag: any = '';
  id: any = null;
  contents: any;
  Inc_id: any;
  Act_type: any = 'W';
  Id: any = 0;
  public now: any;
  frm_dt: any;
  to_dt: any;
  constructor(
    private dialog:MatDialog,
    private emergencyService: VirtualEmergencyService,
    private toastr: ToastrManager,
    private spinner: NgxSpinnerService
  ) {
    var date = new Date(); //For Date Time
    this.now = date.toISOString().substring(0, 19);
  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.LogForm.form.controls.frm_date.setValue(this.getToday());
       this.LogForm.form.controls.to_date.setValue(this.getToday());
    }, 50);


  }
  ngOnInit(): void {}
  fetchdata(_id:any) {
    console.log(_id);
     if(_id != ''){
      this.emergencyService
      .global_service('0', '/manuallog', 'inc_id='+_id).pipe(map((x:any)=>x.msg))
      .subscribe((data) => {
        this.putdata(data);
      });
     }
     else{

     }

  }

  putdata(v: any) {
    this.dataSource = new MatTableDataSource(v);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matsort;
    // this.spinner.hide();
  }
  check_logSheet(event: any) {
    this.flag = event.value;
    if (event.value != 'M') {
      this.manuallog.reset();
      this.Id = 0;
      // this.Inc_id = localStorage.getItem('Inc_id');
      this.Act_type = 'W';
      this.manuallog.setValue({
        id: 0,
        inc_id: localStorage.getItem('Inc_id'),
        act_type: 'W',
        act_by: '',
        activity: '',
        act_at: '',
      });
      this.submitBtn.nativeElement.value = 'Add';
      this.spinner.hide();
      this.showCardBody = true;
    } else {
      this.showCardBody = !this.showCardBody;
      this.fetchdata(localStorage.getItem('Inc_id'));
    }
  }
  // modify_modal(del_id:any){this.del_id='';this.del_id=del_id;}
  //For FilterData from data table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  delete_log_sheet(_id:any,_index:any) {
    this.emergencyService
      .global_service('0', '/manuallog_del', 'id=' + _id)
      .subscribe((data:any) => {
        if (data.suc == 1) {
          this.dataSource.data.splice(_index, 1);
          this.dataSource._updateChangeSubscription();// <== refresh data table
          this.toastr.successToastr(data.msg, '', {
            position: 'bottom-right',
            animate: 'slideFromRight',
            toastTimeout: 5000,
          });
        } else {
          this.toastr.errorToastr(
            'Something went wrong, failed to delete',
            '',
            {
              position: 'bottom-right',
              animate: 'slideFromRight',
              toastTimeout: 5000,
            }
          );
        }
      });
  }

  logSubmit(downloadAs: any) {
   if(this.Inc_id){
    if (this.flag != '') {
      if (this.LogForm.form.value.frm_date <= this.LogForm.form.value.to_date) {

        var str =
          this.flag == 'A'
            ? '/get_autolog'
            : this.flag == 'C'
            ? '/get_chat_log'
            : '/get_manuallog'; //After clicking on radio button api get called
        this.emergencyService
          .global_service(
            '0',
            str,
            'inc_id=' +
              this.LogForm.form.value.inc_id +
              '&frm_dt=' +
              this.LogForm.form.value.frm_date +
              '&to_dt=' +
              this.LogForm.form.value.to_date
          )
          .subscribe((data) => {
            this.contents = data;
            // Check wheather there is any message or not
            if (this.contents.msg != '') {
              // For check wheather a  user want to download as pdf
              if (downloadAs == 'P') {
                const doc = new jsPDF();
                doc.setFontSize(10);
                doc.text(this.contents.msg, 10, 10);
                var file_name =
                  this.flag == 'A'
                    ? '_Auto_log.pdf'
                    : this.flag == 'C'
                    ? '_chat_log.pdf'
                    : '_Manual_log.pdf';
                doc.save(
                  this.LogForm.form.value.frm_date +
                    '_' +
                    this.LogForm.form.value.to_date +
                    file_name
                );
              } else {
                // For check wheather a  user want to download as  text
                var textToBlob = new Blob([this.contents.msg], {
                  type: 'text/plain',
                });
                var file_name =
                  this.flag == 'A'
                    ? '_Auto_log.txt'
                    : this.flag == 'C'
                    ? '_chat_log.txt'
                    : '_Manual_log.txt';
                const sFileName =
                  this.LogForm.form.value.frm_date +
                  '_' +
                  this.LogForm.form.value.to_date +
                  file_name;
                let newLink = document.createElement('a');
                newLink.download = sFileName;
                newLink.href = window.webkitURL.createObjectURL(textToBlob);
                newLink.click();
              }
            } else {
              this.toastr.errorToastr(
                'No logs available from\n' +
                  this.LogForm.form.value.frm_date +
                  ' to ' +
                  this.LogForm.form.value.to_date,
                '',
                {
                  position: 'bottom-right',
                  animate: 'slideFromRight',
                  toastTimeout: 5000,
                }
              );
            }
          });
      } else {
        this.toastr.errorToastr(
          'Start date must be greater than end date',
          '',
          {
            position: 'bottom-right',
            animate: 'slideFromRight',
            toastTimeout: 5000,
          }
        );
      }
    } else {
      this.toastr.errorToastr('Please select an option', '', {
        position: 'bottom-right',
        animate: 'slideFromRight',
        toastTimeout: 5000,
      });
    }
   }
   else{
    this.toastr.errorToastr(
      'There is no active incident available',
      '',
      {
        position: 'bottom-right',
        animate: 'slideFromRight',
        toastTimeout: 5000,
      }
    );
   }

  }
  SubmitForm(ManualLog: Form) {
    this.spinner.show();
    if(localStorage.getItem('Inc_id')!=''){
      this.emergencyService
      .global_service('1', '/manuallog', ManualLog)
      .subscribe((data:any) => {
        if (data.suc == 1) {
          this.manuallog.reset();
          this.Id = 0;
          // this.Inc_id = localStorage.getItem('Inc_id');
          this.Act_type = 'W';
          this.manuallog.setValue({
            id: this.Id,
            inc_id: this.Inc_id,
            act_type: 'W',
            act_by: '',
            activity: '',
            act_at: '',
          });
           this.submitBtn.nativeElement.value = 'Add';
          this.toastr.successToastr(data.msg, '', {
            position: 'bottom-right',
            animate: 'slideFromRight',
            toastTimeout: 5000,
          });
          this.fetchdata(localStorage.getItem('Inc_id'));
          this.manuallog.form.reset();
          this.manuallog.setValue({
            id:0,
            inc_id:localStorage.getItem('Inc_id'),
            act_type: 'W',
            act_by: '',
            activity: '',
            act_at: '',
          });
          this.spinner.hide();
          window.scrollTo(window.innerHeight, window.innerWidth);
        } else {
          this.spinner.hide();
          this.toastr.errorToastr(
            'Something went wrong, failed to Submit',
            '',
            {
              position: 'bottom-right',
              animate: 'slideFromRight',
              toastTimeout: 5000,
            }
          );
        }
      });
    }
    else{
      this.spinner.hide();
      this.toastr.errorToastr('Sorry!! There is no active incident available','',{position:'bottom-right',animate:'slideFromRight',toastTimeout:7000})
    }

  }
  close_card() {this.showCardBody = !this.showCardBody;}
  close_DataTable() {this.close_card();}
  modify_logsheet(id: any) {
    this.Id = id;
    this.emergencyService
      .global_service('0', '/manuallog', 'id=' + id).pipe(map((x:any)=>x.msg))
      .subscribe((data) => {
        ;
        this.manuallog.setValue({
          inc_id: this.Inc_id,
          act_type: 'W',
          id: this.Id,
          act_by: data[0].act_by,
          activity: data[0].activity,
          act_at: data[0].act_at,
        });
      this.submitBtn.nativeElement.value = 'Update';
        window.scrollTo(0, 0);
      });
  }
  delete_modal(id: any,_index:any) {
    const disalogConfig=new MatDialogConfig();
      disalogConfig.disableClose=false;
      disalogConfig.autoFocus=true;
      disalogConfig.width='35%';
    disalogConfig.data={id:id,api_name:'/manuallog_del',name:'board Type'}
    const dialogref=this.dialog.open(DialogalertComponent,disalogConfig);
    dialogref.afterClosed().subscribe(dt=>{
    if(dt){this.delete_log_sheet(id,_index);}
    })
  }
  getToday() {
    //For Getting Date Only
    return new Date().toISOString().substring(0, 10);
  }
  getIncDetails(_e:IncDetails){
     this.fetchdata(_e.id);
     this.manuallog.form.reset();
     this.Id = 0;
     this.Inc_id = _e.id;
     this.Act_type = 'W';
    console.log(this.manuallog);
    this.manuallog.setValue({
      id:this.Id,
      inc_id:_e.id,
      act_type: 'W',
      act_by: '',
      activity: '',
      act_at: '',
    });
  }
}
