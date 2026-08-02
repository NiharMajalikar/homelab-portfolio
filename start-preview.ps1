param(
  [ValidateRange(1, 65535)]
  [int]$Port = 4173
)

$systemPnpm = Get-Command pnpm -ErrorAction SilentlyContinue
$bundledPnpm = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd'

if ($systemPnpm) {
  $pnpmExecutable = $systemPnpm.Source
} elseif (Test-Path -LiteralPath $bundledPnpm) {
  $pnpmExecutable = $bundledPnpm
} else {
  throw 'pnpm and Node.js 20.9 or newer are required. Install Node.js, run corepack enable, and try again.'
}

Write-Host "Portfolio preview: http://127.0.0.1:$Port/"
Write-Host 'Press Ctrl+C to stop the preview server.'

& $pnpmExecutable dev --hostname 127.0.0.1 --port $Port
exit $LASTEXITCODE
