const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');

async function get_info() {
    let instanceId = await ((await fetch("http://169.254.169.254/latest/meta-data/instance-id")).text());
    let region = await ((await fetch("http://169.254.169.254/latest/meta-data/placement/region")).text());
    core.info(`Instance Id: ${instanceId}`);
    core.info(`Region: ${region}`);
    core.info(`Connect: https://${region}.console.aws.amazon.com/systems-manager/session-manager/${instanceId}`);
}

try {
    get_info();
} catch(error) {
    core.setFailed(error.message);
}
