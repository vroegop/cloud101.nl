#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Cloud101NlStack } from '../lib/cloud101.nl-stack';
import {Cloud101GlobalStack} from "../lib/cloud101.global-stack";
import {Cloud101PipelineStack} from "../lib/cloud101-pipeline-stack";

const app = new cdk.App();

new Cloud101PipelineStack(app, 'Cloud101PipelineStack', {
    env: { region: 'eu-west-1', account: '531843824238' },
});