using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllersWithViews();
builder.Services.AddSwaggerGen(c =>
{
    c.AddServer(new OpenApiServer
    {
        Description = "Development Server",
        Url = "https://localhost:7256"
    });

    c.CustomOperationIds(e => $"{e.ActionDescriptor.RouteValues["action"] + e.ActionDescriptor.RouteValues["controller"]}");
});

var app = builder.Build();

app.UseCors(builder => builder.WithOrigins("*"));
app.UseSwagger().UseSwaggerUI();
if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
