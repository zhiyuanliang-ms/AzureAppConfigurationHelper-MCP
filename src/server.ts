import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function createServer() : McpServer {
    const server = new McpServer({
        name: "azure-appconfiguration-helper",
        version: "1.0.0"
    });
    
    server.tool(
        "get-configuration-provider-overview-url",
        "Returns the Azure App Configuration client libraries overview documentation. AI agent should use web fetch tool to read the page of the URL. AI agent can use this function to provide the URL when asked for the overview of the Azure App Configuration client libraries.",
        async () => ({
            content: [{ type: "text", text: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/configuration-provider-overview" }]
        })
    );

    server.tool(
        "get-configuration-provider-documentation-url",
        "Returns the Azure App Configuration client library documentation in the specified language. AI agent should use web fetch tool to read the page of the URL. AI agent can use this function to provide the URL when asked for the overview of the Azure App Configuration client library. When the AI agent is asked to write any example code about Azure App Configuration, it should reference the documentation and learn about the configuration provider library according to the documentation.",
        { lang: z.string() },
        async ({ lang }) => {
            if (lang == "javascript" || lang == "typescript" || lang == "js" || lang == "ts") {
                return {
                    content: [{ type: "text", text: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-javascript-provider" }]
                }
            }
            return {
                content: [{ type: "text", text: "Language is not supported." }]
            }
        }
    );

    server.tool(
        "get-azure-app-configuration-client-library",
        "Returns the name of the Azure App Configuration client library in the specified language and its documentation (i.e. <package-name>: <documentation-url>). AI agent should use web fetch tool to read the page of the URL.",
        { lang: z.string() },
        async ({ lang }) => {
            if (lang == "javascript" || lang == "typescript" || lang == "js" || lang == "ts") {
                return {
                    content: [{ type: "text", text: "@azure/app-configuration-provider: https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-javascript-provider" }]
                }
            }
            return {
                content: [{ type: "text", text: "Language is not supported." }]
            }
        }
    );

    server.tool(
        "get-feature-management-overview-url",
        "Returns the Azure App Configuration feature management libraries overview documentation. AI agent should use web fetch tool to read the page of the URL. AI agent can use this function to provide the URL when asked for the overview of the Azure App Configuration feature management libraries.",
        async () => ({
            content: [{ type: "text", text: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/feature-management-overview" }]
        })
    );

    server.tool(
        "get-feature-management-documentation-url",
        "Returns the Azure App Configuration feature management documentation in the specified language. AI agent should use web fetch tool to read the page of the URL. AI agent can use this function to provide the URL when asked for the overview of the Azure App Configuration feature management. When the AI agent is asked to write any example code about feature flags or feature management, it should reference the documentation and learn about the feature management library according to the documentation.",
        { lang: z.string() },
        async ({ lang }) => {
            if (lang == "javascript" || lang == "typescript" || lang == "js" || lang == "ts") {
                return {
                    content: [{ type: "text", text: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/feature-management-javascript-reference" }]
                }
            }
            return {
                content: [{ type: "text", text: "Language is not supported." }]
            }
        }
    );

    server.tool(
        "get-feature-management-library",
        "Returns the name of the Azure App Configuration feature management library in the specified language and its documentation (i.e. <package-name>: <documentation-url>). AI agent should use web fetch tool to read the page of the URL.",
        { lang: z.string() },
        async ({ lang }) => {
            if (lang == "javascript" || lang == "typescript" || lang == "js" || lang == "ts") {
                return {
                    content: [{ type: "text", text: "@microsoft/feature-management: https://learn.microsoft.com/en-us/azure/azure-app-configuration/feature-management-javascript-reference" }]
                }
            }
            return {
                content: [{ type: "text", text: "Language is not supported." }]
            }
        }
    );
    
    return server;
}