#!/usr/bin/env node

import chalk from 'chalk'
import boxen, { BorderStyle } from 'boxen'

const options: boxen.Options = {
  padding: 1,
  margin: 1,
  borderStyle: BorderStyle.Round,
}

const data = {
  name: chalk.white('Igor Szyporyn Jørgensen'),
  handle: chalk.cyan('IgorSzyporyn'),
  title: chalk.white('Senior Frontend Developer'),
  workplace: chalk.white('Charlie Tango A/S'),
  twitter: chalk.cyan('https://twitter.com/IgorSzyporyn'),
  github: chalk.cyan('https://github.com/IgorSzyporyn'),
  linkedin: chalk.cyan('https://linkedin.com/in/IgorSzyporyn'),
  npm: chalk.cyan('https://npmjs.org/package/isj'),
  npx: chalk.white('npx isj'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelNpm: chalk.white.bold('        NPM:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelNpmPackages: chalk.white.bold('  NPM Packages:'),
  npmStorybookFacelift: chalk.cyan('https://npmjs.org/package/storybook-facelift'),
  npmReactTimeoutButton: chalk.cyan('                 https://npmjs.org/package/react-timeout-button'),
  npmEnvOverlay: chalk.cyan('                 https://npmjs.org/package/env-overlay'),
}

const newline = '\n'
const heading = `${data.name}`
const title = `${data.title}`
const workplace = `${data.workplace}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelNpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`

const output =
  heading +
  newline +
  title +
  newline +
  workplace + 
  newline +
  newline +
  newline +
  githubing +
  newline +
  npming +
  newline +
  linkedining +
  newline +
  twittering 

console.log(chalk.green(boxen(output, options)))