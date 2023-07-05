const {Client, IntentsBitField} = require('discord.js');
const Haicma = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})
/*MTEyNTkzOTY0MTUxMDU0MzM2MQ.GSN_fH.jGHRsH3t7VdpUc-zC15NpnKPi_OGO3W6bmGCro  token*/

Haicma.login(
    'MTEyNTkzOTY0MTUxMDU0MzM2MQ.GSN_fH.jGHRsH3t7VdpUc-zC15NpnKPi_OGO3W6bmGCro'
);