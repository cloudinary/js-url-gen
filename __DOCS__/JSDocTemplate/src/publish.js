var template = require('./utils/template');
exports.publish = function(taffyData, opts, tutorials){
	template.configure(taffyData, opts, tutorials);
	template.postProcess();
	template.publish();
};