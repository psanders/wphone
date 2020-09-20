import { SimpleUser, SimpleUserOptions } from "sip.js/lib/platform/web/index.js";
import { getAudio, getButton, getButtons, getInput, getSpan } from "./utils.js";

const server = process.env.WPHONE_SERVER || 'ws://localhost:5062';
const aor = process.env.WPHONE_AOR || 'sip:1001@sip.local';
const dest = process.env.WPHONE_DEST || 'sip:ast@sip.local';
const authorizationUsername = process.env.WPHONE_AUTH_USERNAME || '1001';
const authorizationPassword = process.env.WPHONE_AUTH_PASSWORD || '1234';

const options: SimpleUserOptions = {
  aor,
  media: {
    local: {
      video: (document.getElementById('localVideo') as HTMLVideoElement)
    },
    remote: {
      video: (document.getElementById('remoteVideo') as HTMLVideoElement)
    }
  },
  userAgentOptions: {
    authorizationPassword,
    authorizationUsername,
  }
};

const simpleUser = new SimpleUser(server, options);
simpleUser.connect()
.then(async(r) => {
  await simpleUser.register()
  await simpleUser.call(dest)
})
.catch(e => console.error(e));

