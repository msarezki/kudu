﻿namespace Kudu.Core
{
    public interface IEnvironment
    {
        string RootPath { get; }                // e.g. /
        string SiteRootPath { get; }            // e.g. /site
        string RepositoryPath { get; }          // e.g. /site/repository
        string WebRootPath { get; }             // e.g. /site/wwwroot
        string DeploymentsPath { get; }         // e.g. /site/deployments
        string DeploymentToolsPath { get; }     // e.g. /site/deployments/tools
        string DiagnosticsPath { get; }         // e.g. /site/diagnostics
        string SSHKeyPath { get; }
        string TempPath { get; }
        string ScriptPath { get; }
        string NodeModulesPath { get; }
        string LogFilesPath { get; }            // e.g. /logfiles
        string TracePath { get; }               // e.g. /logfiles/git/trace
        string DeploymentTracePath { get; }     // e.g. /logfiles/git/deployment
    }
}
