import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Cloud101GlobalStack } from '../lib/cloud101.global-stack';

test('Certificate Created for cloud101.nl', () => {
    const app = new App();
    const stack = new Cloud101GlobalStack(app, 'TestStack', {
        env: { region: 'us-east-1', account: '531843824238' }
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CertificateManager::Certificate', {
        DomainName: 'cloud101.nl',
    });
});