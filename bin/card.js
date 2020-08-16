#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var boxen_1 = __importStar(require("boxen"));
var options = {
    padding: 1,
    margin: 1,
    borderStyle: "round" /* Round */,
};
var data = {
    name: chalk_1.default.white('Igor Szyporyn Jørgensen'),
    handle: chalk_1.default.cyan('IgorSzyporyn'),
    title: chalk_1.default.white('Senior Frontend Developer'),
    workplace: chalk_1.default.white('Charlie Tango A/S'),
    twitter: chalk_1.default.cyan('https://twitter.com/IgorSzyporyn'),
    github: chalk_1.default.cyan('https://github.com/IgorSzyporyn'),
    linkedin: chalk_1.default.cyan('https://linkedin.com/in/igor-szyporyn-jørgensen-2a041418/'),
    npx: chalk_1.default.white('npx isj'),
    labelTwitter: chalk_1.default.white.bold('       Twitter:'),
    labelGitHub: chalk_1.default.white.bold('        GitHub:'),
    labelLinkedIn: chalk_1.default.white.bold('      LinkedIn:'),
    labelCard: chalk_1.default.white.bold('          Card:'),
    labelNpm: chalk_1.default.white.bold('  NPM Packages:'),
    npmStorybookFacelift: chalk_1.default.cyan('https://npmjs.org/package/storybook-facelift'),
    npmReactTimeoutButton: chalk_1.default.cyan('                 https://npmjs.org/package/react-timeout-button'),
    npmEnvOverlay: chalk_1.default.cyan('                 https://npmjs.org/package/env-overlay'),
};
var newline = '\n';
var heading = "" + data.name;
var title = "" + data.title;
var workplace = "" + data.workplace;
var twittering = data.labelTwitter + "  " + data.twitter;
var githubing = data.labelGitHub + "  " + data.github;
var linkedining = data.labelLinkedIn + "  " + data.linkedin;
var npm = data.labelNpm + "  " + data.npmStorybookFacelift;
var npmReactTimeoutButton = data.npmReactTimeoutButton;
var npmEnvOverlay = data.npmEnvOverlay;
var output = heading +
    newline +
    title +
    newline +
    workplace +
    newline +
    newline +
    newline +
    twittering +
    newline +
    githubing +
    newline +
    linkedining +
    newline +
    newline +
    npm +
    newline +
    npmReactTimeoutButton +
    newline +
    npmEnvOverlay;
console.log(chalk_1.default.green(boxen_1.default(output, options)));
