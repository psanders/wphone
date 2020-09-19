import { SimpleUser, SimpleUserOptions } from "sip.js/lib/platform/web/index.js";
import { getAudio, getButton, getButtons, getInput, getSpan } from "./utils.js";

const server = 'ws://localhost:5062';
const aor = 'sip:1002@sip.local';
const authorizationUsername = '1002';
const authorizationPassword = '1234';

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
  await simpleUser.call('sip:ast@sip.local')
})
.catch(e => console.error(e));

