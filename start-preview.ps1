param(
  [ValidateRange(1, 65535)]
  [int]$Port = 4173
)

$systemNode = Get-Command node -ErrorAction SilentlyContinue
$bundledNode = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'

if ($systemNode) {
  $nodeExecutable = $systemNode.Source
} elseif (Test-Path -LiteralPath $bundledNode) {
  $nodeExecutable = $bundledNode
} else {
  throw 'Node.js 22 or newer is required. Install Node.js from https://nodejs.org/ and run this script again.'
}

$env:PORT = [string]$Port
$serverScript = Join-Path $PSScriptRoot 'scripts\dev.mjs'

Write-Host "Portfolio preview: http://127.0.0.1:$Port/"
Write-Host 'Press Ctrl+C to stop the preview server.'

& $nodeExecutable $serverScript
exit $LASTEXITCODE
