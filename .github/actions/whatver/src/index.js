import * as core from '@actions/core';

const main = async () => {
    console.log(process.env.TEAMS_CONFIG_PATH);
    console.log(process.env.GITHUB_REPOSITORY_OWNER);    
}
main().catch( err => core.setFailed( err.message ) );