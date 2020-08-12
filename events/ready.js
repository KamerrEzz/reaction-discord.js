const fs = require("fs");
exports.run = async (client, message) => {
    client.user.setStatus("online")

    console.log('===================')
    console.log('[NAME]: ' + client.user.tag)
    console.log('[ID]: ' + client.user.id)
    console.log('[CREADO]: ' + client.user.createdAt.toLocaleString())
    console.log('===================')
}