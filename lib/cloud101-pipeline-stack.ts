import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import {Cloud101NlStack} from "./cloud101.nl-stack";
import {Cloud101GlobalStack} from "./cloud101.global-stack";

export class Cloud101PipelineStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const pipeline = new CodePipeline(this, 'Cloud101Pipeline', {
            pipelineName: 'Cloud101Pipeline',
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.gitHub('vroegop/cloud101.nl', 'main'),
                commands: ['npm ci', 'npm run build', 'npx cdk synth']
            })
        });

        pipeline.addStage(new Cloud101PipelineStage(this, "deployCloud101", {
            env: { region: 'eu-west-1', account: '531843824238' },
        }));
    }
}

export class Cloud101PipelineStage extends cdk.Stage {

    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
        super(scope, id, props);

        const cloud101Global = new Cloud101GlobalStack(this, 'Cloud101GlobalStack', {
            env: { region: 'us-east-1', account: '531843824238' },
        });

        const cloud101 = new Cloud101NlStack(this, 'Cloud101NlStack', {
            env: { region: 'eu-west-1', account: '531843824238' },
            cloudfrontCertificate: cloud101Global.cloudfrontCertificate,
            crossRegionReferences: true,
        });
    }
}
