const menu = [
  { path: "/time-tracker", label: "Time Tracker",child:[
      { path: "/activitytracker/activitydashboard/dashboard", label: "Dashboard" },
      { path: "/activitytracker/activitydashboard/attendance", label: "Attendance" },
      { path: "/activitytracker/activitydashboard/timeclaim", label: "Time Claim" },
      { path: "/activitytracker/activitydashboard/heatmap", label: "Heat Maps" },
      { path: "/activitytracker/activitydashboard/attendancechart", label: "Chart" },
  ] },
  { path: "/productivity", label: "Productivity",child:[
      { path: "/activitytracker/activitydashboard/productivity", label: "Trends" },
      { path: "/activitytracker/activitydashboard/productiveapps", label: "Configure Apps" },
  ] },
  { path: "/activity", label: "Activity",child:[
     { path: "/activitytracker/activity/topwebsites", label: "Websites Visited" },
     { path: "/activitytracker/activity/topapplications", label: "Applications Used" },
     { path: "/activitytracker/activity/topcategories", label: "By Categories" },
     { path: "/activitytracker/activity/activitylog", label: "Detailed Activity" },
  ] },
  { path: "/monitoring", label: "Monitoring",child:[
     { path: "/activitytracker/monitoring/screenshots", label: "Screenshots" },
     { path: "/activitytracker/monitoring/screenrecordings", label: "Screen Recordings" },
     { path: "/activitytracker/monitoring/intensity", label: "Activity Levels" },
  ] },
  { path: "/office-tv", label: "Office TV" ,child:[
     { path: "/activitytracker/officetv", label: "Favourites" },
     { path: "/activitytracker/activitydashboard/", label: "Live Screens" },,
  ] },
  { path: "/projects", label: "Projects" ,child:[
     { path: "/projects/area/allprojects", label: "Projects" },
     { path: "/projects/area/allgoals", label: "Tasks" },
     { path: "/projects/area/projectactivity", label: "Activity" },
     { path: "/projects/area/projectroles", label: "Roles" },
     { path: "/projects/area/projectreports", label: "Reports" },
     { path: "/projects/area/projectsettings", label: "Settings" },
     { path: "/projects/area/membersAllocation", label: "Members Allocation" },
  ] },
  { path: "/activitytracker/timesheetapprovals", label: "Timesheets" },
  { path: "/task-timer", label: "Task Timer" ,child:[
     { path: "/tasktimer/listview", label: "Log Time" },
     { path: "/activitytracker/worklogreports", label: "Work Log Report" },
     { path: "/activitytracker/heatmaps", label: "Heat Maps" },
  ] },
  { path: "/billingmanagement/invoices", label: "Invoices" },
  { path: "/users", label: "Users" },
  { path: "/activitytracker/teams", label: "Teams" },
  { path: "/administration", label: "Administration" ,child:[
     { path: "/trackerconfiguration/admin/users", label: "Users" },
     { path: "/trackerconfiguration/admin/teams", label: "Teams" },,
  ] },
];



export default menu;
