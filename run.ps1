param(
    [Parameter(Mandatory=$false)]
    [ValidateSet("all", "web", "api", "admin", "frontend", "backend", "web-api", "admin-api")]
    [string]$Mode
)

$ErrorActionPreference = "Stop"

# Function to run a command in a new terminal window
function Start-App {
    param([string]$Name, [string]$Command)

    Write-Host "Opening $Name in new terminal..." -ForegroundColor Green

    # Get the current directory
    $currentDir = Get-Location

    # Create a temporary script file
    $tempScript = [System.IO.Path]::GetTempFileName() + ".ps1"

    # Build script content
    $scriptLines = @(
        "try {",
        "    Set-Location '$currentDir'",
        "    Write-Host 'Starting $Name...' -ForegroundColor Green",
        "    Write-Host 'Command: $Command' -ForegroundColor Yellow",
        "    Write-Host ''",
        "    ",
        "    # Ensure pnpm is available",
        "    `$pnpmPath = Get-Command pnpm -ErrorAction SilentlyContinue",
        "    if (-not `$pnpmPath) {",
        "        Write-Host 'pnpm not found in PATH. Please install pnpm or add it to your PATH.' -ForegroundColor Red",
        "        Read-Host 'Press Enter to exit'",
        "        exit 1",
        "    }",
        "    ",
        "    Invoke-Expression '$Command'",
        "} catch {",
        "    Write-Host `"Error starting $Name`: `$_`" -ForegroundColor Red",
        "    Read-Host 'Press Enter to exit'",
        "} finally {",
        "    Read-Host 'Press Enter to close this window'",
        "}"
    )

    $scriptContent = $scriptLines -join "`r`n"
    $scriptContent | Out-File -FilePath $tempScript -Encoding UTF8

    # Start new PowerShell window with explicit working directory
    Start-Process powershell.exe -ArgumentList "-NoExit", "-Command", "& '$tempScript'" -WorkingDirectory $currentDir -WindowStyle Normal
}

# Function to show usage
function Show-Usage {
    Write-Host "Usage: .\run.ps1 [-Mode] <mode>" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Modes:" -ForegroundColor Cyan
    Write-Host "  all       - Run all apps in separate windows (web, api, admin)"
    Write-Host "  web       - Run web app in new window (port 3000)"
    Write-Host "  api       - Run API server in new window (port 4000)"
    Write-Host "  admin     - Run admin dashboard in new window (port 3001)"
    Write-Host "  frontend  - Run web + admin in separate windows (ports 3000, 3001)"
    Write-Host "  backend   - Run API server in new window (port 4000)"
    Write-Host "  web-api   - Run web + API in separate windows (ports 3000, 4000)"
    Write-Host "  admin-api - Run admin + API in separate windows (ports 3001, 4000)"
    Write-Host ""
    Write-Host "Examples:" -ForegroundColor Magenta
    Write-Host "  .\run.ps1 -Mode all"
    Write-Host "  .\run.ps1 -Mode web"
    Write-Host "  .\run.ps1 frontend"
}

# Main logic
if (-not $Mode) {
    Show-Usage
    exit 1
}

switch ($Mode) {
    "all" {
        Write-Host "Starting all applications..." -ForegroundColor Green
        Write-Host ""

        Start-App "Web App" "pnpm --filter ./apps/web dev"
        Start-App "API Server" "pnpm --filter ./apps/api dev"
        Start-App "Admin Dashboard" "pnpm --filter ./apps/admin dev"
    }

    "web" {
        Write-Host "Starting web application..." -ForegroundColor Green
        Start-App "Web App" "pnpm --filter ./apps/web dev"
    }

    "api" {
        Write-Host "Starting API server..." -ForegroundColor Green
        Start-App "API Server" "pnpm --filter ./apps/api dev"
    }

    "admin" {
        Write-Host "Starting admin dashboard..." -ForegroundColor Green
        Start-App "Admin Dashboard" "pnpm --filter ./apps/admin dev"
    }

    "frontend" {
        Write-Host "Starting frontend applications (Web + Admin)..." -ForegroundColor Green
        Write-Host ""

        Start-App "Web App" "pnpm --filter ./apps/web dev"
        Start-App "Admin Dashboard" "pnpm --filter ./apps/admin dev"
    }

    "backend" {
        Write-Host "Starting backend (API server)..." -ForegroundColor Green
        Start-App "API Server" "pnpm --filter ./apps/api dev"
    }

    "web-api" {
        Write-Host "Starting web + API..." -ForegroundColor Green
        Write-Host ""

        Start-App "Web App" "pnpm --filter ./apps/web dev"
        Start-App "API Server" "pnpm --filter ./apps/api dev"
    }

    "admin-api" {
        Write-Host "Starting admin + API..." -ForegroundColor Green
        Write-Host ""

        Start-App "Admin Dashboard" "pnpm --filter ./apps/admin dev"
        Start-App "API Server" "pnpm --filter ./apps/api dev"
    }

    default {
        Show-Usage
        exit 1
    }
}

Write-Host ""
Write-Host "All selected applications are starting in separate terminal windows!" -ForegroundColor Green
Write-Host "Each app will open in its own PowerShell window." -ForegroundColor Cyan
Write-Host "This window will close automatically in 5 seconds..." -ForegroundColor Yellow

# Wait 5 seconds then exit
Start-Sleep -Seconds 5
exit 0