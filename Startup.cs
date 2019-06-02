using System.Threading.Tasks;
using Challenge202.TestDeviceBooking.Data;
using Challenge202.TestDeviceBooking.DataContracts;
using Challenge202.TestDeviceBooking.DataContracts.Responses;
using Challenge202.TestDeviceBooking.Models;
using Challenge202.TestDeviceBooking.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Challenge202.TestDeviceBooking
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DataContext>(options => 
                options.UseSqlServer(Configuration.GetConnectionString("TestDeviceBookingConnection")));

            services.AddIdentity<User, Role>()
                .AddEntityFrameworkStores<DataContext>();
            
            services.Configure<IdentityOptions>(options => 
            {
                // Minimal requirements for password
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 3;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;

                options.User.RequireUniqueEmail = true;
            });

            // By default unauthorized requests to api would fallback to static SPA files
            // Adding this to ensure 401 is returned
            services.ConfigureApplicationCookie(options =>
            {
                options.LoginPath = new PathString("/login");

                options.Events.OnRedirectToLogin = context =>
                {
                    if (context.Request.Path.StartsWithSegments("/api")
                        && context.Response.StatusCode == StatusCodes.Status200OK)
                    {
                        context.Response.Clear();
                        context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                        return Task.FromResult<object>(null);
                    }
                    context.Response.Redirect(context.RedirectUri);
                    return Task.FromResult<object>(null);
                };
            });

            services.AddMvc();
            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });

            var mapperConfig = new AutoMapper.MapperConfiguration(cfg => 
            {
                cfg.CreateMap<User, string>().ConvertUsing(s => {return (s == null) ? null : s.Name;});
                cfg.CreateMap<Device, GetDevicesResponse>();
                cfg.CreateMap<Office, GetOfficesResponse>();
                cfg.CreateMap<Event, GetEventsResponseItem>();
                cfg.CreateMap<User, GetUsersResponse>();
                cfg.CreateMap<Office, GetOfficeResponse>();
            });

            var mapper = mapperConfig.CreateMapper();

            services.AddSingleton(mapper);
            services.AddScoped<IDevicesService, DevicesService>();
            services.AddScoped<IOfficesService, OfficesService>();
            services.AddScoped<IEventsService, EventsService>();
            services.AddScoped<IReservationsService, ReservationsService>();
            services.AddScoped<IUsersService, UsersService>();
            
            ISlackService slackService = new SlackService(Configuration.GetValue<string>("SlackWebhook"));
            services.AddSingleton(slackService);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    /*
                        There is 2 options how to wire .net and react together in development.
                        When using UseReactDevelopmentServer, dotnet launches `npm run`
                            and both dotnet and webpack outputs are shown in a single shell.
                        When using UseProxyToSpaDevelopmentServer, you must launch the frontend
                        yourself in a different shell instance.
                    */
                    spa.UseReactDevelopmentServer(npmScript: "start");
                    //spa.UseProxyToSpaDevelopmentServer("http://localhost:3000");
                }
            });
        }
    }
}
