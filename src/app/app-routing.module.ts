   /* ********** app-routing.module.ts************
     This is the main routing section of this project,where
     all routing of components are declared.
    *******************  End ********************/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './AfterLogin/weather/weather.component';
import { AddAdminOffshoreComponent } from './Admin/AfterLogin/add-admin-offshore/add-admin-offshore.component';
import { AdminDashboardComponent } from './Admin/AfterLogin/admin-dashboard/admin-dashboard.component';
import { AddAdminDepartmentComponent } from './Admin/AfterLogin/Admin-Department/add-admin-department/add-admin-department.component';
import { AdminDepartmentComponent } from './Admin/AfterLogin/Admin-Department/admin-department/admin-department.component';
import { EditAdminDepartmentComponent } from './Admin/AfterLogin/Admin-Department/edit-admin-department/edit-admin-department.component';
import { AddAdminEmployeeComponent } from './Admin/AfterLogin/Admin-Employee/add-admin-employee/add-admin-employee.component';
import { AdminEmployeeComponent } from './Admin/AfterLogin/Admin-Employee/admin-employee/admin-employee.component';
import { EditAdminEmployeeComponent } from './Admin/AfterLogin/Admin-Employee/edit-admin-employee/edit-admin-employee.component';
import { AddAdminIncidentComponent } from './Admin/AfterLogin/Admin-Incident/add-admin-incident/add-admin-incident.component';
import { AdminIncidentComponent } from './Admin/AfterLogin/Admin-Incident/admin-incident/admin-incident.component';
import { EditAdminIncidentComponent } from './Admin/AfterLogin/Admin-Incident/edit-admin-incident/edit-admin-incident.component';
import { AdminOffshoreComponent } from './Admin/AfterLogin/admin-offshore/admin-offshore.component';
import { AddAdminPositionComponent } from './Admin/AfterLogin/Admin-Position/add-admin-position/add-admin-position.component';
import { AdminPositionComponent } from './Admin/AfterLogin/Admin-Position/admin-position/admin-position.component';
import { EditAdminPositionComponent } from './Admin/AfterLogin/Admin-Position/edit-admin-position/edit-admin-position.component';
import { AddRepoComponent } from './Admin/AfterLogin/Admin-Repository/add-repo/add-repo.component';
import { RepoDashboardComponent } from './Admin/AfterLogin/Admin-Repository/repo-dashboard/repo-dashboard.component';
import { AddAdminTeamComponent } from './Admin/AfterLogin/Admin-team/add-admin-team/add-admin-team.component';
import { AdminTeamComponent } from './Admin/AfterLogin/Admin-team/admin-team/admin-team.component';
import { EditAdminTeamComponent } from './Admin/AfterLogin/Admin-team/edit-admin-team/edit-admin-team.component';
import { AddAdminTierComponent } from './Admin/AfterLogin/Admin-Tier/add-admin-tier/add-admin-tier.component';
import { AdminTierComponent } from './Admin/AfterLogin/Admin-Tier/admin-tier/admin-tier.component';
import { EditAdminTierComponent } from './Admin/AfterLogin/Admin-Tier/edit-admin-tier/edit-admin-tier.component';
import { EditAdminOffshoreComponent } from './Admin/AfterLogin/edit-admin-offshore/edit-admin-offshore.component';
import { CategoryComponent } from './Admin/AfterLogin/FormsChecklist/category/category.component';
import { CreateCategoryComponent } from './Admin/AfterLogin/FormsChecklist/create-category/create-category.component';
import { UploaddashboardComponent } from './Admin/AfterLogin/FormsChecklist/Upload-Dashboard/uploaddashboard/uploaddashboard.component';
import { UploadsComponent } from './Admin/AfterLogin/FormsChecklist/uploads/uploads.component';
import { PreviewFileComponent } from './Admin/AfterLogin/PreviewFile/preview-file/preview-file.component';
import { ReportDataPooldashboardComponent } from './Admin/AfterLogin/reportDataPool/report-data-pooldashboard/report-data-pooldashboard.component';
import { ReportDataPooldetailsComponent } from './Admin/AfterLogin/reportDataPool/report-data-pooldetails/report-data-pooldetails.component';
import { AddTeamMemberComponent } from './Admin/AfterLogin/Team/add-team-member/add-team-member.component';
import { AssignTeamComponent } from './Admin/AfterLogin/Team/assign-team/assign-team.component';
import { AddTeamStatusComponent } from './Admin/AfterLogin/Team/TeamStatus/add-team-status/add-team-status.component';
import { UserStatusComponent } from './Admin/AfterLogin/User-Status/user-status/user-status.component';
import { AdminLoginComponent } from './Admin/BeforeLogin/admin-login/admin-login.component';
import { ForgetPasswordForAdminComponent } from './Admin/BeforeLogin/forget-password-for-admin/forget-password-for-admin.component';
import { ResetPasswordComponent } from './Admin/BeforeLogin/reset-password/reset-password.component';

