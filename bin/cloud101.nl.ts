#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Cloud101NlStack } from '../lib/cloud101.nl-stack';
import {Cloud101GlobalStack} from "../lib/cloud101.global-stack";
import {Cloud101PipelineStack} from "../lib/cloud101-pipeline-stack";

const app = new cdk.App();

// Stack for global properties like SSL Certificates
const cloud101GlobalStack = new Cloud101GlobalStack(app, 'Cloud101GlobalStack', {
    env: { region: 'us-east-1', account: '531843824238' },
});

// Stack for cloud101.nl website hosting
new Cloud101NlStack(app, 'Cloud101NlStack', {
    env: { region: 'eu-west-1', account: '531843824238' },
    cloudfrontCertificate: cloud101GlobalStack.cloudfrontCertificate,
    crossRegionReferences: true,
});

new Cloud101PipelineStack(app, 'MyPipelineStack', {
    env: { region: 'eu-west-1', account: '531843824238' },
});