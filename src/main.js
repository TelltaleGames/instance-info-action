// Copyright (c) 2021 Telltale Games. All rights reserved.
// See LICENSE for usage, modification, and distribution terms.
const core = require('@actions/core');
const github = require('@actions/github');

async function get_info() {
    let instanceId = await ((await fetch("http://169.254.169.254/latest/meta-data/instance-id")).text());
    let region = await ((await fetch("http://169.254.169.254/latest/meta-data/placement/region")).text());
    core.info(`Instance Id: ${instanceId}`);
    core.info(`Region: ${region}`);
    core.info(`Connect: https://${region}.console.aws.amazon.com/systems-manager/session-manager/${instanceId}`);
}

async function start() {
    try {
        await get_info();
    } catch(error) {
        // Not an error, as we don't want to fail a build on a non-aws builder.
        core.info(`Get Instance failure`);
        core.info(error.message);
        //core.setFailed(error.message);
    }
}

start();
