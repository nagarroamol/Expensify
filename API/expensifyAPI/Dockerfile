# See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

# This stage is used when running from VS in fast mode (Default for Debug configuration)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base

WORKDIR /app
EXPOSE 8080

# This stage is used to build the service project
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["expensifyAPI/expensifyAPI.csproj", "expensifyAPI/"]
COPY ["expensify.BAL/expensify.BAL.csproj", "expensify.BAL/"]
COPY ["expensify.DAL/expensify.DAL.csproj", "expensify.DAL/"]
RUN dotnet restore "./expensifyAPI/expensifyAPI.csproj"
COPY . .
WORKDIR "/src/expensifyAPI"
RUN dotnet build "./expensifyAPI.csproj" -c $BUILD_CONFIGURATION -o /app/build

# This stage is used to publish the service project to be copied to the final stage
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./expensifyAPI.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# This stage is used in production or when running from VS in regular mode (Default when not using the Debug configuration)
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

ENTRYPOINT ["sh", "-c", "echo 'Waiting for 5 seconds...'; sleep 5; exec dotnet expensifyAPI.dll"]