# AzureAppConfigurationHelper-MCP

[![azure-appconfiguration-helper-mcp](https://img.shields.io/npm/v/azure-appconfiguration-helper-mcp?label=azure-appconfiguration-helper-mcp)](https://www.npmjs.com/package/azure-appconfiguration-helper-mcp)

An MCP server that helps people develop application with Azure App Configuration.

## Usage

### VS Code insider

```json
"mcp": {
    "inputs": [],
    "servers": {
        "azure-appconfig-helper": {
            "command":"cmd", 
            "args": [
                "/c",
                "npx",
                "-y",
                "azure-appconfiguration-helper-mcp"
            ]
        }
    }
}
```

### npx issue on Widnows

On Windows, [MCP servers may fail to connect with `npx`](https://github.com/modelcontextprotocol/servers/issues/40).

To workaround, use `cmd /c npx` instead of `npx`

```json
{
  "mcp": {
    "inputs": [],
    "servers": {
      "mcp-server-code-runner": {
        "command": "cmd",
        "args": [
          "/c",
          "npx",
          "-y",
          "azure-appconfiguration-helper-mcp"
        ],
      }
    }
  }
}
```