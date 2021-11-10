const { VK } = require('vk-io');
const { HearManager } = require('@vk-io/hear');

const vk = new VK({
	token: '2f86fabdf2ae0bb908240b8382dfcd229e3277b158a176f05387238431a17097c5d0e97a47828d5f2d2d8'
});

const hearManager = new HearManager();

vk.updates.on('message_new', hearManager.middleware);

hearManager.hear('/php', async (context) => {
	if (context.senderId === 165821176) {
		return context.send("Ваша совместимость с PHP 0%");
	} else if (context.senderId === 542975168) {
		return context.send("Ваша совместимость с PHP 1001%");
	} else {
		percent = 100;
		await context.send("Ваша совместимость с PHP " + Math.floor(Math.random() * 101) + "%");
	}
});

vk.updates.start().catch(console.error);