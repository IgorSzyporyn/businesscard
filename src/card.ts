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
  linkedin: chalk.cyan('https://linkedin.com/in/igor-szyporyn-jørgensen-2a041418/'),
  npx: chalk.white('npx isj'),
  labelTwitter: chalk.white.bold('       Twitter:'),
  labelGitHub: chalk.white.bold('        GitHub:'),
  labelLinkedIn: chalk.white.bold('      LinkedIn:'),
  labelCard: chalk.white.bold('          Card:'),
  labelNpm: chalk.white.bold('  NPM Packages:'),
  npmStorybookFacelift: chalk.cyan('https://npmjs.org/package/storybook-facelift'),
  npmReactTimeoutButton: chalk.cyan('                 https://npmjs.org/package/react-timeout-button'),
  npmEnvOverlay: chalk.cyan('                 https://npmjs.org/package/env-overlay'),
}

const newline = '\n'
const heading = `${data.name}`
const title = `${data.title}`
const workplace = `${data.workplace}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const npm = `${data.labelNpm}  ${data.npmStorybookFacelift}`
const npmReactTimeoutButton = data.npmReactTimeoutButton
const npmEnvOverlay = data.npmEnvOverlay

const output =
  heading +
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
  npmEnvOverlay

console.log(chalk.green(boxen(output, options)))