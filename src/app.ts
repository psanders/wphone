import { SimpleUser, SimpleUserOptions } from "sip.js/lib/platform/web/index.js";
import { getAudio, getButton, getButtons, getInput, getSpan } from "./utils.js";

const server = "wss://edge.sip.onsip.com";
const aor = "sip:echo@sipjs.onsip.com";

const options: SimpleUserOptions = {
  aor,
  media: {
    local: {
      video: (document.getElementById('localVideo') as HTMLVideoElement)
    },
    remote: {
      video: (document.getElementById('remoteVideo') as HTMLVideoElement)
    }
  }
};

const simpleUser = new SimpleUser(server, options);
simpleUser.connect()
.then(r => {
  simpleUser.call('sip:echo@sipjs.onsip.com')
})
.catch(e => console.error(e));