import { ActivationModuleComponent } from './AfterLogin/activation-module/activation-module.component';
import { AddRepositoryComponent } from './AfterLogin/AddRepository/add-repository/add-repository.component';
import { AudioVideoConferenceComponent } from './AfterLogin/audio-video-conference/audio-video-conference.component';
import { CreateMeetingComponent } from './AfterLogin/audio-video-conference/create-meeting/create-meeting/create-meeting.component';
import { BoardComponent } from './AfterLogin/board/board.component';
import { AddCallLoggerComponent } from './AfterLogin/call-log/add-call-logger/add-call-logger.component';
import { CallLoggerComponent } from './AfterLogin/call-log/call-logger/call-logger.component';
// import { CallLoggerComponent } from './AfterLogin/call-logger/call-logger.component';
import { EditDashbaordComponent } from './AfterLogin/Close-Incident/edit-dashbaord/edit-dashbaord.component';
import { DashBoardComponent } from './AfterLogin/dash-board/dash-board.component';
import { FirstloggedinchangePasswordComponent } from './AfterLogin/FirstTimeChangePassWord/firstloggedinchange-password/firstloggedinchange-password.component';
import { FormsChecklistComponent } from './AfterLogin/forms-checklist/forms-checklist.component';
import { FormschecklistfilesComponent } from './AfterLogin/formschecklistfiles/formschecklistfiles.component';
import { HandOverDashboardComponent } from './AfterLogin/hand-over-dashboard/hand-over-dashboard.component';
import { HandoverComponent } from './AfterLogin/handover/handover.component';
import { AddIncidentComponent } from './AfterLogin/Incident/add-incident/add-incident.component';
import { ApproveIncidentComponent } from './AfterLogin/Incident/approve-incident/approve-incident.component';
import { EditIncidentComponent } from './AfterLogin/Incident/edit-incident/edit-incident.component';
import { IncidentModuleComponent } from './AfterLogin/Incident/incident-module/incident-module.component';
import { AddLessonLearntComponent } from './AfterLogin/Lesson_Learnt/add-lesson-learnt/add-lesson-learnt.component';
import { LessonDashboardComponent } from './AfterLogin/Lesson_Learnt/lesson-dashboard/lesson-dashboard.component';
import { LiveLogComponent } from './AfterLogin/live-log/live-log.component';
import { AddlogsheetComponent } from './AfterLogin/log-sheet/Add-Log-Sheet/addlogsheet/addlogsheet.component';
import { EditLogSheetComponent } from './AfterLogin/log-sheet/Edit-Log-Sheet/edit-log-sheet/edit-log-sheet.component';
import { LogSheetComponent } from './AfterLogin/log-sheet/log-sheet.component';
import { MediaComponent } from './AfterLogin/Media_Module/media/media.component';
import { ModifyMediaComponent } from './AfterLogin/Media_Module/modify-media/modify-media.component';
import { OilspillComponent } from './AfterLogin/oilspill/oilspill.component';
import { ReportdatapoolDetailsComponent } from './AfterLogin/report-datepool/detailsReportdatapool/reportdatapool-details/reportdatapool-details.component';
import { ReportDatepoolComponent } from './AfterLogin/report-datepool/report-datepool.component';
import { RepositoryComponent } from './AfterLogin/repository/repository.component';
import { UserInfoComponent } from './AfterLogin/user-info/user-info.component';
import { MeetingDashboardComponent } from './AfterLogin/weeklyMeeting/meeting-dashboard/meeting-dashboard.component';
import { ModifyMeetingComponent } from './AfterLogin/weeklyMeeting/modify-meeting/modify-meeting.component';
import { BeforeLoginDashboardComponent } from './BeforeLogin/login-lee/before-login-dashboard/before-login-dashboard.component';
import { ForgotPasswordComponent } from './BeforeLogin/login-lee/ForgetPassword/forgot-password/forgot-password.component';
import { LoginLEEComponent } from './BeforeLogin/login-lee/login-lee.component';
import { NotificationComponent } from './CommonDialogAlert/Notification/Notification.component';
import { PageNotFoundComponent } from './Error_pages/page-not-found/page-not-found.component';
import { AuthGuard } from './Gaurds/auth.guard';
import { AdminAuthGuard } from './Gaurds/admin-auth.guard';

