import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function createServer() : McpServer {
    const server = new McpServer({
        name: "azure-appconfiguration-helper",
        version: "1.0.0"
    });
    
    server.tool(
        "get-configuration-provider-overview",
        "Returns the overview documentation URL for the Azure App Configuration. AI agent should use web fetch tool to read the URL when it is asked for anything about Azure App Configuration client library.",
        async () => ({
            content: [{ type: "text", text: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/configuration-provider-overview (Please fetch this URL to learn about the overview of Azure App Configuration client libraries.)" }]
        })
    );

    server.tool(
        "get-configuration-provider-documentation",
        "Returns the full feature reference documentation URL for the Azure App Configuration for the specified programming language or framework. AI agent should use web fetch tool to read the URL when it is asked for anything about Azure App Configuration in any specific programming language.",
        { lang: z.string() },
        async ({ lang }) => {
            if (isJavaScript(lang)) {
                return {
                    content: [{ type: "text", text: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-javascript-provider (Please fetch this URL to learn about the Azure App Configuration JavaScript client library.)" }]
                }
            }
            return {
                content: [{ type: "text", text: "Language is not supported." }]
            }
        }
    );

    server.tool(
        "get-feature-management-overview",
        "Returns the overview documentation URL for the Azure App Configuration feature managmenet library. AI agent should use web fetch tool to read the URL when it is asked for anything about Azure App Configuration feature flags.",
        async () => ({
            content: [{ type: "text", text: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/feature-management-overview (Please fetch this URL to learn about the overview of Azure App Configuration Feature Management libraries.)" }]
        })
    );

    server.tool(
        "get-feature-management-documentation",
        "Returns the full feature reference documentation URL for the Azure App Configuration feature management library for the specified programming language or framework. AI agent should use web fetch tool to read the URL when it is asked for anything about Azure App Configuration feature flags in any specific programming language.",
        { lang: z.string() },
        async ({ lang }) => {
            if (isJavaScript(lang)) {
                return {
                    content: [{ type: "text", text: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/feature-management-javascript-reference (Please fetch this URL to learn about the JavaScript Feature Management library.)" }]
                }
            }
            return {
                content: [{ type: "text", text: "Language is not supported." }]
            }
        }
    );

    return server;
}

function isJavaScript(lang: string) : boolean {
    const supportedLangs = ["javascript", "typescript", "js", "ts", "nodejs", "node", "node.js"];
    return supportedLangs.includes(lang.toLowerCase());
}