import {App} from "aws-cdk-lib";
import {Cloud101PipelineStack} from "../lib/cloud101-pipeline-stack";
import {Template} from "aws-cdk-lib/assertions";


test('Pipeline is created', () => {
    const app = new App();
    const stack = new Cloud101PipelineStack(app, 'TestStack', {
        env: { region: 'eu-west-1', account: '531843824238' }
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CodePipeline::Pipeline', {});
});