const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');

async function get_info() {
    let instanceId = ((await fetch("http://169.254.169.254/latest/meta-data/instance-id")).text());
    core.info(`Instance Id: ${instanceId}`);
}

try {
    get_info();
} catch(error) {
    core.setFailed(error.message);
}
