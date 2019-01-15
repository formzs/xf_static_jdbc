Ext.define('TSMINFO.ux.ComboTree', {
	extend : "Ext.form.field.ComboBox",
	alias : 'widget.combotree',
	requires : ["Ext.tree.Panel"],
	selectNodeModel : 'exceptRoot',
	initComponent : function() {
		var self = this;
		self.myValue = '';
		Ext.apply(self, {
					fieldLabel : self.fieldLabel
				});
		self.callParent();
	},
	reset : function() {
		this.myValue = '';
		this.callParent();
		this.applyEmptyText();
	},
	getValue : function() {
		var self = this;
		return self.myValue;
	},
	createPicker : function() {
		var self = this;
		if (!this.tree) {
			this.tree = new Ext.tree.Panel({
						height : this.treeHeight || 300,
						width : this.treeWidth || 200,
						autoScroll : true,
						floating : true,
						focusOnToFront : false,
						shadow : true,
						ownerCt : this.ownerCt,
						useArrows : true,
						store : Ext.create('Ext.data.TreeStore', {
									proxy : {
										type : 'ajax',
										actionMethods : 'POST',
										url : self.url
									},
									fields : [{
												name : this.displayField
											}],
									listeners : {
										load : function() {
											self.oldValue = self.myValue
													.split(',');
											self.oldText = self.getRawValue()
													.split(',');
											if (self.oldText[0] == '') {
												self.oldText = []
											}
											if (self.oldValue[0] == '') {
												self.oldValue = []
											}
										}
									}
								}),
						root : this.root || {
							text : '根节点',
							id : '0',
							expanded : true
						},
						displayField : this.displayField,
						rootVisible : this.rootVisible || true
					});
		}
		this.tree.on('itemclick', function(me, node, index) {
			if (node.get('checked') != null) {
				var checked = !node.get('checked');
				if (self.multiple) {
					node.set('checked', checked);
					var records = self.picker.getView().getChecked(), names = [], values = [];
					if (self.oldValue.length > 0) {
						names = self.oldText;
						values = self.oldValue;
					}
					Ext.Array.each(records, function(rec) {
								var b = true;
								for (var i = 0; i < self.oldValue.length; i++) {
									if (self.oldValue[i] == rec.get('id')) {
										b = false;
										break;
									}
								}
								if (b) {
									names.push(rec
											.get(self.picker.displayField));
									values.push(rec.get('id'));
								}
							});

				} else {
					var records = self.picker.getView().getSelectionModel()
							.getSelection()[0], names = [], values = [];
					Ext.Array.each(self.picker.getView().getChecked(),
							function(rec) {
								rec.set('checked', false);
							});
					node.set('checked', checked);
					if (checked) {
						names.push(node.get(self.picker.displayField));
						values.push(node.get('id'));
					} else {
						names = [];
						values = [];
					}
				}

				self.myValue = values.join(',');
				self.setValue(values.join(','));// 显示值
				self.setRawValue(names.join(','));// 隐藏值
			} else {
				var selModel = self.selectNodeModel;
				var isLeaf = node.isLeaf();

				if ((node == self.picker.getRootNode()) && selModel != 'all') {
					return;
				} else if (selModel == 'folder' && isLeaf) {
					return;
				} else if (selModel == 'leaf' && !isLeaf) {
					return;
				}

				if (self.fireEvent('beforeselect', self, node) !== false) {
					self.myValue = node.get('id');
					self.setValue(node.get('id'));// 显示值
					self.setRawValue(node.get(self.picker.displayField));// 隐藏值
				}
				self.collapse();
			}
		}, this)
		if (this.sift) {
			this.tree.bbar = [
					self.textField = Ext.create('Ext.form.field.Text', {
								fieldLabel : '筛选',
								width : self.width - 95,
								labelWidth : 40,
								listeners : {
									scope : this,
									specialkey : function(text, e) {
										if (e.getKey() == e.ENTER) {
											self.reLoad();
										}
									}
								}
							}), {
						xtype : 'button',
						// icon:'images/icons/zoom.png',
						iconCls : 'find',
						handler : function() {
							self.reLoad();
						}
					}]
		}
		self.picker = this.tree;
		return self.picker;
	},
	reLoad : function() {
		var store = this.getPicker().getStore();
		store.setProxy({
					type : 'ajax',
					actionMethods : 'POST',
					url : this.url,
					extraParams : {
						name : 'test',
						all : this.all,
						query : this.textField.getValue()
					}
				});
		store.load();
	},
	alignPicker : function() {
		var me = this, picker, isAbove, aboveSfx = '-above';
		if (this.isExpanded) {
			picker = me.getPicker();
			if (me.matchFieldWidth) {
				picker.setWidth(me.bodyEl.getWidth());
			}
			if (picker.isFloating()) {
				picker.alignTo(me.inputEl, "", me.pickerOffset);// ""->tl
				isAbove = picker.el.getY() < me.inputEl.getY();
				me.bodyEl[isAbove ? 'addCls' : 'removeCls'](me.openCls
						+ aboveSfx);
				picker.el[isAbove ? 'addCls' : 'removeCls'](picker.baseCls
						+ aboveSfx);
			}
		}
	},
	// onTrigger1Click : function() {
	// this.myText = '';
	// this.myValue = '';
	// this.oldValue = [];
	// this.oldText = [];
	// this.setValue('');
	// this.setRawValue('');
	// var records = this.getPicker().getView().getChecked();
	// Ext.Array.each(records, function(rec) {
	// rec.set('checked', false);
	// });
	// },
	displayField : 'text',
	editable : false,
	queryMode : 'local',
	// trigger1Cls : Ext.baseCSSPrefix + 'form-clear-trigger',
	// trigger2Cls : Ext.baseCSSPrefix + 'x-form-trigger',
	valueField : 'id'
});