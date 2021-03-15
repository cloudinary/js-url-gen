(function(options, enabled, $){

	function AccessFilter(){
		if (!(this instanceof AccessFilter)) return new AccessFilter();
		this.$toggleInherited = $();
		this.$togglePublic = $();
		this.$toggleProtected = $();
		this.$togglePrivate = $();
		this.inherited = false;
		this.public = false;
		this.protected = false;
		this.private = false;
	}

	$.extend(AccessFilter.prototype, {
		init: function(){
			var self = this;
			self.$toggleInherited = $(".access-filter .toggle-inherited").on('change', {self: self}, self.onInheritedChanged);
			self.setInherited();
			self.$togglePublic = $(".access-filter .toggle-public").on('change', {self: self}, self.onPublicChanged);
			self.setPublic();
			self.$toggleProtected = $(".access-filter .toggle-protected").on('change', {self: self}, self.onProtectedChanged);
			self.setProtected();
			self.$togglePrivate = $(".access-filter .toggle-private").on('change', {self: self}, self.onPrivateChanged);
			self.setPrivate();
		},
		setInherited: function(){
			var self = this;
			if (self.$toggleInherited.length > 0){
				self.inherited = self.$toggleInherited.prop("checked");
				var $elem = $(".symbol-title.inherited,.symbol-details.inherited,li.inherited");
				if (self.inherited && !self.public){
					$elem = $elem.not('.public');
				}
				if (self.inherited && !self.protected){
					$elem = $elem.not('.protected');
				}
				if (self.inherited && !self.private){
					$elem = $elem.not('.private');
				}
				$elem = $elem.add($elem.filter(".symbol-title").prev("hr"));
				$elem.toggle(self.inherited);
				self.$toggleInherited.closest(".checkbox-inline").toggleClass("checked", self.inherited);
			}
		},
		setPublic: function(){
			var self = this;
			if (self.$togglePublic.length > 0){
				self.public = self.$togglePublic.prop("checked");
				var $elem = $(".symbol-title.public,.symbol-details.public,li.public");
				if (!self.inherited){
					$elem = $elem.not('.inherited');
				}
				$elem = $elem.add($elem.filter(".symbol-title").prev("hr"));
				$elem.toggle(self.public);
				self.$togglePublic.closest(".checkbox-inline").toggleClass("checked", self.public);
			}
		},
		setProtected: function(){
			var self = this;
			if (self.$toggleProtected.length > 0){
				self.protected = self.$toggleProtected.prop("checked");
				var $elem = $(".symbol-title.protected,.symbol-details.protected,li.protected");
				if (!self.inherited){
					$elem = $elem.not('.inherited');
				}
				$elem = $elem.add($elem.filter(".symbol-title").prev("hr"));
				$elem.toggle(self.protected);
				self.$toggleProtected.closest(".checkbox-inline").toggleClass("checked", self.protected);
			}
		},
		setPrivate: function(){
			var self = this;
			if (self.$togglePrivate.length > 0){
				self.private = self.$togglePrivate.prop("checked");
				var $elem = $(".symbol-title.private,.symbol-details.private,li.private");
				if (!self.inherited){
					$elem = $elem.not('.inherited');
				}
				$elem = $elem.add($elem.filter(".symbol-title").prev("hr"));
				$elem.toggle(self.private);
				self.$togglePrivate.closest(".checkbox-inline").toggleClass("checked", self.private);
			}
		},
		onInheritedChanged: function(e){
			e.data.self.setInherited();
		},
		onPublicChanged: function(e){
			e.data.self.setPublic();
		},
		onProtectedChanged: function(e){
			e.data.self.setProtected();
		},
		onPrivateChanged: function(e){
			e.data.self.setPrivate();
		}
	});

	$(function(){

		if (enabled){
			var filter = new AccessFilter();
			filter.init();
		}

	});

})(window.TEMPLATE_OPTIONS, window.DOCLET_AFILTER_ENABLED, jQuery);