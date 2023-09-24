import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Cloud101NlStack } from '../lib/cloud101.nl-stack';
import {Certificate} from "aws-cdk-lib/aws-certificatemanager";
import {Cloud101PipelineStack} from "../lib/cloud101-pipeline-stack";

test('S3 Bucket Created', () => {
    const app = new App();
    const stack = new Cloud101NlStack(app, 'TestStack', {
        cloudfrontCertificate: { certificateArn: 'arn:aws:fake:us-east-1:123456789012:example-fakename' } as Certificate,
        env: { region: 'eu-west-1', account: '531843824238' }
    });

    const template = Template.fromStack(stack);

    template.hasResource('AWS::S3::Bucket', {});
});

test('CloudFront Distribution Created', () => {
    const app = new App();
    const stack = new Cloud101NlStack(app, 'TestStack', {
        cloudfrontCertificate: { certificateArn: 'arn:aws:fake:us-east-1:123456789012:example-fakename' } as Certificate,
        env: { region: 'eu-west-1', account: '531843824238' }
    });

    const template = Template.fromStack(stack);

    template.hasResource('AWS::CloudFront::Distribution', {});
});

test('Route53 A Record Created for CloudFront Distribution', () => {
    const app = new App();
    const stack = new Cloud101NlStack(app, 'TestStack', {
        cloudfrontCertificate: { certificateArn: 'arn:aws:fake:us-east-1:123456789012:example-fakename' } as Certificate,
        env: { region: 'eu-west-1', account: '531843824238' }
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
        Type: 'A',
    });
});