const routes: Routes = [
  /** Routing for BeforeLoginDashboardComponent (src/app/BeforeLogin/befor-login-dashboard) => It is the landing page of ER-360 Application **/
  {
    path:'',
    component:BeforeLoginDashboardComponent
  },
  /**                                                 END                                                                                   **/

  {
    path:'userinfo',
    component:UserInfoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginLEEComponent
  },
  {
    path:'dashboard',
    component:DashBoardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'ActivationModule',
    component:ActivationModuleComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'IncidentModule',
    component:IncidentModuleComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'AddIncident',
    component:AddIncidentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'EditIncident/:id',
    component:EditIncidentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'livelog',
    component:LiveLogComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Board',
    component:BoardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Repository/files/:cat_id/:cat_name',
    component:RepositoryComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'FormsCheckList',
    component:FormsChecklistComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Audio_Video',
    component:AudioVideoConferenceComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Log_Sheet',
    component:LogSheetComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Call-Logger',
    component:CallLoggerComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Report_Data_Pool',
    component:ReportDatepoolComponent,
    canActivate:[AuthGuard]
  },
   //Dashboard page
  {
    path:'admin/dashboard',
    component:AdminDashboardComponent,
    canActivate:[AdminAuthGuard]
  },
   // Offshore Dashboard page

  {
    path:'admin/offshore',
    component:AdminOffshoreComponent,
    canActivate:[AdminAuthGuard]
  }
   // Offshore Add page
  ,{
    path:'admin/offshore/add',
    component:AddAdminOffshoreComponent,
    canActivate:[AdminAuthGuard]
  },
  // Offshore Edit page
  {
    path:'admin/offshore/edit/:id',
    component:EditAdminOffshoreComponent,
    canActivate:[AdminAuthGuard]
  },
  //Admin Incident Page
  {
    path:'admin/incident',
    component:AdminIncidentComponent,
    canActivate:[AdminAuthGuard]

  },
  //Admin Incident edit Page
  {
    path:'admin/incident/edit/:id',
    component:EditAdminIncidentComponent,
    canActivate:[AdminAuthGuard]

  },
  //Admin Incident Add Page
  {
    path:'admin/incident/add',
    component:AddAdminIncidentComponent,
    canActivate:[AdminAuthGuard]

  },
  //Admin Tier Page
  {
    path:'admin/tier',
    component:AdminTierComponent,
    canActivate:[AdminAuthGuard]

  },
  //Admin Tier add Page
  {
    path:'admin/tier/add',
    component:AddAdminTierComponent,
    canActivate:[AdminAuthGuard]

  },
  //Admin Tier edit Page
  {
    path:'admin/tier/edit/:id',
    component:EditAdminTierComponent,
    canActivate:[AdminAuthGuard]

  },
   //Admin Position Page
   {
    path:'admin/position',
    component:AdminPositionComponent,
    canActivate:[AdminAuthGuard]

  },
  //Admin Position add Page
  {
    path:'admin/position/add',
    component:AddAdminPositionComponent,
    canActivate:[AdminAuthGuard]

  },
  //Admin Position edit Page
  {
    path:'admin/position/edit/:id',
    component:EditAdminPositionComponent,
    canActivate:[AdminAuthGuard]

  },
   //Admin Department Page
   {
    path:'admin/department',
    component:AdminDepartmentComponent,
    canActivate:[AdminAuthGuard]

  },
  //Admin Department add Page
  {
    path:'admin/department/add',
    component:AddAdminDepartmentComponent,
    canActivate:[AdminAuthGuard]

  },
  //Admin Department edit Page
  {
    path:'admin/department/edit/:id',
    component:EditAdminDepartmentComponent,
    canActivate:[AdminAuthGuard]

  },
  //Admin Employee Page
  {
    path:'admin/employee',
    component:AdminEmployeeComponent,
    canActivate:[AdminAuthGuard]

  },
  //Admin Employee add Page
  {
    path:'admin/employee/add',
    component:AddAdminEmployeeComponent,
    canActivate:[AdminAuthGuard]

  },
  //Admin Employee edit Page
  {
    path:'admin/employee/edit/:id',
    component:EditAdminEmployeeComponent,
    canActivate:[AdminAuthGuard]

  },
  //Admin Team Page
  {
    path:'admin/team',
    component:AdminTeamComponent,
    canActivate:[AdminAuthGuard]
  },
  //Admin Team add Page
  {
    path:'admin/team/add',
    component:AddAdminTeamComponent,
    canActivate:[AdminAuthGuard]
  },
  //Admin Team edit Page
  {
    path:'admin/team/edit/:id',
    component:EditAdminTeamComponent,
    canActivate:[AdminAuthGuard]
  },
  //Admin Team AssignTeam Page
  {
    path:'admin/Team/assignteam',
    component:AssignTeamComponent,
    canActivate:[AdminAuthGuard]
  },
  //Admin Team Member add Page
  {
    path:'admin/Team/addmember',
    component:AddTeamMemberComponent,
    canActivate:[AdminAuthGuard]
  },
   //For Adding Team Status view
   {
    path:'admin/Team/Status/add',
    component:AddTeamStatusComponent,
    canActivate:[AdminAuthGuard]
  },
   //For Adding Report Data Pool Dashboard
  {
    path:'admin/reportdatapoolDashboard',
    component:ReportDataPooldashboardComponent,
    canActivate:[AdminAuthGuard]

  },
     //For Adding Report Data Pool Dashboard
     {
      path:'admin/reportdatapoolDetails/:inc_type',
      component:ReportDataPooldetailsComponent
    },
  {
    path:'admin/User_Status',
    component:UserStatusComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'admin',
    component:AdminLoginComponent
  },
  {
    path:'admin/forgetpassword',
    component:ForgetPasswordForAdminComponent
  },

  // {
  //   path:'Editinc/:id',
  //   component:EditDashbaordComponent
  // }
  {
    path:'Editinc',
    component:EditDashbaordComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'EditApprove',
    component:ApproveIncidentComponent,
    canActivate:[AuthGuard]
  }
  ,{
    path:"category",
    component:CategoryComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'addCategory',
    component:CreateCategoryComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'uploadforms',
    component:UploadsComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'UploadDashBoard',
    component:UploaddashboardComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'formchecklist/files/:id',
    component:FormschecklistfilesComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'AddCallLog/:id',
    component:AddCallLoggerComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Conference/:room_id/:name/:email',
    component:CreateMeetingComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'addLogSheet',
    component:AddlogsheetComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'EditLogSheet/:id/:flag',
    component:EditLogSheetComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'firstloggedin',
    component:FirstloggedinchangePasswordComponent
  },
  {
    path:'previewFile/:form_path',
    component:PreviewFileComponent
  },
  {
    path:'addRepository',
    component:AddRepositoryComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Repo_dashboard',
    component:RepoDashboardComponent,
    canActivate:[AdminAuthGuard]

  },
  {
    path:'Add_Repo',
    component:AddRepoComponent,
    canActivate:[AdminAuthGuard]

  },
  {
    path:'ReportdatapoolDetails/:inc_type',
    component:ReportdatapoolDetailsComponent
  },
  {
    path:'resetPassword/:flag/:email',
    component:ResetPasswordComponent
  },
  {
    path:'user/forgotPassword',
    component:ForgotPasswordComponent
  },
  {
    path:'notifications/:type',
    component:NotificationComponent
  },
  {
    path:'add_handover',
    component:HandoverComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'handover',
    component:HandOverDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'lesson_learnt',
    component:LessonDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'add_lesson_learnt/:id',
    component:AddLessonLearntComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'media',
    component:MediaComponent,
    canActivate:[AuthGuard]
  },
  {
       path:'media/:type/:id',
       component:ModifyMediaComponent,
       canActivate:[AuthGuard]
  },
  {
    path:'oilSpill',
    component:OilspillComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'meeting',
    component:MeetingDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'meeting/:id/:type',
    component:ModifyMeetingComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'weather',
    component:WeatherComponent,
    canActivate:[AuthGuard]
   },
  {
    path:"**",
    component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
