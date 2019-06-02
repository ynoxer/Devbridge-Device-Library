~~Last change created some major problems!~~


# Team Challenge 202 project

## Challenge202.TestDeviceBooking

_Challenge202.TestDeviceBooking_ contains full stack project.

Requirements:
* .Net Core 2.0
* node, npm
* MSSQL server

### Running dotnet-cli way
1. Restore .net dependencies:  
`dotnet restore`
2. Install frontend dependencies:  
in _ClientApp/_ execute `npm i`
3. Set environment to Development:  
`export ASPNETCORE_ENVIRONMENT=Development` (Linux/macOS)  
`set ASPNETCORE_ENVIRONMENT=Development` (Windows cmd)  
`$Env:ASPNETCORE_ENVIRONMENT = "Development"` (Windows power shell)
4. Run the application `dotnet run`
5. The application runs. Make sure the environment is set to Development. Example output:
```
Hosting environment: Development
Content root path: Challenge202.TestDeviceBooking
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```

### Running in Visual Studio 2017
1. Set environment to Development  
Navigate to _Project->Properties->Debug_ and add new environment variable
(Name: ASPNETCORE_ENVIRONMENT, Value: Development)
2. Run the project (F5) _(First build might take longer because it also installs node dependencies)_


### Database
Project uses _MSSQL_ as a database, make sure you have it installed.  
For Windows users default connection string in _appsettings.Development.json_ should work.
Linux users must provide sql user login and password in the format:
```
"TestDeviceBookingConnection": "Data Source=localhost;User Id=;Password=;Initial Catalog=test-device-booking-db;"
``` 


### Backend-Frontend wiring

There is two ways to wire backend and frontend in development (see _Startup.cs_ to try out both):
1. Single launch command (currently enabled):  
`dotnet run` launches both backend and frontend (dotnet SpaServices launch `npm start`). Output from webpack is redirected to dotnet output.
2. Separate launch:  
`dotnet run` and `npm start` must be launched separately. Outputs are separate, so frontend build output is better structured and colored :) (for warnings, eslint hints, etc...)

Well see which works best for us.

### dotnet watch

dotnet watch tools enables automatic rebuild of project on file save (just like our frontend does).
To use dotnet watch:
* dotnet-cli way - start the application with `dotnet watch run`, instead of `dotnet run`
* Visual Studio 2017 - see [SO: Setting dotnet-watch for .NET CORE 2.0 in VS2017](https://stackoverflow.com/questions/45861157/setting-dotnet-watch-for-net-core-2-0-in-vs2017)
