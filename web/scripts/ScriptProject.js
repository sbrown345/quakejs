(function() {
	////////////////////////////////////////////////////////////////////////////////
	// System.Windows.Application
	global.get_resources = function() {
		return $1$ResourcesField;
	};
	global.set_resources = function(value) {
		$1$ResourcesField = value;
	};
	global.getResourceStream = function(uriResource) {
		if (!get_resources().containsKey(uriResource.toString())) {
			return null;
		}
		var arrayBuffer = get_resources().get_item(uriResource.toString());
		var stream = new Stream(arrayBuffer);
		return new $System_Windows_Resources_StreamResourceInfo(stream, null);
	};
	global.setResourceStream = function(key, arrayBuffer) {
		get_resources().set_item('InnoveWare;component/' + key, arrayBuffer);
	};
	////////////////////////////////////////////////////////////////////////////////
	// ScriptProject.Program
	global.main = function() {
	};
	global.initGame = function() {
		var page = new $InnoveWare_Page();
		page.page_Loaded();
	};
	////////////////////////////////////////////////////////////////////////////////
	// Window
	var $Window = function() {
	};
	////////////////////////////////////////////////////////////////////////////////
	// Helper.helper
	var $Helper_helper = function() {
	};
	$Helper_helper.getc = function(file) {
		return file.stream.readByte();
	};
	$Helper_helper.fread = function(data, size, count, file) {
		var reader = new $System_IO_BinaryReader(file.stream);
		data.$ = ((size === 4) ? reader.readSingle() : reader.readDouble());
		return count;
	};
	$Helper_helper.fread$1 = function(data, size, count, file) {
		var reader = new $System_IO_BinaryReader(file.stream);
		data.$ = reader.readInt32();
		return count;
	};
	$Helper_helper.fread$2 = function(data, size, count, file) {
		var reader = new $System_IO_BinaryReader(file.stream);
		var buf = reader.$readBytes(size);
		$System_Buffer.blockCopy$1(buf, 0, data, 0, size);
		return count;
	};
	$Helper_helper.fseek = function(file, position, seek) {
		file.stream.seek(position, 0);
	};
	$Helper_helper.fclose = function(file) {
		file.stream.close();
		file.stream = null;
		file = null;
	};
	$Helper_helper.rand = function() {
		return $Helper_helper.$r.next();
	};
	////////////////////////////////////////////////////////////////////////////////
	// Helper.helper.ByteBuffer
	var $Helper_helper$ByteBuffer = function(buf) {
		$Helper_helper$ByteBuffer.$ctor3.call(this, buf.buffer, buf.ofs);
	};
	$Helper_helper$ByteBuffer.prototype = {
		get_item: function(index) {
			return this.buffer[this.ofs + index];
		},
		set_item: function(index, value) {
			this.buffer[this.ofs + index] = value;
		},
		add: function(ofs) {
			this.ofs += ofs;
		},
		sub: function(ofs) {
			this.ofs -= ofs;
		}
	};
	$Helper_helper$ByteBuffer.$ctor1 = function(buffer) {
		$Helper_helper$ByteBuffer.$ctor3.call(this, buffer, 0);
	};
	$Helper_helper$ByteBuffer.$ctor2 = function(buf, ofs) {
		$Helper_helper$ByteBuffer.$ctor3.call(this, buf.buffer, buf.ofs + ofs);
	};
	$Helper_helper$ByteBuffer.$ctor3 = function(buffer, ofs) {
		this.buffer = null;
		this.ofs = 0;
		this.buffer = buffer;
		this.ofs = ofs;
	};
	$Helper_helper$ByteBuffer.$ctor1.prototype = $Helper_helper$ByteBuffer.$ctor2.prototype = $Helper_helper$ByteBuffer.$ctor3.prototype = $Helper_helper$ByteBuffer.prototype;
	$Helper_helper$ByteBuffer.op_Addition = function(obj, ofs) {
		return new $Helper_helper$ByteBuffer.$ctor3(obj.buffer, obj.ofs + ofs);
	};
	$Helper_helper$ByteBuffer.op_GreaterThanOrEqual = function(obj1, obj2) {
		return obj1.ofs >= obj2.ofs;
	};
	$Helper_helper$ByteBuffer.op_LessThanOrEqual = function(obj1, obj2) {
		return obj1.ofs <= obj2.ofs;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Helper.helper.FILE
	var $Helper_helper$FILE = function() {
		this.stream = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Helper.helper.ObjectBuffer
	var $Helper_helper$ObjectBuffer = function(buffer, ofs) {
		this.buffer = null;
		this.ofs = 0;
		this.buffer = buffer;
		this.ofs = ofs;
	};
	$Helper_helper$ObjectBuffer.prototype = {
		get_item: function(index) {
			return this.buffer[this.ofs + index];
		},
		set_item: function(index, value) {
			this.buffer[this.ofs + index] = value;
		}
	};
	$Helper_helper$ObjectBuffer.op_Addition = function(obj, ofs) {
		obj.ofs += ofs;
		return obj;
	};
	$Helper_helper$ObjectBuffer.op_Subtraction = function(obj, ofs) {
		obj.ofs -= ofs;
		return obj;
	};
	$Helper_helper$ObjectBuffer.op_GreaterThanOrEqual = function(obj1, obj2) {
		return obj1.ofs >= obj2.ofs;
	};
	$Helper_helper$ObjectBuffer.op_LessThanOrEqual = function(obj1, obj2) {
		return obj1.ofs <= obj2.ofs;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Helper.helper.UIntBuffer
	var $Helper_helper$UIntBuffer = function(buffer, ofs) {
		this.buffer = null;
		this.ofs = 0;
		this.buffer = buffer;
		this.ofs = ofs;
	};
	$Helper_helper$UIntBuffer.prototype = {
		get_item: function(index) {
			return this.buffer[this.ofs + index];
		},
		set_item: function(index, value) {
			this.buffer[this.ofs + index] = value;
		}
	};
	$Helper_helper$UIntBuffer.op_Addition = function(obj, ofs) {
		obj.ofs += ofs;
		return obj;
	};
	$Helper_helper$UIntBuffer.op_Subtraction = function(obj, ofs) {
		obj.ofs -= ofs;
		return obj;
	};
	$Helper_helper$UIntBuffer.op_GreaterThanOrEqual = function(obj1, obj2) {
		return obj1.ofs >= obj2.ofs;
	};
	$Helper_helper$UIntBuffer.op_LessThanOrEqual = function(obj1, obj2) {
		return obj1.ofs <= obj2.ofs;
	};
	////////////////////////////////////////////////////////////////////////////////
	// InnoveWare.Page
	var $InnoveWare_Page = function() {
		this.$oldtime = 0;
		this.$1$parentCanvasField = null;
		this.$1$imageField = null;
		this.set_parentCanvas(new $System_Windows_Controls_Canvas());
		$InnoveWare_Page.thePage = this;
		this.set_image(new $System_Windows_Controls_Image());
		$InnoveWare_Page.stats = new Stats();
		$InnoveWare_Page.stats.setMode(0);
		$('body').append($InnoveWare_Page.stats.domElement);
	};
	$InnoveWare_Page.prototype = {
		get_parentCanvas: function() {
			return this.$1$parentCanvasField;
		},
		set_parentCanvas: function(value) {
			this.$1$parentCanvasField = value;
		},
		get_image: function() {
			return this.$1$imageField;
		},
		set_image: function(value) {
			this.$1$imageField = value;
		},
		page_Loaded: function() {
			// hardcode for now
			$InnoveWare_Page.gwidth = 800;
			//(int)Application.Current.Host.Content.ActualWidth; //if this is bigger it was crashing because it was larger than 1024 and some buffer didn't liek it
			$InnoveWare_Page.gheight = 600;
			// (int)Application.Current.Host.Content.ActualHeight;
			// Initialize Quake.
			this.$oldtime = $quake_sys_linux.sys_FloatTime();
			$quake_sys_linux.main(0, null);
			// Game loop.
			this.$page_CompositionTarget_Rendering();
		},
		$page_CompositionTarget_Rendering: function() {
			$InnoveWare_Page.stats.begin();
			// Synchronize the Silverlight UI thread to Quake framerate.
			var newtime = $quake_sys_linux.sys_FloatTime();
			var time = newtime - this.$oldtime;
			$quake_host.host_Frame(time);
			this.$oldtime = newtime;
			window.requestAnimationFrame(Function.mkdel(this, this.$page_CompositionTarget_Rendering));
			$InnoveWare_Page.stats.end();
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Missing.ArrayHelpers
	var $Missing_ArrayHelpers = function() {
	};
	$Missing_ArrayHelpers.explcitDoubleArray = function(length) {
		var arr = new Array(length);
		for (var i = 0; i < arr.length; i++) {
			arr[i] = 0;
		}
		return arr;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.client.kbutton_t
	var $quake_$client$kbutton_t = function() {
		this.$down = new Array(2);
		this.$state = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.cmd.cmd_function_t
	var $quake_$cmd$cmd_function_t = function() {
		this.$next = null;
		this.$name = null;
		this.$function = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.cmd.cmdalias_t
	var $quake_$cmd$cmdalias_t = function() {
		this.$next = null;
		this.$name = $System_StringExtensions.stringOfLength($quake_cmd.$maX_ALIAS_NAME);
		this.$value = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.common.dpackfile_t
	var $quake_$common$dpackfile_t = function() {
		this.$name = null;
		this.$filepos = 0;
		this.$filelen = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.common.dpackheader_t
	var $quake_$common$dpackheader_t = function() {
		this.$id = null;
		this.$dirofs = 0;
		this.$dirlen = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.common.pack_t
	var $quake_$common$pack_t = function() {
		this.$filename = null;
		this.$handle = 0;
		this.$numfiles = 0;
		this.$files = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.common.packfile_t
	var $quake_$common$packfile_t = function() {
		this.$name = null;
		this.$filepos = 0;
		this.$filelen = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.common.searchpath_t
	var $quake_$common$searchpath_t = function() {
		this.$filename = null;
		this.$pack = null;
		this.$next = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.rectdesc_t
	var $quake_$draw$rectdesc_t = function() {
		this.$rect = new $quake_vid$vrect_t();
		this.$width = 0;
		this.$height = 0;
		this.$ptexbytes = null;
		this.$rowbytes = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.keys.keyname_t
	var $quake_$keys$keyname_t = function(name, keynum) {
		this.$name = null;
		this.$keynum = 0;
		this.$name = name;
		this.$keynum = keynum;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.menu.episode_t
	var $quake_$menu$episode_t = function(description, firstLevel, levels) {
		this.$description = null;
		this.$firstLevel = 0;
		this.$levels = 0;
		this.$description = description;
		this.$firstLevel = firstLevel;
		this.$levels = levels;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.menu.level_t
	var $quake_$menu$level_t = function(name, description) {
		this.$name = null;
		this.$description = null;
		this.$name = name;
		this.$description = description;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.menu.m_state_t
	var $quake_$menu$m_state_t = function() {
	};
	$quake_$menu$m_state_t.prototype = { $m_none: 0, $m_main: 1, $m_singleplayer: 2, $m_load: 3, $m_save: 4, $m_multiplayer: 5, $m_setup: 6, $m_net: 7, $m_options: 8, $m_video: 9, $m_keys: 10, $m_help: 11, $m_quit: 12, $m_serialconfig: 13, $m_modemconfig: 14, $m_lanconfig: 15, $m_gameoptions: 16, $m_search: 17, $m_slist: 18 };
	Type.registerEnum(null, 'quake.$menu$m_state_t', $quake_$menu$m_state_t, false);
	////////////////////////////////////////////////////////////////////////////////
	// quake.screen.pcx_t
	var $quake_$screen$pcx_t = function() {
		this.$manufacturer = 0;
		this.$version = 0;
		this.$encoding = 0;
		this.$bits_per_pixel = 0;
		this.$xmin = 0;
		this.$ymin = 0;
		this.$xmax = 0;
		this.$ymax = 0;
		this.$hres = 0;
		this.$vres = 0;
		this.$palette = new Array(48);
		this.$reserved = 0;
		this.$color_planes = 0;
		this.$bytes_per_line = 0;
		this.$palette_type = 0;
		this.$filler = new Array(58);
		this.$data = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.vrect_s
	var $quake_$vrect_s = function() {
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.wad.lumpinfo_t
	var $quake_$wad$lumpinfo_t = function() {
		this.$filepos = 0;
		this.$disksize = 0;
		this.$size = 0;
		this.$type = 0;
		this.$compression = 0;
		this.$pad1 = 0;
		this.$pad2 = 0;
		this.$name = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.wad.wadinfo_t
	var $quake_$wad$wadinfo_t = function() {
		this.$identification = null;
		this.$numlumps = 0;
		this.$infotableofs = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.bspfile
	var $quake_bspfile = function() {
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.bspfile.ByteBuffer
	var $quake_bspfile$ByteBuffer = function(buffer, ofs) {
		this.buffer = null;
		this.ofs = 0;
		this.buffer = buffer;
		this.ofs = ofs;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.bspfile.dclipnode_t
	var $quake_bspfile$dclipnode_t = function() {
		this.$planenum = 0;
		this.$children = new Array(2);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.bspfile.dedge_t
	var $quake_bspfile$dedge_t = function() {
		this.v = new Array(2);
	};
	$quake_bspfile$dedge_t.op_Implicit = function(buf) {
		var i;
		var ofs = buf.ofs;
		var dedge = new $quake_bspfile$dedge_t();
		dedge.v[0] = BitConverter.toUInt16(buf.buffer, ofs);
		ofs += 2;
		dedge.v[1] = BitConverter.toUInt16(buf.buffer, ofs);
		ofs += 2;
		return dedge;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.bspfile.dface_t
	var $quake_bspfile$dface_t = function() {
		this.planenum = 0;
		this.side = 0;
		this.firstedge = 0;
		this.numedges = 0;
		this.texinfo = 0;
		this.styles = new Array($quake_bspfile.MAXLIGHTMAPS);
		this.lightofs = 0;
	};
	$quake_bspfile$dface_t.op_Implicit = function(buf) {
		var i;
		var ofs = buf.ofs;
		var dface = new $quake_bspfile$dface_t();
		dface.planenum = BitConverter.toInt16(buf.buffer, ofs);
		ofs += 2;
		dface.side = BitConverter.toInt16(buf.buffer, ofs);
		ofs += 2;
		dface.firstedge = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		dface.numedges = BitConverter.toInt16(buf.buffer, ofs);
		ofs += 2;
		dface.texinfo = BitConverter.toInt16(buf.buffer, ofs);
		ofs += 2;
		for (i = 0; i < $quake_bspfile.MAXLIGHTMAPS; i++) {
			dface.styles[i] = buf.buffer[ofs++];
		}
		dface.lightofs = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		return dface;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.bspfile.dheader_t
	var $quake_bspfile$dheader_t = function() {
		this.version = 0;
		this.lumps = new Array($quake_bspfile.headeR_LUMPS);
		for (var kk = 0; kk < $quake_bspfile.headeR_LUMPS; kk++) {
			this.lumps[kk] = new $quake_bspfile$lump_t();
		}
	};
	$quake_bspfile$dheader_t.op_Implicit = function(buf) {
		var ofs = { $: 0 };
		var dheader = new $quake_bspfile$dheader_t();
		dheader.version = $quake_common.parseInt(buf, ofs);
		for (var i = 0; i < $quake_bspfile.headeR_LUMPS; i++) {
			dheader.lumps[i].fileofs = $quake_common.parseInt(buf, ofs);
			dheader.lumps[i].filelen = $quake_common.parseInt(buf, ofs);
		}
		return dheader;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.bspfile.dleaf_t
	var $quake_bspfile$dleaf_t = function() {
		this.contents = 0;
		this.visofs = 0;
		this.mins = new Array(3);
		this.maxs = new Array(3);
		this.firstmarksurface = 0;
		this.nummarksurfaces = 0;
		this.ambient_level = new Array($quake_bspfile.nuM_AMBIENTS);
	};
	$quake_bspfile$dleaf_t.op_Implicit = function(buf) {
		var i;
		var ofs = { $: buf.ofs };
		var dleaf = new $quake_bspfile$dleaf_t();
		dleaf.contents = $quake_common.parseInt(buf.buffer, ofs);
		dleaf.visofs = $quake_common.parseInt(buf.buffer, ofs);
		for (i = 0; i < 3; i++) {
			dleaf.mins[i] = BitConverter.toInt16(buf.buffer, ofs.$);
			ofs.$ += 2;
		}
		for (i = 0; i < 3; i++) {
			dleaf.maxs[i] = BitConverter.toInt16(buf.buffer, ofs.$);
			ofs.$ += 2;
		}
		dleaf.firstmarksurface = BitConverter.toUInt16(buf.buffer, ofs.$);
		ofs.$ += 2;
		dleaf.nummarksurfaces = BitConverter.toUInt16(buf.buffer, ofs.$);
		ofs.$ += 2;
		for (i = 0; i < $quake_bspfile.nuM_AMBIENTS; i++) {
			dleaf.ambient_level[i] = buf.buffer[ofs.$++];
		}
		return dleaf;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.bspfile.dmiptexlump_t
	var $quake_bspfile$dmiptexlump_t = function() {
		this.nummiptex = 0;
		this.dataofs = null;
	};
	$quake_bspfile$dmiptexlump_t.op_Implicit = function(buf) {
		var i;
		var ofs = buf.ofs;
		var dmiptexlump = new $quake_bspfile$dmiptexlump_t();
		dmiptexlump.nummiptex = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		dmiptexlump.dataofs = new Array(dmiptexlump.nummiptex);
		for (i = 0; i < dmiptexlump.nummiptex; i++) {
			dmiptexlump.dataofs[i] = BitConverter.toInt32(buf.buffer, ofs);
			ofs += 4;
		}
		return dmiptexlump;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.bspfile.dmodel_t
	var $quake_bspfile$dmodel_t = function() {
		this.mins = new Array(3);
		this.maxs = new Array(3);
		this.$origin = new Array(3);
		this.headnode = new Array($quake_bspfile.maX_MAP_HULLS);
		this.visleafs = 0;
		this.firstface = 0;
		this.numfaces = 0;
	};
	$quake_bspfile$dmodel_t.op_Implicit = function(buf) {
		var i;
		var ofs = { $: buf.ofs };
		var dmodel = new $quake_bspfile$dmodel_t();
		for (i = 0; i < 3; i++) {
			dmodel.mins[i] = BitConverter.toSingle(buf.buffer, ofs.$);
			ofs.$ += 4;
		}
		for (i = 0; i < 3; i++) {
			dmodel.maxs[i] = BitConverter.toSingle(buf.buffer, ofs.$);
			ofs.$ += 4;
		}
		for (i = 0; i < 3; i++) {
			dmodel.$origin[i] = BitConverter.toSingle(buf.buffer, ofs.$);
			ofs.$ += 4;
		}
		for (i = 0; i < $quake_bspfile.maX_MAP_HULLS; i++) {
			dmodel.headnode[i] = $quake_common.parseInt(buf.buffer, ofs);
		}
		dmodel.visleafs = $quake_common.parseInt(buf.buffer, ofs);
		dmodel.firstface = $quake_common.parseInt(buf.buffer, ofs);
		dmodel.numfaces = $quake_common.parseInt(buf.buffer, ofs);
		return dmodel;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.bspfile.dnode_t
	var $quake_bspfile$dnode_t = function() {
		this.planenum = 0;
		this.children = new Array(2);
		this.mins = new Array(3);
		this.maxs = new Array(3);
		this.firstface = 0;
		this.numfaces = 0;
	};
	$quake_bspfile$dnode_t.op_Implicit = function(buf) {
		var i;
		var ofs = { $: buf.ofs };
		var dnode = new $quake_bspfile$dnode_t();
		dnode.planenum = $quake_common.parseInt(buf.buffer, ofs);
		for (i = 0; i < 2; i++) {
			dnode.children[i] = BitConverter.toInt16(buf.buffer, ofs.$);
			ofs.$ += 2;
		}
		for (i = 0; i < 3; i++) {
			dnode.mins[i] = BitConverter.toInt16(buf.buffer, ofs.$);
			ofs.$ += 2;
		}
		for (i = 0; i < 3; i++) {
			dnode.maxs[i] = BitConverter.toInt16(buf.buffer, ofs.$);
			ofs.$ += 2;
		}
		dnode.firstface = BitConverter.toUInt16(buf.buffer, ofs.$);
		ofs.$ += 2;
		dnode.numfaces = BitConverter.toUInt16(buf.buffer, ofs.$);
		ofs.$ += 2;
		return dnode;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.bspfile.dplane_t
	var $quake_bspfile$dplane_t = function() {
		this.normal = new Array(3);
		this.dist = 0;
		this.type = 0;
	};
	$quake_bspfile$dplane_t.op_Implicit = function(buf) {
		var i;
		var ofs = { $: buf.ofs };
		var dplane = new $quake_bspfile$dplane_t();
		for (i = 0; i < 3; i++) {
			dplane.normal[i] = BitConverter.toSingle(buf.buffer, ofs.$);
			ofs.$ += 4;
		}
		dplane.dist = BitConverter.toSingle(buf.buffer, ofs.$);
		ofs.$ += 4;
		dplane.type = $quake_common.parseInt(buf.buffer, ofs);
		return dplane;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.bspfile.dvertex_t
	var $quake_bspfile$dvertex_t = function() {
		this.point = new Array(3);
	};
	$quake_bspfile$dvertex_t.op_Implicit = function(buf) {
		var i;
		var ofs = buf.ofs;
		var dvertex = new $quake_bspfile$dvertex_t();
		for (i = 0; i < 3; i++) {
			dvertex.point[i] = BitConverter.toSingle(buf.buffer, ofs);
			ofs += 4;
		}
		return dvertex;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.bspfile.lump_t
	var $quake_bspfile$lump_t = function() {
		this.fileofs = 0;
		this.filelen = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.bspfile.miptex_t
	var $quake_bspfile$miptex_t = function() {
		this.name = $System_StringExtensions.stringOfLength(16);
		this.width = 0;
		this.height = 0;
		this.offsets = new Array($quake_bspfile.MIPLEVELS);
	};
	$quake_bspfile$miptex_t.op_Implicit = function(buf) {
		var i;
		var ofs = { $: buf.ofs };
		var miptex = new $quake_bspfile$miptex_t();
		miptex.name = $quake_common.parseString$1(buf.buffer, ofs, 16);
		miptex.width = BitConverter.toUInt32(buf.buffer, ofs.$);
		ofs.$ += 4;
		miptex.height = BitConverter.toUInt32(buf.buffer, ofs.$);
		ofs.$ += 4;
		for (i = 0; i < $quake_bspfile.MIPLEVELS; i++) {
			miptex.offsets[i] = BitConverter.toUInt32(buf.buffer, ofs.$);
			ofs.$ += 4;
		}
		return miptex;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.bspfile.texinfo_t
	var $quake_bspfile$texinfo_t = function() {
		this.vecs = [new Array(4), new Array(4)];
		this.miptex = 0;
		this.flags = 0;
	};
	$quake_bspfile$texinfo_t.op_Implicit = function(buf) {
		var i, j;
		var ofs = buf.ofs;
		var texinfo = new $quake_bspfile$texinfo_t();
		for (j = 0; j < 2; j++) {
			for (i = 0; i < 4; i++) {
				texinfo.vecs[j][i] = BitConverter.toSingle(buf.buffer, ofs);
				ofs += 4;
			}
		}
		texinfo.miptex = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		texinfo.flags = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		return texinfo;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.chase
	var $quake_chase = function() {
		this.$chase_pos = new Array(3);
		this.$chase_angles = new Array(3);
		this.$chase_dest_angles = new Array(3);
	};
	$quake_chase.chase_Init = function() {
		$quake_cvar_t.cvar_RegisterVariable($quake_chase.$chase_back);
		$quake_cvar_t.cvar_RegisterVariable($quake_chase.$chase_up);
		$quake_cvar_t.cvar_RegisterVariable($quake_chase.$chase_right);
		$quake_cvar_t.cvar_RegisterVariable($quake_chase.chase_active);
	};
	$quake_chase.$chase_Reset = function() {
		// for respawning and teleporting
		//	start position 12 units behind head
	};
	$quake_chase.$traceLine = function(start, end, impact) {
		//trace_t	trace;
		//memset (&trace, 0, sizeof(trace));
		//SV_RecursiveHullCheck (cl.worldmodel->hulls, 0, 0, 1, start, end, &trace);
		//VectorCopy (trace.endpos, impact);
	};
	$quake_chase.chase_Update = function() {
		var i;
		var dist;
		var forward = new Array(3), up = new Array(3), right = new Array(3);
		var dest = new Array(3), stop = new Array(3);
		// if can't see player, reset
		$quake_mathlib.angleVectors($quake_client.cl.viewangles, forward, right, up);
		// calc exact destination
		for (i = 0; i < 3; i++) {
			$quake_chase.$chase_dest[i] = $quake_render.r_refdef.vieworg[i] - forward[i] * $quake_chase.$chase_back.value - right[i] * $quake_chase.$chase_right.value;
		}
		$quake_chase.$chase_dest[2] = $quake_render.r_refdef.vieworg[2] + $quake_chase.$chase_up.value;
		// find the spot the player is looking at
		$quake_mathlib.vectorMA($quake_render.r_refdef.vieworg, 4096, forward, dest);
		//TraceLine (r_refdef.vieworg, dest, stop);
		// calculate pitch to look at the same spot from camera
		//VectorSubtract (stop, r_refdef.vieworg, stop);
		//dist = DotProduct (stop, forward);
		//if (dist < 1)
		//    dist = 1;
		//r_refdef.viewangles[PITCH] = -atan(stop[2] / dist) / M_PI * 180;
		// move towards destination
		$quake_mathlib.vectorCopy($quake_chase.$chase_dest, $quake_render.r_refdef.vieworg);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.client
	var $quake_client = function() {
		this.$svc_strings = ['svc_bad', 'svc_nop', 'svc_disconnect', 'svc_updatestat', 'svc_version', 'svc_setview', 'svc_sound', 'svc_time', 'svc_print', 'svc_stufftext', 'svc_setangle', 'svc_serverinfo', 'svc_lightstyle', 'svc_updatename', 'svc_updatefrags', 'svc_clientdata', 'svc_stopsound', 'svc_updatecolors', 'svc_particle', 'svc_damage', 'svc_spawnstatic', 'OBSOLETE svc_spawnbinary', 'svc_spawnbaseline', 'svc_temp_entity', 'svc_setpause', 'svc_signonnum', 'svc_centerprint', 'svc_killedmonster', 'svc_foundsecret', 'svc_spawnstaticsound', 'svc_intermission', 'svc_finale', 'svc_cdtrack', 'svc_sellscreen', 'svc_cutscene'];
	};
	$quake_client.cL_StopPlayback = function() {
		if (!$quake_client.cls.demoplayback) {
			return;
		}
		$Helper_helper.fclose($quake_client.cls.demofile);
		$quake_client.cls.demoplayback = false;
		$quake_client.cls.demofile = null;
		$quake_client.cls.state = 1;
		if ($quake_client.cls.timedemo) {
			$quake_client.$cL_FinishTimeDemo();
		}
	};
	$quake_client.$cL_WriteDemoMessage = function() {
	};
	$quake_client.$cL_GetMessage = function() {
		var r, i;
		var f = {};
		if ($quake_client.cls.demoplayback) {
			// decide if it is time to grab the next message		
			if ($quake_client.cls.signon === $quake_client.SIGNONS) {
				if ($quake_client.cls.timedemo) {
					if ($quake_host.host_framecount === $quake_client.cls.td_lastframe) {
						return 0;
					}
					// allready read this frame's message
					$quake_client.cls.td_lastframe = $quake_host.host_framecount;
					// if this is the second frame, grab the real td_starttime
					// so the bogus time on the first frame doesn't count
					if ($quake_host.host_framecount === $quake_client.cls.td_startframe + 1) {
						$quake_client.cls.td_starttime = $quake_host.realtime;
					}
				}
				else if ($quake_client.cl.time <= $quake_client.cl.mtime[0]) {
					return 0;
					// don't need another message yet
				}
			}
			// get the next message
			var cursize;
			var cursize_temp = { $: $quake_net.net_message.cursize };
			$Helper_helper.fread$1(cursize_temp, 4, 1, $quake_client.cls.demofile);
			$quake_net.net_message.cursize = cursize_temp.$;
			$quake_mathlib.vectorCopy($quake_client.cl.mviewangles[0], $quake_client.cl.mviewangles[1]);
			for (i = 0; i < 3; i++) {
				r = $Helper_helper.fread(f, 4, 1, $quake_client.cls.demofile);
				$quake_client.cl.mviewangles[0][i] = f.$;
			}
			if ($quake_net.net_message.cursize > $quake_quakedef.maX_MSGLEN) {
				$quake_sys_linux.sys_Error('Demo message > MAX_MSGLEN');
			}
			r = $Helper_helper.fread$2($quake_net.net_message.data, $quake_net.net_message.cursize, 1, $quake_client.cls.demofile);
			if (r !== 1) {
				$quake_client.cL_StopPlayback();
				return 0;
			}
			return 1;
		}
		while (true) {
			r = $quake_net.neT_GetMessage($quake_client.cls.netcon);
			if (r !== 1 && r !== 2) {
				return r;
			}
			// discard nop keepalive message
			if ($quake_net.net_message.cursize === 1 && $quake_net.net_message.data[0] === $quake_net.svc_nop) {
				$quake_console.con_Printf('<-- server to client keepalive\n');
			}
			else {
				break;
			}
		}
		if ($quake_client.cls.demorecording) {
			$quake_client.$cL_WriteDemoMessage();
		}
		return r;
	};
	$quake_client.$cL_Stop_f = function() {
	};
	$quake_client.$cL_Record_f = function() {
	};
	$quake_client.$cL_PlayDemo_f = function() {
		var name = {};
		var c;
		var neg = false;
		if ($quake_cmd.cmd_source !== 1) {
			return;
		}
		if ($quake_cmd.cmd_Argc() !== 2) {
			$quake_console.con_Printf('play <demoname> : plays a demo\n');
			return;
		}
		//
		// disconnect from server
		//
		$quake_client.cL_Disconnect();
		//
		// open the demo file
		//
		name.$ = $quake_cmd.cmd_Argv(1);
		$quake_common.coM_DefaultExtension(name, '.dem');
		$quake_console.con_Printf('Playing demo from ' + name.$ + '.\n');
		var demofile_temp = { $: null };
		$quake_common.coM_FOpenFile(name.$, demofile_temp);
		$quake_client.cls.demofile = demofile_temp.$;
		if (ss.isNullOrUndefined($quake_client.cls.demofile)) {
			$quake_console.con_Printf('ERROR: couldn\'t open.\n');
			$quake_client.cls.demonum = -1;
			// stop demo loop
			return;
		}
		$quake_client.cls.demoplayback = true;
		$quake_client.cls.state = 2;
		$quake_client.cls.forcetrack = 0;
		while ((c = $Helper_helper.getc($quake_client.cls.demofile)) !== 10) {
			if (c === 45) {
				neg = true;
			}
			else {
				$quake_client.cls.forcetrack = $quake_client.cls.forcetrack * 10 + (c - 48);
			}
		}
		if (neg) {
			$quake_client.cls.forcetrack = -$quake_client.cls.forcetrack;
		}
		// ZOID, fscanf is evil
		//	fscanf (cls.demofile, "%i\n", &cls.forcetrack);
	};
	$quake_client.$cL_FinishTimeDemo = function() {
		var frames;
		var time;
		$quake_client.cls.timedemo = false;
		// the first frame didn't count
		frames = $quake_host.host_framecount - $quake_client.cls.td_startframe - 1;
		time = $quake_host.realtime - $quake_client.cls.td_starttime;
		if (time === 0) {
			time = 1;
		}
		$quake_console.con_Printf(frames + ' frames ' + time + ' seconds ' + frames / time + ' fps\n');
	};
	$quake_client.$cL_TimeDemo_f = function() {
		if ($quake_cmd.cmd_source !== 1) {
			return;
		}
		if ($quake_cmd.cmd_Argc() !== 2) {
			$quake_console.con_Printf('timedemo <demoname> : gets demo speeds\n');
			return;
		}
		$quake_client.$cL_PlayDemo_f();
		// cls.td_starttime will be grabbed at the second frame of the demo, so
		// all the loading time doesn't get counted
		$quake_client.cls.timedemo = true;
		$quake_client.cls.td_startframe = $quake_host.host_framecount;
		$quake_client.cls.td_lastframe = -1;
		// get a new message this frame
	};
	$quake_client.$keyDown = function(b) {
		var k;
		var c;
		c = $quake_cmd.cmd_Argv(1);
		if (c.length > 0) {
			k = parseInt(c);
		}
		else {
			k = -1;
		}
		// typed manually at the console for continuous down
		if (k === b.$down[0] || k === b.$down[1]) {
			return;
		}
		// repeating key
		if (b.$down[0] === 0) {
			b.$down[0] = k;
		}
		else if (b.$down[1] === 0) {
			b.$down[1] = k;
		}
		else {
			$quake_console.con_Printf('Three keys down for a button!\n');
			return;
		}
		if ((b.$state & 1) !== 0) {
			return;
		}
		// still down
		b.$state |= 3;
		// down + impulse down
	};
	$quake_client.$keyUp = function(b) {
		var k;
		var c;
		c = $quake_cmd.cmd_Argv(1);
		if (c.length > 0) {
			k = parseInt(c);
		}
		else {
			// typed manually at the console, assume for unsticking, so clear all
			b.$down[0] = b.$down[1] = 0;
			b.$state = 4;
			// impulse up
			return;
		}
		if (b.$down[0] === k) {
			b.$down[0] = 0;
		}
		else if (b.$down[1] === k) {
			b.$down[1] = 0;
		}
		else {
			return;
		}
		// key up without coresponding down (menu pass through)
		if (b.$down[0] !== 0 || b.$down[1] !== 0) {
			return;
		}
		// some other key is still holding it down
		if ((b.$state & 1) === 0) {
			return;
		}
		// still up (this should not happen)
		b.$state &= -2;
		// now up
		b.$state |= 4;
		// impulse up
	};
	$quake_client.$iN_KLookDown = function() {
		$quake_client.$keyDown($quake_client.$in_klook);
	};
	$quake_client.$iN_KLookUp = function() {
		$quake_client.$keyUp($quake_client.$in_klook);
	};
	$quake_client.$iN_MLookDown = function() {
		$quake_client.$keyDown($quake_client.$in_mlook);
	};
	$quake_client.$iN_MLookUp = function() {
		$quake_client.$keyUp($quake_client.$in_mlook);
		if (($quake_client.$in_mlook.$state & 1) === 0 && $quake_client.$lookspring.value !== 0) {
			$quake_view.v_StartPitchDrift();
		}
	};
	$quake_client.$iN_UpDown = function() {
		$quake_client.$keyDown($quake_client.$in_up);
	};
	$quake_client.$iN_UpUp = function() {
		$quake_client.$keyUp($quake_client.$in_up);
	};
	$quake_client.$iN_DownDown = function() {
		$quake_client.$keyDown($quake_client.$in_down);
	};
	$quake_client.$iN_DownUp = function() {
		$quake_client.$keyUp($quake_client.$in_down);
	};
	$quake_client.$iN_LeftDown = function() {
		$quake_client.$keyDown($quake_client.$in_left);
	};
	$quake_client.$iN_LeftUp = function() {
		$quake_client.$keyUp($quake_client.$in_left);
	};
	$quake_client.$iN_RightDown = function() {
		$quake_client.$keyDown($quake_client.$in_right);
	};
	$quake_client.$iN_RightUp = function() {
		$quake_client.$keyUp($quake_client.$in_right);
	};
	$quake_client.$iN_ForwardDown = function() {
		$quake_client.$keyDown($quake_client.$in_forward);
	};
	$quake_client.$iN_ForwardUp = function() {
		$quake_client.$keyUp($quake_client.$in_forward);
	};
	$quake_client.$iN_BackDown = function() {
		$quake_client.$keyDown($quake_client.$in_back);
	};
	$quake_client.$iN_BackUp = function() {
		$quake_client.$keyUp($quake_client.$in_back);
	};
	$quake_client.$iN_LookupDown = function() {
		$quake_client.$keyDown($quake_client.$in_lookup);
	};
	$quake_client.$iN_LookupUp = function() {
		$quake_client.$keyUp($quake_client.$in_lookup);
	};
	$quake_client.$iN_LookdownDown = function() {
		$quake_client.$keyDown($quake_client.$in_lookdown);
	};
	$quake_client.$iN_LookdownUp = function() {
		$quake_client.$keyUp($quake_client.$in_lookdown);
	};
	$quake_client.$iN_MoveleftDown = function() {
		$quake_client.$keyDown($quake_client.$in_moveleft);
	};
	$quake_client.$iN_MoveleftUp = function() {
		$quake_client.$keyUp($quake_client.$in_moveleft);
	};
	$quake_client.$iN_MoverightDown = function() {
		$quake_client.$keyDown($quake_client.$in_moveright);
	};
	$quake_client.$iN_MoverightUp = function() {
		$quake_client.$keyUp($quake_client.$in_moveright);
	};
	$quake_client.$iN_SpeedDown = function() {
		$quake_client.$keyDown($quake_client.$in_speed);
	};
	$quake_client.$iN_SpeedUp = function() {
		$quake_client.$keyUp($quake_client.$in_speed);
	};
	$quake_client.$iN_StrafeDown = function() {
		$quake_client.$keyDown($quake_client.$in_strafe);
	};
	$quake_client.$iN_StrafeUp = function() {
		$quake_client.$keyUp($quake_client.$in_strafe);
	};
	$quake_client.$iN_AttackDown = function() {
		$quake_client.$keyDown($quake_client.$in_attack);
	};
	$quake_client.$iN_AttackUp = function() {
		$quake_client.$keyUp($quake_client.$in_attack);
	};
	$quake_client.$iN_UseDown = function() {
		$quake_client.$keyDown($quake_client.$in_use);
	};
	$quake_client.$iN_UseUp = function() {
		$quake_client.$keyUp($quake_client.$in_use);
	};
	$quake_client.$iN_JumpDown = function() {
		$quake_client.$keyDown($quake_client.$in_jump);
	};
	$quake_client.$iN_JumpUp = function() {
		$quake_client.$keyUp($quake_client.$in_jump);
	};
	$quake_client.$iN_Impulse = function() {
		$quake_client.$in_impulse = parseInt($quake_cmd.cmd_Argv(1));
	};
	$quake_client.$cL_KeyState = function(key) {
		var val;
		var impulsedown, impulseup, down;
		impulsedown = (key.$state & 2) !== 0;
		impulseup = (key.$state & 4) !== 0;
		down = (key.$state & 1) !== 0;
		val = 0;
		if (impulsedown && !impulseup) {
			if (down) {
				val = 0.5;
			}
			else {
				val = 0;
			}
		}
		//	I_Error ();
		if (impulseup && !impulsedown) {
			if (down) {
				val = 0;
			}
			else {
				val = 0;
			}
		}
		// released this frame
		if (!impulsedown && !impulseup) {
			if (down) {
				val = 1;
			}
			else {
				val = 0;
			}
		}
		// up the entire frame
		if (impulsedown && impulseup) {
			if (down) {
				val = 0.75;
			}
			else {
				val = 0.25;
			}
		}
		// pressed and released this frame
		key.$state &= 1;
		// clear impulses
		return val;
	};
	$quake_client.$cL_AdjustAngles = function() {
		var speed;
		var up, down;
		if (($quake_client.$in_speed.$state & 1) !== 0) {
			speed = $quake_host.host_frametime * $quake_client.$cl_anglespeedkey.value;
		}
		else {
			speed = $quake_host.host_frametime;
		}
		if (($quake_client.$in_strafe.$state & 1) === 0) {
			$quake_client.cl.viewangles[$quake_quakedef.YAW] -= speed * $quake_client.$cl_yawspeed.value * $quake_client.$cL_KeyState($quake_client.$in_right);
			$quake_client.cl.viewangles[$quake_quakedef.YAW] += speed * $quake_client.$cl_yawspeed.value * $quake_client.$cL_KeyState($quake_client.$in_left);
			$quake_client.cl.viewangles[$quake_quakedef.YAW] = $quake_mathlib.anglemod($quake_client.cl.viewangles[$quake_quakedef.YAW]);
		}
		if (($quake_client.$in_klook.$state & 1) !== 0) {
			$quake_view.v_StopPitchDrift();
			$quake_client.cl.viewangles[$quake_quakedef.PITCH] -= speed * $quake_client.$cl_pitchspeed.value * $quake_client.$cL_KeyState($quake_client.$in_forward);
			$quake_client.cl.viewangles[$quake_quakedef.PITCH] += speed * $quake_client.$cl_pitchspeed.value * $quake_client.$cL_KeyState($quake_client.$in_back);
		}
		up = $quake_client.$cL_KeyState($quake_client.$in_lookup);
		down = $quake_client.$cL_KeyState($quake_client.$in_lookdown);
		$quake_client.cl.viewangles[$quake_quakedef.PITCH] -= speed * $quake_client.$cl_pitchspeed.value * up;
		$quake_client.cl.viewangles[$quake_quakedef.PITCH] += speed * $quake_client.$cl_pitchspeed.value * down;
		if (up !== 0 || down !== 0) {
			$quake_view.v_StopPitchDrift();
		}
		if ($quake_client.cl.viewangles[$quake_quakedef.PITCH] > 80) {
			$quake_client.cl.viewangles[$quake_quakedef.PITCH] = 80;
		}
		if ($quake_client.cl.viewangles[$quake_quakedef.PITCH] < -70) {
			$quake_client.cl.viewangles[$quake_quakedef.PITCH] = -70;
		}
		if ($quake_client.cl.viewangles[$quake_quakedef.ROLL] > 50) {
			$quake_client.cl.viewangles[$quake_quakedef.ROLL] = 50;
		}
		if ($quake_client.cl.viewangles[$quake_quakedef.ROLL] < -50) {
			$quake_client.cl.viewangles[$quake_quakedef.ROLL] = -50;
		}
	};
	$quake_client.$cL_BaseMove = function(cmd) {
		if ($quake_client.cls.signon !== $quake_client.SIGNONS) {
			return;
		}
		$quake_client.$cL_AdjustAngles();
		//Q_memset (cmd, 0, sizeof(*cmd));
		if (($quake_client.$in_strafe.$state & 1) !== 0) {
			cmd.sidemove += $quake_client.$cl_sidespeed.value * $quake_client.$cL_KeyState($quake_client.$in_right);
			cmd.sidemove -= $quake_client.$cl_sidespeed.value * $quake_client.$cL_KeyState($quake_client.$in_left);
		}
		cmd.sidemove += $quake_client.$cl_sidespeed.value * $quake_client.$cL_KeyState($quake_client.$in_moveright);
		cmd.sidemove -= 350 * $quake_client.$cL_KeyState($quake_client.$in_moveleft);
		cmd.upmove += $quake_client.$cl_upspeed.value * $quake_client.$cL_KeyState($quake_client.$in_up);
		cmd.upmove -= $quake_client.$cl_upspeed.value * $quake_client.$cL_KeyState($quake_client.$in_down);
		if (($quake_client.$in_klook.$state & 1) === 0) {
			cmd.forwardmove += $quake_client.$cl_forwardspeed.value * $quake_client.$cL_KeyState($quake_client.$in_forward);
			cmd.forwardmove -= $quake_client.$cl_backspeed.value * $quake_client.$cL_KeyState($quake_client.$in_back);
		}
		//
		// adjust for speed key
		//
		if (($quake_client.$in_speed.$state & 1) !== 0) {
			cmd.forwardmove *= $quake_client.$cl_movespeedkey.value;
			cmd.sidemove *= $quake_client.$cl_movespeedkey.value;
			cmd.upmove *= $quake_client.$cl_movespeedkey.value;
		}
	};
	$quake_client.$cL_SendMove = function(cmd) {
		var i;
		var bits;
		var buf = new $quake_common$sizebuf_t();
		var data = new Uint8Array(128);
		buf.maxsize = 128;
		buf.cursize = 0;
		buf.data = data;
		$quake_client.cl.cmd = cmd;
		//
		// send the movement message
		//
		$quake_common.msG_WriteByte(buf, $quake_net.clc_move);
		$quake_common.msG_WriteFloat(buf, $quake_client.cl.mtime[0]);
		// so server can get ping times
		for (i = 0; i < 3; i++) {
			$quake_common.msG_WriteAngle(buf, $quake_client.cl.viewangles[i]);
		}
		$quake_common.msG_WriteShort(buf, ss.Int32.trunc(cmd.forwardmove));
		$quake_common.msG_WriteShort(buf, ss.Int32.trunc(cmd.sidemove));
		$quake_common.msG_WriteShort(buf, ss.Int32.trunc(cmd.upmove));
		//
		// send button bits
		//
		bits = 0;
		if (($quake_client.$in_attack.$state & 3) !== 0) {
			bits |= 1;
		}
		$quake_client.$in_attack.$state &= -3;
		if (($quake_client.$in_jump.$state & 3) !== 0) {
			bits |= 2;
		}
		$quake_client.$in_jump.$state &= -3;
		$quake_common.msG_WriteByte(buf, bits);
		$quake_common.msG_WriteByte(buf, $quake_client.$in_impulse);
		$quake_client.$in_impulse = 0;
		//
		// deliver the message
		//
		if ($quake_client.cls.demoplayback) {
			return;
		}
		//
		// allways dump the first two message, because it may contain leftover inputs
		// from the last level
		//
		if (++$quake_client.cl.movemessages <= 2) {
			return;
		}
		if ($quake_net.neT_SendUnreliableMessage($quake_client.cls.netcon, buf) === -1) {
			$quake_console.con_Printf('CL_SendMove: lost server connection\n');
			$quake_client.cL_Disconnect();
		}
	};
	$quake_client.$cL_InitInput = function() {
		$quake_cmd.cmd_AddCommand('+moveup', $quake_client.$iN_UpDown);
		$quake_cmd.cmd_AddCommand('-moveup', $quake_client.$iN_UpUp);
		$quake_cmd.cmd_AddCommand('+movedown', $quake_client.$iN_DownDown);
		$quake_cmd.cmd_AddCommand('-movedown', $quake_client.$iN_DownUp);
		$quake_cmd.cmd_AddCommand('+left', $quake_client.$iN_LeftDown);
		$quake_cmd.cmd_AddCommand('-left', $quake_client.$iN_LeftUp);
		$quake_cmd.cmd_AddCommand('+right', $quake_client.$iN_RightDown);
		$quake_cmd.cmd_AddCommand('-right', $quake_client.$iN_RightUp);
		$quake_cmd.cmd_AddCommand('+forward', $quake_client.$iN_ForwardDown);
		$quake_cmd.cmd_AddCommand('-forward', $quake_client.$iN_ForwardUp);
		$quake_cmd.cmd_AddCommand('+back', $quake_client.$iN_BackDown);
		$quake_cmd.cmd_AddCommand('-back', $quake_client.$iN_BackUp);
		$quake_cmd.cmd_AddCommand('+lookup', $quake_client.$iN_LookupDown);
		$quake_cmd.cmd_AddCommand('-lookup', $quake_client.$iN_LookupUp);
		$quake_cmd.cmd_AddCommand('+lookdown', $quake_client.$iN_LookdownDown);
		$quake_cmd.cmd_AddCommand('-lookdown', $quake_client.$iN_LookdownUp);
		$quake_cmd.cmd_AddCommand('+strafe', $quake_client.$iN_StrafeDown);
		$quake_cmd.cmd_AddCommand('-strafe', $quake_client.$iN_StrafeUp);
		$quake_cmd.cmd_AddCommand('+moveleft', $quake_client.$iN_MoveleftDown);
		$quake_cmd.cmd_AddCommand('-moveleft', $quake_client.$iN_MoveleftUp);
		$quake_cmd.cmd_AddCommand('+moveright', $quake_client.$iN_MoverightDown);
		$quake_cmd.cmd_AddCommand('-moveright', $quake_client.$iN_MoverightUp);
		$quake_cmd.cmd_AddCommand('+speed', $quake_client.$iN_SpeedDown);
		$quake_cmd.cmd_AddCommand('-speed', $quake_client.$iN_SpeedUp);
		$quake_cmd.cmd_AddCommand('+attack', $quake_client.$iN_AttackDown);
		$quake_cmd.cmd_AddCommand('-attack', $quake_client.$iN_AttackUp);
		$quake_cmd.cmd_AddCommand('+use', $quake_client.$iN_UseDown);
		$quake_cmd.cmd_AddCommand('-use', $quake_client.$iN_UseUp);
		$quake_cmd.cmd_AddCommand('+jump', $quake_client.$iN_JumpDown);
		$quake_cmd.cmd_AddCommand('-jump', $quake_client.$iN_JumpUp);
		$quake_cmd.cmd_AddCommand('impulse', $quake_client.$iN_Impulse);
		$quake_cmd.cmd_AddCommand('+klook', $quake_client.$iN_KLookDown);
		$quake_cmd.cmd_AddCommand('-klook', $quake_client.$iN_KLookUp);
		$quake_cmd.cmd_AddCommand('+mlook', $quake_client.$iN_MLookDown);
		$quake_cmd.cmd_AddCommand('-mlook', $quake_client.$iN_MLookUp);
	};
	$quake_client.cL_ClearState = function() {
		var i;
		if (!$quake_server.sv.active) {
			$quake_host.host_ClearMemory();
		}
		// wipe the entire cl structure
		$quake_client.cl = new $quake_client$client_state_t();
		$quake_common.sZ_Clear($quake_client.cls.message);
		//
		// allocate the efrags and chain together into a free list
		//
		$quake_client.cl.free_efrags = $quake_client.$cl_efrags[0];
		for (i = 0; i < 639; i++) {
			$quake_client.$cl_efrags[i].entnext = $quake_client.$cl_efrags[i + 1];
		}
		$quake_client.$cl_efrags[i].entnext = null;
	};
	$quake_client.cL_Disconnect = function() {
		// stop sounds (especially looping!)
		$quake_sound.s_StopAllSounds(true);
		// bring the console down and fade the colors back to normal
		//	SCR_BringDownConsole ();
		// if running a local server, shut it down
		if ($quake_client.cls.demoplayback) {
			$quake_client.cL_StopPlayback();
		}
		else if ($quake_client.cls.state === 2) {
			if ($quake_client.cls.demorecording) {
				$quake_client.$cL_Stop_f();
			}
			$quake_console.con_DPrintf('Sending clc_disconnect\n');
			$quake_common.sZ_Clear($quake_client.cls.message);
			$quake_common.msG_WriteByte($quake_client.cls.message, $quake_net.clc_disconnect);
			$quake_net.neT_SendUnreliableMessage($quake_client.cls.netcon, $quake_client.cls.message);
			$quake_common.sZ_Clear($quake_client.cls.message);
			$quake_net.neT_Close($quake_client.cls.netcon);
			$quake_client.cls.state = 1;
			if ($quake_server.sv.active) {
				$quake_host.host_ShutdownServer(false);
			}
		}
		$quake_client.cls.demoplayback = $quake_client.cls.timedemo = false;
		$quake_client.cls.signon = 0;
	};
	$quake_client.cL_Disconnect_f = function() {
		$quake_client.cL_Disconnect();
		if ($quake_server.sv.active) {
			$quake_host.host_ShutdownServer(false);
		}
	};
	$quake_client.cL_EstablishConnection = function(host) {
		if ($quake_client.cls.state === 0) {
			return;
		}
		if ($quake_client.cls.demoplayback) {
			return;
		}
		$quake_client.cL_Disconnect();
		$quake_client.cls.netcon = $quake_net.neT_Connect(host);
		if (ss.isNullOrUndefined($quake_client.cls.netcon)) {
			$quake_host.host_Error('CL_Connect: connect failed\n');
		}
		$quake_console.con_DPrintf('CL_EstablishConnection: connected to ' + host + '\n');
		$quake_client.cls.demonum = -1;
		// not in the demo loop now
		$quake_client.cls.state = 2;
		$quake_client.cls.signon = 0;
		// need all the signon messages before playing
	};
	$quake_client.cL_SignonReply = function() {
		var str;
		$quake_console.con_DPrintf('CL_SignonReply: ' + $quake_client.cls.signon + '\n');
		switch ($quake_client.cls.signon) {
			case 1: {
				$quake_common.msG_WriteByte($quake_client.cls.message, $quake_net.clc_stringcmd);
				$quake_common.msG_WriteString($quake_client.cls.message, 'prespawn');
				break;
			}
			case 2: {
				$quake_common.msG_WriteByte($quake_client.cls.message, $quake_net.clc_stringcmd);
				$quake_common.msG_WriteString($quake_client.cls.message, 'name "' + $quake_client.cl_name._string + '"\n');
				$quake_common.msG_WriteByte($quake_client.cls.message, $quake_net.clc_stringcmd);
				$quake_common.msG_WriteString($quake_client.cls.message, 'color ' + (ss.Int32.trunc($quake_client.cl_color.value) >> 4) + ' ' + (ss.Int32.trunc($quake_client.cl_color.value) & 15) + '\n');
				$quake_common.msG_WriteByte($quake_client.cls.message, $quake_net.clc_stringcmd);
				str = 'spawn ' + $quake_client.cls.spawnparms;
				$quake_common.msG_WriteString($quake_client.cls.message, str);
				break;
			}
			case 3: {
				$quake_common.msG_WriteByte($quake_client.cls.message, $quake_net.clc_stringcmd);
				$quake_common.msG_WriteString($quake_client.cls.message, 'begin');
				break;
			}
			case 4: {
				$quake_screen.scR_EndLoadingPlaque();
				break;
			}
		}
	};
	$quake_client.cL_NextDemo = function() {
		var str;
		if ($quake_client.cls.demonum === -1) {
			return;
		}
		// don't play demos
		$quake_screen.scR_BeginLoadingPlaque();
		if (ss.isNullOrUndefined($quake_client.cls.demos[$quake_client.cls.demonum]) || $quake_client.cls.demonum === $quake_client.maX_DEMOS) {
			$quake_client.cls.demonum = 0;
			if (ss.isNullOrUndefined($quake_client.cls.demos[$quake_client.cls.demonum])) {
				$quake_console.con_Printf('No demos listed with startdemos\n');
				$quake_client.cls.demonum = -1;
				return;
			}
		}
		str = 'playdemo ' + $quake_client.cls.demos[$quake_client.cls.demonum] + '\n';
		$quake_cmd.cbuf_InsertText(str);
		$quake_client.cls.demonum++;
	};
	$quake_client.$cL_PrintEntities_f = function() {
		var ent;
		var i;
		for (i = 0; i < $quake_client.cl.num_entities; i++) {
			ent = $quake_client.cl_entities[i];
			$quake_console.con_Printf(i + ':');
			if (ss.isNullOrUndefined(ent.model)) {
				$quake_console.con_Printf('EMPTY\n');
				continue;
			}
			//console.Con_Printf ("%s:%2i  (%5.1f,%5.1f,%5.1f) [%5.1f %5.1f %5.1f]\n"
			//,ent.model.name,ent.frame, ent.origin[0], ent.origin[1], ent.origin[2], ent.angles[0], ent.angles[1], ent.angles[2]);
		}
	};
	$quake_client.$cL_AllocDlight = function(key) {
		var i;
		var dl;
		// first look for an exact key match
		if (key !== 0) {
			for (i = 0; i < $quake_client.maX_DLIGHTS; i++) {
				dl = $quake_client.cl_dlights[i];
				if (dl.key === key) {
					//				        memset (dl, 0, sizeof(*dl));
					dl.key = key;
					return dl;
				}
			}
		}
		// then look for anything else
		for (i = 0; i < $quake_client.maX_DLIGHTS; i++) {
			dl = $quake_client.cl_dlights[i];
			if (dl.die < $quake_client.cl.time) {
				//			        memset (dl, 0, sizeof(*dl));
				dl.key = key;
				return dl;
			}
		}
		dl = $quake_client.cl_dlights[0];
		//	        memset (dl, 0, sizeof(*dl));
		dl.key = key;
		return dl;
	};
	$quake_client.cL_DecayLights = function() {
		var i;
		var dl;
		var time;
		time = $quake_client.cl.time - $quake_client.cl.oldtime;
		for (i = 0; i < $quake_client.maX_DLIGHTS; i++) {
			dl = $quake_client.cl_dlights[i];
			if (dl.die < $quake_client.cl.time || dl.radius === 0) {
				continue;
			}
			dl.radius -= time * dl.decay;
			if (dl.radius < 0) {
				dl.radius = 0;
			}
		}
	};
	$quake_client.$cL_LerpPoint = function() {
		var f, frac;
		f = $quake_client.cl.mtime[0] - $quake_client.cl.mtime[1];
		if (f === 0 || $quake_client.$cl_nolerp.value !== 0 || $quake_client.cls.timedemo || $quake_server.sv.active) {
			$quake_client.cl.time = $quake_client.cl.mtime[0];
			return 1;
		}
		if (f > 0.1) {
			// dropped packet, or start of demo
			$quake_client.cl.mtime[1] = $quake_client.cl.mtime[0] - 0.1;
			f = 0.1;
		}
		frac = ($quake_client.cl.time - $quake_client.cl.mtime[1]) / f;
		//Con_Printf ("frac: %f\n",frac);
		if (frac < 0) {
			if (frac < -0.01) {
				$quake_client.cl.time = $quake_client.cl.mtime[1];
				//				Con_Printf ("low frac\n");
			}
			frac = 0;
		}
		else if (frac > 1) {
			if (frac > 1.01) {
				$quake_client.cl.time = $quake_client.cl.mtime[0];
				//				Con_Printf ("high frac\n");
			}
			frac = 1;
		}
		return frac;
	};
	$quake_client.$cL_RelinkEntities = function() {
		var ent;
		var i, j;
		var frac, f, d;
		var delta = new Array(3);
		var bobjrotate;
		var oldorg = new Array(3);
		var dl;
		// determine partial update time	
		frac = $quake_client.$cL_LerpPoint();
		$quake_client.cl_numvisedicts = 0;
		//
		// interpolate player info
		//
		for (i = 0; i < 3; i++) {
			$quake_client.cl.velocity[i] = $quake_client.cl.mvelocity[1][i] + frac * ($quake_client.cl.mvelocity[0][i] - $quake_client.cl.mvelocity[1][i]);
		}
		if ($quake_client.cls.demoplayback) {
			// interpolate the angles	  (this is where player looks around)
			for (j = 0; j < 3; j++) {
				d = $quake_client.cl.mviewangles[0][j] - $quake_client.cl.mviewangles[1][j];
				if (d > 180) {
					d -= 360;
				}
				else if (d < -180) {
					d += 360;
				}
				$quake_client.cl.viewangles[j] = $quake_client.cl.mviewangles[1][j] + frac * d;
			}
		}
		bobjrotate = $quake_mathlib.anglemod(100 * $quake_client.cl.time);
		// start on the entity after the world
		for (i = 1; i < $quake_client.cl.num_entities; i++) {
			ent = $quake_client.cl_entities[i];
			if (ss.isNullOrUndefined(ent.model)) {
				// empty slot
				if (ent.forcelink) {
					$quake_render.r_RemoveEfrags(ent);
				}
				// just became empty
				continue;
			}
			// if the object wasn't included in the last packet, remove it
			if (ent.msgtime !== $quake_client.cl.mtime[0]) {
				ent.model = null;
				continue;
			}
			$quake_mathlib.vectorCopy(ent.origin, oldorg);
			//player position
			if (ent.forcelink) {
				// the entity was not updated in the last message
				// so move to the final spot
				$quake_mathlib.vectorCopy(ent.msg_origins[0], ent.origin);
				$quake_mathlib.vectorCopy(ent.msg_angles[0], ent.angles);
			}
			else {
				// if the delta is large, assume a teleport and don't lerp
				f = frac;
				for (j = 0; j < 3; j++) {
					delta[j] = ent.msg_origins[0][j] - ent.msg_origins[1][j];
					if (delta[j] > 100 || delta[j] < -100) {
						f = 1;
					}
					// assume a teleportation, not a motion
				}
				// interpolate the origin and angles
				for (j = 0; j < 3; j++) {
					ent.origin[j] = ent.msg_origins[1][j] + f * delta[j];
					d = ent.msg_angles[0][j] - ent.msg_angles[1][j];
					if (d > 180) {
						d -= 360;
					}
					else if (d < -180) {
						d += 360;
					}
					ent.angles[j] = ent.msg_angles[1][j] + f * d;
				}
			}
			// rotate binary objects locally
			if ((ent.model.flags & $quake_model.eF_ROTATE) !== 0) {
				ent.angles[1] = bobjrotate;
			}
			if ((ent.effects & $quake_server.eF_BRIGHTFIELD) !== 0) {
				$quake_render.r_EntityParticles(ent);
			}
			if ((ent.effects & $quake_server.eF_MUZZLEFLASH) !== 0) {
				var fv = new Array(3), rv = new Array(3), uv = new Array(3);
				dl = $quake_client.$cL_AllocDlight(i);
				$quake_mathlib.vectorCopy(ent.origin, dl.origin);
				dl.origin[2] += 16;
				$quake_mathlib.angleVectors(ent.angles, fv, rv, uv);
				$quake_mathlib.vectorMA(dl.origin, 18, fv, dl.origin);
				dl.radius = 200 + ($Helper_helper.rand() & 31);
				dl.minlight = 32;
				dl.die = $quake_client.cl.time + 0.1;
			}
			if ((ent.effects & $quake_server.eF_BRIGHTLIGHT) !== 0) {
				dl = $quake_client.$cL_AllocDlight(i);
				$quake_mathlib.vectorCopy(ent.origin, dl.origin);
				dl.origin[2] += 16;
				dl.radius = 400 + ($Helper_helper.rand() & 31);
				dl.die = $quake_client.cl.time + 0.001;
			}
			if ((ent.effects & $quake_server.eF_DIMLIGHT) !== 0) {
				dl = $quake_client.$cL_AllocDlight(i);
				$quake_mathlib.vectorCopy(ent.origin, dl.origin);
				dl.radius = 200 + ($Helper_helper.rand() & 31);
				dl.die = $quake_client.cl.time + 0.001;
			}
			if ((ent.model.flags & $quake_model.eF_GIB) !== 0) {
				$quake_render.r_RocketTrail(oldorg, ent.origin, 2);
			}
			else if ((ent.model.flags & $quake_model.eF_ZOMGIB) !== 0) {
				$quake_render.r_RocketTrail(oldorg, ent.origin, 4);
			}
			else if ((ent.model.flags & $quake_model.eF_TRACER) !== 0) {
				$quake_render.r_RocketTrail(oldorg, ent.origin, 3);
			}
			else if ((ent.model.flags & $quake_model.eF_TRACER2) !== 0) {
				$quake_render.r_RocketTrail(oldorg, ent.origin, 5);
			}
			else if ((ent.model.flags & $quake_model.eF_ROCKET) !== 0) {
				$quake_render.r_RocketTrail(oldorg, ent.origin, 0);
				dl = $quake_client.$cL_AllocDlight(i);
				$quake_mathlib.vectorCopy(ent.origin, dl.origin);
				dl.radius = 200;
				dl.die = $quake_client.cl.time + 0.01;
			}
			else if ((ent.model.flags & $quake_model.eF_GRENADE) !== 0) {
				$quake_render.r_RocketTrail(oldorg, ent.origin, 1);
			}
			else if ((ent.model.flags & $quake_model.eF_TRACER3) !== 0) {
				$quake_render.r_RocketTrail(oldorg, ent.origin, 6);
			}
			ent.forcelink = false;
			if (i === $quake_client.cl.viewentity && $quake_chase.chase_active.value === 0) {
				continue;
			}
			if ($quake_client.cl_numvisedicts < $quake_client.maX_VISEDICTS) {
				$quake_client.cl_visedicts[$quake_client.cl_numvisedicts] = ent;
				$quake_client.cl_numvisedicts++;
			}
		}
	};
	$quake_client.cL_ReadFromServer = function() {
		var ret;
		$quake_client.cl.oldtime = $quake_client.cl.time;
		$quake_client.cl.time += $quake_host.host_frametime;
		do {
			ret = $quake_client.$cL_GetMessage();
			if (ret === -1) {
				$quake_host.host_Error('CL_ReadFromServer: lost server connection');
			}
			if (ret === 0) {
				break;
			}
			$quake_client.cl.last_received_message = $quake_host.realtime;
			$quake_client.$cL_ParseServerMessage();
		} while (ret !== 0 && $quake_client.cls.state === 2);
		if ($quake_client.$cl_shownet.value !== 0) {
			$quake_console.con_Printf('\n');
		}
		$quake_client.$cL_RelinkEntities();
		$quake_client.$cL_UpdateTEnts();
		//
		// bring the links up to date
		//
		return 0;
	};
	$quake_client.cL_SendCmd = function() {
		var cmd = new $quake_client$usercmd_t();
		if ($quake_client.cls.state !== 2) {
			return;
		}
		if ($quake_client.cls.signon === $quake_client.SIGNONS) {
			// get basic movement from keyboard
			$quake_client.$cL_BaseMove(cmd);
			// allow mice or other external controllers to add to the move
			//                IN_Move(cmd);
			// send the unreliable message
			$quake_client.$cL_SendMove(cmd);
		}
		if ($quake_client.cls.demoplayback) {
			$quake_common.sZ_Clear($quake_client.cls.message);
			return;
		}
		// send the reliable message
		if ($quake_client.cls.message.cursize === 0) {
			return;
		}
		// no message at all
		if (!$quake_net.neT_CanSendMessage($quake_client.cls.netcon)) {
			$quake_console.con_DPrintf('CL_WriteToServer: can\'t send\n');
			return;
		}
		if ($quake_net.neT_SendMessage($quake_client.cls.netcon, $quake_client.cls.message) === -1) {
			$quake_host.host_Error('CL_WriteToServer: lost server connection');
		}
		$quake_common.sZ_Clear($quake_client.cls.message);
	};
	$quake_client.cL_Init = function() {
		$quake_common.sZ_Alloc($quake_client.cls.message, 1024);
		$quake_client.$cL_InitInput();
		$quake_client.$cL_InitTEnts();
		//
		// register our commands
		//
		$quake_cvar_t.cvar_RegisterVariable($quake_client.cl_name);
		$quake_cvar_t.cvar_RegisterVariable($quake_client.cl_color);
		$quake_cvar_t.cvar_RegisterVariable($quake_client.$cl_shownet);
		$quake_cvar_t.cvar_RegisterVariable($quake_client.$cl_nolerp);
		$quake_cvar_t.cvar_RegisterVariable($quake_client.$lookspring);
		$quake_cvar_t.cvar_RegisterVariable($quake_client.$lookstrafe);
		$quake_cvar_t.cvar_RegisterVariable($quake_client.$sensitivity);
		$quake_cvar_t.cvar_RegisterVariable($quake_client.$m_pitch);
		$quake_cvar_t.cvar_RegisterVariable($quake_client.$m_yaw);
		$quake_cvar_t.cvar_RegisterVariable($quake_client.$m_forward);
		$quake_cvar_t.cvar_RegisterVariable($quake_client.$m_side);
		//	Cvar_RegisterVariable (cl_autofire);
		$quake_cmd.cmd_AddCommand('entities', $quake_client.$cL_PrintEntities_f);
		$quake_cmd.cmd_AddCommand('disconnect', $quake_client.cL_Disconnect_f);
		$quake_cmd.cmd_AddCommand('record', $quake_client.$cL_Record_f);
		$quake_cmd.cmd_AddCommand('stop', $quake_client.$cL_Stop_f);
		$quake_cmd.cmd_AddCommand('playdemo', $quake_client.$cL_PlayDemo_f);
		$quake_cmd.cmd_AddCommand('timedemo', $quake_client.$cL_TimeDemo_f);
	};
	$quake_client.$cL_EntityNum = function(num) {
		if (num >= $quake_client.cl.num_entities) {
			if (num >= $quake_quakedef.maX_EDICTS) {
				$quake_host.host_Error('CL_EntityNum: ' + num + ' is an invalid number');
			}
			while ($quake_client.cl.num_entities <= num) {
				$quake_client.cl_entities[$quake_client.cl.num_entities].colormap = $quake_screen.vid.colormap;
				$quake_client.cl.num_entities++;
			}
		}
		return $quake_client.cl_entities[num];
	};
	$quake_client.$cL_ParseStartSoundPacket = function() {
		var pos = new Array(3);
		var channel, ent;
		var sound_num;
		var volume;
		var field_mask;
		var attenuation;
		var i;
		field_mask = $quake_common.msG_ReadByte();
		if ((field_mask & $quake_net.snD_VOLUME) !== 0) {
			volume = $quake_common.msG_ReadByte();
		}
		else {
			volume = $quake_sound.defaulT_SOUND_PACKET_VOLUME;
		}
		if ((field_mask & $quake_net.snD_ATTENUATION) !== 0) {
			attenuation = $quake_common.msG_ReadByte() / 64;
		}
		else {
			attenuation = $quake_sound.defaulT_SOUND_PACKET_ATTENUATION;
		}
		channel = $quake_common.msG_ReadShort();
		sound_num = $quake_common.msG_ReadByte();
		ent = channel >> 3;
		channel &= 7;
		if (ent > $quake_quakedef.maX_EDICTS) {
			$quake_host.host_Error('CL_ParseStartSoundPacket: ent = ' + ent);
		}
		for (i = 0; i < 3; i++) {
			pos[i] = $quake_common.msG_ReadCoord();
		}
		$quake_sound.s_StartSound(ent, channel, $quake_client.cl.sound_precache[sound_num], pos, volume / 255, attenuation);
	};
	$quake_client.$cL_KeepaliveMessage = function() {
		var time;
		var ret;
		var old = new $quake_common$sizebuf_t();
		var olddata = new Uint8Array(8192);
		if ($quake_server.sv.active) {
			return;
		}
		// no need if server is local
		if ($quake_client.cls.demoplayback) {
			return;
		}
		// read messages from server, should just be nops
		$quake_common$sizebuf_t.copy($quake_net.net_message, old);
		$System_Buffer.blockCopy$1($quake_net.net_message.data, 0, olddata, 0, $quake_net.net_message.cursize);
		do {
			ret = $quake_client.$cL_GetMessage();
			switch (ret) {
				default: {
					$quake_host.host_Error('CL_KeepaliveMessage: CL_GetMessage failed');
					break;
				}
				case 0: {
					break;
				}
				case 1: {
					$quake_host.host_Error('CL_KeepaliveMessage: received a message');
					break;
				}
				case 2: {
					if ($quake_common.msG_ReadByte() !== $quake_net.svc_nop) {
						$quake_host.host_Error('CL_KeepaliveMessage: datagram wasn\'t a nop');
					}
					break;
				}
			}
		} while (ret !== 0);
		$quake_common$sizebuf_t.copy(old, $quake_net.net_message);
		$System_Buffer.blockCopy$1(olddata, 0, $quake_net.net_message.data, 0, $quake_net.net_message.cursize);
		// check time
		time = $quake_sys_linux.sys_FloatTime();
		if (time - $quake_client.$lastmsg < 5) {
			return;
		}
		$quake_client.$lastmsg = time;
		// write out a nop
		$quake_console.con_Printf('--> client to server keepalive\n');
		$quake_common.msG_WriteByte($quake_client.cls.message, $quake_net.clc_nop);
		$quake_net.neT_SendMessage($quake_client.cls.netcon, $quake_client.cls.message);
		$quake_common.sZ_Clear($quake_client.cls.message);
	};
	$quake_client.$cL_ParseServerInfo = function() {
		var str;
		var i;
		var nummodels, numsounds;
		var model_precache = new Array($quake_quakedef.maX_MODELS);
		var sound_precache = new Array($quake_quakedef.maX_SOUNDS);
		$quake_console.con_DPrintf('Serverinfo packet received.\n');
		//
		// wipe the client_state_t struct
		//
		$quake_client.cL_ClearState();
		// parse protocol version number
		i = $quake_common.msG_ReadLong();
		if (i !== $quake_net.protocoL_VERSION) {
			$quake_console.con_Printf('Server returned version ' + i + ', not ' + $quake_net.protocoL_VERSION);
			return;
		}
		// parse maxclients
		$quake_client.cl.maxclients = $quake_common.msG_ReadByte();
		if ($quake_client.cl.maxclients < 1 || $quake_client.cl.maxclients > $quake_quakedef.maX_SCOREBOARD) {
			$quake_console.con_Printf('Bad maxclients (' + $quake_client.cl.maxclients + ') from server\n');
			return;
		}
		$quake_client.cl.scores = new Array($quake_client.cl.maxclients);
		for (var kk = 0; kk < $quake_client.cl.maxclients; kk++) {
			$quake_client.cl.scores[kk] = new $quake_client$scoreboard_t();
		}
		// parse gametype
		$quake_client.cl.gametype = $quake_common.msG_ReadByte();
		// parse signon message
		str = $quake_common.msG_ReadString();
		$quake_client.cl.levelname = str;
		// seperate the printfs so the server message can have a color
		$quake_console.con_Printf('\n\n\n\n');
		$quake_console.con_Printf(String.fromCharCode($System_Convert.toChar(2)) + str + '\n');
		//
		// first we go through and touch all of the precache data that still
		// happens to be in the cache, so precaching something else doesn't
		// needlessly purge it
		//
		// precache models
		//memset (cl.model_precache, 0, sizeof(cl.model_precache));
		for (nummodels = 1;; nummodels++) {
			str = $quake_common.msG_ReadString();
			if (str.length === 0) {
				break;
			}
			if (nummodels === $quake_quakedef.maX_MODELS) {
				$quake_console.con_Printf('Server sent too many model precaches\n');
				return;
			}
			model_precache[nummodels] = str;
			$quake_model.mod_TouchModel(str);
		}
		// precache sounds
		//memset (cl.sound_precache, 0, sizeof(cl.sound_precache));
		for (numsounds = 1;; numsounds++) {
			str = $quake_common.msG_ReadString();
			if (str.length === 0) {
				break;
			}
			if (numsounds === $quake_quakedef.maX_SOUNDS) {
				$quake_console.con_Printf('Server sent too many sound precaches\n');
				return;
			}
			sound_precache[numsounds] = str;
			$quake_sound.s_TouchSound(str);
		}
		//
		// now we try to load everything else until a cache allocation fails
		//
		for (i = 1; i < nummodels; i++) {
			$quake_client.cl.model_precache[i] = $quake_model.mod_ForName(model_precache[i], false);
			if (ss.isNullOrUndefined($quake_client.cl.model_precache[i])) {
				$quake_console.con_Printf('Model ' + model_precache[i] + ' not found\n');
				return;
			}
			$quake_client.$cL_KeepaliveMessage();
		}
		for (i = 1; i < numsounds; i++) {
			$quake_client.cl.sound_precache[i] = $quake_sound.s_PrecacheSound(sound_precache[i]);
			$quake_client.$cL_KeepaliveMessage();
		}
		// local state
		$quake_client.cl_entities[0].model = $quake_client.cl.worldmodel = $quake_client.cl.model_precache[1];
		$quake_render.r_NewMap();
		$quake_host.noclip_anglehack = false;
		// noclip is turned off at start	
	};
	$quake_client.$cL_ParseUpdate = function(bits) {
		var i;
		var model;
		var modnum;
		var forcelink;
		var ent;
		var num;
		var skin;
		if ($quake_client.cls.signon === 3) {
			// first update is the final signon stage
			$quake_client.cls.signon = $quake_client.SIGNONS;
			$quake_client.cL_SignonReply();
		}
		if ((bits & $quake_net.u_MOREBITS) !== 0) {
			i = $quake_common.msG_ReadByte();
			bits |= i << 8;
		}
		if ((bits & $quake_net.u_LONGENTITY) !== 0) {
			num = $quake_common.msG_ReadShort();
		}
		else {
			num = $quake_common.msG_ReadByte();
		}
		if (num === -1) {
			return;
		}
		ent = $quake_client.$cL_EntityNum(num);
		if (ent.msgtime !== $quake_client.cl.mtime[1]) {
			forcelink = true;
		}
		else {
			forcelink = false;
		}
		ent.msgtime = $quake_client.cl.mtime[0];
		if ((bits & $quake_net.u_MODEL) !== 0) {
			modnum = $quake_common.msG_ReadByte();
			if (modnum >= $quake_quakedef.maX_MODELS) {
				$quake_host.host_Error('CL_ParseModel: bad modnum');
			}
		}
		else {
			modnum = ent.baseline.modelindex;
		}
		model = $quake_client.cl.model_precache[modnum];
		if (!ss.referenceEquals(model, ent.model)) {
			ent.model = model;
			// automatic animation (torches, etc) can be either all together
			// or randomized
			if (ss.isValue(model)) {
				if (model.synctype === 1) {
					ent.syncbase = ($Helper_helper.rand() & 32767) / 32767;
				}
				else {
					ent.syncbase = 0;
				}
			}
			else {
				forcelink = true;
			}
			// hack to make null model players work
		}
		if ((bits & $quake_net.u_FRAME) !== 0) {
			ent.frame = $quake_common.msG_ReadByte();
		}
		else {
			ent.frame = ent.baseline.frame;
		}
		if ((bits & $quake_net.u_COLORMAP) !== 0) {
			i = $quake_common.msG_ReadByte();
		}
		else {
			i = ent.baseline.colormap;
		}
		if (i === 0) {
			ent.colormap = $quake_screen.vid.colormap;
		}
		else {
			if (i > $quake_client.cl.maxclients) {
				$quake_sys_linux.sys_Error('i >= cl.maxclients');
			}
			ent.colormap = $quake_client.cl.scores[i - 1].translations;
		}
		if ((bits & $quake_net.u_SKIN) !== 0) {
			ent.skinnum = $quake_common.msG_ReadByte();
		}
		else {
			ent.skinnum = ent.baseline.skin;
		}
		if ((bits & $quake_net.u_EFFECTS) !== 0) {
			ent.effects = $quake_common.msG_ReadByte();
		}
		else {
			ent.effects = ent.baseline.effects;
		}
		// shift the known values for interpolation
		$quake_mathlib.vectorCopy(ent.msg_origins[0], ent.msg_origins[1]);
		$quake_mathlib.vectorCopy(ent.msg_angles[0], ent.msg_angles[1]);
		if ((bits & $quake_net.u_ORIGIN1) !== 0) {
			ent.msg_origins[0][0] = $quake_common.msG_ReadCoord();
		}
		else {
			ent.msg_origins[0][0] = ent.baseline.origin[0];
		}
		if ((bits & $quake_net.u_ANGLE1) !== 0) {
			ent.msg_angles[0][0] = $quake_common.msG_ReadAngle();
		}
		else {
			ent.msg_angles[0][0] = ent.baseline.angles[0];
		}
		if ((bits & $quake_net.u_ORIGIN2) !== 0) {
			ent.msg_origins[0][1] = $quake_common.msG_ReadCoord();
		}
		else {
			ent.msg_origins[0][1] = ent.baseline.origin[1];
		}
		if ((bits & $quake_net.u_ANGLE2) !== 0) {
			ent.msg_angles[0][1] = $quake_common.msG_ReadAngle();
		}
		else {
			ent.msg_angles[0][1] = ent.baseline.angles[1];
		}
		if ((bits & $quake_net.u_ORIGIN3) !== 0) {
			ent.msg_origins[0][2] = $quake_common.msG_ReadCoord();
		}
		else {
			ent.msg_origins[0][2] = ent.baseline.origin[2];
		}
		if ((bits & $quake_net.u_ANGLE3) !== 0) {
			ent.msg_angles[0][2] = $quake_common.msG_ReadAngle();
		}
		else {
			ent.msg_angles[0][2] = ent.baseline.angles[2];
		}
		if ((bits & $quake_net.u_NOLERP) !== 0) {
			ent.forcelink = true;
		}
		if (forcelink) {
			// didn't have an update last message
			$quake_mathlib.vectorCopy(ent.msg_origins[0], ent.msg_origins[1]);
			$quake_mathlib.vectorCopy(ent.msg_origins[0], ent.origin);
			$quake_mathlib.vectorCopy(ent.msg_angles[0], ent.msg_angles[1]);
			$quake_mathlib.vectorCopy(ent.msg_angles[0], ent.angles);
			ent.forcelink = true;
		}
	};
	$quake_client.$cL_ParseBaseline = function(ent) {
		var i;
		ent.baseline.modelindex = $quake_common.msG_ReadByte();
		ent.baseline.frame = $quake_common.msG_ReadByte();
		ent.baseline.colormap = $quake_common.msG_ReadByte();
		ent.baseline.skin = $quake_common.msG_ReadByte();
		for (i = 0; i < 3; i++) {
			ent.baseline.origin[i] = $quake_common.msG_ReadCoord();
			ent.baseline.angles[i] = $quake_common.msG_ReadAngle();
		}
	};
	$quake_client.$cL_ParseClientdata = function(bits) {
		var i, j;
		if ((bits & $quake_net.sU_VIEWHEIGHT) !== 0) {
			$quake_client.cl.viewheight = $quake_common.msG_ReadChar();
		}
		else {
			$quake_client.cl.viewheight = 22;
		}
		if ((bits & $quake_net.sU_IDEALPITCH) !== 0) {
			$quake_client.cl.idealpitch = $quake_common.msG_ReadChar();
		}
		else {
			$quake_client.cl.idealpitch = 0;
		}
		$quake_mathlib.vectorCopy($quake_client.cl.mvelocity[0], $quake_client.cl.mvelocity[1]);
		for (i = 0; i < 3; i++) {
			if ((bits & $quake_net.sU_PUNCH1 << i) !== 0) {
				$quake_client.cl.punchangle[i] = $quake_common.msG_ReadChar();
				//sys_linux.Sys_Printf(String.Format("cl.punchangle[{0}]={1:0.######}\n", i, cl.punchangle[i]));
			}
			else {
				$quake_client.cl.punchangle[i] = 0;
			}
			if ((bits & $quake_net.sU_VELOCITY1 << i) !== 0) {
				$quake_client.cl.mvelocity[0][i] = $quake_common.msG_ReadChar() * 16;
			}
			else {
				$quake_client.cl.mvelocity[0][i] = 0;
			}
		}
		// [always sent]	if (bits & SU_ITEMS)
		i = $quake_common.msG_ReadLong();
		if ($quake_client.cl.items !== i) {
			// set flash times
			$quake_sbar.sbar_Changed();
			for (j = 0; j < 32; j++) {
				if ((i & 1 << j) !== 0 && ($quake_client.cl.items & 1 << j) === 0) {
					$quake_client.cl.item_gettime[j] = $quake_client.cl.time;
				}
			}
			$quake_client.cl.items = i;
		}
		$quake_client.cl.onground = (bits & $quake_net.sU_ONGROUND) !== 0;
		$quake_client.cl.inwater = (bits & $quake_net.sU_INWATER) !== 0;
		if ((bits & $quake_net.sU_WEAPONFRAME) !== 0) {
			$quake_client.cl.stats[$quake_quakedef.staT_WEAPONFRAME] = $quake_common.msG_ReadByte();
		}
		else {
			$quake_client.cl.stats[$quake_quakedef.staT_WEAPONFRAME] = 0;
		}
		if ((bits & $quake_net.sU_ARMOR) !== 0) {
			i = $quake_common.msG_ReadByte();
		}
		else {
			i = 0;
		}
		if ($quake_client.cl.stats[$quake_quakedef.staT_ARMOR] !== i) {
			$quake_client.cl.stats[$quake_quakedef.staT_ARMOR] = i;
			$quake_sbar.sbar_Changed();
		}
		if ((bits & $quake_net.sU_WEAPON) !== 0) {
			i = $quake_common.msG_ReadByte();
		}
		else {
			i = 0;
		}
		if ($quake_client.cl.stats[$quake_quakedef.staT_WEAPON] !== i) {
			$quake_client.cl.stats[$quake_quakedef.staT_WEAPON] = i;
			$quake_sbar.sbar_Changed();
		}
		i = $quake_common.msG_ReadShort();
		if ($quake_client.cl.stats[$quake_quakedef.staT_HEALTH] !== i) {
			$quake_client.cl.stats[$quake_quakedef.staT_HEALTH] = i;
			$quake_sbar.sbar_Changed();
		}
		i = $quake_common.msG_ReadByte();
		if ($quake_client.cl.stats[$quake_quakedef.staT_AMMO] !== i) {
			$quake_client.cl.stats[$quake_quakedef.staT_AMMO] = i;
			$quake_sbar.sbar_Changed();
		}
		for (i = 0; i < 4; i++) {
			j = $quake_common.msG_ReadByte();
			if ($quake_client.cl.stats[$quake_quakedef.staT_SHELLS + i] !== j) {
				$quake_client.cl.stats[$quake_quakedef.staT_SHELLS + i] = j;
				$quake_sbar.sbar_Changed();
			}
		}
		i = $quake_common.msG_ReadByte();
		if ($quake_common.standard_quake) {
			if ($quake_client.cl.stats[$quake_quakedef.staT_ACTIVEWEAPON] !== i) {
				$quake_client.cl.stats[$quake_quakedef.staT_ACTIVEWEAPON] = i;
				$quake_sbar.sbar_Changed();
			}
		}
		else if ($quake_client.cl.stats[$quake_quakedef.staT_ACTIVEWEAPON] !== 1 << i) {
			$quake_client.cl.stats[$quake_quakedef.staT_ACTIVEWEAPON] = 1 << i;
			$quake_sbar.sbar_Changed();
		}
	};
	$quake_client.$cL_NewTranslation = function(slot) {
		var i, j;
		var top, bottom;
		var dest, source;
		if (slot > $quake_client.cl.maxclients) {
			$quake_sys_linux.sys_Error('CL_NewTranslation: slot > cl.maxclients');
		}
		dest = 0;
		source = 0;
		$System_Buffer.blockCopy$1($quake_screen.vid.colormap, 0, $quake_client.cl.scores[slot].translations, 0, $quake_client.cl.scores[slot].translations.length);
		top = $quake_client.cl.scores[slot].colors & 240;
		bottom = ($quake_client.cl.scores[slot].colors & 15) << 4;
		for (i = 0; i < $quake_vid.viD_GRADES; i++, dest += 256, source += 256) {
			if (top < 128) {
				$System_Buffer.blockCopy$1($quake_screen.vid.colormap, source + top, $quake_client.cl.scores[slot].translations, dest + $quake_render.toP_RANGE, 16);
			}
			else {
				for (j = 0; j < 16; j++) {
					$quake_client.cl.scores[slot].translations[dest + $quake_render.toP_RANGE + j] = $quake_screen.vid.colormap[source + top + 15 - j];
				}
			}
			if (bottom < 128) {
				$System_Buffer.blockCopy$1($quake_screen.vid.colormap, source + bottom, $quake_client.cl.scores[slot].translations, dest + $quake_render.bottoM_RANGE, 16);
			}
			else {
				for (j = 0; j < 16; j++) {
					$quake_client.cl.scores[slot].translations[dest + $quake_render.bottoM_RANGE + j] = $quake_screen.vid.colormap[source + bottom + 15 - j];
				}
			}
		}
	};
	$quake_client.$cL_ParseStatic = function() {
		var ent;
		var i;
		i = $quake_client.cl.num_statics;
		if (i >= $quake_client.$maX_STATIC_ENTITIES) {
			$quake_host.host_Error('Too many static entities');
		}
		ent = $quake_client.$cl_static_entities[i];
		$quake_client.cl.num_statics++;
		$quake_client.$cL_ParseBaseline(ent);
		// copy it to the current state
		ent.model = $quake_client.cl.model_precache[ent.baseline.modelindex];
		ent.frame = ent.baseline.frame;
		ent.colormap = $quake_screen.vid.colormap;
		ent.skinnum = ent.baseline.skin;
		ent.effects = ent.baseline.effects;
		$quake_mathlib.vectorCopy(ent.baseline.origin, ent.origin);
		$quake_mathlib.vectorCopy(ent.baseline.angles, ent.angles);
		$quake_render.r_AddEfrags(ent);
	};
	$quake_client.$cL_ParseStaticSound = function() {
		var org = new Array(3);
		var sound_num, vol, atten;
		var i;
		for (i = 0; i < 3; i++) {
			org[i] = $quake_common.msG_ReadCoord();
		}
		sound_num = $quake_common.msG_ReadByte();
		vol = $quake_common.msG_ReadByte();
		atten = $quake_common.msG_ReadByte();
		//sound.S_StaticSound(cl.sound_precache[sound_num], org, vol, atten);
	};
	$quake_client.$cL_ParseServerMessage = function() {
		var cmd;
		var i;
		//
		// if recording demos, copy the message out
		//
		if ($quake_client.$cl_shownet.value === 1) {
			$quake_console.con_Printf($quake_net.net_message.cursize + ' ');
		}
		else if ($quake_client.$cl_shownet.value === 2) {
			$quake_console.con_Printf('------------------\n');
		}
		$quake_client.cl.onground = false;
		// unless the server says otherwise	
		//
		// parse the message
		//
		$quake_common.msG_BeginReading();
		while (true) {
			if ($quake_common.msg_badread) {
				$quake_host.host_Error('CL_ParseServerMessage: Bad server message');
			}
			cmd = $quake_common.msG_ReadByte();
			if (cmd === -1) {
				return;
				// end of message
			}
			// if the high bit of the command byte is set, it is a fast update
			if ((cmd & 128) !== 0) {
				$quake_client.$cL_ParseUpdate(cmd & 127);
				continue;
			}
			// other commands
			switch (cmd) {
				default: {
					$quake_host.host_Error('CL_ParseServerMessage: Illegible server message\n');
					break;
				}
				case 1: {
					break;
				}
				case 7: {
					$quake_client.cl.mtime[1] = $quake_client.cl.mtime[0];
					$quake_client.cl.mtime[0] = $quake_common.msG_ReadFloat();
					break;
				}
				case 15: {
					i = $quake_common.msG_ReadShort();
					$quake_client.$cL_ParseClientdata(i);
					break;
				}
				case 2: {
					$quake_host.host_EndGame('Server disconnected\n');
					break;
				}
				case 8: {
					$quake_console.con_Printf($quake_common.msG_ReadString());
					break;
				}
				case 26: {
					$quake_screen.scR_CenterPrint($quake_common.msG_ReadString());
					break;
				}
				case 9: {
					$quake_cmd.cbuf_AddText($quake_common.msG_ReadString());
					break;
				}
				case 19: {
					$quake_view.v_ParseDamage();
					break;
				}
				case 11: {
					$quake_client.$cL_ParseServerInfo();
					$quake_screen.vid.recalc_refdef = true;
					break;
				}
				case 10: {
					for (i = 0; i < 3; i++) {
						$quake_client.cl.viewangles[i] = $quake_common.msG_ReadAngle();
					}
					break;
				}
				case 5: {
					$quake_client.cl.viewentity = $quake_common.msG_ReadShort();
					break;
				}
				case 12: {
					i = $quake_common.msG_ReadByte();
					if (i >= $quake_quakedef.maX_LIGHTSTYLES) {
						$quake_sys_linux.sys_Error('svc_lightstyle > MAX_LIGHTSTYLES');
					}
					$quake_client.cl_lightstyle[i].map = $quake_common.msG_ReadString();
					$quake_client.cl_lightstyle[i].length = $quake_client.cl_lightstyle[i].map.length;
					break;
				}
				case 6: {
					$quake_client.$cL_ParseStartSoundPacket();
					break;
				}
				case 13: {
					$quake_sbar.sbar_Changed();
					i = $quake_common.msG_ReadByte();
					if (i >= $quake_client.cl.maxclients) {
						$quake_host.host_Error('CL_ParseServerMessage: svc_updatename > MAX_SCOREBOARD');
					}
					$quake_client.cl.scores[i].name = $quake_common.msG_ReadString();
					break;
				}
				case 14: {
					$quake_sbar.sbar_Changed();
					i = $quake_common.msG_ReadByte();
					if (i >= $quake_client.cl.maxclients) {
						$quake_host.host_Error('CL_ParseServerMessage: svc_updatefrags > MAX_SCOREBOARD');
					}
					$quake_client.cl.scores[i].frags = $quake_common.msG_ReadShort();
					break;
				}
				case 17: {
					$quake_sbar.sbar_Changed();
					i = $quake_common.msG_ReadByte();
					if (i >= $quake_client.cl.maxclients) {
						$quake_host.host_Error('CL_ParseServerMessage: svc_updatecolors > MAX_SCOREBOARD');
					}
					$quake_client.cl.scores[i].colors = $quake_common.msG_ReadByte();
					$quake_client.$cL_NewTranslation(i);
					break;
				}
				case 18: {
					$quake_render.r_ParseParticleEffect();
					break;
				}
				case 22: {
					i = $quake_common.msG_ReadShort();
					$quake_client.$cL_ParseBaseline($quake_client.$cL_EntityNum(i));
					break;
				}
				case 20: {
					$quake_client.$cL_ParseStatic();
					break;
				}
				case 23: {
					$quake_client.$cL_ParseTEnt();
					break;
				}
				case 25: {
					i = $quake_common.msG_ReadByte();
					if (i <= $quake_client.cls.signon) {
						$quake_host.host_Error('Received signon ' + i + ' when at ' + $quake_client.cls.signon);
					}
					$quake_client.cls.signon = i;
					$quake_client.cL_SignonReply();
					break;
				}
				case 27: {
					$quake_client.cl.stats[$quake_quakedef.staT_MONSTERS]++;
					break;
				}
				case 28: {
					$quake_client.cl.stats[$quake_quakedef.staT_SECRETS]++;
					break;
				}
				case 3: {
					i = $quake_common.msG_ReadByte();
					if (i < 0 || i >= $quake_quakedef.maX_CL_STATS) {
						$quake_sys_linux.sys_Error('svc_updatestat: ' + i + ' is invalid');
					}
					$quake_client.cl.stats[i] = $quake_common.msG_ReadLong();
					;
					break;
				}
				case 29: {
					$quake_client.$cL_ParseStaticSound();
					break;
				}
				case 32: {
					$quake_client.cl.cdtrack = $quake_common.msG_ReadByte();
					$quake_client.cl.looptrack = $quake_common.msG_ReadByte();
					break;
				}
			}
		}
	};
	$quake_client.$cL_InitTEnts = function() {
		$quake_client.$cl_sfx_wizhit = $quake_sound.s_PrecacheSound('wizard/hit.wav');
		$quake_client.$cl_sfx_knighthit = $quake_sound.s_PrecacheSound('hknight/hit.wav');
		$quake_client.$cl_sfx_tink1 = $quake_sound.s_PrecacheSound('weapons/tink1.wav');
		$quake_client.$cl_sfx_ric1 = $quake_sound.s_PrecacheSound('weapons/ric1.wav');
		$quake_client.$cl_sfx_ric2 = $quake_sound.s_PrecacheSound('weapons/ric2.wav');
		$quake_client.$cl_sfx_ric3 = $quake_sound.s_PrecacheSound('weapons/ric3.wav');
		$quake_client.$cl_sfx_r_exp3 = $quake_sound.s_PrecacheSound('weapons/r_exp3.wav');
	};
	$quake_client.$cL_ParseBeam = function(m) {
		var ent;
		var start = new Array(3), end = new Array(3);
		var b;
		var i;
		ent = $quake_common.msG_ReadShort();
		start[0] = $quake_common.msG_ReadCoord();
		start[1] = $quake_common.msG_ReadCoord();
		start[2] = $quake_common.msG_ReadCoord();
		end[0] = $quake_common.msG_ReadCoord();
		end[1] = $quake_common.msG_ReadCoord();
		end[2] = $quake_common.msG_ReadCoord();
		// override any beam with the same entity
		for (i = 0, b = $quake_client.$cl_beams[i]; i < $quake_client.$maX_BEAMS; i++) {
			b = $quake_client.$cl_beams[i];
		}
		if (b.entity === ent) {
			b.entity = ent;
			b.model = m;
			b.endtime = $quake_client.cl.time + 0.2;
			$quake_mathlib.vectorCopy(start, b.start);
			$quake_mathlib.vectorCopy(end, b.end);
			return;
		}
		// find a free beam
		for (i = 0, b = $quake_client.$cl_beams[i]; i < $quake_client.$maX_BEAMS; i++) {
			b = $quake_client.$cl_beams[i];
			if (ss.isNullOrUndefined(b.model) || b.endtime < $quake_client.cl.time) {
				b.entity = ent;
				b.model = m;
				b.endtime = $quake_client.cl.time + 0.2;
				$quake_mathlib.vectorCopy(start, b.start);
				$quake_mathlib.vectorCopy(end, b.end);
				return;
			}
		}
		$quake_console.con_Printf('beam list overflow!\n');
	};
	$quake_client.$cL_ParseTEnt = function() {
		var type;
		var pos = new Array(3);
		var dl;
		var rnd;
		var colorStart, colorLength;
		type = $quake_common.msG_ReadByte();
		switch (type) {
			case 7: {
				pos[0] = $quake_common.msG_ReadCoord();
				pos[1] = $quake_common.msG_ReadCoord();
				pos[2] = $quake_common.msG_ReadCoord();
				$quake_render.r_RunParticleEffect(pos, $quake_mathlib.vec3_origin, 20, 30);
				$quake_sound.s_StartSound(-1, 0, $quake_client.$cl_sfx_wizhit, pos, 1, 1);
				break;
			}
			case 8: {
				pos[0] = $quake_common.msG_ReadCoord();
				pos[1] = $quake_common.msG_ReadCoord();
				pos[2] = $quake_common.msG_ReadCoord();
				$quake_render.r_RunParticleEffect(pos, $quake_mathlib.vec3_origin, 226, 20);
				$quake_sound.s_StartSound(-1, 0, $quake_client.$cl_sfx_knighthit, pos, 1, 1);
				break;
			}
			case 0: {
				pos[0] = $quake_common.msG_ReadCoord();
				pos[1] = $quake_common.msG_ReadCoord();
				pos[2] = $quake_common.msG_ReadCoord();
				$quake_render.r_RunParticleEffect(pos, $quake_mathlib.vec3_origin, 0, 10);
				if ($Helper_helper.rand() % 5 !== 0) {
					$quake_sound.s_StartSound(-1, 0, $quake_client.$cl_sfx_tink1, pos, 1, 1);
				}
				else {
					rnd = $Helper_helper.rand() & 3;
					if (rnd === 1) {
						$quake_sound.s_StartSound(-1, 0, $quake_client.$cl_sfx_ric1, pos, 1, 1);
					}
					else if (rnd === 2) {
						$quake_sound.s_StartSound(-1, 0, $quake_client.$cl_sfx_ric2, pos, 1, 1);
					}
					else {
						$quake_sound.s_StartSound(-1, 0, $quake_client.$cl_sfx_ric3, pos, 1, 1);
					}
				}
				break;
			}
			case 1: {
				pos[0] = $quake_common.msG_ReadCoord();
				pos[1] = $quake_common.msG_ReadCoord();
				pos[2] = $quake_common.msG_ReadCoord();
				$quake_render.r_RunParticleEffect(pos, $quake_mathlib.vec3_origin, 0, 20);
				if ($Helper_helper.rand() % 5 !== 0) {
					$quake_sound.s_StartSound(-1, 0, $quake_client.$cl_sfx_tink1, pos, 1, 1);
				}
				else {
					rnd = $Helper_helper.rand() & 3;
					if (rnd === 1) {
						$quake_sound.s_StartSound(-1, 0, $quake_client.$cl_sfx_ric1, pos, 1, 1);
					}
					else if (rnd === 2) {
						$quake_sound.s_StartSound(-1, 0, $quake_client.$cl_sfx_ric2, pos, 1, 1);
					}
					else {
						$quake_sound.s_StartSound(-1, 0, $quake_client.$cl_sfx_ric3, pos, 1, 1);
					}
				}
				break;
			}
			case 2: {
				pos[0] = $quake_common.msG_ReadCoord();
				pos[1] = $quake_common.msG_ReadCoord();
				pos[2] = $quake_common.msG_ReadCoord();
				$quake_render.r_RunParticleEffect(pos, $quake_mathlib.vec3_origin, 0, 20);
				break;
			}
			case 3: {
				pos[0] = $quake_common.msG_ReadCoord();
				pos[1] = $quake_common.msG_ReadCoord();
				pos[2] = $quake_common.msG_ReadCoord();
				$quake_render.r_ParticleExplosion(pos);
				dl = $quake_client.$cL_AllocDlight(0);
				$quake_mathlib.vectorCopy(pos, dl.origin);
				dl.radius = 350;
				dl.die = $quake_client.cl.time + 0.5;
				dl.decay = 300;
				$quake_sound.s_StartSound(-1, 0, $quake_client.$cl_sfx_r_exp3, pos, 1, 1);
				break;
			}
			case 4: {
				pos[0] = $quake_common.msG_ReadCoord();
				pos[1] = $quake_common.msG_ReadCoord();
				pos[2] = $quake_common.msG_ReadCoord();
				$quake_render.r_BlobExplosion(pos);
				$quake_sound.s_StartSound(-1, 0, $quake_client.$cl_sfx_r_exp3, pos, 1, 1);
				break;
			}
			case 5: {
				$quake_client.$cL_ParseBeam($quake_model.mod_ForName('progs/bolt.mdl', true));
				break;
			}
			case 6: {
				$quake_client.$cL_ParseBeam($quake_model.mod_ForName('progs/bolt2.mdl', true));
				break;
			}
			case 9: {
				$quake_client.$cL_ParseBeam($quake_model.mod_ForName('progs/bolt3.mdl', true));
				break;
			}
			case 13: {
				$quake_client.$cL_ParseBeam($quake_model.mod_ForName('progs/beam.mdl', true));
				break;
			}
			case 10: {
				pos[0] = $quake_common.msG_ReadCoord();
				pos[1] = $quake_common.msG_ReadCoord();
				pos[2] = $quake_common.msG_ReadCoord();
				$quake_render.r_LavaSplash(pos);
				break;
			}
			case 11: {
				pos[0] = $quake_common.msG_ReadCoord();
				pos[1] = $quake_common.msG_ReadCoord();
				pos[2] = $quake_common.msG_ReadCoord();
				$quake_render.r_TeleportSplash(pos);
				break;
			}
			case 12: {
				pos[0] = $quake_common.msG_ReadCoord();
				pos[1] = $quake_common.msG_ReadCoord();
				pos[2] = $quake_common.msG_ReadCoord();
				colorStart = $quake_common.msG_ReadByte();
				colorLength = $quake_common.msG_ReadByte();
				$quake_render.r_ParticleExplosion2(pos, colorStart, colorLength);
				dl = $quake_client.$cL_AllocDlight(0);
				$quake_mathlib.vectorCopy(pos, dl.origin);
				dl.radius = 350;
				dl.die = $quake_client.cl.time + 0.5;
				dl.decay = 300;
				$quake_sound.s_StartSound(-1, 0, $quake_client.$cl_sfx_r_exp3, pos, 1, 1);
				break;
			}
			default: {
				$quake_sys_linux.sys_Error('CL_ParseTEnt: bad type');
				break;
			}
		}
	};
	$quake_client.$cL_NewTempEntity = function() {
		var ent;
		if ($quake_client.cl_numvisedicts === $quake_client.maX_VISEDICTS) {
			return null;
		}
		if ($quake_client.$num_temp_entities === $quake_client.$maX_TEMP_ENTITIES) {
			return null;
		}
		ent = $quake_client.$cl_temp_entities[$quake_client.$num_temp_entities];
		//memset (ent, 0, sizeof(*ent));
		$quake_client.$num_temp_entities++;
		$quake_client.cl_visedicts[$quake_client.cl_numvisedicts] = ent;
		$quake_client.cl_numvisedicts++;
		ent.colormap = $quake_screen.vid.colormap;
		return ent;
	};
	$quake_client.$cL_UpdateTEnts = function() {
		var i;
		var b;
		var dist = new Array(3), org = new Array(3);
		var d;
		var ent;
		var yaw, pitch;
		var forward;
		$quake_client.$num_temp_entities = 0;
		// update lightning
		for (i = 0, b = $quake_client.$cl_beams[i]; i < $quake_client.$maX_BEAMS; i++) {
			b = $quake_client.$cl_beams[i];
			if (ss.isNullOrUndefined(b.model) || b.endtime < $quake_client.cl.time) {
				continue;
			}
			// if coming from the player, update the start position
			if (b.entity === $quake_client.cl.viewentity) {
				$quake_mathlib.vectorCopy($quake_client.cl_entities[$quake_client.cl.viewentity].origin, b.start);
			}
			// calculate pitch and yaw
			$quake_mathlib.vectorSubtract(b.end, b.start, dist);
			if (dist[1] === 0 && dist[0] === 0) {
				yaw = 0;
				if (dist[2] > 0) {
					pitch = 90;
				}
				else {
					pitch = 270;
				}
			}
			else {
				yaw = ss.Int32.trunc(Math.atan2(dist[1], dist[0]) * 180 / $quake_mathlib.m_PI);
				if (yaw < 0) {
					yaw += 360;
				}
				forward = Math.sqrt(dist[0] * dist[0] + dist[1] * dist[1]);
				pitch = ss.Int32.trunc(Math.atan2(dist[2], forward) * 180 / $quake_mathlib.m_PI);
				if (pitch < 0) {
					pitch += 360;
				}
			}
			// add new entities for the lightning
			$quake_mathlib.vectorCopy(b.start, org);
			d = $quake_mathlib.vectorNormalize(dist);
			while (d > 0) {
				ent = $quake_client.$cL_NewTempEntity();
				if (ss.isNullOrUndefined(ent)) {
					return;
				}
				$quake_mathlib.vectorCopy(org, ent.origin);
				ent.model = b.model;
				ent.angles[0] = pitch;
				ent.angles[1] = yaw;
				ent.angles[2] = $Helper_helper.rand() % 360;
				for (i = 0; i < 3; i++) {
					org[i] += dist[i] * 30;
				}
				d -= 30;
			}
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.client.beam_t
	var $quake_client$beam_t = function() {
		this.entity = 0;
		this.model = null;
		this.endtime = 0;
		this.start = new Array(3);
		this.end = new Array(3);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.client.cactive_t
	var $quake_client$cactive_t = function() {
	};
	$quake_client$cactive_t.prototype = { ca_dedicated: 0, ca_disconnected: 1, ca_connected: 2 };
	Type.registerEnum(global, 'quake.client$cactive_t', $quake_client$cactive_t, false);
	////////////////////////////////////////////////////////////////////////////////
	// quake.client.client_state_t
	var $quake_client$client_state_t = function() {
		this.movemessages = 0;
		this.cmd = new $quake_client$usercmd_t();
		this.stats = new Array($quake_quakedef.maX_CL_STATS);
		this.items = 0;
		this.item_gettime = new Array(32);
		this.faceanimtime = 0;
		this.cshifts = new Array($quake_client.nuM_CSHIFTS);
		this.prev_cshifts = new Array($quake_client.nuM_CSHIFTS);
		this.mviewangles = [new Array(3), new Array(3)];
		this.viewangles = new Array(3);
		this.mvelocity = [new Array(3), new Array(3)];
		this.velocity = new Array(3);
		this.punchangle = new Array(3);
		this.idealpitch = 0;
		this.pitchvel = 0;
		this.nodrift = false;
		this.driftmove = 0;
		this.laststop = 0;
		this.viewheight = 0;
		this.$crouch = 0;
		this.paused = false;
		this.onground = false;
		this.inwater = false;
		this.intermission = 0;
		this.$completed_time = 0;
		this.mtime = new Array(2);
		this.time = 0;
		this.oldtime = 0;
		this.last_received_message = 0;
		this.model_precache = new Array($quake_quakedef.maX_MODELS);
		this.sound_precache = new Array($quake_quakedef.maX_SOUNDS);
		this.levelname = $System_StringExtensions.stringOfLength(40);
		this.viewentity = 0;
		this.maxclients = 0;
		this.gametype = 0;
		this.worldmodel = null;
		this.free_efrags = null;
		this.num_entities = 0;
		this.num_statics = 0;
		this.viewent = new $quake_render$entity_t();
		this.cdtrack = 0;
		this.looptrack = 0;
		this.scores = null;
		for (var kk = 0; kk < $quake_client.nuM_CSHIFTS; kk++) {
			this.cshifts[kk] = new $quake_client$cshift_t();
			this.prev_cshifts[kk] = new $quake_client$cshift_t();
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.client.client_static_t
	var $quake_client$client_static_t = function() {
		this.state = 0;
		this.mapstring = null;
		this.spawnparms = null;
		this.demonum = 0;
		this.demos = new Array($quake_client.maX_DEMOS);
		this.demorecording = false;
		this.demoplayback = false;
		this.timedemo = false;
		this.forcetrack = 0;
		this.demofile = null;
		this.td_lastframe = 0;
		this.td_startframe = 0;
		this.td_starttime = 0;
		this.signon = 0;
		this.netcon = null;
		this.message = new $quake_common$sizebuf_t();
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.client.cshift_t
	var $quake_client$cshift_t = function() {
		this.destcolor = new Array(3);
		this.percent = 0;
	};
	$quake_client$cshift_t.$ctor1 = function(destcolor, percent) {
		this.destcolor = new Array(3);
		this.percent = 0;
		this.destcolor = destcolor;
		this.percent = percent;
	};
	$quake_client$cshift_t.$ctor1.prototype = $quake_client$cshift_t.prototype;
	////////////////////////////////////////////////////////////////////////////////
	// quake.client.dlight_t
	var $quake_client$dlight_t = function() {
		this.origin = new Array(3);
		this.radius = 0;
		this.die = 0;
		this.decay = 0;
		this.minlight = 0;
		this.key = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.client.lightstyle_t
	var $quake_client$lightstyle_t = function() {
		this.length = 0;
		this.map = $System_StringExtensions.stringOfLength($quake_quakedef.maX_STYLESTRING);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.client.scoreboard_t
	var $quake_client$scoreboard_t = function() {
		this.name = null;
		this.$entertime = 0;
		this.frags = 0;
		this.colors = 0;
		this.translations = new Uint8Array(16384);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.client.usercmd_t
	var $quake_client$usercmd_t = function() {
		this.viewangles = new Array(3);
		this.forwardmove = 0;
		this.sidemove = 0;
		this.upmove = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.cmd
	var $quake_cmd = function() {
		this.$trashtest = 0;
		this.$trashspot = null;
	};
	$quake_cmd.prototype = {
		$cmd_CheckParm: function(parm) {
			return 0;
		}
	};
	$quake_cmd.$cmd_Wait_f = function() {
		$quake_cmd.$cmd_wait = true;
	};
	$quake_cmd.cbuf_Init = function() {
		$quake_common.sZ_Alloc($quake_cmd.$cmd_text, 8192);
		// space for commands and script files
	};
	$quake_cmd.cbuf_AddText = function(text) {
		var l;
		l = text.length;
		if ($quake_cmd.$cmd_text.cursize + l >= $quake_cmd.$cmd_text.maxsize) {
			$quake_console.con_Printf('Cbuf_AddText: overflow\n');
			return;
		}
		var buf = new Uint8Array(text.length);
		for (var kk = 0; kk < text.length; kk++) {
			buf[kk] = text.charCodeAt(kk);
		}
		$quake_common.sZ_Write($quake_cmd.$cmd_text, buf, text.length);
	};
	$quake_cmd.cbuf_InsertText = function(text) {
		var temp;
		var templen;
		// copy off any commands still remaining in the exec buffer
		templen = $quake_cmd.$cmd_text.cursize;
		if (templen !== 0) {
			temp = new Uint8Array(templen);
			$System_Buffer.blockCopy$1($quake_cmd.$cmd_text.data, 0, temp, 0, templen);
			$quake_common.sZ_Clear($quake_cmd.$cmd_text);
		}
		else {
			temp = null;
		}
		// shut up compiler
		// add the entire text of the file
		$quake_cmd.cbuf_AddText(text);
		// add the copied off data
		if (templen !== 0) {
			$quake_common.sZ_Write($quake_cmd.$cmd_text, temp, templen);
			temp = null;
		}
	};
	$quake_cmd.cbuf_Execute = function() {
		var i;
		var text;
		var line = new Array(1024);
		var quotes;
		while ($quake_cmd.$cmd_text.cursize !== 0) {
			// find a \n or ; line break
			text = $quake_cmd.$cmd_text.data;
			quotes = 0;
			for (i = 0; i < $quake_cmd.$cmd_text.cursize; i++) {
				if (text[i] === 34) {
					quotes++;
				}
				if ((quotes & 1) === 0 && text[i] === 59) {
					break;
				}
				// don't break if inside a quoted string
				if (text[i] === 10) {
					break;
				}
			}
			for (var kk = 0; kk < i; kk++) {
				line[kk] = text[kk];
			}
			line[i] = 0;
			// delete the text from the command buffer and move remaining commands down
			// this is necessary because commands (exec, alias) can insert data at the
			// beginning of the text buffer
			if (i === $quake_cmd.$cmd_text.cursize) {
				$quake_cmd.$cmd_text.cursize = 0;
			}
			else {
				i++;
				$quake_cmd.$cmd_text.cursize -= i;
				for (var kk1 = 0; kk1 < $quake_cmd.$cmd_text.cursize; kk1++) {
					text[kk1] = text[kk1 + i];
				}
			}
			// execute the command line
			$quake_cmd.cmd_ExecuteString(line, 1);
			if ($quake_cmd.$cmd_wait) {
				// skip out while text still remains in buffer, leaving it
				// for next frame
				$quake_cmd.$cmd_wait = false;
				break;
			}
		}
	};
	$quake_cmd.$cmd_StuffCmds_f = function() {
		var i, j;
		var s;
		var text, build;
		if ($quake_cmd.cmd_Argc() !== 1) {
			$quake_console.con_Printf('stuffcmds : execute command line parameters\n');
			return;
		}
		// build the combined string to parse from
		s = 0;
		for (i = 1; i < $quake_common.com_argc; i++) {
			if (ss.isNullOrUndefined($quake_common.com_argv[i])) {
				continue;
			}
			// NEXTSTEP nulls out -NXHost
			s += $quake_common.com_argv[i].length + 1;
		}
		if (s === 0) {
			return;
		}
		text = '';
		for (i = 1; i < $quake_common.com_argc; i++) {
			if (ss.isNullOrUndefined($quake_common.com_argv[i])) {
				continue;
			}
			// NEXTSTEP nulls out -NXHost
			text += $quake_common.com_argv[i];
			if (i !== $quake_common.com_argc - 1) {
				text += ' ';
			}
		}
		// pull out the commands
		build = '';
		for (i = 0; i < s - 1; i++) {
			if (text.charCodeAt(i) === 43) {
				i++;
				for (j = i; text.charCodeAt(j) !== 43 && text.charCodeAt(j) !== 45 && text.charCodeAt(j) !== 0; j++) {
					;
				}
				build += text.substring(i, j + 1 - i);
				build += '\n';
				i = j - 1;
			}
		}
		if (build.length !== 0) {
			$quake_cmd.cbuf_InsertText(build);
		}
		text = null;
		build = null;
	};
	$quake_cmd.$cmd_Exec_f = function() {
		var f;
		var mark;
		if ($quake_cmd.cmd_Argc() !== 2) {
			$quake_console.con_Printf('exec <filename> : execute a script file\n');
			return;
		}
		var buf = $quake_common.coM_LoadHunkFile($quake_cmd.cmd_Argv(1));
		if (ss.isNullOrUndefined(buf)) {
			$quake_console.con_Printf('couldn\'t exec ' + $quake_cmd.cmd_Argv(1) + '\n');
			return;
		}
		f = '';
		for (var kk = 0; kk < buf.length; kk++) {
			f += String.fromCharCode($System_Convert.toChar(buf[kk]));
		}
		$quake_console.con_Printf('execing ' + $quake_cmd.cmd_Argv(1) + '\n');
		$quake_cmd.cbuf_InsertText(f);
	};
	$quake_cmd.$cmd_Echo_f = function() {
		var i;
		for (i = 1; i < $quake_cmd.cmd_Argc(); i++) {
			$quake_console.con_Printf($quake_cmd.cmd_Argv(i) + ' ');
		}
		$quake_console.con_Printf('\n');
	};
	$quake_cmd.$cmd_Alias_f = function() {
		var a;
		var cmd;
		var i, c;
		var s;
		if ($quake_cmd.cmd_Argc() === 1) {
			$quake_console.con_Printf('Current alias commands:\n');
			for (a = $quake_cmd.$cmd_alias; ss.isValue(a); a = a.$next) {
				$quake_console.con_Printf(a.$name + ' : ' + a.$value + '\n');
			}
			return;
		}
		s = $quake_cmd.cmd_Argv(1);
		if (s.length >= $quake_cmd.$maX_ALIAS_NAME) {
			$quake_console.con_Printf('Alias name is too long\n');
			return;
		}
		// if the alias allready exists, reuse it
		for (a = $quake_cmd.$cmd_alias; ss.isValue(a); a = a.$next) {
			if (s.compareTo(a.$name) === 0) {
				a.$value = null;
				break;
			}
		}
		if (ss.isNullOrUndefined(a)) {
			a = new $quake_$cmd$cmdalias_t();
			a.$next = $quake_cmd.$cmd_alias;
			$quake_cmd.$cmd_alias = a;
		}
		a.$name = s;
		// copy the rest of the command line
		cmd = '';
		// start out with a null string
		c = $quake_cmd.cmd_Argc();
		for (i = 2; i < c; i++) {
			cmd += $quake_cmd.cmd_Argv(i);
			if (i !== c) {
				cmd += ' ';
			}
		}
		cmd += '\n';
		a.$value = cmd;
	};
	$quake_cmd.cmd_Init = function() {
		//
		// register our commands
		//
		$quake_cmd.cmd_AddCommand('stuffcmds', $quake_cmd.$cmd_StuffCmds_f);
		$quake_cmd.cmd_AddCommand('exec', $quake_cmd.$cmd_Exec_f);
		$quake_cmd.cmd_AddCommand('echo', $quake_cmd.$cmd_Echo_f);
		$quake_cmd.cmd_AddCommand('alias', $quake_cmd.$cmd_Alias_f);
		$quake_cmd.cmd_AddCommand('cmd', $quake_cmd.cmd_ForwardToServer);
		$quake_cmd.cmd_AddCommand('wait', $quake_cmd.$cmd_Wait_f);
	};
	$quake_cmd.cmd_Argc = function() {
		return $quake_cmd.$cmd_argc;
	};
	$quake_cmd.cmd_Argv = function(arg) {
		if (arg >= $quake_cmd.$cmd_argc) {
			return $quake_cmd.$cmd_null_string;
		}
		return $quake_cmd.$cmd_argv[arg];
	};
	$quake_cmd.cmd_Args = function() {
		return $quake_cmd.$cmd_args;
	};
	$quake_cmd.$cmd_TokenizeString = function(text) {
		var i;
		// clear the args from the last string
		for (i = 0; i < $quake_cmd.$cmd_argc; i++) {
			$quake_cmd.$cmd_argv[i] = null;
		}
		$quake_cmd.$cmd_argc = 0;
		$quake_cmd.$cmd_args = null;
		var ofs = { $: 0 };
		while (true) {
			// skip whitespace up to a /n
			while (text[ofs.$] !== 0 && text[ofs.$] <= 32 && text[ofs.$] !== 10) {
				ofs.$++;
			}
			if (text[ofs.$] === 10) {
				// a newline seperates commands in the buffer
				ofs.$++;
				break;
			}
			if (text[ofs.$] === 0) {
				return;
			}
			if ($quake_cmd.$cmd_argc === 1) {
				$quake_cmd.$cmd_args = '';
				for (var kk = 0;; kk++) {
					var ch = text[ofs.$ + kk];
					if (ch === 0) {
						break;
					}
					$quake_cmd.$cmd_args += String.fromCharCode(ch);
				}
			}
			$quake_common.coM_Parse(text, ofs);
			if (ofs.$ === -1) {
				return;
			}
			if ($quake_cmd.$cmd_argc < $quake_cmd.$maX_ARGS) {
				$quake_cmd.$cmd_argv[$quake_cmd.$cmd_argc] = $quake_common.com_token;
				$quake_cmd.$cmd_argc++;
			}
		}
	};
	$quake_cmd.cmd_AddCommand = function(cmd_name, function1) {
		var cmd;
		if ($quake_host.host_initialized) {
			$quake_sys_linux.sys_Error('Cmd_AddCommand after host_initialized');
		}
		// fail if the command is a variable name
		if ($quake_cvar_t.cvar_VariableString(cmd_name).length !== 0) {
			$quake_console.con_Printf('Cmd_AddCommand: ' + cmd_name + ' already defined as a var\n');
			return;
		}
		// fail if the command already exists
		for (cmd = $quake_cmd.$cmd_functions; ss.isValue(cmd); cmd = cmd.$next) {
			if (cmd_name.compareTo(cmd.$name) === 0) {
				$quake_console.con_Printf('Cmd_AddCommand: ' + cmd_name + ' already defined\n');
				return;
			}
		}
		cmd = new $quake_$cmd$cmd_function_t();
		cmd.$name = cmd_name;
		cmd.$function = function1;
		cmd.$next = $quake_cmd.$cmd_functions;
		$quake_cmd.$cmd_functions = cmd;
	};
	$quake_cmd.cmd_Exists = function(cmd_name) {
		var cmd;
		for (cmd = $quake_cmd.$cmd_functions; ss.isValue(cmd); cmd = cmd.$next) {
			if (cmd_name.compareTo(cmd.$name) === 0) {
				return true;
			}
		}
		return false;
	};
	$quake_cmd.cmd_CompleteCommand = function(partial) {
		var cmd;
		var len;
		len = partial.length;
		if (len === 0) {
			return null;
		}
		// check functions
		for (cmd = $quake_cmd.$cmd_functions; ss.isValue(cmd); cmd = cmd.$next) {
			if (partial.compareTo(cmd.$name.substring(0, len)) === 0) {
				return cmd.$name;
			}
		}
		return null;
	};
	$quake_cmd.cmd_ExecuteString = function(text, src) {
		var cmd;
		var a;
		$quake_cmd.cmd_source = src;
		$quake_cmd.$cmd_TokenizeString(text);
		// execute the command line
		if ($quake_cmd.cmd_Argc() === 0) {
			return;
		}
		// no tokens
		// check functions
		for (cmd = $quake_cmd.$cmd_functions; ss.isValue(cmd); cmd = cmd.$next) {
			if ($quake_cmd.$cmd_argv[0].compareTo(cmd.$name) === 0) {
				cmd.$function();
				return;
			}
		}
		// check alias
		for (a = $quake_cmd.$cmd_alias; ss.isValue(a); a = a.$next) {
			if ($quake_cmd.$cmd_argv[0].compareTo(a.$name) === 0) {
				$quake_cmd.cbuf_InsertText(a.$value);
				return;
			}
		}
		// check cvars
		if (!$quake_cvar_t.cvar_Command()) {
			$quake_console.con_Printf('Unknown command "' + $quake_cmd.cmd_Argv(0) + '"\n');
		}
	};
	$quake_cmd.cmd_ForwardToServer = function() {
		if ($quake_client.cls.state !== 2) {
			$quake_console.con_Printf('Can\'t "' + $quake_cmd.cmd_Argv(0) + '", not connected\n');
			return;
		}
		if ($quake_client.cls.demoplayback) {
			return;
		}
		// not really connected
		$quake_common.msG_WriteByte($quake_client.cls.message, $quake_net.clc_stringcmd);
		if ($quake_cmd.cmd_Argv(0).compareTo('cmd') !== 0) {
			$quake_common.sZ_Print($quake_client.cls.message, $quake_cmd.cmd_Argv(0));
			$quake_common.sZ_Print($quake_client.cls.message, ' ');
		}
		if ($quake_cmd.cmd_Argc() > 1) {
			$quake_common.sZ_Print($quake_client.cls.message, $quake_cmd.cmd_Args());
		}
		else {
			$quake_common.sZ_Print($quake_client.cls.message, '\n');
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.cmd.cmd_source_t
	var $quake_cmd$cmd_source_t = function() {
	};
	$quake_cmd$cmd_source_t.prototype = { src_client: 0, src_command: 1 };
	Type.registerEnum(global, 'quake.cmd$cmd_source_t', $quake_cmd$cmd_source_t, false);
	////////////////////////////////////////////////////////////////////////////////
	// quake.common
	var $quake_common = function() {
	};
	$quake_common.prototype = {
		$coM_WriteFile: function(filename, data, len) {
			var handle;
			var name;
			name = $quake_common.com_gamedir + '/' + filename;
			handle = $quake_sys_linux.sys_FileOpenWrite(name);
			if (handle === -1) {
				$quake_sys_linux.sys_Printf('COM_WriteFile: failed on ' + name);
				return;
			}
			$quake_sys_linux.sys_Printf('COM_WriteFile: ' + name);
			$quake_sys_linux.sys_FileWrite(handle, data, len);
			$quake_sys_linux.sys_FileClose(handle);
		},
		$coM_CreatePath: function(path) {
		},
		$coM_CopyFile: function(netpath, cachepath) {
		},
		$coM_LoadTempFile: function(path) {
			return $quake_common.coM_LoadFile(path, 2);
		}
	};
	$quake_common.q_atof = function(str) {
		try {
			return parseFloat(str);
		}
		catch ($t1) {
			$t1 = ss.Exception.wrap($t1);
			if (Type.isInstanceOfType($t1, $System_FormatException)) {
				return 0;
			}
			else {
				throw $t1;
			}
		}
	};
	$quake_common.msG_WriteChar = function(sb, c) {
		var buf;
		var offset = {};
		buf = $quake_common.$sZ_GetSpace(sb, 1, offset);
		buf[offset.$] = c;
	};
	$quake_common.msG_WriteByte = function(sb, c) {
		var buf;
		var offset = {};
		buf = $quake_common.$sZ_GetSpace(sb, 1, offset);
		buf[offset.$] = c;
	};
	$quake_common.msG_WriteShort = function(sb, c) {
		var buf;
		var offset = {};
		buf = $quake_common.$sZ_GetSpace(sb, 2, offset);
		buf[offset.$] = c & 255;
		buf[offset.$ + 1] = c >> 8;
	};
	$quake_common.msG_WriteLong = function(sb, c) {
		var buf;
		var offset = {};
		buf = $quake_common.$sZ_GetSpace(sb, 4, offset);
		buf[offset.$] = c & 255;
		buf[offset.$ + 1] = c >> 8 & 255;
		buf[offset.$ + 2] = c >> 16 & 255;
		buf[offset.$ + 3] = c >> 24;
	};
	$quake_common.msG_WriteFloat = function(sb, f) {
		var dat;
		dat = BitConverter.getBytes(f);
		$quake_common.sZ_Write(sb, dat, 4);
	};
	$quake_common.msG_WriteString = function(sb, s) {
		var buf;
		if (ss.isNullOrUndefined(s)) {
			buf = new Uint8Array(1);
			buf[0] = 0;
			$quake_common.sZ_Write(sb, buf, 1);
		}
		else {
			buf = new Uint8Array(s.length + 1);
			for (var kk = 0; kk < s.length; kk++) {
				buf[kk] = s.charCodeAt(kk);
			}
			$quake_common.sZ_Write(sb, buf, s.length + 1);
		}
	};
	$quake_common.msG_WriteCoord = function(sb, f) {
		$quake_common.msG_WriteShort(sb, ss.Int32.trunc(f * 8));
	};
	$quake_common.msG_WriteAngle = function(sb, f) {
		$quake_common.msG_WriteByte(sb, ss.Int32.div(ss.Int32.trunc(f) * 256, 360) & 255);
	};
	$quake_common.msG_BeginReading = function() {
		$quake_common.$msg_readcount = 0;
		$quake_common.msg_badread = false;
	};
	$quake_common.msG_ReadChar = function() {
		var c;
		if ($quake_common.$msg_readcount + 1 > $quake_net.net_message.cursize) {
			$quake_common.msg_badread = true;
			return -1;
		}
		c = ($quake_net.net_message.data[$quake_common.$msg_readcount] >> 7) * -256 + $quake_net.net_message.data[$quake_common.$msg_readcount];
		$quake_common.$msg_readcount++;
		return c;
	};
	$quake_common.msG_ReadByte = function() {
		var c;
		if ($quake_common.$msg_readcount + 1 > $quake_net.net_message.cursize) {
			$quake_common.msg_badread = true;
			return -1;
		}
		c = $quake_net.net_message.data[$quake_common.$msg_readcount];
		$quake_common.$msg_readcount++;
		return c;
	};
	$quake_common.msG_ReadShort = function() {
		var c;
		if ($quake_common.$msg_readcount + 2 > $quake_net.net_message.cursize) {
			$quake_common.msg_badread = true;
			return -1;
		}
		c = ($quake_net.net_message.data[$quake_common.$msg_readcount + 1] << 8 | $quake_net.net_message.data[$quake_common.$msg_readcount]) << 16 >> 16;
		$quake_common.$msg_readcount += 2;
		return c;
	};
	$quake_common.msG_ReadLong = function() {
		var c;
		if ($quake_common.$msg_readcount + 4 > $quake_net.net_message.cursize) {
			$quake_common.msg_badread = true;
			return -1;
		}
		c = $quake_net.net_message.data[$quake_common.$msg_readcount] + ($quake_net.net_message.data[$quake_common.$msg_readcount + 1] << 8) + ($quake_net.net_message.data[$quake_common.$msg_readcount + 2] << 16) + ($quake_net.net_message.data[$quake_common.$msg_readcount + 3] << 24);
		$quake_common.$msg_readcount += 4;
		return c;
	};
	$quake_common.msG_ReadFloat = function() {
		var dat;
		dat = BitConverter.toSingle($quake_net.net_message.data, $quake_common.$msg_readcount);
		$quake_common.$msg_readcount += 4;
		return dat;
	};
	$quake_common.msG_ReadString = function() {
		var string;
		var l, c;
		l = 0;
		string = '';
		do {
			c = $quake_common.msG_ReadChar();
			if (c === -1 || c === 0) {
				break;
			}
			string += String.fromCharCode($System_Convert.toChar(c));
			l++;
		} while (l < 2048);
		return string;
	};
	$quake_common.msG_ReadCoord = function() {
		return $quake_common.msG_ReadShort() * 0.125;
	};
	$quake_common.msG_ReadAngle = function() {
		return $quake_common.msG_ReadChar() * 1.40625;
	};
	$quake_common.sZ_Alloc = function(buf, startsize) {
		if (startsize < 256) {
			startsize = 256;
		}
		buf.data = new Uint8Array(startsize);
		buf.maxsize = startsize;
		buf.cursize = 0;
	};
	$quake_common.sZ_Free = function(buf) {
		buf.cursize = 0;
	};
	$quake_common.sZ_Clear = function(buf) {
		buf.cursize = 0;
	};
	$quake_common.$sZ_GetSpace = function(buf, length, offset) {
		var data;
		if (buf.cursize + length > buf.maxsize) {
			if (!buf.allowoverflow) {
				$quake_sys_linux.sys_Error('SZ_GetSpace: overflow without allowoverflow set');
			}
			if (length > buf.maxsize) {
				$quake_sys_linux.sys_Error('SZ_GetSpace: ' + length + ' is > full buffer size');
			}
			buf.overflowed = true;
			$quake_console.con_Printf('SZ_GetSpace: overflow');
			$quake_common.sZ_Clear(buf);
		}
		data = buf.data;
		offset.$ = buf.cursize;
		buf.cursize += length;
		return data;
	};
	$quake_common.sZ_Write = function(buf, data, length) {
		var offset = {};
		var dst = $quake_common.$sZ_GetSpace(buf, length, offset);
		$System_Buffer.blockCopy$1(data, 0, dst, offset.$, length);
	};
	$quake_common.sZ_Write$1 = function(buf, data, dataofs, length) {
		var offset = {};
		var dst = $quake_common.$sZ_GetSpace(buf, length, offset);
		$System_Buffer.blockCopy$1(data, dataofs, dst, offset.$, length);
	};
	$quake_common.sZ_Print = function(buf, data) {
		var len;
		len = data.length + 1;
		// byte * cast to keep VC++ happy
		if (buf.data[buf.cursize - 1] !== 0) {
			var offset = {};
			var dst = $quake_common.$sZ_GetSpace(buf, len, offset);
			for (var kk = 0; kk < data.length; kk++) {
				dst[offset.$ + kk] = data.charCodeAt(kk);
			}
			// no trailing 0
		}
		else {
			var offset1 = {};
			var dst1 = $quake_common.$sZ_GetSpace(buf, len - 1, offset1);
			for (var kk1 = 0; kk1 < data.length; kk1++) {
				dst1[offset1.$ - 1 + kk1] = data.charCodeAt(kk1);
			}
			// write over trailing 0
		}
	};
	$quake_common.coM_FileBase = function(in1) {
		var s, s2;
		var out;
		s = in1.length - 1;
		while (s !== 0 && in1.charCodeAt(s) !== 46) {
			s--;
		}
		for (s2 = s; s2 !== 0 && in1.charCodeAt(s2) !== 47; s2--) {
			;
		}
		if (s - s2 < 2) {
			out = '?model?';
		}
		else {
			s--;
			out = in1.substring(s2 + 1, s - s2);
		}
		return out;
	};
	$quake_common.coM_DefaultExtension = function(path, extension) {
		var src;
		//
		// if path doesn't have a .EXT, append extension
		// (extension should include the .)
		//
		src = path.$.length - 1;
		while (path.$.charCodeAt(src) !== 47 && src !== 0) {
			if (path.$.charCodeAt(src) === 46) {
				return;
			}
			// it has an extension
			src--;
		}
		path.$ += extension;
	};
	$quake_common.coM_Parse = function(data, ofs) {
		var $state = 0, c, len;
		$sm1:
		for (;;) {
			switch ($state) {
				case 0: {
					len = 0;
					$quake_common.com_token = '';
					if (ss.isNullOrUndefined(data)) {
						ofs.$ = -1;
						return;
					}
					// skip whitespace
					$state = 1;
					continue $sm1;
				}
				case 1: {
					while ((c = data[ofs.$]) <= 32) {
						if (c === 0) {
							ofs.$ = -1;
							return;
							// end of file;
						}
						ofs.$++;
					}
					// skip // comments
					if (c === 47 && data[ofs.$ + 1] === 47) {
						while (data[ofs.$] !== 0 && data[ofs.$] !== 10) {
							ofs.$++;
						}
						$state = 1;
						continue $sm1;
					}
					// handle quoted strings specially
					if (c === 34) {
						ofs.$++;
						while (true) {
							c = data[ofs.$++];
							if (c === 34 || c === 0) {
								return;
							}
							$quake_common.com_token += String.fromCharCode($System_Convert.toChar(c));
							len++;
						}
					}
					// parse single characters
					if (c === 123 || c === 125 || c === 41 || c === 40 || c === 39 || c === 58) {
						$quake_common.com_token += String.fromCharCode($System_Convert.toChar(c));
						len++;
						ofs.$++;
						return;
					}
					// parse a regular word
					do {
						$quake_common.com_token += String.fromCharCode($System_Convert.toChar(c));
						ofs.$++;
						len++;
						c = data[ofs.$];
						if (c === 123 || c === 125 || c === 41 || c === 40 || c === 39 || c === 58) {
							break;
						}
					} while (c > 32);
					$state = -1;
					break $sm1;
				}
				default: {
					break $sm1;
				}
			}
		}
	};
	$quake_common.coM_CheckParm = function(parm) {
		var i;
		for (i = 1; i < $quake_common.com_argc; i++) {
			if (ss.isNullOrUndefined($quake_common.com_argv[i])) {
				continue;
			}
			// NEXTSTEP sometimes clears appkit vars.
			if (parm.compareTo($quake_common.com_argv[i]) === 0) {
				return i;
			}
		}
		return 0;
	};
	$quake_common.$coM_CheckRegistered = function() {
		var h = { $: -1 };
		var check = new Array(128);
		var i;
		var buf;
		var kk;
		var ofs = {};
		$quake_common.coM_OpenFile('gfx/pop.lmp', h);
		$quake_common.$static_registered = false;
		if (h.$ === -1) {
			//		        Con_Printf ("Playing shareware version.\n");
			//		        if (com_modified)
			//		        Sys_Error ("You must have the registered version to use modified games");
			return;
		}
		buf = new Uint8Array(256);
		$quake_sys_linux.sys_FileRead(h.$, buf, buf.length);
		ofs.$ = 0;
		for (kk = 0; kk < 128; kk++) {
			check[kk] = $quake_common.parseUshort(buf, ofs);
		}
		$quake_common.$coM_CloseFile(h.$);
		for (i = 0; i < 128; i++) {
			if ($quake_common.$pop[i] !== check[i]) {
				$quake_sys_linux.sys_Error('Corrupted data file.');
			}
		}
		$quake_cvar_t.cvar_Set('cmdline', $quake_common.$com_cmdline);
		$quake_cvar_t.cvar_Set('registered', '1');
		$quake_common.$static_registered = true;
		$quake_console.con_Printf('Playing registered version.');
	};
	$quake_common.coM_Init = function(basedir) {
		$quake_cvar_t.cvar_RegisterVariable($quake_common.$registered);
		$quake_cvar_t.cvar_RegisterVariable($quake_common.$cmdline);
		$quake_cmd.cmd_AddCommand('path', $quake_common.$coM_Path_f);
		$quake_common.$coM_InitFilesystem();
		$quake_common.$coM_CheckRegistered();
	};
	$quake_common.$coM_Path_f = function() {
		var s;
		$quake_console.con_Printf('Current search path:\n');
		for (s = $quake_common.$com_searchpaths; ss.isValue(s); s = s.$next) {
			if (ss.isValue(s.$pack)) {
				$quake_console.con_Printf(s.$pack.$filename + ' (' + s.$pack.$numfiles + ' files)\n');
			}
			else {
				$quake_console.con_Printf(s.$filename + '\n');
			}
		}
	};
	$quake_common.$coM_FindFile = function(filename, handle, file) {
		var search;
		var netpath;
		var cachepath;
		var pak;
		var i;
		var findtime, cachetime;
		//	        if (file && handle)
		//	        Sys_Error ("COM_FindFile: both handle and file set");
		//	        if (!file && !handle)
		//	        Sys_Error ("COM_FindFile: neither handle or file set");
		//
		// search through the path, one element at a time
		//
		search = $quake_common.$com_searchpaths;
		if ($quake_common.$proghack) {
			// gross hack to use quake 1 progs with quake 2 maps
			if (filename.compareTo('progs.dat') === 0) {
				search = search.$next;
			}
		}
		for (; ss.isValue(search); search = search.$next) {
			// is the element a pak file?
			if (ss.isValue(search.$pack)) {
				// look through all the pak file elements
				pak = search.$pack;
				for (i = 0; i < pak.$numfiles; i++) {
					if (pak.$files[i].$name.compareTo(filename) === 0) {
						// found it!
						$quake_sys_linux.sys_Printf('PackFile: ' + pak.$filename + ' : ' + filename + '\n');
						if (handle.$ !== -1) {
							handle.$ = pak.$handle;
							$quake_sys_linux.sys_FileSeek(pak.$handle, pak.$files[i].$filepos);
						}
						else {
							// open a new file on the pakfile
							var pf = pak.$filename;
							if (pf.startsWith('./')) {
								pf = pf.substring(2);
							}
							var si = getResourceStream(new $System_Uri('InnoveWare;component/' + pf, 2));
							if (ss.isValue(si)) {
								file.$ = new $Helper_helper$FILE();
								file.$.stream = si.get_stream();
							}
							//*file = fopen(pak->filename, "rb");
							if (ss.isValue(file.$)) {
								$Helper_helper.fseek(file.$, pak.$files[i].$filepos, $Helper_helper.seeK_SET);
							}
						}
						$quake_common.com_filesize = pak.$files[i].$filelen;
						return $quake_common.com_filesize;
					}
				}
			}
		}
		$quake_sys_linux.sys_Printf('FindFile: can\'t find ' + filename + '\n');
		if (handle.$ !== -1) {
			handle.$ = -1;
		}
		else {
			file.$ = null;
		}
		$quake_common.com_filesize = -1;
		return -1;
	};
	$quake_common.coM_OpenFile = function(filename, handle) {
		var file = { $: null };
		return $quake_common.$coM_FindFile(filename, handle, file);
	};
	$quake_common.coM_FOpenFile = function(filename, file) {
		var handle = { $: -1 };
		return $quake_common.$coM_FindFile(filename, handle, file);
	};
	$quake_common.$coM_CloseFile = function(h) {
		var s;
		for (s = $quake_common.$com_searchpaths; ss.isValue(s); s = s.$next) {
			if (ss.isValue(s.$pack) && s.$pack.$handle === h) {
				return;
			}
		}
		$quake_sys_linux.sys_FileClose(h);
	};
	$quake_common.coM_LoadFile = function(path, usehunk) {
		var h = { $: 0 };
		var buf;
		var _base;
		var len;
		buf = null;
		// quiet compiler warning
		// look for it in the filesystem or pack files
		len = $quake_common.coM_OpenFile(path, h);
		if (h.$ === -1) {
			return null;
		}
		// extract the filename base name for hunk tag
		//COM_FileBase (path, base);
		buf = new Uint8Array(len + 1);
		if (ss.isNullOrUndefined(buf)) {
			$quake_sys_linux.sys_Error('COM_LoadFile: not enough space for ' + path);
		}
		buf[len] = 0;
		$quake_draw.draw_BeginDisc();
		$quake_sys_linux.sys_FileRead(h.$, buf, len);
		$quake_common.$coM_CloseFile(h.$);
		$quake_draw.draw_EndDisc();
		return buf;
	};
	$quake_common.coM_LoadHunkFile = function(path) {
		return $quake_common.coM_LoadFile(path, 1);
	};
	$quake_common.coM_LoadStackFile = function(path, buffer, bufsize) {
		var buf;
		//loadbuf = (byte*)buffer;
		//loadsize = bufsize;
		buf = $quake_common.coM_LoadFile(path, 4);
		return buf;
	};
	$quake_common.parseString = function(buffer, offset) {
		var str = '';
		for (;;) {
			var ch = buffer[offset++];
			if (ch === 0) {
				break;
			}
			str += String.fromCharCode(ch);
		}
		return str;
	};
	$quake_common.parseString$1 = function(buffer, offset, count) {
		var str = '';
		for (var pos = 0; pos < count; pos++) {
			var ch = buffer[offset.$ + pos];
			if (ch === 0) {
				break;
			}
			str += String.fromCharCode(ch);
		}
		offset.$ += count;
		return str;
	};
	$quake_common.parseUshort = function(buffer, offset) {
		var num = buffer[offset.$ + 1] << 8 | buffer[offset.$];
		offset.$ += 2;
		return num;
	};
	$quake_common.parseInt = function(buffer, offset) {
		var num = buffer[offset.$ + 3] << 24 | buffer[offset.$ + 2] << 16 | buffer[offset.$ + 1] << 8 | buffer[offset.$];
		offset.$ += 4;
		return num;
	};
	$quake_common.parseChar = function(buffer, offset) {
		var num = buffer[offset.$];
		offset.$ += 1;
		return num;
	};
	$quake_common.$coM_LoadPackFile = function(packfile) {
		var header = new $quake_$common$dpackheader_t();
		var i;
		var newfiles;
		var numpackfiles;
		var pack = null;
		var packhandle = { $: -1 };
		var info = new Array($quake_common.$maX_FILES_IN_PACK);
		var crc;
		var kk;
		var buf;
		var ofs = {};
		if ($quake_sys_linux.sys_FileOpenRead(packfile, packhandle) === -1) {
			return null;
		}
		buf = new Uint8Array($quake_common.$sizeof_dpackheader_t);
		$quake_sys_linux.sys_FileRead(packhandle.$, buf, buf.length);
		ofs.$ = 0;
		header.$id = $quake_common.parseString$1(buf, ofs, 4);
		if (header.$id !== 'PACK') {
			$quake_sys_linux.sys_Error(packfile + ' is not a packfile');
		}
		header.$dirofs = $quake_common.parseInt(buf, ofs);
		header.$dirlen = $quake_common.parseInt(buf, ofs);
		numpackfiles = ss.Int32.div(header.$dirlen, $quake_common.$sizeof_dpackfile_t);
		if (numpackfiles > $quake_common.$maX_FILES_IN_PACK) {
			$quake_sys_linux.sys_Error(packfile + ' has ' + numpackfiles + ' files');
		}
		if (numpackfiles !== $quake_common.$paK0_COUNT) {
			$quake_common.$com_modified = true;
		}
		// not the original file
		newfiles = new Array(numpackfiles);
		for (kk = 0; kk < numpackfiles; kk++) {
			newfiles[kk] = new $quake_$common$packfile_t();
		}
		$quake_sys_linux.sys_FileSeek(packhandle.$, header.$dirofs);
		buf = new Uint8Array(header.$dirlen);
		$quake_sys_linux.sys_FileRead(packhandle.$, buf, header.$dirlen);
		ofs.$ = 0;
		for (kk = 0; kk < numpackfiles; kk++) {
			info[kk] = new $quake_$common$dpackfile_t();
			info[kk].$name = $quake_common.parseString$1(buf, ofs, 56);
			info[kk].$filepos = $quake_common.parseInt(buf, ofs);
			info[kk].$filelen = $quake_common.parseInt(buf, ofs);
		}
		// crc the directory to check for modifications
		//CRC_Init (&crc);
		//for (i=0 ; i<header.dirlen ; i++)
		//CRC_ProcessByte (&crc, ((byte *)info)[i]);
		//if (crc != PAK0_CRC)
		//com_modified = true;
		// parse the directory
		for (i = 0; i < numpackfiles; i++) {
			newfiles[i].$name = info[i].$name;
			newfiles[i].$filepos = info[i].$filepos;
			newfiles[i].$filelen = info[i].$filelen;
		}
		pack = new $quake_$common$pack_t();
		pack.$filename = packfile;
		pack.$handle = packhandle.$;
		pack.$numfiles = numpackfiles;
		pack.$files = newfiles;
		//Con_Printf ("Added packfile %s (%i files)\n", packfile, numpackfiles);
		return pack;
	};
	$quake_common.$coM_AddGameDirectory = function(dir) {
		var i;
		var search;
		var pak;
		var pakfile;
		$quake_common.com_gamedir = dir;
		//
		// add the directory to the search path
		//
		search = new $quake_$common$searchpath_t();
		search.$filename = dir;
		search.$next = $quake_common.$com_searchpaths;
		$quake_common.$com_searchpaths = search;
		//
		// add any pak files in the format pak0.pak pak1.pak, ...
		//
		for (i = 0;; i++) {
			pakfile = dir + '/pak' + i + '.pak';
			pak = $quake_common.$coM_LoadPackFile(pakfile);
			if (ss.isNullOrUndefined(pak)) {
				break;
			}
			search = new $quake_$common$searchpath_t();
			search.$pack = pak;
			search.$next = $quake_common.$com_searchpaths;
			$quake_common.$com_searchpaths = search;
		}
		//
		// add the contents of the parms.txt file to the end of the command line
		//
	};
	$quake_common.$coM_InitFilesystem = function() {
		var i, j;
		var basedir = '.';
		var search;
		//
		// start up with GAMENAME by default (id1)
		//
		$quake_common.$coM_AddGameDirectory(basedir + '/' + $quake_quakedef.GAMENAME);
		if ($quake_common.coM_CheckParm('-rogue') !== 0) {
			$quake_common.$coM_AddGameDirectory(basedir + '/rogue');
		}
		if ($quake_common.coM_CheckParm('-hipnotic') !== 0) {
			$quake_common.$coM_AddGameDirectory(basedir + '/hipnotic');
		}
		if ($quake_common.coM_CheckParm('-proghack') !== 0) {
			$quake_common.$proghack = true;
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.common.sizebuf_t
	var $quake_common$sizebuf_t = function() {
		this.allowoverflow = false;
		this.overflowed = false;
		this.data = null;
		this.maxsize = 0;
		this.cursize = 0;
	};
	$quake_common$sizebuf_t.copy = function(src, dst) {
		dst.allowoverflow = src.allowoverflow;
		dst.overflowed = src.overflowed;
		dst.data = src.data;
		dst.maxsize = src.maxsize;
		dst.cursize = src.cursize;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.console
	var $quake_console = function() {
	};
	$quake_console.prototype = {
		$con_SafePrintf: function(fmt) {
			var msg;
			var temp;
			msg = fmt;
			temp = $quake_screen.scr_disabled_for_loading;
			$quake_screen.scr_disabled_for_loading = true;
			$quake_console.con_Printf(msg);
			$quake_screen.scr_disabled_for_loading = temp;
		},
		$con_NotifyBox: function(text) {
			var t1, t2;
			// during startup for sound / cd warnings
			$quake_console.con_Printf('\n\n\n');
			$quake_console.con_Printf(text);
			$quake_console.con_Printf('Press a key.\n');
			$quake_console.con_Printf('\n');
			$quake_console.con_Printf('\n');
			$quake_host.realtime = 0;
			// put the cursor back to invisible
		}
	};
	$quake_console.con_ToggleConsole_f = function() {
		if ($quake_keys.key_dest === 1) {
			if ($quake_client.cls.state === 2) {
				$quake_keys.key_dest = 0;
				$quake_keys.key_lines[$quake_keys.edit_line] = $quake_keys.key_lines[$quake_keys.edit_line].substring(0, 1);
				// clear any typing
				$quake_keys.key_linepos = 1;
			}
			else {
				$quake_menu.m_Menu_Main_f();
			}
		}
		else {
			$quake_keys.key_dest = 1;
		}
		$quake_screen.scR_EndLoadingPlaque();
		for (var kk = 0; kk < $quake_console.$con_times.length; kk++) {
			$quake_console.$con_times[kk] = 0;
		}
	};
	$quake_console.$con_Clear_f = function() {
		if (ss.isValue($quake_console.$con_text)) {
			for (var kk = 0; kk < $quake_console.$coN_TEXTSIZE; kk++) {
				$quake_console.$con_text[kk] = 32;
			}
		}
	};
	$quake_console.con_ClearNotify = function() {
		var i;
		for (i = 0; i < $quake_console.$nuM_CON_TIMES; i++) {
			$quake_console.$con_times[i] = 0;
		}
	};
	$quake_console.$con_MessageMode_f = function() {
	};
	$quake_console.$con_MessageMode2_f = function() {
	};
	$quake_console.con_CheckResize = function() {
		var i, j, width, oldwidth, oldtotallines, numlines, numchars;
		var tbuf = new Array($quake_console.$coN_TEXTSIZE);
		width = ($quake_screen.vid.width >> 3) - 2;
		if (width === $quake_console.$con_linewidth) {
			return;
		}
		if (width < 1) {
			width = 38;
			$quake_console.$con_linewidth = width;
			$quake_console.con_totallines = ss.Int32.div($quake_console.$coN_TEXTSIZE, $quake_console.$con_linewidth);
			for (var kk = 0; kk < $quake_console.$coN_TEXTSIZE; kk++) {
				$quake_console.$con_text[kk] = 32;
			}
		}
		else {
			oldwidth = $quake_console.$con_linewidth;
			$quake_console.$con_linewidth = width;
			oldtotallines = $quake_console.con_totallines;
			$quake_console.con_totallines = ss.Int32.div($quake_console.$coN_TEXTSIZE, $quake_console.$con_linewidth);
			numlines = oldtotallines;
			if ($quake_console.con_totallines < numlines) {
				numlines = $quake_console.con_totallines;
			}
			numchars = oldwidth;
			if ($quake_console.$con_linewidth < numchars) {
				numchars = $quake_console.$con_linewidth;
			}
			$System_Buffer.blockCopy($quake_console.$con_text, 0, tbuf, 0, $quake_console.$coN_TEXTSIZE);
			for (var kk1 = 0; kk1 < $quake_console.$coN_TEXTSIZE; kk1++) {
				$quake_console.$con_text[kk1] = 32;
			}
			for (i = 0; i < numlines; i++) {
				for (j = 0; j < numchars; j++) {
					$quake_console.$con_text[($quake_console.con_totallines - 1 - i) * $quake_console.$con_linewidth + j] = tbuf[($quake_console.$con_current - i + oldtotallines) % oldtotallines * oldwidth + j];
				}
			}
			$quake_console.con_ClearNotify();
		}
		$quake_console.con_backscroll = 0;
		$quake_console.$con_current = $quake_console.con_totallines - 1;
	};
	$quake_console.con_Init = function() {
		var MAXGAMEDIRLEN = 1000;
		var temp;
		var t2 = '/qconsole.log';
		$quake_console.$con_debuglog = $quake_common.coM_CheckParm('-condebug') !== 0;
		$quake_console.$con_text = new Array($quake_console.$coN_TEXTSIZE);
		for (var kk = 0; kk < $quake_console.$coN_TEXTSIZE; kk++) {
			$quake_console.$con_text[kk] = 32;
		}
		$quake_console.$con_linewidth = -1;
		$quake_console.con_CheckResize();
		$quake_console.con_Printf('Console initialized.\n');
		//
		// register our commands
		//
		$quake_cvar_t.cvar_RegisterVariable($quake_console.$con_notifytime);
		$quake_cmd.cmd_AddCommand('toggleconsole', $quake_console.con_ToggleConsole_f);
		$quake_cmd.cmd_AddCommand('messagemode', $quake_console.$con_MessageMode_f);
		$quake_cmd.cmd_AddCommand('messagemode2', $quake_console.$con_MessageMode2_f);
		$quake_cmd.cmd_AddCommand('clear', $quake_console.$con_Clear_f);
		$quake_console.con_initialized = true;
	};
	$quake_console.$con_Linefeed = function() {
		$quake_console.$con_x = 0;
		$quake_console.$con_current++;
		var ofs = $quake_console.$con_current % $quake_console.con_totallines * $quake_console.$con_linewidth;
		for (var kk = 0; kk < $quake_console.$con_linewidth; kk++) {
			$quake_console.$con_text[ofs + kk] = 32;
		}
	};
	$quake_console.$con_Print = function(txt) {
		var y;
		var c, l;
		var mask;
		var ofs = 0;
		$quake_console.con_backscroll = 0;
		if (txt.charCodeAt(0) === 1) {
			mask = 128;
			// go to colored text
			// play talk wav
			ofs++;
		}
		else if (txt.charCodeAt(0) === 2) {
			mask = 128;
			// go to colored text
			ofs++;
		}
		else {
			mask = 0;
		}
		while (ofs !== txt.length) {
			c = txt.charCodeAt(ofs);
			// count word length
			for (l = 0; l < $quake_console.$con_linewidth; l++) {
				if (ofs + l === txt.length || txt.charCodeAt(ofs + l) <= 32) {
					break;
				}
			}
			// word wrap
			if (l !== $quake_console.$con_linewidth && $quake_console.$con_x + l > $quake_console.$con_linewidth) {
				$quake_console.$con_x = 0;
			}
			ofs++;
			if ($quake_console.$cr) {
				$quake_console.$con_current--;
				$quake_console.$cr = false;
			}
			if ($quake_console.$con_x === 0) {
				$quake_console.$con_Linefeed();
				// mark time for transparent overlay
				if ($quake_console.$con_current >= 0) {
					$quake_console.$con_times[$quake_console.$con_current % $quake_console.$nuM_CON_TIMES] = $quake_host.realtime;
				}
			}
			switch (c) {
				case 10: {
					$quake_console.$con_x = 0;
					break;
				}
				case 13: {
					$quake_console.$con_x = 0;
					$quake_console.$cr = true;
					break;
				}
				default: {
					y = $quake_console.$con_current % $quake_console.con_totallines;
					$quake_console.$con_text[y * $quake_console.$con_linewidth + $quake_console.$con_x] = c | mask;
					$quake_console.$con_x++;
					if ($quake_console.$con_x >= $quake_console.$con_linewidth) {
						$quake_console.$con_x = 0;
					}
					break;
				}
			}
		}
	};
	$quake_console.$con_DebugLog = function(file, fmt) {
	};
	$quake_console.con_Printf = function(fmt) {
		var msg = fmt;
		// also echo to debugging console
		$quake_sys_linux.sys_Printf(msg);
		// also echo to debugging console
		// log all messages to file
		if ($quake_console.$con_debuglog) {
			$quake_console.$con_DebugLog($quake_common.com_gamedir + '/qconsole.log', msg);
		}
		if (!$quake_console.con_initialized) {
			return;
		}
		if ($quake_client.cls.state === 0) {
			return;
		}
		// no graphics mode
		// write it to the scrollable buffer
		$quake_console.$con_Print(msg);
		// update the screen if the console is displayed
		if ($quake_client.cls.signon !== $quake_client.SIGNONS && !$quake_screen.scr_disabled_for_loading) {
			// protect against infinite loop if something in SCR_UpdateScreen calls
			// Con_Printd
			if (!$quake_console.$inupdate) {
				$quake_console.$inupdate = true;
				$quake_screen.scR_UpdateScreen();
				$quake_console.$inupdate = false;
			}
		}
	};
	$quake_console.con_DPrintf = function(fmt) {
		var msg;
		if ($quake_host.developer.value === 0) {
			return;
		}
		// don't confuse non-developers with techie stuff...
		msg = fmt;
		$quake_console.con_Printf(msg);
	};
	$quake_console.$con_DrawInput = function() {
		var y;
		var i;
		var text;
		var ofs = 0;
		if ($quake_keys.key_dest !== 1 && !$quake_console.con_forcedup) {
			return;
		}
		// don't draw anything
		text = $quake_keys.key_lines[$quake_keys.edit_line];
		// add the cursor frame
		text = text.substring(0, $quake_keys.key_linepos) + String.fromCharCode($System_Convert.toChar(10 + (ss.Int32.trunc($quake_host.realtime * $quake_console.$con_cursorspeed) & 1)));
		// fill out remainder with spaces
		for (i = $quake_keys.key_linepos + 1; i < $quake_console.$con_linewidth; i++) {
			text += ' ';
		}
		//	prestep if horizontally scrolling
		if ($quake_keys.key_linepos >= $quake_console.$con_linewidth) {
			ofs += 1 + $quake_keys.key_linepos - $quake_console.$con_linewidth;
		}
		// draw it
		y = $quake_console.$con_vislines - 16;
		for (i = 0; i < $quake_console.$con_linewidth; i++) {
			$quake_draw.draw_Character(i + 1 << 3, $quake_console.$con_vislines - 16, text.charCodeAt(ofs + i));
		}
		// remove cursor
	};
	$quake_console.con_DrawNotify = function() {
		var x, v;
		var text;
		var i;
		var time;
		v = 0;
		for (i = $quake_console.$con_current - $quake_console.$nuM_CON_TIMES + 1; i <= $quake_console.$con_current; i++) {
			if (i < 0) {
				continue;
			}
			time = $quake_console.$con_times[i % $quake_console.$nuM_CON_TIMES];
			if (time === 0) {
				continue;
			}
			time = $quake_host.realtime - time;
			if (time > $quake_console.$con_notifytime.value) {
				continue;
			}
			text = i % $quake_console.con_totallines * $quake_console.$con_linewidth;
			$quake_screen.clearnotify = 0;
			$quake_screen.scr_copytop = true;
			for (x = 0; x < $quake_console.$con_linewidth; x++) {
				$quake_draw.draw_Character(x + 1 << 3, v, $quake_console.$con_text[text + x]);
			}
			v += 8;
		}
		if (v > $quake_console.con_notifylines) {
			$quake_console.con_notifylines = v;
		}
	};
	$quake_console.con_DrawConsole = function(lines, drawinput) {
		var i, x, y;
		var rows;
		var text;
		var j;
		if (lines <= 0) {
			return;
		}
		// draw the background
		$quake_draw.draw_ConsoleBackground(lines);
		// draw the text
		$quake_console.$con_vislines = lines;
		rows = lines - 16 >> 3;
		// rows of text to draw
		y = lines - 16 - (rows << 3);
		// may start slightly negative
		for (i = $quake_console.$con_current - rows + 1; i <= $quake_console.$con_current; i++, y += 8) {
			j = i - $quake_console.con_backscroll;
			if (j < 0) {
				j = 0;
			}
			text = j % $quake_console.con_totallines * $quake_console.$con_linewidth;
			for (x = 0; x < $quake_console.$con_linewidth; x++) {
				$quake_draw.draw_Character(x + 1 << 3, y, $quake_console.$con_text[text + x]);
			}
		}
		// draw the input prompt, user text, and cursor if desired
		if (drawinput) {
			$quake_console.$con_DrawInput();
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.crc
	var $quake_crc = function() {
	};
	$quake_crc.prototype = {
		$crC_Value: function(crcvalue) {
			return crcvalue ^ $quake_crc.crC_XOR_VALUE;
		}
	};
	$quake_crc.crC_Init = function() {
		return $quake_crc.crC_INIT_VALUE;
	};
	$quake_crc.crC_ProcessByte = function(crcvalue, data) {
		return crcvalue << 8 ^ $quake_crc.$crctable[crcvalue >> 8 ^ data];
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.cvar_t
	var $quake_cvar_t = function(name, _string) {
		$quake_cvar_t.$ctor2.call(this, name, _string, false, false);
	};
	$quake_cvar_t.$ctor1 = function(name, _string, archive) {
		$quake_cvar_t.$ctor2.call(this, name, _string, archive, false);
	};
	$quake_cvar_t.$ctor2 = function(name, _string, archive, server) {
		this.$name = null;
		this._string = null;
		this.$archive = false;
		this.$server = false;
		this.value = 0;
		this.$next = null;
		this.$name = name;
		this._string = _string;
		this.$archive = archive;
		this.$server = server;
	};
	$quake_cvar_t.$ctor1.prototype = $quake_cvar_t.$ctor2.prototype = $quake_cvar_t.prototype;
	$quake_cvar_t.$cvar_FindVar = function(var_name) {
		var var1;
		for (var1 = $quake_cvar_t.$cvar_vars; ss.isValue(var1); var1 = var1.$next) {
			if (var_name.compareTo(var1.$name) === 0) {
				return var1;
			}
		}
		return null;
	};
	$quake_cvar_t.cvar_VariableValue = function(var_name) {
		var var1;
		var1 = $quake_cvar_t.$cvar_FindVar(var_name);
		if (ss.isNullOrUndefined(var1)) {
			return 0;
		}
		return parseFloat(var1._string);
	};
	$quake_cvar_t.cvar_VariableString = function(var_name) {
		var var1;
		var1 = $quake_cvar_t.$cvar_FindVar(var_name);
		if (ss.isNullOrUndefined(var1)) {
			return $quake_cvar_t.$cvar_null_string;
		}
		return var1._string;
	};
	$quake_cvar_t.cvar_CompleteVariable = function(partial) {
		var cvar;
		var len;
		len = partial.length;
		if (len === 0) {
			return null;
		}
		// check functions
		for (cvar = $quake_cvar_t.$cvar_vars; ss.isValue(cvar); cvar = cvar.$next) {
			if (partial.compareTo(cvar.$name.substring(0, len)) === 0) {
				return cvar.$name;
			}
		}
		return null;
	};
	$quake_cvar_t.cvar_Set = function(var_name, value) {
		var var1;
		var changed;
		var1 = $quake_cvar_t.$cvar_FindVar(var_name);
		if (ss.isNullOrUndefined(var1)) {
			// there is an error in C code if this happens
			$quake_console.con_Printf('Cvar_Set: variable ' + var_name + ' not found\n');
			return;
		}
		changed = var1._string.compareTo(value) !== 0;
		var1._string = null;
		// free the old value string
		var1._string = value;
		var1.value = $quake_common.q_atof(var1._string);
		if (var1.$server && changed) {
		}
	};
	$quake_cvar_t.cvar_SetValue = function(var_name, value) {
		var val;
		val = $System_Convert.toString$1(value);
		val = val.replaceAll(',', '.');
		$quake_cvar_t.cvar_Set(var_name, val);
	};
	$quake_cvar_t.cvar_RegisterVariable = function(variable) {
		var oldstr;
		// first check to see if it has allready been defined
		if (ss.isValue($quake_cvar_t.$cvar_FindVar(variable.$name))) {
			$quake_console.con_Printf('Can\'t register variable ' + variable.$name + ', allready defined\n');
			return;
		}
		// check for overlap with a command
		if ($quake_cmd.cmd_Exists(variable.$name)) {
			$quake_console.con_Printf('Cvar_RegisterVariable: ' + variable.$name + ' is a command\n');
			return;
		}
		// copy the value off, because future sets will Z_Free it
		oldstr = variable._string;
		variable._string = oldstr;
		variable.value = $quake_common.q_atof(variable._string);
		// link the variable in
		variable.$next = $quake_cvar_t.$cvar_vars;
		$quake_cvar_t.$cvar_vars = variable;
	};
	$quake_cvar_t.cvar_Command = function() {
		var v;
		// check variables
		v = $quake_cvar_t.$cvar_FindVar($quake_cmd.cmd_Argv(0));
		if (ss.isNullOrUndefined(v)) {
			return false;
		}
		// perform a variable print or set
		if ($quake_cmd.cmd_Argc() === 1) {
			$quake_console.con_Printf('"' + v.$name + '" is "' + v._string + '"\n');
			return true;
		}
		$quake_cvar_t.cvar_Set(v.$name, $quake_cmd.cmd_Argv(1));
		return true;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw
	var $quake_draw = function() {
		this.$vstartscan = 0;
		this.$d_initial_rover = null;
	};
	$quake_draw.prototype = {
		$draw_DebugChar: function(num) {
		},
		$draw_Fill: function(x, y, w, h, c) {
		}
	};
	$quake_draw.draw_PicFromWad = function(name) {
		return $quake_wad$qpic_t.op_Implicit($quake_wad.w_GetLumpName(name));
	};
	$quake_draw.draw_CachePic = function(path) {
		var pic;
		var i;
		var dat;
		for (pic = $quake_draw.$menu_cachepics[0], i = 0; i < $quake_draw.$menu_numcachepics; i++, pic = $quake_draw.$menu_cachepics[i]) {
			if (path.compareTo(pic.name) === 0) {
				break;
			}
		}
		if (i === $quake_draw.$menu_numcachepics) {
			if ($quake_draw.$menu_numcachepics === $quake_draw.maX_CACHED_PICS) {
				$quake_sys_linux.sys_Error('menu_numcachepics == MAX_CACHED_PICS');
			}
			$quake_draw.$menu_numcachepics++;
			pic.name = path;
		}
		dat = pic.cache;
		if (ss.isValue(dat)) {
			return dat;
		}
		//
		// load the pic from disk
		//
		pic.cache = $quake_wad$qpic_t.op_Implicit($quake_common.coM_LoadHunkFile(path));
		dat = pic.cache;
		if (ss.isNullOrUndefined(dat)) {
			$quake_sys_linux.sys_Error('Draw_CachePic: failed to load ' + path);
		}
		return dat;
	};
	$quake_draw.draw_Init = function() {
		$quake_draw.$draw_chars = $quake_wad.w_GetLumpName('conchars');
		$quake_draw.draw_disc = $quake_wad$qpic_t.op_Implicit($quake_wad.w_GetLumpName('disc'));
		$quake_draw.$draw_backtile = $quake_wad$qpic_t.op_Implicit($quake_wad.w_GetLumpName('backtile'));
		$quake_draw.$r_rectdesc.$width = $quake_draw.$draw_backtile.width;
		$quake_draw.$r_rectdesc.$height = $quake_draw.$draw_backtile.height;
		$quake_draw.$r_rectdesc.$ptexbytes = $quake_draw.$draw_backtile.data;
		$quake_draw.$r_rectdesc.$rowbytes = $quake_draw.$draw_backtile.width;
	};
	$quake_draw.draw_Character = function(x, y, num) {
		var dest;
		var source;
		var drawline;
		var row, col;
		num &= 255;
		if (y <= -8) {
			return;
		}
		// totally off screen
		row = num >> 4;
		col = num & 15;
		source = (row << 10) + (col << 3);
		if (y < 0) {
			// clipped
			drawline = 8 + y;
			source -= 128 * y;
			y = 0;
		}
		else {
			drawline = 8;
		}
		dest = y * $quake_screen.vid.conrowbytes + x;
		while (drawline-- !== 0) {
			if ($quake_draw.$draw_chars[source + 0] !== 0) {
				$quake_screen.vid.conbuffer[dest + 0] = $quake_draw.$draw_chars[source + 0];
			}
			if ($quake_draw.$draw_chars[source + 1] !== 0) {
				$quake_screen.vid.conbuffer[dest + 1] = $quake_draw.$draw_chars[source + 1];
			}
			if ($quake_draw.$draw_chars[source + 2] !== 0) {
				$quake_screen.vid.conbuffer[dest + 2] = $quake_draw.$draw_chars[source + 2];
			}
			if ($quake_draw.$draw_chars[source + 3] !== 0) {
				$quake_screen.vid.conbuffer[dest + 3] = $quake_draw.$draw_chars[source + 3];
			}
			if ($quake_draw.$draw_chars[source + 4] !== 0) {
				$quake_screen.vid.conbuffer[dest + 4] = $quake_draw.$draw_chars[source + 4];
			}
			if ($quake_draw.$draw_chars[source + 5] !== 0) {
				$quake_screen.vid.conbuffer[dest + 5] = $quake_draw.$draw_chars[source + 5];
			}
			if ($quake_draw.$draw_chars[source + 6] !== 0) {
				$quake_screen.vid.conbuffer[dest + 6] = $quake_draw.$draw_chars[source + 6];
			}
			if ($quake_draw.$draw_chars[source + 7] !== 0) {
				$quake_screen.vid.conbuffer[dest + 7] = $quake_draw.$draw_chars[source + 7];
			}
			source += 128;
			dest += $quake_screen.vid.conrowbytes;
		}
	};
	$quake_draw.draw_String = function(x, y, str) {
		for (var i = 0; i < str.length; i++) {
			$quake_draw.draw_Character(x, y, str.charCodeAt(i));
			x += 8;
		}
	};
	$quake_draw.draw_Pic = function(x, y, pic) {
		var dest, source;
		var v, u;
		if (x < 0 || x + pic.width > $quake_screen.vid.width || y < 0 || y + pic.height > $quake_screen.vid.height) {
			$quake_sys_linux.sys_Error('Draw_Pic: bad coordinates');
		}
		source = pic.data;
		dest = $quake_screen.vid.buffer;
		var srcofs = 0;
		var dstofs = y * $quake_screen.vid.rowbytes + x;
		for (v = 0; v < pic.height; v++) {
			$System_Buffer.blockCopy$1(source, srcofs, dest, dstofs, pic.width);
			dstofs += $quake_screen.vid.rowbytes;
			srcofs += pic.width;
		}
	};
	$quake_draw.draw_TransPic = function(x, y, pic) {
		var dest, source;
		var tbyte;
		var v, u;
		if (x < 0 || x + pic.width > $quake_screen.vid.width || y < 0 || y + pic.height > $quake_screen.vid.height) {
			$quake_sys_linux.sys_Error('Draw_TransPic: bad coordinates');
		}
		source = 0;
		dest = y * $quake_screen.vid.rowbytes + x;
		if ((pic.width & 7) !== 0) {
			// general
			for (v = 0; v < pic.height; v++) {
				for (u = 0; u < pic.width; u++) {
					if ((tbyte = pic.data[source + u]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u] = tbyte;
					}
				}
				dest += $quake_screen.vid.rowbytes;
				source += pic.width;
			}
		}
		else {
			// unwound
			for (v = 0; v < pic.height; v++) {
				for (u = 0; u < pic.width; u += 8) {
					if ((tbyte = pic.data[source + u]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u] = tbyte;
					}
					if ((tbyte = pic.data[source + u + 1]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u + 1] = tbyte;
					}
					if ((tbyte = pic.data[source + u + 2]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u + 2] = tbyte;
					}
					if ((tbyte = pic.data[source + u + 3]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u + 3] = tbyte;
					}
					if ((tbyte = pic.data[source + u + 4]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u + 4] = tbyte;
					}
					if ((tbyte = pic.data[source + u + 5]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u + 5] = tbyte;
					}
					if ((tbyte = pic.data[source + u + 6]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u + 6] = tbyte;
					}
					if ((tbyte = pic.data[source + u + 7]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u + 7] = tbyte;
					}
				}
				dest += $quake_screen.vid.rowbytes;
				source += pic.width;
			}
		}
	};
	$quake_draw.draw_TransPicTranslate = function(x, y, pic, translation) {
		var dest, source;
		var tbyte;
		var v, u;
		if (x < 0 || x + pic.width > $quake_screen.vid.width || y < 0 || y + pic.height > $quake_screen.vid.height) {
			$quake_sys_linux.sys_Error('Draw_TransPic: bad coordinates');
		}
		source = 0;
		dest = y * $quake_screen.vid.rowbytes + x;
		if ((pic.width & 7) !== 0) {
			// general
			for (v = 0; v < pic.height; v++) {
				for (u = 0; u < pic.width; u++) {
					if ((tbyte = pic.data[source + u]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u] = translation[tbyte];
					}
				}
				dest += $quake_screen.vid.rowbytes;
				source += pic.width;
			}
		}
		else {
			// unwound
			for (v = 0; v < pic.height; v++) {
				for (u = 0; u < pic.width; u += 8) {
					if ((tbyte = pic.data[source + u]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u] = translation[tbyte];
					}
					if ((tbyte = pic.data[source + u + 1]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u + 1] = translation[tbyte];
					}
					if ((tbyte = pic.data[source + u + 2]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u + 2] = translation[tbyte];
					}
					if ((tbyte = pic.data[source + u + 3]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u + 3] = translation[tbyte];
					}
					if ((tbyte = pic.data[source + u + 4]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u + 4] = translation[tbyte];
					}
					if ((tbyte = pic.data[source + u + 5]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u + 5] = translation[tbyte];
					}
					if ((tbyte = pic.data[source + u + 6]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u + 6] = translation[tbyte];
					}
					if ((tbyte = pic.data[source + u + 7]) !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[dest + u + 7] = translation[tbyte];
					}
				}
				dest += $quake_screen.vid.rowbytes;
				source += pic.width;
			}
		}
	};
	$quake_draw.$draw_CharToConback = function(num, dest, ofs) {
		var row, col;
		var source;
		var drawline;
		var x;
		row = num >> 4;
		col = num & 15;
		source = (row << 10) + (col << 3);
		drawline = 8;
		while (drawline-- !== 0) {
			for (x = 0; x < 8; x++) {
				if ($quake_draw.$draw_chars[source + x] !== 0) {
					dest[x + ofs] = 96 + $quake_draw.$draw_chars[source + x];
				}
			}
			source += 128;
			ofs += 320;
		}
	};
	$quake_draw.draw_ConsoleBackground = function(lines) {
		var x, y, v;
		var src, dest;
		var f, fstep;
		var conback;
		var ver;
		conback = $quake_draw.draw_CachePic('gfx/conback.lmp');
		ver = String.format('(QuakeLight - JS Cross-compile {0:##.00}) {1:####.00}', $quake_quakedef.linuX_VERSION, $quake_quakedef.VERSION);
		//	        ver = "(Linux Quake " + quakedef.LINUX_VERSION + ") " + quakedef.VERSION;
		dest = 59829 - 8 * ver.length;
		for (x = 0; x < ver.length; x++) {
			$quake_draw.$draw_CharToConback(ver.charCodeAt(x), conback.data, dest + (x << 3));
		}
		// draw the pic
		dest = 0;
		for (y = 0; y < lines; y++, dest += $quake_screen.vid.conrowbytes) {
			v = ss.Int32.div(($quake_screen.vid.conheight - lines + y) * 200, $quake_screen.vid.conheight);
			src = v * 320;
			if ($quake_screen.vid.conwidth === 320) {
				$System_Buffer.blockCopy$1(conback.data, src, $quake_screen.vid.conbuffer, dest, $quake_screen.vid.conwidth);
			}
			else {
				f = 0;
				fstep = ss.Int32.div(20971520, $quake_screen.vid.conwidth);
				for (x = 0; x < $quake_screen.vid.conwidth; x += 4) {
					$quake_screen.vid.conbuffer[dest + x] = conback.data[src + (f >> 16)];
					f += fstep;
					$quake_screen.vid.conbuffer[dest + x + 1] = conback.data[src + (f >> 16)];
					f += fstep;
					$quake_screen.vid.conbuffer[dest + x + 2] = conback.data[src + (f >> 16)];
					f += fstep;
					$quake_screen.vid.conbuffer[dest + x + 3] = conback.data[src + (f >> 16)];
					f += fstep;
				}
			}
		}
	};
	$quake_draw.$r_DrawRect8 = function(prect, rowbytes, psrc, transparent) {
		var t;
		var i, j, srcdelta, destdelta;
		var pdest;
		pdest = prect.y * $quake_screen.vid.rowbytes + prect.x;
		srcdelta = rowbytes - prect.width;
		destdelta = $quake_screen.vid.rowbytes - prect.width;
		if (transparent !== 0) {
			for (i = 0; i < prect.height; i++) {
				for (j = 0; j < prect.width; j++) {
					t = $quake_draw.$r_rectdesc.$ptexbytes[psrc];
					if (t !== $quake_draw.transparenT_COLOR) {
						$quake_screen.vid.buffer[pdest] = t;
					}
					psrc++;
					pdest++;
				}
				psrc += srcdelta;
				pdest += destdelta;
			}
		}
		else {
			for (i = 0; i < prect.height; i++) {
				$System_Buffer.blockCopy$1($quake_draw.$r_rectdesc.$ptexbytes, psrc, $quake_screen.vid.buffer, pdest, prect.width);
				psrc += rowbytes;
				pdest += $quake_screen.vid.rowbytes;
			}
		}
	};
	$quake_draw.draw_TileClear = function(x, y, w, h) {
		var width, height, tileoffsetx, tileoffsety;
		var psrc;
		var vr = new $quake_vid$vrect_t();
		$quake_draw.$r_rectdesc.$rect.x = x;
		$quake_draw.$r_rectdesc.$rect.y = y;
		$quake_draw.$r_rectdesc.$rect.width = w;
		$quake_draw.$r_rectdesc.$rect.height = h;
		vr.y = $quake_draw.$r_rectdesc.$rect.y;
		height = $quake_draw.$r_rectdesc.$rect.height;
		tileoffsety = vr.y % $quake_draw.$r_rectdesc.$height;
		while (height > 0) {
			vr.x = $quake_draw.$r_rectdesc.$rect.x;
			width = $quake_draw.$r_rectdesc.$rect.width;
			if (tileoffsety !== 0) {
				vr.height = $quake_draw.$r_rectdesc.$height - tileoffsety;
			}
			else {
				vr.height = $quake_draw.$r_rectdesc.$height;
			}
			if (vr.height > height) {
				vr.height = height;
			}
			tileoffsetx = vr.x % $quake_draw.$r_rectdesc.$width;
			while (width > 0) {
				if (tileoffsetx !== 0) {
					vr.width = $quake_draw.$r_rectdesc.$width - tileoffsetx;
				}
				else {
					vr.width = $quake_draw.$r_rectdesc.$width;
				}
				if (vr.width > width) {
					vr.width = width;
				}
				psrc = tileoffsety * $quake_draw.$r_rectdesc.$rowbytes + tileoffsetx;
				if ($quake_render.r_pixbytes === 1) {
					$quake_draw.$r_DrawRect8(vr, $quake_draw.$r_rectdesc.$rowbytes, psrc, 0);
				}
				vr.x += vr.width;
				width -= vr.width;
				tileoffsetx = 0;
				// only the left tile can be left-clipped
			}
			vr.y += vr.height;
			height -= vr.height;
			tileoffsety = 0;
			// only the top tile can be top-clipped
		}
	};
	$quake_draw.draw_FadeScreen = function() {
		var x, y;
		var pbuf;
		for (y = 0; y < $quake_screen.vid.height; y++) {
			var t;
			pbuf = $quake_screen.vid.rowbytes * y;
			t = (y & 1) << 1;
			for (x = 0; x < $quake_screen.vid.width; x++) {
				if ((x & 3) !== t) {
					$quake_screen.vid.buffer[pbuf + x] = 0;
				}
			}
		}
	};
	$quake_draw.draw_BeginDisc = function() {
	};
	$quake_draw.draw_EndDisc = function() {
	};
	$quake_draw.$d_MipLevelForScale = function(scale) {
		var lmiplevel;
		if (scale >= $quake_draw.$d_scalemip[0]) {
			lmiplevel = 0;
		}
		else if (scale >= $quake_draw.$d_scalemip[1]) {
			lmiplevel = 1;
		}
		else if (scale >= $quake_draw.$d_scalemip[2]) {
			lmiplevel = 2;
		}
		else {
			lmiplevel = 3;
		}
		if (lmiplevel < $quake_draw.$d_minmip) {
			lmiplevel = $quake_draw.$d_minmip;
		}
		return lmiplevel;
	};
	$quake_draw.$d_DrawSolidSurface = function(surf, color) {
		var span;
		var pdest;
		var u, u2, pix;
		pix = color << 24 | color << 16 | color << 8 | color;
		for (span = surf.spans; ss.isValue(span); span = span.pnext) {
			pdest = $quake_draw.$screenwidth * span.v;
			u = span.u;
			u2 = span.u + span.count - 1;
			$quake_draw.d_viewbuffer[pdest + u] = pix;
			if (u2 - u < 8) {
				for (u++; u <= u2; u++) {
					$quake_draw.d_viewbuffer[pdest + u] = pix;
				}
			}
			else {
				for (u++; (u & 3) !== 0; u++) {
					$quake_draw.d_viewbuffer[pdest + u] = pix;
				}
				u2 -= 4;
				for (; u <= u2; u += 4) {
					$quake_draw.d_viewbuffer[pdest + u] = pix >> 24;
					$quake_draw.d_viewbuffer[pdest + u + 1] = pix >> 16;
					$quake_draw.d_viewbuffer[pdest + u + 2] = pix >> 8;
					$quake_draw.d_viewbuffer[pdest + u + 3] = pix;
				}
				u2 += 4;
				for (; u <= u2; u++) {
					$quake_draw.d_viewbuffer[pdest + u] = pix;
				}
			}
		}
	};
	$quake_draw.$d_CalcGradients = function(pface) {
		var pplane;
		var mipscale;
		var p_temp1 = new Array(3);
		var p_saxis = new Array(3), p_taxis = new Array(3);
		var t;
		pplane = pface.plane;
		mipscale = 1 / (1 << $quake_draw.$miplevel);
		$quake_render.transformVector(pface.texinfo.vecs[0], p_saxis);
		$quake_render.transformVector(pface.texinfo.vecs[1], p_taxis);
		t = $quake_render.xscaleinv * mipscale;
		$quake_draw.$d_sdivzstepu = p_saxis[0] * t;
		$quake_draw.$d_tdivzstepu = p_taxis[0] * t;
		t = $quake_render.yscaleinv * mipscale;
		$quake_draw.$d_sdivzstepv = -p_saxis[1] * t;
		$quake_draw.$d_tdivzstepv = -p_taxis[1] * t;
		$quake_draw.$d_sdivzorigin = p_saxis[2] * mipscale - $quake_render.xcenter * $quake_draw.$d_sdivzstepu - $quake_render.ycenter * $quake_draw.$d_sdivzstepv;
		$quake_draw.$d_tdivzorigin = p_taxis[2] * mipscale - $quake_render.xcenter * $quake_draw.$d_tdivzstepu - $quake_render.ycenter * $quake_draw.$d_tdivzstepv;
		$quake_mathlib.vectorScale($quake_draw.$transformed_modelorg, mipscale, p_temp1);
		t = 65536 * mipscale;
		$quake_draw.$sadjust = ss.Int32.trunc($quake_mathlib.dotProduct$1(p_temp1, p_saxis) * 65536 + 0.5) - (pface.texturemins[0] << 16 >> $quake_draw.$miplevel) + ss.Int32.trunc(pface.texinfo.vecs[0][3] * t);
		$quake_draw.$tadjust = ss.Int32.trunc($quake_mathlib.dotProduct$1(p_temp1, p_taxis) * 65536 + 0.5) - (pface.texturemins[1] << 16 >> $quake_draw.$miplevel) + ss.Int32.trunc(pface.texinfo.vecs[1][3] * t);
		//
		// -1 (-epsilon) so we never wander off the edge of the texture
		//
		$quake_draw.$bbextents = (pface.extents[0] << 16 >> $quake_draw.$miplevel) - 1;
		$quake_draw.$bbextentt = (pface.extents[1] << 16 >> $quake_draw.$miplevel) - 1;
	};
	$quake_draw.d_DrawSurfaces = function() {
		var s;
		var pface;
		var pcurrentcache;
		var world_transformed_modelorg = new Array(3);
		var local_modelorg = new Array(3);
		$quake_render.currententity = $quake_client.cl_entities[0];
		$quake_render.transformVector($quake_render.modelorg, $quake_draw.$transformed_modelorg);
		$quake_mathlib.vectorCopy($quake_draw.$transformed_modelorg, world_transformed_modelorg);
		// TODO: could preset a lot of this at mode set time
		if ($quake_render.r_drawflat.value !== 0) {
			for (var i = 0; i < $quake_render.surface_p; i++) {
				s = $quake_render.surfaces[i];
				if (ss.isNullOrUndefined(s.spans)) {
					continue;
				}
				$quake_draw.$d_zistepu = s.d_zistepu;
				$quake_draw.$d_zistepv = s.d_zistepv;
				$quake_draw.$d_ziorigin = s.d_ziorigin;
				var color = 0;
				if (ss.isValue(s.data)) {
					color = Type.cast(s.data, $quake_model$msurface_t).color;
				}
				$quake_draw.$d_DrawSolidSurface(s, color & 255);
				$quake_draw.$d_DrawZSpans(s.spans);
			}
		}
		else {
			//                sys_linux.Sys_Printf("surface_p = " + render.surface_p);
			for (var i1 = 0; i1 < $quake_render.surface_p; i1++) {
				s = $quake_render.surfaces[i1];
				if (ss.isNullOrUndefined(s.spans)) {
					continue;
				}
				$quake_render.r_drawnpolycount++;
				$quake_draw.$d_zistepu = s.d_zistepu;
				$quake_draw.$d_zistepv = s.d_zistepv;
				$quake_draw.$d_ziorigin = s.d_ziorigin;
				if ((s.flags & $quake_model.surF_DRAWSKY) !== 0) {
					if ($quake_render.r_skymade === 0) {
						$quake_render.r_MakeSky();
					}
					$quake_draw.$d_DrawSkyScans8(s.spans);
					$quake_draw.$d_DrawZSpans(s.spans);
				}
				else if ((s.flags & $quake_model.surF_DRAWBACKGROUND) !== 0) {
					// set up a gradient for the background surface that places it
					// effectively at infinity distance from the viewpoint
					$quake_draw.$d_zistepu = 0;
					$quake_draw.$d_zistepv = 0;
					$quake_draw.$d_ziorigin = -0.9;
					$quake_draw.$d_DrawSolidSurface(s, ss.Int32.trunc($quake_render.r_clearcolor.value) & 255);
					$quake_draw.$d_DrawZSpans(s.spans);
				}
				else if ((s.flags & $quake_model.surF_DRAWTURB) !== 0) {
					pface = Type.cast(s.data, $quake_model$msurface_t);
					$quake_draw.$miplevel = 0;
					$quake_draw.$cacheblock = pface.texinfo.texture.pixels;
					$quake_draw.$cacheofs = pface.texinfo.texture.offsets[0];
					$quake_draw.$cachewidth = 64;
					if (s.insubmodel) {
						// FIXME: we don't want to do all this for every polygon!
						// TODO: store once at start of frame
						$quake_render.currententity = s.entity;
						//FIXME: make this passed in to
						// R_RotateBmodel ()
						$quake_mathlib.vectorSubtract($quake_render.r_origin, $quake_render.currententity.origin, local_modelorg);
						$quake_render.transformVector(local_modelorg, $quake_draw.$transformed_modelorg);
						$quake_render.r_RotateBmodel();
						// FIXME: don't mess with the frustum,
						// make entity passed in
					}
					$quake_draw.$d_CalcGradients(pface);
					$quake_draw.$turbulent8(s.spans);
					$quake_draw.$d_DrawZSpans(s.spans);
					if (s.insubmodel) {
						//
						// restore the old drawing state
						// FIXME: we don't want to do this every time!
						// TODO: speed up
						//
						$quake_render.currententity = $quake_client.cl_entities[0];
						$quake_mathlib.vectorCopy(world_transformed_modelorg, $quake_draw.$transformed_modelorg);
						$quake_mathlib.vectorCopy($quake_render.base_vpn, $quake_render.vpn);
						$quake_mathlib.vectorCopy($quake_render.base_vup, $quake_render.vup);
						$quake_mathlib.vectorCopy($quake_render.base_vright, $quake_render.vright);
						$quake_mathlib.vectorCopy($quake_render.base_modelorg, $quake_render.modelorg);
						$quake_render.r_TransformFrustum();
					}
				}
				else {
					if (s.insubmodel) {
						// FIXME: we don't want to do all this for every polygon!
						// TODO: store once at start of frame
						$quake_render.currententity = s.entity;
						//FIXME: make this passed in to
						// R_RotateBmodel ()
						$quake_mathlib.vectorSubtract($quake_render.r_origin, $quake_render.currententity.origin, local_modelorg);
						$quake_render.transformVector(local_modelorg, $quake_draw.$transformed_modelorg);
						$quake_render.r_RotateBmodel();
						// FIXME: don't mess with the frustum,
						// make entity passed in
					}
					pface = Type.cast(s.data, $quake_model$msurface_t);
					$quake_draw.$miplevel = $quake_draw.$d_MipLevelForScale(s.nearzi * $quake_draw.$scale_for_mip * pface.texinfo.mipadjust);
					// FIXME: make this passed in to D_CacheSurface
					pcurrentcache = $quake_draw.$d_CacheSurface(pface, $quake_draw.$miplevel);
					$quake_draw.$cacheblock = pcurrentcache.data;
					$quake_draw.$cachewidth = pcurrentcache.width;
					$quake_draw.$d_CalcGradients(pface);
					$quake_draw.$d_pdrawspans(s.spans);
					$quake_draw.$d_DrawZSpans(s.spans);
					if (s.insubmodel) {
						//
						// restore the old drawing state
						// FIXME: we don't want to do this every time!
						// TODO: speed up
						//
						$quake_render.currententity = $quake_client.cl_entities[0];
						$quake_mathlib.vectorCopy(world_transformed_modelorg, $quake_draw.$transformed_modelorg);
						$quake_mathlib.vectorCopy($quake_render.base_vpn, $quake_render.vpn);
						$quake_mathlib.vectorCopy($quake_render.base_vup, $quake_render.vup);
						$quake_mathlib.vectorCopy($quake_render.base_vright, $quake_render.vright);
						$quake_mathlib.vectorCopy($quake_render.base_modelorg, $quake_render.modelorg);
						$quake_render.r_TransformFrustum();
					}
				}
			}
		}
	};
	$quake_draw.d_Init = function() {
		//	        r_skydirect = 1;
		$quake_cvar_t.cvar_RegisterVariable($quake_draw.$d_subdiv16);
		$quake_cvar_t.cvar_RegisterVariable($quake_draw.$d_mipcap);
		$quake_cvar_t.cvar_RegisterVariable($quake_draw.$d_mipscale);
		$quake_render.r_drawpolys = false;
		$quake_render.r_worldpolysbacktofront = false;
		$quake_render.r_recursiveaffinetriangles = true;
		$quake_render.r_pixbytes = 1;
		$quake_render.r_aliasuvscale = 1;
	};
	$quake_draw.d_SetupFrame = function() {
		var i;
		if ($quake_render.r_dowarp) {
			$quake_draw.d_viewbuffer = $quake_render.r_warpbuffer;
		}
		else {
			$quake_draw.d_viewbuffer = $quake_screen.vid.buffer;
		}
		if ($quake_render.r_dowarp) {
			$quake_draw.$screenwidth = $quake_draw.warP_WIDTH;
		}
		else {
			$quake_draw.$screenwidth = $quake_screen.vid.rowbytes;
		}
		$quake_draw.$d_roverwrapped = false;
		$quake_draw.$d_minmip = ss.Int32.trunc($quake_draw.$d_mipcap.value);
		if ($quake_draw.$d_minmip > 3) {
			$quake_draw.$d_minmip = 3;
		}
		else if ($quake_draw.$d_minmip < 0) {
			$quake_draw.$d_minmip = 0;
		}
		for (i = 0; i < 3; i++) {
			$quake_draw.$d_scalemip[i] = $quake_draw.$basemip[i] * $quake_draw.$d_mipscale.value;
		}
		$quake_draw.$d_pdrawspans = $quake_draw.$d_DrawSpans8;
	};
	$quake_draw.d_ViewChanged = function() {
		var rowbytes;
		if ($quake_render.r_dowarp) {
			rowbytes = $quake_draw.warP_WIDTH;
		}
		else {
			rowbytes = $quake_screen.vid.rowbytes;
		}
		$quake_draw.$scale_for_mip = $quake_render.xscale;
		if ($quake_render.yscale > $quake_render.xscale) {
			$quake_draw.$scale_for_mip = $quake_render.yscale;
		}
		$quake_draw.$d_zrowbytes = $quake_screen.vid.width * 2;
		$quake_draw.$d_zwidth = $quake_screen.vid.width;
		$quake_draw.$d_pix_min = ss.Int32.div($quake_render.r_refdef.vrect.width, 320);
		if ($quake_draw.$d_pix_min < 1) {
			$quake_draw.$d_pix_min = 1;
		}
		$quake_draw.$d_pix_max = ss.Int32.trunc($quake_render.r_refdef.vrect.width / 80 + 0.5);
		$quake_draw.$d_pix_shift = 8 - ss.Int32.trunc($quake_render.r_refdef.vrect.width / 320 + 0.5);
		if ($quake_draw.$d_pix_max < 1) {
			$quake_draw.$d_pix_max = 1;
		}
		if ($quake_render.pixelAspect > 1.4) {
			$quake_draw.$d_y_aspect_shift = 1;
		}
		else {
			$quake_draw.$d_y_aspect_shift = 0;
		}
		$quake_draw.$d_vrectx = $quake_render.r_refdef.vrect.x;
		$quake_draw.$d_vrecty = $quake_render.r_refdef.vrect.y;
		$quake_draw.$d_vrectright_particle = $quake_render.r_refdef.vrectright - $quake_draw.$d_pix_max;
		$quake_draw.$d_vrectbottom_particle = $quake_render.r_refdef.vrectbottom - ($quake_draw.$d_pix_max << $quake_draw.$d_y_aspect_shift);
		{
			var i;
			for (i = 0; i < $quake_screen.vid.height; i++) {
				$quake_draw.$d_scantable[i] = i * rowbytes;
				$quake_draw.$zspantable[i] = i * $quake_draw.$d_zwidth;
			}
		}
	};
	$quake_draw.d_DrawParticle = function(pparticle) {
		var local = new Array(3), transformed = new Array(3);
		var zi;
		var pdest;
		var pz;
		var i, izi, pix, count, u, v;
		// transform point
		$quake_mathlib.vectorSubtract(pparticle.org, $quake_render.r_origin, local);
		transformed[0] = $quake_mathlib.dotProduct$1(local, $quake_render.r_pright);
		transformed[1] = $quake_mathlib.dotProduct$1(local, $quake_render.r_pup);
		transformed[2] = $quake_mathlib.dotProduct$1(local, $quake_render.r_ppn);
		if (transformed[2] < $quake_draw.particlE_Z_CLIP) {
			return;
		}
		// project the point
		// FIXME: preadjust xcenter and ycenter
		zi = 1 / transformed[2];
		u = ss.Int32.trunc($quake_render.xcenter + zi * transformed[0] + 0.5);
		v = ss.Int32.trunc($quake_render.ycenter - zi * transformed[1] + 0.5);
		if (v > $quake_draw.$d_vrectbottom_particle || u > $quake_draw.$d_vrectright_particle || v < $quake_draw.$d_vrecty || u < $quake_draw.$d_vrectx) {
			return;
		}
		pz = $quake_draw.$d_zwidth * v + u;
		pdest = $quake_draw.$d_scantable[v] + u;
		izi = ss.Int32.trunc(zi * 32768);
		pix = izi >> $quake_draw.$d_pix_shift;
		if (pix < $quake_draw.$d_pix_min) {
			pix = $quake_draw.$d_pix_min;
		}
		else if (pix > $quake_draw.$d_pix_max) {
			pix = $quake_draw.$d_pix_max;
		}
		switch (pix) {
			case 1: {
				count = 1 << $quake_draw.$d_y_aspect_shift;
				for (; count !== 0; count--, pz += $quake_draw.$d_zwidth, pdest += $quake_draw.$screenwidth) {
					if ($quake_draw.d_pzbuffer[pz + 0] <= izi) {
						$quake_draw.d_pzbuffer[pz + 0] = izi;
						$quake_draw.d_viewbuffer[pdest + 0] = ss.Int32.trunc(pparticle.color);
					}
				}
				break;
			}
			case 2: {
				count = 2 << $quake_draw.$d_y_aspect_shift;
				for (; count !== 0; count--, pz += $quake_draw.$d_zwidth, pdest += $quake_draw.$screenwidth) {
					if ($quake_draw.d_pzbuffer[pz + 0] <= izi) {
						$quake_draw.d_pzbuffer[pz + 0] = izi;
						$quake_draw.d_viewbuffer[pdest + 0] = ss.Int32.trunc(pparticle.color);
					}
					if ($quake_draw.d_pzbuffer[pz + 1] <= izi) {
						$quake_draw.d_pzbuffer[pz + 1] = izi;
						$quake_draw.d_viewbuffer[pdest + 1] = ss.Int32.trunc(pparticle.color);
					}
				}
				break;
			}
			case 3: {
				count = 3 << $quake_draw.$d_y_aspect_shift;
				for (; count !== 0; count--, pz += $quake_draw.$d_zwidth, pdest += $quake_draw.$screenwidth) {
					if ($quake_draw.d_pzbuffer[pz + 0] <= izi) {
						$quake_draw.d_pzbuffer[pz + 0] = izi;
						$quake_draw.d_viewbuffer[pdest + 0] = ss.Int32.trunc(pparticle.color);
					}
					if ($quake_draw.d_pzbuffer[pz + 1] <= izi) {
						$quake_draw.d_pzbuffer[pz + 1] = izi;
						$quake_draw.d_viewbuffer[pdest + 1] = ss.Int32.trunc(pparticle.color);
					}
					if ($quake_draw.d_pzbuffer[pz + 2] <= izi) {
						$quake_draw.d_pzbuffer[pz + 2] = izi;
						$quake_draw.d_viewbuffer[pdest + 2] = ss.Int32.trunc(pparticle.color);
					}
				}
				break;
			}
			case 4: {
				count = 4 << $quake_draw.$d_y_aspect_shift;
				for (; count !== 0; count--, pz += $quake_draw.$d_zwidth, pdest += $quake_draw.$screenwidth) {
					if ($quake_draw.d_pzbuffer[pz + 0] <= izi) {
						$quake_draw.d_pzbuffer[pz + 0] = izi;
						$quake_draw.d_viewbuffer[pdest + 0] = ss.Int32.trunc(pparticle.color);
					}
					if ($quake_draw.d_pzbuffer[pz + 1] <= izi) {
						$quake_draw.d_pzbuffer[pz + 1] = izi;
						$quake_draw.d_viewbuffer[pdest + 1] = ss.Int32.trunc(pparticle.color);
					}
					if ($quake_draw.d_pzbuffer[pz + 2] <= izi) {
						$quake_draw.d_pzbuffer[pz + 2] = izi;
						$quake_draw.d_viewbuffer[pdest + 2] = ss.Int32.trunc(pparticle.color);
					}
					if ($quake_draw.d_pzbuffer[pz + 3] <= izi) {
						$quake_draw.d_pzbuffer[pz + 3] = izi;
						$quake_draw.d_viewbuffer[pdest + 3] = ss.Int32.trunc(pparticle.color);
					}
				}
				break;
			}
			default: {
				count = pix << $quake_draw.$d_y_aspect_shift;
				for (; count !== 0; count--, pz += $quake_draw.$d_zwidth, pdest += $quake_draw.$screenwidth) {
					for (i = 0; i < pix; i++) {
						if ($quake_draw.d_pzbuffer[pz + i] <= izi) {
							$quake_draw.d_pzbuffer[pz + i] = izi;
							$quake_draw.d_viewbuffer[pdest + i] = ss.Int32.trunc(pparticle.color);
						}
					}
				}
				break;
			}
		}
	};
	$quake_draw.$d_polyse_init = function() {
		$quake_draw.$spans = new Array(1026);
		// one extra because of cache line pretouching
		for (var kk = 0; kk < 1026; kk++) {
			$quake_draw.$spans[kk] = new $quake_draw$spanpackage_t();
		}
		$quake_draw.$a_spans = $quake_draw.$spans;
	};
	$quake_draw.d_PolysetDraw = function() {
		if ($quake_render.r_affinetridesc.drawtype) {
			$quake_draw.$d_DrawSubdiv();
		}
		else {
			$quake_draw.$d_DrawNonSubdiv();
		}
	};
	$quake_draw.d_PolysetDrawFinalVerts = function(pfv, numverts) {
		var i, z;
		var zbuf;
		for (i = 0; i < numverts; i++) {
			var fv = pfv[i];
			// valid triangle coordinates for filling can include the bottom and
			// right clip edges, due to the fill rule; these shouldn't be drawn
			if (fv.v[0] < $quake_render.r_refdef.vrectright && fv.v[1] < $quake_render.r_refdef.vrectbottom) {
				z = fv.v[5] >> 16;
				zbuf = $quake_draw.$zspantable[fv.v[1]] + fv.v[0];
				if (z >= $quake_draw.d_pzbuffer[zbuf]) {
					var pix;
					$quake_draw.d_pzbuffer[zbuf] = z;
					pix = $quake_draw.$skinstart[$quake_draw.$skintable[fv.v[3] >> 16] + (fv.v[2] >> 16)];
					pix = $quake_render.acolormap[pix + (fv.v[4] & 65280)];
					$quake_draw.d_viewbuffer[$quake_draw.$d_scantable[fv.v[1]] + fv.v[0]] = pix;
				}
			}
		}
	};
	$quake_draw.$d_DrawSubdiv = function() {
		var ptri;
		var pfv;
		var index0, index1, index2;
		var i;
		var lnumtriangles;
		pfv = $quake_render.r_affinetridesc.pfinalverts;
		ptri = $quake_render.r_affinetridesc.ptriangles;
		lnumtriangles = $quake_render.r_affinetridesc.numtriangles;
		for (i = 0; i < lnumtriangles; i++) {
			index0 = pfv[ptri[i].vertindex[0]];
			index1 = pfv[ptri[i].vertindex[1]];
			index2 = pfv[ptri[i].vertindex[2]];
			if ((index0.v[1] - index1.v[1]) * (index0.v[0] - index2.v[0]) - (index0.v[0] - index1.v[0]) * (index0.v[1] - index2.v[1]) >= 0) {
				continue;
			}
			$quake_draw.$d_pcolormap = index0.v[4] & 65280;
			if (ptri[i].facesfront !== 0) {
				$quake_draw.$d_PolysetRecursiveTriangle(index0.v, index1.v, index2.v);
			}
			else {
				var s0, s1, s2;
				s0 = index0.v[2];
				s1 = index1.v[2];
				s2 = index2.v[2];
				if ((index0.flags & $quake_render.aliaS_ONSEAM) !== 0) {
					index0.v[2] += $quake_render.r_affinetridesc.seamfixupX16;
				}
				if ((index1.flags & $quake_render.aliaS_ONSEAM) !== 0) {
					index1.v[2] += $quake_render.r_affinetridesc.seamfixupX16;
				}
				if ((index2.flags & $quake_render.aliaS_ONSEAM) !== 0) {
					index2.v[2] += $quake_render.r_affinetridesc.seamfixupX16;
				}
				$quake_draw.$d_PolysetRecursiveTriangle(index0.v, index1.v, index2.v);
				index0.v[2] = s0;
				index1.v[2] = s1;
				index2.v[2] = s2;
			}
		}
	};
	$quake_draw.$d_DrawNonSubdiv = function() {
		var ptri;
		var pfv;
		var index0, index1, index2;
		var i;
		var lnumtriangles;
		pfv = $quake_render.r_affinetridesc.pfinalverts;
		ptri = $quake_render.r_affinetridesc.ptriangles;
		lnumtriangles = $quake_render.r_affinetridesc.numtriangles;
		for (i = 0; i < lnumtriangles; i++) {
			index0 = pfv[ptri[i].vertindex[0]];
			index1 = pfv[ptri[i].vertindex[1]];
			index2 = pfv[ptri[i].vertindex[2]];
			$quake_draw.$d_xdenom = (index0.v[1] - index1.v[1]) * (index0.v[0] - index2.v[0]) - (index0.v[0] - index1.v[0]) * (index0.v[1] - index2.v[1]);
			if ($quake_draw.$d_xdenom >= 0) {
				continue;
			}
			$quake_draw.$r_p0[0] = index0.v[0];
			// u
			$quake_draw.$r_p0[1] = index0.v[1];
			// v
			$quake_draw.$r_p0[2] = index0.v[2];
			// s
			$quake_draw.$r_p0[3] = index0.v[3];
			// t
			$quake_draw.$r_p0[4] = index0.v[4];
			// light
			$quake_draw.$r_p0[5] = index0.v[5];
			// iz
			$quake_draw.$r_p1[0] = index1.v[0];
			$quake_draw.$r_p1[1] = index1.v[1];
			$quake_draw.$r_p1[2] = index1.v[2];
			$quake_draw.$r_p1[3] = index1.v[3];
			$quake_draw.$r_p1[4] = index1.v[4];
			$quake_draw.$r_p1[5] = index1.v[5];
			$quake_draw.$r_p2[0] = index2.v[0];
			$quake_draw.$r_p2[1] = index2.v[1];
			$quake_draw.$r_p2[2] = index2.v[2];
			$quake_draw.$r_p2[3] = index2.v[3];
			$quake_draw.$r_p2[4] = index2.v[4];
			$quake_draw.$r_p2[5] = index2.v[5];
			if (ptri[i].facesfront === 0) {
				if ((index0.flags & $quake_render.aliaS_ONSEAM) !== 0) {
					$quake_draw.$r_p0[2] += $quake_render.r_affinetridesc.seamfixupX16;
				}
				if ((index1.flags & $quake_render.aliaS_ONSEAM) !== 0) {
					$quake_draw.$r_p1[2] += $quake_render.r_affinetridesc.seamfixupX16;
				}
				if ((index2.flags & $quake_render.aliaS_ONSEAM) !== 0) {
					$quake_draw.$r_p2[2] += $quake_render.r_affinetridesc.seamfixupX16;
				}
			}
			$quake_draw.$d_PolysetSetEdgeTable();
			$quake_draw.$d_RasterizeAliasPolySmooth();
		}
	};
	$quake_draw.$d_PolysetRecursiveTriangle = function(lp1, lp2, lp3) {
		var $state = 0, temp, d, new1, z, zbuf, pix;
		$sm1:
		for (;;) {
			switch ($state) {
				case 0: {
					new1 = new Array(6);
					d = lp2[0] - lp1[0];
					if (d < -1 || d > 1) {
						$state = 3;
						continue $sm1;
					}
					d = lp2[1] - lp1[1];
					if (d < -1 || d > 1) {
						$state = 3;
						continue $sm1;
					}
					d = lp3[0] - lp2[0];
					if (d < -1 || d > 1) {
						$state = 2;
						continue $sm1;
					}
					d = lp3[1] - lp2[1];
					if (d < -1 || d > 1) {
						$state = 2;
						continue $sm1;
					}
					d = lp1[0] - lp3[0];
					if (d < -1 || d > 1) {
						$state = 1;
						continue $sm1;
					}
					d = lp1[1] - lp3[1];
					if (d < -1 || d > 1) {
						$state = 1;
						continue $sm1;
					}
					return;
					// entire tri is filled
					$state = 1;
					continue $sm1;
				}
				case 1: {
					temp = lp1;
					lp1 = lp3;
					lp3 = lp2;
					lp2 = temp;
					$state = 3;
					continue $sm1;
				}
				case 2: {
					temp = lp1;
					lp1 = lp2;
					lp2 = lp3;
					lp3 = temp;
					$state = 3;
					continue $sm1;
				}
				case 3: {
					new1[0] = lp1[0] + lp2[0] >> 1;
					new1[1] = lp1[1] + lp2[1] >> 1;
					new1[2] = lp1[2] + lp2[2] >> 1;
					new1[3] = lp1[3] + lp2[3] >> 1;
					new1[5] = lp1[5] + lp2[5] >> 1;
					// draw the point if splitting a leading edge
					if (lp2[1] > lp1[1]) {
						$state = 4;
						continue $sm1;
					}
					if (lp2[1] === lp1[1] && lp2[0] < lp1[0]) {
						$state = 4;
						continue $sm1;
					}
					z = new1[5] >> 16;
					zbuf = $quake_draw.$zspantable[new1[1]] + new1[0];
					if (z >= $quake_draw.d_pzbuffer[zbuf]) {
						$quake_draw.d_pzbuffer[zbuf] = z;
						pix = $quake_render.acolormap[$quake_draw.$d_pcolormap + $quake_draw.$skinstart[$quake_draw.$skintable[new1[3] >> 16] + (new1[2] >> 16)]];
						$quake_draw.d_viewbuffer[$quake_draw.$d_scantable[new1[1]] + new1[0]] = pix;
					}
					$state = 4;
					continue $sm1;
				}
				case 4: {
					$quake_draw.$d_PolysetRecursiveTriangle(lp3, lp1, new1);
					$quake_draw.$d_PolysetRecursiveTriangle(lp3, new1, lp2);
					$state = -1;
					break $sm1;
				}
				default: {
					break $sm1;
				}
			}
		}
	};
	$quake_draw.d_PolysetUpdateTables = function() {
		var i;
		var s;
		if ($quake_render.r_affinetridesc.skinwidth !== $quake_draw.$skinwidth || !ss.referenceEquals($quake_render.r_affinetridesc.pskin, $quake_draw.$skinstart)) {
			$quake_draw.$skinwidth = $quake_render.r_affinetridesc.skinwidth;
			$quake_draw.$skinstart = $quake_render.r_affinetridesc.pskin;
			s = 0;
			for (i = 0; i < $quake_draw.maX_LBM_HEIGHT; i++, s += $quake_draw.$skinwidth) {
				$quake_draw.$skintable[i] = s;
			}
		}
	};
	$quake_draw.$d_PolysetScanLeftEdge = function(height) {
		do {
			$quake_draw.$d_edgespanpackage = $quake_draw.$a_spans[$quake_draw.$d_pedgespanpackage];
			$quake_draw.$d_edgespanpackage.pdest = $quake_draw.$d_pdest;
			$quake_draw.$d_edgespanpackage.pz = $quake_draw.$d_pz;
			$quake_draw.$d_edgespanpackage.count = $quake_draw.$d_aspancount;
			$quake_draw.$d_edgespanpackage.ptex = $quake_draw.$d_ptex;
			$quake_draw.$d_edgespanpackage.sfrac = $quake_draw.$d_sfrac;
			$quake_draw.$d_edgespanpackage.tfrac = $quake_draw.$d_tfrac;
			// FIXME: need to clamp l, s, t, at both ends?
			$quake_draw.$d_edgespanpackage.light = $quake_draw.$d_light;
			$quake_draw.$d_edgespanpackage.zi = $quake_draw.$d_zi;
			$quake_draw.$d_pedgespanpackage++;
			$quake_draw.$errorterm += $quake_draw.$erroradjustup;
			if ($quake_draw.$errorterm >= 0) {
				$quake_draw.$d_pdest += $quake_draw.$d_pdestextrastep;
				$quake_draw.$d_pz += $quake_draw.$d_pzextrastep;
				$quake_draw.$d_aspancount += $quake_draw.$d_countextrastep;
				$quake_draw.$d_ptex += $quake_draw.$d_ptexextrastep;
				$quake_draw.$d_sfrac += $quake_draw.$d_sfracextrastep;
				$quake_draw.$d_ptex += $quake_draw.$d_sfrac >> 16;
				$quake_draw.$d_sfrac &= 65535;
				$quake_draw.$d_tfrac += $quake_draw.$d_tfracextrastep;
				if (($quake_draw.$d_tfrac & 65536) !== 0) {
					$quake_draw.$d_ptex += $quake_render.r_affinetridesc.skinwidth;
					$quake_draw.$d_tfrac &= 65535;
				}
				$quake_draw.$d_light += $quake_draw.$d_lightextrastep;
				$quake_draw.$d_zi += $quake_draw.$d_ziextrastep;
				$quake_draw.$errorterm -= $quake_draw.$erroradjustdown;
			}
			else {
				$quake_draw.$d_pdest += $quake_draw.$d_pdestbasestep;
				$quake_draw.$d_pz += $quake_draw.$d_pzbasestep;
				$quake_draw.$d_aspancount += $quake_draw.$ubasestep;
				$quake_draw.$d_ptex += $quake_draw.$d_ptexbasestep;
				$quake_draw.$d_sfrac += $quake_draw.$d_sfracbasestep;
				$quake_draw.$d_ptex += $quake_draw.$d_sfrac >> 16;
				$quake_draw.$d_sfrac &= 65535;
				$quake_draw.$d_tfrac += $quake_draw.$d_tfracbasestep;
				if (($quake_draw.$d_tfrac & 65536) !== 0) {
					$quake_draw.$d_ptex += $quake_render.r_affinetridesc.skinwidth;
					$quake_draw.$d_tfrac &= 65535;
				}
				$quake_draw.$d_light += $quake_draw.$d_lightbasestep;
				$quake_draw.$d_zi += $quake_draw.$d_zibasestep;
			}
		} while (--height !== 0);
	};
	$quake_draw.$d_PolysetSetUpForLineScan = function(startvertu, startvertv, endvertu, endvertv) {
		var dm, dn;
		var tm, tn;
		var ptemp;
		// TODO: implement x86 version
		$quake_draw.$errorterm = -1;
		tm = endvertu - startvertu;
		tn = endvertv - startvertv;
		if (tm <= 16 && tm >= -15 && (tn <= 16 && tn >= -15)) {
			ptemp = $quake_draw.$adivtab[(tm + 15 << 5) + (tn + 15)];
			$quake_draw.$ubasestep = ptemp.quotient;
			$quake_draw.$erroradjustup = ptemp.remainder;
			$quake_draw.$erroradjustdown = tn;
		}
		else {
			dm = tm;
			dn = tn;
			var ubasestep_temp = { $: $quake_draw.$ubasestep };
			var erroradjustup_temp = { $: $quake_draw.$erroradjustup };
			$quake_mathlib.floorDivMod(dm, dn, ubasestep_temp, erroradjustup_temp);
			$quake_draw.$ubasestep = ubasestep_temp.$;
			$quake_draw.$erroradjustup = erroradjustup_temp.$;
			$quake_draw.$erroradjustdown = ss.Int32.trunc(dn);
		}
	};
	$quake_draw.$d_PolysetCalcGradients = function(skinwidth) {
		var xstepdenominv, ystepdenominv, t0, t1;
		var p01_minus_p21, p11_minus_p21, p00_minus_p20, p10_minus_p20;
		p00_minus_p20 = $quake_draw.$r_p0[0] - $quake_draw.$r_p2[0];
		p01_minus_p21 = $quake_draw.$r_p0[1] - $quake_draw.$r_p2[1];
		p10_minus_p20 = $quake_draw.$r_p1[0] - $quake_draw.$r_p2[0];
		p11_minus_p21 = $quake_draw.$r_p1[1] - $quake_draw.$r_p2[1];
		xstepdenominv = 1 / $quake_draw.$d_xdenom;
		ystepdenominv = -xstepdenominv;
		// ceil () for light so positive steps are exaggerated, negative steps
		// diminished,  pushing us away from underflow toward overflow. Underflow is
		// very visible, overflow is very unlikely, because of ambient lighting
		t0 = $quake_draw.$r_p0[4] - $quake_draw.$r_p2[4];
		t1 = $quake_draw.$r_p1[4] - $quake_draw.$r_p2[4];
		$quake_draw.$r_lstepx = ss.Int32.trunc(Math.ceil((t1 * p01_minus_p21 - t0 * p11_minus_p21) * xstepdenominv));
		$quake_draw.$r_lstepy = ss.Int32.trunc(Math.ceil((t1 * p00_minus_p20 - t0 * p10_minus_p20) * ystepdenominv));
		t0 = $quake_draw.$r_p0[2] - $quake_draw.$r_p2[2];
		t1 = $quake_draw.$r_p1[2] - $quake_draw.$r_p2[2];
		$quake_draw.$r_sstepx = ss.Int32.trunc((t1 * p01_minus_p21 - t0 * p11_minus_p21) * xstepdenominv);
		$quake_draw.$r_sstepy = ss.Int32.trunc((t1 * p00_minus_p20 - t0 * p10_minus_p20) * ystepdenominv);
		t0 = $quake_draw.$r_p0[3] - $quake_draw.$r_p2[3];
		t1 = $quake_draw.$r_p1[3] - $quake_draw.$r_p2[3];
		$quake_draw.$r_tstepx = ss.Int32.trunc((t1 * p01_minus_p21 - t0 * p11_minus_p21) * xstepdenominv);
		$quake_draw.$r_tstepy = ss.Int32.trunc((t1 * p00_minus_p20 - t0 * p10_minus_p20) * ystepdenominv);
		t0 = $quake_draw.$r_p0[5] - $quake_draw.$r_p2[5];
		t1 = $quake_draw.$r_p1[5] - $quake_draw.$r_p2[5];
		$quake_draw.$r_zistepx = ss.Int32.trunc((t1 * p01_minus_p21 - t0 * p11_minus_p21) * xstepdenominv);
		$quake_draw.$r_zistepy = ss.Int32.trunc((t1 * p00_minus_p20 - t0 * p10_minus_p20) * ystepdenominv);
		$quake_draw.$a_sstepxfrac = $quake_draw.$r_sstepx & 65535;
		$quake_draw.$a_tstepxfrac = $quake_draw.$r_tstepx & 65535;
		$quake_draw.$a_ststepxwhole = skinwidth * ($quake_draw.$r_tstepx >> 16) + ($quake_draw.$r_sstepx >> 16);
	};
	$quake_draw.$d_PolysetDrawSpans8 = function(ofs) {
		var lcount;
		var lpdest;
		var lptex;
		var lsfrac, ltfrac;
		var llight;
		var lzi;
		var lpz;
		var pspanpackage = $quake_draw.$a_spans[ofs];
		do {
			lcount = $quake_draw.$d_aspancount - pspanpackage.count;
			$quake_draw.$errorterm += $quake_draw.$erroradjustup;
			if ($quake_draw.$errorterm >= 0) {
				$quake_draw.$d_aspancount += $quake_draw.$d_countextrastep;
				$quake_draw.$errorterm -= $quake_draw.$erroradjustdown;
			}
			else {
				$quake_draw.$d_aspancount += $quake_draw.$ubasestep;
			}
			if (lcount !== 0) {
				lpdest = pspanpackage.pdest;
				lptex = pspanpackage.ptex;
				lpz = pspanpackage.pz;
				lsfrac = pspanpackage.sfrac;
				ltfrac = pspanpackage.tfrac;
				llight = pspanpackage.light;
				lzi = pspanpackage.zi;
				do {
					if (lzi >> 16 >= $quake_draw.d_pzbuffer[lpz]) {
						//                            if (lptex < 0)
						//                            lptex = lptex;
						//                            if (lptex >= 0 && lptex < render.r_affinetridesc.pskin.Length)
						$quake_draw.d_viewbuffer[lpdest] = $quake_render.acolormap[$quake_render.r_affinetridesc.pskin[lptex] + (llight & 65280)];
						// gel mapping					*lpdest = gelmap[*lpdest];
						$quake_draw.d_pzbuffer[lpz] = lzi >> 16;
					}
					lpdest++;
					lzi += $quake_draw.$r_zistepx;
					lpz++;
					llight += $quake_draw.$r_lstepx;
					lptex += $quake_draw.$a_ststepxwhole;
					lsfrac += $quake_draw.$a_sstepxfrac;
					lptex += lsfrac >> 16;
					lsfrac &= 65535;
					ltfrac += $quake_draw.$a_tstepxfrac;
					if ((ltfrac & 65536) !== 0) {
						lptex += $quake_render.r_affinetridesc.skinwidth;
						ltfrac &= 65535;
					}
				} while (--lcount !== 0);
			}
			pspanpackage = $quake_draw.$a_spans[++ofs];
		} while (pspanpackage.count !== -999999);
	};
	$quake_draw.$d_RasterizeAliasPolySmooth = function() {
		var initialleftheight, initialrightheight;
		var plefttop, prighttop, pleftbottom, prightbottom;
		var working_lstepx, originalcount;
		plefttop = $quake_draw.$pedgetable.pleftedgevert0;
		prighttop = $quake_draw.$pedgetable.prightedgevert0;
		pleftbottom = $quake_draw.$pedgetable.pleftedgevert1;
		prightbottom = $quake_draw.$pedgetable.prightedgevert1;
		initialleftheight = pleftbottom[1] - plefttop[1];
		initialrightheight = prightbottom[1] - prighttop[1];
		//
		// set the s, t, and light gradients, which are consistent across the triangle
		// because being a triangle, things are affine
		//
		$quake_draw.$d_PolysetCalcGradients($quake_render.r_affinetridesc.skinwidth);
		//
		// rasterize the polygon
		//
		//
		// scan out the top (and possibly only) part of the left edge
		//
		$quake_draw.$d_pedgespanpackage = 0;
		$quake_draw.$ystart = plefttop[1];
		$quake_draw.$d_aspancount = plefttop[0] - prighttop[0];
		$quake_draw.$d_ptex = (plefttop[2] >> 16) + (plefttop[3] >> 16) * $quake_render.r_affinetridesc.skinwidth;
		if ($quake_draw.$d_ptex > $quake_render.r_affinetridesc.pskin.length) {
			$quake_draw.$d_ptex = $quake_draw.$d_ptex;
		}
		$quake_draw.$d_sfrac = plefttop[2] & 65535;
		$quake_draw.$d_tfrac = plefttop[3] & 65535;
		$quake_draw.$d_light = plefttop[4];
		$quake_draw.$d_zi = plefttop[5];
		$quake_draw.$d_pdest = $quake_draw.$ystart * $quake_draw.$screenwidth + plefttop[0];
		$quake_draw.$d_pz = $quake_draw.$ystart * $quake_draw.$d_zwidth + plefttop[0];
		if (initialleftheight === 1) {
			$quake_draw.$d_edgespanpackage = $quake_draw.$a_spans[$quake_draw.$d_pedgespanpackage];
			$quake_draw.$d_edgespanpackage.pdest = $quake_draw.$d_pdest;
			$quake_draw.$d_edgespanpackage.pz = $quake_draw.$d_pz;
			$quake_draw.$d_edgespanpackage.count = $quake_draw.$d_aspancount;
			$quake_draw.$d_edgespanpackage.ptex = $quake_draw.$d_ptex;
			$quake_draw.$d_edgespanpackage.sfrac = $quake_draw.$d_sfrac;
			$quake_draw.$d_edgespanpackage.tfrac = $quake_draw.$d_tfrac;
			// FIXME: need to clamp l, s, t, at both ends?
			$quake_draw.$d_edgespanpackage.light = $quake_draw.$d_light;
			$quake_draw.$d_edgespanpackage.zi = $quake_draw.$d_zi;
			$quake_draw.$d_pedgespanpackage++;
		}
		else {
			$quake_draw.$d_PolysetSetUpForLineScan(plefttop[0], plefttop[1], pleftbottom[0], pleftbottom[1]);
			$quake_draw.$d_pzbasestep = $quake_draw.$d_zwidth + $quake_draw.$ubasestep;
			$quake_draw.$d_pzextrastep = $quake_draw.$d_pzbasestep + 1;
			$quake_draw.$d_pdestbasestep = $quake_draw.$screenwidth + $quake_draw.$ubasestep;
			$quake_draw.$d_pdestextrastep = $quake_draw.$d_pdestbasestep + 1;
			// TODO: can reuse partial expressions here
			// for negative steps in x along left edge, bias toward overflow rather than
			// underflow (sort of turning the floor () we did in the gradient calcs into
			// ceil (), but plus a little bit)
			if ($quake_draw.$ubasestep < 0) {
				working_lstepx = $quake_draw.$r_lstepx - 1;
			}
			else {
				working_lstepx = $quake_draw.$r_lstepx;
			}
			$quake_draw.$d_countextrastep = $quake_draw.$ubasestep + 1;
			$quake_draw.$d_ptexbasestep = ($quake_draw.$r_sstepy + $quake_draw.$r_sstepx * $quake_draw.$ubasestep >> 16) + ($quake_draw.$r_tstepy + $quake_draw.$r_tstepx * $quake_draw.$ubasestep >> 16) * $quake_render.r_affinetridesc.skinwidth;
			$quake_draw.$d_sfracbasestep = $quake_draw.$r_sstepy + $quake_draw.$r_sstepx * $quake_draw.$ubasestep & 65535;
			$quake_draw.$d_tfracbasestep = $quake_draw.$r_tstepy + $quake_draw.$r_tstepx * $quake_draw.$ubasestep & 65535;
			$quake_draw.$d_lightbasestep = $quake_draw.$r_lstepy + working_lstepx * $quake_draw.$ubasestep;
			$quake_draw.$d_zibasestep = $quake_draw.$r_zistepy + $quake_draw.$r_zistepx * $quake_draw.$ubasestep;
			$quake_draw.$d_ptexextrastep = ($quake_draw.$r_sstepy + $quake_draw.$r_sstepx * $quake_draw.$d_countextrastep >> 16) + ($quake_draw.$r_tstepy + $quake_draw.$r_tstepx * $quake_draw.$d_countextrastep >> 16) * $quake_render.r_affinetridesc.skinwidth;
			$quake_draw.$d_sfracextrastep = $quake_draw.$r_sstepy + $quake_draw.$r_sstepx * $quake_draw.$d_countextrastep & 65535;
			$quake_draw.$d_tfracextrastep = $quake_draw.$r_tstepy + $quake_draw.$r_tstepx * $quake_draw.$d_countextrastep & 65535;
			$quake_draw.$d_lightextrastep = $quake_draw.$d_lightbasestep + working_lstepx;
			$quake_draw.$d_ziextrastep = $quake_draw.$d_zibasestep + $quake_draw.$r_zistepx;
			$quake_draw.$d_PolysetScanLeftEdge(initialleftheight);
		}
		//
		// scan out the bottom part of the left edge, if it exists
		//
		if ($quake_draw.$pedgetable.numleftedges === 2) {
			var height;
			plefttop = pleftbottom;
			pleftbottom = $quake_draw.$pedgetable.pleftedgevert2;
			height = pleftbottom[1] - plefttop[1];
			// TODO: make this a function; modularize this function in general
			$quake_draw.$ystart = plefttop[1];
			$quake_draw.$d_aspancount = plefttop[0] - prighttop[0];
			$quake_draw.$d_ptex = (plefttop[2] >> 16) + (plefttop[3] >> 16) * $quake_render.r_affinetridesc.skinwidth;
			$quake_draw.$d_sfrac = 0;
			$quake_draw.$d_tfrac = 0;
			$quake_draw.$d_light = plefttop[4];
			$quake_draw.$d_zi = plefttop[5];
			$quake_draw.$d_pdest = $quake_draw.$ystart * $quake_draw.$screenwidth + plefttop[0];
			$quake_draw.$d_pz = $quake_draw.$ystart * $quake_draw.$d_zwidth + plefttop[0];
			if (height === 1) {
				$quake_draw.$d_edgespanpackage = $quake_draw.$a_spans[$quake_draw.$d_pedgespanpackage];
				$quake_draw.$d_edgespanpackage.pdest = $quake_draw.$d_pdest;
				$quake_draw.$d_edgespanpackage.pz = $quake_draw.$d_pz;
				$quake_draw.$d_edgespanpackage.count = $quake_draw.$d_aspancount;
				$quake_draw.$d_edgespanpackage.ptex = $quake_draw.$d_ptex;
				$quake_draw.$d_edgespanpackage.sfrac = $quake_draw.$d_sfrac;
				$quake_draw.$d_edgespanpackage.tfrac = $quake_draw.$d_tfrac;
				// FIXME: need to clamp l, s, t, at both ends?
				$quake_draw.$d_edgespanpackage.light = $quake_draw.$d_light;
				$quake_draw.$d_edgespanpackage.zi = $quake_draw.$d_zi;
				$quake_draw.$d_pedgespanpackage++;
			}
			else {
				$quake_draw.$d_PolysetSetUpForLineScan(plefttop[0], plefttop[1], pleftbottom[0], pleftbottom[1]);
				$quake_draw.$d_pdestbasestep = $quake_draw.$screenwidth + $quake_draw.$ubasestep;
				$quake_draw.$d_pdestextrastep = $quake_draw.$d_pdestbasestep + 1;
				$quake_draw.$d_pzbasestep = $quake_draw.$d_zwidth + $quake_draw.$ubasestep;
				$quake_draw.$d_pzextrastep = $quake_draw.$d_pzbasestep + 1;
				if ($quake_draw.$ubasestep < 0) {
					working_lstepx = $quake_draw.$r_lstepx - 1;
				}
				else {
					working_lstepx = $quake_draw.$r_lstepx;
				}
				$quake_draw.$d_countextrastep = $quake_draw.$ubasestep + 1;
				$quake_draw.$d_ptexbasestep = ($quake_draw.$r_sstepy + $quake_draw.$r_sstepx * $quake_draw.$ubasestep >> 16) + ($quake_draw.$r_tstepy + $quake_draw.$r_tstepx * $quake_draw.$ubasestep >> 16) * $quake_render.r_affinetridesc.skinwidth;
				$quake_draw.$d_sfracbasestep = $quake_draw.$r_sstepy + $quake_draw.$r_sstepx * $quake_draw.$ubasestep & 65535;
				$quake_draw.$d_tfracbasestep = $quake_draw.$r_tstepy + $quake_draw.$r_tstepx * $quake_draw.$ubasestep & 65535;
				$quake_draw.$d_lightbasestep = $quake_draw.$r_lstepy + working_lstepx * $quake_draw.$ubasestep;
				$quake_draw.$d_zibasestep = $quake_draw.$r_zistepy + $quake_draw.$r_zistepx * $quake_draw.$ubasestep;
				$quake_draw.$d_ptexextrastep = ($quake_draw.$r_sstepy + $quake_draw.$r_sstepx * $quake_draw.$d_countextrastep >> 16) + ($quake_draw.$r_tstepy + $quake_draw.$r_tstepx * $quake_draw.$d_countextrastep >> 16) * $quake_render.r_affinetridesc.skinwidth;
				$quake_draw.$d_sfracextrastep = $quake_draw.$r_sstepy + $quake_draw.$r_sstepx * $quake_draw.$d_countextrastep & 65535;
				$quake_draw.$d_tfracextrastep = $quake_draw.$r_tstepy + $quake_draw.$r_tstepx * $quake_draw.$d_countextrastep & 65535;
				$quake_draw.$d_lightextrastep = $quake_draw.$d_lightbasestep + working_lstepx;
				$quake_draw.$d_ziextrastep = $quake_draw.$d_zibasestep + $quake_draw.$r_zistepx;
				$quake_draw.$d_PolysetScanLeftEdge(height);
			}
		}
		// scan out the top (and possibly only) part of the right edge, updating the
		// count field
		$quake_draw.$d_pedgespanpackage = 0;
		$quake_draw.$d_PolysetSetUpForLineScan(prighttop[0], prighttop[1], prightbottom[0], prightbottom[1]);
		$quake_draw.$d_aspancount = 0;
		$quake_draw.$d_countextrastep = $quake_draw.$ubasestep + 1;
		originalcount = $quake_draw.$a_spans[initialrightheight].count;
		$quake_draw.$a_spans[initialrightheight].count = -999999;
		// mark end of the spanpackages
		$quake_draw.$d_PolysetDrawSpans8(0);
		// scan out the bottom part of the right edge, if it exists
		if ($quake_draw.$pedgetable.numrightedges === 2) {
			var height1;
			var pstart;
			pstart = initialrightheight;
			$quake_draw.$a_spans[pstart].count = originalcount;
			$quake_draw.$d_aspancount = prightbottom[0] - prighttop[0];
			prighttop = prightbottom;
			prightbottom = $quake_draw.$pedgetable.prightedgevert2;
			height1 = prightbottom[1] - prighttop[1];
			$quake_draw.$d_PolysetSetUpForLineScan(prighttop[0], prighttop[1], prightbottom[0], prightbottom[1]);
			$quake_draw.$d_countextrastep = $quake_draw.$ubasestep + 1;
			$quake_draw.$a_spans[initialrightheight + height1].count = -999999;
			// mark end of the spanpackages
			$quake_draw.$d_PolysetDrawSpans8(pstart);
		}
	};
	$quake_draw.$d_PolysetSetEdgeTable = function() {
		var edgetableindex;
		edgetableindex = 0;
		// assume the vertices are already in
		//  top to bottom order
		//
		// determine which edges are right & left, and the order in which
		// to rasterize them
		//
		if ($quake_draw.$r_p0[1] >= $quake_draw.$r_p1[1]) {
			if ($quake_draw.$r_p0[1] === $quake_draw.$r_p1[1]) {
				if ($quake_draw.$r_p0[1] < $quake_draw.$r_p2[1]) {
					$quake_draw.$pedgetable = $quake_draw.$edgetables[2];
				}
				else {
					$quake_draw.$pedgetable = $quake_draw.$edgetables[5];
				}
				return;
			}
			else {
				edgetableindex = 1;
			}
		}
		if ($quake_draw.$r_p0[1] === $quake_draw.$r_p2[1]) {
			if (edgetableindex !== 0) {
				$quake_draw.$pedgetable = $quake_draw.$edgetables[8];
			}
			else {
				$quake_draw.$pedgetable = $quake_draw.$edgetables[9];
			}
			return;
		}
		else if ($quake_draw.$r_p1[1] === $quake_draw.$r_p2[1]) {
			if (edgetableindex !== 0) {
				$quake_draw.$pedgetable = $quake_draw.$edgetables[10];
			}
			else {
				$quake_draw.$pedgetable = $quake_draw.$edgetables[11];
			}
			return;
		}
		if ($quake_draw.$r_p0[1] > $quake_draw.$r_p2[1]) {
			edgetableindex += 2;
		}
		if ($quake_draw.$r_p1[1] > $quake_draw.$r_p2[1]) {
			edgetableindex += 4;
		}
		$quake_draw.$pedgetable = $quake_draw.$edgetables[edgetableindex];
	};
	$quake_draw.d_WarpScreen = function() {
		var w, h;
		var u, v;
		var dest;
		var turb;
		var rowptr = new Array(1030);
		var column = new Array(1286);
		var wratio, hratio;
		w = $quake_render.r_refdef.vrect.width;
		h = $quake_render.r_refdef.vrect.height;
		wratio = w / $quake_screen.scr_vrect.width;
		hratio = h / $quake_screen.scr_vrect.height;
		for (v = 0; v < $quake_screen.scr_vrect.height + 6; v++) {
			rowptr[v] = $quake_render.r_refdef.vrect.y * $quake_draw.$screenwidth + $quake_draw.$screenwidth * ss.Int32.trunc(v * hratio * h / (h + 6));
		}
		for (u = 0; u < $quake_screen.scr_vrect.width + 6; u++) {
			column[u] = $quake_render.r_refdef.vrect.x + ss.Int32.trunc(u * wratio * w / (w + 6));
		}
		turb = ss.Int32.trunc($quake_client.cl.time * 20) & 127;
		dest = $quake_screen.scr_vrect.y * $quake_screen.vid.rowbytes + $quake_screen.scr_vrect.x;
		for (v = 0; v < $quake_screen.scr_vrect.height; v++, dest += $quake_screen.vid.rowbytes) {
			for (u = 0; u < $quake_screen.scr_vrect.width; u += 4) {
				$quake_screen.vid.buffer[dest + u + 0] = $quake_draw.d_viewbuffer[rowptr[v + $quake_render.intsintable[turb + u + 0]] + column[$quake_render.intsintable[turb + v] + u + 0]];
				$quake_screen.vid.buffer[dest + u + 1] = $quake_draw.d_viewbuffer[rowptr[v + $quake_render.intsintable[turb + u + 1]] + column[$quake_render.intsintable[turb + v] + u + 1]];
				$quake_screen.vid.buffer[dest + u + 2] = $quake_draw.d_viewbuffer[rowptr[v + $quake_render.intsintable[turb + u + 2]] + column[$quake_render.intsintable[turb + v] + u + 2]];
				$quake_screen.vid.buffer[dest + u + 3] = $quake_draw.d_viewbuffer[rowptr[v + $quake_render.intsintable[turb + u + 3]] + column[$quake_render.intsintable[turb + v] + u + 3]];
			}
		}
	};
	$quake_draw.$d_DrawTurbulent8Span = function() {
		var sturb, tturb;
		do {
			sturb = $quake_draw.$r_turb_s + $quake_render.sintable[$quake_draw.$r_turb_turb + ($quake_draw.$r_turb_t >> 16) & 127] >> 16 & 63;
			tturb = $quake_draw.$r_turb_t + $quake_render.sintable[$quake_draw.$r_turb_turb + ($quake_draw.$r_turb_s >> 16) & 127] >> 16 & 63;
			$quake_draw.d_viewbuffer[$quake_draw.$r_turb_pdest++] = $quake_draw.$cacheblock[$quake_draw.$r_turb_pbase + (tturb << 6) + sturb];
			$quake_draw.$r_turb_s += $quake_draw.$r_turb_sstep;
			$quake_draw.$r_turb_t += $quake_draw.$r_turb_tstep;
		} while (--$quake_draw.$r_turb_spancount > 0);
	};
	$quake_draw.$turbulent8 = function(pspan) {
		var count;
		var snext, tnext;
		var sdivz, tdivz, zi, z, du, dv, spancountminus1;
		var sdivz16stepu, tdivz16stepu, zi16stepu;
		$quake_draw.$r_turb_turb = ss.Int32.trunc($quake_client.cl.time * 20) & 127;
		$quake_draw.$r_turb_sstep = 0;
		// keep compiler happy
		$quake_draw.$r_turb_tstep = 0;
		// ditto
		$quake_draw.$r_turb_pbase = $quake_draw.$cacheofs;
		sdivz16stepu = $quake_draw.$d_sdivzstepu * 16;
		tdivz16stepu = $quake_draw.$d_tdivzstepu * 16;
		zi16stepu = $quake_draw.$d_zistepu * 16;
		do {
			$quake_draw.$r_turb_pdest = $quake_draw.$screenwidth * pspan.v + pspan.u;
			count = pspan.count;
			// calculate the initial s/z, t/z, 1/z, s, and t and clamp
			du = pspan.u;
			dv = pspan.v;
			sdivz = $quake_draw.$d_sdivzorigin + dv * $quake_draw.$d_sdivzstepv + du * $quake_draw.$d_sdivzstepu;
			tdivz = $quake_draw.$d_tdivzorigin + dv * $quake_draw.$d_tdivzstepv + du * $quake_draw.$d_tdivzstepu;
			zi = $quake_draw.$d_ziorigin + dv * $quake_draw.$d_zistepv + du * $quake_draw.$d_zistepu;
			z = 65536 / zi;
			// prescale to 16.16 fixed-point
			$quake_draw.$r_turb_s = ss.Int32.trunc(sdivz * z) + $quake_draw.$sadjust;
			if ($quake_draw.$r_turb_s > $quake_draw.$bbextents) {
				$quake_draw.$r_turb_s = $quake_draw.$bbextents;
			}
			else if ($quake_draw.$r_turb_s < 0) {
				$quake_draw.$r_turb_s = 0;
			}
			$quake_draw.$r_turb_t = ss.Int32.trunc(tdivz * z) + $quake_draw.$tadjust;
			if ($quake_draw.$r_turb_t > $quake_draw.$bbextentt) {
				$quake_draw.$r_turb_t = $quake_draw.$bbextentt;
			}
			else if ($quake_draw.$r_turb_t < 0) {
				$quake_draw.$r_turb_t = 0;
			}
			do {
				// calculate s and t at the far end of the span
				if (count >= 16) {
					$quake_draw.$r_turb_spancount = 16;
				}
				else {
					$quake_draw.$r_turb_spancount = count;
				}
				count -= $quake_draw.$r_turb_spancount;
				if (count !== 0) {
					// calculate s/z, t/z, zi.fixed s and t at far end of span,
					// calculate s and t steps across span by shifting
					sdivz += sdivz16stepu;
					tdivz += tdivz16stepu;
					zi += zi16stepu;
					z = 65536 / zi;
					// prescale to 16.16 fixed-point
					snext = ss.Int32.trunc(sdivz * z) + $quake_draw.$sadjust;
					if (snext > $quake_draw.$bbextents) {
						snext = $quake_draw.$bbextents;
					}
					else if (snext < 16) {
						snext = 16;
					}
					// prevent round-off error on <0 steps from
					//  from causing overstepping & running off the
					//  edge of the texture
					tnext = ss.Int32.trunc(tdivz * z) + $quake_draw.$tadjust;
					if (tnext > $quake_draw.$bbextentt) {
						tnext = $quake_draw.$bbextentt;
					}
					else if (tnext < 16) {
						tnext = 16;
					}
					// guard against round-off error on <0 steps
					$quake_draw.$r_turb_sstep = snext - $quake_draw.$r_turb_s >> 4;
					$quake_draw.$r_turb_tstep = tnext - $quake_draw.$r_turb_t >> 4;
				}
				else {
					// calculate s/z, t/z, zi.fixed s and t at last pixel in span (so
					// can't step off polygon), clamp, calculate s and t steps across
					// span by division, biasing steps low so we don't run off the
					// texture
					spancountminus1 = $quake_draw.$r_turb_spancount - 1;
					sdivz += $quake_draw.$d_sdivzstepu * spancountminus1;
					tdivz += $quake_draw.$d_tdivzstepu * spancountminus1;
					zi += $quake_draw.$d_zistepu * spancountminus1;
					z = 65536 / zi;
					// prescale to 16.16 fixed-point
					snext = ss.Int32.trunc(sdivz * z) + $quake_draw.$sadjust;
					if (snext > $quake_draw.$bbextents) {
						snext = $quake_draw.$bbextents;
					}
					else if (snext < 16) {
						snext = 16;
					}
					// prevent round-off error on <0 steps from
					//  from causing overstepping & running off the
					//  edge of the texture
					tnext = ss.Int32.trunc(tdivz * z) + $quake_draw.$tadjust;
					if (tnext > $quake_draw.$bbextentt) {
						tnext = $quake_draw.$bbextentt;
					}
					else if (tnext < 16) {
						tnext = 16;
					}
					// guard against round-off error on <0 steps
					if ($quake_draw.$r_turb_spancount > 1) {
						$quake_draw.$r_turb_sstep = ss.Int32.div(snext - $quake_draw.$r_turb_s, $quake_draw.$r_turb_spancount - 1);
						$quake_draw.$r_turb_tstep = ss.Int32.div(tnext - $quake_draw.$r_turb_t, $quake_draw.$r_turb_spancount - 1);
					}
				}
				$quake_draw.$r_turb_s = $quake_draw.$r_turb_s & 8388607;
				$quake_draw.$r_turb_t = $quake_draw.$r_turb_t & 8388607;
				$quake_draw.$d_DrawTurbulent8Span();
				$quake_draw.$r_turb_s = snext;
				$quake_draw.$r_turb_t = tnext;
			} while (count > 0);
		} while (ss.isValue(pspan = pspan.pnext));
	};
	$quake_draw.$d_DrawSpans8 = function(pspan) {
		var count, spancount;
		var pbase;
		var pdest;
		var s, t, snext, tnext, sstep, tstep;
		var sdivz, tdivz, zi, z, du, dv, spancountminus1;
		var sdivz8stepu, tdivz8stepu, zi8stepu;
		sstep = 0;
		// keep compiler happy
		tstep = 0;
		// ditto
		pbase = $quake_draw.$cacheblock;
		sdivz8stepu = $quake_draw.$d_sdivzstepu * 8;
		tdivz8stepu = $quake_draw.$d_tdivzstepu * 8;
		zi8stepu = $quake_draw.$d_zistepu * 8;
		do {
			pdest = $quake_draw.$screenwidth * pspan.v + pspan.u;
			count = pspan.count;
			// calculate the initial s/z, t/z, 1/z, s, and t and clamp
			du = pspan.u;
			dv = pspan.v;
			sdivz = $quake_draw.$d_sdivzorigin + dv * $quake_draw.$d_sdivzstepv + du * $quake_draw.$d_sdivzstepu;
			tdivz = $quake_draw.$d_tdivzorigin + dv * $quake_draw.$d_tdivzstepv + du * $quake_draw.$d_tdivzstepu;
			zi = $quake_draw.$d_ziorigin + dv * $quake_draw.$d_zistepv + du * $quake_draw.$d_zistepu;
			z = 65536 / zi;
			// prescale to 16.16 fixed-point
			s = ss.Int32.trunc(sdivz * z) + $quake_draw.$sadjust;
			if (s > $quake_draw.$bbextents) {
				s = $quake_draw.$bbextents;
			}
			else if (s < 0) {
				s = 0;
			}
			t = ss.Int32.trunc(tdivz * z) + $quake_draw.$tadjust;
			if (t > $quake_draw.$bbextentt) {
				t = $quake_draw.$bbextentt;
			}
			else if (t < 0) {
				t = 0;
			}
			do {
				// calculate s and t at the far end of the span
				if (count >= 8) {
					spancount = 8;
				}
				else {
					spancount = count;
				}
				count -= spancount;
				if (count !== 0) {
					// calculate s/z, t/z, zi.fixed s and t at far end of span,
					// calculate s and t steps across span by shifting
					sdivz += sdivz8stepu;
					tdivz += tdivz8stepu;
					zi += zi8stepu;
					z = 65536 / zi;
					// prescale to 16.16 fixed-point
					snext = ss.Int32.trunc(sdivz * z) + $quake_draw.$sadjust;
					if (snext > $quake_draw.$bbextents) {
						snext = $quake_draw.$bbextents;
					}
					else if (snext < 8) {
						snext = 8;
					}
					// prevent round-off error on <0 steps from
					//  from causing overstepping & running off the
					//  edge of the texture
					tnext = ss.Int32.trunc(tdivz * z) + $quake_draw.$tadjust;
					if (tnext > $quake_draw.$bbextentt) {
						tnext = $quake_draw.$bbextentt;
					}
					else if (tnext < 8) {
						tnext = 8;
					}
					// guard against round-off error on <0 steps
					sstep = snext - s >> 3;
					tstep = tnext - t >> 3;
				}
				else {
					// calculate s/z, t/z, zi.fixed s and t at last pixel in span (so
					// can't step off polygon), clamp, calculate s and t steps across
					// span by division, biasing steps low so we don't run off the
					// texture
					spancountminus1 = spancount - 1;
					sdivz += $quake_draw.$d_sdivzstepu * spancountminus1;
					tdivz += $quake_draw.$d_tdivzstepu * spancountminus1;
					zi += $quake_draw.$d_zistepu * spancountminus1;
					z = 65536 / zi;
					// prescale to 16.16 fixed-point
					snext = ss.Int32.trunc(sdivz * z) + $quake_draw.$sadjust;
					if (snext > $quake_draw.$bbextents) {
						snext = $quake_draw.$bbextents;
					}
					else if (snext < 8) {
						snext = 8;
					}
					// prevent round-off error on <0 steps from
					//  from causing overstepping & running off the
					//  edge of the texture
					tnext = ss.Int32.trunc(tdivz * z) + $quake_draw.$tadjust;
					if (tnext > $quake_draw.$bbextentt) {
						tnext = $quake_draw.$bbextentt;
					}
					else if (tnext < 8) {
						tnext = 8;
					}
					// guard against round-off error on <0 steps
					if (spancount > 1) {
						sstep = ss.Int32.div(snext - s, spancount - 1);
						tstep = ss.Int32.div(tnext - t, spancount - 1);
					}
				}
				do {
					$quake_draw.d_viewbuffer[pdest++] = pbase[(s >> 16) + (t >> 16) * $quake_draw.$cachewidth];
					s += sstep;
					t += tstep;
				} while (--spancount > 0);
				s = snext;
				t = tnext;
			} while (count > 0);
		} while (ss.isValue(pspan = pspan.pnext));
	};
	$quake_draw.$d_DrawZSpans = function(pspan) {
		var count, doublecount, izistep;
		var izi;
		var pdest;
		var ltemp;
		var zi;
		var du, dv;
		// FIXME: check for clamping/range problems
		// we count on FP exceptions being turned off to avoid range problems
		izistep = ss.Int32.trunc($quake_draw.$d_zistepu * 32768 * 65536);
		do {
			pdest = $quake_draw.$d_zwidth * pspan.v + pspan.u;
			count = pspan.count;
			// calculate the initial 1/z
			du = pspan.u;
			dv = pspan.v;
			zi = $quake_draw.$d_ziorigin + dv * $quake_draw.$d_zistepv + du * $quake_draw.$d_zistepu;
			// we count on FP exceptions being turned off to avoid range problems
			izi = ss.Int32.trunc(zi * 32768 * 65536);
			if ((pdest & 2) !== 0) {
				$quake_draw.d_pzbuffer[pdest++] = izi >> 16;
				izi += izistep;
				count--;
			}
			if (izi !== 0) {
				izi = izi;
			}
			if ((doublecount = count >> 1) > 0) {
				do {
					ltemp = izi >> 16;
					izi += izistep;
					ltemp |= izi & 4294901760;
					izi += izistep;
					$quake_draw.d_pzbuffer[pdest] = ltemp >>> 16;
					$quake_draw.d_pzbuffer[pdest + 1] = ltemp & 65535;
					pdest += 2;
				} while (--doublecount > 0);
			}
			if ((count & 1) !== 0) {
				$quake_draw.d_pzbuffer[pdest] = izi >> 16;
			}
		} while (ss.isValue(pspan = pspan.pnext));
	};
	$quake_draw.$d_Sky_uv_To_st = function(u, v, s, t) {
		var wu, wv, temp;
		var end = new Array(3);
		if ($quake_render.r_refdef.vrect.width >= $quake_render.r_refdef.vrect.height) {
			temp = $quake_render.r_refdef.vrect.width;
		}
		else {
			temp = $quake_render.r_refdef.vrect.height;
		}
		wu = 8192 * (u - ($quake_screen.vid.width >> 1)) / temp;
		wv = 8192 * (($quake_screen.vid.height >> 1) - v) / temp;
		end[0] = 4096 * $quake_render.vpn[0] + wu * $quake_render.vright[0] + wv * $quake_render.vup[0];
		end[1] = 4096 * $quake_render.vpn[1] + wu * $quake_render.vright[1] + wv * $quake_render.vup[1];
		end[2] = 4096 * $quake_render.vpn[2] + wu * $quake_render.vright[2] + wv * $quake_render.vup[2];
		end[2] *= 3;
		$quake_mathlib.vectorNormalize(end);
		temp = $quake_render.skytime * $quake_render.skyspeed;
		// TODO: add D_SetupFrame & set this there
		s.$ = ss.Int32.trunc((temp + 378 * end[0]) * 65536);
		t.$ = ss.Int32.trunc((temp + 378 * end[1]) * 65536);
	};
	$quake_draw.$d_DrawSkyScans8 = function(pspan) {
		var count, spancount, u, v;
		var pdest;
		var s = { $: 0 }, t = { $: 0 }, snext = { $: 0 }, tnext = { $: 0 }, sstep, tstep;
		var spancountminus1;
		sstep = 0;
		// keep compiler happy
		tstep = 0;
		// ditto
		do {
			pdest = $quake_draw.$screenwidth * pspan.v + pspan.u;
			count = pspan.count;
			// calculate the initial s & t
			u = pspan.u;
			v = pspan.v;
			$quake_draw.$d_Sky_uv_To_st(u, v, s, t);
			do {
				if (count >= $quake_draw.skY_SPAN_MAX) {
					spancount = $quake_draw.skY_SPAN_MAX;
				}
				else {
					spancount = count;
				}
				count -= spancount;
				if (count !== 0) {
					u += spancount;
					// calculate s and t at far end of span,
					// calculate s and t steps across span by shifting
					$quake_draw.$d_Sky_uv_To_st(u, v, snext, tnext);
					sstep = snext.$ - s.$ >> $quake_draw.skY_SPAN_SHIFT;
					tstep = tnext.$ - t.$ >> $quake_draw.skY_SPAN_SHIFT;
				}
				else {
					// calculate s and t at last pixel in span,
					// calculate s and t steps across span by division
					spancountminus1 = ss.Int32.trunc(spancount - 1);
					if (spancountminus1 > 0) {
						u += spancountminus1;
						$quake_draw.$d_Sky_uv_To_st(u, v, snext, tnext);
						sstep = ss.Int32.div(snext.$ - s.$, spancountminus1);
						tstep = ss.Int32.div(tnext.$ - t.$, spancountminus1);
					}
				}
				do {
					$quake_draw.d_viewbuffer[pdest++] = $quake_render.r_skysource[((t.$ & $quake_draw.r_SKY_TMASK) >> 8) + ((s.$ & $quake_draw.r_SKY_SMASK) >> 16)];
					s.$ += sstep;
					t.$ += tstep;
				} while (--spancount > 0);
				s.$ = snext.$;
				t.$ = tnext.$;
			} while (count > 0);
		} while (ss.isValue(pspan = pspan.pnext));
	};
	$quake_draw.$d_SpriteDrawSpans = function(span) {
		var $state = 0, pspan, count, spancount, izistep, izi, pbase, pdest, s, t, snext, tnext, sstep, tstep, sdivz, tdivz, zi, z, du, dv, spancountminus1, sdivz8stepu, tdivz8stepu, zi8stepu, btemp, pz;
		$sm1:
		for (;;) {
			switch ($state) {
				case 0: {
					pspan = 0;
					sstep = 0;
					// keep compiler happy
					tstep = 0;
					// ditto
					pbase = $quake_draw.$cacheblock;
					sdivz8stepu = $quake_draw.$d_sdivzstepu * 8;
					tdivz8stepu = $quake_draw.$d_tdivzstepu * 8;
					zi8stepu = $quake_draw.$d_zistepu * 8;
					// we count on FP exceptions being turned off to avoid range problems
					izistep = ss.Int32.trunc($quake_draw.$d_zistepu * 32768 * 65536);
					$state = 1;
					continue $sm1;
				}
				case 1: {
					pdest = $quake_draw.$screenwidth * span[pspan].v + span[pspan].u;
					pz = $quake_draw.$d_zwidth * span[pspan].v + span[pspan].u;
					count = span[pspan].count;
					if (count <= 0) {
						$state = 3;
						continue $sm1;
					}
					// calculate the initial s/z, t/z, 1/z, s, and t and clamp
					du = span[pspan].u;
					dv = span[pspan].v;
					sdivz = $quake_draw.$d_sdivzorigin + dv * $quake_draw.$d_sdivzstepv + du * $quake_draw.$d_sdivzstepu;
					tdivz = $quake_draw.$d_tdivzorigin + dv * $quake_draw.$d_tdivzstepv + du * $quake_draw.$d_tdivzstepu;
					zi = $quake_draw.$d_ziorigin + dv * $quake_draw.$d_zistepv + du * $quake_draw.$d_zistepu;
					z = 65536 / zi;
					// prescale to 16.16 fixed-point
					// we count on FP exceptions being turned off to avoid range problems
					izi = ss.Int32.trunc(zi * 32768 * 65536);
					s = ss.Int32.trunc(sdivz * z) + $quake_draw.$sadjust;
					if (s > $quake_draw.$bbextents) {
						s = $quake_draw.$bbextents;
					}
					else if (s < 0) {
						s = 0;
					}
					t = ss.Int32.trunc(tdivz * z) + $quake_draw.$tadjust;
					if (t > $quake_draw.$bbextentt) {
						t = $quake_draw.$bbextentt;
					}
					else if (t < 0) {
						t = 0;
					}
					do {
						// calculate s and t at the far end of the span
						if (count >= 8) {
							spancount = 8;
						}
						else {
							spancount = count;
						}
						count -= spancount;
						if (count !== 0) {
							// calculate s/z, t/z, zi.fixed s and t at far end of span,
							// calculate s and t steps across span by shifting
							sdivz += sdivz8stepu;
							tdivz += tdivz8stepu;
							zi += zi8stepu;
							z = 65536 / zi;
							// prescale to 16.16 fixed-point
							snext = ss.Int32.trunc(sdivz * z) + $quake_draw.$sadjust;
							if (snext > $quake_draw.$bbextents) {
								snext = $quake_draw.$bbextents;
							}
							else if (snext < 8) {
								snext = 8;
							}
							// prevent round-off error on <0 steps from
							//  from causing overstepping & running off the
							//  edge of the texture
							tnext = ss.Int32.trunc(tdivz * z) + $quake_draw.$tadjust;
							if (tnext > $quake_draw.$bbextentt) {
								tnext = $quake_draw.$bbextentt;
							}
							else if (tnext < 8) {
								tnext = 8;
							}
							// guard against round-off error on <0 steps
							sstep = snext - s >> 3;
							tstep = tnext - t >> 3;
						}
						else {
							// calculate s/z, t/z, zi.fixed s and t at last pixel in span (so
							// can't step off polygon), clamp, calculate s and t steps across
							// span by division, biasing steps low so we don't run off the
							// texture
							spancountminus1 = spancount - 1;
							sdivz += $quake_draw.$d_sdivzstepu * spancountminus1;
							tdivz += $quake_draw.$d_tdivzstepu * spancountminus1;
							zi += $quake_draw.$d_zistepu * spancountminus1;
							z = 65536 / zi;
							// prescale to 16.16 fixed-point
							snext = ss.Int32.trunc(sdivz * z) + $quake_draw.$sadjust;
							if (snext > $quake_draw.$bbextents) {
								snext = $quake_draw.$bbextents;
							}
							else if (snext < 8) {
								snext = 8;
							}
							// prevent round-off error on <0 steps from
							//  from causing overstepping & running off the
							//  edge of the texture
							tnext = ss.Int32.trunc(tdivz * z) + $quake_draw.$tadjust;
							if (tnext > $quake_draw.$bbextentt) {
								tnext = $quake_draw.$bbextentt;
							}
							else if (tnext < 8) {
								tnext = 8;
							}
							// guard against round-off error on <0 steps
							if (spancount > 1) {
								sstep = ss.Int32.div(snext - s, spancount - 1);
								tstep = ss.Int32.div(tnext - t, spancount - 1);
							}
						}
						do {
							btemp = pbase[(s >> 16) + (t >> 16) * $quake_draw.$cachewidth];
							if (btemp !== 255) {
								if ($quake_draw.d_pzbuffer[pz] <= izi >> 16) {
									$quake_draw.d_pzbuffer[pz] = izi >> 16;
									$quake_draw.d_viewbuffer[pdest] = btemp;
								}
							}
							izi += izistep;
							pdest++;
							pz++;
							s += sstep;
							t += tstep;
						} while (--spancount > 0);
						s = snext;
						t = tnext;
					} while (count > 0);
					$state = 3;
					continue $sm1;
				}
				case 3: {
					pspan++;
					$state = 2;
					continue $sm1;
				}
				case 2: {
					if (span[pspan].count !== $quake_draw.dS_SPAN_LIST_END) {
						$state = 1;
						continue $sm1;
					}
					$state = -1;
					break $sm1;
				}
				default: {
					break $sm1;
				}
			}
		}
	};
	$quake_draw.$d_SpriteScanLeftEdge = function() {
		var i, v, itop, ibottom, lmaxindex;
		var pvert, pnext;
		var pspan;
		var du, dv, vtop, vbottom, slope;
		var u, u_step;
		pspan = 0;
		i = $quake_draw.$minindex;
		if (i === 0) {
			i = $quake_render.r_spritedesc.nump;
		}
		lmaxindex = $quake_draw.$maxindex;
		if (lmaxindex === 0) {
			lmaxindex = $quake_render.r_spritedesc.nump;
		}
		vtop = Math.ceil($quake_render.r_spritedesc.pverts[i].v);
		do {
			pvert = $quake_render.r_spritedesc.pverts[i];
			pnext = $quake_render.r_spritedesc.pverts[i - 1];
			vbottom = Math.ceil(pnext.v);
			if (vtop < vbottom) {
				du = pnext.u - pvert.u;
				dv = pnext.v - pvert.v;
				slope = du / dv;
				u_step = ss.Int32.trunc(slope * 65536);
				// adjust u to ceil the integer portion
				u = ss.Int32.trunc((pvert.u + slope * (vtop - pvert.v)) * 65536) + 65535;
				itop = ss.Int32.trunc(vtop);
				ibottom = ss.Int32.trunc(vbottom);
				if (ibottom - itop < $quake_render.MAXHEIGHT) {
					for (v = itop; v < ibottom; v++) {
						$quake_draw.$sprite_spans[pspan].u = u >> 16;
						$quake_draw.$sprite_spans[pspan].v = v;
						u += u_step;
						pspan++;
					}
				}
				else {
					ibottom = ibottom;
				}
			}
			vtop = vbottom;
			i--;
			if (i === 0) {
				i = $quake_render.r_spritedesc.nump;
			}
		} while (i !== lmaxindex);
	};
	$quake_draw.$d_SpriteScanRightEdge = function() {
		var i, v, itop, ibottom;
		var pvert, pnext;
		var pspan;
		var du, dv, vtop, vbottom, slope, uvert, unext, vvert, vnext;
		var u, u_step;
		pspan = 0;
		i = $quake_draw.$minindex;
		vvert = $quake_render.r_spritedesc.pverts[i].v;
		if (vvert < $quake_render.r_refdef.fvrecty_adj) {
			vvert = $quake_render.r_refdef.fvrecty_adj;
		}
		if (vvert > $quake_render.r_refdef.fvrectbottom_adj) {
			vvert = $quake_render.r_refdef.fvrectbottom_adj;
		}
		vtop = Math.ceil(vvert);
		do {
			pvert = $quake_render.r_spritedesc.pverts[i];
			pnext = $quake_render.r_spritedesc.pverts[i + 1];
			vnext = pnext.v;
			if (vnext < $quake_render.r_refdef.fvrecty_adj) {
				vnext = $quake_render.r_refdef.fvrecty_adj;
			}
			if (vnext > $quake_render.r_refdef.fvrectbottom_adj) {
				vnext = $quake_render.r_refdef.fvrectbottom_adj;
			}
			vbottom = Math.ceil(vnext);
			if (vtop < vbottom) {
				uvert = pvert.u;
				if (uvert < $quake_render.r_refdef.fvrectx_adj) {
					uvert = $quake_render.r_refdef.fvrectx_adj;
				}
				if (uvert > $quake_render.r_refdef.fvrectright_adj) {
					uvert = $quake_render.r_refdef.fvrectright_adj;
				}
				unext = pnext.u;
				if (unext < $quake_render.r_refdef.fvrectx_adj) {
					unext = $quake_render.r_refdef.fvrectx_adj;
				}
				if (unext > $quake_render.r_refdef.fvrectright_adj) {
					unext = $quake_render.r_refdef.fvrectright_adj;
				}
				du = unext - uvert;
				dv = vnext - vvert;
				slope = du / dv;
				u_step = ss.Int32.trunc(slope * 65536);
				// adjust u to ceil the integer portion
				u = ss.Int32.trunc((uvert + slope * (vtop - vvert)) * 65536) + 65535;
				itop = ss.Int32.trunc(vtop);
				ibottom = ss.Int32.trunc(vbottom);
				for (v = itop; v < ibottom; v++) {
					$quake_draw.$sprite_spans[pspan].count = (u >> 16) - $quake_draw.$sprite_spans[pspan].u;
					u += u_step;
					pspan++;
				}
			}
			vtop = vbottom;
			vvert = vnext;
			i++;
			if (i === $quake_render.r_spritedesc.nump) {
				i = 0;
			}
		} while (i !== $quake_draw.$maxindex);
		$quake_draw.$sprite_spans[pspan].count = $quake_draw.dS_SPAN_LIST_END;
		// mark the end of the span list 
	};
	$quake_draw.$d_SpriteCalculateGradients = function() {
		var p_normal = new Array(3), p_saxis = new Array(3), p_taxis = new Array(3), p_temp1 = new Array(3);
		var distinv;
		$quake_render.transformVector($quake_render.r_spritedesc.vpn, p_normal);
		$quake_render.transformVector($quake_render.r_spritedesc.vright, p_saxis);
		$quake_render.transformVector($quake_render.r_spritedesc.vup, p_taxis);
		$quake_mathlib.vectorInverse(p_taxis);
		distinv = 1 / -$quake_mathlib.dotProduct$1($quake_render.modelorg, $quake_render.r_spritedesc.vpn);
		$quake_draw.$d_sdivzstepu = p_saxis[0] * $quake_render.xscaleinv;
		$quake_draw.$d_tdivzstepu = p_taxis[0] * $quake_render.xscaleinv;
		$quake_draw.$d_sdivzstepv = -p_saxis[1] * $quake_render.yscaleinv;
		$quake_draw.$d_tdivzstepv = -p_taxis[1] * $quake_render.yscaleinv;
		$quake_draw.$d_zistepu = p_normal[0] * $quake_render.xscaleinv * distinv;
		$quake_draw.$d_zistepv = -p_normal[1] * $quake_render.yscaleinv * distinv;
		$quake_draw.$d_sdivzorigin = p_saxis[2] - $quake_render.xcenter * $quake_draw.$d_sdivzstepu - $quake_render.ycenter * $quake_draw.$d_sdivzstepv;
		$quake_draw.$d_tdivzorigin = p_taxis[2] - $quake_render.xcenter * $quake_draw.$d_tdivzstepu - $quake_render.ycenter * $quake_draw.$d_tdivzstepv;
		$quake_draw.$d_ziorigin = p_normal[2] * distinv - $quake_render.xcenter * $quake_draw.$d_zistepu - $quake_render.ycenter * $quake_draw.$d_zistepv;
		$quake_render.transformVector($quake_render.modelorg, p_temp1);
		$quake_draw.$sadjust = ss.Int32.trunc($quake_mathlib.dotProduct$1(p_temp1, p_saxis) * 65536 + 0.5) - (-($quake_draw.$cachewidth >> 1) << 16);
		$quake_draw.$tadjust = ss.Int32.trunc($quake_mathlib.dotProduct$1(p_temp1, p_taxis) * 65536 + 0.5) - (-($quake_draw.$sprite_height >> 1) << 16);
		// -1 (-epsilon) so we never wander off the edge of the texture
		$quake_draw.$bbextents = ($quake_draw.$cachewidth << 16) - 1;
		$quake_draw.$bbextentt = ($quake_draw.$sprite_height << 16) - 1;
	};
	$quake_draw.d_DrawSprite = function() {
		var i, nump;
		var ymin, ymax;
		var pverts;
		var spans = new Array(1025);
		for (var kk = 0; kk < 1025; kk++) {
			spans[kk] = new $quake_draw$sspan_t();
		}
		$quake_draw.$sprite_spans = spans;
		// find the top and bottom vertices, and make sure there's at least one scan to
		// draw
		ymin = 999999.9;
		ymax = -999999.9;
		pverts = $quake_render.r_spritedesc.pverts;
		for (i = 0; i < $quake_render.r_spritedesc.nump; i++) {
			if (pverts[i].v < ymin) {
				ymin = pverts[i].v;
				$quake_draw.$minindex = i;
			}
			if (pverts[i].v > ymax) {
				ymax = pverts[i].v;
				$quake_draw.$maxindex = i;
			}
		}
		ymin = Math.ceil(ymin);
		ymax = Math.ceil(ymax);
		if (ymin >= ymax) {
			return;
		}
		// doesn't cross any scans at all
		$quake_draw.$cachewidth = $quake_render.r_spritedesc.pspriteframe.width;
		$quake_draw.$sprite_height = $quake_render.r_spritedesc.pspriteframe.height;
		$quake_draw.$cacheblock = $quake_render.r_spritedesc.pspriteframe.pixels;
		// copy the first vertex to the last vertex, so we don't have to deal with
		// wrapping
		nump = $quake_render.r_spritedesc.nump;
		pverts = $quake_render.r_spritedesc.pverts;
		pverts[nump] = pverts[0];
		$quake_draw.$d_SpriteCalculateGradients();
		$quake_draw.$d_SpriteScanLeftEdge();
		$quake_draw.$d_SpriteScanRightEdge();
		$quake_draw.$d_SpriteDrawSpans($quake_draw.$sprite_spans);
	};
	$quake_draw.d_InitCaches = function(size) {
		if (!$quake_common.msg_suppress_1) {
			$quake_console.con_Printf(ss.Int32.div(size, 1024) + 'k surface cache\n');
		}
		$quake_draw.$sc_size = size - $quake_draw.GUARDSIZE;
	};
	$quake_draw.$d_FlushCaches = function() {
	};
	$quake_draw.$d_SCAlloc = function(width, size) {
		var new1;
		if (width < 0 || width > 256) {
			$quake_sys_linux.sys_Error('D_SCAlloc: bad cache width ' + width + '\n');
		}
		if (size <= 0 || size > 65536) {
			$quake_sys_linux.sys_Error('D_SCAlloc: bad cache size ' + size + '\n');
		}
		if (size > $quake_draw.$sc_size) {
			$quake_sys_linux.sys_Error('D_SCAlloc: ' + size + ' > cache size');
		}
		// create a fragment out of any leftovers
		new1 = new $quake_draw$surfcache_t();
		new1.size = size;
		new1.data = new Uint8Array(size);
		new1.width = width;
		new1.owner = null;
		// should be set properly after return
		return new1;
	};
	$quake_draw.$d_CacheSurface = function(surface, miplevel) {
		var cache;
		//
		// if the surface is animating or flashing, flush the cache
		//
		$quake_render.r_drawsurf.texture = $quake_render.r_TextureAnimation(surface.texinfo.texture);
		$quake_render.r_drawsurf.lightadj[0] = $quake_render.d_lightstylevalue[surface.styles[0]];
		$quake_render.r_drawsurf.lightadj[1] = $quake_render.d_lightstylevalue[surface.styles[1]];
		$quake_render.r_drawsurf.lightadj[2] = $quake_render.d_lightstylevalue[surface.styles[2]];
		$quake_render.r_drawsurf.lightadj[3] = $quake_render.d_lightstylevalue[surface.styles[3]];
		//
		// see if the cache holds apropriate data
		//
		cache = surface.cachespots[miplevel];
		if (ss.isValue(cache) && cache.dlight === 0 && surface.dlightframe !== $quake_render.r_framecount && ss.referenceEquals(cache.texture, $quake_render.r_drawsurf.texture) && cache.lightadj[0] === $quake_render.r_drawsurf.lightadj[0] && cache.lightadj[1] === $quake_render.r_drawsurf.lightadj[1] && cache.lightadj[2] === $quake_render.r_drawsurf.lightadj[2] && cache.lightadj[3] === $quake_render.r_drawsurf.lightadj[3]) {
			return cache;
		}
		//
		// determine shape of surface
		//
		$quake_draw.$surfscale = 1 / (1 << miplevel);
		$quake_render.r_drawsurf.surfmip = miplevel;
		$quake_render.r_drawsurf.surfwidth = surface.extents[0] >> miplevel;
		$quake_render.r_drawsurf.rowbytes = $quake_render.r_drawsurf.surfwidth;
		$quake_render.r_drawsurf.surfheight = surface.extents[1] >> miplevel;
		//
		// allocate memory if needed
		//
		if (ss.isNullOrUndefined(cache)) {
			cache = $quake_draw.$d_SCAlloc($quake_render.r_drawsurf.surfwidth, $quake_render.r_drawsurf.surfwidth * $quake_render.r_drawsurf.surfheight);
			surface.cachespots[miplevel] = cache;
			cache.owner = surface.cachespots[miplevel];
			cache.mipscale = $quake_draw.$surfscale;
		}
		if (surface.dlightframe === $quake_render.r_framecount) {
			cache.dlight = 1;
		}
		else {
			cache.dlight = 0;
		}
		$quake_render.r_drawsurf.surfdat = cache.data;
		cache.texture = $quake_render.r_drawsurf.texture;
		cache.lightadj[0] = $quake_render.r_drawsurf.lightadj[0];
		cache.lightadj[1] = $quake_render.r_drawsurf.lightadj[1];
		cache.lightadj[2] = $quake_render.r_drawsurf.lightadj[2];
		cache.lightadj[3] = $quake_render.r_drawsurf.lightadj[3];
		//
		// draw and light the surface texture
		//
		$quake_render.r_drawsurf.surf = surface;
		$quake_render.c_surf++;
		$quake_render.r_DrawSurface();
		return surface.cachespots[miplevel];
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.adivtab_t
	var $quake_draw$adivtab_t = function(quotient, remainder) {
		this.quotient = 0;
		this.remainder = 0;
		this.quotient = quotient;
		this.remainder = remainder;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.affinetridesc_t
	var $quake_draw$affinetridesc_t = function() {
		this.pskin = null;
		this.pskindesc = null;
		this.skinwidth = 0;
		this.skinheight = 0;
		this.ptriangles = null;
		this.pfinalverts = null;
		this.numtriangles = 0;
		this.drawtype = false;
		this.seamfixupX16 = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.cachepic_t
	var $quake_draw$cachepic_t = function() {
		this.name = null;
		this.cache = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.drawsurf_t
	var $quake_draw$drawsurf_t = function() {
		this.surfdat = null;
		this.surfofs = 0;
		this.rowbytes = 0;
		this.surf = null;
		this.lightadj = new Array($quake_bspfile.MAXLIGHTMAPS);
		this.texture = null;
		this.surfmip = 0;
		this.surfwidth = 0;
		this.surfheight = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.edgetable
	var $quake_draw$edgetable = function(isflattop, numleftedges, pleftedgevert0, pleftedgevert1, pleftedgevert2, numrightedges, prightedgevert0, prightedgevert1, prightedgevert2) {
		this.isflattop = 0;
		this.numleftedges = 0;
		this.pleftedgevert0 = null;
		this.pleftedgevert1 = null;
		this.pleftedgevert2 = null;
		this.numrightedges = 0;
		this.prightedgevert0 = null;
		this.prightedgevert1 = null;
		this.prightedgevert2 = null;
		this.isflattop = isflattop;
		this.numleftedges = numleftedges;
		this.pleftedgevert0 = pleftedgevert0;
		this.pleftedgevert1 = pleftedgevert1;
		this.pleftedgevert2 = pleftedgevert2;
		this.numrightedges = numrightedges;
		this.prightedgevert0 = prightedgevert0;
		this.prightedgevert1 = prightedgevert1;
		this.prightedgevert2 = prightedgevert2;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.emitpoint_t
	var $quake_draw$emitpoint_t = function() {
		this.u = 0;
		this.v = 0;
		this.s = 0;
		this.t = 0;
		this.zi = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.finalvert_t
	var $quake_draw$finalvert_t = function() {
		this.v = new Array(6);
		this.flags = 0;
		this.reserved = 0;
	};
	$quake_draw$finalvert_t.copy = function(src, dst) {
		for (var kk = 0; kk < 6; kk++) {
			dst.v[kk] = src.v[kk];
		}
		dst.flags = src.flags;
		dst.reserved = src.reserved;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.particle_t
	var $quake_draw$particle_t = function() {
		this.org = new Array(3);
		this.color = 0;
		this.next = null;
		this.vel = new Array(3);
		this.ramp = 0;
		this.die = 0;
		this.type = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.polydesc_t
	var $quake_draw$polydesc_t = function() {
		this.$numverts = 0;
		this.$nearzi = 0;
		this.$pverts = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.polyvert_t
	var $quake_draw$polyvert_t = function() {
		this.$u = 0;
		this.$v = 0;
		this.$zi = 0;
		this.$s = 0;
		this.$t = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.ptype_t
	var $quake_draw$ptype_t = function() {
	};
	$quake_draw$ptype_t.prototype = { pt_static: 0, pt_grav: 1, pt_slowgrav: 2, pt_fire: 3, pt_explode: 4, pt_explode2: 5, pt_blob: 6, pt_blob2: 7 };
	Type.registerEnum(global, 'quake.draw$ptype_t', $quake_draw$ptype_t, false);
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.screenpart_t
	var $quake_draw$screenpart_t = function() {
		this.$u = 0;
		this.$v = 0;
		this.$zi = 0;
		this.$color = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.spanpackage_t
	var $quake_draw$spanpackage_t = function() {
		this.pdest = 0;
		this.pz = 0;
		this.count = 0;
		this.ptex = 0;
		this.sfrac = 0;
		this.tfrac = 0;
		this.light = 0;
		this.zi = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.spritedesc_t
	var $quake_draw$spritedesc_t = function() {
		this.nump = 0;
		this.pverts = null;
		this.pspriteframe = null;
		this.vup = new Array(3);
		this.vright = new Array(3);
		this.vpn = new Array(3);
		this.nearzi = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.sspan_t
	var $quake_draw$sspan_t = function() {
		this.u = 0;
		this.v = 0;
		this.count = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.surfcache_t
	var $quake_draw$surfcache_t = function() {
		this.next = null;
		this.owner = null;
		this.lightadj = new Array($quake_bspfile.MAXLIGHTMAPS);
		this.dlight = 0;
		this.size = 0;
		this.width = 0;
		this.height = 0;
		this.mipscale = 0;
		this.texture = null;
		this.data = null;
		this.ofs = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.draw.zpointdesc_t
	var $quake_draw$zpointdesc_t = function() {
		this.$u = 0;
		this.$v = 0;
		this.$zi = 0;
		this.$color = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.host
	var $quake_host = function() {
		this.$host_hunklevel = 0;
	};
	$quake_host.prototype = {
		$host_WriteConfiguration: function() {
		},
		$sV_ClientPrintf: function(fmt) {
		},
		$sV_BroadcastPrintf: function(fmt) {
		},
		$host_ClientCommands: function(fmt) {
		},
		$sV_DropClient: function(crash) {
		},
		$host_GetConsoleCommands: function() {
		},
		$host_Shutdown: function() {
			if ($quake_host.$isdown) {
				ss.Debug.writeln('recursive shutdown');
				return;
			}
			$quake_host.$isdown = true;
		},
		$host_SavegameComment: function(text) {
		}
	};
	$quake_host.host_EndGame = function(message) {
		var string;
		string = message;
		$quake_console.con_DPrintf('Host_EndGame: ' + string + '\n');
		if ($quake_server.sv.active) {
			$quake_host.host_ShutdownServer(false);
		}
		if ($quake_client.cls.state === 0) {
			$quake_sys_linux.sys_Error('Host_EndGame: ' + string + '\n');
		}
		// dedicated servers exit
		if ($quake_client.cls.demonum !== -1) {
			$quake_client.cL_NextDemo();
		}
		else {
			$quake_client.cL_Disconnect();
		}
		throw new $quake_host_abortserver();
	};
	$quake_host.host_Error = function(error) {
	};
	$quake_host.$host_FindMaxClients = function() {
		var i;
		$quake_server.svs.maxclients = 1;
		i = $quake_common.coM_CheckParm('-dedicated');
		if (i !== 0) {
			$quake_client.cls.state = 0;
			if (i !== $quake_common.com_argc - 1) {
				$quake_server.svs.maxclients = parseInt($quake_common.com_argv[i + 1]);
			}
			else {
				$quake_server.svs.maxclients = 8;
			}
		}
		else {
			$quake_client.cls.state = 1;
		}
		i = $quake_common.coM_CheckParm('-listen');
		if (i !== 0) {
			if ($quake_client.cls.state === 0) {
				$quake_sys_linux.sys_Error('Only one of -dedicated or -listen can be specified');
			}
			if (i !== $quake_common.com_argc - 1) {
				$quake_server.svs.maxclients = parseInt($quake_common.com_argv[i + 1]);
			}
			else {
				$quake_server.svs.maxclients = 8;
			}
		}
		if ($quake_server.svs.maxclients < 1) {
			$quake_server.svs.maxclients = 8;
		}
		else if ($quake_server.svs.maxclients > $quake_quakedef.maX_SCOREBOARD) {
			$quake_server.svs.maxclients = $quake_quakedef.maX_SCOREBOARD;
		}
		$quake_server.svs.maxclientslimit = $quake_server.svs.maxclients;
		if ($quake_server.svs.maxclientslimit < 4) {
			$quake_server.svs.maxclientslimit = 4;
		}
		$quake_server.svs.clients = new Array($quake_server.svs.maxclientslimit);
		for (var kk = 0; kk < $quake_server.svs.maxclientslimit; kk++) {
			$quake_server.svs.clients[kk] = new $quake_server$client_t();
			$quake_server.svs.clients[kk].index = kk;
		}
		if ($quake_server.svs.maxclients > 1) {
			$quake_cvar_t.cvar_SetValue('deathmatch', 1);
		}
		else {
			$quake_cvar_t.cvar_SetValue('deathmatch', 0);
		}
	};
	$quake_host.$host_InitLocal = function() {
		$quake_host.host_InitCommands();
		$quake_cvar_t.cvar_RegisterVariable($quake_host.$host_framerate);
		$quake_cvar_t.cvar_RegisterVariable($quake_host.$host_speeds);
		$quake_cvar_t.cvar_RegisterVariable($quake_host.$sys_ticrate);
		$quake_cvar_t.cvar_RegisterVariable($quake_host.$serverprofile);
		$quake_cvar_t.cvar_RegisterVariable($quake_host.$fraglimit);
		$quake_cvar_t.cvar_RegisterVariable($quake_host.$timelimit);
		$quake_cvar_t.cvar_RegisterVariable($quake_host.$teamplay);
		$quake_cvar_t.cvar_RegisterVariable($quake_host.$samelevel);
		$quake_cvar_t.cvar_RegisterVariable($quake_host.$noexit);
		$quake_cvar_t.cvar_RegisterVariable($quake_host.skill);
		$quake_cvar_t.cvar_RegisterVariable($quake_host.developer);
		$quake_cvar_t.cvar_RegisterVariable($quake_host.deathmatch);
		$quake_cvar_t.cvar_RegisterVariable($quake_host.coop);
		$quake_cvar_t.cvar_RegisterVariable($quake_host.$pausable);
		$quake_cvar_t.cvar_RegisterVariable($quake_host.$temp1);
		$quake_host.$host_FindMaxClients();
		$quake_host.host_time = 1;
		// so a think at time 0 won't get called
	};
	$quake_host.host_ShutdownServer = function(crash) {
		if (!$quake_server.sv.active) {
			return;
		}
		$quake_server.sv.active = false;
		// stop all client sounds immediately
		if ($quake_client.cls.state === 2) {
			$quake_client.cL_Disconnect();
		}
	};
	$quake_host.host_ClearMemory = function() {
		$quake_console.con_DPrintf('Clearing memory\n');
		$quake_model.mod_ClearAll();
		$quake_client.cls.signon = 0;
	};
	$quake_host.$host_FilterTime = function(time) {
		$quake_host.realtime += time;
		if ($quake_host.$oldrealtime > $quake_host.realtime) {
			return false;
		}
		if (!$quake_client.cls.timedemo && $quake_host.realtime - $quake_host.$oldrealtime < 0.0138888888888889) {
			return false;
		}
		// framerate is too high
		$quake_host.host_frametime = $quake_host.realtime - $quake_host.$oldrealtime;
		$quake_host.$oldrealtime = $quake_host.realtime;
		if ($quake_host.$host_framerate.value > 0) {
			$quake_host.host_frametime = $quake_host.$host_framerate.value;
		}
		else {
			// don't allow really long or short frames
			if ($quake_host.host_frametime > 0.1) {
				$quake_host.host_frametime = 0.1;
			}
			if ($quake_host.host_frametime < 0.001) {
				$quake_host.host_frametime = 0.001;
			}
		}
		return true;
	};
	$quake_host.$host_ServerFrame = function() {
		// set the time and clear the general datagram
		$quake_server.sV_ClearDatagram();
		// check for new clients
		$quake_server.sV_CheckForNewClients();
		// read client messages
		$quake_server.sV_RunClients();
		// move things around and think
		// always pause in single player if in console or menus
		if (!$quake_server.sv.paused && ($quake_server.svs.maxclients > 1 || $quake_keys.key_dest === 0)) {
			$quake_server.sV_Physics();
		}
		// send all messages to the clients
		$quake_server.sV_SendClientMessages();
	};
	$quake_host.$_Host_Frame = function(time) {
		var pass1, pass2, pass3;
		//try
		//{
		// decide the simulation time
		if (!$quake_host.$host_FilterTime(time)) {
			return;
		}
		// don't run too fast, or packets will flood out
		// process console commands
		$quake_cmd.cbuf_Execute();
		$quake_net.neT_Poll();
		// if running the server locally, make intentions now
		if ($quake_server.sv.active) {
			$quake_client.cL_SendCmd();
		}
		//-------------------
		//
		// server operations
		//
		//-------------------
		if ($quake_server.sv.active) {
			$quake_host.$host_ServerFrame();
		}
		//-------------------
		//
		// client operations
		//
		//-------------------
		// if running the server remotely, send intentions now after
		// the incoming messages have been read
		if (!$quake_server.sv.active) {
			$quake_client.cL_SendCmd();
		}
		$quake_host.host_time += $quake_host.host_frametime;
		// fetch results from server
		if ($quake_client.cls.state === 2) {
			$quake_client.cL_ReadFromServer();
		}
		$quake_screen.scR_UpdateScreen();
		// update audio
		if ($quake_client.cls.signon === $quake_client.SIGNONS) {
			$quake_sound.s_Update($quake_render.r_origin, $quake_render.vpn, $quake_render.vright, $quake_render.vup);
			$quake_client.cL_DecayLights();
		}
		else {
			$quake_sound.s_Update($quake_mathlib.vec3_origin, $quake_mathlib.vec3_origin, $quake_mathlib.vec3_origin, $quake_mathlib.vec3_origin);
		}
		$quake_host.host_framecount++;
		//}
		//catch (host_abortserver)
		//{
		//    return;
		//}
	};
	$quake_host.host_Frame = function(time) {
		var time1, time2;
		var i, c, m;
		$quake_host.$_Host_Frame(time);
	};
	$quake_host.$host_InitVCR = function(parms) {
		var i, len, n;
		if ($quake_common.coM_CheckParm('-playback') !== 0) {
		}
		if ((n = $quake_common.coM_CheckParm('-record')) !== 0) {
		}
	};
	$quake_host.host_Init = function(parms) {
		if ($quake_common.standard_quake) {
			$quake_host.$minimum_memory = $quake_quakedef.minimuM_MEMORY;
		}
		else {
			$quake_host.$minimum_memory = $quake_quakedef.minimuM_MEMORY_LEVELPAK;
		}
		$quake_cmd.cbuf_Init();
		$quake_cmd.cmd_Init();
		$quake_view.v_Init();
		$quake_chase.chase_Init();
		$quake_host.$host_InitVCR(parms);
		$quake_common.coM_Init(null);
		$quake_host.$host_InitLocal();
		$quake_wad.w_LoadWadFile('gfx.wad');
		$quake_keys.key_Init();
		$quake_console.con_Init();
		$quake_prog.pR_Init();
		$quake_menu.m_Init();
		$quake_model.mod_Init();
		$quake_net.neT_Init();
		$quake_server.sV_Init();
		$quake_render.r_InitTextures();
		// needed even for dedicated servers
		$quake_host.host_basepal = $quake_common.coM_LoadHunkFile('gfx/palette.lmp');
		if (ss.isNullOrUndefined($quake_host.host_basepal)) {
			$quake_sys_linux.sys_Error('Couldn\'t load gfx/palette.lmp');
		}
		$quake_host.host_colormap = $quake_common.coM_LoadHunkFile('gfx/colormap.lmp');
		if (ss.isNullOrUndefined($quake_host.host_colormap)) {
			$quake_sys_linux.sys_Error('Couldn\'t load gfx/colormap.lmp');
		}
		// on non win32, mouse comes before video for security reasons
		//IN_Init ();
		$quake_vid.viD_Init($quake_host.host_basepal);
		$quake_draw.draw_Init();
		$quake_screen.scR_Init();
		$quake_render.r_Init();
		// on Win32, sound initialization has to come before video initialization, so we
		// can put up a popup if the sound hardware is in use
		$quake_sound.s_Init();
		//CDAudio_Init ();
		$quake_sbar.sbar_Init();
		$quake_client.cL_Init();
		$quake_cmd.cbuf_InsertText('exec quake.rc\n');
		$quake_host.host_initialized = true;
	};
	$quake_host.host_Quit_f = function() {
		if ($quake_keys.key_dest !== 1 && $quake_client.cls.state !== 0) {
			$quake_menu.m_Menu_Quit_f();
			return;
		}
		$quake_client.cL_Disconnect();
		$quake_host.host_ShutdownServer(false);
		$quake_sys_linux.sys_Quit();
	};
	$quake_host.$host_Status_f = function() {
	};
	$quake_host.$host_God_f = function() {
	};
	$quake_host.$host_Notarget_f = function() {
	};
	$quake_host.$host_Noclip_f = function() {
	};
	$quake_host.$host_Fly_f = function() {
	};
	$quake_host.$host_Ping_f = function() {
	};
	$quake_host.$host_Map_f = function() {
		var i;
		var name;
		if ($quake_cmd.cmd_source !== 1) {
			return;
		}
		$quake_client.cls.demonum = -1;
		// stop demo loop in case this fails
		$quake_client.cL_Disconnect();
		$quake_host.host_ShutdownServer(false);
		$quake_keys.key_dest = 0;
		// remove console or menu
		$quake_screen.scR_BeginLoadingPlaque();
		$quake_client.cls.mapstring = '';
		for (i = 0; i < $quake_cmd.cmd_Argc(); i++) {
			$quake_client.cls.mapstring += $quake_cmd.cmd_Argv(i);
			$quake_client.cls.mapstring += ' ';
		}
		$quake_client.cls.mapstring += '\n';
		$quake_server.svs.serverflags = 0;
		// haven't completed an episode yet
		name = $quake_cmd.cmd_Argv(1);
		$quake_server.sV_SpawnServer(name);
		if (!$quake_server.sv.active) {
			return;
		}
		if ($quake_client.cls.state !== 0) {
			$quake_client.cls.spawnparms = '';
			for (i = 2; i < $quake_cmd.cmd_Argc(); i++) {
				$quake_client.cls.spawnparms += $quake_cmd.cmd_Argv(i);
				$quake_client.cls.spawnparms += ' ';
			}
			$quake_cmd.cmd_ExecuteString($System_StringExtensions.toCharArray('connect local\0'), 1);
		}
	};
	$quake_host.$host_Changelevel_f = function() {
	};
	$quake_host.$host_Restart_f = function() {
	};
	$quake_host.$host_Reconnect_f = function() {
		$quake_screen.scR_BeginLoadingPlaque();
		$quake_client.cls.signon = 0;
		// need new connection messages
	};
	$quake_host.$host_Connect_f = function() {
		var name;
		$quake_client.cls.demonum = -1;
		// stop demo loop in case this fails
		if ($quake_client.cls.demoplayback) {
			$quake_client.cL_StopPlayback();
			$quake_client.cL_Disconnect();
		}
		name = $quake_cmd.cmd_Argv(1);
		$quake_client.cL_EstablishConnection(name);
		$quake_host.$host_Reconnect_f();
	};
	$quake_host.$host_Savegame_f = function() {
	};
	$quake_host.$host_Loadgame_f = function() {
	};
	$quake_host.$host_Name_f = function() {
		var newName;
		if ($quake_cmd.cmd_Argc() === 1) {
			$quake_console.con_Printf('"name" is "' + $quake_client.cl_name._string + '"\n');
			return;
		}
		if ($quake_cmd.cmd_Argc() === 2) {
			newName = $quake_cmd.cmd_Argv(1);
		}
		else {
			newName = $quake_cmd.cmd_Args();
		}
		if ($quake_cmd.cmd_source === 1) {
			if ($quake_client.cl_name._string.compareTo(newName) === 0) {
				return;
			}
			$quake_cvar_t.cvar_Set('_cl_name', newName);
			if ($quake_client.cls.state === 2) {
				$quake_cmd.cmd_ForwardToServer();
			}
			return;
		}
		if ($quake_host.host_client.name.length !== 0 && $quake_host.host_client.name.compareTo('unconnected') !== 0) {
			if ($quake_host.host_client.name.compareTo(newName) !== 0) {
				$quake_console.con_Printf($quake_host.host_client.name + ' renamed to ' + newName + '\n');
			}
		}
		$quake_host.host_client.name = newName;
		$quake_host.host_client.edict.v.netname = $quake_prog.getStringIndex($quake_host.host_client.name) - 15000;
		// send notification to all clients
		$quake_common.msG_WriteByte($quake_server.sv.reliable_datagram, $quake_net.svc_updatename);
		$quake_common.msG_WriteByte($quake_server.sv.reliable_datagram, $quake_host.host_client.index);
		$quake_common.msG_WriteString($quake_server.sv.reliable_datagram, $quake_host.host_client.name);
	};
	$quake_host.$host_Version_f = function() {
		$quake_console.con_Printf('Version ' + $quake_quakedef.VERSION + '\n');
		//console.Con_Printf ("Exe: " + _TIME_ + " " + __DATE__ + "\n");
	};
	$quake_host.$host_Say = function(teamonly) {
	};
	$quake_host.$host_Say_f = function() {
		$quake_host.$host_Say(false);
	};
	$quake_host.$host_Say_Team_f = function() {
		$quake_host.$host_Say(true);
	};
	$quake_host.$host_Tell_f = function() {
	};
	$quake_host.$host_Color_f = function() {
	};
	$quake_host.$host_Kill_f = function() {
	};
	$quake_host.$host_Pause_f = function() {
	};
	$quake_host.$host_PreSpawn_f = function() {
		if ($quake_cmd.cmd_source === 1) {
			$quake_console.con_Printf('prespawn is not valid from the console\n');
			return;
		}
		if ($quake_host.host_client.spawned) {
			$quake_console.con_Printf('prespawn not valid -- allready spawned\n');
			return;
		}
		$quake_common.sZ_Write($quake_host.host_client.message, $quake_server.sv.signon.data, $quake_server.sv.signon.cursize);
		$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_net.svc_signonnum);
		$quake_common.msG_WriteByte($quake_host.host_client.message, 2);
		$quake_host.host_client.sendsignon = true;
	};
	$quake_host.$host_Spawn_f = function() {
		var i;
		var client;
		var ent;
		if ($quake_cmd.cmd_source === 1) {
			$quake_console.con_Printf('spawn is not valid from the console\n');
			return;
		}
		if ($quake_host.host_client.spawned) {
			$quake_console.con_Printf('Spawn not valid -- allready spawned\n');
			return;
		}
		// run the entrance script
		if ($quake_server.sv.loadgame) {
			// loaded games are fully inited allready
			// if this is the last client to be connected, unpause
			$quake_server.sv.paused = false;
		}
		else {
			// set up the edict
			ent = $quake_host.host_client.edict;
			ent.v.clear();
			ent.v.colormap = $quake_prog.nuM_FOR_EDICT(ent);
			ent.v.team = ($quake_host.host_client.colors & 15) + 1;
			ent.v.netname = $quake_prog.getStringIndex($quake_host.host_client.name) - 15000;
			// copy spawn parms out of the client_t
			for (i = 0; i < $quake_server.nuM_SPAWN_PARMS; i++) {
				$quake_prog.pr_globals_write(43 + i, $quake_host.host_client.spawn_parms[i]);
			}
			// call the spawn function
			$quake_prog.pr_global_struct[0].time = $quake_server.sv.time;
			$quake_prog.pr_global_struct[0].self = $quake_prog.edicT_TO_PROG($quake_server.sv_player);
			$quake_prog.pR_ExecuteProgram($quake_prog.pr_functions[$quake_prog.pr_global_struct[0].clientConnect]);
			if ($quake_sys_linux.sys_FloatTime() - $quake_host.host_client.netconnection.connecttime <= $quake_server.sv.time) {
				$quake_sys_linux.sys_Printf($quake_host.host_client.name + ' entered the game\n');
			}
			$quake_prog.pR_ExecuteProgram($quake_prog.pr_functions[$quake_prog.pr_global_struct[0].putClientInServer]);
		}
		// send all current names, colors, and frag counts
		$quake_common.sZ_Clear($quake_host.host_client.message);
		// send time of update
		$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_net.svc_time);
		$quake_common.msG_WriteFloat($quake_host.host_client.message, $quake_server.sv.time);
		for (i = 0; i < $quake_server.svs.maxclients; i++) {
			client = $quake_server.svs.clients[i];
			$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_net.svc_updatename);
			$quake_common.msG_WriteByte($quake_host.host_client.message, i);
			$quake_common.msG_WriteString($quake_host.host_client.message, client.name);
			$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_net.svc_updatefrags);
			$quake_common.msG_WriteByte($quake_host.host_client.message, i);
			$quake_common.msG_WriteShort($quake_host.host_client.message, client.old_frags);
			$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_net.svc_updatecolors);
			$quake_common.msG_WriteByte($quake_host.host_client.message, i);
			$quake_common.msG_WriteByte($quake_host.host_client.message, client.colors);
		}
		// send all current light styles
		for (i = 0; i < $quake_quakedef.maX_LIGHTSTYLES; i++) {
			$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_net.svc_lightstyle);
			$quake_common.msG_WriteByte($quake_host.host_client.message, i);
			$quake_common.msG_WriteString($quake_host.host_client.message, $quake_server.sv.lightstyles[i]);
		}
		//
		// send some stats
		//
		$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_net.svc_updatestat);
		$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_quakedef.staT_TOTALSECRETS);
		$quake_common.msG_WriteLong($quake_host.host_client.message, ss.Int32.trunc($quake_prog.pr_global_struct[0].total_secrets));
		$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_net.svc_updatestat);
		$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_quakedef.staT_TOTALMONSTERS);
		$quake_common.msG_WriteLong($quake_host.host_client.message, ss.Int32.trunc($quake_prog.pr_global_struct[0].total_monsters));
		$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_net.svc_updatestat);
		$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_quakedef.staT_SECRETS);
		$quake_common.msG_WriteLong($quake_host.host_client.message, ss.Int32.trunc($quake_prog.pr_global_struct[0].found_secrets));
		$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_net.svc_updatestat);
		$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_quakedef.staT_MONSTERS);
		$quake_common.msG_WriteLong($quake_host.host_client.message, ss.Int32.trunc($quake_prog.pr_global_struct[0].killed_monsters));
		//
		// send a fixangle
		// Never send a roll angle, because savegames can catch the server
		// in a state where it is expecting the client to correct the angle
		// and it won't happen if the game was just loaded, so you wind up
		// with a permanent head tilt
		ent = $quake_prog.edicT_NUM(1 + $quake_host.host_client.index);
		$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_net.svc_setangle);
		for (i = 0; i < 2; i++) {
			$quake_common.msG_WriteAngle($quake_host.host_client.message, ent.v.angles[i]);
		}
		$quake_common.msG_WriteAngle($quake_host.host_client.message, 0);
		$quake_server.sV_WriteClientdataToMessage($quake_server.sv_player, $quake_host.host_client.message);
		$quake_common.msG_WriteByte($quake_host.host_client.message, $quake_net.svc_signonnum);
		$quake_common.msG_WriteByte($quake_host.host_client.message, 3);
		$quake_host.host_client.sendsignon = true;
	};
	$quake_host.$host_Begin_f = function() {
		if ($quake_cmd.cmd_source === 1) {
			$quake_console.con_Printf('begin is not valid from the console\n');
			return;
		}
		$quake_host.host_client.spawned = true;
	};
	$quake_host.$host_Kick_f = function() {
	};
	$quake_host.$host_Give_f = function() {
	};
	$quake_host.$host_Viewmodel_f = function() {
	};
	$quake_host.$host_Viewframe_f = function() {
	};
	$quake_host.$host_Viewnext_f = function() {
	};
	$quake_host.$host_Viewprev_f = function() {
	};
	$quake_host.$host_Startdemos_f = function() {
		var i, c;
		if ($quake_client.cls.state === 0) {
			if (!$quake_server.sv.active) {
				$quake_cmd.cbuf_AddText('map start\n');
			}
			return;
		}
		c = $quake_cmd.cmd_Argc() - 1;
		if (c > $quake_client.maX_DEMOS) {
			$quake_console.con_Printf('Max ' + $quake_client.maX_DEMOS + ' demos in demoloop\n');
			c = $quake_client.maX_DEMOS;
		}
		$quake_console.con_Printf(c + ' demo(s) in loop\n');
		for (i = 1; i < c + 1; i++) {
			$quake_client.cls.demos[i - 1] = $quake_cmd.cmd_Argv(i);
		}
		if ($quake_client.cls.demonum !== -1 && !$quake_client.cls.demoplayback) {
			$quake_client.cls.demonum = 0;
			$quake_client.cL_NextDemo();
		}
		else {
			$quake_client.cls.demonum = -1;
		}
	};
	$quake_host.$host_Demos_f = function() {
		if ($quake_client.cls.state === 0) {
			return;
		}
		if ($quake_client.cls.demonum === -1) {
			$quake_client.cls.demonum = 1;
		}
		$quake_client.cL_Disconnect_f();
		$quake_client.cL_NextDemo();
	};
	$quake_host.$host_Stopdemo_f = function() {
	};
	$quake_host.host_InitCommands = function() {
		$quake_cmd.cmd_AddCommand('status', $quake_host.$host_Status_f);
		$quake_cmd.cmd_AddCommand('quit', $quake_host.host_Quit_f);
		$quake_cmd.cmd_AddCommand('god', $quake_host.$host_God_f);
		$quake_cmd.cmd_AddCommand('notarget', $quake_host.$host_Notarget_f);
		$quake_cmd.cmd_AddCommand('fly', $quake_host.$host_Fly_f);
		$quake_cmd.cmd_AddCommand('map', $quake_host.$host_Map_f);
		$quake_cmd.cmd_AddCommand('restart', $quake_host.$host_Restart_f);
		$quake_cmd.cmd_AddCommand('changelevel', $quake_host.$host_Changelevel_f);
		$quake_cmd.cmd_AddCommand('connect', $quake_host.$host_Connect_f);
		$quake_cmd.cmd_AddCommand('reconnect', $quake_host.$host_Reconnect_f);
		$quake_cmd.cmd_AddCommand('name', $quake_host.$host_Name_f);
		$quake_cmd.cmd_AddCommand('noclip', $quake_host.$host_Noclip_f);
		$quake_cmd.cmd_AddCommand('version', $quake_host.$host_Version_f);
		$quake_cmd.cmd_AddCommand('say', $quake_host.$host_Say_f);
		$quake_cmd.cmd_AddCommand('say_team', $quake_host.$host_Say_Team_f);
		$quake_cmd.cmd_AddCommand('tell', $quake_host.$host_Tell_f);
		$quake_cmd.cmd_AddCommand('color', $quake_host.$host_Color_f);
		$quake_cmd.cmd_AddCommand('kill', $quake_host.$host_Kill_f);
		$quake_cmd.cmd_AddCommand('pause', $quake_host.$host_Pause_f);
		$quake_cmd.cmd_AddCommand('spawn', $quake_host.$host_Spawn_f);
		$quake_cmd.cmd_AddCommand('begin', $quake_host.$host_Begin_f);
		$quake_cmd.cmd_AddCommand('prespawn', $quake_host.$host_PreSpawn_f);
		$quake_cmd.cmd_AddCommand('kick', $quake_host.$host_Kick_f);
		$quake_cmd.cmd_AddCommand('ping', $quake_host.$host_Ping_f);
		$quake_cmd.cmd_AddCommand('load', $quake_host.$host_Loadgame_f);
		$quake_cmd.cmd_AddCommand('save', $quake_host.$host_Savegame_f);
		$quake_cmd.cmd_AddCommand('give', $quake_host.$host_Give_f);
		$quake_cmd.cmd_AddCommand('startdemos', $quake_host.$host_Startdemos_f);
		$quake_cmd.cmd_AddCommand('demos', $quake_host.$host_Demos_f);
		$quake_cmd.cmd_AddCommand('stopdemo', $quake_host.$host_Stopdemo_f);
		$quake_cmd.cmd_AddCommand('viewmodel', $quake_host.$host_Viewmodel_f);
		$quake_cmd.cmd_AddCommand('viewframe', $quake_host.$host_Viewframe_f);
		$quake_cmd.cmd_AddCommand('viewnext', $quake_host.$host_Viewnext_f);
		$quake_cmd.cmd_AddCommand('viewprev', $quake_host.$host_Viewprev_f);
		$quake_cmd.cmd_AddCommand('mcache', $quake_model.mod_Print);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.host_abortserver
	var $quake_host_abortserver = function() {
		ss.Exception.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.keys
	var $quake_keys = function() {
	};
	$quake_keys.prototype = {
		$key_KeynumToString: function(keynum) {
			return null;
		},
		$key_ClearStates: function() {
		}
	};
	$quake_keys.$key_Console = function(key) {
		var cmd;
		if (key === $quake_keys.k_ENTER) {
			$quake_cmd.cbuf_AddText($quake_keys.key_lines[$quake_keys.edit_line].substring(1));
			// skip the >
			$quake_cmd.cbuf_AddText('\n');
			$quake_console.con_Printf($quake_keys.key_lines[$quake_keys.edit_line] + '\n');
			$quake_keys.edit_line = $quake_keys.edit_line + 1 & 31;
			$quake_keys.$history_line = $quake_keys.edit_line;
			$quake_keys.key_lines[$quake_keys.edit_line] = ']';
			$quake_keys.key_linepos = 1;
			if ($quake_client.cls.state === 1) {
				$quake_screen.scR_UpdateScreen();
			}
			// force an update, because the command
			// may take some time
			return;
		}
		if (key === $quake_keys.k_TAB) {
			// command completion
			cmd = $quake_cmd.cmd_CompleteCommand($quake_keys.key_lines[$quake_keys.edit_line].substring(1));
			if (ss.isNullOrUndefined(cmd)) {
				cmd = $quake_cvar_t.cvar_CompleteVariable($quake_keys.key_lines[$quake_keys.edit_line] + 1);
			}
			if (ss.isValue(cmd)) {
				$quake_keys.key_lines[$quake_keys.edit_line] = $quake_keys.key_lines[$quake_keys.edit_line].substring(0, 1) + cmd;
				$quake_keys.key_linepos = cmd.length + 1;
				$quake_keys.key_lines[$quake_keys.edit_line] += ' ';
				$quake_keys.key_linepos++;
				return;
			}
		}
		if (key === $quake_keys.k_BACKSPACE || key === $quake_keys.k_LEFTARROW) {
			if ($quake_keys.key_linepos > 1) {
				$quake_keys.key_linepos--;
			}
			return;
		}
		if (key === $quake_keys.k_UPARROW) {
			do {
				$quake_keys.$history_line = $quake_keys.$history_line - 1 & 31;
			} while ($quake_keys.$history_line !== $quake_keys.edit_line && $quake_keys.key_lines[$quake_keys.$history_line].length === 1);
			if ($quake_keys.$history_line === $quake_keys.edit_line) {
				$quake_keys.$history_line = $quake_keys.edit_line + 1 & 31;
			}
			$quake_keys.key_lines[$quake_keys.edit_line] = $quake_keys.key_lines[$quake_keys.$history_line];
			$quake_keys.key_linepos = $quake_keys.key_lines[$quake_keys.edit_line].length;
			return;
		}
		if (key === $quake_keys.k_DOWNARROW) {
			if ($quake_keys.$history_line === $quake_keys.edit_line) {
				return;
			}
			do {
				$quake_keys.$history_line = $quake_keys.$history_line + 1 & 31;
			} while ($quake_keys.$history_line !== $quake_keys.edit_line && $quake_keys.key_lines[$quake_keys.$history_line].length === 1);
			if ($quake_keys.$history_line === $quake_keys.edit_line) {
				$quake_keys.key_lines[$quake_keys.edit_line] = ']';
				$quake_keys.key_linepos = 1;
			}
			else {
				$quake_keys.key_lines[$quake_keys.edit_line] = $quake_keys.key_lines[$quake_keys.$history_line];
				$quake_keys.key_linepos = $quake_keys.key_lines[$quake_keys.edit_line].length;
			}
			return;
		}
		if (key === $quake_keys.k_PGUP || key === $quake_keys.k_MWHEELUP) {
			$quake_console.con_backscroll += 2;
			if ($quake_console.con_backscroll > $quake_console.con_totallines - ($quake_screen.vid.height >> 3) - 1) {
				$quake_console.con_backscroll = $quake_console.con_totallines - ($quake_screen.vid.height >> 3) - 1;
			}
			return;
		}
		if (key === $quake_keys.k_PGDN || key === $quake_keys.k_MWHEELDOWN) {
			$quake_console.con_backscroll -= 2;
			if ($quake_console.con_backscroll < 0) {
				$quake_console.con_backscroll = 0;
			}
			return;
		}
		if (key === $quake_keys.k_HOME) {
			$quake_console.con_backscroll = $quake_console.con_totallines - ($quake_screen.vid.height >> 3) - 1;
			return;
		}
		if (key === $quake_keys.k_END) {
			$quake_console.con_backscroll = 0;
			return;
		}
		if (key < 32 || key > 127) {
			return;
		}
		// non printable
		if ($quake_keys.key_linepos < 255) {
			$quake_keys.key_lines[$quake_keys.edit_line] = $quake_keys.key_lines[$quake_keys.edit_line].substring(0, $quake_keys.key_linepos) + String.fromCharCode($System_Convert.toChar(key));
			$quake_keys.key_linepos++;
		}
	};
	$quake_keys.$key_Message = function(key) {
	};
	$quake_keys.$key_StringToKeynum = function(str) {
		var kn;
		if (ss.isNullOrUndefined(str) || str.length === 0) {
			return -1;
		}
		if (str.length === 1) {
			return str.charCodeAt(0);
		}
		for (kn = 0; ss.isValue($quake_keys.$keynames[kn].$name); kn++) {
			if (str.compareTo($quake_keys.$keynames[kn].$name) === 0) {
				return $quake_keys.$keynames[kn].$keynum;
			}
		}
		return -1;
	};
	$quake_keys.$key_SetBinding = function(keynum, binding) {
		var new1;
		var l;
		if (keynum === -1) {
			return;
		}
		// free old bindings
		if (ss.isValue($quake_keys.$keybindings[keynum])) {
			$quake_keys.$keybindings[keynum] = null;
		}
		// allocate memory for new binding
		l = binding.length;
		new1 = binding;
		$quake_keys.$keybindings[keynum] = new1;
	};
	$quake_keys.$key_Unbind_f = function() {
	};
	$quake_keys.$key_Unbindall_f = function() {
	};
	$quake_keys.$key_Bind_f = function() {
		var i, c, b;
		var cmd = $System_StringExtensions.stringOfLength(1024);
		c = $quake_cmd.cmd_Argc();
		if (c !== 2 && c !== 3) {
			$quake_console.con_Printf('bind <key> [command] : attach a command to a key\n');
			return;
		}
		b = $quake_keys.$key_StringToKeynum($quake_cmd.cmd_Argv(1));
		if (b === -1) {
			$quake_console.con_Printf('"' + $quake_cmd.cmd_Argv(1) + '" isn\'t a valid key\n');
			return;
		}
		if (c === 2) {
			if (ss.isValue($quake_keys.$keybindings[b])) {
				$quake_console.con_Printf('"' + $quake_cmd.cmd_Argv(1) + '" = "' + $quake_keys.$keybindings[b] + '"\n');
			}
			else {
				$quake_console.con_Printf('"' + $quake_cmd.cmd_Argv(1) + '" is not bound\n');
			}
			return;
		}
		// copy the rest of the command line
		cmd = '';
		// start out with a null string
		for (i = 2; i < c; i++) {
			if (i > 2) {
				cmd += ' ';
			}
			cmd += $quake_cmd.cmd_Argv(i);
		}
		$quake_keys.$key_SetBinding(b, cmd);
	};
	$quake_keys.key_Init = function() {
		var i;
		for (i = 0; i < 32; i++) {
			$quake_keys.key_lines[i] = ']';
		}
		$quake_keys.key_linepos = 1;
		//
		// init ascii characters in console mode
		//
		for (i = 32; i < 128; i++) {
			$quake_keys.$consolekeys[i] = true;
		}
		$quake_keys.$consolekeys[$quake_keys.k_ENTER] = true;
		$quake_keys.$consolekeys[$quake_keys.k_TAB] = true;
		$quake_keys.$consolekeys[$quake_keys.k_LEFTARROW] = true;
		$quake_keys.$consolekeys[$quake_keys.k_RIGHTARROW] = true;
		$quake_keys.$consolekeys[$quake_keys.k_UPARROW] = true;
		$quake_keys.$consolekeys[$quake_keys.k_DOWNARROW] = true;
		$quake_keys.$consolekeys[$quake_keys.k_BACKSPACE] = true;
		$quake_keys.$consolekeys[$quake_keys.k_PGUP] = true;
		$quake_keys.$consolekeys[$quake_keys.k_PGDN] = true;
		$quake_keys.$consolekeys[$quake_keys.k_SHIFT] = true;
		$quake_keys.$consolekeys[$quake_keys.k_MWHEELUP] = true;
		$quake_keys.$consolekeys[$quake_keys.k_MWHEELDOWN] = true;
		$quake_keys.$consolekeys[96] = false;
		$quake_keys.$consolekeys[126] = false;
		//
		// register our functions
		//
		$quake_cmd.cmd_AddCommand('bind', $quake_keys.$key_Bind_f);
		$quake_cmd.cmd_AddCommand('unbind', $quake_keys.$key_Unbind_f);
		$quake_cmd.cmd_AddCommand('unbindall', $quake_keys.$key_Unbindall_f);
	};
	$quake_keys.key_Event = function(key, down) {
		var kb;
		var cmd = $System_StringExtensions.stringOfLength(1024);
		$quake_keys.$key_count++;
		if ($quake_keys.$key_count <= 0) {
			return;
			// just catching keys for Con_NotifyBox
		}
		//
		// handle escape specialy, so the user can never unbind it
		//
		if (key === $quake_keys.k_ESCAPE) {
			if (!down) {
				return;
			}
			switch ($quake_keys.key_dest) {
				case 2: {
					$quake_keys.$key_Message(key);
					break;
				}
				case 3: {
					$quake_menu.m_Keydown(key);
					break;
				}
				case 0:
				case 1: {
					$quake_menu.m_ToggleMenu_f();
					break;
				}
				default: {
					$quake_sys_linux.sys_Error('Bad key_dest');
					break;
				}
			}
			return;
		}
		//
		// key up events only generate commands if the game key binding is
		// a button command (leading + sign).  These will occur even in console mode,
		// to keep the character from continuing an action started before a console
		// switch.  Button commands include the kenum as a parameter, so multiple
		// downs can be matched with ups
		//
		if (!down) {
			kb = $quake_keys.$keybindings[key];
			if (ss.isValue(kb) && kb.charCodeAt(0) === 43) {
				cmd = '-' + kb.substring(1) + ' ' + key + '\n';
				$quake_cmd.cbuf_AddText(cmd);
			}
			return;
		}
		//
		// during demo playback, most keys bring up the main menu
		//
		if ($quake_client.cls.demoplayback && down && $quake_keys.$consolekeys[key] && $quake_keys.key_dest === 0) {
			$quake_menu.m_ToggleMenu_f();
			return;
		}
		//
		// if not a consolekey, send to the interpreter no matter what mode is
		//
		if ($quake_keys.key_dest === 1 && !$quake_keys.$consolekeys[key] || $quake_keys.key_dest === 0 && (!$quake_console.con_forcedup || !$quake_keys.$consolekeys[key])) {
			kb = $quake_keys.$keybindings[key];
			if (ss.isValue(kb)) {
				if (kb.charCodeAt(0) === 43) {
					// button commands add keynum as a parm
					cmd = kb + ' ' + key + '\n';
					$quake_cmd.cbuf_AddText(cmd);
				}
				else {
					$quake_cmd.cbuf_AddText(kb);
					$quake_cmd.cbuf_AddText('\n');
				}
			}
			return;
		}
		if (!down) {
			return;
		}
		// other systems only care about key down events
		switch ($quake_keys.key_dest) {
			case 2: {
				$quake_keys.$key_Message(key);
				break;
			}
			case 3: {
				$quake_menu.m_Keydown(key);
				break;
			}
			case 0:
			case 1: {
				$quake_keys.$key_Console(key);
				break;
			}
			default: {
				$quake_sys_linux.sys_Error('Bad key_dest');
				break;
			}
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.keys.keydest_t
	var $quake_keys$keydest_t = function() {
	};
	$quake_keys$keydest_t.prototype = { key_game: 0, key_console: 1, key_message: 2, key_menu: 3 };
	Type.registerEnum(global, 'quake.keys$keydest_t', $quake_keys$keydest_t, false);
	////////////////////////////////////////////////////////////////////////////////
	// quake.mathlib
	var $quake_mathlib = function() {
	};
	$quake_mathlib.prototype = {
		$vectorCompare: function(v1, v2) {
			var i;
			for (i = 0; i < 3; i++) {
				if (v1[i] !== v2[i]) {
					return 0;
				}
			}
			return 1;
		},
		$crossProduct: function(v1, v2, cross) {
			cross[0] = v1[1] * v2[2] - v1[2] * v2[1];
			cross[1] = v1[2] * v2[0] - v1[0] * v2[2];
			cross[2] = v1[0] * v2[1] - v1[1] * v2[0];
		}
	};
	$quake_mathlib.dotProduct$1 = function(x, y) {
		return x[0] * y[0] + x[1] * y[1] + x[2] * y[2];
	};
	$quake_mathlib.dotProduct = function(x, y) {
		return x[0] * y[0] + x[1] * y[1] + x[2] * y[2];
	};
	$quake_mathlib.vectorSubtract = function(a, b, c) {
		c[0] = a[0] - b[0];
		c[1] = a[1] - b[1];
		c[2] = a[2] - b[2];
	};
	$quake_mathlib.vectorAdd = function(a, b, c) {
		c[0] = a[0] + b[0];
		c[1] = a[1] + b[1];
		c[2] = a[2] + b[2];
	};
	$quake_mathlib.vectorCopy = function(a, b) {
		b[0] = a[0];
		b[1] = a[1];
		b[2] = a[2];
	};
	$quake_mathlib.anglemod = function(a) {
		a = 0.0054931640625 * (ss.Int32.trunc(a * 182.044444444444) & 65535);
		return a;
	};
	$quake_mathlib.$bopS_Error = function() {
		$quake_sys_linux.sys_Error('BoxOnPlaneSide:  Bad signbits');
	};
	$quake_mathlib.boX_ON_PLANE_SIDE = function(emins, emaxs, p) {
		return ((p.type < 3) ? ((p.dist <= emins[p.type]) ? 1 : ((p.dist >= emaxs[p.type]) ? 2 : 3)) : $quake_mathlib.$boxOnPlaneSide(emins, emaxs, p));
	};
	$quake_mathlib.$boxOnPlaneSide = function(emins, emaxs, p) {
		var dist1, dist2;
		var sides;
		//	// this is done by the BOX_ON_PLANE_SIDE macro before calling this
		//	// function
		//	// fast axial cases
		//	if (p.type < 3)
		//	{
		//	if (p.dist <= emins[p.type])
		//	return 1;
		//	if (p.dist >= emaxs[p.type])
		//	return 2;
		//	return 3;
		//	}
		// general case
		switch (p.signbits) {
			case 0: {
				dist1 = p.normal[0] * emaxs[0] + p.normal[1] * emaxs[1] + p.normal[2] * emaxs[2];
				dist2 = p.normal[0] * emins[0] + p.normal[1] * emins[1] + p.normal[2] * emins[2];
				break;
			}
			case 1: {
				dist1 = p.normal[0] * emins[0] + p.normal[1] * emaxs[1] + p.normal[2] * emaxs[2];
				dist2 = p.normal[0] * emaxs[0] + p.normal[1] * emins[1] + p.normal[2] * emins[2];
				break;
			}
			case 2: {
				dist1 = p.normal[0] * emaxs[0] + p.normal[1] * emins[1] + p.normal[2] * emaxs[2];
				dist2 = p.normal[0] * emins[0] + p.normal[1] * emaxs[1] + p.normal[2] * emins[2];
				break;
			}
			case 3: {
				dist1 = p.normal[0] * emins[0] + p.normal[1] * emins[1] + p.normal[2] * emaxs[2];
				dist2 = p.normal[0] * emaxs[0] + p.normal[1] * emaxs[1] + p.normal[2] * emins[2];
				break;
			}
			case 4: {
				dist1 = p.normal[0] * emaxs[0] + p.normal[1] * emaxs[1] + p.normal[2] * emins[2];
				dist2 = p.normal[0] * emins[0] + p.normal[1] * emins[1] + p.normal[2] * emaxs[2];
				break;
			}
			case 5: {
				dist1 = p.normal[0] * emins[0] + p.normal[1] * emaxs[1] + p.normal[2] * emins[2];
				dist2 = p.normal[0] * emaxs[0] + p.normal[1] * emins[1] + p.normal[2] * emaxs[2];
				break;
			}
			case 6: {
				dist1 = p.normal[0] * emaxs[0] + p.normal[1] * emins[1] + p.normal[2] * emins[2];
				dist2 = p.normal[0] * emins[0] + p.normal[1] * emaxs[1] + p.normal[2] * emaxs[2];
				break;
			}
			case 7: {
				dist1 = p.normal[0] * emins[0] + p.normal[1] * emins[1] + p.normal[2] * emins[2];
				dist2 = p.normal[0] * emaxs[0] + p.normal[1] * emaxs[1] + p.normal[2] * emaxs[2];
				break;
			}
			default: {
				dist1 = dist2 = 0;
				$quake_mathlib.$bopS_Error();
				break;
			}
		}
		sides = 0;
		if (dist1 >= p.dist) {
			sides = 1;
		}
		if (dist2 < p.dist) {
			sides |= 2;
		}
		return sides;
	};
	$quake_mathlib.angleVectors = function(angles, forward, right, up) {
		var angle;
		var sr, sp, sy, cr, cp, cy;
		angle = angles[$quake_quakedef.YAW] * 0.0174532925199433;
		sy = Math.sin(angle);
		cy = Math.cos(angle);
		angle = angles[$quake_quakedef.PITCH] * 0.0174532925199433;
		sp = Math.sin(angle);
		cp = Math.cos(angle);
		angle = angles[$quake_quakedef.ROLL] * 0.0174532925199433;
		sr = Math.sin(angle);
		cr = Math.cos(angle);
		forward[0] = cp * cy;
		forward[1] = cp * sy;
		forward[2] = -sp;
		right[0] = -1 * sr * sp * cy + -1 * cr * -sy;
		right[1] = -1 * sr * sp * sy + -1 * cr * cy;
		right[2] = -1 * sr * cp;
		up[0] = cr * sp * cy + -sr * -sy;
		up[1] = cr * sp * sy + -sr * cy;
		up[2] = cr * cp;
	};
	$quake_mathlib.vectorMA = function(veca, scale, vecb, vecc) {
		vecc[0] = veca[0] + scale * vecb[0];
		vecc[1] = veca[1] + scale * vecb[1];
		vecc[2] = veca[2] + scale * vecb[2];
	};
	$quake_mathlib.length$1 = function(v) {
		var i;
		var length;
		length = 0;
		for (i = 0; i < 3; i++) {
			length += v[i] * v[i];
		}
		length = Math.sqrt(length);
		// FIXME
		return length;
	};
	$quake_mathlib.vectorNormalize = function(v) {
		var length, ilength;
		length = v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
		length = Math.sqrt(length);
		// FIXME
		if (length !== 0) {
			ilength = 1 / length;
			v[0] *= ilength;
			v[1] *= ilength;
			v[2] *= ilength;
		}
		return length;
	};
	$quake_mathlib.vectorInverse = function(v) {
		v[0] = -v[0];
		v[1] = -v[1];
		v[2] = -v[2];
	};
	$quake_mathlib.vectorScale = function(in1, scale, out) {
		out[0] = in1[0] * scale;
		out[1] = in1[1] * scale;
		out[2] = in1[2] * scale;
	};
	$quake_mathlib.r_ConcatRotations = function(in1, in2, out) {
		out[0][0] = in1[0][0] * in2[0][0] + in1[0][1] * in2[1][0] + in1[0][2] * in2[2][0];
		out[0][1] = in1[0][0] * in2[0][1] + in1[0][1] * in2[1][1] + in1[0][2] * in2[2][1];
		out[0][2] = in1[0][0] * in2[0][2] + in1[0][1] * in2[1][2] + in1[0][2] * in2[2][2];
		out[1][0] = in1[1][0] * in2[0][0] + in1[1][1] * in2[1][0] + in1[1][2] * in2[2][0];
		out[1][1] = in1[1][0] * in2[0][1] + in1[1][1] * in2[1][1] + in1[1][2] * in2[2][1];
		out[1][2] = in1[1][0] * in2[0][2] + in1[1][1] * in2[1][2] + in1[1][2] * in2[2][2];
		out[2][0] = in1[2][0] * in2[0][0] + in1[2][1] * in2[1][0] + in1[2][2] * in2[2][0];
		out[2][1] = in1[2][0] * in2[0][1] + in1[2][1] * in2[1][1] + in1[2][2] * in2[2][1];
		out[2][2] = in1[2][0] * in2[0][2] + in1[2][1] * in2[1][2] + in1[2][2] * in2[2][2];
	};
	$quake_mathlib.r_ConcatTransforms = function(in1, in2, out) {
		out[0][0] = in1[0][0] * in2[0][0] + in1[0][1] * in2[1][0] + in1[0][2] * in2[2][0];
		out[0][1] = in1[0][0] * in2[0][1] + in1[0][1] * in2[1][1] + in1[0][2] * in2[2][1];
		out[0][2] = in1[0][0] * in2[0][2] + in1[0][1] * in2[1][2] + in1[0][2] * in2[2][2];
		out[0][3] = in1[0][0] * in2[0][3] + in1[0][1] * in2[1][3] + in1[0][2] * in2[2][3] + in1[0][3];
		out[1][0] = in1[1][0] * in2[0][0] + in1[1][1] * in2[1][0] + in1[1][2] * in2[2][0];
		out[1][1] = in1[1][0] * in2[0][1] + in1[1][1] * in2[1][1] + in1[1][2] * in2[2][1];
		out[1][2] = in1[1][0] * in2[0][2] + in1[1][1] * in2[1][2] + in1[1][2] * in2[2][2];
		out[1][3] = in1[1][0] * in2[0][3] + in1[1][1] * in2[1][3] + in1[1][2] * in2[2][3] + in1[1][3];
		out[2][0] = in1[2][0] * in2[0][0] + in1[2][1] * in2[1][0] + in1[2][2] * in2[2][0];
		out[2][1] = in1[2][0] * in2[0][1] + in1[2][1] * in2[1][1] + in1[2][2] * in2[2][1];
		out[2][2] = in1[2][0] * in2[0][2] + in1[2][1] * in2[1][2] + in1[2][2] * in2[2][2];
		out[2][3] = in1[2][0] * in2[0][3] + in1[2][1] * in2[1][3] + in1[2][2] * in2[2][3] + in1[2][3];
	};
	$quake_mathlib.floorDivMod = function(numer, denom, quotient, rem) {
		var q, r;
		var x;
		if (denom <= 0) {
			$quake_sys_linux.sys_Error('FloorDivMod: bad denominator ' + denom + '\n');
		}
		//	if ((floor(numer) != numer) || (floor(denom) != denom))
		//		Sys_Error ("FloorDivMod: non-integer numer or denom %f %f\n",
		//				numer, denom);
		if (numer >= 0) {
			x = Math.floor(numer / denom);
			q = ss.Int32.trunc(x);
			r = ss.Int32.trunc(Math.floor(numer - x * denom));
		}
		else {
			//
			// perform operations with positive values, and fix mod to make floor-based
			//
			x = Math.floor(-numer / denom);
			q = -ss.Int32.trunc(x);
			r = ss.Int32.trunc(Math.floor(-numer - x * denom));
			if (r !== 0) {
				q--;
				r = ss.Int32.trunc(denom) - r;
			}
		}
		quotient.$ = q;
		rem.$ = r;
	};
	$quake_mathlib.greatestCommonDivisor = function(i1, i2) {
		if (i1 > i2) {
			if (i2 === 0) {
				return i1;
			}
			return $quake_mathlib.greatestCommonDivisor(i2, i1 % i2);
		}
		else {
			if (i1 === 0) {
				return i2;
			}
			return $quake_mathlib.greatestCommonDivisor(i1, i2 % i1);
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.menu
	var $quake_menu = function() {
		this.$m_return_state = 0;
		this.$m_return_onerror = false;
		this.$m_return_reason = null;
		this.$m_save_demonum = 0;
		this.$m_net_cursor = 0;
		this.$m_net_items = 0;
		this.$m_net_saveHeight = 0;
		this.$net_helpMessage = ['                        ', ' Two computers connected', '   through two modems.  ', '                        ', '                        ', ' Two computers connected', ' by a null-modem cable. ', '                        ', ' Novell network LANs    ', ' or Windows 95 DOS-box. ', '                        ', '(LAN=Local Area Network)', ' Commonly used to play  ', ' over the Internet, but ', ' also used on a Local   ', ' Area Network.          '];
		this.$bind_grab = 0;
		this.$serialConfig_cursor = 0;
		this.$serialConfig_cursor_table = [48, 64, 80, 96, 112, 132];
		this.$serialConfig_baudrate = [9600, 14400, 19200, 28800, 38400, 57600];
		this.$serialConfig_comport = 0;
		this.$serialConfig_irq = 0;
		this.$serialConfig_baud = 0;
		this.$serialConfig_phone = null;
		this.$modemConfig_cursor = 0;
		this.$modemConfig_cursor_table = [40, 56, 88, 120, 156];
		this.$modemConfig_dialing = 0;
		this.$modemConfig_clear = null;
		this.$modemConfig_init = null;
		this.$modemConfig_hangup = null;
		this.$lanConfig_cursor = -1;
		this.$lanConfig_cursor_table = [72, 92, 124];
		this.$lanConfig_port = 0;
		this.$lanConfig_portname = null;
		this.$lanConfig_joinname = null;
		this.$searchComplete = false;
		this.$searchCompleteTime = 0;
		this.$slist_cursor = 0;
		this.$slist_sorted = false;
	};
	$quake_menu.prototype = {
		$m_Menu_Net_f: function() {
		},
		$m_DrawCheckbox: function(x, y, on) {
			if (on) {
				$quake_menu.$m_Print(x, y, 'on');
			}
			else {
				$quake_menu.$m_Print(x, y, 'off');
			}
		},
		$m_UnbindCommand: function(command) {
		},
		$m_Menu_SerialConfig_f: function() {
		},
		$m_Menu_ModemConfig_f: function() {
		},
		$m_Menu_LanConfig_f: function() {
		},
		$m_Menu_GameOptions_f: function() {
		},
		$m_NetStart_Change: function(dir) {
		},
		$m_Menu_Search_f: function() {
		},
		$m_Menu_ServerList_f: function() {
		},
		$m_ConfigureNetSubsystem: function() {
		}
	};
	$quake_menu.$m_DrawCharacter = function(cx, line, num) {
		$quake_draw.draw_Character(cx + ($quake_screen.vid.width - 320 >> 1), line, num);
	};
	$quake_menu.$m_Print = function(cx, cy, str) {
		for (var i = 0; i < str.length; i++) {
			$quake_menu.$m_DrawCharacter(cx, cy, str.charCodeAt(i) + 128);
			cx += 8;
		}
	};
	$quake_menu.$m_PrintWhite = function(cx, cy, str) {
		for (var i = 0; i < str.length; i++) {
			$quake_menu.$m_DrawCharacter(cx, cy, str.charCodeAt(i));
			cx += 8;
		}
	};
	$quake_menu.$m_DrawTransPic = function(x, y, pic) {
		$quake_draw.draw_TransPic(x + ($quake_screen.vid.width - 320 >> 1), y, pic);
	};
	$quake_menu.$m_DrawPic = function(x, y, pic) {
		$quake_draw.draw_Pic(x + ($quake_screen.vid.width - 320 >> 1), y, pic);
	};
	$quake_menu.$m_BuildTranslationTable = function(top, bottom) {
		var j;
		var dest, source;
		for (j = 0; j < 256; j++) {
			$quake_menu.$identityTable[j] = j;
		}
		dest = $quake_menu.$translationTable;
		source = $quake_menu.$identityTable;
		$System_Buffer.blockCopy$1(source, 0, dest, 0, 256);
		if (top < 128) {
			$System_Buffer.blockCopy$1(source, top, dest, $quake_render.toP_RANGE, 16);
		}
		else {
			for (j = 0; j < 16; j++) {
				dest[$quake_render.toP_RANGE + j] = source[top + 15 - j];
			}
		}
		if (bottom < 128) {
			$System_Buffer.blockCopy$1(source, bottom, dest, $quake_render.bottoM_RANGE, 16);
		}
		else {
			for (j = 0; j < 16; j++) {
				dest[$quake_render.bottoM_RANGE + j] = source[bottom + 15 - j];
			}
		}
	};
	$quake_menu.$m_DrawTransPicTranslate = function(x, y, pic) {
		$quake_draw.draw_TransPicTranslate(x + ($quake_screen.vid.width - 320 >> 1), y, pic, $quake_menu.$translationTable);
	};
	$quake_menu.$m_DrawTextBox = function(x, y, width, lines) {
		var p;
		var cx, cy;
		var n;
		// draw left side
		cx = x;
		cy = y;
		p = $quake_draw.draw_CachePic('gfx/box_tl.lmp');
		$quake_menu.$m_DrawTransPic(cx, cy, p);
		p = $quake_draw.draw_CachePic('gfx/box_ml.lmp');
		for (n = 0; n < lines; n++) {
			cy += 8;
			$quake_menu.$m_DrawTransPic(cx, cy, p);
		}
		p = $quake_draw.draw_CachePic('gfx/box_bl.lmp');
		$quake_menu.$m_DrawTransPic(cx, cy + 8, p);
		// draw middle
		cx += 8;
		while (width > 0) {
			cy = y;
			p = $quake_draw.draw_CachePic('gfx/box_tm.lmp');
			$quake_menu.$m_DrawTransPic(cx, cy, p);
			p = $quake_draw.draw_CachePic('gfx/box_mm.lmp');
			for (n = 0; n < lines; n++) {
				cy += 8;
				if (n === 1) {
					p = $quake_draw.draw_CachePic('gfx/box_mm2.lmp');
				}
				$quake_menu.$m_DrawTransPic(cx, cy, p);
			}
			p = $quake_draw.draw_CachePic('gfx/box_bm.lmp');
			$quake_menu.$m_DrawTransPic(cx, cy + 8, p);
			width -= 2;
			cx += 16;
		}
		// draw right side
		cy = y;
		p = $quake_draw.draw_CachePic('gfx/box_tr.lmp');
		$quake_menu.$m_DrawTransPic(cx, cy, p);
		p = $quake_draw.draw_CachePic('gfx/box_mr.lmp');
		for (n = 0; n < lines; n++) {
			cy += 8;
			$quake_menu.$m_DrawTransPic(cx, cy, p);
		}
		p = $quake_draw.draw_CachePic('gfx/box_br.lmp');
		$quake_menu.$m_DrawTransPic(cx, cy + 8, p);
	};
	$quake_menu.m_ToggleMenu_f = function() {
		if ($quake_keys.key_dest === 3) {
			if ($quake_menu.$m_state !== 1) {
				$quake_menu.m_Menu_Main_f();
				return;
			}
			$quake_keys.key_dest = 0;
			$quake_menu.$m_state = 0;
			return;
		}
		if ($quake_keys.key_dest === 1) {
			$quake_console.con_ToggleConsole_f();
		}
		else {
			$quake_menu.m_Menu_Main_f();
		}
	};
	$quake_menu.m_Menu_Main_f = function() {
		if ($quake_keys.key_dest !== 3) {
			$quake_client.cls.demonum = -1;
		}
		$quake_keys.key_dest = 3;
		$quake_menu.$m_state = 1;
	};
	$quake_menu.$m_Main_Draw = function() {
		var f;
		var p;
		$quake_menu.$m_DrawTransPic(16, 4, $quake_draw.draw_CachePic('gfx/qplaque.lmp'));
		p = $quake_draw.draw_CachePic('gfx/ttl_main.lmp');
		$quake_menu.$m_DrawPic(ss.Int32.div(320 - p.width, 2), 4, p);
		$quake_menu.$m_DrawTransPic(72, 32, $quake_draw.draw_CachePic('gfx/mainmenu.lmp'));
		f = ss.Int32.trunc($quake_host.host_time * 10) % 6;
		$quake_menu.$m_DrawTransPic(54, 32 + $quake_menu.$m_main_cursor * 20, $quake_draw.draw_CachePic('gfx/menudot' + (f + 1) + '.lmp'));
	};
	$quake_menu.$m_Main_Key = function(key) {
		switch (key) {
			case 27: {
				$quake_keys.key_dest = 0;
				$quake_menu.$m_state = 0;
				if ($quake_client.cls.demonum !== -1 && !$quake_client.cls.demoplayback && $quake_client.cls.state !== 2) {
					$quake_client.cL_NextDemo();
				}
				break;
			}
			case 129: {
				$quake_sound.s_LocalSound('misc/menu1.wav');
				if (++$quake_menu.$m_main_cursor >= $quake_menu.$maiN_ITEMS) {
					$quake_menu.$m_main_cursor = 0;
				}
				break;
			}
			case 128: {
				$quake_sound.s_LocalSound('misc/menu1.wav');
				if (--$quake_menu.$m_main_cursor < 0) {
					$quake_menu.$m_main_cursor = 4;
				}
				break;
			}
			case 13: {
				switch ($quake_menu.$m_main_cursor) {
					case 0: {
						$quake_menu.$m_Menu_SinglePlayer_f();
						break;
					}
					case 1: {
						$quake_menu.$m_Menu_MultiPlayer_f();
						break;
					}
					case 2: {
						$quake_menu.$m_Menu_Options_f();
						break;
					}
					case 3: {
						$quake_menu.$m_Menu_Help_f();
						break;
					}
					case 4: {
						$quake_menu.m_Menu_Quit_f();
						break;
					}
				}
				break;
			}
		}
	};
	$quake_menu.$m_Menu_SinglePlayer_f = function() {
		$quake_keys.key_dest = 3;
		$quake_menu.$m_state = 2;
	};
	$quake_menu.$m_SinglePlayer_Draw = function() {
		var f;
		var p;
		$quake_menu.$m_DrawTransPic(16, 4, $quake_draw.draw_CachePic('gfx/qplaque.lmp'));
		p = $quake_draw.draw_CachePic('gfx/ttl_sgl.lmp');
		$quake_menu.$m_DrawPic(ss.Int32.div(320 - p.width, 2), 4, p);
		$quake_menu.$m_DrawTransPic(72, 32, $quake_draw.draw_CachePic('gfx/sp_menu.lmp'));
		f = ss.Int32.trunc($quake_host.host_time * 10) % 6;
		$quake_menu.$m_DrawTransPic(54, 32 + $quake_menu.$m_singleplayer_cursor * 20, $quake_draw.draw_CachePic('gfx/menudot' + (f + 1) + '.lmp'));
	};
	$quake_menu.$m_SinglePlayer_Key = function(key) {
		switch (key) {
			case 27: {
				$quake_menu.m_Menu_Main_f();
				break;
			}
			case 129: {
				if (++$quake_menu.$m_singleplayer_cursor >= $quake_menu.$singleplayeR_ITEMS) {
					$quake_menu.$m_singleplayer_cursor = 0;
				}
				break;
			}
			case 128: {
				if (--$quake_menu.$m_singleplayer_cursor < 0) {
					$quake_menu.$m_singleplayer_cursor = 2;
				}
				break;
			}
			case 13: {
				switch ($quake_menu.$m_singleplayer_cursor) {
					case 0: {
						$quake_keys.key_dest = 0;
						$quake_cmd.cbuf_AddText('maxplayers 1\n');
						$quake_cmd.cbuf_AddText('map start\n');
						break;
					}
					case 1: {
						$quake_menu.$m_Menu_Load_f();
						break;
					}
					case 2: {
						$quake_menu.$m_Menu_Save_f();
						break;
					}
				}
				break;
			}
		}
	};
	$quake_menu.$m_ScanSaves = function() {
		var i, j;
		var name;
		var version;
		for (i = 0; i < $quake_menu.$maX_SAVEGAMES; i++) {
			$quake_menu.$m_filenames[i] = '--- UNUSED SLOT ---';
			$quake_menu.$loadable[i] = false;
			name = $quake_common.com_gamedir + '/s' + i + '.sav';
		}
	};
	$quake_menu.$m_Menu_Load_f = function() {
		$quake_menu.$m_entersound = true;
		$quake_menu.$m_state = 3;
		$quake_keys.key_dest = 3;
		$quake_menu.$m_ScanSaves();
	};
	$quake_menu.$m_Menu_Save_f = function() {
		$quake_menu.$m_entersound = true;
		$quake_menu.$m_state = 4;
		$quake_keys.key_dest = 3;
		$quake_menu.$m_ScanSaves();
	};
	$quake_menu.$m_Load_Draw = function() {
		var i;
		var p;
		p = $quake_draw.draw_CachePic('gfx/p_load.lmp');
		$quake_menu.$m_DrawPic(ss.Int32.div(320 - p.width, 2), 4, p);
		for (i = 0; i < $quake_menu.$maX_SAVEGAMES; i++) {
			$quake_menu.$m_Print(16, 32 + 8 * i, $quake_menu.$m_filenames[i]);
		}
		// line cursor
		$quake_menu.$m_DrawCharacter(8, 32 + $quake_menu.$load_cursor * 8, 12 + (ss.Int32.trunc($quake_host.realtime * 4) & 1));
	};
	$quake_menu.$m_Save_Draw = function() {
		var i;
		var p;
		p = $quake_draw.draw_CachePic('gfx/p_save.lmp');
		$quake_menu.$m_DrawPic(ss.Int32.div(320 - p.width, 2), 4, p);
		for (i = 0; i < $quake_menu.$maX_SAVEGAMES; i++) {
			$quake_menu.$m_Print(16, 32 + 8 * i, $quake_menu.$m_filenames[i]);
		}
		// line cursor
		$quake_menu.$m_DrawCharacter(8, 32 + $quake_menu.$load_cursor * 8, 12 + (ss.Int32.trunc($quake_host.realtime * 4) & 1));
	};
	$quake_menu.$m_Load_Key = function(k) {
		switch (k) {
			case 27: {
				$quake_menu.$m_Menu_SinglePlayer_f();
				break;
			}
			case 13: {
				$quake_sound.s_LocalSound('misc/menu2.wav');
				if (!$quake_menu.$loadable[$quake_menu.$load_cursor]) {
					return;
				}
				$quake_menu.$m_state = 0;
				$quake_keys.key_dest = 0;
				$quake_screen.scR_BeginLoadingPlaque();
				$quake_cmd.cbuf_AddText('load s' + $quake_menu.$load_cursor + '\n');
				return;
			}
			case 128:
			case 130: {
				$quake_menu.$load_cursor--;
				if ($quake_menu.$load_cursor < 0) {
					$quake_menu.$load_cursor = 11;
				}
				break;
			}
			case 129:
			case 131: {
				$quake_menu.$load_cursor++;
				if ($quake_menu.$load_cursor >= $quake_menu.$maX_SAVEGAMES) {
					$quake_menu.$load_cursor = 0;
				}
				break;
			}
		}
	};
	$quake_menu.$m_Save_Key = function(k) {
		switch (k) {
			case 27: {
				$quake_menu.$m_Menu_SinglePlayer_f();
				break;
			}
			case 13: {
				$quake_menu.$m_state = 0;
				$quake_keys.key_dest = 0;
				$quake_cmd.cbuf_AddText('save s' + $quake_menu.$load_cursor + '\n');
				return;
			}
			case 128:
			case 130: {
				$quake_menu.$load_cursor--;
				if ($quake_menu.$load_cursor < 0) {
					$quake_menu.$load_cursor = 11;
				}
				break;
			}
			case 129:
			case 131: {
				$quake_menu.$load_cursor++;
				if ($quake_menu.$load_cursor >= $quake_menu.$maX_SAVEGAMES) {
					$quake_menu.$load_cursor = 0;
				}
				break;
			}
		}
	};
	$quake_menu.$m_Menu_MultiPlayer_f = function() {
		$quake_keys.key_dest = 3;
		$quake_menu.$m_state = 5;
		$quake_menu.$m_entersound = true;
	};
	$quake_menu.$m_MultiPlayer_Draw = function() {
		var f;
		var p;
		$quake_menu.$m_DrawTransPic(16, 4, $quake_draw.draw_CachePic('gfx/qplaque.lmp'));
		p = $quake_draw.draw_CachePic('gfx/p_multi.lmp');
		$quake_menu.$m_DrawPic(ss.Int32.div(320 - p.width, 2), 4, p);
		$quake_menu.$m_DrawTransPic(72, 32, $quake_draw.draw_CachePic('gfx/mp_menu.lmp'));
		f = ss.Int32.trunc($quake_host.host_time * 10) % 6;
		$quake_menu.$m_DrawTransPic(54, 32 + $quake_menu.$m_multiplayer_cursor * 20, $quake_draw.draw_CachePic('gfx/menudot' + (f + 1) + '.lmp'));
		$quake_menu.$m_PrintWhite(52, 148, 'No Communications Available');
	};
	$quake_menu.$m_MultiPlayer_Key = function(key) {
		switch (key) {
			case 27: {
				$quake_menu.m_Menu_Main_f();
				break;
			}
			case 129: {
				if (++$quake_menu.$m_multiplayer_cursor >= $quake_menu.$multiplayeR_ITEMS) {
					$quake_menu.$m_multiplayer_cursor = 0;
				}
				break;
			}
			case 128: {
				if (--$quake_menu.$m_multiplayer_cursor < 0) {
					$quake_menu.$m_multiplayer_cursor = 2;
				}
				break;
			}
			case 13: {
				$quake_menu.$m_entersound = true;
				switch ($quake_menu.$m_multiplayer_cursor) {
					case 0: {
						break;
					}
					case 1: {
						break;
					}
					case 2: {
						$quake_menu.$m_Menu_Setup_f();
						break;
					}
				}
				break;
			}
		}
	};
	$quake_menu.$m_Menu_Setup_f = function() {
		$quake_keys.key_dest = 3;
		$quake_menu.$m_state = 6;
		$quake_menu.$m_entersound = true;
		$quake_menu.$setup_top = $quake_menu.$setup_oldtop = ss.Int32.trunc($quake_client.cl_color.value) >> 4;
		$quake_menu.$setup_bottom = $quake_menu.$setup_oldbottom = ss.Int32.trunc($quake_client.cl_color.value) & 15;
	};
	$quake_menu.$m_Setup_Draw = function() {
		var p;
		$quake_menu.$m_DrawTransPic(16, 4, $quake_draw.draw_CachePic('gfx/qplaque.lmp'));
		p = $quake_draw.draw_CachePic('gfx/p_multi.lmp');
		$quake_menu.$m_DrawPic(ss.Int32.div(320 - p.width, 2), 4, p);
		$quake_menu.$m_Print(64, 40, 'Hostname');
		$quake_menu.$m_DrawTextBox(160, 32, 16, 1);
		//M_Print (168, 40, setup_hostname);
		$quake_menu.$m_Print(64, 56, 'Your name');
		$quake_menu.$m_DrawTextBox(160, 48, 16, 1);
		//M_Print (168, 56, setup_myname);
		$quake_menu.$m_Print(64, 80, 'Shirt color');
		$quake_menu.$m_Print(64, 104, 'Pants color');
		$quake_menu.$m_DrawTextBox(64, 132, 14, 1);
		$quake_menu.$m_Print(72, 140, 'Accept Changes');
		p = $quake_draw.draw_CachePic('gfx/bigbox.lmp');
		$quake_menu.$m_DrawTransPic(160, 64, p);
		p = $quake_draw.draw_CachePic('gfx/menuplyr.lmp');
		$quake_menu.$m_BuildTranslationTable($quake_menu.$setup_top * 16, $quake_menu.$setup_bottom * 16);
		$quake_menu.$m_DrawTransPicTranslate(172, 72, p);
		$quake_menu.$m_DrawCharacter(56, $quake_menu.$setup_cursor_table[$quake_menu.$setup_cursor], 12 + (ss.Int32.trunc($quake_host.realtime * 4) & 1));
		//	        if (setup_cursor == 0)
		//	        M_DrawCharacter (168 + 8*strlen(setup_hostname), setup_cursor_table [setup_cursor], 10+((int)(realtime*4)&1));
		//	        
		//	        if (setup_cursor == 1)
		//	        M_DrawCharacter (168 + 8*strlen(setup_myname), setup_cursor_table [setup_cursor], 10+((int)(realtime*4)&1));
	};
	$quake_menu.$m_Setup_Key = function(k) {
		var l;
		switch (k) {
			case 27: {
				$quake_menu.$m_Menu_MultiPlayer_f();
				break;
			}
			case 128: {
				$quake_menu.$setup_cursor--;
				if ($quake_menu.$setup_cursor < 0) {
					$quake_menu.$setup_cursor = 4;
				}
				break;
			}
			case 129: {
				$quake_menu.$setup_cursor++;
				if ($quake_menu.$setup_cursor >= $quake_menu.$nuM_SETUP_CMDS) {
					$quake_menu.$setup_cursor = 0;
				}
				break;
			}
			case 130: {
				if ($quake_menu.$setup_cursor < 2) {
					return;
				}
				$quake_sound.s_LocalSound('misc/menu3.wav');
				if ($quake_menu.$setup_cursor === 2) {
					$quake_menu.$setup_top = $quake_menu.$setup_top - 1;
				}
				if ($quake_menu.$setup_cursor === 3) {
					$quake_menu.$setup_bottom = $quake_menu.$setup_bottom - 1;
				}
				break;
			}
			case 131: {
				if ($quake_menu.$setup_cursor < 2) {
					return;
				}
				$quake_menu.$forward();
				break;
			}
			case 13: {
				if ($quake_menu.$setup_cursor === 0 || $quake_menu.$setup_cursor === 1) {
					return;
				}
				if ($quake_menu.$setup_cursor === 2 || $quake_menu.$setup_cursor === 3) {
					$quake_menu.$forward();
				}
				$quake_menu.$m_entersound = true;
				$quake_menu.$m_Menu_MultiPlayer_f();
				break;
			}
		}
		if ($quake_menu.$setup_top > 13) {
			$quake_menu.$setup_top = 0;
		}
		if ($quake_menu.$setup_top < 0) {
			$quake_menu.$setup_top = 13;
		}
		if ($quake_menu.$setup_bottom > 13) {
			$quake_menu.$setup_bottom = 0;
		}
		if ($quake_menu.$setup_bottom < 0) {
			$quake_menu.$setup_bottom = 13;
		}
	};
	$quake_menu.$forward = function() {
		$quake_sound.s_LocalSound('misc/menu3.wav');
		if ($quake_menu.$setup_cursor === 2) {
			$quake_menu.$setup_top = $quake_menu.$setup_top + 1;
		}
		if ($quake_menu.$setup_cursor === 3) {
			$quake_menu.$setup_bottom = $quake_menu.$setup_bottom + 1;
		}
	};
	$quake_menu.$m_Net_Draw = function() {
	};
	$quake_menu.$m_Net_Key = function(k) {
	};
	$quake_menu.$m_Menu_Options_f = function() {
		$quake_keys.key_dest = 3;
		$quake_menu.$m_state = 8;
		$quake_menu.$m_entersound = true;
	};
	$quake_menu.$m_AdjustSliders = function(dir) {
		switch ($quake_menu.$options_cursor) {
			case 3: {
				$quake_screen.scr_viewsize.value += dir * 10;
				if ($quake_screen.scr_viewsize.value < 30) {
					$quake_screen.scr_viewsize.value = 30;
				}
				if ($quake_screen.scr_viewsize.value > 120) {
					$quake_screen.scr_viewsize.value = 120;
				}
				$quake_cvar_t.cvar_SetValue('viewsize', $quake_screen.scr_viewsize.value);
				break;
			}
			case 4: {
				$quake_view.v_gamma.value -= dir * 0.05;
				if ($quake_view.v_gamma.value < 0.5) {
					$quake_view.v_gamma.value = 0.5;
				}
				if ($quake_view.v_gamma.value > 1) {
					$quake_view.v_gamma.value = 1;
				}
				$quake_cvar_t.cvar_SetValue('gamma', $quake_view.v_gamma.value);
				break;
			}
		}
	};
	$quake_menu.$m_DrawSlider = function(x, y, range) {
		var i;
		if (range < 0) {
			range = 0;
		}
		if (range > 1) {
			range = 1;
		}
		$quake_menu.$m_DrawCharacter(x - 8, y, 128);
		for (i = 0; i < $quake_menu.$slideR_RANGE; i++) {
			$quake_menu.$m_DrawCharacter(x + i * 8, y, 129);
		}
		$quake_menu.$m_DrawCharacter(x + i * 8, y, 130);
		$quake_menu.$m_DrawCharacter(ss.Int32.trunc(x + 72 * range), y, 131);
	};
	$quake_menu.$m_Options_Draw = function() {
		var r;
		var p;
		$quake_menu.$m_DrawTransPic(16, 4, $quake_draw.draw_CachePic('gfx/qplaque.lmp'));
		p = $quake_draw.draw_CachePic('gfx/p_option.lmp');
		$quake_menu.$m_DrawPic(ss.Int32.div(320 - p.width, 2), 4, p);
		$quake_menu.$m_Print(16, 32, '    Customize controls');
		$quake_menu.$m_Print(16, 40, '         Go to console');
		$quake_menu.$m_Print(16, 48, '     Reset to defaults');
		$quake_menu.$m_Print(16, 56, '           Screen size');
		r = ($quake_screen.scr_viewsize.value - 30) / 90;
		$quake_menu.$m_DrawSlider(220, 56, r);
		$quake_menu.$m_Print(16, 64, '            Brightness');
		r = (1 - $quake_view.v_gamma.value) / 0.5;
		$quake_menu.$m_DrawSlider(220, 64, r);
		// cursor
		$quake_menu.$m_DrawCharacter(200, 32 + $quake_menu.$options_cursor * 8, 12 + (ss.Int32.trunc($quake_host.realtime * 4) & 1));
	};
	$quake_menu.$m_Options_Key = function(k) {
		switch (k) {
			case 27: {
				$quake_menu.m_Menu_Main_f();
				break;
			}
			case 13: {
				$quake_menu.$m_entersound = true;
				switch ($quake_menu.$options_cursor) {
					case 0: {
						$quake_menu.$m_Menu_Keys_f();
						break;
					}
					case 1: {
						$quake_menu.$m_state = 0;
						$quake_console.con_ToggleConsole_f();
						break;
					}
					case 2: {
						$quake_cmd.cbuf_AddText('exec default.cfg\n');
						break;
					}
					default: {
						$quake_menu.$m_AdjustSliders(1);
						break;
					}
				}
				return;
			}
			case 128: {
				$quake_menu.$options_cursor--;
				if ($quake_menu.$options_cursor < 0) {
					$quake_menu.$options_cursor = 12;
				}
				break;
			}
			case 129: {
				$quake_menu.$options_cursor++;
				if ($quake_menu.$options_cursor >= $quake_menu.$optionS_ITEMS) {
					$quake_menu.$options_cursor = 0;
				}
				break;
			}
			case 130: {
				$quake_menu.$m_AdjustSliders(-1);
				break;
			}
			case 131: {
				$quake_menu.$m_AdjustSliders(1);
				break;
			}
		}
		if ($quake_menu.$options_cursor === 12) {
			if (k === $quake_keys.k_UPARROW) {
				$quake_menu.$options_cursor = 11;
			}
			else {
				$quake_menu.$options_cursor = 0;
			}
		}
	};
	$quake_menu.$m_Menu_Keys_f = function() {
	};
	$quake_menu.$m_Keys_Draw = function() {
	};
	$quake_menu.$m_Keys_Key = function(k) {
	};
	$quake_menu.$m_Menu_Video_f = function() {
	};
	$quake_menu.$m_Video_Draw = function() {
	};
	$quake_menu.$m_Video_Key = function(key) {
	};
	$quake_menu.$m_Menu_Help_f = function() {
		$quake_keys.key_dest = 3;
		$quake_menu.$m_state = 11;
		$quake_menu.$m_entersound = true;
		$quake_menu.$help_page = 0;
	};
	$quake_menu.$m_Help_Draw = function() {
		$quake_menu.$m_DrawPic(0, 0, $quake_draw.draw_CachePic('gfx/help' + $quake_menu.$help_page + '.lmp'));
	};
	$quake_menu.$m_Help_Key = function(key) {
		switch (key) {
			case 27: {
				$quake_menu.m_Menu_Main_f();
				break;
			}
			case 128:
			case 131: {
				$quake_menu.$m_entersound = true;
				if (++$quake_menu.$help_page >= $quake_menu.$nuM_HELP_PAGES) {
					$quake_menu.$help_page = 0;
				}
				break;
			}
			case 129:
			case 130: {
				$quake_menu.$m_entersound = true;
				if (--$quake_menu.$help_page < 0) {
					$quake_menu.$help_page = 5;
				}
				break;
			}
		}
	};
	$quake_menu.m_Menu_Quit_f = function() {
		if ($quake_menu.$m_state === 12) {
			return;
		}
		$quake_menu.$wasInMenus = $quake_keys.key_dest === 3;
		$quake_keys.key_dest = 3;
		$quake_menu.$m_quit_prevstate = $quake_menu.$m_state;
		$quake_menu.$m_state = 12;
		$quake_menu.$m_entersound = true;
		$quake_menu.$msgNumber = $Helper_helper.rand() & 7;
	};
	$quake_menu.$m_Quit_Key = function(key) {
		switch (key) {
			case 27:
			case 110:
			case 78: {
				if ($quake_menu.$wasInMenus) {
					$quake_menu.$m_state = $quake_menu.$m_quit_prevstate;
					$quake_menu.$m_entersound = true;
				}
				else {
					$quake_keys.key_dest = 0;
					$quake_menu.$m_state = 0;
				}
				break;
			}
			case 89:
			case 121: {
				$quake_keys.key_dest = 1;
				$quake_host.host_Quit_f();
				break;
			}
			default: {
				break;
			}
		}
	};
	$quake_menu.$m_Quit_Draw = function() {
		if ($quake_menu.$wasInMenus) {
			$quake_menu.$m_state = $quake_menu.$m_quit_prevstate;
			$quake_menu.$m_recursiveDraw = true;
			$quake_menu.m_Draw();
			$quake_menu.$m_state = 12;
		}
		$quake_menu.$m_DrawTextBox(56, 76, 24, 4);
		$quake_menu.$m_Print(64, 84, $quake_menu.$quitMessage[$quake_menu.$msgNumber * 4 + 0]);
		$quake_menu.$m_Print(64, 92, $quake_menu.$quitMessage[$quake_menu.$msgNumber * 4 + 1]);
		$quake_menu.$m_Print(64, 100, $quake_menu.$quitMessage[$quake_menu.$msgNumber * 4 + 2]);
		$quake_menu.$m_Print(64, 108, $quake_menu.$quitMessage[$quake_menu.$msgNumber * 4 + 3]);
	};
	$quake_menu.$m_SerialConfig_Draw = function() {
	};
	$quake_menu.$m_SerialConfig_Key = function(key) {
	};
	$quake_menu.$m_ModemConfig_Draw = function() {
	};
	$quake_menu.$m_ModemConfig_Key = function(key) {
	};
	$quake_menu.$m_LanConfig_Draw = function() {
	};
	$quake_menu.$m_LanConfig_Key = function(key) {
	};
	$quake_menu.$m_GameOptions_Draw = function() {
		var p;
		var x;
		$quake_menu.$m_DrawTransPic(16, 4, $quake_draw.draw_CachePic('gfx/qplaque.lmp'));
		p = $quake_draw.draw_CachePic('gfx/p_multi.lmp');
		$quake_menu.$m_DrawPic(ss.Int32.div(320 - p.width, 2), 4, p);
		$quake_menu.$m_DrawTextBox(152, 32, 10, 1);
		$quake_menu.$m_Print(160, 40, 'begin game');
		$quake_menu.$m_Print(0, 56, '      Max players');
		$quake_menu.$m_Print(160, 56, ''.toString() + $quake_menu.$maxplayers);
		$quake_menu.$m_Print(0, 64, '        Game Type');
		$quake_menu.$m_Print(0, 72, '        Teamplay');
		$quake_menu.$m_Print(0, 80, '            Skill');
		$quake_menu.$m_Print(0, 88, '       Frag Limit');
		$quake_menu.$m_Print(0, 96, '       Time Limit');
		$quake_menu.$m_Print(0, 112, '         Episode');
		//MED 01/06/97 added hipnotic episodes
		if ($quake_common.hipnotic) {
			$quake_menu.$m_Print(160, 112, $quake_menu.$hipnoticepisodes[$quake_menu.$startepisode].$description);
		}
		else if ($quake_common.rogue) {
			$quake_menu.$m_Print(160, 112, $quake_menu.$rogueepisodes[$quake_menu.$startepisode].$description);
		}
		else {
			$quake_menu.$m_Print(160, 112, $quake_menu.$episodes[$quake_menu.$startepisode].$description);
		}
		$quake_menu.$m_Print(0, 120, '           Level');
		//MED 01/06/97 added hipnotic episodes
		if ($quake_common.hipnotic) {
			$quake_menu.$m_Print(160, 120, $quake_menu.$hipnoticlevels[$quake_menu.$hipnoticepisodes[$quake_menu.$startepisode].$firstLevel + $quake_menu.$startlevel].$description);
			$quake_menu.$m_Print(160, 128, $quake_menu.$hipnoticlevels[$quake_menu.$hipnoticepisodes[$quake_menu.$startepisode].$firstLevel + $quake_menu.$startlevel].$name);
		}
		else if ($quake_common.rogue) {
			$quake_menu.$m_Print(160, 120, $quake_menu.$roguelevels[$quake_menu.$rogueepisodes[$quake_menu.$startepisode].$firstLevel + $quake_menu.$startlevel].$description);
			$quake_menu.$m_Print(160, 128, $quake_menu.$roguelevels[$quake_menu.$rogueepisodes[$quake_menu.$startepisode].$firstLevel + $quake_menu.$startlevel].$name);
		}
		else {
			$quake_menu.$m_Print(160, 120, $quake_menu.$levels[$quake_menu.$episodes[$quake_menu.$startepisode].$firstLevel + $quake_menu.$startlevel].$description);
			$quake_menu.$m_Print(160, 128, $quake_menu.$levels[$quake_menu.$episodes[$quake_menu.$startepisode].$firstLevel + $quake_menu.$startlevel].$name);
		}
		// line cursor
		$quake_menu.$m_DrawCharacter(144, $quake_menu.$gameoptions_cursor_table[$quake_menu.$gameoptions_cursor], 12 + (ss.Int32.trunc($quake_host.realtime * 4) & 1));
		if ($quake_menu.$m_serverInfoMessage) {
			if ($quake_host.realtime - $quake_menu.$m_serverInfoMessageTime < 5) {
				x = 56;
				$quake_menu.$m_DrawTextBox(x, 138, 24, 4);
				x += 8;
				$quake_menu.$m_Print(x, 146, '  More than 4 players   ');
				$quake_menu.$m_Print(x, 154, ' requires using command ');
				$quake_menu.$m_Print(x, 162, 'line parameters; please ');
				$quake_menu.$m_Print(x, 170, '   see techinfo.txt.    ');
			}
			else {
				$quake_menu.$m_serverInfoMessage = false;
			}
		}
	};
	$quake_menu.$m_GameOptions_Key = function(key) {
	};
	$quake_menu.$m_Search_Draw = function() {
	};
	$quake_menu.$m_Search_Key = function(key) {
	};
	$quake_menu.$m_ServerList_Draw = function() {
	};
	$quake_menu.$m_ServerList_Key = function(k) {
	};
	$quake_menu.m_Init = function() {
		$quake_cmd.cmd_AddCommand('togglemenu', $quake_menu.m_ToggleMenu_f);
		$quake_cmd.cmd_AddCommand('menu_main', $quake_menu.m_Menu_Main_f);
		$quake_cmd.cmd_AddCommand('menu_singleplayer', $quake_menu.$m_Menu_SinglePlayer_f);
		$quake_cmd.cmd_AddCommand('menu_load', $quake_menu.$m_Menu_Load_f);
		$quake_cmd.cmd_AddCommand('menu_save', $quake_menu.$m_Menu_Save_f);
		$quake_cmd.cmd_AddCommand('menu_multiplayer', $quake_menu.$m_Menu_MultiPlayer_f);
		$quake_cmd.cmd_AddCommand('menu_setup', $quake_menu.$m_Menu_Setup_f);
		$quake_cmd.cmd_AddCommand('menu_options', $quake_menu.$m_Menu_Options_f);
		$quake_cmd.cmd_AddCommand('menu_keys', $quake_menu.$m_Menu_Keys_f);
		$quake_cmd.cmd_AddCommand('menu_video', $quake_menu.$m_Menu_Video_f);
		$quake_cmd.cmd_AddCommand('help', $quake_menu.$m_Menu_Help_f);
		$quake_cmd.cmd_AddCommand('menu_quit', $quake_menu.m_Menu_Quit_f);
	};
	$quake_menu.m_Draw = function() {
		if ($quake_menu.$m_state === 0) {
			return;
		}
		if (!$quake_menu.$m_recursiveDraw) {
			$quake_screen.scr_copyeverything = true;
			if ($quake_screen.scr_con_current !== 0) {
				$quake_draw.draw_ConsoleBackground($quake_screen.vid.height);
				$quake_sound.s_ExtraUpdate();
			}
			else {
				$quake_draw.draw_FadeScreen();
			}
			$quake_screen.scr_fullupdate = 0;
		}
		else {
			$quake_menu.$m_recursiveDraw = false;
		}
		switch ($quake_menu.$m_state) {
			case 0: {
				break;
			}
			case 1: {
				$quake_menu.$m_Main_Draw();
				break;
			}
			case 2: {
				$quake_menu.$m_SinglePlayer_Draw();
				break;
			}
			case 3: {
				$quake_menu.$m_Load_Draw();
				break;
			}
			case 4: {
				$quake_menu.$m_Save_Draw();
				break;
			}
			case 5: {
				$quake_menu.$m_MultiPlayer_Draw();
				break;
			}
			case 6: {
				$quake_menu.$m_Setup_Draw();
				break;
			}
			case 7: {
				$quake_menu.$m_Net_Draw();
				break;
			}
			case 8: {
				$quake_menu.$m_Options_Draw();
				break;
			}
			case 10: {
				$quake_menu.$m_Keys_Draw();
				break;
			}
			case 9: {
				$quake_menu.$m_Video_Draw();
				break;
			}
			case 11: {
				$quake_menu.$m_Help_Draw();
				break;
			}
			case 12: {
				$quake_menu.$m_Quit_Draw();
				break;
			}
			case 13: {
				$quake_menu.$m_SerialConfig_Draw();
				break;
			}
			case 14: {
				$quake_menu.$m_ModemConfig_Draw();
				break;
			}
			case 15: {
				$quake_menu.$m_LanConfig_Draw();
				break;
			}
			case 16: {
				$quake_menu.$m_GameOptions_Draw();
				break;
			}
			case 17: {
				$quake_menu.$m_Search_Draw();
				break;
			}
			case 18: {
				$quake_menu.$m_ServerList_Draw();
				break;
			}
		}
		$quake_sound.s_ExtraUpdate();
	};
	$quake_menu.m_Keydown = function(key) {
		switch ($quake_menu.$m_state) {
			case 0: {
				return;
			}
			case 1: {
				$quake_menu.$m_Main_Key(key);
				return;
			}
			case 2: {
				$quake_menu.$m_SinglePlayer_Key(key);
				return;
			}
			case 3: {
				$quake_menu.$m_Load_Key(key);
				return;
			}
			case 4: {
				$quake_menu.$m_Save_Key(key);
				return;
			}
			case 5: {
				$quake_menu.$m_MultiPlayer_Key(key);
				return;
			}
			case 6: {
				$quake_menu.$m_Setup_Key(key);
				return;
			}
			case 7: {
				$quake_menu.$m_Net_Key(key);
				return;
			}
			case 8: {
				$quake_menu.$m_Options_Key(key);
				return;
			}
			case 10: {
				$quake_menu.$m_Keys_Key(key);
				return;
			}
			case 9: {
				$quake_menu.$m_Video_Key(key);
				return;
			}
			case 11: {
				$quake_menu.$m_Help_Key(key);
				return;
			}
			case 12: {
				$quake_menu.$m_Quit_Key(key);
				return;
			}
			case 13: {
				$quake_menu.$m_SerialConfig_Key(key);
				return;
			}
			case 14: {
				$quake_menu.$m_ModemConfig_Key(key);
				return;
			}
			case 15: {
				$quake_menu.$m_LanConfig_Key(key);
				return;
			}
			case 16: {
				$quake_menu.$m_GameOptions_Key(key);
				return;
			}
			case 17: {
				$quake_menu.$m_Search_Key(key);
				break;
			}
			case 18: {
				$quake_menu.$m_ServerList_Key(key);
				return;
			}
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model
	var $quake_model = function() {
	};
	$quake_model.mod_Init = function() {
		for (var kk = 0; kk < 1024; kk++) {
			$quake_model.$mod_novis[kk] = 255;
		}
	};
	$quake_model.mod_Extradata = function(mod) {
		var r;
		r = mod.cache;
		if (ss.isValue(r)) {
			return r;
		}
		$quake_model.$mod_LoadModel(mod, true);
		if (ss.isNullOrUndefined(mod.cache)) {
			$quake_sys_linux.sys_Error('Mod_Extradata: caching failed');
		}
		return mod.cache;
	};
	$quake_model.mod_PointInLeaf = function(p, model) {
		var node;
		var d;
		var plane;
		if (ss.isNullOrUndefined(model) || ss.isNullOrUndefined(model.nodes)) {
			$quake_sys_linux.sys_Error('Mod_PointInLeaf: bad model');
		}
		node = model.nodes[0];
		while (true) {
			if (node.contents < 0) {
				return Type.cast(node, $quake_model$mleaf_t);
			}
			var _node = Type.cast(node, $quake_model$mnode_t);
			plane = _node.plane;
			d = $quake_mathlib.dotProduct$1(p, plane.normal) - plane.dist;
			if (d > 0) {
				node = _node.children[0];
			}
			else {
				node = _node.children[1];
			}
		}
		return null;
		// never reached
	};
	$quake_model.$mod_DecompressVis = function(in1, model) {
		var c;
		var out;
		var row;
		var ofs = in1.ofs;
		row = model.numleafs + 7 >> 3;
		out = 0;
		if (ss.isNullOrUndefined(in1.buffer)) {
			// no vis info, so make all visible
			while (row !== 0) {
				$quake_model.$decompressed[out++] = 255;
				row--;
			}
			return $quake_model.$decompressed;
		}
		do {
			if (in1.buffer[ofs] !== 0) {
				$quake_model.$decompressed[out++] = in1.buffer[ofs++];
				continue;
			}
			c = in1.buffer[ofs + 1];
			ofs += 2;
			while (c !== 0) {
				$quake_model.$decompressed[out++] = 0;
				c--;
			}
		} while (out < row);
		return $quake_model.$decompressed;
	};
	$quake_model.mod_LeafPVS = function(leaf, model) {
		if (ss.referenceEquals(leaf, model.leafs[0])) {
			return $quake_model.$mod_novis;
		}
		return $quake_model.$mod_DecompressVis(leaf.compressed_vis, model);
	};
	$quake_model.mod_ClearAll = function() {
		var i;
		var mod;
		$quake_model.$icolor = 0;
		for (i = 0, mod = $quake_model.$mod_known[i]; i < $quake_model.$mod_numknown; i++) {
			mod = $quake_model.$mod_known[i];
			mod.needload = $quake_model.nL_UNREFERENCED;
			//FIX FOR CACHE_ALLOC ERRORS:
			if (mod.type === 1) {
				mod.cache = null;
			}
		}
	};
	$quake_model.$mod_FindName = function(name) {
		var i;
		var mod = null;
		var avail = null;
		if (name.length === 0) {
			$quake_sys_linux.sys_Error('Mod_ForName: NULL name');
		}
		//
		// search the currently loaded models
		//
		for (i = 0, mod = $quake_model.$mod_known[i]; i < $quake_model.$mod_numknown; i++, mod = $quake_model.$mod_known[i]) {
			if (ss.isValue(mod.name) && mod.name.compareTo(name) === 0) {
				break;
			}
			if (mod.needload === $quake_model.nL_UNREFERENCED) {
				if (ss.isNullOrUndefined(avail) || mod.type !== 2) {
					avail = mod;
				}
			}
		}
		if (i === $quake_model.$mod_numknown) {
			if ($quake_model.$mod_numknown === $quake_model.maX_MOD_KNOWN) {
				if (ss.isValue(avail)) {
					mod = avail;
				}
				else {
					$quake_sys_linux.sys_Error('mod_numknown == MAX_MOD_KNOWN');
				}
			}
			else {
				$quake_model.$mod_numknown++;
			}
			mod.name = name;
			mod.needload = $quake_model.nL_NEEDS_LOADED;
		}
		return mod;
	};
	$quake_model.mod_TouchModel = function(name) {
		var mod;
		mod = $quake_model.$mod_FindName(name);
		if (mod.needload === $quake_model.nL_PRESENT) {
		}
	};
	$quake_model.$mod_LoadModel = function(mod, crash) {
		//unsigned *buf;
		var buf;
		var stackbuf = new Uint8Array(1024);
		// avoid dirtying the cache heap
		if (mod.type === 2) {
		}
		else if (mod.needload === $quake_model.nL_PRESENT) {
			return mod;
		}
		//
		// because the world is so huge, load it one piece at a time
		//
		//
		// load the file
		//
		buf = $quake_common.coM_LoadStackFile(mod.name, stackbuf, stackbuf.length);
		if (ss.isNullOrUndefined(buf)) {
			if (crash) {
				$quake_sys_linux.sys_Error('Mod_NumForName: ' + mod.name + ' not found');
			}
			return null;
		}
		//
		// allocate a new model
		//
		$quake_model.$loadname = $quake_common.coM_FileBase(mod.name);
		$quake_model.$loadmodel = mod;
		//
		// fill it in
		//
		// call the apropriate loader
		mod.needload = $quake_model.nL_PRESENT;
		var aux = buf[3] << 24 | buf[2] << 16 | buf[1] << 8 | buf[0];
		switch (aux) {
			case 1330660425: {
				$quake_model.$mod_LoadAliasModel(mod, buf);
				break;
			}
			case 1347634249: {
				$quake_model.$mod_LoadSpriteModel(mod, buf);
				break;
			}
			default: {
				$quake_model.$mod_LoadBrushModel(mod, buf);
				break;
			}
		}
		return mod;
	};
	$quake_model.mod_ForName = function(name, crash) {
		var mod;
		mod = $quake_model.$mod_FindName(name);
		return $quake_model.$mod_LoadModel(mod, crash);
	};
	$quake_model.$mod_LoadTextures = function(l) {
		var i, j, pixels, num, max, altmax;
		var mt;
		var tx, tx2;
		var anims = new Array(10);
		var altanims = new Array(10);
		var m;
		for (var kk = 0; kk < 10; kk++) {
			anims[kk] = new $quake_model$texture_t();
			altanims[kk] = new $quake_model$texture_t();
		}
		if (l.filelen === 0) {
			$quake_model.$loadmodel.textures = null;
			return;
		}
		var buf = new $quake_bspfile$ByteBuffer($quake_model.$mod_base, l.fileofs);
		m = $quake_bspfile$dmiptexlump_t.op_Implicit(buf);
		$quake_model.$loadmodel.numtextures = m.nummiptex;
		$quake_model.$loadmodel.textures = new Array(m.nummiptex);
		for (i = 0; i < m.nummiptex; i++) {
			$quake_model.$loadmodel.textures[i] = new $quake_model$texture_t();
			if (m.dataofs[i] === -1) {
				continue;
			}
			buf.ofs = l.fileofs + m.dataofs[i];
			mt = $quake_bspfile$miptex_t.op_Implicit(buf);
			if ((mt.width & 15) !== 0 || (mt.height & 15) !== 0) {
				$quake_sys_linux.sys_Error('Texture ' + mt.name + ' is not 16 aligned');
			}
			pixels = ss.Int32.div(mt.width * mt.height, 64) * 85;
			tx = new $quake_model$texture_t();
			tx.pixels = new Uint8Array(pixels);
			$quake_model.$loadmodel.textures[i] = tx;
			tx.pixels = new Uint8Array(pixels);
			tx.width = mt.width;
			tx.height = mt.height;
			for (j = 0; j < $quake_bspfile.MIPLEVELS; j++) {
				tx.offsets[j] = mt.offsets[j] - $quake_bspfile.sizeof_miptex_t;
			}
			// the pixels immediately follow the structures
			$System_Buffer.blockCopy$1(buf.buffer, buf.ofs + $quake_bspfile.sizeof_miptex_t, tx.pixels, 0, pixels);
			if (mt.name.startsWith('sky')) {
				$quake_render.r_InitSky(tx);
			}
		}
		//
		// sequence the animations
		//
		for (i = 0; i < m.nummiptex; i++) {
			tx = $quake_model.$loadmodel.textures[i];
			if (ss.isNullOrUndefined(tx) || tx.name.charCodeAt(0) !== 43) {
				continue;
			}
			if (ss.isValue(tx.anim_next)) {
				continue;
			}
			// allready sequenced
			// find the number of frames in the animation
			//memset (anims, 0, sizeof(anims));
			//memset (altanims, 0, sizeof(altanims));
			max = tx.name.charCodeAt(1);
			altmax = 0;
			if (max >= 97 && max <= 122) {
				max -= 32;
			}
			if (max >= 48 && max <= 57) {
				max -= 48;
				altmax = 0;
				anims[max] = tx;
				max++;
			}
			else if (max >= 65 && max <= 74) {
				altmax = max - 65;
				max = 0;
				altanims[altmax] = tx;
				altmax++;
			}
			else {
				$quake_sys_linux.sys_Error('Bad animating texture ' + tx.name);
			}
			for (j = i + 1; j < m.nummiptex; j++) {
				tx2 = $quake_model.$loadmodel.textures[j];
				if (ss.isNullOrUndefined(tx2) || tx2.name.charCodeAt(0) !== 43) {
					continue;
				}
				if (tx2.name.substring(2).compareTo(tx.name.substring(2)) !== 0) {
					continue;
				}
				num = tx2.name.charCodeAt(1);
				if (num >= 97 && num <= 122) {
					num -= 32;
				}
				if (num >= 48 && num <= 57) {
					num -= 48;
					anims[num] = tx2;
					if (num + 1 > max) {
						max = num + 1;
					}
				}
				else if (num >= 65 && num <= 74) {
					num = num - 65;
					altanims[num] = tx2;
					if (num + 1 > altmax) {
						altmax = num + 1;
					}
				}
				else {
					$quake_sys_linux.sys_Error('Bad animating texture ' + tx.name);
				}
			}
			// link them all together
			for (j = 0; j < max; j++) {
				tx2 = anims[j];
				if (ss.isNullOrUndefined(tx2)) {
					$quake_sys_linux.sys_Error('Missing frame ' + j + ' of ' + tx.name);
				}
				tx2.anim_total = max * $quake_model.$aniM_CYCLE;
				tx2.anim_min = j * $quake_model.$aniM_CYCLE;
				tx2.anim_max = (j + 1) * $quake_model.$aniM_CYCLE;
				tx2.anim_next = anims[(j + 1) % max];
				if (altmax !== 0) {
					tx2.alternate_anims = altanims[0];
				}
			}
			for (j = 0; j < altmax; j++) {
				tx2 = altanims[j];
				if (ss.isNullOrUndefined(tx2)) {
					$quake_sys_linux.sys_Error('Missing frame ' + j + ' of ' + tx.name);
				}
				tx2.anim_total = altmax * $quake_model.$aniM_CYCLE;
				tx2.anim_min = j * $quake_model.$aniM_CYCLE;
				tx2.anim_max = (j + 1) * $quake_model.$aniM_CYCLE;
				tx2.anim_next = altanims[(j + 1) % altmax];
				if (max !== 0) {
					tx2.alternate_anims = anims[0];
				}
			}
		}
	};
	$quake_model.$mod_LoadLighting = function(l) {
		if (l.filelen === 0) {
			$quake_model.$loadmodel.lightdata = null;
			return;
		}
		$quake_model.$loadmodel.lightdata = new Uint8Array(l.filelen);
		$System_Buffer.blockCopy$1($quake_model.$mod_base, l.fileofs, $quake_model.$loadmodel.lightdata, 0, l.filelen);
	};
	$quake_model.$mod_LoadVisibility = function(l) {
		if (l.filelen === 0) {
			$quake_model.$loadmodel.visdata = null;
			return;
		}
		$quake_model.$loadmodel.visdata = new Uint8Array(l.filelen);
		$System_Buffer.blockCopy$1($quake_model.$mod_base, l.fileofs, $quake_model.$loadmodel.visdata, 0, l.filelen);
	};
	$quake_model.$mod_LoadEntities = function(l) {
		if (l.filelen === 0) {
			$quake_model.$loadmodel.entities = null;
			return;
		}
		$quake_model.$loadmodel.entities = new Array(l.filelen);
		var tmp = new Uint8Array(l.filelen);
		$System_Buffer.blockCopy$1($quake_model.$mod_base, l.fileofs, tmp, 0, l.filelen);
		for (var kk = 0; kk < l.filelen; kk++) {
			$quake_model.$loadmodel.entities[kk] = tmp[kk];
		}
		tmp = null;
	};
	$quake_model.$mod_LoadVertexes = function(l) {
		var in1;
		var out;
		var i, count;
		if (l.filelen % $quake_bspfile.sizeof_dvertex_t !== 0) {
			$quake_sys_linux.sys_Error('MOD_LoadBmodel: funny lump size in ' + $quake_model.$loadmodel.name);
		}
		count = ss.Int32.div(l.filelen, $quake_bspfile.sizeof_dvertex_t);
		var buf = new $quake_bspfile$ByteBuffer($quake_model.$mod_base, l.fileofs);
		in1 = new Array(count);
		out = new Array(count);
		for (var kk = 0; kk < count; kk++) {
			in1[kk] = $quake_bspfile$dvertex_t.op_Implicit(buf);
			buf.ofs += $quake_bspfile.sizeof_dvertex_t;
			out[kk] = new $quake_model$mvertex_t();
		}
		$quake_model.$loadmodel.vertexes = out;
		$quake_model.$loadmodel.numvertexes = count;
		for (i = 0; i < count; i++) {
			out[i].position[0] = in1[i].point[0];
			out[i].position[1] = in1[i].point[1];
			out[i].position[2] = in1[i].point[2];
		}
	};
	$quake_model.$mod_LoadSubmodels = function(l) {
		var out;
		var i, j, count;
		if (l.filelen % $quake_bspfile.sizeof_dmodel_t !== 0) {
			$quake_sys_linux.sys_Error('MOD_LoadBmodel: funny lump size in ' + $quake_model.$loadmodel.name);
		}
		count = ss.Int32.div(l.filelen, $quake_bspfile.sizeof_dmodel_t);
		out = new Array(count);
		var buf = new $quake_bspfile$ByteBuffer($quake_model.$mod_base, l.fileofs);
		for (var kk = 0; kk < count; kk++) {
			out[kk] = $quake_bspfile$dmodel_t.op_Implicit(buf);
			buf.ofs += $quake_bspfile.sizeof_dmodel_t;
		}
		$quake_model.$loadmodel.submodels = out;
		$quake_model.$loadmodel.numsubmodels = count;
		for (i = 0; i < count; i++) {
			for (j = 0; j < 3; j++) {
				// spread the mins / maxs by a pixel
				out[i].mins[j] -= 1;
				out[i].maxs[j] += 1;
			}
		}
	};
	$quake_model.$mod_LoadEdges = function(l) {
		var in1;
		var out;
		var i, count;
		if (l.filelen % $quake_bspfile.sizeof_dedge_t !== 0) {
			$quake_sys_linux.sys_Error('MOD_LoadBmodel: funny lump size in ' + $quake_model.$loadmodel.name);
		}
		count = ss.Int32.div(l.filelen, $quake_bspfile.sizeof_dedge_t);
		var buf = new $quake_bspfile$ByteBuffer($quake_model.$mod_base, l.fileofs);
		in1 = new Array(count);
		out = new Array(count);
		for (var kk = 0; kk < count; kk++) {
			in1[kk] = $quake_bspfile$dedge_t.op_Implicit(buf);
			buf.ofs += $quake_bspfile.sizeof_dedge_t;
			out[kk] = new $quake_model$medge_t();
		}
		$quake_model.$loadmodel.edges = out;
		$quake_model.$loadmodel.numedges = count;
		for (i = 0; i < count; i++) {
			out[i].v[0] = in1[i].v[0];
			out[i].v[1] = in1[i].v[1];
		}
	};
	$quake_model.$mod_LoadTexinfo = function(l) {
		var in1;
		var out;
		var i, j, count;
		var miptex;
		var len1, len2;
		if (l.filelen % $quake_bspfile.sizeof_texinfo_t !== 0) {
			$quake_sys_linux.sys_Error('MOD_LoadBmodel: funny lump size in ' + $quake_model.$loadmodel.name);
		}
		count = ss.Int32.div(l.filelen, $quake_bspfile.sizeof_texinfo_t);
		var buf = new $quake_bspfile$ByteBuffer($quake_model.$mod_base, l.fileofs);
		in1 = new Array(count);
		out = new Array(count);
		for (var kk = 0; kk < count; kk++) {
			in1[kk] = $quake_bspfile$texinfo_t.op_Implicit(buf);
			buf.ofs += $quake_bspfile.sizeof_texinfo_t;
			out[kk] = new $quake_model$mtexinfo_t();
		}
		$quake_model.$loadmodel.texinfo = out;
		$quake_model.$loadmodel.numtexinfo = count;
		for (i = 0; i < count; i++) {
			for (var k = 0; k < 2; k++) {
				for (j = 0; j < 4; j++) {
					out[i].vecs[k][j] = in1[i].vecs[k][j];
				}
			}
			len1 = $quake_mathlib.length$1(out[i].vecs[0]);
			len2 = $quake_mathlib.length$1(out[i].vecs[1]);
			len1 = (len1 + len2) / 2;
			if (len1 < 0.32) {
				out[i].mipadjust = 4;
			}
			else if (len1 < 0.49) {
				out[i].mipadjust = 3;
			}
			else if (len1 < 0.99) {
				out[i].mipadjust = 2;
			}
			else {
				out[i].mipadjust = 1;
			}
			miptex = in1[i].miptex;
			out[i].flags = in1[i].flags;
			if (ss.isNullOrUndefined($quake_model.$loadmodel.textures)) {
				out[i].texture = $quake_render.r_notexture_mip;
				// checkerboard texture
				out[i].flags = 0;
			}
			else {
				if (miptex >= $quake_model.$loadmodel.numtextures) {
					$quake_sys_linux.sys_Error('miptex >= loadmodel.numtextures');
				}
				out[i].texture = $quake_model.$loadmodel.textures[miptex];
				if (ss.isNullOrUndefined(out[i].texture)) {
					out[i].texture = $quake_render.r_notexture_mip;
					// texture not found
					out[i].flags = 0;
				}
			}
		}
	};
	$quake_model.$calcSurfaceExtents = function(s) {
		var mins = new Array(2), maxs = new Array(2);
		var val;
		var i, j, e;
		var v;
		var tex;
		var bmins = new Array(2), bmaxs = new Array(2);
		mins[0] = mins[1] = 999999;
		maxs[0] = maxs[1] = -99999;
		tex = s.texinfo;
		for (i = 0; i < s.numedges; i++) {
			e = $quake_model.$loadmodel.surfedges[s.firstedge + i];
			if (e >= 0) {
				v = $quake_model.$loadmodel.vertexes[$quake_model.$loadmodel.edges[e].v[0]];
			}
			else {
				v = $quake_model.$loadmodel.vertexes[$quake_model.$loadmodel.edges[-e].v[1]];
			}
			for (j = 0; j < 2; j++) {
				val = v.position[0] * tex.vecs[j][0] + v.position[1] * tex.vecs[j][1] + v.position[2] * tex.vecs[j][2] + tex.vecs[j][3];
				if (val < mins[j]) {
					mins[j] = val;
				}
				if (val > maxs[j]) {
					maxs[j] = val;
				}
			}
		}
		for (i = 0; i < 2; i++) {
			bmins[i] = ss.Int32.trunc(Math.floor(mins[i] / 16));
			bmaxs[i] = ss.Int32.trunc(Math.ceil(maxs[i] / 16));
			s.texturemins[i] = bmins[i] * 16;
			s.extents[i] = (bmaxs[i] - bmins[i]) * 16;
			//if ( (tex.flags & bspfile.TEX_SPECIAL) == 0 && s.extents[i] > 256)
			//sys_linux.Sys_Error ("Bad surface extents");
		}
	};
	$quake_model.$mod_LoadFaces = function(l) {
		var in1;
		var out;
		var i, count, surfnum;
		var planenum, side;
		if (l.filelen % $quake_bspfile.sizeof_dface_t !== 0) {
			$quake_sys_linux.sys_Error('MOD_LoadBmodel: funny lump size in ' + $quake_model.$loadmodel.name);
		}
		count = ss.Int32.div(l.filelen, $quake_bspfile.sizeof_dface_t);
		var buf = new $quake_bspfile$ByteBuffer($quake_model.$mod_base, l.fileofs);
		in1 = new Array(count);
		out = new Array(count);
		for (var kk = 0; kk < count; kk++) {
			in1[kk] = $quake_bspfile$dface_t.op_Implicit(buf);
			buf.ofs += $quake_bspfile.sizeof_dface_t;
			out[kk] = new $quake_model$msurface_t();
		}
		$quake_model.$loadmodel.surfaces = out;
		$quake_model.$loadmodel.numsurfaces = count;
		var color = $quake_model.$colors[$quake_model.$icolor++ % 8];
		for (surfnum = 0; surfnum < count; surfnum++) {
			out[surfnum].firstedge = in1[surfnum].firstedge;
			out[surfnum].numedges = in1[surfnum].numedges;
			out[surfnum].flags = 0;
			planenum = in1[surfnum].planenum;
			side = in1[surfnum].side;
			if (side !== 0) {
				out[surfnum].flags |= $quake_model.surF_PLANEBACK;
			}
			out[surfnum].plane = $quake_model.$loadmodel.planes[planenum];
			out[surfnum].color = color;
			color += 64;
			out[surfnum].texinfo = $quake_model.$loadmodel.texinfo[in1[surfnum].texinfo];
			$quake_model.$calcSurfaceExtents(out[surfnum]);
			// lighting info
			for (i = 0; i < $quake_bspfile.MAXLIGHTMAPS; i++) {
				out[surfnum].styles[i] = in1[surfnum].styles[i];
			}
			i = in1[surfnum].lightofs;
			if (i === -1) {
				out[surfnum].samples = null;
			}
			else {
				out[surfnum].samples = new $quake_bspfile$ByteBuffer($quake_model.$loadmodel.lightdata, i);
			}
			// set the drawing flags flag
			if (out[surfnum].texinfo.texture.name.startsWith('sky')) {
				out[surfnum].flags |= 36;
				continue;
			}
			if (out[surfnum].texinfo.texture.name.startsWith('*')) {
				out[surfnum].flags |= 48;
				for (i = 0; i < 2; i++) {
					out[surfnum].extents[i] = 16384;
					out[surfnum].texturemins[i] = -8192;
				}
				continue;
			}
		}
	};
	$quake_model.$mod_SetParent = function(node, parent) {
		node.parent = parent;
		if (node.contents < 0) {
			return;
		}
		var _node = Type.cast(node, $quake_model$mnode_t);
		$quake_model.$mod_SetParent(_node.children[0], _node);
		$quake_model.$mod_SetParent(_node.children[1], _node);
	};
	$quake_model.$mod_LoadNodes = function(l) {
		var i, j, count, p;
		var in1;
		var out;
		if (l.filelen % $quake_bspfile.sizeof_dnode_t !== 0) {
			$quake_sys_linux.sys_Error('MOD_LoadBmodel: funny lump size in ' + $quake_model.$loadmodel.name);
		}
		count = ss.Int32.div(l.filelen, $quake_bspfile.sizeof_dnode_t);
		var buf = new $quake_bspfile$ByteBuffer($quake_model.$mod_base, l.fileofs);
		in1 = new Array(count);
		out = new Array(count);
		for (var kk = 0; kk < count; kk++) {
			in1[kk] = $quake_bspfile$dnode_t.op_Implicit(buf);
			buf.ofs += $quake_bspfile.sizeof_dnode_t;
			out[kk] = new $quake_model$mnode_t();
		}
		$quake_model.$loadmodel.nodes = out;
		$quake_model.$loadmodel.numnodes = count;
		for (i = 0; i < count; i++) {
			for (j = 0; j < 3; j++) {
				out[i].minmaxs[j] = in1[i].mins[j];
				out[i].minmaxs[3 + j] = in1[i].maxs[j];
			}
			p = in1[i].planenum;
			out[i].plane = $quake_model.$loadmodel.planes[p];
			out[i].firstsurface = in1[i].firstface;
			out[i].numsurfaces = in1[i].numfaces;
			for (j = 0; j < 2; j++) {
				p = in1[i].children[j];
				if (p >= 0) {
					out[i].children[j] = $quake_model.$loadmodel.nodes[p];
				}
				else {
					out[i].children[j] = $quake_model.$loadmodel.leafs[-1 - p];
				}
			}
		}
		$quake_model.$mod_SetParent($quake_model.$loadmodel.nodes[0], null);
		// sets nodes and leafs
	};
	$quake_model.$mod_LoadLeafs = function(l) {
		var in1;
		var out;
		var i, j, count, p;
		if (l.filelen % $quake_bspfile.sizeof_dleaf_t !== 0) {
			$quake_sys_linux.sys_Error('MOD_LoadBmodel: funny lump size in ' + $quake_model.$loadmodel.name);
		}
		count = ss.Int32.div(l.filelen, $quake_bspfile.sizeof_dleaf_t);
		var buf = new $quake_bspfile$ByteBuffer($quake_model.$mod_base, l.fileofs);
		in1 = new Array(count);
		out = new Array(count);
		for (var kk = 0; kk < count; kk++) {
			in1[kk] = $quake_bspfile$dleaf_t.op_Implicit(buf);
			buf.ofs += $quake_bspfile.sizeof_dleaf_t;
			out[kk] = new $quake_model$mleaf_t();
		}
		$quake_model.$loadmodel.leafs = out;
		$quake_model.$loadmodel.numleafs = count;
		for (i = 0; i < count; i++) {
			for (j = 0; j < 3; j++) {
				out[i].minmaxs[j] = in1[i].mins[j];
				out[i].minmaxs[3 + j] = in1[i].maxs[j];
			}
			p = in1[i].contents;
			out[i].contents = p;
			out[i].firstmarksurface = new $Helper_helper$ObjectBuffer($quake_model.$loadmodel.marksurfaces, in1[i].firstmarksurface);
			out[i].nummarksurfaces = in1[i].nummarksurfaces;
			p = in1[i].visofs;
			if (p === -1) {
				out[i].compressed_vis = null;
			}
			else {
				out[i].compressed_vis = new $quake_bspfile$ByteBuffer($quake_model.$loadmodel.visdata, p);
			}
			out[i].efrags = null;
			for (j = 0; j < 4; j++) {
				out[i].ambient_sound_level[j] = in1[i].ambient_level[j];
			}
		}
	};
	$quake_model.$mod_LoadClipnodes = function(l) {
	};
	$quake_model.$mod_MakeHull0 = function() {
	};
	$quake_model.$mod_LoadMarksurfaces = function(l) {
		var i, j, count;
		var in1;
		var out;
		if (l.filelen % 2 !== 0) {
			$quake_sys_linux.sys_Error('MOD_LoadBmodel: funny lump size in ' + $quake_model.$loadmodel.name);
		}
		count = ss.Int32.div(l.filelen, 2);
		in1 = new Array(count);
		out = new Array(count);
		var ofs = l.fileofs;
		for (var kk = 0; kk < count; kk++) {
			in1[kk] = BitConverter.toInt16($quake_model.$mod_base, ofs);
			ofs += 2;
		}
		$quake_model.$loadmodel.marksurfaces = out;
		$quake_model.$loadmodel.nummarksurfaces = count;
		for (i = 0; i < count; i++) {
			j = in1[i];
			if (j >= $quake_model.$loadmodel.numsurfaces) {
				$quake_sys_linux.sys_Error('Mod_ParseMarksurfaces: bad surface number');
			}
			out[i] = $quake_model.$loadmodel.surfaces[j];
		}
	};
	$quake_model.$mod_LoadSurfedges = function(l) {
		var i, count;
		var out;
		if (l.filelen % 4 !== 0) {
			$quake_sys_linux.sys_Error('MOD_LoadBmodel: funny lump size in ' + $quake_model.$loadmodel.name);
		}
		count = ss.Int32.div(l.filelen, 4);
		out = new Array(count);
		var ofs = l.fileofs;
		for (var kk = 0; kk < count; kk++) {
			out[kk] = BitConverter.toInt32($quake_model.$mod_base, ofs);
			ofs += 4;
		}
		$quake_model.$loadmodel.surfedges = out;
		$quake_model.$loadmodel.numsurfedges = count;
	};
	$quake_model.$mod_LoadPlanes = function(l) {
		var i, j;
		var out;
		var in1;
		var count;
		var bits;
		if (l.filelen % $quake_bspfile.sizeof_dplane_t !== 0) {
			$quake_sys_linux.sys_Error('MOD_LoadBmodel: funny lump size in ' + $quake_model.$loadmodel.name);
		}
		count = ss.Int32.div(l.filelen, $quake_bspfile.sizeof_dplane_t);
		var buf = new $quake_bspfile$ByteBuffer($quake_model.$mod_base, l.fileofs);
		in1 = new Array(count);
		out = new Array(count);
		for (var kk = 0; kk < count; kk++) {
			in1[kk] = $quake_bspfile$dplane_t.op_Implicit(buf);
			buf.ofs += $quake_bspfile.sizeof_dplane_t;
			out[kk] = new $quake_model$mplane_t();
		}
		$quake_model.$loadmodel.planes = out;
		$quake_model.$loadmodel.numplanes = count;
		for (i = 0; i < count; i++) {
			bits = 0;
			for (j = 0; j < 3; j++) {
				out[i].normal[j] = in1[i].normal[j];
				if (out[i].normal[j] < 0) {
					bits |= 1 << j;
				}
			}
			out[i].dist = in1[i].dist;
			out[i].type = in1[i].type;
			out[i].signbits = bits;
		}
	};
	$quake_model.$radiusFromBounds = function(mins, maxs) {
		var i;
		var corner = new Array(3);
		for (i = 0; i < 3; i++) {
			corner[i] = ((Math.abs(mins[i]) > Math.abs(maxs[i])) ? Math.abs(mins[i]) : Math.abs(maxs[i]));
		}
		return $quake_mathlib.length$1(corner);
	};
	$quake_model.$mod_LoadBrushModel = function(mod, buffer) {
		var i, j;
		var header;
		var bm;
		$quake_model.$loadmodel.type = 0;
		header = $quake_bspfile$dheader_t.op_Implicit(buffer);
		i = header.version;
		if (i !== $quake_bspfile.BSPVERSION) {
			$quake_sys_linux.sys_Error('Mod_LoadBrushModel: ' + mod.name + ' has wrong version number (' + i + ' should be ' + $quake_bspfile.BSPVERSION + ')');
		}
		// swap all the lumps
		$quake_model.$mod_base = buffer;
		// load into heap
		$quake_model.$mod_LoadVertexes(header.lumps[$quake_bspfile.lumP_VERTEXES]);
		$quake_model.$mod_LoadEdges(header.lumps[$quake_bspfile.lumP_EDGES]);
		$quake_model.$mod_LoadSurfedges(header.lumps[$quake_bspfile.lumP_SURFEDGES]);
		$quake_model.$mod_LoadTextures(header.lumps[$quake_bspfile.lumP_TEXTURES]);
		$quake_model.$mod_LoadLighting(header.lumps[$quake_bspfile.lumP_LIGHTING]);
		$quake_model.$mod_LoadPlanes(header.lumps[$quake_bspfile.lumP_PLANES]);
		$quake_model.$mod_LoadTexinfo(header.lumps[$quake_bspfile.lumP_TEXINFO]);
		$quake_model.$mod_LoadFaces(header.lumps[$quake_bspfile.lumP_FACES]);
		$quake_model.$mod_LoadMarksurfaces(header.lumps[$quake_bspfile.lumP_MARKSURFACES]);
		$quake_model.$mod_LoadVisibility(header.lumps[$quake_bspfile.lumP_VISIBILITY]);
		$quake_model.$mod_LoadLeafs(header.lumps[$quake_bspfile.lumP_LEAFS]);
		$quake_model.$mod_LoadNodes(header.lumps[$quake_bspfile.lumP_NODES]);
		$quake_model.$mod_LoadClipnodes(header.lumps[$quake_bspfile.lumP_CLIPNODES]);
		$quake_model.$mod_LoadEntities(header.lumps[$quake_bspfile.lumP_ENTITIES]);
		$quake_model.$mod_LoadSubmodels(header.lumps[$quake_bspfile.lumP_MODELS]);
		$quake_model.$mod_MakeHull0();
		mod.numframes = 2;
		// regular and alternate animation
		mod.flags = 0;
		//
		// set up the submodels (FIXME: this is confusing)
		//
		for (i = 0; i < mod.numsubmodels; i++) {
			bm = mod.submodels[i];
			mod.hulls[0].firstclipnode = bm.headnode[0];
			for (j = 1; j < $quake_bspfile.maX_MAP_HULLS; j++) {
				mod.hulls[j].firstclipnode = bm.headnode[j];
				mod.hulls[j].lastclipnode = mod.numclipnodes - 1;
			}
			mod.firstmodelsurface = bm.firstface;
			mod.nummodelsurfaces = bm.numfaces;
			$quake_mathlib.vectorCopy(bm.maxs, mod.maxs);
			$quake_mathlib.vectorCopy(bm.mins, mod.mins);
			mod.radius = $quake_model.$radiusFromBounds(mod.mins, mod.maxs);
			mod.numleafs = bm.visleafs;
			if (i < mod.numsubmodels - 1) {
				// duplicate the basic information
				var name;
				name = '*' + (i + 1);
				$quake_model.$loadmodel = $quake_model.$mod_FindName(name);
				//			        *loadmodel = *mod;
				$quake_model.$loadmodel.clone(mod);
				$quake_model.$loadmodel.name = name;
				mod = $quake_model.$loadmodel;
			}
		}
	};
	$quake_model.$mod_LoadAliasFrame = function(pin, pframeindex, numv, pbboxmin, pbboxmax, pheader, name) {
		var pframe;
		var pinframe;
		var i, j;
		var pdaliasframe;
		pdaliasframe = $quake_model$daliasframe_t.op_Implicit(pin);
		name = pdaliasframe.name;
		for (i = 0; i < 3; i++) {
			// these are byte values, so we don't have to worry about
			// endianness
			pbboxmin.v[i] = pdaliasframe.bboxmin.v[i];
			pbboxmax.v[i] = pdaliasframe.bboxmax.v[i];
		}
		pin.ofs += $quake_model.sizeof_daliasframe_t;
		pframe = new Array(numv);
		pframeindex.$ = pframe;
		for (j = 0; j < numv; j++) {
			var k;
			pinframe = $quake_model$trivertx_t.op_Implicit(pin);
			// these are all byte values, so no need to deal with endianness
			pframe[j] = new $quake_model$trivertx_t();
			pframe[j].lightnormalindex = pinframe.lightnormalindex;
			for (k = 0; k < 3; k++) {
				pframe[j].v[k] = pinframe.v[k];
			}
			pin.ofs += $quake_model.sizeof_trivertx_t;
		}
	};
	$quake_model.$mod_LoadAliasGroup = function(pin, pframeindex, numv, pbboxmin, pbboxmax, pheader, name) {
		var pingroup;
		var paliasgroup;
		var i, numframes;
		var poutintervals;
		pingroup = $quake_model$daliasgroup_t.op_Implicit(pin);
		numframes = pingroup.numframes;
		paliasgroup = new $quake_model$maliasgroup_t();
		paliasgroup.frames = new Array(numframes);
		for (var kk = 0; kk < numframes; kk++) {
			paliasgroup.frames[kk] = new $quake_model$maliasgroupframedesc_t();
		}
		paliasgroup.numframes = numframes;
		for (i = 0; i < 3; i++) {
			// these are byte values, so we don't have to worry about endianness
			pbboxmin.v[i] = pingroup.bboxmin.v[i];
			pbboxmax.v[i] = pingroup.bboxmax.v[i];
		}
		pframeindex.$ = paliasgroup;
		pin.ofs += $quake_model.sizeof_daliasgroup_t;
		poutintervals = new Array(numframes);
		paliasgroup.intervals = poutintervals;
		for (i = 0; i < numframes; i++) {
			poutintervals[i] = BitConverter.toSingle(pin.buffer, pin.ofs);
			pin.ofs += 4;
			if (poutintervals[i] <= 0) {
				$quake_sys_linux.sys_Error('Mod_LoadAliasGroup: interval<=0');
			}
		}
		for (i = 0; i < numframes; i++) {
			var frame_temp = { $: new Object() };
			$quake_model.$mod_LoadAliasFrame(pin, frame_temp, numv, paliasgroup.frames[i].bboxmin, paliasgroup.frames[i].bboxmax, pheader, name);
			paliasgroup.frames[i].frame = frame_temp.$;
		}
	};
	$quake_model.$mod_LoadAliasSkin = function(pin, pskinindex, skinsize, pheader) {
		var i;
		var pskin;
		pskin = new Uint8Array(skinsize * $quake_render.r_pixbytes);
		pskinindex = pskin;
		if ($quake_render.r_pixbytes === 1) {
			$System_Buffer.blockCopy$1(pin.buffer, pin.ofs, pskin, 0, skinsize);
		}
		else if ($quake_render.r_pixbytes === 2) {
		}
		else {
			$quake_sys_linux.sys_Error('Mod_LoadAliasSkin: driver set invalid r_pixbytes: ' + $quake_render.r_pixbytes + '\n');
		}
		pin.ofs += skinsize;
		return pskinindex;
	};
	$quake_model.$mod_LoadAliasSkinGroup = function(pin, pskinindex, skinsize, pheader) {
		var pinskingroup;
		var paliasskingroup;
		var i, numskins;
		var poutskinintervals;
		pinskingroup = $quake_model$daliasskingroup_t.op_Implicit(pin);
		numskins = pinskingroup.numskins;
		paliasskingroup = new $quake_model$maliasskingroup_t();
		paliasskingroup.skindescs = new Array(numskins);
		for (var kk = 0; kk < numskins; kk++) {
			paliasskingroup.skindescs[kk] = new $quake_model$maliasskindesc_t();
		}
		paliasskingroup.numskins = numskins;
		pskinindex = paliasskingroup;
		pin.ofs += $quake_model.sizeof_daliasskingroup_t;
		poutskinintervals = new Array(numskins);
		paliasskingroup.intervals = poutskinintervals;
		for (i = 0; i < numskins; i++) {
			poutskinintervals[i] = BitConverter.toSingle(pin.buffer, pin.ofs);
			pin.ofs += 4;
			if (poutskinintervals[i] <= 0) {
				$quake_sys_linux.sys_Error('Mod_LoadAliasSkinGroup: interval<=0');
			}
		}
		for (i = 0; i < numskins; i++) {
			paliasskingroup.skindescs[i].skin = $quake_model.$mod_LoadAliasSkin(pin, paliasskingroup.skindescs[i].skin, skinsize, pheader);
		}
		return pskinindex;
	};
	$quake_model.$mod_LoadAliasModel = function(mod, buffer) {
		var i;
		var pmodel, pinmodel;
		var pstverts;
		var pinstverts;
		var pheader;
		var ptri;
		var pintriangles;
		var version, numframes, numskins;
		var pframetype;
		var pskintype;
		var pskindesc;
		var skinsize;
		var start, end, total;
		var aux = new $quake_bspfile$ByteBuffer(buffer, 0);
		pinmodel = $quake_model$mdl_t.op_Implicit(buffer);
		version = pinmodel.version;
		if (version !== $quake_model.aliaS_VERSION) {
			$quake_sys_linux.sys_Error(mod.name + ' has wrong version number (' + version + ' should be ' + $quake_model.aliaS_VERSION + ')');
		}
		//
		// allocate space for a working header, plus all the data except the frames,
		// skin and group info
		//
		pheader = new $quake_model$aliashdr_t();
		pmodel = new $quake_model$mdl_t();
		//	mod.cache = pheader;
		mod.flags = pinmodel.flags;
		//
		// endian-adjust and copy the data, starting with the alias model header
		//
		pmodel.boundingradius = pinmodel.boundingradius;
		pmodel.numskins = pinmodel.numskins;
		pmodel.skinwidth = pinmodel.skinwidth;
		pmodel.skinheight = pinmodel.skinheight;
		if (pmodel.skinheight > $quake_draw.maX_LBM_HEIGHT) {
			$quake_sys_linux.sys_Error('model ' + mod.name + ' has a skin taller than ' + $quake_draw.maX_LBM_HEIGHT);
		}
		pmodel.numverts = pinmodel.numverts;
		if (pmodel.numverts <= 0) {
			$quake_sys_linux.sys_Error('model ' + mod.name + ' has no vertices');
		}
		if (pmodel.numverts > $quake_render.MAXALIASVERTS) {
			$quake_sys_linux.sys_Error('model ' + mod.name + ' has too many vertices');
		}
		pmodel.numtris = pinmodel.numtris;
		if (pmodel.numtris <= 0) {
			$quake_sys_linux.sys_Error('model ' + mod.name + ' has no triangles');
		}
		pmodel.numframes = pinmodel.numframes;
		pmodel.size = pinmodel.size * $quake_render.aliaS_BASE_SIZE_RATIO;
		mod.synctype = pinmodel.synctype;
		mod.numframes = pmodel.numframes;
		for (i = 0; i < 3; i++) {
			pmodel.scale[i] = pinmodel.scale[i];
			pmodel.scale_origin[i] = pinmodel.scale_origin[i];
			pmodel.eyeposition[i] = pinmodel.eyeposition[i];
		}
		numskins = pmodel.numskins;
		numframes = pmodel.numframes;
		if ((pmodel.skinwidth & 3) !== 0) {
			$quake_sys_linux.sys_Error('Mod_LoadAliasModel: skinwidth not multiple of 4');
		}
		pheader.model = pmodel;
		//
		// load the skins
		//
		skinsize = pmodel.skinheight * pmodel.skinwidth;
		if (numskins < 1) {
			$quake_sys_linux.sys_Error('Mod_LoadAliasModel: Invalid # of skins: ' + numskins + '\n');
		}
		aux.ofs += $quake_model.sizeof_mdl_t;
		pskindesc = new Array(numskins);
		for (var kk = 0; kk < numskins; kk++) {
			pskindesc[kk] = new $quake_model$maliasskindesc_t();
		}
		pheader.skindesc = pskindesc;
		for (i = 0; i < numskins; i++) {
			var skintype;
			pskintype = $quake_model$daliasskintype_t.op_Implicit(aux);
			skintype = pskintype.type;
			pskindesc[i].type = skintype;
			if (skintype === 0) {
				aux.ofs += $quake_model.sizeof_daliasskintype_t;
				pskindesc[i].skin = $quake_model.$mod_LoadAliasSkin(aux, pskindesc[i].skin, skinsize, pheader);
			}
			else {
				aux.ofs += $quake_model.sizeof_daliasskintype_t;
				pskindesc[i].skin = $quake_model.$mod_LoadAliasSkinGroup(aux, pskindesc[i].skin, skinsize, pheader);
			}
		}
		//
		// set base s and t vertices
		//
		pstverts = new Array(pmodel.numverts);
		pheader.stverts = pstverts;
		for (i = 0; i < pmodel.numverts; i++) {
			pinstverts = $quake_model$stvert_t.op_Implicit(aux);
			pstverts[i] = new $quake_model$stvert_t();
			pstverts[i].onseam = pinstverts.onseam;
			// put s and t in 16.16 format
			pstverts[i].s = pinstverts.s << 16;
			pstverts[i].t = pinstverts.t << 16;
			aux.ofs += $quake_model.sizeof_stvert_t;
		}
		//
		// set up the triangles
		//
		ptri = new Array(pmodel.numtris);
		pheader.triangles = ptri;
		for (i = 0; i < pmodel.numtris; i++) {
			var j;
			pintriangles = $quake_model$dtriangle_t.op_Implicit(aux);
			ptri[i] = new $quake_model$mtriangle_t();
			ptri[i].facesfront = pintriangles.facesfront;
			for (j = 0; j < 3; j++) {
				ptri[i].vertindex[j] = pintriangles.vertindex[j];
			}
			aux.ofs += $quake_model.sizeof_dtriangle_t;
		}
		//
		// load the frames
		//
		if (numframes < 1) {
			$quake_sys_linux.sys_Error('Mod_LoadAliasModel: Invalid # of frames: ' + numframes + '\n');
		}
		pheader.frames = new Array(numframes);
		for (i = 0; i < numframes; i++) {
			var frametype;
			pframetype = $quake_model$daliasframetype_t.op_Implicit(aux);
			frametype = pframetype.type;
			pheader.frames[i] = new $quake_model$maliasframedesc_t();
			pheader.frames[i].type = frametype;
			if (frametype === 0) {
				aux.ofs += $quake_model.sizeof_daliasframetype_t;
				var frame_temp = { $: new Object() };
				$quake_model.$mod_LoadAliasFrame(aux, frame_temp, pmodel.numverts, pheader.frames[i].bboxmin, pheader.frames[i].bboxmax, pheader, pheader.frames[i].name);
				pheader.frames[i].frame = frame_temp.$;
			}
			else {
				aux.ofs += $quake_model.sizeof_daliasframetype_t;
				var frame_temp1 = { $: new Object() };
				$quake_model.$mod_LoadAliasGroup(aux, frame_temp1, pmodel.numverts, pheader.frames[i].bboxmin, pheader.frames[i].bboxmax, pheader, pheader.frames[i].name);
				pheader.frames[i].frame = frame_temp1.$;
			}
		}
		mod.type = 2;
		// FIXME: do this right
		mod.mins[0] = mod.mins[1] = mod.mins[2] = -16;
		mod.maxs[0] = mod.maxs[1] = mod.maxs[2] = 16;
		//
		// move the complete, relocatable alias model to the cache
		//	
		mod.cache = pheader;
	};
	$quake_model.$mod_LoadSpriteFrame = function(pin, ppframe) {
		var pinframe;
		var pspriteframe;
		var width, height, size;
		var origin = new Array(2);
		pinframe = $quake_model$dspriteframe_t.op_Implicit(pin);
		width = pinframe.width;
		height = pinframe.height;
		size = width * height;
		pspriteframe = new $quake_model$mspriteframe_t();
		pspriteframe.pixels = new Uint8Array(size * $quake_render.r_pixbytes);
		ppframe = pspriteframe;
		pspriteframe.width = width;
		pspriteframe.height = height;
		origin[0] = pinframe.origin[0];
		origin[1] = pinframe.origin[1];
		pspriteframe.up = origin[1];
		pspriteframe.down = origin[1] - height;
		pspriteframe.left = origin[0];
		pspriteframe.right = width + origin[0];
		if ($quake_render.r_pixbytes === 1) {
			pin.ofs += $quake_model.sizeof_dspriteframe_t;
			for (var kk = 0; kk < size; kk++) {
				pspriteframe.pixels[kk] = pin.buffer[pin.ofs + kk];
			}
		}
		else if ($quake_render.r_pixbytes === 2) {
		}
		else {
			$quake_sys_linux.sys_Error('Mod_LoadSpriteFrame: driver set invalid r_pixbytes: ' + $quake_render.r_pixbytes + '\n');
		}
		pin.ofs += size;
	};
	$quake_model.$mod_LoadSpriteGroup = function(pin, ppframe) {
		var pingroup;
		var pspritegroup;
		var i, numframes;
		var poutintervals;
		pingroup = $quake_model$dspritegroup_t.op_Implicit(pin);
		numframes = pingroup.numframes;
		pspritegroup = new $quake_model$mspritegroup_t();
		pspritegroup.frames = new Array(numframes);
		for (var kk = 0; kk < numframes; kk++) {
			pspritegroup.frames[kk] = new $quake_model$mspriteframe_t();
		}
		pspritegroup.numframes = numframes;
		ppframe = pspritegroup;
		pin.ofs += $quake_model.sizeof_dspritegroup_t;
		poutintervals = new Array(numframes);
		pspritegroup.intervals = poutintervals;
		for (i = 0; i < numframes; i++) {
			poutintervals[i] = BitConverter.toSingle(pin.buffer, pin.ofs);
			pin.ofs += 4;
			if (poutintervals[i] <= 0) {
				$quake_sys_linux.sys_Error('Mod_LoadSpriteGroup: interval<=0');
			}
		}
		for (i = 0; i < numframes; i++) {
			$quake_model.$mod_LoadSpriteFrame(pin, pspritegroup.frames[i]);
		}
	};
	$quake_model.$mod_LoadSpriteModel = function(mod, buffer) {
		var i;
		var version;
		var pin;
		var psprite;
		var numframes;
		var pframetype;
		var aux = new $quake_bspfile$ByteBuffer(buffer, 0);
		pin = $quake_model$dsprite_t.op_Implicit(buffer);
		version = pin.version;
		if (version !== $quake_model.spritE_VERSION) {
			$quake_sys_linux.sys_Error(mod.name + ' has wrong version number (' + version + ' should be ' + $quake_model.spritE_VERSION + ')');
		}
		numframes = pin.numframes;
		psprite = new $quake_model$msprite_t();
		psprite.frames = new Array(numframes);
		for (var kk = 0; kk < numframes; kk++) {
			psprite.frames[kk] = new $quake_model$mspriteframedesc_t();
		}
		mod.cache = psprite;
		psprite.type = pin.type;
		psprite.maxwidth = pin.width;
		psprite.maxheight = pin.height;
		psprite.beamlength = pin.beamlength;
		mod.synctype = pin.synctype;
		psprite.numframes = numframes;
		mod.mins[0] = mod.mins[1] = ss.Int32.div(-psprite.maxwidth, 2);
		mod.maxs[0] = mod.maxs[1] = ss.Int32.div(psprite.maxwidth, 2);
		mod.mins[2] = ss.Int32.div(-psprite.maxheight, 2);
		mod.maxs[2] = ss.Int32.div(psprite.maxheight, 2);
		//
		// load the frames
		//
		if (numframes < 1) {
			$quake_sys_linux.sys_Error('Mod_LoadSpriteModel: Invalid # of frames: ' + numframes + '\n');
		}
		mod.numframes = numframes;
		mod.flags = 0;
		aux.ofs += $quake_model.sizeof_dsprite_t;
		for (i = 0; i < numframes; i++) {
			var frametype;
			pframetype = $quake_model$dspriteframetype_t.op_Implicit(aux);
			frametype = pframetype.type;
			psprite.frames[i].type = frametype;
			if (frametype === 0) {
				aux.ofs += $quake_model.sizeof_dspriteframetype_t;
				$quake_model.$mod_LoadSpriteFrame(aux, psprite.frames[i].frameptr);
			}
			else {
				aux.ofs += $quake_model.sizeof_dspriteframetype_t;
				$quake_model.$mod_LoadSpriteGroup(aux, psprite.frames[i].frameptr);
			}
		}
		mod.type = 1;
	};
	$quake_model.mod_Print = function() {
		var i;
		var cached;
		var mod;
		$quake_console.con_Printf('Cached models:\n');
		cached = 0;
		for (i = 0; i < $quake_model.$mod_numknown; i++) {
			mod = $quake_model.$mod_known[i];
			if (ss.isValue(mod.cache)) {
				$quake_console.con_Printf(String.format('CAC4ED{0:00} : {1}', cached++, mod.name));
			}
			else {
				$quake_console.con_Printf('00000000 : ' + mod.name);
			}
			if ((mod.needload & $quake_model.nL_UNREFERENCED) !== 0) {
				$quake_console.con_Printf(' (!R)');
			}
			if ((mod.needload & $quake_model.nL_NEEDS_LOADED) !== 0) {
				$quake_console.con_Printf(' (!P)');
			}
			$quake_console.con_Printf('\n');
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.aliasframetype_t
	var $quake_model$aliasframetype_t = function() {
	};
	$quake_model$aliasframetype_t.prototype = { aliaS_SINGLE: 0, aliaS_GROUP: 1 };
	Type.registerEnum(global, 'quake.model$aliasframetype_t', $quake_model$aliasframetype_t, false);
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.aliashdr_t
	var $quake_model$aliashdr_t = function() {
		this.model = null;
		this.stverts = null;
		this.skindesc = null;
		this.triangles = null;
		this.frames = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.aliasskintype_t
	var $quake_model$aliasskintype_t = function() {
	};
	$quake_model$aliasskintype_t.prototype = { aliaS_SKIN_SINGLE: 0, aliaS_SKIN_GROUP: 1 };
	Type.registerEnum(global, 'quake.model$aliasskintype_t', $quake_model$aliasskintype_t, false);
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.daliasframe_t
	var $quake_model$daliasframe_t = function() {
		this.bboxmin = new $quake_model$trivertx_t();
		this.bboxmax = new $quake_model$trivertx_t();
		this.name = $System_StringExtensions.stringOfLength(16);
	};
	$quake_model$daliasframe_t.op_Implicit = function(buf) {
		var ofs = buf.ofs;
		var daliasframe = new $quake_model$daliasframe_t();
		daliasframe.bboxmin = $quake_model$trivertx_t.op_Implicit(buf);
		buf.ofs += $quake_model.sizeof_trivertx_t;
		daliasframe.bboxmax = $quake_model$trivertx_t.op_Implicit(buf);
		buf.ofs += $quake_model.sizeof_trivertx_t;
		var bufOfsTemp = { $: buf.ofs };
		daliasframe.name = $quake_common.parseString$1(buf.buffer, bufOfsTemp, 16);
		buf.ofs = bufOfsTemp.$;
		buf.ofs = ofs;
		return daliasframe;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.daliasframetype_t
	var $quake_model$daliasframetype_t = function() {
		this.type = 0;
	};
	$quake_model$daliasframetype_t.op_Implicit = function(buf) {
		var ofs = { $: buf.ofs };
		var daliasframetype = new $quake_model$daliasframetype_t();
		daliasframetype.type = $quake_common.parseInt(buf.buffer, ofs);
		return daliasframetype;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.daliasgroup_t
	var $quake_model$daliasgroup_t = function() {
		this.numframes = 0;
		this.bboxmin = new $quake_model$trivertx_t();
		this.bboxmax = new $quake_model$trivertx_t();
	};
	$quake_model$daliasgroup_t.op_Implicit = function(buf) {
		var ofs = buf.ofs;
		var daliasgroup = new $quake_model$daliasgroup_t();
		var bufOfsTemp = { $: buf.ofs };
		daliasgroup.numframes = $quake_common.parseInt(buf.buffer, bufOfsTemp);
		buf.ofs = bufOfsTemp.$;
		daliasgroup.bboxmin = $quake_model$trivertx_t.op_Implicit(buf);
		buf.ofs += $quake_model.sizeof_trivertx_t;
		daliasgroup.bboxmax = $quake_model$trivertx_t.op_Implicit(buf);
		buf.ofs += $quake_model.sizeof_trivertx_t;
		buf.ofs = ofs;
		return daliasgroup;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.daliasskingroup_t
	var $quake_model$daliasskingroup_t = function() {
		this.numskins = 0;
	};
	$quake_model$daliasskingroup_t.op_Implicit = function(buf) {
		var ofs = { $: buf.ofs };
		var daliasskingroup = new $quake_model$daliasskingroup_t();
		daliasskingroup.numskins = $quake_common.parseInt(buf.buffer, ofs);
		return daliasskingroup;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.daliasskintype_t
	var $quake_model$daliasskintype_t = function() {
		this.type = 0;
	};
	$quake_model$daliasskintype_t.op_Implicit = function(buf) {
		var ofs = { $: buf.ofs };
		var daliasskintype = new $quake_model$daliasskintype_t();
		daliasskintype.type = $quake_common.parseInt(buf.buffer, ofs);
		return daliasskintype;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.dsprite_t
	var $quake_model$dsprite_t = function() {
		this.$ident = 0;
		this.version = 0;
		this.type = 0;
		this.$boundingradius = 0;
		this.width = 0;
		this.height = 0;
		this.numframes = 0;
		this.beamlength = 0;
		this.synctype = 0;
	};
	$quake_model$dsprite_t.op_Implicit = function(buf) {
		var ofs = { $: 0 };
		var dsprite = new $quake_model$dsprite_t();
		dsprite.$ident = $quake_common.parseInt(buf, ofs);
		dsprite.version = $quake_common.parseInt(buf, ofs);
		dsprite.type = $quake_common.parseInt(buf, ofs);
		dsprite.$boundingradius = BitConverter.toSingle(buf, ofs.$);
		ofs.$ += 4;
		dsprite.width = $quake_common.parseInt(buf, ofs);
		dsprite.height = $quake_common.parseInt(buf, ofs);
		dsprite.numframes = $quake_common.parseInt(buf, ofs);
		dsprite.beamlength = BitConverter.toSingle(buf, ofs.$);
		ofs.$ += 4;
		dsprite.synctype = $quake_common.parseInt(buf, ofs);
		return dsprite;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.dspriteframe_t
	var $quake_model$dspriteframe_t = function() {
		this.origin = new Array(2);
		this.width = 0;
		this.height = 0;
	};
	$quake_model$dspriteframe_t.op_Implicit = function(buf) {
		var ofs = { $: buf.ofs };
		var dspriteframe = new $quake_model$dspriteframe_t();
		dspriteframe.origin[0] = $quake_common.parseInt(buf.buffer, ofs);
		dspriteframe.origin[1] = $quake_common.parseInt(buf.buffer, ofs);
		dspriteframe.width = $quake_common.parseInt(buf.buffer, ofs);
		dspriteframe.height = $quake_common.parseInt(buf.buffer, ofs);
		return dspriteframe;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.dspriteframetype_t
	var $quake_model$dspriteframetype_t = function() {
		this.type = 0;
	};
	$quake_model$dspriteframetype_t.op_Implicit = function(buf) {
		var ofs = { $: buf.ofs };
		var dspriteframetype = new $quake_model$dspriteframetype_t();
		dspriteframetype.type = $quake_common.parseInt(buf.buffer, ofs);
		return dspriteframetype;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.dspritegroup_t
	var $quake_model$dspritegroup_t = function() {
		this.numframes = 0;
	};
	$quake_model$dspritegroup_t.op_Implicit = function(buf) {
		var ofs = { $: buf.ofs };
		var dspritegroup = new $quake_model$dspritegroup_t();
		dspritegroup.numframes = $quake_common.parseInt(buf.buffer, ofs);
		return dspritegroup;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.dspriteinterval_t
	var $quake_model$dspriteinterval_t = function() {
		this.$interval = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.dtriangle_t
	var $quake_model$dtriangle_t = function() {
		this.facesfront = 0;
		this.vertindex = new Array(3);
	};
	$quake_model$dtriangle_t.op_Implicit = function(buf) {
		var ofs = { $: buf.ofs };
		var dtriangle = new $quake_model$dtriangle_t();
		dtriangle.facesfront = $quake_common.parseInt(buf.buffer, ofs);
		for (var i = 0; i < 3; i++) {
			dtriangle.vertindex[i] = $quake_common.parseInt(buf.buffer, ofs);
		}
		return dtriangle;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.hull_t
	var $quake_model$hull_t = function() {
		this.$planes = null;
		this.firstclipnode = 0;
		this.lastclipnode = 0;
		this.$clip_mins = new Array(3);
		this.$clip_maxs = new Array(3);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.maliasframedesc_t
	var $quake_model$maliasframedesc_t = function() {
		this.type = 0;
		this.bboxmin = new $quake_model$trivertx_t();
		this.bboxmax = new $quake_model$trivertx_t();
		this.frame = null;
		this.name = $System_StringExtensions.stringOfLength(16);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.maliasgroup_t
	var $quake_model$maliasgroup_t = function() {
		this.numframes = 0;
		this.intervals = null;
		this.frames = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.maliasgroupframedesc_t
	var $quake_model$maliasgroupframedesc_t = function() {
		this.bboxmin = new $quake_model$trivertx_t();
		this.bboxmax = new $quake_model$trivertx_t();
		this.frame = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.maliasskindesc_t
	var $quake_model$maliasskindesc_t = function() {
		this.type = 0;
		this.pcachespot = null;
		this.skin = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.maliasskingroup_t
	var $quake_model$maliasskingroup_t = function() {
		this.numskins = 0;
		this.intervals = null;
		this.skindescs = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.mdl_t
	var $quake_model$mdl_t = function() {
		this.ident = 0;
		this.version = 0;
		this.scale = new Array(3);
		this.scale_origin = new Array(3);
		this.boundingradius = 0;
		this.eyeposition = new Array(3);
		this.numskins = 0;
		this.skinwidth = 0;
		this.skinheight = 0;
		this.numverts = 0;
		this.numtris = 0;
		this.numframes = 0;
		this.synctype = 0;
		this.flags = 0;
		this.size = 0;
	};
	$quake_model$mdl_t.op_Implicit = function(buf) {
		var kk;
		var ofs = { $: 0 };
		var mdl = new $quake_model$mdl_t();
		mdl.ident = $quake_common.parseInt(buf, ofs);
		mdl.version = $quake_common.parseInt(buf, ofs);
		for (kk = 0; kk < 3; kk++) {
			mdl.scale[kk] = BitConverter.toSingle(buf, ofs.$);
			ofs.$ += 4;
		}
		for (kk = 0; kk < 3; kk++) {
			mdl.scale_origin[kk] = BitConverter.toSingle(buf, ofs.$);
			ofs.$ += 4;
		}
		mdl.boundingradius = BitConverter.toSingle(buf, ofs.$);
		ofs.$ += 4;
		for (kk = 0; kk < 3; kk++) {
			mdl.eyeposition[kk] = BitConverter.toSingle(buf, ofs.$);
			ofs.$ += 4;
		}
		mdl.numskins = $quake_common.parseInt(buf, ofs);
		mdl.skinwidth = $quake_common.parseInt(buf, ofs);
		mdl.skinheight = $quake_common.parseInt(buf, ofs);
		mdl.numverts = $quake_common.parseInt(buf, ofs);
		mdl.numtris = $quake_common.parseInt(buf, ofs);
		mdl.numframes = $quake_common.parseInt(buf, ofs);
		mdl.synctype = $quake_common.parseInt(buf, ofs);
		mdl.flags = $quake_common.parseInt(buf, ofs);
		mdl.size = BitConverter.toSingle(buf, ofs.$);
		ofs.$ += 4;
		return mdl;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.medge_t
	var $quake_model$medge_t = function() {
		this.v = new Array(2);
		this.cachededgeoffset = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.mleaf_t
	var $quake_model$mleaf_t = function() {
		this.compressed_vis = null;
		this.efrags = null;
		this.firstmarksurface = null;
		this.nummarksurfaces = 0;
		this.key = 0;
		this.ambient_sound_level = new Array($quake_bspfile.nuM_AMBIENTS);
		$quake_model$node_or_leaf_t.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.mnode_t
	var $quake_model$mnode_t = function() {
		this.plane = null;
		this.children = new Array(2);
		this.firstsurface = 0;
		this.numsurfaces = 0;
		$quake_model$node_or_leaf_t.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.model_t
	var $quake_model$model_t = function() {
		this.name = null;
		this.needload = 0;
		this.type = 0;
		this.numframes = 0;
		this.synctype = 0;
		this.flags = 0;
		this.mins = new Array(3);
		this.maxs = new Array(3);
		this.radius = 0;
		this.firstmodelsurface = 0;
		this.nummodelsurfaces = 0;
		this.numsubmodels = 0;
		this.submodels = null;
		this.numplanes = 0;
		this.planes = null;
		this.numleafs = 0;
		this.leafs = null;
		this.numvertexes = 0;
		this.vertexes = null;
		this.numedges = 0;
		this.edges = null;
		this.numnodes = 0;
		this.nodes = null;
		this.numtexinfo = 0;
		this.texinfo = null;
		this.numsurfaces = 0;
		this.surfaces = null;
		this.numsurfedges = 0;
		this.surfedges = null;
		this.numclipnodes = 0;
		this.clipnodes = null;
		this.nummarksurfaces = 0;
		this.marksurfaces = null;
		this.hulls = new Array($quake_bspfile.maX_MAP_HULLS);
		this.numtextures = 0;
		this.textures = null;
		this.visdata = null;
		this.lightdata = null;
		this.entities = null;
		this.cache = null;
		for (var kk = 0; kk < $quake_bspfile.maX_MAP_HULLS; kk++) {
			this.hulls[kk] = new $quake_model$hull_t();
		}
	};
	$quake_model$model_t.prototype = {
		clone: function(model) {
			this.name = model.name;
			this.needload = model.needload;
			this.type = model.type;
			this.numframes = model.numframes;
			this.flags = model.flags;
			this.mins = model.mins.clone();
			this.maxs = model.maxs.clone();
			this.radius = model.radius;
			this.firstmodelsurface = model.firstmodelsurface;
			this.nummodelsurfaces = model.nummodelsurfaces;
			this.numsubmodels = model.numsubmodels;
			this.submodels = model.submodels;
			this.numplanes = model.numplanes;
			this.planes = model.planes;
			this.numleafs = model.numleafs;
			this.leafs = model.leafs;
			this.numvertexes = model.numvertexes;
			this.vertexes = model.vertexes;
			this.numedges = model.numedges;
			this.edges = model.edges;
			this.numnodes = model.numnodes;
			this.nodes = model.nodes;
			this.numtexinfo = model.numtexinfo;
			this.texinfo = model.texinfo;
			this.numsurfaces = model.numsurfaces;
			this.surfaces = model.surfaces;
			this.numsurfedges = model.numsurfedges;
			this.surfedges = model.surfedges;
			this.numclipnodes = model.numclipnodes;
			this.clipnodes = model.clipnodes;
			this.nummarksurfaces = model.nummarksurfaces;
			this.marksurfaces = model.marksurfaces;
			this.hulls = model.hulls;
			this.numtextures = model.numtextures;
			this.textures = model.textures;
			this.visdata = model.visdata;
			this.lightdata = model.lightdata;
			this.entities = model.entities;
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.modtype_t
	var $quake_model$modtype_t = function() {
	};
	$quake_model$modtype_t.prototype = { mod_brush: 0, mod_sprite: 1, mod_alias: 2 };
	Type.registerEnum(global, 'quake.model$modtype_t', $quake_model$modtype_t, false);
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.mplane_t
	var $quake_model$mplane_t = function() {
		this.normal = new Array(3);
		this.dist = 0;
		this.type = 0;
		this.signbits = 0;
		this.$pad = new Array(2);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.msprite_t
	var $quake_model$msprite_t = function() {
		this.type = 0;
		this.maxwidth = 0;
		this.maxheight = 0;
		this.numframes = 0;
		this.beamlength = 0;
		this.frames = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.mspriteframe_t
	var $quake_model$mspriteframe_t = function() {
		this.width = 0;
		this.height = 0;
		this.up = 0;
		this.down = 0;
		this.left = 0;
		this.right = 0;
		this.pixels = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.mspriteframedesc_t
	var $quake_model$mspriteframedesc_t = function() {
		this.type = 0;
		this.frameptr = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.mspritegroup_t
	var $quake_model$mspritegroup_t = function() {
		this.numframes = 0;
		this.intervals = null;
		this.frames = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.msurface_t
	var $quake_model$msurface_t = function() {
		this.visframe = 0;
		this.dlightframe = 0;
		this.dlightbits = 0;
		this.plane = null;
		this.flags = 0;
		this.firstedge = 0;
		this.numedges = 0;
		this.cachespots = new Array($quake_bspfile.MIPLEVELS);
		this.texturemins = new Array(2);
		this.extents = new Array(2);
		this.texinfo = null;
		this.styles = new Array($quake_bspfile.MAXLIGHTMAPS);
		this.samples = null;
		this.color = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.mtexinfo_t
	var $quake_model$mtexinfo_t = function() {
		this.vecs = [new Array(4), new Array(4)];
		this.mipadjust = 0;
		this.texture = null;
		this.flags = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.mtriangle_t
	var $quake_model$mtriangle_t = function() {
		this.facesfront = 0;
		this.vertindex = new Array(3);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.mvertex_t
	var $quake_model$mvertex_t = function() {
		this.position = new Array(3);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.node_or_leaf_t
	var $quake_model$node_or_leaf_t = function() {
		this.contents = 0;
		this.visframe = 0;
		this.minmaxs = new Array(6);
		this.parent = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.spriteframetype_t
	var $quake_model$spriteframetype_t = function() {
	};
	$quake_model$spriteframetype_t.prototype = { spR_SINGLE: 0, spR_GROUP: 1 };
	Type.registerEnum(global, 'quake.model$spriteframetype_t', $quake_model$spriteframetype_t, false);
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.stvert_t
	var $quake_model$stvert_t = function() {
		this.onseam = 0;
		this.s = 0;
		this.t = 0;
	};
	$quake_model$stvert_t.op_Implicit = function(buf) {
		var ofs = { $: buf.ofs };
		var stvert = new $quake_model$stvert_t();
		stvert.onseam = $quake_common.parseInt(buf.buffer, ofs);
		stvert.s = $quake_common.parseInt(buf.buffer, ofs);
		stvert.t = $quake_common.parseInt(buf.buffer, ofs);
		return stvert;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.synctype_t
	var $quake_model$synctype_t = function() {
	};
	$quake_model$synctype_t.prototype = { sT_SYNC: 0, sT_RAND: 1 };
	Type.registerEnum(global, 'quake.model$synctype_t', $quake_model$synctype_t, false);
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.texture_t
	var $quake_model$texture_t = function() {
		this.name = $System_StringExtensions.stringOfLength(16);
		this.width = 0;
		this.height = 0;
		this.anim_total = 0;
		this.anim_min = 0;
		this.anim_max = 0;
		this.anim_next = null;
		this.alternate_anims = null;
		this.offsets = new Array($quake_bspfile.MIPLEVELS);
		this.pixels = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.model.trivertx_t
	var $quake_model$trivertx_t = function() {
		this.v = new Array(3);
		this.lightnormalindex = 0;
	};
	$quake_model$trivertx_t.op_Implicit = function(buf) {
		var ofs = buf.ofs;
		var trivertx = new $quake_model$trivertx_t();
		for (var i = 0; i < 3; i++) {
			trivertx.v[i] = buf.buffer[ofs++];
		}
		trivertx.lightnormalindex = buf.buffer[ofs];
		return trivertx;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.net
	var $quake_net = function() {
		this.$serialAvailable = false;
		this.$ipxAvailable = false;
		this.$tcpipAvailable = false;
	};
	$quake_net.prototype = {
		$neT_Shutdown: function() {
			var sock;
			$quake_net.$setNetTime();
			for (sock = $quake_net.$net_activeSockets; ss.isValue(sock); sock = sock.next) {
				$quake_net.neT_Close(sock);
			}
			//
			// shutdown the drivers
			//
			for ($quake_net.$net_driverlevel = 0; $quake_net.$net_driverlevel < $quake_net.$net_numdrivers; $quake_net.$net_driverlevel++) {
				if ($quake_net.$net_drivers[$quake_net.$net_driverlevel].initialized === true) {
					$quake_net.$net_drivers[$quake_net.$net_driverlevel].delegate_Shutdown();
					$quake_net.$net_drivers[$quake_net.$net_driverlevel].initialized = false;
				}
			}
		}
	};
	$quake_net.$loop_Init = function() {
		if ($quake_client.cls.state === 0) {
			return -1;
		}
		return 0;
	};
	$quake_net.$loop_Shutdown = function() {
	};
	$quake_net.$loop_Listen = function(state) {
	};
	$quake_net.$loop_SearchForHosts = function(xmit) {
		if (!$quake_server.sv.active) {
			return;
		}
		$quake_net.$hostCacheCount = 1;
		if ($quake_net.hostname._string.compareTo('UNNAMED') === 0) {
			$quake_net.$hostcache[0].name = 'local';
		}
		else {
			$quake_net.$hostcache[0].name = $quake_net.hostname._string;
		}
		$quake_net.$hostcache[0].map = $quake_server.sv.name;
		$quake_net.$hostcache[0].users = $quake_net.net_activeconnections;
		$quake_net.$hostcache[0].maxusers = $quake_server.svs.maxclients;
		$quake_net.$hostcache[0].driver = $quake_net.$net_driverlevel;
		$quake_net.$hostcache[0].cname = 'local';
	};
	$quake_net.$loop_Connect = function(host) {
		if (host.compareTo('local') !== 0) {
			return null;
		}
		$quake_net.$localconnectpending = true;
		if (ss.isNullOrUndefined($quake_net.$loop_client)) {
			if (ss.isNullOrUndefined($quake_net.$loop_client = $quake_net.$neT_NewQSocket())) {
				$quake_console.con_Printf('Loop_Connect: no qsocket available\n');
				return null;
			}
			$quake_net.$loop_client.address = 'localhost';
		}
		$quake_net.$loop_client.receiveMessageLength = 0;
		$quake_net.$loop_client.sendMessageLength = 0;
		$quake_net.$loop_client.canSend = true;
		if (ss.isNullOrUndefined($quake_net.$loop_server)) {
			if (ss.isNullOrUndefined($quake_net.$loop_server = $quake_net.$neT_NewQSocket())) {
				$quake_console.con_Printf('Loop_Connect: no qsocket available\n');
				return null;
			}
			$quake_net.$loop_server.address = 'LOCAL';
		}
		$quake_net.$loop_server.receiveMessageLength = 0;
		$quake_net.$loop_server.sendMessageLength = 0;
		$quake_net.$loop_server.canSend = true;
		$quake_net.$loop_client.driverdata = $quake_net.$loop_server;
		$quake_net.$loop_server.driverdata = $quake_net.$loop_client;
		return $quake_net.$loop_client;
	};
	$quake_net.$loop_CheckNewConnections = function() {
		if (!$quake_net.$localconnectpending) {
			return null;
		}
		$quake_net.$localconnectpending = false;
		$quake_net.$loop_server.sendMessageLength = 0;
		$quake_net.$loop_server.receiveMessageLength = 0;
		$quake_net.$loop_server.canSend = true;
		$quake_net.$loop_client.sendMessageLength = 0;
		$quake_net.$loop_client.receiveMessageLength = 0;
		$quake_net.$loop_client.canSend = true;
		return $quake_net.$loop_server;
	};
	$quake_net.$intAlign = function(value) {
		return value + 3 & -4;
	};
	$quake_net.$loop_GetMessage = function(sock) {
		var ret;
		var length;
		if (sock.receiveMessageLength === 0) {
			return 0;
		}
		ret = sock.receiveMessage[0];
		length = sock.receiveMessage[1] + (sock.receiveMessage[2] << 8);
		// alignment byte skipped here
		$quake_common.sZ_Clear($quake_net.net_message);
		$quake_common.sZ_Write$1($quake_net.net_message, sock.receiveMessage, 4, length);
		length = $quake_net.$intAlign(length + 4);
		sock.receiveMessageLength -= length;
		if (sock.receiveMessageLength !== 0) {
			$System_Buffer.blockCopy$1(sock.receiveMessage, length, sock.receiveMessage, 0, sock.receiveMessageLength);
		}
		if (ss.isValue(sock.driverdata) && ret === 1) {
			Type.cast(sock.driverdata, $quake_net$qsocket_t).canSend = true;
		}
		return ret;
	};
	$quake_net.$loop_SendMessage = function(sock, data) {
		var buffer;
		var ofs;
		var bufferLength;
		if (ss.isNullOrUndefined(sock.driverdata)) {
			return -1;
		}
		bufferLength = Type.cast(sock.driverdata, $quake_net$qsocket_t).receiveMessageLength;
		if (bufferLength + data.cursize + 4 > $quake_net.neT_MAXMESSAGE) {
			$quake_sys_linux.sys_Error('Loop_SendMessage: overflow\n');
		}
		buffer = Type.cast(sock.driverdata, $quake_net$qsocket_t).receiveMessage;
		ofs = bufferLength;
		// message type
		buffer[ofs++] = 1;
		// length
		buffer[ofs++] = data.cursize & 255;
		buffer[ofs++] = data.cursize >> 8;
		// align
		ofs++;
		// message
		$System_Buffer.blockCopy$1(data.data, 0, buffer, ofs, data.cursize);
		Type.cast(sock.driverdata, $quake_net$qsocket_t).receiveMessageLength = $quake_net.$intAlign(bufferLength + data.cursize + 4);
		sock.canSend = false;
		return 1;
	};
	$quake_net.$loop_SendUnreliableMessage = function(sock, data) {
		var buffer;
		var ofs;
		var bufferLength;
		if (ss.isNullOrUndefined(sock.driverdata)) {
			return -1;
		}
		bufferLength = Type.cast(sock.driverdata, $quake_net$qsocket_t).receiveMessageLength;
		if (bufferLength + data.cursize + 1 + 2 > $quake_net.neT_MAXMESSAGE) {
			return 0;
		}
		buffer = Type.cast(sock.driverdata, $quake_net$qsocket_t).receiveMessage;
		ofs = bufferLength;
		// message type
		buffer[ofs++] = 2;
		// length
		buffer[ofs++] = data.cursize & 255;
		buffer[ofs++] = data.cursize >> 8;
		// align
		ofs++;
		// message
		$System_Buffer.blockCopy$1(data.data, 0, buffer, ofs, data.cursize);
		Type.cast(sock.driverdata, $quake_net$qsocket_t).receiveMessageLength = $quake_net.$intAlign(bufferLength + data.cursize + 4);
		return 1;
	};
	$quake_net.$loop_CanSendMessage = function(sock) {
		if (ss.isNullOrUndefined(sock.driverdata)) {
			return false;
		}
		return sock.canSend;
	};
	$quake_net.$loop_CanSendUnreliableMessage = function(sock) {
		return true;
	};
	$quake_net.$loop_Close = function(sock) {
		if (ss.isValue(sock.driverdata)) {
			Type.cast(sock.driverdata, $quake_net$qsocket_t).driverdata = null;
		}
		sock.receiveMessageLength = 0;
		sock.sendMessageLength = 0;
		sock.canSend = true;
		if (ss.referenceEquals(sock, $quake_net.$loop_client)) {
			$quake_net.$loop_client = null;
		}
		else {
			$quake_net.$loop_server = null;
		}
	};
	$quake_net.$setNetTime = function() {
		$quake_net.$net_time = $quake_sys_linux.sys_FloatTime();
		return $quake_net.$net_time;
	};
	$quake_net.$neT_NewQSocket = function() {
		var sock;
		if (ss.isNullOrUndefined($quake_net.$net_freeSockets)) {
			return null;
		}
		if ($quake_net.net_activeconnections >= $quake_server.svs.maxclients) {
			return null;
		}
		// get one from free list
		sock = $quake_net.$net_freeSockets;
		$quake_net.$net_freeSockets = sock.next;
		// add it to active list
		sock.next = $quake_net.$net_activeSockets;
		$quake_net.$net_activeSockets = sock;
		sock.disconnected = false;
		sock.connecttime = $quake_net.$net_time;
		sock.address = 'UNSET ADDRESS';
		sock.driver = $quake_net.$net_driverlevel;
		sock.socket = 0;
		sock.driverdata = null;
		sock.canSend = true;
		sock.sendNext = false;
		sock.lastMessageTime = $quake_net.$net_time;
		sock.ackSequence = 0;
		sock.sendSequence = 0;
		sock.unreliableSendSequence = 0;
		sock.sendMessageLength = 0;
		sock.receiveSequence = 0;
		sock.unreliableReceiveSequence = 0;
		sock.receiveMessageLength = 0;
		return sock;
	};
	$quake_net.$neT_FreeQSocket = function(sock) {
		var s;
		// remove it from active list
		if (ss.referenceEquals(sock, $quake_net.$net_activeSockets)) {
			$quake_net.$net_activeSockets = $quake_net.$net_activeSockets.next;
		}
		else {
			for (s = $quake_net.$net_activeSockets; ss.isValue(s); s = s.next) {
				if (ss.referenceEquals(s.next, sock)) {
					s.next = sock.next;
					break;
				}
			}
			if (ss.isNullOrUndefined(s)) {
				$quake_sys_linux.sys_Error('NET_FreeQSocket: not active\n');
			}
		}
		// add it to free list
		sock.next = $quake_net.$net_freeSockets;
		$quake_net.$net_freeSockets = sock;
		sock.disconnected = true;
	};
	$quake_net.$neT_Listen_f = function() {
		if ($quake_cmd.cmd_Argc() !== 2) {
			$quake_console.con_Printf('"listen" is "' + ($quake_net.$listening ? 1 : 0) + '"\n');
			return;
		}
		$quake_net.$listening = ((parseInt($quake_cmd.cmd_Argv(1)) !== 0) ? true : false);
		for ($quake_net.$net_driverlevel = 0; $quake_net.$net_driverlevel < $quake_net.$net_numdrivers; $quake_net.$net_driverlevel++) {
			if ($quake_net.$net_drivers[$quake_net.$net_driverlevel].initialized === false) {
				continue;
			}
			$quake_net.$net_drivers[$quake_net.$net_driverlevel].delegate_Listen($quake_net.$listening);
		}
	};
	$quake_net.$maxPlayers_f = function() {
		var n;
		if ($quake_cmd.cmd_Argc() !== 2) {
			$quake_console.con_Printf('"maxplayers" is "' + $quake_server.svs.maxclients + '"\n');
			return;
		}
		if ($quake_server.sv.active) {
			$quake_console.con_Printf('maxplayers can not be changed while a server is running.\n');
			return;
		}
		n = parseInt($quake_cmd.cmd_Argv(1));
		if (n < 1) {
			n = 1;
		}
		if (n > $quake_server.svs.maxclientslimit) {
			n = $quake_server.svs.maxclientslimit;
			$quake_console.con_Printf('"maxplayers" set to "' + n + '"\n');
		}
		if (n === 1 && $quake_net.$listening) {
			$quake_cmd.cbuf_AddText('listen 0\n');
		}
		if (n > 1 && !$quake_net.$listening) {
			$quake_cmd.cbuf_AddText('listen 1\n');
		}
		$quake_server.svs.maxclients = n;
		if (n === 1) {
			$quake_cvar_t.cvar_Set('deathmatch', '0');
		}
		else {
			$quake_cvar_t.cvar_Set('deathmatch', '1');
		}
	};
	$quake_net.$neT_Port_f = function() {
	};
	$quake_net.$neT_Slist_f = function() {
	};
	$quake_net.neT_Connect = function(host) {
		var $state = 0, ret, n, numdrivers;
		$sm1:
		for (;;) {
			switch ($state) {
				case 0: {
					numdrivers = 1;
					$quake_net.$setNetTime();
					if (ss.isValue(host) && host.length === 0) {
						host = null;
					}
					if (ss.isValue(host)) {
						if (host.compareTo('local') === 0) {
							numdrivers = 1;
							$state = 1;
							continue $sm1;
						}
						if ($quake_net.$hostCacheCount !== 0) {
							for (n = 0; n < $quake_net.$hostCacheCount; n++) {
								if (host.compareTo($quake_net.$hostcache[n].name) === 0) {
									host = $quake_net.$hostcache[n].cname;
									break;
								}
							}
							if (n < $quake_net.$hostCacheCount) {
								$state = 1;
								continue $sm1;
							}
						}
					}
					$state = 1;
					continue $sm1;
				}
				case 1: {
					for ($quake_net.$net_driverlevel = 0; $quake_net.$net_driverlevel < numdrivers; $quake_net.$net_driverlevel++) {
						if ($quake_net.$net_drivers[$quake_net.$net_driverlevel].initialized === false) {
							continue;
						}
						ret = $quake_net.$net_drivers[$quake_net.$net_driverlevel].delegate_Connect(host);
						if (ss.isValue(ret)) {
							return ret;
						}
					}
					if (ss.isValue(host)) {
						$quake_console.con_Printf('\n');
					}
					return null;
				}
				default: {
					break $sm1;
				}
			}
		}
	};
	$quake_net.neT_CheckNewConnections = function() {
		var ret;
		$quake_net.$setNetTime();
		for ($quake_net.$net_driverlevel = 0; $quake_net.$net_driverlevel < $quake_net.$net_numdrivers; $quake_net.$net_driverlevel++) {
			if ($quake_net.$net_drivers[$quake_net.$net_driverlevel].initialized === false) {
				continue;
			}
			if ($quake_net.$net_driverlevel !== 0 && $quake_net.$listening === false) {
				continue;
			}
			ret = $quake_net.$net_drivers[$quake_net.$net_driverlevel].delegate_CheckNewConnections();
			if (ss.isValue(ret)) {
				return ret;
			}
		}
		return null;
	};
	$quake_net.neT_Close = function(sock) {
		if (ss.isNullOrUndefined(sock)) {
			return;
		}
		if (sock.disconnected) {
			return;
		}
		$quake_net.$setNetTime();
		// call the driver_Close function
		$quake_net.$net_drivers[sock.driver].delegate_Close(sock);
		$quake_net.$neT_FreeQSocket(sock);
	};
	$quake_net.neT_GetMessage = function(sock) {
		var ret;
		if (ss.isNullOrUndefined(sock)) {
			return -1;
		}
		if (sock.disconnected) {
			$quake_console.con_Printf('NET_GetMessage: disconnected socket\n');
			return -1;
		}
		$quake_net.$setNetTime();
		ret = $quake_net.$net_drivers[sock.driver].delegate_QGetMessage(sock);
		// see if this connection has timed out
		if (ret === 0) {
			if ($quake_net.$net_time - sock.lastMessageTime > $quake_net.$net_messagetimeout.value) {
				$quake_net.neT_Close(sock);
				return -1;
			}
		}
		if (ret > 0) {
			if (sock.driver !== 0) {
				sock.lastMessageTime = $quake_net.$net_time;
				if (ret === 1) {
					$quake_net.$messagesReceived++;
				}
				else if (ret === 2) {
					$quake_net.$unreliableMessagesReceived++;
				}
			}
		}
		else {
		}
		return ret;
	};
	$quake_net.neT_SendMessage = function(sock, data) {
		var r;
		if (ss.isNullOrUndefined(sock)) {
			return -1;
		}
		if (sock.disconnected) {
			$quake_console.con_Printf('NET_SendMessage: disconnected socket\n');
			return -1;
		}
		$quake_net.$setNetTime();
		r = $quake_net.$net_drivers[sock.driver].delegate_QSendMessage(sock, data);
		if (r === 1 && sock.driver !== 0) {
			$quake_net.$messagesSent++;
		}
		return r;
	};
	$quake_net.neT_SendUnreliableMessage = function(sock, data) {
		var r;
		if (ss.isNullOrUndefined(sock)) {
			return -1;
		}
		if (sock.disconnected) {
			$quake_console.con_Printf('NET_SendMessage: disconnected socket\n');
			return -1;
		}
		$quake_net.$setNetTime();
		r = $quake_net.$net_drivers[sock.driver].delegate_SendUnreliableMessage(sock, data);
		if (r === 1 && sock.driver !== 0) {
			$quake_net.$unreliableMessagesSent++;
		}
		return r;
	};
	$quake_net.neT_CanSendMessage = function(sock) {
		var r;
		if (ss.isNullOrUndefined(sock)) {
			return false;
		}
		if (sock.disconnected) {
			return false;
		}
		$quake_net.$setNetTime();
		r = $quake_net.$net_drivers[sock.driver].delegate_CanSendMessage(sock);
		return r;
	};
	$quake_net.neT_SendToAll = function(data, blocktime) {
		var start;
		var i;
		var count = 0;
		var state1 = new Array($quake_quakedef.maX_SCOREBOARD);
		var state2 = new Array($quake_quakedef.maX_SCOREBOARD);
		for (i = 0; i < $quake_server.svs.maxclients; i++) {
			$quake_host.host_client = $quake_server.svs.clients[i];
			if (ss.isNullOrUndefined($quake_host.host_client.netconnection)) {
				continue;
			}
			if ($quake_host.host_client.active) {
				if ($quake_host.host_client.netconnection.driver === 0) {
					$quake_net.neT_SendMessage($quake_host.host_client.netconnection, data);
					state1[i] = true;
					state2[i] = true;
					continue;
				}
				count++;
				state1[i] = false;
				state2[i] = false;
			}
			else {
				state1[i] = true;
				state2[i] = true;
			}
		}
		start = $quake_sys_linux.sys_FloatTime();
		while (count !== 0) {
			count = 0;
			for (i = 0; i < $quake_server.svs.maxclients; i++) {
				$quake_host.host_client = $quake_server.svs.clients[i];
				if (!state1[i]) {
					if ($quake_net.neT_CanSendMessage($quake_host.host_client.netconnection)) {
						state1[i] = true;
						$quake_net.neT_SendMessage($quake_host.host_client.netconnection, data);
					}
					else {
						$quake_net.neT_GetMessage($quake_host.host_client.netconnection);
					}
					count++;
					continue;
				}
				if (!state2[i]) {
					if ($quake_net.neT_CanSendMessage($quake_host.host_client.netconnection)) {
						state2[i] = true;
					}
					else {
						$quake_net.neT_GetMessage($quake_host.host_client.netconnection);
					}
					count++;
					continue;
				}
			}
			if ($quake_sys_linux.sys_FloatTime() - start > blocktime) {
				break;
			}
		}
		return count;
	};
	$quake_net.neT_Init = function() {
		var i;
		var controlSocket;
		var s;
		if ($quake_common.coM_CheckParm('-listen') !== 0 || $quake_client.cls.state === 0) {
			$quake_net.$listening = true;
		}
		$quake_net.$net_numsockets = $quake_server.svs.maxclientslimit;
		if ($quake_client.cls.state !== 0) {
			$quake_net.$net_numsockets++;
		}
		$quake_net.$setNetTime();
		for (i = 0; i < $quake_net.$net_numsockets; i++) {
			s = new $quake_net$qsocket_t();
			s.next = $quake_net.$net_freeSockets;
			$quake_net.$net_freeSockets = s;
			s.disconnected = true;
		}
		// allocate space for network message buffer
		$quake_common.sZ_Alloc($quake_net.net_message, $quake_net.neT_MAXMESSAGE);
		$quake_cvar_t.cvar_RegisterVariable($quake_net.$net_messagetimeout);
		$quake_cvar_t.cvar_RegisterVariable($quake_net.hostname);
		$quake_cvar_t.cvar_RegisterVariable($quake_net.$config_com_port);
		$quake_cvar_t.cvar_RegisterVariable($quake_net.$config_com_irq);
		$quake_cvar_t.cvar_RegisterVariable($quake_net.$config_com_baud);
		$quake_cvar_t.cvar_RegisterVariable($quake_net.$config_com_modem);
		$quake_cvar_t.cvar_RegisterVariable($quake_net.$config_modem_dialtype);
		$quake_cvar_t.cvar_RegisterVariable($quake_net.$config_modem_clear);
		$quake_cvar_t.cvar_RegisterVariable($quake_net.$config_modem_init);
		$quake_cvar_t.cvar_RegisterVariable($quake_net.$config_modem_hangup);
		$quake_cmd.cmd_AddCommand('slist', $quake_net.$neT_Slist_f);
		$quake_cmd.cmd_AddCommand('listen', $quake_net.$neT_Listen_f);
		$quake_cmd.cmd_AddCommand('maxplayers', $quake_net.$maxPlayers_f);
		$quake_cmd.cmd_AddCommand('port', $quake_net.$neT_Port_f);
		// initialize all the drivers
		for ($quake_net.$net_driverlevel = 0; $quake_net.$net_driverlevel < $quake_net.$net_numdrivers; $quake_net.$net_driverlevel++) {
			controlSocket = $quake_net.$net_drivers[$quake_net.$net_driverlevel].delegate_Init();
			if (controlSocket === -1) {
				continue;
			}
			$quake_net.$net_drivers[$quake_net.$net_driverlevel].initialized = true;
			$quake_net.$net_drivers[$quake_net.$net_driverlevel].controlSock = controlSocket;
			if ($quake_net.$listening) {
				$quake_net.$net_drivers[$quake_net.$net_driverlevel].delegate_Listen(true);
			}
		}
	};
	$quake_net.neT_Poll = function() {
		$quake_net.$setNetTime();
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.net.hostcache_t
	var $quake_net$hostcache_t = function() {
		this.name = $System_StringExtensions.stringOfLength(16);
		this.map = $System_StringExtensions.stringOfLength(16);
		this.cname = $System_StringExtensions.stringOfLength(32);
		this.users = 0;
		this.maxusers = 0;
		this.driver = 0;
		this.ldriver = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.net.net_driver_t
	var $quake_net$net_driver_t = function(name, initialized, delegate_Init, delegate_Listen, delegate_SearchForHosts, delegate_Connect, delegate_CheckNewConnections, delegate_QGetMessage, delegate_QSendMessage, delegate_SendUnreliableMessage, delegate_CanSendMessage, delegate_CanSendUnreliableMessage, delegate_Close, delegate_Shutdown) {
		this.name = null;
		this.initialized = false;
		this.delegate_Init = null;
		this.delegate_Listen = null;
		this.delegate_SearchForHosts = null;
		this.delegate_Connect = null;
		this.delegate_CheckNewConnections = null;
		this.delegate_QGetMessage = null;
		this.delegate_QSendMessage = null;
		this.delegate_SendUnreliableMessage = null;
		this.delegate_CanSendMessage = null;
		this.delegate_CanSendUnreliableMessage = null;
		this.delegate_Close = null;
		this.delegate_Shutdown = null;
		this.controlSock = 0;
		this.name = name;
		this.initialized = initialized;
		this.delegate_Init = delegate_Init;
		this.delegate_Listen = delegate_Listen;
		this.delegate_SearchForHosts = delegate_SearchForHosts;
		this.delegate_Connect = delegate_Connect;
		this.delegate_CheckNewConnections = delegate_CheckNewConnections;
		this.delegate_QGetMessage = delegate_QGetMessage;
		this.delegate_QSendMessage = delegate_QSendMessage;
		this.delegate_SendUnreliableMessage = delegate_SendUnreliableMessage;
		this.delegate_CanSendMessage = delegate_CanSendMessage;
		this.delegate_CanSendUnreliableMessage = delegate_CanSendUnreliableMessage;
		this.delegate_Close = delegate_Close;
		this.delegate_Shutdown = delegate_Shutdown;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.net.qsocket_t
	var $quake_net$qsocket_t = function() {
		this.next = null;
		this.connecttime = 0;
		this.lastMessageTime = 0;
		this.$lastSendTime = 0;
		this.disconnected = false;
		this.canSend = false;
		this.sendNext = false;
		this.driver = 0;
		this.$landriver = 0;
		this.socket = 0;
		this.driverdata = null;
		this.ackSequence = 0;
		this.sendSequence = 0;
		this.unreliableSendSequence = 0;
		this.sendMessageLength = 0;
		this.$sendMessage = new Array($quake_net.neT_MAXMESSAGE);
		this.receiveSequence = 0;
		this.unreliableReceiveSequence = 0;
		this.receiveMessageLength = 0;
		this.receiveMessage = new Uint8Array($quake_net.neT_MAXMESSAGE);
		this.address = $System_StringExtensions.stringOfLength($quake_net.neT_NAMELEN);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.prog
	var $quake_prog = function() {
	};
	$quake_prog.edicT_TO_PROG = function(e) {
		return e.index * $quake_prog.pr_edict_size;
	};
	$quake_prog.proG_TO_EDICT = function(e) {
		return $quake_server.sv.edicts[ss.Int32.div(e, $quake_prog.pr_edict_size)];
	};
	$quake_prog.$g_FLOAT = function(o) {
		return $quake_prog.cast_float($quake_prog.pr_globals_read(o));
	};
	$quake_prog.$g_INT = function(o) {
		return $quake_prog.cast_int($quake_prog.pr_globals_read(o));
	};
	$quake_prog.$g_EDICT = function(o) {
		return $quake_server.sv.edicts[ss.Int32.div(ss.Nullable.unbox(Type.cast($quake_prog.pr_globals_read(o), ss.Int32)), $quake_prog.pr_edict_size)];
	};
	$quake_prog.$g_EDICTNUM = function(o) {
		return $quake_prog.nuM_FOR_EDICT($quake_prog.$g_EDICT(o));
	};
	$quake_prog.$g_VECTOR = function(o) {
		var res = new Array(3);
		res[0] = $quake_prog.cast_float($quake_prog.pr_globals_read(o));
		res[1] = $quake_prog.cast_float($quake_prog.pr_globals_read(o + 1));
		res[2] = $quake_prog.cast_float($quake_prog.pr_globals_read(o + 2));
		return res;
	};
	$quake_prog.$g_STRING = function(o) {
		return $quake_prog.pr_string(ss.Nullable.unbox(Type.cast($quake_prog.pr_globals_read(o), ss.Int32)));
	};
	$quake_prog.$e_STRING = function(e, o) {
		return $quake_prog.pr_string($quake_prog.cast_int($quake_prog.$readentvar(e.v, o)));
	};
	$quake_prog.$returN_EDICT = function(e) {
		$quake_prog.pr_globals_write($quake_prog.ofS_RETURN, $quake_prog.edicT_TO_PROG(e));
	};
	$quake_prog.$pF_VarString = function(first) {
		var i;
		$quake_prog.$out = '';
		for (i = first; i < $quake_prog.$pr_argc; i++) {
			$quake_prog.$out += $quake_prog.$g_STRING($quake_prog.ofS_PARM0 + i * 3);
		}
		return $quake_prog.$out;
	};
	$quake_prog.$pF_error = function() {
		var s;
		var ed;
		s = $quake_prog.$pF_VarString(0);
		$quake_console.con_Printf('======SERVER ERROR in ' + $quake_prog.pr_string($quake_prog.$pr_xfunction.s_name) + ':\n' + s + '\n');
		ed = $quake_prog.proG_TO_EDICT($quake_prog.pr_global_struct[0].self);
		//ED_Print(ed);
		$quake_host.host_Error('Program error');
	};
	$quake_prog.$pF_objerror = function() {
		var s;
		var ed;
		s = $quake_prog.$pF_VarString(0);
		$quake_console.con_Printf('======OBJECT ERROR in ' + $quake_prog.pr_string($quake_prog.$pr_xfunction.s_name) + ':\n' + s + '\n');
		ed = $quake_prog.proG_TO_EDICT($quake_prog.pr_global_struct[0].self);
		//ED_Print(ed);
		$quake_prog.$eD_Free(ed);
		$quake_host.host_Error('Program error');
	};
	$quake_prog.$pF_makevectors = function() {
		$quake_mathlib.angleVectors($quake_prog.$g_VECTOR($quake_prog.ofS_PARM0), $quake_prog.pr_global_struct[0].v_forward, $quake_prog.pr_global_struct[0].v_right, $quake_prog.pr_global_struct[0].v_up);
	};
	$quake_prog.$pF_setorigin = function() {
		var e;
		var org;
		e = $quake_prog.$g_EDICT($quake_prog.ofS_PARM0);
		org = $quake_prog.$g_VECTOR($quake_prog.ofS_PARM1);
		$quake_mathlib.vectorCopy(org, e.v.origin);
		//SV_LinkEdict(e, false);
	};
	$quake_prog.$setMinMaxSize = function(e, min, max, rotate) {
		var angles;
		var rmin = new Array(3), rmax = new Array(3);
		var bounds = new Array(2);
		var xvector = new Array(2), yvector = new Array(2);
		var a;
		var base = new Array(3), transformed = new Array(3);
		var i, j, k, l;
		for (var kk = 0; kk < 2; kk++) {
			bounds[kk] = new Array(3);
		}
		for (i = 0; i < 3; i++) {
			if (min[i] > max[i]) {
				$quake_prog.$pR_RunError('backwards mins/maxs');
			}
		}
		rotate = false;
		// FIXME: implement rotation properly again
		if (!rotate) {
			$quake_mathlib.vectorCopy(min, rmin);
			$quake_mathlib.vectorCopy(max, rmax);
		}
		else {
			// find min / max for rotations
			angles = e.v.angles;
			a = angles[1] / 180 * $quake_mathlib.m_PI;
			xvector[0] = Math.cos(a);
			xvector[1] = Math.sin(a);
			yvector[0] = -Math.sin(a);
			yvector[1] = Math.cos(a);
			$quake_mathlib.vectorCopy(min, bounds[0]);
			$quake_mathlib.vectorCopy(max, bounds[1]);
			rmin[0] = rmin[1] = rmin[2] = 9999;
			rmax[0] = rmax[1] = rmax[2] = -9999;
			for (i = 0; i <= 1; i++) {
				base[0] = bounds[i][0];
				for (j = 0; j <= 1; j++) {
					base[1] = bounds[j][1];
					for (k = 0; k <= 1; k++) {
						base[2] = bounds[k][2];
						// transform the point
						transformed[0] = xvector[0] * base[0] + yvector[0] * base[1];
						transformed[1] = xvector[1] * base[0] + yvector[1] * base[1];
						transformed[2] = base[2];
						for (l = 0; l < 3; l++) {
							if (transformed[l] < rmin[l]) {
								rmin[l] = transformed[l];
							}
							if (transformed[l] > rmax[l]) {
								rmax[l] = transformed[l];
							}
						}
					}
				}
			}
		}
		// set derived values
		$quake_mathlib.vectorCopy(rmin, e.v.mins);
		$quake_mathlib.vectorCopy(rmax, e.v.maxs);
		$quake_mathlib.vectorSubtract(max, min, e.v.size);
		//SV_LinkEdict (e, false);
	};
	$quake_prog.$pF_setsize = function() {
		var e;
		var min, max;
		e = $quake_prog.$g_EDICT($quake_prog.ofS_PARM0);
		min = $quake_prog.$g_VECTOR($quake_prog.ofS_PARM1);
		max = $quake_prog.$g_VECTOR($quake_prog.ofS_PARM2);
		$quake_prog.$setMinMaxSize(e, min, max, false);
	};
	$quake_prog.$pF_setmodel = function() {
		var e;
		var m, check;
		var mod;
		var i;
		e = $quake_prog.$g_EDICT($quake_prog.ofS_PARM0);
		m = $quake_prog.$g_STRING($quake_prog.ofS_PARM1);
		// check to see if model was properly precached
		for (i = 0, check = $quake_server.sv.model_precache[i]; ss.isValue(check); i++) {
			check = $quake_server.sv.model_precache[i];
			if (check.compareTo(m) === 0) {
				break;
			}
		}
		if (ss.isNullOrUndefined(check)) {
			$quake_prog.$pR_RunError('no precache: ' + m + '\n');
		}
		e.v.model = $quake_prog.getStringIndex(m) - 15000;
		e.v.modelindex = i;
		//SV_ModelIndex (m);
		mod = $quake_server.sv.models[ss.Int32.trunc(e.v.modelindex)];
		// Mod_ForName (m, true);
		//	        if (mod != null)
		//	        SetMinMaxSize (e, mod->mins, mod->maxs, true);
		//	        else
		//	        SetMinMaxSize (e, vec3_origin, vec3_origin, true);
	};
	$quake_prog.$pF_bprint = function() {
	};
	$quake_prog.$pF_sprint = function() {
	};
	$quake_prog.$pF_centerprint = function() {
	};
	$quake_prog.$pF_normalize = function() {
	};
	$quake_prog.$pF_vlen = function() {
	};
	$quake_prog.$pF_vectoyaw = function() {
	};
	$quake_prog.$pF_vectoangles = function() {
	};
	$quake_prog.$pF_random = function() {
		var num;
		num = ($Helper_helper.rand() & 32767) / 32767;
		$quake_prog.pr_globals_write($quake_prog.ofS_RETURN, num);
	};
	$quake_prog.$pF_particle = function() {
	};
	$quake_prog.$pF_ambientsound = function() {
	};
	$quake_prog.$pF_sound = function() {
	};
	$quake_prog.$pF_break = function() {
	};
	$quake_prog.$pF_traceline = function() {
	};
	$quake_prog.$pF_checkpos = function() {
	};
	$quake_prog.$pF_checkclient = function() {
	};
	$quake_prog.$pF_stuffcmd = function() {
	};
	$quake_prog.$pF_localcmd = function() {
	};
	$quake_prog.$pF_cvar = function() {
		var str;
		str = $quake_prog.$g_STRING($quake_prog.ofS_PARM0);
		$quake_prog.pr_globals_write($quake_prog.ofS_RETURN, $quake_cvar_t.cvar_VariableValue(str));
	};
	$quake_prog.$pF_cvar_set = function() {
		var var1, val;
		var1 = $quake_prog.$g_STRING($quake_prog.ofS_PARM0);
		val = $quake_prog.$g_STRING($quake_prog.ofS_PARM1);
		$quake_cvar_t.cvar_Set(var1, val);
	};
	$quake_prog.$pF_findradius = function() {
	};
	$quake_prog.$pF_dprint = function() {
	};
	$quake_prog.$pF_ftos = function() {
	};
	$quake_prog.$pF_fabs = function() {
		var v;
		v = $quake_prog.$g_FLOAT($quake_prog.ofS_PARM0);
		$quake_prog.pr_globals_write($quake_prog.ofS_RETURN, Math.abs(v));
	};
	$quake_prog.$pF_vtos = function() {
	};
	$quake_prog.$pF_Spawn = function() {
		var ed;
		ed = $quake_prog.$eD_Alloc();
		$quake_prog.$returN_EDICT(ed);
	};
	$quake_prog.$pF_Remove = function() {
		var ed;
		ed = $quake_prog.$g_EDICT($quake_prog.ofS_PARM0);
		$quake_prog.$eD_Free(ed);
	};
	$quake_prog.$pF_Find = function() {
		var e;
		var f;
		var s, t;
		var ed;
		e = $quake_prog.$g_EDICTNUM($quake_prog.ofS_PARM0);
		f = $quake_prog.$g_INT($quake_prog.ofS_PARM1);
		s = $quake_prog.$g_STRING($quake_prog.ofS_PARM2);
		if (ss.isNullOrUndefined(s)) {
			$quake_prog.$pR_RunError('PF_Find: bad search string');
		}
		for (e++; e < $quake_server.sv.num_edicts; e++) {
			ed = $quake_prog.edicT_NUM(e);
			if (ed.free) {
				continue;
			}
			t = $quake_prog.$e_STRING(ed, f);
			if (ss.isNullOrUndefined(t)) {
				continue;
			}
			if (t.compareTo(s) === 0) {
				$quake_prog.$returN_EDICT(ed);
				return;
			}
		}
		$quake_prog.$returN_EDICT($quake_server.sv.edicts[0]);
	};
	$quake_prog.$pR_CheckEmptyString = function(s) {
		if (s.charCodeAt(0) <= 32) {
			$quake_prog.$pR_RunError('Bad string');
		}
	};
	$quake_prog.$pF_precache_file = function() {
	};
	$quake_prog.$pF_precache_sound = function() {
		var s;
		var i;
		if ($quake_server.sv.state !== 0) {
			$quake_prog.$pR_RunError('PF_Precache_*: Precache can only be done in spawn functions');
		}
		s = $quake_prog.$g_STRING($quake_prog.ofS_PARM0);
		$quake_prog.pr_globals_write($quake_prog.ofS_RETURN, $quake_prog.$g_INT($quake_prog.ofS_PARM0));
		$quake_prog.$pR_CheckEmptyString(s);
		for (i = 0; i < $quake_quakedef.maX_SOUNDS; i++) {
			if (ss.isNullOrUndefined($quake_server.sv.sound_precache[i])) {
				$quake_server.sv.sound_precache[i] = s;
				return;
			}
			if ($quake_server.sv.sound_precache[i].compareTo(s) === 0) {
				return;
			}
		}
		$quake_prog.$pR_RunError('PF_precache_sound: overflow');
	};
	$quake_prog.$pF_precache_model = function() {
		var s;
		var i;
		if ($quake_server.sv.state !== 0) {
			$quake_prog.$pR_RunError('PF_Precache_*: Precache can only be done in spawn functions');
		}
		s = $quake_prog.$g_STRING($quake_prog.ofS_PARM0);
		$quake_prog.pr_globals_write($quake_prog.ofS_RETURN, $quake_prog.$g_INT($quake_prog.ofS_PARM0));
		$quake_prog.$pR_CheckEmptyString(s);
		for (i = 0; i < $quake_quakedef.maX_MODELS; i++) {
			if (ss.isNullOrUndefined($quake_server.sv.model_precache[i])) {
				$quake_server.sv.model_precache[i] = s;
				$quake_server.sv.models[i] = $quake_model.mod_ForName(s, true);
				return;
			}
			if ($quake_server.sv.model_precache[i].compareTo(s) === 0) {
				return;
			}
		}
		$quake_prog.$pR_RunError('PF_precache_model: overflow');
	};
	$quake_prog.$pF_coredump = function() {
	};
	$quake_prog.$pF_traceon = function() {
	};
	$quake_prog.$pF_traceoff = function() {
	};
	$quake_prog.$pF_eprint = function() {
	};
	$quake_prog.$pF_walkmove = function() {
	};
	$quake_prog.$pF_droptofloor = function() {
	};
	$quake_prog.$pF_lightstyle = function() {
		var style;
		var val;
		var client;
		var j;
		style = ss.Int32.trunc($quake_prog.$g_FLOAT($quake_prog.ofS_PARM0));
		val = $quake_prog.$g_STRING($quake_prog.ofS_PARM1);
		// change the string in sv
		$quake_server.sv.lightstyles[style] = val;
		// send message to all clients on this server
		if ($quake_server.sv.state !== 1) {
			return;
		}
		for (j = 0; j < $quake_server.svs.maxclients; j++) {
			client = $quake_server.svs.clients[j];
			if (client.active || client.spawned) {
				$quake_common.msG_WriteChar(client.message, $quake_net.svc_lightstyle);
				$quake_common.msG_WriteChar(client.message, style);
				$quake_common.msG_WriteString(client.message, val);
			}
		}
	};
	$quake_prog.$pF_rint = function() {
		var f;
		f = $quake_prog.$g_FLOAT($quake_prog.ofS_PARM0);
		if (f > 0) {
			$quake_prog.pr_globals_write($quake_prog.ofS_RETURN, ss.Int32.trunc(f + 0.5));
		}
		else {
			$quake_prog.pr_globals_write($quake_prog.ofS_RETURN, ss.Int32.trunc(f - 0.5));
		}
	};
	$quake_prog.$pF_floor = function() {
		$quake_prog.pr_globals_write($quake_prog.ofS_RETURN, Math.floor($quake_prog.$g_FLOAT($quake_prog.ofS_PARM0)));
	};
	$quake_prog.$pF_ceil = function() {
		$quake_prog.pr_globals_write($quake_prog.ofS_RETURN, Math.ceil($quake_prog.$g_FLOAT($quake_prog.ofS_PARM0)));
	};
	$quake_prog.$pF_checkbottom = function() {
	};
	$quake_prog.$pF_pointcontents = function() {
	};
	$quake_prog.$pF_nextent = function() {
	};
	$quake_prog.$pF_aim = function() {
	};
	$quake_prog.$pF_changeyaw = function() {
	};
	$quake_prog.$pF_WriteByte = function() {
	};
	$quake_prog.$pF_WriteChar = function() {
	};
	$quake_prog.$pF_WriteShort = function() {
	};
	$quake_prog.$pF_WriteLong = function() {
	};
	$quake_prog.$pF_WriteAngle = function() {
	};
	$quake_prog.$pF_WriteCoord = function() {
	};
	$quake_prog.$pF_WriteString = function() {
	};
	$quake_prog.$pF_WriteEntity = function() {
	};
	$quake_prog.$pF_makestatic = function() {
		var ent;
		var i;
		ent = $quake_prog.$g_EDICT($quake_prog.ofS_PARM0);
		$quake_common.msG_WriteByte($quake_server.sv.signon, $quake_net.svc_spawnstatic);
		$quake_common.msG_WriteByte($quake_server.sv.signon, $quake_server.sV_ModelIndex($quake_prog.pr_string(ent.v.model)));
		$quake_common.msG_WriteByte($quake_server.sv.signon, ss.Int32.trunc(ent.v.frame));
		$quake_common.msG_WriteByte($quake_server.sv.signon, ss.Int32.trunc(ent.v.colormap));
		$quake_common.msG_WriteByte($quake_server.sv.signon, ss.Int32.trunc(ent.v.skin));
		for (i = 0; i < 3; i++) {
			$quake_common.msG_WriteCoord($quake_server.sv.signon, ent.v.origin[i]);
			$quake_common.msG_WriteAngle($quake_server.sv.signon, ent.v.angles[i]);
		}
		// throw the entity away now
		$quake_prog.$eD_Free(ent);
	};
	$quake_prog.$pF_setspawnparms = function() {
	};
	$quake_prog.$pF_changelevel = function() {
	};
	$quake_prog.$pF_Fixme = function() {
		$quake_prog.$pR_RunError('unimplemented bulitin');
	};
	$quake_prog.$eD_ClearEdict = function(e) {
		e.v.clear();
		//memset (&e->v, 0, progs->entityfields * 4);
		e.free = false;
	};
	$quake_prog.$eD_Alloc = function() {
		var i;
		var e;
		for (i = $quake_server.svs.maxclients + 1; i < $quake_server.sv.num_edicts; i++) {
			e = $quake_prog.edicT_NUM(i);
			// the first couple seconds of server time can involve a lot of
			// freeing and allocating, so relax the replacement policy
			if (e.free && (e.freetime < 2 || $quake_server.sv.time - e.freetime > 0.5)) {
				$quake_prog.$eD_ClearEdict(e);
				return e;
			}
		}
		if (i === $quake_quakedef.maX_EDICTS) {
			$quake_sys_linux.sys_Error('ED_Alloc: no free edicts');
		}
		$quake_server.sv.num_edicts++;
		e = $quake_prog.edicT_NUM(i);
		$quake_prog.$eD_ClearEdict(e);
		return e;
	};
	$quake_prog.$eD_Free = function(ed) {
		//SV_UnlinkEdict (ed);		// unlink from world bsp
		ed.free = true;
		ed.v.model = 0;
		ed.v.takedamage = 0;
		ed.v.modelindex = 0;
		ed.v.colormap = 0;
		ed.v.skin = 0;
		ed.v.frame = 0;
		$quake_mathlib.vectorCopy($quake_mathlib.vec3_origin, ed.v.origin);
		$quake_mathlib.vectorCopy($quake_mathlib.vec3_origin, ed.v.angles);
		ed.v.nextthink = -1;
		ed.v.solid = 0;
		ed.freetime = $quake_server.sv.time;
	};
	$quake_prog.eD_FindField = function(name) {
		var def;
		var i;
		for (i = 0; i < $quake_prog.$progs.numfielddefs; i++) {
			def = $quake_prog.$pr_fielddefs[i];
			if ($quake_prog.pr_string(def.s_name).compareTo(name) === 0) {
				return def;
			}
		}
		return null;
	};
	$quake_prog.eD_FindFunction = function(name) {
		var func;
		var i;
		for (i = 0; i < $quake_prog.$progs.numfunctions; i++) {
			func = $quake_prog.pr_functions[i];
			if ($quake_prog.pr_string(func.s_name).compareTo(name) === 0) {
				return func;
			}
		}
		return null;
	};
	$quake_prog.$eD_GlobalAtOfs = function(ofs) {
		var def;
		var i;
		for (i = 0; i < $quake_prog.$progs.numglobaldefs; i++) {
			def = $quake_prog.$pr_globaldefs[i];
			if (def.ofs === ofs) {
				return def;
			}
		}
		return null;
	};
	$quake_prog.$eD_FieldAtOfs = function(ofs) {
		var def;
		var i;
		for (i = 0; i < $quake_prog.$progs.numfielddefs; i++) {
			def = $quake_prog.$pr_fielddefs[i];
			if (def.ofs === ofs) {
				return def;
			}
		}
		return null;
	};
	$quake_prog.$pR_ValueString = function(type, val) {
		var def;
		var f;
		type &= -32769;
		switch (type) {
			case 1: {
				$quake_prog.$line = $quake_prog.pr_string($quake_prog.cast_int(val));
				break;
			}
			case 4: {
				$quake_prog.$line = 'entity ' + $quake_prog.nuM_FOR_EDICT($quake_prog.proG_TO_EDICT($quake_prog.cast_int(val)));
				break;
			}
			case 6: {
				f = $quake_prog.pr_functions[$quake_prog.cast_int(val)];
				$quake_prog.$line = $quake_prog.pr_string(f.s_name) + '()';
				break;
			}
			case 5: {
				def = $quake_prog.$eD_FieldAtOfs($quake_prog.cast_int(val));
				$quake_prog.$line = '.' + $quake_prog.pr_string(def.s_name);
				break;
			}
			case 0: {
				$quake_prog.$line = 'void';
				break;
			}
			case 2: {
				$quake_prog.$line = ''.toString() + $quake_prog.cast_float(val);
				break;
			}
			case 3: {
				$quake_prog.$line = '\'' + $quake_prog.cast_float(val) + '\'';
				break;
			}
			case 7: {
				$quake_prog.$line = 'pointer';
				break;
			}
			default: {
				$quake_prog.$line = 'bad type ' + type;
				break;
			}
		}
		return $quake_prog.$line;
	};
	$quake_prog.$pR_GlobalString = function(ofs) {
		var s;
		var i;
		var def;
		var val;
		val = $quake_prog.pr_globals_read(ofs);
		def = $quake_prog.$eD_GlobalAtOfs(ofs);
		if (ss.isNullOrUndefined(def)) {
			$quake_prog.$line = ofs + '(?]';
		}
		else {
			s = $quake_prog.$pR_ValueString(def.type, val);
			$quake_prog.$line = ofs + '(' + $quake_prog.pr_string(def.s_name) + ')' + s;
		}
		i = $quake_prog.$line.length;
		for (; i < 20; i++) {
			$quake_prog.$line += ' ';
		}
		$quake_prog.$line += ' ';
		return $quake_prog.$line;
	};
	$quake_prog.$pR_GlobalStringNoContents = function(ofs) {
		var i;
		var def;
		def = $quake_prog.$eD_GlobalAtOfs(ofs);
		if (ss.isNullOrUndefined(def)) {
			$quake_prog.$line = ofs + '(?]';
		}
		else {
			$quake_prog.$line = ofs + '(' + $quake_prog.pr_string(def.s_name) + ')';
		}
		i = $quake_prog.$line.length;
		for (; i < 20; i++) {
			$quake_prog.$line += ' ';
		}
		$quake_prog.$line += ' ';
		return $quake_prog.$line;
	};
	$quake_prog.eD_NewString = function(string) {
		var new1 = '';
		var i, l;
		l = string.length;
		for (i = 0; i < l; i++) {
			if (string.charCodeAt(i) === 92 && i < l - 1) {
				i++;
				if (string.charCodeAt(i) === 110) {
					new1 += '\n';
				}
				else {
					new1 += '\\';
				}
			}
			else {
				new1 += String.fromCharCode(string.charCodeAt(i));
			}
		}
		return new1;
	};
	$quake_prog.eD_ParseEpair = function(base, key, keyname, s) {
		throw new $System_NotImplementedException();
	};
	$quake_prog.eD_ParseEdict = function(data, ofs, ent) {
		var key;
		var anglehack;
		var init;
		var keyname = $System_StringExtensions.stringOfLength(256);
		var n;
		init = false;
		// clear it
		if (!ss.referenceEquals(ent, $quake_server.sv.edicts[0])) {
			ent.v.clear();
		}
		//memset (&ent->v, 0, progs->entityfields * 4);
		// go through all the dictionary pairs
		while (true) {
			// parse key
			$quake_common.coM_Parse(data, ofs);
			if ($quake_common.com_token.charCodeAt(0) === 125) {
				break;
			}
			if (ofs.$ === -1) {
				$quake_sys_linux.sys_Error('ED_ParseEntity: EOF without closing brace');
			}
			// anglehack is to allow QuakeEd to write single scalar angles
			// and allow them to be turned into vectors. (FIXME...)
			if ($quake_common.com_token.compareTo('angle') === 0) {
				$quake_common.com_token = 'angles';
				anglehack = true;
			}
			else {
				anglehack = false;
			}
			// FIXME: change light to _light to get rid of this hack
			if ($quake_common.com_token.compareTo('light') === 0) {
				$quake_common.com_token = 'light_lev';
			}
			// hack for single light def
			keyname = $quake_common.com_token;
			// another hack to fix heynames with trailing spaces
			keyname.trimEnd();
			// parse value	
			$quake_common.coM_Parse(data, ofs);
			if (ofs.$ === -1) {
				$quake_sys_linux.sys_Error('ED_ParseEntity: EOF without closing brace');
			}
			if ($quake_common.com_token.charCodeAt(0) === 125) {
				$quake_sys_linux.sys_Error('ED_ParseEntity: closing brace without data');
			}
			init = true;
			// keynames with a leading underscore are used for utility comments,
			// and are immediately discarded by quake
			if (keyname.charCodeAt(0) === 95) {
				continue;
			}
			key = $quake_prog.eD_FindField(keyname);
			if (ss.isNullOrUndefined(key)) {
				$quake_console.con_Printf('\'' + keyname + '\' is not a field\n');
				continue;
			}
			if (anglehack) {
				var temp = $System_StringExtensions.stringOfLength(32);
				temp = $quake_common.com_token;
				$quake_common.com_token = '0 ' + temp + ' 0';
			}
			if (!$quake_prog.eD_ParseEpair(ent.v, key, keyname, $quake_common.com_token)) {
				$quake_host.host_Error('ED_ParseEdict: parse error');
			}
		}
		if (!init) {
			ent.free = true;
		}
	};
	$quake_prog.eD_LoadFromFile = function(data) {
		var ent;
		var inhibit;
		var func;
		var ofs = { $: 0 };
		ent = null;
		inhibit = 0;
		$quake_prog.pr_global_struct[0].time = $quake_server.sv.time;
		// parse ents
		while (true) {
			// parse the opening brace	
			$quake_common.coM_Parse(data, ofs);
			if (ofs.$ === -1) {
				break;
			}
			if ($quake_common.com_token.charCodeAt(0) !== 123) {
				$quake_sys_linux.sys_Error('ED_LoadFromFile: found ' + $quake_common.com_token + ' when expecting {');
			}
			if (ss.isNullOrUndefined(ent)) {
				ent = $quake_prog.edicT_NUM(0);
			}
			else {
				ent = $quake_prog.$eD_Alloc();
			}
			if (ent.index === 49) {
				ent.index = ent.index;
			}
			$quake_prog.eD_ParseEdict(data, ofs, ent);
			// remove things from different skill levels or deathmatch
			if ($quake_host.deathmatch.value !== 0) {
				if ((ss.Int32.trunc(ent.v.spawnflags) & $quake_server.spawnflaG_NOT_DEATHMATCH) !== 0) {
					$quake_prog.$eD_Free(ent);
					inhibit++;
					continue;
				}
			}
			else if ($quake_host.current_skill === 0 && (ss.Int32.trunc(ent.v.spawnflags) & $quake_server.spawnflaG_NOT_EASY) !== 0 || $quake_host.current_skill === 1 && (ss.Int32.trunc(ent.v.spawnflags) & $quake_server.spawnflaG_NOT_MEDIUM) !== 0 || $quake_host.current_skill >= 2 && (ss.Int32.trunc(ent.v.spawnflags) & $quake_server.spawnflaG_NOT_HARD) !== 0) {
				$quake_prog.$eD_Free(ent);
				inhibit++;
				continue;
			}
			//
			// immediately call spawn function
			//
			if (ent.v.classname === 0) {
				$quake_console.con_Printf('No classname for:\n');
				//ED_Print (ent);
				$quake_prog.$eD_Free(ent);
				continue;
			}
			// look for the spawn function
			func = $quake_prog.eD_FindFunction($quake_prog.pr_string(ent.v.classname));
			if (ss.isNullOrUndefined(func)) {
				$quake_console.con_Printf('No spawn function for:\n');
				//ED_Print (ent);
				$quake_prog.$eD_Free(ent);
				continue;
			}
			if ($quake_prog.pr_string(ent.v.classname) === 'trigger_teleport') {
				inhibit = inhibit;
			}
			$quake_prog.pr_global_struct[0].self = $quake_prog.edicT_TO_PROG(ent);
			$quake_prog.pR_ExecuteProgram(func);
		}
		$quake_console.con_DPrintf(inhibit + ' entities inhibited\n');
	};
	$quake_prog.pr_string = function(offset) {
		if (offset < 0) {
			return $quake_prog.$stringPool[offset + 15000];
		}
		return $quake_common.parseString($quake_prog.$pr_strings, $quake_prog.$progs.ofs_strings + offset);
	};
	$quake_prog.pr_globals_write = function(address, value) {
		var globalvars = $quake_prog.pr_global_struct[ss.Int32.div(address * 4, $quake_prog.sizeof_globalvars_t)];
		var offset = address % 92;
		switch (offset) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27: {
				globalvars.pad[offset] = $quake_prog.cast_int(value);
				break;
			}
			case 28: {
				globalvars.self = $quake_prog.cast_int(value);
				break;
			}
			case 29: {
				globalvars.other = $quake_prog.cast_int(value);
				break;
			}
			case 30: {
				globalvars.world = $quake_prog.cast_int(value);
				break;
			}
			case 31: {
				globalvars.time = $quake_prog.cast_float(value);
				break;
			}
			case 32: {
				globalvars.frametime = $quake_prog.cast_float(value);
				break;
			}
			case 33: {
				globalvars.force_retouch = $quake_prog.cast_float(value);
				break;
			}
			case 34: {
				globalvars.mapname = $quake_prog.cast_int(value);
				break;
			}
			case 35: {
				globalvars.deathmatch = $quake_prog.cast_float(value);
				break;
			}
			case 36: {
				globalvars.coop = $quake_prog.cast_float(value);
				break;
			}
			case 37: {
				globalvars.teamplay = $quake_prog.cast_float(value);
				break;
			}
			case 38: {
				globalvars.serverflags = $quake_prog.cast_float(value);
				break;
			}
			case 40: {
				globalvars.total_monsters = $quake_prog.cast_float(value);
				break;
			}
			case 41: {
				globalvars.found_secrets = $quake_prog.cast_float(value);
				break;
			}
			case 42: {
				globalvars.killed_monsters = $quake_prog.cast_float(value);
				break;
			}
			case 43: {
				globalvars.parm1 = $quake_prog.cast_float(value);
				break;
			}
			case 44: {
				globalvars.parm2 = $quake_prog.cast_float(value);
				break;
			}
			case 45: {
				globalvars.parm3 = $quake_prog.cast_float(value);
				break;
			}
			case 46: {
				globalvars.parm4 = $quake_prog.cast_float(value);
				break;
			}
			case 47: {
				globalvars.parm5 = $quake_prog.cast_float(value);
				break;
			}
			case 48: {
				globalvars.parm6 = $quake_prog.cast_float(value);
				break;
			}
			case 49: {
				globalvars.parm7 = $quake_prog.cast_float(value);
				break;
			}
			case 50: {
				globalvars.parm8 = $quake_prog.cast_float(value);
				break;
			}
			case 51: {
				globalvars.parm9 = $quake_prog.cast_float(value);
				break;
			}
			case 52: {
				globalvars.parm10 = $quake_prog.cast_float(value);
				break;
			}
			case 53: {
				globalvars.parm11 = $quake_prog.cast_float(value);
				break;
			}
			case 54: {
				globalvars.parm12 = $quake_prog.cast_float(value);
				break;
			}
			case 55: {
				globalvars.parm13 = $quake_prog.cast_float(value);
				break;
			}
			case 56: {
				globalvars.parm14 = $quake_prog.cast_float(value);
				break;
			}
			case 57: {
				globalvars.parm15 = $quake_prog.cast_float(value);
				break;
			}
			case 58: {
				globalvars.parm16 = $quake_prog.cast_float(value);
				break;
			}
			case 59: {
				globalvars.v_forward[0] = $quake_prog.cast_float(value);
				break;
			}
			case 60: {
				globalvars.v_forward[1] = $quake_prog.cast_float(value);
				break;
			}
			case 61: {
				globalvars.v_forward[2] = $quake_prog.cast_float(value);
				break;
			}
			case 62: {
				globalvars.v_up[0] = $quake_prog.cast_float(value);
				break;
			}
			case 63: {
				globalvars.v_up[1] = $quake_prog.cast_float(value);
				break;
			}
			case 64: {
				globalvars.v_up[2] = $quake_prog.cast_float(value);
				break;
			}
			case 65: {
				globalvars.v_right[0] = $quake_prog.cast_float(value);
				break;
			}
			case 66: {
				globalvars.v_right[1] = $quake_prog.cast_float(value);
				break;
			}
			case 67: {
				globalvars.v_right[2] = $quake_prog.cast_float(value);
				break;
			}
			case 68: {
				globalvars.trace_allsolid = $quake_prog.cast_float(value);
				break;
			}
			case 69: {
				globalvars.trace_startsolid = $quake_prog.cast_float(value);
				break;
			}
			case 70: {
				globalvars.trace_fraction = $quake_prog.cast_float(value);
				break;
			}
			case 71: {
				globalvars.trace_endpos[0] = $quake_prog.cast_float(value);
				break;
			}
			case 72: {
				globalvars.trace_endpos[1] = $quake_prog.cast_float(value);
				break;
			}
			case 73: {
				globalvars.trace_endpos[2] = $quake_prog.cast_float(value);
				break;
			}
			case 74: {
				globalvars.trace_plane_normal[0] = $quake_prog.cast_float(value);
				break;
			}
			case 75: {
				globalvars.trace_plane_normal[1] = $quake_prog.cast_float(value);
				break;
			}
			case 76: {
				globalvars.trace_plane_normal[2] = $quake_prog.cast_float(value);
				break;
			}
			case 77: {
				globalvars.trace_plane_dist = $quake_prog.cast_float(value);
				break;
			}
			case 78: {
				globalvars.trace_ent = $quake_prog.cast_int(value);
				break;
			}
			case 79: {
				globalvars.trace_inopen = $quake_prog.cast_float(value);
				break;
			}
			case 80: {
				globalvars.trace_inwater = $quake_prog.cast_float(value);
				break;
			}
			case 81: {
				globalvars.msg_entity = $quake_prog.cast_int(value);
				break;
			}
			case 82: {
				globalvars.main = $quake_prog.cast_int(value);
				break;
			}
			case 83: {
				globalvars.startFrame = $quake_prog.cast_int(value);
				break;
			}
			case 84: {
				globalvars.playerPreThink = $quake_prog.cast_int(value);
				break;
			}
			case 85: {
				globalvars.playerPostThink = $quake_prog.cast_int(value);
				break;
			}
			case 86: {
				globalvars.clientKill = $quake_prog.cast_int(value);
				break;
			}
			case 87: {
				globalvars.clientConnect = $quake_prog.cast_int(value);
				break;
			}
			case 88: {
				globalvars.putClientInServer = $quake_prog.cast_int(value);
				break;
			}
			case 89: {
				globalvars.clientDisconnect = $quake_prog.cast_int(value);
				break;
			}
			case 90: {
				globalvars.setNewParms = $quake_prog.cast_int(value);
				break;
			}
			case 91: {
				globalvars.setChangeParms = $quake_prog.cast_int(value);
				break;
			}
			default: {
				break;
			}
		}
	};
	$quake_prog.pr_globals_read = function(address) {
		var globalvars = $quake_prog.pr_global_struct[ss.Int32.div(address * 4, $quake_prog.sizeof_globalvars_t)];
		var offset = address % 92;
		switch (offset) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27: {
				return globalvars.pad[offset];
			}
			case 28: {
				return globalvars.self;
			}
			case 29: {
				return globalvars.other;
			}
			case 30: {
				return globalvars.world;
			}
			case 31: {
				return globalvars.time;
			}
			case 32: {
				return globalvars.frametime;
			}
			case 33: {
				return globalvars.force_retouch;
			}
			case 34: {
				return globalvars.mapname;
			}
			case 35: {
				return globalvars.deathmatch;
			}
			case 36: {
				return globalvars.coop;
			}
			case 37: {
				return globalvars.teamplay;
			}
			case 38: {
				return globalvars.serverflags;
			}
			case 39: {
				return globalvars.total_secrets;
			}
			case 40: {
				return globalvars.total_monsters;
			}
			case 41: {
				return globalvars.found_secrets;
			}
			case 42: {
				return globalvars.killed_monsters;
			}
			case 43: {
				return globalvars.parm1;
			}
			case 44: {
				return globalvars.parm2;
			}
			case 45: {
				return globalvars.parm3;
			}
			case 46: {
				return globalvars.parm4;
			}
			case 47: {
				return globalvars.parm5;
			}
			case 48: {
				return globalvars.parm6;
			}
			case 49: {
				return globalvars.parm7;
			}
			case 50: {
				return globalvars.parm8;
			}
			case 51: {
				return globalvars.parm9;
			}
			case 52: {
				return globalvars.parm10;
			}
			case 53: {
				return globalvars.parm11;
			}
			case 54: {
				return globalvars.parm12;
			}
			case 55: {
				return globalvars.parm13;
			}
			case 56: {
				return globalvars.parm14;
			}
			case 57: {
				return globalvars.parm15;
			}
			case 58: {
				return globalvars.parm16;
			}
			case 59: {
				return globalvars.v_forward[0];
			}
			case 60: {
				return globalvars.v_forward[1];
			}
			case 61: {
				return globalvars.v_forward[2];
			}
			case 62: {
				return globalvars.v_up[0];
			}
			case 63: {
				return globalvars.v_up[1];
			}
			case 64: {
				return globalvars.v_up[2];
			}
			case 65: {
				return globalvars.v_right[0];
			}
			case 66: {
				return globalvars.v_right[1];
			}
			case 67: {
				return globalvars.v_right[2];
			}
			case 68: {
				return globalvars.trace_allsolid;
			}
			case 69: {
				return globalvars.trace_startsolid;
			}
			case 70: {
				return globalvars.trace_fraction;
			}
			case 71: {
				return globalvars.trace_endpos[0];
			}
			case 72: {
				return globalvars.trace_endpos[1];
			}
			case 73: {
				return globalvars.trace_endpos[2];
			}
			case 74: {
				return globalvars.trace_plane_normal[0];
			}
			case 75: {
				return globalvars.trace_plane_normal[1];
			}
			case 76: {
				return globalvars.trace_plane_normal[2];
			}
			case 77: {
				return globalvars.trace_plane_dist;
			}
			case 78: {
				return globalvars.trace_ent;
			}
			case 79: {
				return globalvars.trace_inopen;
			}
			case 80: {
				return globalvars.trace_inwater;
			}
			case 81: {
				return globalvars.msg_entity;
			}
			case 82: {
				return globalvars.main;
			}
			case 83: {
				return globalvars.startFrame;
			}
			case 84: {
				return globalvars.playerPreThink;
			}
			case 85: {
				return globalvars.playerPostThink;
			}
			case 86: {
				return globalvars.clientKill;
			}
			case 87: {
				return globalvars.clientConnect;
			}
			case 88: {
				return globalvars.putClientInServer;
			}
			case 89: {
				return globalvars.clientDisconnect;
			}
			case 90: {
				return globalvars.setNewParms;
			}
			case 91: {
				return globalvars.setChangeParms;
			}
		}
		return null;
	};
	$quake_prog.cast_float = function(value) {
		if (ss.isNullOrUndefined(value)) {
			return 0;
		}
		if (ss.referenceEquals(Type.getInstanceType(value), ss.Int32)) {
			return BitConverter.toSingle(BitConverter.getBytes(ss.Nullable.unbox(Type.cast(value, ss.Int32))), 0);
		}
		else {
			return ss.Nullable.unbox(Type.cast(value, Number));
		}
	};
	$quake_prog.cast_int = function(value) {
		if (ss.isNullOrUndefined(value)) {
			return 0;
		}
		if (ss.referenceEquals(Type.getInstanceType(value), Number)) {
			return BitConverter.toInt32(BitConverter.getBytes(ss.Nullable.unbox(Type.cast(value, Number))), 0);
		}
		else {
			return ss.Nullable.unbox(Type.cast(value, ss.Int32));
		}
	};
	$quake_prog.getStringIndex = function(str) {
		var index = {};
		if ($quake_prog.$stringDictionary.tryGetValue(str, index)) {
			return index.$;
		}
		$quake_prog.$stringDictionary.add(str, $quake_prog.$strings);
		$quake_prog.$stringPool[$quake_prog.$strings] = str;
		return $quake_prog.$strings++;
	};
	$quake_prog.pR_LoadProgs = function() {
		var i;
		var buf;
		var kk;
		var bbuf;
		$quake_prog.pr_crc = $quake_crc.crC_Init();
		buf = $quake_common.coM_LoadHunkFile('progs.dat');
		$quake_prog.$progs = $quake_prog$dprograms_t.op_Implicit(buf);
		if (ss.isNullOrUndefined($quake_prog.$progs)) {
			$quake_sys_linux.sys_Error('PR_LoadProgs: couldn\'t load progs.dat');
		}
		$quake_console.con_DPrintf('Programs occupy ' + ss.Int32.div($quake_common.com_filesize, 1024) + 'K.\n');
		for (i = 0; i < $quake_common.com_filesize; i++) {
			$quake_prog.pr_crc = $quake_crc.crC_ProcessByte($quake_prog.pr_crc, buf[i]);
		}
		if ($quake_prog.$progs.version !== $quake_prog.proG_VERSION) {
			$quake_sys_linux.sys_Error('progs.dat has wrong version number (' + $quake_prog.$progs.version + ' should be ' + $quake_prog.proG_VERSION + ')');
		}
		if ($quake_prog.$progs.crc !== $quake_prog.progheadeR_CRC) {
			$quake_sys_linux.sys_Error('progs.dat system vars have been modified, progdefs.h is out of date');
		}
		bbuf = new $Helper_helper$ByteBuffer.$ctor1(buf);
		//pr_functions = (dfunction_t*)((byte*)progs + progs.ofs_functions);
		bbuf.ofs = $quake_prog.$progs.ofs_functions;
		$quake_prog.pr_functions = new Array($quake_prog.$progs.numfunctions);
		for (kk = 0; kk < $quake_prog.$progs.numfunctions; kk++) {
			$quake_prog.pr_functions[kk] = $quake_prog$dfunction_t.op_Implicit(bbuf);
			bbuf.ofs += $quake_prog.sizeof_dfunction_t;
		}
		//pr_strings = (char*)progs + progs.ofs_strings;
		$quake_prog.$pr_strings = buf;
		//pr_globaldefs = (ddef_t*)((byte*)progs + progs.ofs_globaldefs);
		bbuf.ofs = $quake_prog.$progs.ofs_globaldefs;
		$quake_prog.$pr_globaldefs = new Array($quake_prog.$progs.numglobaldefs);
		for (kk = 0; kk < $quake_prog.$progs.numglobaldefs; kk++) {
			$quake_prog.$pr_globaldefs[kk] = $quake_prog$ddef_t.op_Implicit(bbuf);
			bbuf.ofs += $quake_prog.sizeof_ddef_t;
		}
		//pr_fielddefs = (ddef_t*)((byte*)progs + progs.ofs_fielddefs);
		bbuf.ofs = $quake_prog.$progs.ofs_fielddefs;
		$quake_prog.$pr_fielddefs = new Array($quake_prog.$progs.numfielddefs);
		for (kk = 0; kk < $quake_prog.$progs.numfielddefs; kk++) {
			$quake_prog.$pr_fielddefs[kk] = $quake_prog$ddef_t.op_Implicit(bbuf);
			bbuf.ofs += $quake_prog.sizeof_ddef_t;
		}
		//pr_statements = (dstatement_t*)((byte*)progs + progs.ofs_statements);
		bbuf.ofs = $quake_prog.$progs.ofs_statements;
		$quake_prog.$pr_statements = new Array($quake_prog.$progs.numstatements);
		for (kk = 0; kk < $quake_prog.$progs.numstatements; kk++) {
			$quake_prog.$pr_statements[kk] = $quake_prog$dstatement_t.op_Implicit(bbuf);
			bbuf.ofs += $quake_prog.sizeof_dstatement_t;
		}
		//pr_global_struct = (globalvars_t*)((byte*)progs + progs.ofs_globals);
		bbuf.ofs = $quake_prog.$progs.ofs_globals;
		$quake_prog.pr_global_struct = new Array(ss.Int32.div($quake_prog.$progs.numglobals * 4, 368));
		for (kk = 0; kk < ss.Int32.div($quake_prog.$progs.numglobals * 4, 368); kk++) {
			$quake_prog.pr_global_struct[kk] = $quake_prog$globalvars_t.op_Implicit(bbuf);
			bbuf.ofs += $quake_prog.sizeof_globalvars_t;
		}
		$quake_prog.pr_edict_size = $quake_prog.$progs.entityfields * 4 + $quake_prog.sizeof_edict_t - $quake_prog.sizeof_entvars_t;
	};
	$quake_prog.pR_Init = function() {
		//Cmd_AddCommand ("edict", ED_PrintEdict_f);
		//Cmd_AddCommand ("edicts", ED_PrintEdicts);
		//Cmd_AddCommand ("edictcount", ED_Count);
		//Cmd_AddCommand ("profile", PR_Profile_f);
		$quake_cvar_t.cvar_RegisterVariable($quake_prog.$nomonsters);
		$quake_cvar_t.cvar_RegisterVariable($quake_prog.$gamecfg);
		$quake_cvar_t.cvar_RegisterVariable($quake_prog.$scratch1);
		$quake_cvar_t.cvar_RegisterVariable($quake_prog.$scratch2);
		$quake_cvar_t.cvar_RegisterVariable($quake_prog.$scratch3);
		$quake_cvar_t.cvar_RegisterVariable($quake_prog.$scratch4);
		$quake_cvar_t.cvar_RegisterVariable($quake_prog.$savedgamecfg);
		$quake_cvar_t.cvar_RegisterVariable($quake_prog.$saved1);
		$quake_cvar_t.cvar_RegisterVariable($quake_prog.$saved2);
		$quake_cvar_t.cvar_RegisterVariable($quake_prog.$saved3);
		$quake_cvar_t.cvar_RegisterVariable($quake_prog.$saved4);
	};
	$quake_prog.edicT_NUM = function(n) {
		if (n < 0 || n >= $quake_server.sv.max_edicts) {
			$quake_sys_linux.sys_Error('EDICT_NUM: bad number ' + n);
		}
		return $quake_server.sv.edicts[n];
	};
	$quake_prog.nuM_FOR_EDICT = function(e) {
		var b;
		b = e.index;
		if (b < 0 || b >= $quake_server.sv.num_edicts) {
			$quake_sys_linux.sys_Error('NUM_FOR_EDICT: bad pointer');
		}
		return b;
	};
	$quake_prog.$pR_PrintStatement = function(s) {
		var i;
		if (s.op < $quake_prog.$pr_opnames.length) {
			$quake_console.con_Printf($quake_prog.$pr_opnames[s.op] + ' ');
			i = $quake_prog.$pr_opnames[s.op].length;
			for (; i < 10; i++) {
				$quake_console.con_Printf(' ');
			}
		}
		if (s.op === 49 || s.op === 50) {
			$quake_console.con_Printf($quake_prog.$pR_GlobalString(s.a) + 'branch ' + s.b);
		}
		else if (s.op === 61) {
			$quake_console.con_Printf('branch ' + s.a);
		}
		else if (s.op - 31 < 6) {
			$quake_console.con_Printf($quake_prog.$pR_GlobalString(s.a));
			$quake_console.con_Printf($quake_prog.$pR_GlobalStringNoContents(s.b));
		}
		else {
			if (s.a !== 0) {
				$quake_console.con_Printf($quake_prog.$pR_GlobalString(s.a));
			}
			if (s.b !== 0) {
				$quake_console.con_Printf($quake_prog.$pR_GlobalString(s.b));
			}
			if (s.c !== 0) {
				$quake_console.con_Printf($quake_prog.$pR_GlobalStringNoContents(s.c));
			}
		}
		$quake_console.con_Printf('\n');
	};
	$quake_prog.$pR_StackTrace = function() {
		var f;
		var i;
		if ($quake_prog.$pr_depth === 0) {
			$quake_console.con_Printf('<NO STACK>\n');
			return;
		}
		$quake_prog.$pr_stack[$quake_prog.$pr_depth].f = $quake_prog.$pr_xfunction;
		for (i = $quake_prog.$pr_depth; i >= 0; i--) {
			f = $quake_prog.$pr_stack[i].f;
			if (ss.isNullOrUndefined(f)) {
				$quake_console.con_Printf('<NO FUNCTION>\n');
			}
			else {
				$quake_console.con_Printf($quake_prog.pr_string(f.s_file) + ' : ' + $quake_prog.pr_string(f.s_name) + '\n');
			}
		}
	};
	$quake_prog.$pR_Profile_f = function() {
		var f, best;
		var max;
		var num;
		var i;
		num = 0;
		do {
			max = 0;
			best = null;
			for (i = 0; i < $quake_prog.$progs.numfunctions; i++) {
				f = $quake_prog.pr_functions[i];
				if (f.profile > max) {
					max = f.profile;
					best = f;
				}
			}
			if (ss.isValue(best)) {
				if (num < 10) {
					$quake_console.con_Printf(best.profile + ' ' + $quake_prog.pr_string(best.s_name) + '\n');
				}
				num++;
				best.profile = 0;
			}
		} while (ss.isValue(best));
	};
	$quake_prog.$pR_RunError = function(error) {
		var string = $System_StringExtensions.stringOfLength(1024);
		string = error;
		$quake_prog.$pR_PrintStatement($quake_prog.$pr_statements[$quake_prog.$pr_xstatement]);
		$quake_prog.$pR_StackTrace();
		$quake_console.con_Printf(string + '\n');
		$quake_prog.$pr_depth = 0;
		// dump the stack so host_error can shutdown functions
		$quake_host.host_Error('Program error');
	};
	$quake_prog.pR_EnterFunction = function(f) {
		var i, j, c, o;
		$quake_prog.$pr_stack[$quake_prog.$pr_depth].s = $quake_prog.$pr_xstatement;
		$quake_prog.$pr_stack[$quake_prog.$pr_depth].f = $quake_prog.$pr_xfunction;
		$quake_prog.$pr_depth++;
		if ($quake_prog.$pr_depth >= $quake_prog.maX_STACK_DEPTH) {
			$quake_prog.$pR_RunError('stack overflow');
		}
		// save off any locals that the new function steps on
		c = f.locals;
		if ($quake_prog.$localstack_used + c > $quake_prog.localstacK_SIZE) {
			$quake_prog.$pR_RunError('PR_ExecuteProgram: locals stack overflow\n');
		}
		for (i = 0; i < c; i++) {
			$quake_prog.$localstack[$quake_prog.$localstack_used + i] = $quake_prog.cast_int($quake_prog.pr_globals_read(f.parm_start + i));
		}
		$quake_prog.$localstack_used += c;
		// copy parameters
		o = f.parm_start;
		for (i = 0; i < f.numparms; i++) {
			for (j = 0; j < f.parm_size[i]; j++) {
				$quake_prog.pr_globals_write(o, $quake_prog.pr_globals_read($quake_prog.ofS_PARM0 + i * 3 + j));
				o++;
			}
		}
		$quake_prog.$pr_xfunction = f;
		return f.first_statement - 1;
		// offset the s++
	};
	$quake_prog.$pR_LeaveFunction = function() {
		var i, c;
		if ($quake_prog.$pr_depth <= 0) {
			$quake_sys_linux.sys_Error('prog stack underflow');
		}
		// restore locals from the stack
		c = $quake_prog.$pr_xfunction.locals;
		$quake_prog.$localstack_used -= c;
		if ($quake_prog.$localstack_used < 0) {
			$quake_prog.$pR_RunError('PR_ExecuteProgram: locals stack underflow\n');
		}
		for (i = 0; i < c; i++) {
			$quake_prog.pr_globals_write($quake_prog.$pr_xfunction.parm_start + i, $quake_prog.$localstack[$quake_prog.$localstack_used + i]);
		}
		// up stack
		$quake_prog.$pr_depth--;
		$quake_prog.$pr_xfunction = $quake_prog.$pr_stack[$quake_prog.$pr_depth].f;
		return $quake_prog.$pr_stack[$quake_prog.$pr_depth].s;
	};
	$quake_prog.$readentvar = function(entvars, offset) {
		if (offset > 104) {
			return entvars.variables[offset - 105];
		}
		switch (offset) {
			case 0: {
				return entvars.modelindex;
			}
			case 7: {
				return entvars.ltime;
			}
			case 8: {
				return entvars.movetype;
			}
			case 9: {
				return entvars.solid;
			}
			case 10: {
				return entvars.origin[0];
			}
			case 11: {
				return entvars.origin[1];
			}
			case 12: {
				return entvars.origin[2];
			}
			case 16: {
				return entvars.velocity[0];
			}
			case 17: {
				return entvars.velocity[1];
			}
			case 18: {
				return entvars.velocity[2];
			}
			case 19: {
				return entvars.angles[0];
			}
			case 20: {
				return entvars.angles[1];
			}
			case 21: {
				return entvars.angles[2];
			}
			case 28: {
				return entvars.classname;
			}
			case 29: {
				return entvars.model;
			}
			case 33: {
				return entvars.mins[0];
			}
			case 34: {
				return entvars.mins[1];
			}
			case 35: {
				return entvars.mins[2];
			}
			case 36: {
				return entvars.maxs[0];
			}
			case 37: {
				return entvars.maxs[1];
			}
			case 38: {
				return entvars.maxs[2];
			}
			case 39: {
				return entvars.size[0];
			}
			case 40: {
				return entvars.size[1];
			}
			case 41: {
				return entvars.size[2];
			}
			case 48: {
				return entvars.health;
			}
			case 49: {
				return entvars.frags;
			}
			case 50: {
				return entvars.weapon;
			}
			case 52: {
				return entvars.weaponframe;
			}
			case 53: {
				return entvars.currentammo;
			}
			case 54: {
				return entvars.ammo_shells;
			}
			case 55: {
				return entvars.ammo_nails;
			}
			case 56: {
				return entvars.ammo_rockets;
			}
			case 57: {
				return entvars.ammo_cells;
			}
			case 58: {
				return entvars.items;
			}
			case 59: {
				return entvars.takedamage;
			}
			case 61: {
				return entvars.deadflag;
			}
			case 62: {
				return entvars.view_ofs[0];
			}
			case 63: {
				return entvars.view_ofs[1];
			}
			case 64: {
				return entvars.view_ofs[2];
			}
			case 65: {
				return entvars.button0;
			}
			case 66: {
				return entvars.button1;
			}
			case 67: {
				return entvars.button2;
			}
			case 68: {
				return entvars.impulse;
			}
			case 70: {
				return entvars.v_angle[0];
			}
			case 71: {
				return entvars.v_angle[1];
			}
			case 72: {
				return entvars.v_angle[2];
			}
			case 74: {
				return entvars.netname;
			}
			case 76: {
				return entvars.flags;
			}
			case 78: {
				return entvars.team;
			}
			case 79: {
				return entvars.max_health;
			}
			case 81: {
				return entvars.armortype;
			}
			case 82: {
				return entvars.armorvalue;
			}
			case 83: {
				return entvars.waterlevel;
			}
			case 84: {
				return entvars.watertype;
			}
			case 89: {
				return entvars.spawnflags;
			}
			case 90: {
				return entvars.target;
			}
			case 91: {
				return entvars.targetname;
			}
			case 92: {
				return entvars.dmg_take;
			}
			case 93: {
				return entvars.dmg_save;
			}
			case 95: {
				return entvars.owner;
			}
			case 96: {
				return entvars.movedir[0];
			}
			case 97: {
				return entvars.movedir[1];
			}
			case 98: {
				return entvars.movedir[2];
			}
			case 100: {
				return entvars.sounds;
			}
			case 101: {
				return entvars.noise;
			}
		}
		return null;
	};
	$quake_prog.$readptr = function(address) {
		var entvars = $quake_server.sv.edicts[ss.Int32.div(address, $quake_prog.pr_edict_size)].v;
		var offset = ss.Int32.div(address % $quake_prog.pr_edict_size - 96, 4);
		return $quake_prog.$readentvar(entvars, offset);
	};
	$quake_prog.$writeptr = function(address, value) {
		var entvars = $quake_server.sv.edicts[ss.Int32.div(address, $quake_prog.pr_edict_size)].v;
		var offset = ss.Int32.div(address % $quake_prog.pr_edict_size - 96, 4);
		if (offset > 104) {
			entvars.variables[offset - 105] = value;
			return;
		}
		switch (offset) {
			case 0: {
				entvars.modelindex = $quake_prog.cast_float(value);
				break;
			}
			case 8: {
				entvars.movetype = $quake_prog.cast_float(value);
				break;
			}
			case 9: {
				entvars.solid = $quake_prog.cast_float(value);
				break;
			}
			case 10: {
				entvars.origin[0] = $quake_prog.cast_float(value);
				break;
			}
			case 11: {
				entvars.origin[1] = $quake_prog.cast_float(value);
				break;
			}
			case 12: {
				entvars.origin[2] = $quake_prog.cast_float(value);
				break;
			}
			case 19: {
				entvars.angles[0] = $quake_prog.cast_float(value);
				break;
			}
			case 20: {
				entvars.angles[1] = $quake_prog.cast_float(value);
				break;
			}
			case 21: {
				entvars.angles[2] = $quake_prog.cast_float(value);
				break;
			}
			case 28: {
				entvars.classname = $quake_prog.cast_int(value);
				break;
			}
			case 29: {
				entvars.model = $quake_prog.cast_int(value);
				break;
			}
			case 30: {
				entvars.frame = $quake_prog.cast_float(value);
				break;
			}
			case 32: {
				entvars.effects = $quake_prog.cast_float(value);
				break;
			}
			case 39: {
				entvars.size[0] = $quake_prog.cast_float(value);
				break;
			}
			case 40: {
				entvars.size[1] = $quake_prog.cast_float(value);
				break;
			}
			case 41: {
				entvars.size[2] = $quake_prog.cast_float(value);
				break;
			}
			case 42: {
				entvars.touch = $quake_prog.cast_int(value);
				break;
			}
			case 43: {
				entvars.use = $quake_prog.cast_int(value);
				break;
			}
			case 44: {
				entvars.think = $quake_prog.cast_int(value);
				break;
			}
			case 45: {
				entvars.blocked = $quake_prog.cast_int(value);
				break;
			}
			case 46: {
				entvars.nextthink = $quake_prog.cast_float(value);
				break;
			}
			case 48: {
				entvars.health = $quake_prog.cast_float(value);
				break;
			}
			case 50: {
				entvars.weapon = $quake_prog.cast_float(value);
				break;
			}
			case 51: {
				entvars.weaponmodel = $quake_prog.cast_int(value);
				break;
			}
			case 52: {
				entvars.weaponframe = $quake_prog.cast_float(value);
				break;
			}
			case 53: {
				entvars.currentammo = $quake_prog.cast_float(value);
				break;
			}
			case 54: {
				entvars.ammo_shells = $quake_prog.cast_float(value);
				break;
			}
			case 55: {
				entvars.ammo_nails = $quake_prog.cast_float(value);
				break;
			}
			case 56: {
				entvars.ammo_rockets = $quake_prog.cast_float(value);
				break;
			}
			case 57: {
				entvars.ammo_cells = $quake_prog.cast_float(value);
				break;
			}
			case 58: {
				entvars.items = $quake_prog.cast_float(value);
				break;
			}
			case 59: {
				entvars.takedamage = $quake_prog.cast_float(value);
				break;
			}
			case 61: {
				entvars.deadflag = $quake_prog.cast_float(value);
				break;
			}
			case 62: {
				entvars.view_ofs[0] = $quake_prog.cast_float(value);
				break;
			}
			case 63: {
				entvars.view_ofs[1] = $quake_prog.cast_float(value);
				break;
			}
			case 64: {
				entvars.view_ofs[2] = $quake_prog.cast_float(value);
				break;
			}
			case 69: {
				entvars.fixangle = $quake_prog.cast_float(value);
				break;
			}
			case 76: {
				entvars.flags = $quake_prog.cast_float(value);
				break;
			}
			case 79: {
				entvars.max_health = $quake_prog.cast_float(value);
				break;
			}
			case 81: {
				entvars.armortype = $quake_prog.cast_float(value);
				break;
			}
			case 82: {
				entvars.armorvalue = $quake_prog.cast_float(value);
				break;
			}
			case 89: {
				entvars.spawnflags = $quake_prog.cast_float(value);
				break;
			}
			case 95: {
				entvars.owner = $quake_prog.cast_int(value);
				break;
			}
			case 96: {
				entvars.movedir[0] = $quake_prog.cast_float(value);
				break;
			}
			case 97: {
				entvars.movedir[1] = $quake_prog.cast_float(value);
				break;
			}
			case 98: {
				entvars.movedir[2] = $quake_prog.cast_float(value);
				break;
			}
			case 100: {
				entvars.sounds = $quake_prog.cast_float(value);
				break;
			}
			case 101: {
				entvars.noise = $quake_prog.cast_int(value);
				break;
			}
			case 102: {
				entvars.noise1 = $quake_prog.cast_int(value);
				break;
			}
			case 103: {
				entvars.noise2 = $quake_prog.cast_int(value);
				break;
			}
			case 104: {
				entvars.noise3 = $quake_prog.cast_int(value);
				break;
			}
			default: {
				break;
			}
		}
	};
	$quake_prog.pR_ExecuteProgram = function(fnum) {
		//	        eval_t	*a, *b, *c;
		var s;
		var st;
		var newf;
		//dfunction_t	*f;
		var runaway;
		var i;
		var ed;
		var exitdepth;
		//eval_t	*ptr;
		//if (!fnum || fnum >= progs.numfunctions)
		//{
		//if (pr_global_struct.self)
		//ED_Print (PROG_TO_EDICT(pr_global_struct.self));
		//Host_Error ("PR_ExecuteProgram: NULL function");
		//}
		//
		//f = &pr_functions[fnum];
		runaway = 100000;
		$quake_prog.$pr_trace = false;
		// make a stack frame
		exitdepth = $quake_prog.$pr_depth;
		s = $quake_prog.pR_EnterFunction(fnum);
		while (true) {
			s++;
			// next statement
			st = $quake_prog.$pr_statements[s];
			if (--runaway === 0) {
				$quake_prog.$pR_RunError('runaway loop error');
			}
			$quake_prog.$pr_xfunction.profile++;
			$quake_prog.$pr_xstatement = s;
			if ($quake_prog.$pr_trace) {
				$quake_prog.$pR_PrintStatement(st);
			}
			if (st.c === 7505) {
				st.c = st.c;
			}
			var eval;
			switch (st.op) {
				case 6: {
					$quake_prog.pr_globals_write(st.c, $quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) + $quake_prog.cast_float($quake_prog.pr_globals_read(st.b)));
					break;
				}
				case 7: {
					$quake_prog.pr_globals_write(st.c, $quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) + $quake_prog.cast_float($quake_prog.pr_globals_read(st.b)));
					$quake_prog.pr_globals_write(st.c + 1, $quake_prog.cast_float($quake_prog.pr_globals_read(st.a + 1)) + $quake_prog.cast_float($quake_prog.pr_globals_read(st.b + 1)));
					$quake_prog.pr_globals_write(st.c + 2, $quake_prog.cast_float($quake_prog.pr_globals_read(st.a + 2)) + $quake_prog.cast_float($quake_prog.pr_globals_read(st.b + 2)));
					break;
				}
				case 8: {
					$quake_prog.pr_globals_write(st.c, $quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) - $quake_prog.cast_float($quake_prog.pr_globals_read(st.b)));
					break;
				}
				case 9: {
					$quake_prog.pr_globals_write(st.c, $quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) - $quake_prog.cast_float($quake_prog.pr_globals_read(st.b)));
					$quake_prog.pr_globals_write(st.c + 1, $quake_prog.cast_float($quake_prog.pr_globals_read(st.a + 1)) - $quake_prog.cast_float($quake_prog.pr_globals_read(st.b + 1)));
					$quake_prog.pr_globals_write(st.c + 2, $quake_prog.cast_float($quake_prog.pr_globals_read(st.a + 2)) - $quake_prog.cast_float($quake_prog.pr_globals_read(st.b + 2)));
					break;
				}
				case 1: {
					$quake_prog.pr_globals_write(st.c, $quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) * $quake_prog.cast_float($quake_prog.pr_globals_read(st.b)));
					break;
				}
				case 2: {
					var res = $quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) * $quake_prog.cast_float($quake_prog.pr_globals_read(st.b)) + $quake_prog.cast_float($quake_prog.pr_globals_read(st.a + 1)) * $quake_prog.cast_float($quake_prog.pr_globals_read(st.b + 1)) + $quake_prog.cast_float($quake_prog.pr_globals_read(st.a + 2)) * $quake_prog.cast_float($quake_prog.pr_globals_read(st.b + 2));
					$quake_prog.pr_globals_write(st.c, res);
					break;
				}
				case 4: {
					$quake_prog.pr_globals_write(st.c, $quake_prog.cast_float($quake_prog.pr_globals_read(st.b)) * $quake_prog.cast_float($quake_prog.pr_globals_read(st.a)));
					$quake_prog.pr_globals_write(st.c + 1, $quake_prog.cast_float($quake_prog.pr_globals_read(st.b + 1)) * $quake_prog.cast_float($quake_prog.pr_globals_read(st.a + 1)));
					$quake_prog.pr_globals_write(st.c + 2, $quake_prog.cast_float($quake_prog.pr_globals_read(st.b + 2)) * $quake_prog.cast_float($quake_prog.pr_globals_read(st.a + 2)));
					break;
				}
				case 64: {
					$quake_prog.pr_globals_write(st.c, ss.Int32.trunc($quake_prog.cast_float($quake_prog.pr_globals_read(st.a))) & ss.Int32.trunc($quake_prog.cast_float($quake_prog.pr_globals_read(st.b))));
					break;
				}
				case 65: {
					$quake_prog.pr_globals_write(st.c, ss.Int32.trunc($quake_prog.cast_float($quake_prog.pr_globals_read(st.a))) | ss.Int32.trunc($quake_prog.cast_float($quake_prog.pr_globals_read(st.b))));
					break;
				}
				case 21: {
					$quake_prog.pr_globals_write(st.c, (($quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) >= $quake_prog.cast_float($quake_prog.pr_globals_read(st.b))) ? 1 : 0));
					break;
				}
				case 20: {
					$quake_prog.pr_globals_write(st.c, (($quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) <= $quake_prog.cast_float($quake_prog.pr_globals_read(st.b))) ? 1 : 0));
					break;
				}
				case 23: {
					$quake_prog.pr_globals_write(st.c, (($quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) > $quake_prog.cast_float($quake_prog.pr_globals_read(st.b))) ? 1 : 0));
					break;
				}
				case 22: {
					$quake_prog.pr_globals_write(st.c, (($quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) < $quake_prog.cast_float($quake_prog.pr_globals_read(st.b))) ? 1 : 0));
					break;
				}
				case 62: {
					$quake_prog.pr_globals_write(st.c, (($quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) !== 0 && $quake_prog.cast_float($quake_prog.pr_globals_read(st.b)) !== 0) ? 1 : 0));
					break;
				}
				case 63: {
					$quake_prog.pr_globals_write(st.c, (($quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) !== 0 || $quake_prog.cast_float($quake_prog.pr_globals_read(st.b)) !== 0) ? 1 : 0));
					break;
				}
				case 44: {
					$quake_prog.pr_globals_write(st.c, (($quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) === 0) ? 1 : 0));
					break;
				}
				case 46: {
					var astring = $quake_prog.cast_int($quake_prog.pr_globals_read(st.a));
					$quake_prog.pr_globals_write(st.c, ((astring === 0 || ss.isNullOrUndefined($quake_prog.pr_string(astring))) ? 1 : 0));
					break;
				}
				case 48: {
					$quake_prog.pr_globals_write(st.c, (($quake_prog.cast_int($quake_prog.pr_globals_read(st.a)) === 0) ? 1 : 0));
					break;
				}
				case 47: {
					$quake_prog.pr_globals_write(st.c, (ss.referenceEquals($quake_prog.proG_TO_EDICT($quake_prog.cast_int($quake_prog.pr_globals_read(st.a))), $quake_server.sv.edicts[0]) ? 1 : 0));
					break;
				}
				case 10: {
					$quake_prog.pr_globals_write(st.c, (($quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) === $quake_prog.cast_float($quake_prog.pr_globals_read(st.b))) ? 1 : 0));
					break;
				}
				case 11: {
					eval = $quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) === $quake_prog.cast_float($quake_prog.pr_globals_read(st.b)) && $quake_prog.cast_float($quake_prog.pr_globals_read(st.a + 1)) === $quake_prog.cast_float($quake_prog.pr_globals_read(st.b + 1)) && $quake_prog.cast_float($quake_prog.pr_globals_read(st.a + 2)) === $quake_prog.cast_float($quake_prog.pr_globals_read(st.b + 2));
					$quake_prog.pr_globals_write(st.c, (eval ? 1 : 0));
					break;
				}
				case 12: {
					$quake_prog.pr_globals_write(st.c, (($quake_prog.pr_string($quake_prog.cast_int($quake_prog.pr_globals_read(st.a))).compareTo($quake_prog.pr_string($quake_prog.cast_int($quake_prog.pr_globals_read(st.b)))) === 0) ? 1 : 0));
					break;
				}
				case 16: {
					eval = $quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) !== $quake_prog.cast_float($quake_prog.pr_globals_read(st.b)) || $quake_prog.cast_float($quake_prog.pr_globals_read(st.a + 1)) !== $quake_prog.cast_float($quake_prog.pr_globals_read(st.b + 1)) || $quake_prog.cast_float($quake_prog.pr_globals_read(st.a + 2)) !== $quake_prog.cast_float($quake_prog.pr_globals_read(st.b + 2));
					$quake_prog.pr_globals_write(st.c, (eval ? 1 : 0));
					break;
				}
				case 31:
				case 34:
				case 35:
				case 33:
				case 36: {
					$quake_prog.pr_globals_write(st.b, $quake_prog.pr_globals_read(st.a));
					break;
				}
				case 32: {
					$quake_prog.pr_globals_write(st.b, $quake_prog.cast_float($quake_prog.pr_globals_read(st.a)));
					$quake_prog.pr_globals_write(st.b + 1, $quake_prog.cast_float($quake_prog.pr_globals_read(st.a + 1)));
					$quake_prog.pr_globals_write(st.b + 2, $quake_prog.cast_float($quake_prog.pr_globals_read(st.a + 2)));
					break;
				}
				case 37:
				case 40:
				case 41:
				case 39:
				case 42: {
					$quake_prog.$writeptr($quake_prog.cast_int($quake_prog.pr_globals_read(st.b)), $quake_prog.cast_int($quake_prog.pr_globals_read(st.a)));
					break;
				}
				case 38: {
					$quake_prog.$writeptr($quake_prog.cast_int($quake_prog.pr_globals_read(st.b)), $quake_prog.cast_int($quake_prog.pr_globals_read(st.a)));
					$quake_prog.$writeptr($quake_prog.cast_int($quake_prog.pr_globals_read(st.b)) + 1, $quake_prog.cast_int($quake_prog.pr_globals_read(st.a + 1)));
					$quake_prog.$writeptr($quake_prog.cast_int($quake_prog.pr_globals_read(st.b)) + 2, $quake_prog.cast_int($quake_prog.pr_globals_read(st.a + 2)));
					break;
				}
				case 30: {
					ed = $quake_prog.proG_TO_EDICT($quake_prog.cast_int($quake_prog.pr_globals_read(st.a)));
					if (ss.referenceEquals(ed, $quake_server.sv.edicts[0]) && $quake_server.sv.state === 1) {
						$quake_prog.$pR_RunError('assignment to world entity');
					}
					$quake_prog.pr_globals_write(st.c, ed.index * $quake_prog.pr_edict_size + 96 + $quake_prog.cast_int($quake_prog.pr_globals_read(st.b)) * 4);
					break;
				}
				case 24:
				case 28:
				case 27:
				case 26:
				case 29: {
					ed = $quake_prog.proG_TO_EDICT($quake_prog.cast_int($quake_prog.pr_globals_read(st.a)));
					$quake_prog.pr_globals_write(st.c, $quake_prog.cast_int($quake_prog.$readptr(ed.index * $quake_prog.pr_edict_size + 96 + $quake_prog.cast_int($quake_prog.pr_globals_read(st.b)) * 4)));
					break;
				}
				case 25: {
					ed = $quake_prog.proG_TO_EDICT($quake_prog.cast_int($quake_prog.pr_globals_read(st.a)));
					$quake_prog.pr_globals_write(st.c, $quake_prog.cast_float($quake_prog.$readptr(ed.index * $quake_prog.pr_edict_size + 96 + $quake_prog.cast_int($quake_prog.pr_globals_read(st.b)) * 4)));
					$quake_prog.pr_globals_write(st.c + 1, $quake_prog.cast_float($quake_prog.$readptr(ed.index * $quake_prog.pr_edict_size + 96 + ($quake_prog.cast_int($quake_prog.pr_globals_read(st.b)) + 1) * 4)));
					$quake_prog.pr_globals_write(st.c + 2, $quake_prog.cast_float($quake_prog.$readptr(ed.index * $quake_prog.pr_edict_size + 96 + ($quake_prog.cast_int($quake_prog.pr_globals_read(st.b)) + 2) * 4)));
					break;
				}
				case 50: {
					if ($quake_prog.cast_int($quake_prog.pr_globals_read(st.a)) === 0) {
						s += st.b - 1;
					}
					break;
				}
				case 49: {
					if ($quake_prog.cast_int($quake_prog.pr_globals_read(st.a)) !== 0) {
						s += st.b - 1;
					}
					break;
				}
				case 61: {
					s += st.a - 1;
					break;
				}
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59: {
					$quake_prog.$pr_argc = st.op - 51;
					var afunction = $quake_prog.cast_int($quake_prog.pr_globals_read(st.a));
					if (afunction === 0) {
						$quake_prog.$pR_RunError('NULL function');
					}
					newf = $quake_prog.pr_functions[afunction];
					if (newf.first_statement < 0) {
						// negative statements are built in functions
						i = -newf.first_statement;
						if (i >= $quake_prog.$pr_numbuiltins) {
							$quake_prog.$pR_RunError('Bad builtin call number');
						}
						$quake_prog.$pr_builtins[i]();
						break;
					}
					s = $quake_prog.pR_EnterFunction(newf);
					break;
				}
				case 0:
				case 43: {
					$quake_prog.pr_globals_write($quake_prog.ofS_RETURN, $quake_prog.pr_globals_read(st.a));
					$quake_prog.pr_globals_write(2, $quake_prog.pr_globals_read(st.a + 1));
					$quake_prog.pr_globals_write(3, $quake_prog.pr_globals_read(st.a + 2));
					s = $quake_prog.$pR_LeaveFunction();
					if ($quake_prog.$pr_depth === exitdepth) {
						return;
					}
					break;
				}
				case 60: {
					ed = $quake_prog.proG_TO_EDICT($quake_prog.pr_global_struct[0].self);
					ed.v.nextthink = $quake_prog.pr_global_struct[0].time + 0.1;
					if ($quake_prog.cast_float($quake_prog.pr_globals_read(st.a)) !== ed.v.frame) {
						ed.v.frame = $quake_prog.cast_float($quake_prog.pr_globals_read(st.a));
					}
					ed.v.think = $quake_prog.cast_int($quake_prog.pr_globals_read(st.b));
					break;
				}
				default: {
					break;
				}
			}
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.prog.ddef_t
	var $quake_prog$ddef_t = function() {
		this.type = 0;
		this.ofs = 0;
		this.s_name = 0;
	};
	$quake_prog$ddef_t.op_Implicit = function(buf) {
		var ofs = buf.ofs;
		var ddef = new $quake_prog$ddef_t();
		ddef.type = BitConverter.toUInt16(buf.buffer, ofs);
		ofs += 2;
		ddef.ofs = BitConverter.toUInt16(buf.buffer, ofs);
		ofs += 2;
		ddef.s_name = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		return ddef;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.prog.dfunction_t
	var $quake_prog$dfunction_t = function() {
		this.first_statement = 0;
		this.parm_start = 0;
		this.locals = 0;
		this.profile = 0;
		this.s_name = 0;
		this.s_file = 0;
		this.numparms = 0;
		this.parm_size = new Uint8Array($quake_prog.maX_PARMS);
	};
	$quake_prog$dfunction_t.op_Implicit = function(buf) {
		var ofs = buf.ofs;
		var dfunction = new $quake_prog$dfunction_t();
		dfunction.first_statement = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		dfunction.parm_start = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		dfunction.locals = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		dfunction.profile = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		dfunction.s_name = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		dfunction.s_file = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		dfunction.numparms = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		for (var kk = 0; kk < $quake_prog.maX_PARMS; kk++) {
			dfunction.parm_size[kk] = buf.buffer[ofs++];
		}
		return dfunction;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.prog.dprograms_t
	var $quake_prog$dprograms_t = function() {
		this.version = 0;
		this.crc = 0;
		this.ofs_statements = 0;
		this.numstatements = 0;
		this.ofs_globaldefs = 0;
		this.numglobaldefs = 0;
		this.ofs_fielddefs = 0;
		this.numfielddefs = 0;
		this.ofs_functions = 0;
		this.numfunctions = 0;
		this.ofs_strings = 0;
		this.numstrings = 0;
		this.ofs_globals = 0;
		this.numglobals = 0;
		this.entityfields = 0;
	};
	$quake_prog$dprograms_t.op_Implicit = function(buf) {
		var ofs = 0;
		var dprograms = new $quake_prog$dprograms_t();
		dprograms.version = BitConverter.toInt32(buf, ofs);
		ofs += 4;
		dprograms.crc = BitConverter.toInt32(buf, ofs);
		ofs += 4;
		dprograms.ofs_statements = BitConverter.toInt32(buf, ofs);
		ofs += 4;
		dprograms.numstatements = BitConverter.toInt32(buf, ofs);
		ofs += 4;
		dprograms.ofs_globaldefs = BitConverter.toInt32(buf, ofs);
		ofs += 4;
		dprograms.numglobaldefs = BitConverter.toInt32(buf, ofs);
		ofs += 4;
		dprograms.ofs_fielddefs = BitConverter.toInt32(buf, ofs);
		ofs += 4;
		dprograms.numfielddefs = BitConverter.toInt32(buf, ofs);
		ofs += 4;
		dprograms.ofs_functions = BitConverter.toInt32(buf, ofs);
		ofs += 4;
		dprograms.numfunctions = BitConverter.toInt32(buf, ofs);
		ofs += 4;
		dprograms.ofs_strings = BitConverter.toInt32(buf, ofs);
		ofs += 4;
		dprograms.numstrings = BitConverter.toInt32(buf, ofs);
		ofs += 4;
		dprograms.ofs_globals = BitConverter.toInt32(buf, ofs);
		ofs += 4;
		dprograms.numglobals = BitConverter.toInt32(buf, ofs);
		ofs += 4;
		dprograms.entityfields = BitConverter.toInt32(buf, ofs);
		ofs += 4;
		return dprograms;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.prog.dstatement_t
	var $quake_prog$dstatement_t = function() {
		this.op = 0;
		this.a = 0;
		this.b = 0;
		this.c = 0;
	};
	$quake_prog$dstatement_t.op_Implicit = function(buf) {
		var ofs = buf.ofs;
		var dstatement = new $quake_prog$dstatement_t();
		dstatement.op = BitConverter.toUInt16(buf.buffer, ofs);
		ofs += 2;
		dstatement.a = BitConverter.toInt16(buf.buffer, ofs);
		ofs += 2;
		dstatement.b = BitConverter.toInt16(buf.buffer, ofs);
		ofs += 2;
		dstatement.c = BitConverter.toInt16(buf.buffer, ofs);
		ofs += 2;
		return dstatement;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.prog.edict_t
	var $quake_prog$edict_t = function(index) {
		this.index = 0;
		this.free = false;
		this.num_leafs = 0;
		this.leafnums = new Array($quake_prog.maX_ENT_LEAFS);
		this.baseline = new $quake_quakedef$entity_state_t();
		this.freetime = 0;
		this.v = new $quake_prog$entvars_t();
		this.index = index;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.prog.entvars_t
	var $quake_prog$entvars_t = function() {
		this.modelindex = 0;
		this.absmin = new Array(3);
		this.absmax = new Array(3);
		this.ltime = 0;
		this.movetype = 0;
		this.solid = 0;
		this.origin = new Array(3);
		this.oldorigin = new Array(3);
		this.velocity = new Array(3);
		this.angles = new Array(3);
		this.avelocity = new Array(3);
		this.punchangle = new Array(3);
		this.classname = 0;
		this.model = 0;
		this.frame = 0;
		this.skin = 0;
		this.effects = 0;
		this.mins = new Array(3);
		this.maxs = new Array(3);
		this.size = new Array(3);
		this.touch = 0;
		this.use = 0;
		this.think = 0;
		this.blocked = 0;
		this.nextthink = 0;
		this.groundentity = 0;
		this.health = 0;
		this.frags = 0;
		this.weapon = 0;
		this.weaponmodel = 0;
		this.weaponframe = 0;
		this.currentammo = 0;
		this.ammo_shells = 0;
		this.ammo_nails = 0;
		this.ammo_rockets = 0;
		this.ammo_cells = 0;
		this.items = 0;
		this.takedamage = 0;
		this.chain = 0;
		this.deadflag = 0;
		this.view_ofs = new Array(3);
		this.button0 = 0;
		this.button1 = 0;
		this.button2 = 0;
		this.impulse = 0;
		this.fixangle = 0;
		this.v_angle = new Array(3);
		this.idealpitch = 0;
		this.netname = 0;
		this.enemy = 0;
		this.flags = 0;
		this.colormap = 0;
		this.team = 0;
		this.max_health = 0;
		this.teleport_time = 0;
		this.armortype = 0;
		this.armorvalue = 0;
		this.waterlevel = 0;
		this.watertype = 0;
		this.ideal_yaw = 0;
		this.yaw_speed = 0;
		this.aiment = 0;
		this.goalentity = 0;
		this.spawnflags = 0;
		this.target = 0;
		this.targetname = 0;
		this.dmg_take = 0;
		this.dmg_save = 0;
		this.dmg_inflictor = 0;
		this.owner = 0;
		this.movedir = new Array(3);
		this.message = 0;
		this.sounds = 0;
		this.noise = 0;
		this.noise1 = 0;
		this.noise2 = 0;
		this.noise3 = 0;
		this.variables = null;
	};
	$quake_prog$entvars_t.prototype = {
		clear: function() {
			var kk;
			this.modelindex = 0;
			this.ltime = 0;
			this.movetype = 0;
			this.solid = 0;
			this.classname = 0;
			this.model = 0;
			this.frame = 0;
			this.skin = 0;
			this.effects = 0;
			this.touch = 0;
			this.use = 0;
			this.think = 0;
			this.blocked = 0;
			this.nextthink = 0;
			this.groundentity = 0;
			this.health = 0;
			this.frags = 0;
			this.weapon = 0;
			this.weaponmodel = 0;
			this.weaponframe = 0;
			this.currentammo = 0;
			this.ammo_shells = 0;
			this.ammo_nails = 0;
			this.ammo_rockets = 0;
			this.ammo_cells = 0;
			this.items = 0;
			this.takedamage = 0;
			this.chain = 0;
			this.deadflag = 0;
			this.button0 = 0;
			this.button1 = 0;
			this.button2 = 0;
			this.impulse = 0;
			this.fixangle = 0;
			this.idealpitch = 0;
			this.netname = 0;
			this.enemy = 0;
			this.flags = 0;
			this.colormap = 0;
			this.team = 0;
			this.max_health = 0;
			this.teleport_time = 0;
			this.armortype = 0;
			this.armorvalue = 0;
			this.waterlevel = 0;
			this.watertype = 0;
			this.ideal_yaw = 0;
			this.yaw_speed = 0;
			this.aiment = 0;
			this.goalentity = 0;
			this.spawnflags = 0;
			this.target = 0;
			this.targetname = 0;
			this.dmg_take = 0;
			this.dmg_save = 0;
			this.dmg_inflictor = 0;
			this.owner = 0;
			this.message = 0;
			this.sounds = 0;
			this.noise = 0;
			this.noise1 = 0;
			this.noise2 = 0;
			this.noise3 = 0;
			for (kk = 0; kk < 3; kk++) {
				this.absmin[kk] = 0;
				this.absmax[kk] = 0;
				this.origin[kk] = 0;
				this.oldorigin[kk] = 0;
				this.velocity[kk] = 0;
				this.angles[kk] = 0;
				this.avelocity[kk] = 0;
				this.punchangle[kk] = 0;
				this.mins[kk] = 0;
				this.maxs[kk] = 0;
				this.size[kk] = 0;
				this.view_ofs[kk] = 0;
				this.v_angle[kk] = 0;
				this.movedir[kk] = 0;
			}
			for (kk = 0; kk < this.variables.length; kk++) {
				this.variables[kk] = null;
			}
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.prog.etype_t
	var $quake_prog$etype_t = function() {
	};
	$quake_prog$etype_t.prototype = { ev_void: 0, ev_string: 1, ev_float: 2, ev_vector: 3, ev_entity: 4, ev_field: 5, ev_function: 6, ev_pointer: 7 };
	Type.registerEnum(global, 'quake.prog$etype_t', $quake_prog$etype_t, false);
	////////////////////////////////////////////////////////////////////////////////
	// quake.prog.eval_t
	var $quake_prog$eval_t = function() {
		this.$string = 0;
		this.$_float = 0;
		this.$vector = new Array(3);
		this.$function = 0;
		this.$_int = 0;
		this.$edict = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.prog.globalvars_t
	var $quake_prog$globalvars_t = function() {
		this.pad = new Array(28);
		this.self = 0;
		this.other = 0;
		this.world = 0;
		this.time = 0;
		this.frametime = 0;
		this.force_retouch = 0;
		this.mapname = 0;
		this.deathmatch = 0;
		this.coop = 0;
		this.teamplay = 0;
		this.serverflags = 0;
		this.total_secrets = 0;
		this.total_monsters = 0;
		this.found_secrets = 0;
		this.killed_monsters = 0;
		this.parm1 = 0;
		this.parm2 = 0;
		this.parm3 = 0;
		this.parm4 = 0;
		this.parm5 = 0;
		this.parm6 = 0;
		this.parm7 = 0;
		this.parm8 = 0;
		this.parm9 = 0;
		this.parm10 = 0;
		this.parm11 = 0;
		this.parm12 = 0;
		this.parm13 = 0;
		this.parm14 = 0;
		this.parm15 = 0;
		this.parm16 = 0;
		this.v_forward = new Array(3);
		this.v_up = new Array(3);
		this.v_right = new Array(3);
		this.trace_allsolid = 0;
		this.trace_startsolid = 0;
		this.trace_fraction = 0;
		this.trace_endpos = new Array(3);
		this.trace_plane_normal = new Array(3);
		this.trace_plane_dist = 0;
		this.trace_ent = 0;
		this.trace_inopen = 0;
		this.trace_inwater = 0;
		this.msg_entity = 0;
		this.main = 0;
		this.startFrame = 0;
		this.playerPreThink = 0;
		this.playerPostThink = 0;
		this.clientKill = 0;
		this.clientConnect = 0;
		this.putClientInServer = 0;
		this.clientDisconnect = 0;
		this.setNewParms = 0;
		this.setChangeParms = 0;
	};
	$quake_prog$globalvars_t.op_Implicit = function(buf) {
		var ofs = buf.ofs;
		var kk;
		var globalvars = new $quake_prog$globalvars_t();
		for (kk = 0; kk < 28; kk++) {
			globalvars.pad[kk] = BitConverter.toInt32(buf.buffer, ofs);
			ofs += 4;
		}
		globalvars.self = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		globalvars.other = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		globalvars.world = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		globalvars.time = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.frametime = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.force_retouch = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.mapname = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		globalvars.deathmatch = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.coop = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.teamplay = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.serverflags = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.total_secrets = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.total_monsters = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.found_secrets = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.killed_monsters = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm1 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm2 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm3 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm4 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm5 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm6 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm7 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm8 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm9 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm10 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm11 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm12 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm13 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm14 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm15 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.parm16 = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		for (kk = 0; kk < 3; kk++) {
			globalvars.v_forward[kk] = BitConverter.toSingle(buf.buffer, ofs);
			ofs += 4;
		}
		for (kk = 0; kk < 3; kk++) {
			globalvars.v_up[kk] = BitConverter.toSingle(buf.buffer, ofs);
			ofs += 4;
		}
		for (kk = 0; kk < 3; kk++) {
			globalvars.v_right[kk] = BitConverter.toSingle(buf.buffer, ofs);
			ofs += 4;
		}
		globalvars.trace_allsolid = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.trace_startsolid = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.trace_fraction = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		for (kk = 0; kk < 3; kk++) {
			globalvars.trace_endpos[kk] = BitConverter.toSingle(buf.buffer, ofs);
			ofs += 4;
		}
		for (kk = 0; kk < 3; kk++) {
			globalvars.trace_plane_normal[kk] = BitConverter.toSingle(buf.buffer, ofs);
			ofs += 4;
		}
		globalvars.trace_plane_dist = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.trace_ent = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		globalvars.trace_inopen = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.trace_inwater = BitConverter.toSingle(buf.buffer, ofs);
		ofs += 4;
		globalvars.msg_entity = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		globalvars.main = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		globalvars.startFrame = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		globalvars.playerPreThink = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		globalvars.playerPostThink = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		globalvars.clientKill = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		globalvars.clientConnect = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		globalvars.putClientInServer = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		globalvars.clientDisconnect = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		globalvars.setNewParms = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		globalvars.setChangeParms = BitConverter.toInt32(buf.buffer, ofs);
		ofs += 4;
		return globalvars;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.prog.opcode_t
	var $quake_prog$opcode_t = function() {
	};
	$quake_prog$opcode_t.prototype = { oP_DONE: 0, oP_MUL_F: 1, oP_MUL_V: 2, oP_MUL_FV: 3, oP_MUL_VF: 4, oP_DIV_F: 5, oP_ADD_F: 6, oP_ADD_V: 7, oP_SUB_F: 8, oP_SUB_V: 9, oP_EQ_F: 10, oP_EQ_V: 11, oP_EQ_S: 12, oP_EQ_E: 13, oP_EQ_FNC: 14, oP_NE_F: 15, oP_NE_V: 16, oP_NE_S: 17, oP_NE_E: 18, oP_NE_FNC: 19, oP_LE: 20, oP_GE: 21, oP_LT: 22, oP_GT: 23, oP_LOAD_F: 24, oP_LOAD_V: 25, oP_LOAD_S: 26, oP_LOAD_ENT: 27, oP_LOAD_FLD: 28, oP_LOAD_FNC: 29, oP_ADDRESS: 30, oP_STORE_F: 31, oP_STORE_V: 32, oP_STORE_S: 33, oP_STORE_ENT: 34, oP_STORE_FLD: 35, oP_STORE_FNC: 36, oP_STOREP_F: 37, oP_STOREP_V: 38, oP_STOREP_S: 39, oP_STOREP_ENT: 40, oP_STOREP_FLD: 41, oP_STOREP_FNC: 42, oP_RETURN: 43, oP_NOT_F: 44, oP_NOT_V: 45, oP_NOT_S: 46, oP_NOT_ENT: 47, oP_NOT_FNC: 48, oP_IF: 49, oP_IFNOT: 50, oP_CALL0: 51, oP_CALL1: 52, oP_CALL2: 53, oP_CALL3: 54, oP_CALL4: 55, oP_CALL5: 56, oP_CALL6: 57, oP_CALL7: 58, oP_CALL8: 59, oP_STATE: 60, oP_GOTO: 61, oP_AND: 62, oP_OR: 63, oP_BITAND: 64, oP_BITOR: 65 };
	Type.registerEnum(global, 'quake.prog$opcode_t', $quake_prog$opcode_t, false);
	////////////////////////////////////////////////////////////////////////////////
	// quake.prog.prstack_t
	var $quake_prog$prstack_t = function() {
		this.s = 0;
		this.f = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.quakedef
	var $quake_quakedef = function() {
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.quakedef.entity_state_t
	var $quake_quakedef$entity_state_t = function() {
		this.origin = new Array(3);
		this.angles = new Array(3);
		this.modelindex = 0;
		this.frame = 0;
		this.colormap = 0;
		this.skin = 0;
		this.effects = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.quakedef.quakeparms_t
	var $quake_quakedef$quakeparms_t = function() {
		this.basedir = null;
		this.$cachedir = null;
		this.$argc = 0;
		this.$argv = null;
		this.$membase = null;
		this.memsize = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.render
	var $quake_render = function() {
		this.$entity_clipplanes = null;
		this.$screenwidth = 0;
		this.$viewmodname = null;
		this.$modcount = 0;
		this.$reinit_surfcache = 1;
		this.$dp_time1 = 0;
		this.$dp_time2 = 0;
		this.$db_time1 = 0;
		this.$db_time2 = 0;
		this.$rw_time1 = 0;
		this.$rw_time2 = 0;
		this.$se_time1 = 0;
		this.$se_time2 = 0;
		this.$de_time1 = 0;
		this.$de_time2 = 0;
		this.$dv_time1 = 0;
		this.$dv_time2 = 0;
		this.$avelocity = [23, 7, 3];
		this.$partstep = 0.01;
		this.$timescale = 0.01;
		this.$r_skydirect = 0;
	};
	$quake_render.prototype = {
		$show: function() {
			var vr = new $quake_vid$vrect_t();
			vr.x = vr.y = 0;
			vr.width = $quake_screen.vid.width;
			vr.height = $quake_screen.vid.height;
			vr.pnext = null;
			$quake_vid.viD_Update(vr);
		},
		$r_PrintTimes: function() {
		},
		$r_PrintDSpeeds: function() {
		},
		$r_PrintAliasStats: function() {
		},
		$warpPalette: function() {
			var i, j;
			var newpalette = new Uint8Array(768);
			var basecolor = new Array(3);
			basecolor[0] = 130;
			basecolor[1] = 80;
			basecolor[2] = 50;
			// pull the colors halfway to bright brown
			for (i = 0; i < 256; i++) {
				for (j = 0; j < 3; j++) {
					newpalette[i * 3 + j] = ss.Int32.div($quake_host.host_basepal[i * 3 + j] + basecolor[j], 2);
				}
			}
			$quake_vid.viD_ShiftPalette(newpalette);
		},
		$r_TransformPlane: function(p, normal, dist) {
		}
	};
	$quake_render.$r_Alias_clip_z = function(pfv0, pfv1, out) {
		var scale;
		var pav0, pav1, avout = new $quake_render$auxvert_t();
		pav0 = $quake_render.$av[$quake_render.$av0];
		pav1 = $quake_render.$av[$quake_render.$av1];
		if (pfv0.v[1] >= pfv1.v[1]) {
			scale = (5 - pav0.fv[2]) / (pav1.fv[2] - pav0.fv[2]);
			avout.fv[0] = pav0.fv[0] + (pav1.fv[0] - pav0.fv[0]) * scale;
			avout.fv[1] = pav0.fv[1] + (pav1.fv[1] - pav0.fv[1]) * scale;
			avout.fv[2] = 5;
			out.v[2] = ss.Int32.trunc(pfv0.v[2] + (pfv1.v[2] - pfv0.v[2]) * scale);
			out.v[3] = ss.Int32.trunc(pfv0.v[3] + (pfv1.v[3] - pfv0.v[3]) * scale);
			out.v[4] = ss.Int32.trunc(pfv0.v[4] + (pfv1.v[4] - pfv0.v[4]) * scale);
		}
		else {
			scale = (5 - pav1.fv[2]) / (pav0.fv[2] - pav1.fv[2]);
			avout.fv[0] = pav1.fv[0] + (pav0.fv[0] - pav1.fv[0]) * scale;
			avout.fv[1] = pav1.fv[1] + (pav0.fv[1] - pav1.fv[1]) * scale;
			avout.fv[2] = 5;
			out.v[2] = ss.Int32.trunc(pfv1.v[2] + (pfv0.v[2] - pfv1.v[2]) * scale);
			out.v[3] = ss.Int32.trunc(pfv1.v[3] + (pfv0.v[3] - pfv1.v[3]) * scale);
			out.v[4] = ss.Int32.trunc(pfv1.v[4] + (pfv0.v[4] - pfv1.v[4]) * scale);
		}
		$quake_render.$r_AliasProjectFinalVert(out, avout);
		if (out.v[0] < $quake_render.r_refdef.aliasvrect.x) {
			out.flags |= $quake_render.aliaS_LEFT_CLIP;
		}
		if (out.v[1] < $quake_render.r_refdef.aliasvrect.y) {
			out.flags |= $quake_render.aliaS_TOP_CLIP;
		}
		if (out.v[0] > $quake_render.r_refdef.aliasvrectright) {
			out.flags |= $quake_render.aliaS_RIGHT_CLIP;
		}
		if (out.v[1] > $quake_render.r_refdef.aliasvrectbottom) {
			out.flags |= $quake_render.aliaS_BOTTOM_CLIP;
		}
	};
	$quake_render.$r_Alias_clip_left = function(pfv0, pfv1, out) {
		var scale;
		var i;
		if (pfv0.v[1] >= pfv1.v[1]) {
			scale = ($quake_render.r_refdef.aliasvrect.x - pfv0.v[0]) / (pfv1.v[0] - pfv0.v[0]);
			for (i = 0; i < 6; i++) {
				out.v[i] = ss.Int32.trunc(pfv0.v[i] + (pfv1.v[i] - pfv0.v[i]) * scale + 0.5);
			}
		}
		else {
			scale = ($quake_render.r_refdef.aliasvrect.x - pfv1.v[0]) / (pfv0.v[0] - pfv1.v[0]);
			for (i = 0; i < 6; i++) {
				out.v[i] = ss.Int32.trunc(pfv1.v[i] + (pfv0.v[i] - pfv1.v[i]) * scale + 0.5);
			}
		}
	};
	$quake_render.$r_Alias_clip_right = function(pfv0, pfv1, out) {
		var scale;
		var i;
		if (pfv0.v[1] >= pfv1.v[1]) {
			scale = ($quake_render.r_refdef.aliasvrectright - pfv0.v[0]) / (pfv1.v[0] - pfv0.v[0]);
			for (i = 0; i < 6; i++) {
				out.v[i] = ss.Int32.trunc(pfv0.v[i] + (pfv1.v[i] - pfv0.v[i]) * scale + 0.5);
			}
		}
		else {
			scale = ($quake_render.r_refdef.aliasvrectright - pfv1.v[0]) / (pfv0.v[0] - pfv1.v[0]);
			for (i = 0; i < 6; i++) {
				out.v[i] = ss.Int32.trunc(pfv1.v[i] + (pfv0.v[i] - pfv1.v[i]) * scale + 0.5);
			}
		}
	};
	$quake_render.$r_Alias_clip_top = function(pfv0, pfv1, out) {
		var scale;
		var i;
		if (pfv0.v[1] >= pfv1.v[1]) {
			scale = ($quake_render.r_refdef.aliasvrect.y - pfv0.v[1]) / (pfv1.v[1] - pfv0.v[1]);
			for (i = 0; i < 6; i++) {
				out.v[i] = ss.Int32.trunc(pfv0.v[i] + (pfv1.v[i] - pfv0.v[i]) * scale + 0.5);
			}
		}
		else {
			scale = ($quake_render.r_refdef.aliasvrect.y - pfv1.v[1]) / (pfv0.v[1] - pfv1.v[1]);
			for (i = 0; i < 6; i++) {
				out.v[i] = ss.Int32.trunc(pfv1.v[i] + (pfv0.v[i] - pfv1.v[i]) * scale + 0.5);
			}
		}
	};
	$quake_render.$r_Alias_clip_bottom = function(pfv0, pfv1, out) {
		var scale;
		var i;
		if (pfv0.v[1] >= pfv1.v[1]) {
			scale = ($quake_render.r_refdef.aliasvrectbottom - pfv0.v[1]) / (pfv1.v[1] - pfv0.v[1]);
			for (i = 0; i < 6; i++) {
				out.v[i] = ss.Int32.trunc(pfv0.v[i] + (pfv1.v[i] - pfv0.v[i]) * scale + 0.5);
			}
		}
		else {
			scale = ($quake_render.r_refdef.aliasvrectbottom - pfv1.v[1]) / (pfv0.v[1] - pfv1.v[1]);
			for (i = 0; i < 6; i++) {
				out.v[i] = ss.Int32.trunc(pfv1.v[i] + (pfv0.v[i] - pfv1.v[i]) * scale + 0.5);
			}
		}
	};
	$quake_render.$r_AliasClip = function(in1, out, flag, count, delegate_clip) {
		var i, j, k;
		var flags, oldflags;
		j = count - 1;
		k = 0;
		for (i = 0; i < count; j = i, i++) {
			oldflags = in1[j].flags & flag;
			flags = in1[i].flags & flag;
			if (flags !== 0 && oldflags !== 0) {
				continue;
			}
			if ((oldflags ^ flags) !== 0) {
				$quake_render.$av0 = j;
				$quake_render.$av1 = i;
				delegate_clip(in1[j], in1[i], out[k]);
				out[k].flags = 0;
				if (out[k].v[0] < $quake_render.r_refdef.aliasvrect.x) {
					out[k].flags |= $quake_render.aliaS_LEFT_CLIP;
				}
				if (out[k].v[1] < $quake_render.r_refdef.aliasvrect.y) {
					out[k].flags |= $quake_render.aliaS_TOP_CLIP;
				}
				if (out[k].v[0] > $quake_render.r_refdef.aliasvrectright) {
					out[k].flags |= $quake_render.aliaS_RIGHT_CLIP;
				}
				if (out[k].v[1] > $quake_render.r_refdef.aliasvrectbottom) {
					out[k].flags |= $quake_render.aliaS_BOTTOM_CLIP;
				}
				k++;
			}
			if (flags === 0) {
				$quake_draw$finalvert_t.copy(in1[i], out[k]);
				//                    @out[k] = @in[i];
				k++;
			}
		}
		return k;
	};
	$quake_render.$r_AliasClipTriangle = function(ptri) {
		var i, k, pingpong;
		var mtri = new $quake_model$mtriangle_t();
		var clipflags;
		// copy vertexes and fix seam texture coordinates
		if (ptri.facesfront !== 0) {
			$quake_draw$finalvert_t.copy($quake_render.$pfinalverts[ptri.vertindex[0]], $quake_render.$fva[0][0]);
			$quake_draw$finalvert_t.copy($quake_render.$pfinalverts[ptri.vertindex[1]], $quake_render.$fva[0][1]);
			$quake_draw$finalvert_t.copy($quake_render.$pfinalverts[ptri.vertindex[2]], $quake_render.$fva[0][2]);
		}
		else {
			for (i = 0; i < 3; i++) {
				$quake_draw$finalvert_t.copy($quake_render.$pfinalverts[ptri.vertindex[i]], $quake_render.$fva[0][i]);
				if (ptri.facesfront === 0 && ($quake_render.$fva[0][i].flags & $quake_render.aliaS_ONSEAM) !== 0) {
					$quake_render.$fva[0][i].v[2] += $quake_render.r_affinetridesc.seamfixupX16;
				}
			}
		}
		// clip
		clipflags = $quake_render.$fva[0][0].flags | $quake_render.$fva[0][1].flags | $quake_render.$fva[0][2].flags;
		if ((clipflags & 16) !== 0) {
			for (i = 0; i < 3; i++) {
				$quake_render.$av[i] = $quake_render.$pauxverts[ptri.vertindex[i]];
			}
			k = $quake_render.$r_AliasClip($quake_render.$fva[0], $quake_render.$fva[1], $quake_render.aliaS_Z_CLIP, 3, $quake_render.$r_Alias_clip_z);
			if (k === 0) {
				return;
			}
			pingpong = 1;
			clipflags = $quake_render.$fva[1][0].flags | $quake_render.$fva[1][1].flags | $quake_render.$fva[1][2].flags;
		}
		else {
			pingpong = 0;
			k = 3;
		}
		if ((clipflags & 1) !== 0) {
			k = $quake_render.$r_AliasClip($quake_render.$fva[pingpong], $quake_render.$fva[pingpong ^ 1], $quake_render.aliaS_LEFT_CLIP, k, $quake_render.$r_Alias_clip_left);
			if (k === 0) {
				return;
			}
			pingpong ^= 1;
		}
		if ((clipflags & 4) !== 0) {
			k = $quake_render.$r_AliasClip($quake_render.$fva[pingpong], $quake_render.$fva[pingpong ^ 1], $quake_render.aliaS_RIGHT_CLIP, k, $quake_render.$r_Alias_clip_right);
			if (k === 0) {
				return;
			}
			pingpong ^= 1;
		}
		if ((clipflags & 8) !== 0) {
			k = $quake_render.$r_AliasClip($quake_render.$fva[pingpong], $quake_render.$fva[pingpong ^ 1], $quake_render.aliaS_BOTTOM_CLIP, k, $quake_render.$r_Alias_clip_bottom);
			if (k === 0) {
				return;
			}
			pingpong ^= 1;
		}
		if ((clipflags & 2) !== 0) {
			k = $quake_render.$r_AliasClip($quake_render.$fva[pingpong], $quake_render.$fva[pingpong ^ 1], $quake_render.aliaS_TOP_CLIP, k, $quake_render.$r_Alias_clip_top);
			if (k === 0) {
				return;
			}
			pingpong ^= 1;
		}
		for (i = 0; i < k; i++) {
			if ($quake_render.$fva[pingpong][i].v[0] < $quake_render.r_refdef.aliasvrect.x) {
				$quake_render.$fva[pingpong][i].v[0] = $quake_render.r_refdef.aliasvrect.x;
			}
			else if ($quake_render.$fva[pingpong][i].v[0] > $quake_render.r_refdef.aliasvrectright) {
				$quake_render.$fva[pingpong][i].v[0] = $quake_render.r_refdef.aliasvrectright;
			}
			if ($quake_render.$fva[pingpong][i].v[1] < $quake_render.r_refdef.aliasvrect.y) {
				$quake_render.$fva[pingpong][i].v[1] = $quake_render.r_refdef.aliasvrect.y;
			}
			else if ($quake_render.$fva[pingpong][i].v[1] > $quake_render.r_refdef.aliasvrectbottom) {
				$quake_render.$fva[pingpong][i].v[1] = $quake_render.r_refdef.aliasvrectbottom;
			}
			$quake_render.$fva[pingpong][i].flags = 0;
		}
		// draw triangles
		mtri.facesfront = ptri.facesfront;
		$quake_render.r_affinetridesc.ptriangles = [mtri];
		$quake_render.r_affinetridesc.pfinalverts = $quake_render.$fva[pingpong];
		// FIXME: do all at once as trifan?
		mtri.vertindex[0] = 0;
		for (i = 1; i < k - 1; i++) {
			mtri.vertindex[1] = i;
			mtri.vertindex[2] = i + 1;
			$quake_draw.d_PolysetDraw();
		}
	};
	$quake_render.$r_alias_init = function() {
		$quake_render.$finalverts = new Array($quake_render.MAXALIASVERTS);
		$quake_render.$auxverts = new Array($quake_render.MAXALIASVERTS);
		for (var kk = 0; kk < $quake_render.MAXALIASVERTS; kk++) {
			$quake_render.$finalverts[kk] = new $quake_draw$finalvert_t();
			$quake_render.$auxverts[kk] = new $quake_render$auxvert_t();
		}
	};
	$quake_render.$r_AliasCheckBBox = function() {
		var i, flags, frame, numv;
		var pahdr;
		var zi, v0, v1, frac;
		var basepts = new Array(8);
		var pv0, pv1;
		var viewpts = new Array(16);
		var pa0, pa1;
		var viewaux = new Array(16);
		var pframedesc;
		var zclipped, zfullyclipped;
		var anyclip, allclip;
		var minz;
		var kk;
		for (kk = 0; kk < 16; kk++) {
			viewpts[kk] = new $quake_draw$finalvert_t();
		}
		for (kk = 0; kk < 16; kk++) {
			viewaux[kk] = new $quake_render$auxvert_t();
		}
		for (kk = 0; kk < 8; kk++) {
			basepts[kk] = new Array(3);
		}
		// expand, rotate, and translate points into worldspace
		$quake_render.currententity.trivial_accept = 0;
		$quake_render.$pmodel = $quake_render.currententity.model;
		pahdr = Type.cast($quake_model.mod_Extradata($quake_render.$pmodel), $quake_model$aliashdr_t);
		$quake_render.$pmdl = pahdr.model;
		$quake_render.$r_AliasSetUpTransform(0);
		// construct the base bounding box for this frame
		frame = $quake_render.currententity.frame;
		// TODO: don't repeat this check when drawing?
		if (frame >= $quake_render.$pmdl.numframes || frame < 0) {
			$quake_console.con_DPrintf('No such frame ' + frame + ' ' + $quake_render.$pmodel.name + '\n');
			frame = 0;
		}
		pframedesc = pahdr.frames[frame];
		// x worldspace coordinates
		basepts[0][0] = basepts[1][0] = basepts[2][0] = basepts[3][0] = pframedesc.bboxmin.v[0];
		basepts[4][0] = basepts[5][0] = basepts[6][0] = basepts[7][0] = pframedesc.bboxmax.v[0];
		// y worldspace coordinates
		basepts[0][1] = basepts[3][1] = basepts[5][1] = basepts[6][1] = pframedesc.bboxmin.v[1];
		basepts[1][1] = basepts[2][1] = basepts[4][1] = basepts[7][1] = pframedesc.bboxmax.v[1];
		// z worldspace coordinates
		basepts[0][2] = basepts[1][2] = basepts[4][2] = basepts[5][2] = pframedesc.bboxmin.v[2];
		basepts[2][2] = basepts[3][2] = basepts[6][2] = basepts[7][2] = pframedesc.bboxmax.v[2];
		zclipped = false;
		zfullyclipped = true;
		minz = 9999;
		for (i = 0; i < 8; i++) {
			$quake_render.$r_AliasTransformVector(basepts[i], viewaux[i].fv);
			if (viewaux[i].fv[2] < 5) {
				// we must clip points that are closer than the near clip plane
				viewpts[i].flags = $quake_render.aliaS_Z_CLIP;
				zclipped = true;
			}
			else {
				if (viewaux[i].fv[2] < minz) {
					minz = ss.Int32.trunc(viewaux[i].fv[2]);
				}
				viewpts[i].flags = 0;
				zfullyclipped = false;
			}
		}
		if (zfullyclipped) {
			return false;
			// everything was near-z-clipped
		}
		numv = 8;
		if (zclipped) {
			// organize points by edges, use edges to get new points (possible trivial
			// reject)
			for (i = 0; i < 12; i++) {
				// edge endpoints
				pv0 = viewpts[$quake_render.$aedges[i].index0];
				pv1 = viewpts[$quake_render.$aedges[i].index1];
				pa0 = viewaux[$quake_render.$aedges[i].index0];
				pa1 = viewaux[$quake_render.$aedges[i].index1];
				// if one end is clipped and the other isn't, make a new point
				if ((pv0.flags ^ pv1.flags) !== 0) {
					frac = (5 - pa0.fv[2]) / (pa1.fv[2] - pa0.fv[2]);
					viewaux[numv].fv[0] = pa0.fv[0] + (pa1.fv[0] - pa0.fv[0]) * frac;
					viewaux[numv].fv[1] = pa0.fv[1] + (pa1.fv[1] - pa0.fv[1]) * frac;
					viewaux[numv].fv[2] = 5;
					viewpts[numv].flags = 0;
					numv++;
				}
			}
		}
		// project the vertices that remain after clipping
		anyclip = 0;
		allclip = 15;
		// TODO: probably should do this loop in ASM, especially if we use floats
		for (i = 0; i < numv; i++) {
			// we don't need to bother with vertices that were z-clipped
			if ((viewpts[i].flags & $quake_render.aliaS_Z_CLIP) !== 0) {
				continue;
			}
			zi = 1 / viewaux[i].fv[2];
			// FIXME: do with chop mode in ASM, or convert to float
			v0 = viewaux[i].fv[0] * $quake_render.xscale * zi + $quake_render.xcenter;
			v1 = viewaux[i].fv[1] * $quake_render.yscale * zi + $quake_render.ycenter;
			flags = 0;
			if (v0 < $quake_render.r_refdef.fvrectx) {
				flags |= $quake_render.aliaS_LEFT_CLIP;
			}
			if (v1 < $quake_render.r_refdef.fvrecty) {
				flags |= $quake_render.aliaS_TOP_CLIP;
			}
			if (v0 > $quake_render.r_refdef.fvrectright) {
				flags |= $quake_render.aliaS_RIGHT_CLIP;
			}
			if (v1 > $quake_render.r_refdef.fvrectbottom) {
				flags |= $quake_render.aliaS_BOTTOM_CLIP;
			}
			anyclip |= flags;
			allclip &= flags;
		}
		if (allclip !== 0) {
			return false;
		}
		// trivial reject off one side
		$quake_render.currententity.trivial_accept = ((anyclip === 0 && !zclipped) ? 1 : 0);
		if ($quake_render.currententity.trivial_accept !== 0) {
			if (minz > $quake_render.$r_aliastransition + $quake_render.$pmdl.size * $quake_render.$r_resfudge) {
				$quake_render.currententity.trivial_accept |= 2;
			}
		}
		return true;
	};
	$quake_render.$r_AliasTransformVector = function(in1, out) {
		out[0] = $quake_mathlib.dotProduct$1(in1, $quake_render.$aliastransform[0]) + $quake_render.$aliastransform[0][3];
		out[1] = $quake_mathlib.dotProduct$1(in1, $quake_render.$aliastransform[1]) + $quake_render.$aliastransform[1][3];
		out[2] = $quake_mathlib.dotProduct$1(in1, $quake_render.$aliastransform[2]) + $quake_render.$aliastransform[2][3];
	};
	$quake_render.$r_AliasPreparePoints = function() {
		var i;
		var pstverts;
		var fv;
		var av;
		var ptri;
		var pfv = new Array(3);
		pstverts = $quake_render.$paliashdr.stverts;
		$quake_render.$r_anumverts = $quake_render.$pmdl.numverts;
		for (i = 0; i < $quake_render.$r_anumverts; i++) {
			fv = $quake_render.$pfinalverts[i];
			av = $quake_render.$pauxverts[i];
			$quake_render.$r_AliasTransformFinalVert(fv, av, $quake_render.$r_apverts[i], pstverts[i]);
			if (av.fv[2] < 5) {
				fv.flags |= $quake_render.aliaS_Z_CLIP;
			}
			else {
				$quake_render.$r_AliasProjectFinalVert(fv, av);
				if (fv.v[0] < $quake_render.r_refdef.aliasvrect.x) {
					fv.flags |= $quake_render.aliaS_LEFT_CLIP;
				}
				if (fv.v[1] < $quake_render.r_refdef.aliasvrect.y) {
					fv.flags |= $quake_render.aliaS_TOP_CLIP;
				}
				if (fv.v[0] > $quake_render.r_refdef.aliasvrectright) {
					fv.flags |= $quake_render.aliaS_RIGHT_CLIP;
				}
				if (fv.v[1] > $quake_render.r_refdef.aliasvrectbottom) {
					fv.flags |= $quake_render.aliaS_BOTTOM_CLIP;
				}
			}
		}
		//
		// clip and draw all triangles
		//
		$quake_render.r_affinetridesc.numtriangles = 1;
		for (i = 0; i < $quake_render.$pmdl.numtris; i++) {
			ptri = $quake_render.$paliashdr.triangles[i];
			pfv[0] = $quake_render.$pfinalverts[ptri.vertindex[0]];
			pfv[1] = $quake_render.$pfinalverts[ptri.vertindex[1]];
			pfv[2] = $quake_render.$pfinalverts[ptri.vertindex[2]];
			if ((pfv[0].flags & pfv[1].flags & pfv[2].flags & 31) !== 0) {
				continue;
			}
			// completely clipped
			if (((pfv[0].flags | pfv[1].flags | pfv[2].flags) & 31) === 0) {
				// totally unclipped
				$quake_render.r_affinetridesc.pfinalverts = $quake_render.$pfinalverts;
				$quake_render.r_affinetridesc.ptriangles = [ptri];
				$quake_draw.d_PolysetDraw();
			}
			else {
				// partially clipped
				$quake_render.$r_AliasClipTriangle(ptri);
			}
		}
	};
	$quake_render.$r_AliasSetUpTransform = function(trivial_accept) {
		var i;
		var rotationmatrix = [$Missing_ArrayHelpers.explcitDoubleArray(4), $Missing_ArrayHelpers.explcitDoubleArray(4), $Missing_ArrayHelpers.explcitDoubleArray(4)];
		var t2matrix = [$Missing_ArrayHelpers.explcitDoubleArray(4), $Missing_ArrayHelpers.explcitDoubleArray(4), $Missing_ArrayHelpers.explcitDoubleArray(4)];
		var angles = new Array(3);
		var kk;
		// TODO: should really be stored with the entity instead of being reconstructed
		// TODO: should use a look-up table
		// TODO: could cache lazily, stored in the entity
		angles[$quake_quakedef.ROLL] = $quake_render.currententity.angles[$quake_quakedef.ROLL];
		angles[$quake_quakedef.PITCH] = -$quake_render.currententity.angles[$quake_quakedef.PITCH];
		angles[$quake_quakedef.YAW] = $quake_render.currententity.angles[$quake_quakedef.YAW];
		$quake_mathlib.angleVectors(angles, $quake_render.$alias_forward, $quake_render.$alias_right, $quake_render.$alias_up);
		$quake_render.$tmatrix[0][0] = $quake_render.$pmdl.scale[0];
		$quake_render.$tmatrix[1][1] = $quake_render.$pmdl.scale[1];
		$quake_render.$tmatrix[2][2] = $quake_render.$pmdl.scale[2];
		$quake_render.$tmatrix[0][3] = $quake_render.$pmdl.scale_origin[0];
		$quake_render.$tmatrix[1][3] = $quake_render.$pmdl.scale_origin[1];
		$quake_render.$tmatrix[2][3] = $quake_render.$pmdl.scale_origin[2];
		// TODO: can do this with simple matrix rearrangement
		for (i = 0; i < 3; i++) {
			t2matrix[i][0] = $quake_render.$alias_forward[i];
			t2matrix[i][1] = -$quake_render.$alias_right[i];
			t2matrix[i][2] = $quake_render.$alias_up[i];
		}
		t2matrix[0][3] = -$quake_render.modelorg[0];
		t2matrix[1][3] = -$quake_render.modelorg[1];
		t2matrix[2][3] = -$quake_render.modelorg[2];
		// FIXME: can do more efficiently than full concatenation
		$quake_mathlib.r_ConcatTransforms(t2matrix, $quake_render.$tmatrix, rotationmatrix);
		// TODO: should be global, set when vright, etc., set
		$quake_mathlib.vectorCopy($quake_render.vright, $quake_render.$viewmatrix[0]);
		$quake_mathlib.vectorCopy($quake_render.vup, $quake_render.$viewmatrix[1]);
		$quake_mathlib.vectorInverse($quake_render.$viewmatrix[1]);
		$quake_mathlib.vectorCopy($quake_render.vpn, $quake_render.$viewmatrix[2]);
		//sys_linux.Sys_Printf("-----------------");
		//for (kk = 0; kk < 3; kk++)
		//{
		//sys_linux.Sys_Printf("viewmatrix[kk][0] = " + viewmatrix[kk][0]);
		//sys_linux.Sys_Printf("viewmatrix[kk][1] = " + viewmatrix[kk][1]);
		//sys_linux.Sys_Printf("viewmatrix[kk][2] = " + viewmatrix[kk][2]);
		//}
		//	viewmatrix[0][3] = 0;
		//	viewmatrix[1][3] = 0;
		//	viewmatrix[2][3] = 0;
		$quake_mathlib.r_ConcatTransforms($quake_render.$viewmatrix, rotationmatrix, $quake_render.$aliastransform);
		//sys_linux.Sys_Printf("trivial_accept = " + trivial_accept);
		//for (kk = 0; kk < 4; kk++)
		//{
		//sys_linux.Sys_Printf("aliastransform[0][kk] = " + aliastransform[0][kk]);
		//sys_linux.Sys_Printf("aliastransform[1][kk] = " + aliastransform[1][kk]);
		//sys_linux.Sys_Printf("aliastransform[2][kk] = " + aliastransform[2][kk]);
		//}
		// do the scaling up of x and y to screen coordinates as part of the transform
		// for the unclipped case (it would mess up clipping in the clipped case).
		// Also scale down z, so 1/z is scaled 31 bits for free, and scale down x and y
		// correspondingly so the projected x and y come out right
		// FIXME: make this work for clipped case too?
		if (trivial_accept !== 0) {
			for (i = 0; i < 4; i++) {
				$quake_render.$aliastransform[0][i] *= $quake_render.$aliasxscale * 4.65661287307739E-10;
				$quake_render.$aliastransform[1][i] *= $quake_render.$aliasyscale * 4.65661287307739E-10;
				$quake_render.$aliastransform[2][i] *= 4.65661287307739E-10;
			}
		}
	};
	$quake_render.$r_AliasTransformFinalVert = function(fv, av, pverts, pstverts) {
		var temp;
		var lightcos;
		var plightnormal;
		av.fv[0] = $quake_mathlib.dotProduct(pverts.v, $quake_render.$aliastransform[0]) + $quake_render.$aliastransform[0][3];
		av.fv[1] = $quake_mathlib.dotProduct(pverts.v, $quake_render.$aliastransform[1]) + $quake_render.$aliastransform[1][3];
		av.fv[2] = $quake_mathlib.dotProduct(pverts.v, $quake_render.$aliastransform[2]) + $quake_render.$aliastransform[2][3];
		fv.v[2] = pstverts.s;
		fv.v[3] = pstverts.t;
		fv.flags = pstverts.onseam;
		// lighting
		plightnormal = $quake_render.$r_avertexnormals[pverts.lightnormalindex];
		lightcos = $quake_mathlib.dotProduct$1(plightnormal, $quake_render.$r_plightvec);
		temp = $quake_render.$r_ambientlight;
		if (lightcos < 0) {
			temp += ss.Int32.trunc($quake_render.$r_shadelight * lightcos);
			// clamp; because we limited the minimum ambient and shading light, we
			// don't have to clamp low light, just bright
			if (temp < 0) {
				temp = 0;
			}
		}
		fv.v[4] = temp;
	};
	$quake_render.$r_AliasTransformAndProjectFinalVerts = function(pfv, pstverts) {
		var i, temp;
		var lightcos;
		var plightnormal;
		var zi;
		var pverts;
		for (i = 0; i < $quake_render.$r_anumverts; i++) {
			var fv = pfv[i];
			var stverts = pstverts[i];
			pverts = $quake_render.$r_apverts[i];
			// transform and project
			zi = 1 / ($quake_mathlib.dotProduct(pverts.v, $quake_render.$aliastransform[2]) + $quake_render.$aliastransform[2][3]);
			// x, y, and z are scaled down by 1/2**31 in the transform, so 1/z is
			// scaled up by 1/2**31, and the scaling cancels out for x and y in the
			// projection
			fv.v[5] = ss.Int32.trunc(zi);
			fv.v[0] = ss.Int32.trunc(($quake_mathlib.dotProduct(pverts.v, $quake_render.$aliastransform[0]) + $quake_render.$aliastransform[0][3]) * zi + $quake_render.$aliasxcenter);
			fv.v[1] = ss.Int32.trunc(($quake_mathlib.dotProduct(pverts.v, $quake_render.$aliastransform[1]) + $quake_render.$aliastransform[1][3]) * zi + $quake_render.$aliasycenter);
			fv.v[2] = stverts.s;
			fv.v[3] = stverts.t;
			fv.flags = stverts.onseam;
			// lighting
			plightnormal = $quake_render.$r_avertexnormals[pverts.lightnormalindex];
			lightcos = $quake_mathlib.dotProduct$1(plightnormal, $quake_render.$r_plightvec);
			temp = $quake_render.$r_ambientlight;
			if (lightcos < 0) {
				temp += ss.Int32.trunc($quake_render.$r_shadelight * lightcos);
				// clamp; because we limited the minimum ambient and shading light, we
				// don't have to clamp low light, just bright
				if (temp < 0) {
					temp = 0;
				}
			}
			fv.v[4] = temp;
		}
	};
	$quake_render.$r_AliasProjectFinalVert = function(fv, av) {
		var zi;
		// project points
		zi = 1 / av.fv[2];
		fv.v[5] = ss.Int32.trunc(zi * $quake_render.$ziscale);
		fv.v[0] = ss.Int32.trunc(av.fv[0] * $quake_render.$aliasxscale * zi + $quake_render.$aliasxcenter);
		fv.v[1] = ss.Int32.trunc(av.fv[1] * $quake_render.$aliasyscale * zi + $quake_render.$aliasycenter);
	};
	$quake_render.$r_AliasPrepareUnclippedPoints = function() {
		var pstverts;
		var fv;
		pstverts = $quake_render.$paliashdr.stverts;
		$quake_render.$r_anumverts = $quake_render.$pmdl.numverts;
		// FIXME: just use pfinalverts directly?
		fv = $quake_render.$pfinalverts;
		$quake_render.$r_AliasTransformAndProjectFinalVerts(fv, pstverts);
		if ($quake_render.r_affinetridesc.drawtype) {
			$quake_draw.d_PolysetDrawFinalVerts(fv, $quake_render.$r_anumverts);
		}
		$quake_render.r_affinetridesc.pfinalverts = $quake_render.$pfinalverts;
		$quake_render.r_affinetridesc.ptriangles = $quake_render.$paliashdr.triangles;
		$quake_render.r_affinetridesc.numtriangles = $quake_render.$pmdl.numtris;
		$quake_draw.d_PolysetDraw();
	};
	$quake_render.$r_AliasSetupSkin = function() {
		var skinnum;
		var i, numskins;
		var paliasskingroup;
		var pskinintervals;
		var fullskininterval;
		var skintargettime, skintime;
		skinnum = $quake_render.currententity.skinnum;
		if (skinnum >= $quake_render.$pmdl.numskins || skinnum < 0) {
			$quake_console.con_DPrintf('R_AliasSetupSkin: no such skin # ' + skinnum + '\n');
			skinnum = 0;
		}
		$quake_render.$pskindesc = $quake_render.$paliashdr.skindesc[skinnum];
		$quake_render.$a_skinwidth = $quake_render.$pmdl.skinwidth;
		if ($quake_render.$pskindesc.type === 1) {
			paliasskingroup = Type.cast($quake_render.$pskindesc.skin, $quake_model$maliasskingroup_t);
			pskinintervals = paliasskingroup.intervals;
			numskins = paliasskingroup.numskins;
			fullskininterval = pskinintervals[numskins - 1];
			skintime = $quake_client.cl.time + $quake_render.currententity.syncbase;
			// when loading in Mod_LoadAliasSkinGroup, we guaranteed all interval
			// values are positive, so we don't have to worry about division by 0
			skintargettime = skintime - ss.Int32.trunc(skintime / fullskininterval) * fullskininterval;
			for (i = 0; i < numskins - 1; i++) {
				if (pskinintervals[i] > skintargettime) {
					break;
				}
			}
			$quake_render.$pskindesc = paliasskingroup.skindescs[i];
		}
		$quake_render.r_affinetridesc.pskindesc = $quake_render.$pskindesc;
		$quake_render.r_affinetridesc.pskin = $quake_render.$pskindesc.skin;
		$quake_render.r_affinetridesc.skinwidth = $quake_render.$a_skinwidth;
		$quake_render.r_affinetridesc.seamfixupX16 = $quake_render.$a_skinwidth >> 1 << 16;
		$quake_render.r_affinetridesc.skinheight = $quake_render.$pmdl.skinheight;
	};
	$quake_render.$r_AliasSetupLighting = function(plighting) {
		// guarantee that no vertex will ever be lit below LIGHT_MIN, so we don't have
		// to clamp off the bottom
		$quake_render.$r_ambientlight = plighting.ambientlight;
		if ($quake_render.$r_ambientlight < $quake_render.lighT_MIN) {
			$quake_render.$r_ambientlight = $quake_render.lighT_MIN;
		}
		$quake_render.$r_ambientlight = 255 - $quake_render.$r_ambientlight << $quake_vid.viD_CBITS;
		if ($quake_render.$r_ambientlight < $quake_render.lighT_MIN) {
			$quake_render.$r_ambientlight = $quake_render.lighT_MIN;
		}
		$quake_render.$r_shadelight = plighting.shadelight;
		if ($quake_render.$r_shadelight < 0) {
			$quake_render.$r_shadelight = 0;
		}
		$quake_render.$r_shadelight *= 64;
		// rotate the lighting vector into the model's frame of reference
		$quake_render.$r_plightvec[0] = $quake_mathlib.dotProduct$1(plighting.plightvec, $quake_render.$alias_forward);
		$quake_render.$r_plightvec[1] = -$quake_mathlib.dotProduct$1(plighting.plightvec, $quake_render.$alias_right);
		$quake_render.$r_plightvec[2] = $quake_mathlib.dotProduct$1(plighting.plightvec, $quake_render.$alias_up);
	};
	$quake_render.$r_AliasSetupFrame = function() {
		var frame;
		var i, numframes;
		var paliasgroup;
		var pintervals;
		var fullinterval, targettime, time;
		frame = $quake_render.currententity.frame;
		if (frame >= $quake_render.$pmdl.numframes || frame < 0) {
			$quake_console.con_DPrintf('R_AliasSetupFrame: no such frame ' + frame + '\n');
			frame = 0;
		}
		if ($quake_render.$paliashdr.frames[frame].type === 0) {
			$quake_render.$r_apverts = Type.cast($quake_render.$paliashdr.frames[frame].frame, Array);
			return;
		}
		paliasgroup = Type.cast($quake_render.$paliashdr.frames[frame].frame, $quake_model$maliasgroup_t);
		pintervals = paliasgroup.intervals;
		numframes = paliasgroup.numframes;
		fullinterval = pintervals[numframes - 1];
		time = $quake_client.cl.time + $quake_render.currententity.syncbase;
		//
		// when loading in Mod_LoadAliasGroup, we guaranteed all interval values
		// are positive, so we don't have to worry about division by 0
		//
		targettime = time - ss.Int32.trunc(time / fullinterval) * fullinterval;
		for (i = 0; i < numframes - 1; i++) {
			if (pintervals[i] > targettime) {
				break;
			}
		}
		$quake_render.$r_apverts = Type.cast(paliasgroup.frames[i].frame, Array);
	};
	$quake_render.$r_AliasDrawModel = function(plighting) {
		$quake_render.$r_amodels_drawn++;
		// cache align
		$quake_render.$pfinalverts = $quake_render.$finalverts;
		$quake_render.$pauxverts = $quake_render.$auxverts;
		$quake_render.$paliashdr = Type.cast($quake_model.mod_Extradata($quake_render.currententity.model), $quake_model$aliashdr_t);
		$quake_render.$pmdl = $quake_render.$paliashdr.model;
		$quake_render.$r_AliasSetupSkin();
		$quake_render.$r_AliasSetUpTransform($quake_render.currententity.trivial_accept);
		$quake_render.$r_AliasSetupLighting(plighting);
		$quake_render.$r_AliasSetupFrame();
		if (ss.isNullOrUndefined($quake_render.currententity.colormap)) {
			$quake_sys_linux.sys_Error('R_AliasDrawModel: !currententity.colormap');
		}
		$quake_render.r_affinetridesc.drawtype = $quake_render.currententity.trivial_accept === 3 && $quake_render.r_recursiveaffinetriangles;
		if ($quake_render.r_affinetridesc.drawtype) {
			$quake_draw.d_PolysetUpdateTables();
			// FIXME: precalc...
		}
		else {
		}
		$quake_render.acolormap = $quake_render.currententity.colormap;
		if (!ss.referenceEquals($quake_render.currententity, $quake_client.cl.viewent)) {
			$quake_render.$ziscale = 2147483648;
		}
		else {
			$quake_render.$ziscale = 6442450944;
		}
		if ($quake_render.currententity.trivial_accept !== 0) {
			$quake_render.$r_AliasPrepareUnclippedPoints();
		}
		else {
			$quake_render.$r_AliasPreparePoints();
		}
	};
	$quake_render.$r_EntityRotate = function(vec) {
		var tvec = new Array(3);
		$quake_mathlib.vectorCopy(vec, tvec);
		vec[0] = $quake_mathlib.dotProduct$1($quake_render.$entity_rotation[0], tvec);
		vec[1] = $quake_mathlib.dotProduct$1($quake_render.$entity_rotation[1], tvec);
		vec[2] = $quake_mathlib.dotProduct$1($quake_render.$entity_rotation[2], tvec);
	};
	$quake_render.r_RotateBmodel = function() {
		var angle, s, c;
		var temp1 = [new Array(3), new Array(3), new Array(3)];
		var temp2 = [new Array(3), new Array(3), new Array(3)];
		var temp3 = [new Array(3), new Array(3), new Array(3)];
		// TODO: should use a look-up table
		// TODO: should really be stored with the entity instead of being reconstructed
		// TODO: could cache lazily, stored in the entity
		// TODO: share work with R_SetUpAliasTransform
		// yaw
		angle = $quake_render.currententity.angles[$quake_quakedef.YAW];
		angle = angle * $quake_mathlib.m_PI * 2 / 360;
		s = Math.sin(angle);
		c = Math.cos(angle);
		temp1[0][0] = c;
		temp1[0][1] = s;
		temp1[0][2] = 0;
		temp1[1][0] = -s;
		temp1[1][1] = c;
		temp1[1][2] = 0;
		temp1[2][0] = 0;
		temp1[2][1] = 0;
		temp1[2][2] = 1;
		// pitch
		angle = $quake_render.currententity.angles[$quake_quakedef.PITCH];
		angle = angle * $quake_mathlib.m_PI * 2 / 360;
		s = Math.sin(angle);
		c = Math.cos(angle);
		temp2[0][0] = c;
		temp2[0][1] = 0;
		temp2[0][2] = -s;
		temp2[1][0] = 0;
		temp2[1][1] = 1;
		temp2[1][2] = 0;
		temp2[2][0] = s;
		temp2[2][1] = 0;
		temp2[2][2] = c;
		$quake_mathlib.r_ConcatRotations(temp2, temp1, temp3);
		// roll
		angle = $quake_render.currententity.angles[$quake_quakedef.ROLL];
		angle = angle * $quake_mathlib.m_PI * 2 / 360;
		s = Math.sin(angle);
		c = Math.cos(angle);
		temp1[0][0] = 1;
		temp1[0][1] = 0;
		temp1[0][2] = 0;
		temp1[1][0] = 0;
		temp1[1][1] = c;
		temp1[1][2] = s;
		temp1[2][0] = 0;
		temp1[2][1] = -s;
		temp1[2][2] = c;
		$quake_mathlib.r_ConcatRotations(temp1, temp3, $quake_render.$entity_rotation);
		//
		// rotate modelorg and the transformation matrix
		//
		$quake_render.$r_EntityRotate($quake_render.modelorg);
		$quake_render.$r_EntityRotate($quake_render.vpn);
		$quake_render.$r_EntityRotate($quake_render.vright);
		$quake_render.$r_EntityRotate($quake_render.vup);
		$quake_render.r_TransformFrustum();
	};
	$quake_render.$r_RecursiveClipBPoly = function(pedges, pnode, psurf) {
		var psideedges = new Array(2);
		var pnextedge, ptedge;
		var i, side, lastside;
		var dist, frac, lastdist;
		var splitplane, tplane = new $quake_model$mplane_t();
		var pvert, plastvert, ptvert;
		var pn;
		psideedges[0] = psideedges[1] = null;
		$quake_render.$makeclippededge = false;
		// transform the BSP plane into model space
		// FIXME: cache these?
		splitplane = pnode.plane;
		tplane.dist = splitplane.dist - $quake_mathlib.dotProduct$1($quake_render.$r_entorigin, splitplane.normal);
		tplane.normal[0] = $quake_mathlib.dotProduct$1($quake_render.$entity_rotation[0], splitplane.normal);
		tplane.normal[1] = $quake_mathlib.dotProduct$1($quake_render.$entity_rotation[1], splitplane.normal);
		tplane.normal[2] = $quake_mathlib.dotProduct$1($quake_render.$entity_rotation[2], splitplane.normal);
		// clip edges to BSP plane
		for (; ss.isValue(pedges); pedges = pnextedge) {
			pnextedge = pedges.pnext;
			// set the status for the last point as the previous point
			// FIXME: cache this stuff somehow?
			plastvert = pedges.v[0];
			lastdist = $quake_mathlib.dotProduct$1(plastvert.position, tplane.normal) - tplane.dist;
			if (lastdist > 0) {
				lastside = 0;
			}
			else {
				lastside = 1;
			}
			pvert = pedges.v[1];
			dist = $quake_mathlib.dotProduct$1(pvert.position, tplane.normal) - tplane.dist;
			if (dist > 0) {
				side = 0;
			}
			else {
				side = 1;
			}
			if (side !== lastside) {
				// clipped
				if ($quake_render.$numbverts >= $quake_render.maX_BMODEL_VERTS) {
					return;
				}
				// generate the clipped vertex
				frac = lastdist / (lastdist - dist);
				ptvert = $quake_render.$pbverts[$quake_render.$numbverts++];
				ptvert.position[0] = plastvert.position[0] + frac * (pvert.position[0] - plastvert.position[0]);
				ptvert.position[1] = plastvert.position[1] + frac * (pvert.position[1] - plastvert.position[1]);
				ptvert.position[2] = plastvert.position[2] + frac * (pvert.position[2] - plastvert.position[2]);
				// split into two edges, one on each side, and remember entering
				// and exiting points
				// FIXME: share the clip edge by having a winding direction flag?
				if ($quake_render.$numbedges >= 999) {
					$quake_console.con_Printf('Out of edges for bmodel\n');
					return;
				}
				ptedge = $quake_render.$pbedges[$quake_render.$numbedges];
				ptedge.pnext = psideedges[lastside];
				psideedges[lastside] = ptedge;
				ptedge.v[0] = plastvert;
				ptedge.v[1] = ptvert;
				ptedge = $quake_render.$pbedges[$quake_render.$numbedges + 1];
				ptedge.pnext = psideedges[side];
				psideedges[side] = ptedge;
				ptedge.v[0] = ptvert;
				ptedge.v[1] = pvert;
				$quake_render.$numbedges += 2;
				if (side === 0) {
					// entering for front, exiting for back
					$quake_render.$pfrontenter = ptvert;
					$quake_render.$makeclippededge = true;
				}
				else {
					$quake_render.$pfrontexit = ptvert;
					$quake_render.$makeclippededge = true;
				}
			}
			else {
				// add the edge to the appropriate side
				pedges.pnext = psideedges[side];
				psideedges[side] = pedges;
			}
		}
		// if anything was clipped, reconstitute and add the edges along the clip
		// plane to both sides (but in opposite directions)
		if ($quake_render.$makeclippededge) {
			if ($quake_render.$numbedges >= 998) {
				$quake_console.con_Printf('Out of edges for bmodel\n');
				return;
			}
			ptedge = $quake_render.$pbedges[$quake_render.$numbedges];
			ptedge.pnext = psideedges[0];
			psideedges[0] = ptedge;
			ptedge.v[0] = $quake_render.$pfrontexit;
			ptedge.v[1] = $quake_render.$pfrontenter;
			ptedge = $quake_render.$pbedges[$quake_render.$numbedges + 1];
			ptedge.pnext = psideedges[1];
			psideedges[1] = ptedge;
			ptedge.v[0] = $quake_render.$pfrontenter;
			ptedge.v[1] = $quake_render.$pfrontexit;
			$quake_render.$numbedges += 2;
		}
		// draw or recurse further
		for (i = 0; i < 2; i++) {
			if (ss.isValue(psideedges[i])) {
				// draw if we've reached a non-solid leaf, done if all that's left is a
				// solid leaf, and continue down the tree if it's not a leaf
				pn = pnode.children[i];
				// we're done with this branch if the node or leaf isn't in the PVS
				if (pn.visframe === $quake_render.$r_visframecount) {
					if (pn.contents < 0) {
						if (pn.contents !== $quake_bspfile.contentS_SOLID) {
							$quake_render.$r_currentbkey = Type.cast(pn, $quake_model$mleaf_t).key;
							$quake_render.$r_RenderBmodelFace(psideedges[i], psurf);
						}
					}
					else {
						$quake_render.$r_RecursiveClipBPoly(psideedges[i], Type.cast(pnode.children[i], $quake_model$mnode_t), psurf);
					}
				}
			}
		}
	};
	$quake_render.$r_DrawSolidClippedSubmodelPolygons = function(pmodel) {
		var i, j, lindex;
		var dot;
		var psurf;
		var numsurfaces;
		var pplane;
		var bverts = new Array($quake_render.maX_BMODEL_VERTS);
		var bedges = new Array($quake_render.maX_BMODEL_EDGES);
		var pbedge;
		var pedge;
		var pedges;
		var kk;
		for (kk = 0; kk < $quake_render.maX_BMODEL_VERTS; kk++) {
			bverts[kk] = new $quake_model$mvertex_t();
		}
		for (kk = 0; kk < $quake_render.maX_BMODEL_EDGES; kk++) {
			bedges[kk] = new $quake_render$bedge_t();
		}
		// FIXME: use bounding-box-based frustum clipping info?
		numsurfaces = pmodel.nummodelsurfaces;
		pedges = pmodel.edges;
		for (i = 0; i < numsurfaces; i++) {
			psurf = pmodel.surfaces[pmodel.firstmodelsurface + i];
			// find which side of the node we are on
			pplane = psurf.plane;
			dot = $quake_mathlib.dotProduct$1($quake_render.modelorg, pplane.normal) - pplane.dist;
			// draw the polygon
			if ((psurf.flags & $quake_model.surF_PLANEBACK) !== 0 && dot < -0.01 || (psurf.flags & $quake_model.surF_PLANEBACK) === 0 && dot > $quake_render.backfacE_EPSILON) {
				// FIXME: use bounding-box-based frustum clipping info?
				// copy the edges to bedges, flipping if necessary so always
				// clockwise winding
				// FIXME: if edges and vertices get caches, these assignments must move
				// outside the loop, and overflow checking must be done here
				$quake_render.$pbverts = bverts;
				$quake_render.$pbedges = bedges;
				$quake_render.$numbverts = $quake_render.$numbedges = 0;
				if (psurf.numedges > 0) {
					pbedge = $quake_render.$numbedges;
					$quake_render.$numbedges += psurf.numedges;
					for (j = 0; j < psurf.numedges; j++) {
						lindex = pmodel.surfedges[psurf.firstedge + j];
						if (lindex > 0) {
							pedge = pedges[lindex];
							bedges[pbedge + j].v[0] = $quake_render.$r_pcurrentvertbase[pedge.v[0]];
							bedges[pbedge + j].v[1] = $quake_render.$r_pcurrentvertbase[pedge.v[1]];
						}
						else {
							lindex = -lindex;
							pedge = pedges[lindex];
							bedges[pbedge + j].v[0] = $quake_render.$r_pcurrentvertbase[pedge.v[1]];
							bedges[pbedge + j].v[1] = $quake_render.$r_pcurrentvertbase[pedge.v[0]];
						}
						bedges[pbedge + j].pnext = bedges[pbedge + j + 1];
					}
					bedges[pbedge + j - 1].pnext = null;
					// mark end of edges
					$quake_render.$r_RecursiveClipBPoly(bedges[pbedge], Type.cast($quake_render.currententity.topnode, $quake_model$mnode_t), psurf);
				}
				else {
					$quake_sys_linux.sys_Error('no edges in bmodel');
				}
			}
		}
	};
	$quake_render.$r_DrawSubmodelPolygons = function(pmodel, clipflags) {
		var i;
		var dot;
		var psurf;
		var numsurfaces;
		var pplane;
		// FIXME: use bounding-box-based frustum clipping info?
		numsurfaces = pmodel.nummodelsurfaces;
		for (i = 0; i < numsurfaces; i++) {
			psurf = pmodel.surfaces[pmodel.firstmodelsurface + i];
			// find which side of the node we are on
			pplane = psurf.plane;
			dot = $quake_mathlib.dotProduct$1($quake_render.modelorg, pplane.normal) - pplane.dist;
			// draw the polygon
			if ((psurf.flags & $quake_model.surF_PLANEBACK) !== 0 && dot < -0.01 || (psurf.flags & $quake_model.surF_PLANEBACK) === 0 && dot > $quake_render.backfacE_EPSILON) {
				$quake_render.$r_currentkey = Type.cast($quake_render.currententity.topnode, $quake_model$mleaf_t).key;
				// FIXME: use bounding-box-based frustum clipping info?
				$quake_render.$r_RenderFace(psurf, clipflags);
			}
		}
	};
	$quake_render.$r_RecursiveWorldNode = function(node, clipflags) {
		var i, c, side, pindex;
		var acceptpt = new Array(3), rejectpt = new Array(3);
		var plane;
		var surf, mark;
		var pleaf;
		var d, dot;
		var surfofs;
		if (node.contents === $quake_bspfile.contentS_SOLID) {
			return;
		}
		// solid
		if (node.visframe !== $quake_render.$r_visframecount) {
			return;
		}
		// cull the clipping planes if not trivial accept
		// FIXME: the compiler is doing a lousy job of optimizing here; it could be
		//  twice as fast in ASM
		if (clipflags !== 0) {
			for (i = 0; i < 4; i++) {
				if ((clipflags & 1 << i) === 0) {
					continue;
				}
				// don't need to clip against it
				// generate accept and reject points
				// FIXME: do with fast look-ups or integer tests based on the sign bit
				// of the floating point values
				pindex = $quake_render.$pfrustum_indexes[i];
				rejectpt[0] = node.minmaxs[$quake_render.$r_frustum_indexes[pindex + 0]];
				rejectpt[1] = node.minmaxs[$quake_render.$r_frustum_indexes[pindex + 1]];
				rejectpt[2] = node.minmaxs[$quake_render.$r_frustum_indexes[pindex + 2]];
				d = $quake_mathlib.dotProduct$1(rejectpt, $quake_render.$view_clipplanes[i].normal);
				d -= $quake_render.$view_clipplanes[i].dist;
				if (d <= 0) {
					return;
				}
				acceptpt[0] = node.minmaxs[$quake_render.$r_frustum_indexes[pindex + 3 + 0]];
				acceptpt[1] = node.minmaxs[$quake_render.$r_frustum_indexes[pindex + 3 + 1]];
				acceptpt[2] = node.minmaxs[$quake_render.$r_frustum_indexes[pindex + 3 + 2]];
				d = $quake_mathlib.dotProduct$1(acceptpt, $quake_render.$view_clipplanes[i].normal);
				d -= $quake_render.$view_clipplanes[i].dist;
				if (d >= 0) {
					clipflags &= ~(1 << i);
				}
				// node is entirely on screen
			}
		}
		// if a leaf node, draw stuff
		if (node.contents < 0) {
			pleaf = Type.cast(node, $quake_model$mleaf_t);
			var _mark = pleaf.firstmarksurface;
			var ofs = _mark.ofs;
			mark = Type.cast(_mark.buffer[ofs], $quake_model$msurface_t);
			c = pleaf.nummarksurfaces;
			if (c !== 0) {
				do {
					mark.visframe = $quake_render.r_framecount;
					mark = Type.cast(_mark.buffer[++ofs], $quake_model$msurface_t);
				} while (--c !== 0);
			}
			// deal with model fragments in this leaf
			if (ss.isValue(pleaf.efrags)) {
				$quake_render.$r_StoreEfrags(pleaf.efrags);
			}
			pleaf.key = $quake_render.$r_currentkey;
			$quake_render.$r_currentkey++;
			// all bmodels in a leaf share the same key
		}
		else {
			var _node = Type.cast(node, $quake_model$mnode_t);
			// node is just a decision point, so go down the apropriate sides
			// find which side of the node we are on
			plane = _node.plane;
			switch (plane.type) {
				case 0: {
					dot = $quake_render.modelorg[0] - plane.dist;
					break;
				}
				case 1: {
					dot = $quake_render.modelorg[1] - plane.dist;
					break;
				}
				case 2: {
					dot = $quake_render.modelorg[2] - plane.dist;
					break;
				}
				default: {
					dot = $quake_mathlib.dotProduct$1($quake_render.modelorg, plane.normal) - plane.dist;
					break;
				}
			}
			if (dot >= 0) {
				side = 0;
			}
			else {
				side = 1;
			}
			// recurse down the children, front side first
			$quake_render.$r_RecursiveWorldNode(_node.children[side], clipflags);
			// draw stuff
			c = _node.numsurfaces;
			if (c !== 0) {
				surf = $quake_client.cl.worldmodel.surfaces[_node.firstsurface];
				surfofs = _node.firstsurface;
				if (dot < -0.01) {
					do {
						if ((surf.flags & $quake_model.surF_PLANEBACK) !== 0 && surf.visframe === $quake_render.r_framecount) {
							if ($quake_render.r_drawpolys) {
								if ($quake_render.r_worldpolysbacktofront) {
									if ($quake_render.$numbtofpolys < $quake_render.maX_BTOFPOLYS) {
										$quake_render.$pbtofpolys[$quake_render.$numbtofpolys].clipflags = clipflags;
										$quake_render.$pbtofpolys[$quake_render.$numbtofpolys].psurf = surf;
										$quake_render.$numbtofpolys++;
									}
								}
								else {
									$quake_render.$r_RenderPoly(surf, clipflags);
								}
							}
							else {
								$quake_render.$r_RenderFace(surf, clipflags);
							}
						}
						surf = $quake_client.cl.worldmodel.surfaces[++surfofs];
					} while (--c !== 0);
				}
				else if (dot > $quake_render.backfacE_EPSILON) {
					do {
						if ((surf.flags & $quake_model.surF_PLANEBACK) === 0 && surf.visframe === $quake_render.r_framecount) {
							if ($quake_render.r_drawpolys) {
								if ($quake_render.r_worldpolysbacktofront) {
									if ($quake_render.$numbtofpolys < $quake_render.maX_BTOFPOLYS) {
										$quake_render.$pbtofpolys[$quake_render.$numbtofpolys].clipflags = clipflags;
										$quake_render.$pbtofpolys[$quake_render.$numbtofpolys].psurf = surf;
										$quake_render.$numbtofpolys++;
									}
								}
								else {
									$quake_render.$r_RenderPoly(surf, clipflags);
								}
							}
							else {
								$quake_render.$r_RenderFace(surf, clipflags);
							}
						}
						surf = $quake_client.cl.worldmodel.surfaces[++surfofs];
					} while (--c !== 0);
				}
				// all surfaces on the same node share the same sequence number
				$quake_render.$r_currentkey++;
			}
			// recurse down the back side
			$quake_render.$r_RecursiveWorldNode(_node.children[((side === 0) ? 1 : 0)], clipflags);
		}
	};
	$quake_render.$r_RenderWorld = function() {
		var i;
		var clmodel;
		if (ss.isNullOrUndefined($quake_render.$btofpolys)) {
			$quake_render.$btofpolys = new Array($quake_render.maX_BTOFPOLYS);
			for (var kk = 0; kk < $quake_render.maX_BTOFPOLYS; kk++) {
				$quake_render.$btofpolys[kk] = new $quake_render$btofpoly_t();
			}
			$quake_render.$pbtofpolys = $quake_render.$btofpolys;
		}
		$quake_render.currententity = $quake_client.cl_entities[0];
		$quake_mathlib.vectorCopy($quake_render.r_origin, $quake_render.modelorg);
		clmodel = $quake_render.currententity.model;
		$quake_render.$r_pcurrentvertbase = clmodel.vertexes;
		$quake_render.$r_RecursiveWorldNode(clmodel.nodes[0], 15);
		// if the driver wants the polygons back to front, play the visible ones back
		// in that order
		if ($quake_render.r_worldpolysbacktofront) {
			for (i = $quake_render.$numbtofpolys - 1; i >= 0; i--) {
				$quake_render.$r_RenderPoly($quake_render.$btofpolys[i].psurf, $quake_render.$btofpolys[i].clipflags);
			}
		}
	};
	$quake_render.$r_EmitEdge = function(pv0, pv1) {
		var edge, pcheck;
		var u_check;
		var u, u_step;
		var local = new Array(3), transformed = new Array(3);
		var world;
		var v, v2, ceilv0;
		var scale, lzi0, u0, v0;
		var side;
		if ($quake_render.$r_lastvertvalid) {
			u0 = $quake_render.$r_u1;
			v0 = $quake_render.$r_v1;
			lzi0 = $quake_render.$r_lzi1;
			ceilv0 = $quake_render.$r_ceilv1;
		}
		else {
			world = pv0.position;
			// transform and project
			$quake_mathlib.vectorSubtract(world, $quake_render.modelorg, local);
			$quake_render.transformVector(local, transformed);
			if (transformed[2] < $quake_render.neaR_CLIP) {
				transformed[2] = $quake_render.neaR_CLIP;
			}
			lzi0 = 1 / transformed[2];
			// FIXME: build x/yscale into transform?
			scale = $quake_render.xscale * lzi0;
			u0 = $quake_render.xcenter + scale * transformed[0];
			if (u0 < $quake_render.r_refdef.fvrectx_adj) {
				u0 = $quake_render.r_refdef.fvrectx_adj;
			}
			if (u0 > $quake_render.r_refdef.fvrectright_adj) {
				u0 = $quake_render.r_refdef.fvrectright_adj;
			}
			scale = $quake_render.yscale * lzi0;
			v0 = $quake_render.ycenter - scale * transformed[1];
			if (v0 < $quake_render.r_refdef.fvrecty_adj) {
				v0 = $quake_render.r_refdef.fvrecty_adj;
			}
			if (v0 > $quake_render.r_refdef.fvrectbottom_adj) {
				v0 = $quake_render.r_refdef.fvrectbottom_adj;
			}
			ceilv0 = ss.Int32.trunc(Math.ceil(v0));
		}
		world = pv1.position;
		// transform and project
		$quake_mathlib.vectorSubtract(world, $quake_render.modelorg, local);
		$quake_render.transformVector(local, transformed);
		if (transformed[2] < $quake_render.neaR_CLIP) {
			transformed[2] = $quake_render.neaR_CLIP;
		}
		$quake_render.$r_lzi1 = 1 / transformed[2];
		scale = $quake_render.xscale * $quake_render.$r_lzi1;
		$quake_render.$r_u1 = $quake_render.xcenter + scale * transformed[0];
		if ($quake_render.$r_u1 < $quake_render.r_refdef.fvrectx_adj) {
			$quake_render.$r_u1 = $quake_render.r_refdef.fvrectx_adj;
		}
		if ($quake_render.$r_u1 > $quake_render.r_refdef.fvrectright_adj) {
			$quake_render.$r_u1 = $quake_render.r_refdef.fvrectright_adj;
		}
		scale = $quake_render.yscale * $quake_render.$r_lzi1;
		$quake_render.$r_v1 = $quake_render.ycenter - scale * transformed[1];
		if ($quake_render.$r_v1 < $quake_render.r_refdef.fvrecty_adj) {
			$quake_render.$r_v1 = $quake_render.r_refdef.fvrecty_adj;
		}
		if ($quake_render.$r_v1 > $quake_render.r_refdef.fvrectbottom_adj) {
			$quake_render.$r_v1 = $quake_render.r_refdef.fvrectbottom_adj;
		}
		if ($quake_render.$r_lzi1 > lzi0) {
			lzi0 = $quake_render.$r_lzi1;
		}
		if (lzi0 > $quake_render.$r_nearzi) {
			$quake_render.$r_nearzi = lzi0;
		}
		// for right edges, all we want is the effect on 1/z
		if ($quake_render.$r_nearzionly) {
			return;
		}
		$quake_render.$r_emitted = 1;
		$quake_render.$r_ceilv1 = ss.Int32.trunc(Math.ceil($quake_render.$r_v1));
		// create the edge
		if (ceilv0 === $quake_render.$r_ceilv1) {
			// we cache unclipped horizontal edges as fully clipped
			if ($quake_render.$cacheoffset !== 2147483647) {
				$quake_render.$cacheoffset = 2147483648 | $quake_render.r_framecount & 2147483647;
			}
			return;
			// horizontal edge
		}
		side = ((ceilv0 > $quake_render.$r_ceilv1) ? 1 : 0);
		edge = $quake_render.$r_edges[$quake_render.$edge_p++];
		edge.owner = $quake_render.$r_pedge;
		edge.nearzi = lzi0;
		if (side === 0) {
			// trailing edge (go from p1 to p2)
			v = ceilv0;
			v2 = $quake_render.$r_ceilv1 - 1;
			edge.surfs[0] = $quake_render.surface_p + 1;
			edge.surfs[1] = 0;
			u_step = ($quake_render.$r_u1 - u0) / ($quake_render.$r_v1 - v0);
			u = u0 + (v - v0) * u_step;
		}
		else {
			// leading edge (go from p2 to p1)
			v2 = ceilv0 - 1;
			v = $quake_render.$r_ceilv1;
			edge.surfs[0] = 0;
			edge.surfs[1] = $quake_render.surface_p + 1;
			u_step = (u0 - $quake_render.$r_u1) / (v0 - $quake_render.$r_v1);
			u = $quake_render.$r_u1 + (v - $quake_render.$r_v1) * u_step;
		}
		edge.u_step = ss.Int32.trunc(u_step * 1048576);
		edge.u = ss.Int32.trunc(u * 1048576 + 1048575);
		// we need to do this to avoid stepping off the edges if a very nearly
		// horizontal edge is less than epsilon above a scan, and numeric error causes
		// it to incorrectly extend to the scan, and the extension of the line goes off
		// the edge of the screen
		// FIXME: is this actually needed?
		if (edge.u < $quake_render.r_refdef.vrect_x_adj_shift20) {
			edge.u = $quake_render.r_refdef.vrect_x_adj_shift20;
		}
		if (edge.u > $quake_render.r_refdef.vrectright_adj_shift20) {
			edge.u = $quake_render.r_refdef.vrectright_adj_shift20;
		}
		//
		// sort the edge in normally
		//
		u_check = edge.u;
		if (edge.surfs[0] !== 0) {
			u_check++;
		}
		// sort trailers after leaders
		if (ss.isNullOrUndefined($quake_render.$newedges[v]) || $quake_render.$newedges[v].u >= u_check) {
			edge.next = $quake_render.$newedges[v];
			$quake_render.$newedges[v] = edge;
		}
		else {
			pcheck = $quake_render.$newedges[v];
			while (ss.isValue(pcheck.next) && pcheck.next.u < u_check) {
				pcheck = pcheck.next;
			}
			edge.next = pcheck.next;
			pcheck.next = edge;
		}
		edge.nextremove = $quake_render.$removeedges[v2];
		$quake_render.$removeedges[v2] = edge;
	};
	$quake_render.$r_ClipEdge = function(pv0, pv1, clip) {
		var d0, d1, f;
		var clipvert = new $quake_model$mvertex_t();
		if (ss.isValue(clip)) {
			do {
				d0 = $quake_mathlib.dotProduct$1(pv0.position, clip.normal) - clip.dist;
				d1 = $quake_mathlib.dotProduct$1(pv1.position, clip.normal) - clip.dist;
				if (d0 >= 0) {
					// point 0 is unclipped
					if (d1 >= 0) {
						// both points are unclipped
						continue;
					}
					// only point 1 is clipped
					// we don't cache clipped edges
					$quake_render.$cacheoffset = 2147483647;
					f = d0 / (d0 - d1);
					clipvert.position[0] = pv0.position[0] + f * (pv1.position[0] - pv0.position[0]);
					clipvert.position[1] = pv0.position[1] + f * (pv1.position[1] - pv0.position[1]);
					clipvert.position[2] = pv0.position[2] + f * (pv1.position[2] - pv0.position[2]);
					if (clip.leftedge) {
						$quake_render.$r_leftclipped = true;
						$quake_render.$r_leftexit = clipvert;
					}
					else if (clip.rightedge) {
						$quake_render.$r_rightclipped = true;
						$quake_render.$r_rightexit = clipvert;
					}
					$quake_render.$r_ClipEdge(pv0, clipvert, clip.next);
					return;
				}
				else {
					// point 0 is clipped
					if (d1 < 0) {
						// both points are clipped
						// we do cache fully clipped edges
						if (!$quake_render.$r_leftclipped) {
							$quake_render.$cacheoffset = 2147483648 | $quake_render.r_framecount & 2147483647;
						}
						return;
					}
					// only point 0 is clipped
					$quake_render.$r_lastvertvalid = false;
					// we don't cache partially clipped edges
					$quake_render.$cacheoffset = 2147483647;
					f = d0 / (d0 - d1);
					clipvert.position[0] = pv0.position[0] + f * (pv1.position[0] - pv0.position[0]);
					clipvert.position[1] = pv0.position[1] + f * (pv1.position[1] - pv0.position[1]);
					clipvert.position[2] = pv0.position[2] + f * (pv1.position[2] - pv0.position[2]);
					if (clip.leftedge) {
						$quake_render.$r_leftclipped = true;
						$quake_render.$r_leftenter = clipvert;
					}
					else if (clip.rightedge) {
						$quake_render.$r_rightclipped = true;
						$quake_render.$r_rightenter = clipvert;
					}
					$quake_render.$r_ClipEdge(clipvert, pv1, clip.next);
					return;
				}
			} while (ss.isValue(clip = clip.next));
		}
		// add the edge
		$quake_render.$r_EmitEdge(pv0, pv1);
	};
	$quake_render.$r_EmitCachedEdge = function() {
		var pedge_t;
		pedge_t = $quake_render.$r_edges[$quake_render.$r_pedge.cachededgeoffset];
		if (pedge_t.surfs[0] === 0) {
			pedge_t.surfs[0] = $quake_render.surface_p + 1;
		}
		else {
			pedge_t.surfs[1] = $quake_render.surface_p + 1;
		}
		if (pedge_t.nearzi > $quake_render.$r_nearzi) {
			$quake_render.$r_nearzi = pedge_t.nearzi;
		}
		$quake_render.$r_emitted = 1;
	};
	$quake_render.$r_RenderFace = function(fa, clipflags) {
		var i, lindex;
		var mask;
		var pplane;
		var distinv;
		var p_normal = new Array(3);
		var pedges;
		var tedge = new $quake_model$medge_t();
		var pclip;
		// skip out if no more surfs
		if ($quake_render.surface_p >= $quake_render.surf_max) {
			$quake_render.$r_outofsurfaces++;
			return;
		}
		// ditto if not enough edges left, or switch to auxedges if possible
		if ($quake_render.$edge_p + fa.numedges + 4 >= $quake_render.$edge_max) {
			$quake_render.$r_outofedges += fa.numedges;
			return;
		}
		$quake_render.$c_faceclip++;
		// set up clip planes
		pclip = null;
		for (i = 3, mask = 8; i >= 0; i--, mask >>>= 1) {
			if ((clipflags & mask) !== 0) {
				$quake_render.$view_clipplanes[i].next = pclip;
				pclip = $quake_render.$view_clipplanes[i];
			}
		}
		// push the edges through
		$quake_render.$r_emitted = 0;
		$quake_render.$r_nearzi = 0;
		$quake_render.$r_nearzionly = false;
		$quake_render.$makeleftedge = $quake_render.$makerightedge = false;
		pedges = $quake_render.currententity.model.edges;
		$quake_render.$r_lastvertvalid = false;
		for (i = 0; i < fa.numedges; i++) {
			lindex = $quake_render.currententity.model.surfedges[fa.firstedge + i];
			if (lindex > 0) {
				$quake_render.$r_pedge = pedges[lindex];
				// if the edge is cached, we can just reuse the edge
				if (!$quake_render.$insubmodel) {
					if (($quake_render.$r_pedge.cachededgeoffset & $quake_render.fullY_CLIPPED_CACHED) !== 0) {
						if (($quake_render.$r_pedge.cachededgeoffset & $quake_render.framecounT_MASK) === $quake_render.r_framecount) {
							$quake_render.$r_lastvertvalid = false;
							continue;
						}
					}
					else if ($quake_render.$edge_p > $quake_render.$r_pedge.cachededgeoffset && ss.referenceEquals($quake_render.$r_edges[$quake_render.$r_pedge.cachededgeoffset].owner, $quake_render.$r_pedge)) {
						$quake_render.$r_EmitCachedEdge();
						$quake_render.$r_lastvertvalid = false;
						continue;
					}
				}
				// assume it's cacheable
				$quake_render.$cacheoffset = $quake_render.$edge_p;
				$quake_render.$r_leftclipped = $quake_render.$r_rightclipped = false;
				$quake_render.$r_ClipEdge($quake_render.$r_pcurrentvertbase[$quake_render.$r_pedge.v[0]], $quake_render.$r_pcurrentvertbase[$quake_render.$r_pedge.v[1]], pclip);
				$quake_render.$r_pedge.cachededgeoffset = $quake_render.$cacheoffset;
				if ($quake_render.$r_leftclipped) {
					$quake_render.$makeleftedge = true;
				}
				if ($quake_render.$r_rightclipped) {
					$quake_render.$makerightedge = true;
				}
				$quake_render.$r_lastvertvalid = true;
			}
			else {
				lindex = -lindex;
				$quake_render.$r_pedge = pedges[lindex];
				// if the edge is cached, we can just reuse the edge
				if (!$quake_render.$insubmodel) {
					if (($quake_render.$r_pedge.cachededgeoffset & $quake_render.fullY_CLIPPED_CACHED) !== 0) {
						if (($quake_render.$r_pedge.cachededgeoffset & $quake_render.framecounT_MASK) === $quake_render.r_framecount) {
							$quake_render.$r_lastvertvalid = false;
							continue;
						}
					}
					else {
						// it's cached if the cached edge is valid and is owned
						// by this medge_t
						if ($quake_render.$edge_p > $quake_render.$r_pedge.cachededgeoffset && ss.referenceEquals($quake_render.$r_edges[$quake_render.$r_pedge.cachededgeoffset].owner, $quake_render.$r_pedge)) {
							$quake_render.$r_EmitCachedEdge();
							$quake_render.$r_lastvertvalid = false;
							continue;
						}
					}
				}
				// assume it's cacheable
				$quake_render.$cacheoffset = $quake_render.$edge_p;
				$quake_render.$r_leftclipped = $quake_render.$r_rightclipped = false;
				$quake_render.$r_ClipEdge($quake_render.$r_pcurrentvertbase[$quake_render.$r_pedge.v[1]], $quake_render.$r_pcurrentvertbase[$quake_render.$r_pedge.v[0]], pclip);
				$quake_render.$r_pedge.cachededgeoffset = $quake_render.$cacheoffset;
				if ($quake_render.$r_leftclipped) {
					$quake_render.$makeleftedge = true;
				}
				if ($quake_render.$r_rightclipped) {
					$quake_render.$makerightedge = true;
				}
				$quake_render.$r_lastvertvalid = true;
			}
		}
		// if there was a clip off the left edge, add that edge too
		// FIXME: faster to do in screen space?
		// FIXME: share clipped edges?
		if ($quake_render.$makeleftedge) {
			$quake_render.$r_pedge = tedge;
			$quake_render.$r_lastvertvalid = false;
			$quake_render.$r_ClipEdge($quake_render.$r_leftexit, $quake_render.$r_leftenter, pclip.next);
		}
		// if there was a clip off the right edge, get the right r_nearzi
		if ($quake_render.$makerightedge) {
			$quake_render.$r_pedge = tedge;
			$quake_render.$r_lastvertvalid = false;
			$quake_render.$r_nearzionly = true;
			$quake_render.$r_ClipEdge($quake_render.$r_rightexit, $quake_render.$r_rightenter, $quake_render.$view_clipplanes[1].next);
		}
		// if no edges made it out, return without posting the surface
		if ($quake_render.$r_emitted === 0) {
			return;
		}
		$quake_render.$r_polycount++;
		$quake_render.surfaces[$quake_render.surface_p].data = fa;
		$quake_render.surfaces[$quake_render.surface_p].nearzi = $quake_render.$r_nearzi;
		$quake_render.surfaces[$quake_render.surface_p].flags = fa.flags;
		$quake_render.surfaces[$quake_render.surface_p].insubmodel = $quake_render.$insubmodel;
		$quake_render.surfaces[$quake_render.surface_p].spanstate = 0;
		$quake_render.surfaces[$quake_render.surface_p].entity = $quake_render.currententity;
		$quake_render.surfaces[$quake_render.surface_p].key = $quake_render.$r_currentkey++;
		$quake_render.surfaces[$quake_render.surface_p].spans = null;
		pplane = fa.plane;
		// FIXME: cache this?
		$quake_render.transformVector(pplane.normal, p_normal);
		// FIXME: cache this?
		distinv = 1 / (pplane.dist - $quake_mathlib.dotProduct$1($quake_render.modelorg, pplane.normal));
		$quake_render.surfaces[$quake_render.surface_p].d_zistepu = p_normal[0] * $quake_render.xscaleinv * distinv;
		$quake_render.surfaces[$quake_render.surface_p].d_zistepv = -p_normal[1] * $quake_render.yscaleinv * distinv;
		$quake_render.surfaces[$quake_render.surface_p].d_ziorigin = p_normal[2] * distinv - $quake_render.xcenter * $quake_render.surfaces[$quake_render.surface_p].d_zistepu - $quake_render.ycenter * $quake_render.surfaces[$quake_render.surface_p].d_zistepv;
		//JDC	VectorCopy (r_worldmodelorg, surface_p->modelorg);
		$quake_render.surface_p++;
	};
	$quake_render.$r_RenderBmodelFace = function(pedges, psurf) {
		var i;
		var mask;
		var pplane;
		var distinv;
		var p_normal = new Array(3);
		var tedge = new $quake_model$medge_t();
		var pclip;
		// skip out if no more surfs
		if ($quake_render.surface_p >= $quake_render.surf_max) {
			$quake_render.$r_outofsurfaces++;
			return;
		}
		// ditto if not enough edges left, or switch to auxedges if possible
		if ($quake_render.$edge_p + psurf.numedges + 4 >= $quake_render.$edge_max) {
			$quake_render.$r_outofedges += psurf.numedges;
			return;
		}
		$quake_render.$c_faceclip++;
		// this is a dummy to give the caching mechanism someplace to write to
		$quake_render.$r_pedge = tedge;
		// set up clip planes
		pclip = null;
		for (i = 3, mask = 8; i >= 0; i--, mask >>>= 1) {
			if (($quake_render.$r_clipflags & mask) !== 0) {
				$quake_render.$view_clipplanes[i].next = pclip;
				pclip = $quake_render.$view_clipplanes[i];
			}
		}
		// push the edges through
		$quake_render.$r_emitted = 0;
		$quake_render.$r_nearzi = 0;
		$quake_render.$r_nearzionly = false;
		$quake_render.$makeleftedge = $quake_render.$makerightedge = false;
		// FIXME: keep clipped bmodel edges in clockwise order so last vertex caching
		// can be used?
		$quake_render.$r_lastvertvalid = false;
		for (; ss.isValue(pedges); pedges = pedges.pnext) {
			$quake_render.$r_leftclipped = $quake_render.$r_rightclipped = false;
			$quake_render.$r_ClipEdge(pedges.v[0], pedges.v[1], pclip);
			if ($quake_render.$r_leftclipped) {
				$quake_render.$makeleftedge = true;
			}
			if ($quake_render.$r_rightclipped) {
				$quake_render.$makerightedge = true;
			}
		}
		// if there was a clip off the left edge, add that edge too
		// FIXME: faster to do in screen space?
		// FIXME: share clipped edges?
		if ($quake_render.$makeleftedge) {
			$quake_render.$r_pedge = tedge;
			$quake_render.$r_ClipEdge($quake_render.$r_leftexit, $quake_render.$r_leftenter, pclip.next);
		}
		// if there was a clip off the right edge, get the right r_nearzi
		if ($quake_render.$makerightedge) {
			$quake_render.$r_pedge = tedge;
			$quake_render.$r_nearzionly = true;
			$quake_render.$r_ClipEdge($quake_render.$r_rightexit, $quake_render.$r_rightenter, $quake_render.$view_clipplanes[1].next);
		}
		// if no edges made it out, return without posting the surface
		if ($quake_render.$r_emitted === 0) {
			return;
		}
		$quake_render.$r_polycount++;
		$quake_render.surfaces[$quake_render.surface_p].data = psurf;
		$quake_render.surfaces[$quake_render.surface_p].nearzi = $quake_render.$r_nearzi;
		$quake_render.surfaces[$quake_render.surface_p].flags = psurf.flags;
		$quake_render.surfaces[$quake_render.surface_p].insubmodel = true;
		$quake_render.surfaces[$quake_render.surface_p].spanstate = 0;
		$quake_render.surfaces[$quake_render.surface_p].entity = $quake_render.currententity;
		$quake_render.surfaces[$quake_render.surface_p].key = $quake_render.$r_currentbkey;
		$quake_render.surfaces[$quake_render.surface_p].spans = null;
		pplane = psurf.plane;
		// FIXME: cache this?
		$quake_render.transformVector(pplane.normal, p_normal);
		// FIXME: cache this?
		distinv = 1 / (pplane.dist - $quake_mathlib.dotProduct$1($quake_render.modelorg, pplane.normal));
		$quake_render.surfaces[$quake_render.surface_p].d_zistepu = p_normal[0] * $quake_render.xscaleinv * distinv;
		$quake_render.surfaces[$quake_render.surface_p].d_zistepv = -p_normal[1] * $quake_render.yscaleinv * distinv;
		$quake_render.surfaces[$quake_render.surface_p].d_ziorigin = p_normal[2] * distinv - $quake_render.xcenter * $quake_render.surfaces[$quake_render.surface_p].d_zistepu - $quake_render.ycenter * $quake_render.surfaces[$quake_render.surface_p].d_zistepv;
		//JDC	VectorCopy (r_worldmodelorg, surface_p.modelorg);
		$quake_render.surface_p++;
	};
	$quake_render.$r_RenderPoly = function(fa, clipflags) {
	};
	$quake_render.$r_ZDrawSubmodelPolys = function(pmodel) {
	};
	$quake_render.$r_DrawCulledPolys = function() {
	};
	$quake_render.$r_BeginEdgeFrame = function() {
		var v;
		$quake_render.$edge_p = 0;
		$quake_render.$edge_max = $quake_render.$r_numallocatededges;
		$quake_render.surface_p = 1;
		// background is surface 1,
		//  surface 0 is a dummy
		$quake_render.surfaces[0].spans = null;
		// no background spans yet
		$quake_render.surfaces[0].flags = $quake_model.surF_DRAWBACKGROUND;
		// put the background behind everything in the world
		if ($quake_render.$r_draworder.value !== 0) {
			$quake_render.$pdrawfunc = $quake_render.$r_GenerateSpansBackward;
			$quake_render.surfaces[0].key = 0;
			$quake_render.$r_currentkey = 1;
		}
		else {
			$quake_render.$pdrawfunc = $quake_render.$r_GenerateSpans;
			$quake_render.surfaces[0].key = 2147483647;
			$quake_render.$r_currentkey = 0;
		}
		// FIXME: set with memset
		for (v = $quake_render.r_refdef.vrect.y; v < $quake_render.r_refdef.vrectbottom; v++) {
			$quake_render.$newedges[v] = $quake_render.$removeedges[v] = null;
		}
	};
	$quake_render.$r_InsertNewEdges = function(edgestoadd, edgelist) {
		var $state = 0, next_edge;
		$sm1:
		for (;;) {
			switch ($state) {
				case 0: {
					$state = 1;
					continue $sm1;
				}
				case 1: {
					next_edge = edgestoadd.next;
					$state = 3;
					continue $sm1;
				}
				case 3: {
					if (edgelist.u >= edgestoadd.u) {
						$state = 4;
						continue $sm1;
					}
					edgelist = edgelist.next;
					if (edgelist.u >= edgestoadd.u) {
						$state = 4;
						continue $sm1;
					}
					edgelist = edgelist.next;
					if (edgelist.u >= edgestoadd.u) {
						$state = 4;
						continue $sm1;
					}
					edgelist = edgelist.next;
					if (edgelist.u >= edgestoadd.u) {
						$state = 4;
						continue $sm1;
					}
					edgelist = edgelist.next;
					$state = 3;
					continue $sm1;
					// insert edgestoadd before edgelist
					$state = 4;
					continue $sm1;
				}
				case 2: {
					if (ss.isValue(edgestoadd = next_edge)) {
						$state = 1;
						continue $sm1;
					}
					$state = -1;
					break $sm1;
				}
				case 4: {
					edgestoadd.next = edgelist;
					edgestoadd.prev = edgelist.prev;
					edgelist.prev.next = edgestoadd;
					edgelist.prev = edgestoadd;
					$state = 2;
					continue $sm1;
				}
				default: {
					break $sm1;
				}
			}
		}
	};
	$quake_render.$r_RemoveEdges = function(pedge) {
		do {
			pedge.next.prev = pedge.prev;
			pedge.prev.next = pedge.next;
		} while (ss.isValue(pedge = pedge.nextremove));
	};
	$quake_render.$r_StepActiveU = function(pedge) {
		var $state = 0, pnext_edge, pwedge;
		$sm1:
		for (;;) {
			switch ($state) {
				case 0: {
					$state = 1;
					continue $sm1;
				}
				case 1: {
					if (!true) {
						$state = -1;
						break $sm1;
					}
					$state = 2;
					continue $sm1;
				}
				case 2: {
					pedge.u += pedge.u_step;
					if (pedge.u < pedge.prev.u) {
						$state = 3;
						continue $sm1;
					}
					pedge = pedge.next;
					pedge.u += pedge.u_step;
					if (pedge.u < pedge.prev.u) {
						$state = 3;
						continue $sm1;
					}
					pedge = pedge.next;
					pedge.u += pedge.u_step;
					if (pedge.u < pedge.prev.u) {
						$state = 3;
						continue $sm1;
					}
					pedge = pedge.next;
					pedge.u += pedge.u_step;
					if (pedge.u < pedge.prev.u) {
						$state = 3;
						continue $sm1;
					}
					pedge = pedge.next;
					$state = 2;
					continue $sm1;
				}
				case 3: {
					if (ss.referenceEquals(pedge, $quake_render.$edge_aftertail)) {
						return;
					}
					// push it back to keep it sorted		
					pnext_edge = pedge.next;
					// pull the edge out of the edge list
					pedge.next.prev = pedge.prev;
					pedge.prev.next = pedge.next;
					// find out where the edge goes in the edge list
					pwedge = pedge.prev.prev;
					while (pwedge.u > pedge.u) {
						pwedge = pwedge.prev;
					}
					// put the edge back into the edge list
					pedge.next = pwedge.next;
					pedge.prev = pwedge;
					pedge.next.prev = pedge;
					pwedge.next = pedge;
					pedge = pnext_edge;
					if (ss.referenceEquals(pedge, $quake_render.$edge_tail)) {
						return;
					}
					$state = 1;
					continue $sm1;
				}
				default: {
					break $sm1;
				}
			}
		}
	};
	$quake_render.$r_CleanupSpan = function() {
		var surf;
		var iu;
		var span;
		// now that we've reached the right edge of the screen, we're done with any
		// unfinished surfaces, so emit a span for whatever's on top
		surf = $quake_render.surfaces[0].next;
		iu = $quake_render.$edge_tail_u_shift20;
		if (iu > surf.last_u) {
			span = $quake_render.$basespans[$quake_render.$span_p++];
			span.u = surf.last_u;
			span.count = iu - span.u;
			span.v = $quake_render.$current_iv;
			span.pnext = surf.spans;
			surf.spans = span;
		}
		// reset spanstate for all surfaces in the surface stack
		do {
			surf.spanstate = 0;
			surf = surf.next;
		} while (!ss.referenceEquals(surf, $quake_render.surfaces[0]));
	};
	$quake_render.$r_LeadingEdgeBackwards = function(edge) {
	};
	$quake_render.$r_TrailingEdge = function(surf, edge) {
		var span;
		var iu;
		// don't generate a span if this is an inverted span, with the end
		// edge preceding the start edge (that is, we haven't seen the
		// start edge yet)
		if (--surf.spanstate === 0) {
			if (surf.insubmodel) {
				$quake_render.$r_bmodelactive--;
			}
			if (ss.referenceEquals(surf, $quake_render.surfaces[0].next)) {
				// emit a span (current top going away)
				iu = edge.u >> 20;
				if (iu > surf.last_u) {
					span = $quake_render.$basespans[$quake_render.$span_p++];
					span.u = surf.last_u;
					span.count = iu - span.u;
					span.v = $quake_render.$current_iv;
					span.pnext = surf.spans;
					surf.spans = span;
				}
				// set last_u on the surface below
				surf.next.last_u = iu;
			}
			surf.prev.next = surf.next;
			surf.next.prev = surf.prev;
		}
	};
	$quake_render.$r_LeadingEdge = function(edge) {
		var $state = 0, span, surf, surf2, iu, fu, newzi, testzi, newzitop, newzibottom;
		$sm1:
		for (;;) {
			switch ($state) {
				case 0: {
					if (edge.surfs[1] !== 0) {
						// it's adding a new surface in, so find the correct place
						surf = $quake_render.surfaces[edge.surfs[1] - 1];
						// don't start a span if this is an inverted span, with the end
						// edge preceding the start edge (that is, we've already seen the
						// end edge)
						if (++surf.spanstate === 1) {
							if (surf.insubmodel) {
								$quake_render.$r_bmodelactive++;
							}
							surf2 = $quake_render.surfaces[0].next;
							if (surf.key < surf2.key) {
								$state = 2;
								continue $sm1;
							}
							// if it's two surfaces on the same plane, the one that's already
							// active is in front, so keep going unless it's a bmodel
							if (surf.insubmodel && surf.key === surf2.key) {
								// must be two bmodels in the same leaf; sort on 1/z
								fu = (edge.u - 1048575) * 9.5367431640625E-07;
								newzi = surf.d_ziorigin + $quake_render.$fv * surf.d_zistepv + fu * surf.d_zistepu;
								newzibottom = newzi * 0.99;
								testzi = surf2.d_ziorigin + $quake_render.$fv * surf2.d_zistepv + fu * surf2.d_zistepu;
								if (newzibottom >= testzi) {
									$state = 2;
									continue $sm1;
								}
								newzitop = newzi * 1.01;
								if (newzitop >= testzi) {
									if (surf.d_zistepu >= surf2.d_zistepu) {
										$state = 2;
										continue $sm1;
									}
								}
							}
							$state = 1;
							continue $sm1;
						}
						$state = -1;
						break $sm1;
					}
					$state = -1;
					break $sm1;
				}
				case 1: {
					do {
						surf2 = surf2.next;
					} while (surf.key > surf2.key);
					if (surf.key === surf2.key) {
						// if it's two surfaces on the same plane, the one that's already
						// active is in front, so keep going unless it's a bmodel
						if (!surf.insubmodel) {
							$state = 1;
							continue $sm1;
						}
						// must be two bmodels in the same leaf; sort on 1/z
						fu = (edge.u - 1048575) * 9.5367431640625E-07;
						newzi = surf.d_ziorigin + $quake_render.$fv * surf.d_zistepv + fu * surf.d_zistepu;
						newzibottom = newzi * 0.99;
						testzi = surf2.d_ziorigin + $quake_render.$fv * surf2.d_zistepv + fu * surf2.d_zistepu;
						if (newzibottom >= testzi) {
							$state = 3;
							continue $sm1;
						}
						newzitop = newzi * 1.01;
						if (newzitop >= testzi) {
							if (surf.d_zistepu >= surf2.d_zistepu) {
								$state = 3;
								continue $sm1;
							}
						}
						$state = 1;
						continue $sm1;
					}
					$state = 3;
					continue $sm1;
				}
				case 2: {
					iu = edge.u >> 20;
					if (iu > surf2.last_u) {
						span = $quake_render.$basespans[$quake_render.$span_p++];
						span.u = surf2.last_u;
						span.count = iu - span.u;
						span.v = $quake_render.$current_iv;
						span.pnext = surf2.spans;
						surf2.spans = span;
					}
					// set last_u on the new span
					surf.last_u = iu;
					$state = 3;
					continue $sm1;
				}
				case 3: {
					surf.next = surf2;
					surf.prev = surf2.prev;
					surf2.prev.next = surf;
					surf2.prev = surf;
					$state = -1;
					break $sm1;
				}
				default: {
					break $sm1;
				}
			}
		}
	};
	$quake_render.$r_GenerateSpans = function() {
		var edge;
		var surf;
		$quake_render.$r_bmodelactive = 0;
		// clear active surfaces to just the background surface
		$quake_render.surfaces[0].next = $quake_render.surfaces[0].prev = $quake_render.surfaces[0];
		$quake_render.surfaces[0].last_u = $quake_render.$edge_head_u_shift20;
		// generate spans
		for (edge = $quake_render.$edge_head.next; !ss.referenceEquals(edge, $quake_render.$edge_tail); edge = edge.next) {
			if (edge.surfs[0] !== 0) {
				// it has a left surface, so a surface is going away for this span
				surf = $quake_render.surfaces[edge.surfs[0] - 1];
				$quake_render.$r_TrailingEdge(surf, edge);
				if (edge.surfs[1] === 0) {
					continue;
				}
			}
			$quake_render.$r_LeadingEdge(edge);
		}
		$quake_render.$r_CleanupSpan();
	};
	$quake_render.$r_GenerateSpansBackward = function() {
	};
	$quake_render.$r_ScanEdges = function() {
		var iv, bottom;
		var s;
		if (ss.isNullOrUndefined($quake_render.$basespans)) {
			$quake_render.$basespans = new Array($quake_render.MAXSPANS);
			for (var kk = 0; kk < $quake_render.MAXSPANS; kk++) {
				$quake_render.$basespans[kk] = new $quake_render$espan_t();
			}
		}
		$quake_render.$max_span_p = $quake_render.MAXSPANS - $quake_render.r_refdef.vrect.width;
		$quake_render.$span_p = 0;
		// clear active edges to just the background edges around the whole screen
		// FIXME: most of this only needs to be set up once
		$quake_render.$edge_head.u = $quake_render.r_refdef.vrect.x << 20;
		$quake_render.$edge_head_u_shift20 = $quake_render.$edge_head.u >> 20;
		$quake_render.$edge_head.u_step = 0;
		$quake_render.$edge_head.prev = null;
		$quake_render.$edge_head.next = $quake_render.$edge_tail;
		$quake_render.$edge_head.surfs[0] = 0;
		$quake_render.$edge_head.surfs[1] = 1;
		$quake_render.$edge_tail.u = ($quake_render.r_refdef.vrectright << 20) + 1048575;
		$quake_render.$edge_tail_u_shift20 = $quake_render.$edge_tail.u >> 20;
		$quake_render.$edge_tail.u_step = 0;
		$quake_render.$edge_tail.prev = $quake_render.$edge_head;
		$quake_render.$edge_tail.next = $quake_render.$edge_aftertail;
		$quake_render.$edge_tail.surfs[0] = 1;
		$quake_render.$edge_tail.surfs[1] = 0;
		$quake_render.$edge_aftertail.u = -1;
		// force a move
		$quake_render.$edge_aftertail.u_step = 0;
		$quake_render.$edge_aftertail.next = $quake_render.$edge_sentinel;
		$quake_render.$edge_aftertail.prev = $quake_render.$edge_tail;
		// FIXME: do we need this now that we clamp x in r_draw.c?
		$quake_render.$edge_sentinel.u = -805306368;
		// make sure nothing sorts past this
		$quake_render.$edge_sentinel.prev = $quake_render.$edge_aftertail;
		//	
		// process all scan lines
		//
		bottom = $quake_render.r_refdef.vrectbottom - 1;
		for (iv = $quake_render.r_refdef.vrect.y; iv < bottom; iv++) {
			$quake_render.$current_iv = iv;
			$quake_render.$fv = iv;
			// mark that the head (background start) span is pre-included
			$quake_render.surfaces[0].spanstate = 1;
			if (ss.isValue($quake_render.$newedges[iv])) {
				$quake_render.$r_InsertNewEdges($quake_render.$newedges[iv], $quake_render.$edge_head.next);
			}
			$quake_render.$pdrawfunc();
			// flush the span list if we can't be sure we have enough spans left for
			// the next scan
			if ($quake_render.$span_p >= $quake_render.$max_span_p) {
				$quake_sound.s_ExtraUpdate();
				// don't let sound get messed up if going slow
				if ($quake_render.$r_drawculledpolys) {
					$quake_render.$r_DrawCulledPolys();
				}
				else {
					$quake_draw.d_DrawSurfaces();
				}
				// clear the surface span pointers
				for (var i = 0; i < $quake_render.surface_p; i++) {
					s = $quake_render.surfaces[i];
					s.spans = null;
				}
				$quake_render.$span_p = 0;
			}
			if (ss.isValue($quake_render.$removeedges[iv])) {
				$quake_render.$r_RemoveEdges($quake_render.$removeedges[iv]);
			}
			if (!ss.referenceEquals($quake_render.$edge_head.next, $quake_render.$edge_tail)) {
				$quake_render.$r_StepActiveU($quake_render.$edge_head.next);
			}
		}
		// do the last scan (no need to step or sort or remove on the last scan)
		$quake_render.$current_iv = iv;
		$quake_render.$fv = iv;
		// mark that the head (background start) span is pre-included
		$quake_render.surfaces[0].spanstate = 1;
		if (ss.isValue($quake_render.$newedges[iv])) {
			$quake_render.$r_InsertNewEdges($quake_render.$newedges[iv], $quake_render.$edge_head.next);
		}
		$quake_render.$pdrawfunc();
		// draw whatever's left in the span list
		if ($quake_render.$r_drawculledpolys) {
			$quake_render.$r_DrawCulledPolys();
		}
		else {
			$quake_draw.d_DrawSurfaces();
		}
	};
	$quake_render.r_RemoveEfrags = function(ent) {
		var ef, old, walk, prev;
		ef = ent.efrag;
		while (ss.isValue(ef)) {
			prev = ef.leaf.efrags;
			while (true) {
				walk = prev;
				if (ss.isNullOrUndefined(walk)) {
					break;
				}
				if (ss.referenceEquals(walk, ef)) {
					// remove this fragment
					prev = ef.leafnext;
					break;
				}
				else {
					prev = walk.leafnext;
				}
			}
			old = ef;
			ef = ef.entnext;
			// put it on the free list
			old.entnext = $quake_client.cl.free_efrags;
			$quake_client.cl.free_efrags = old;
		}
		ent.efrag = null;
	};
	$quake_render.$r_SplitEntityOnNode = function(node) {
		var ef;
		var splitplane;
		var leaf;
		var sides;
		if (node.contents === $quake_bspfile.contentS_SOLID) {
			return;
		}
		// add an efrag if the node is a leaf
		if (node.contents < 0) {
			if (ss.isNullOrUndefined($quake_render.$r_pefragtopnode)) {
				$quake_render.$r_pefragtopnode = node;
			}
			leaf = Type.cast(node, $quake_model$mleaf_t);
			// grab an efrag off the free list
			ef = $quake_client.cl.free_efrags;
			if (ss.isNullOrUndefined(ef)) {
				$quake_console.con_Printf('Too many efrags!\n');
				return;
				// no free fragments...
			}
			$quake_client.cl.free_efrags = $quake_client.cl.free_efrags.entnext;
			ef.entity = $quake_render.$r_addent;
			// add the entity link
			if (ss.isNullOrUndefined($quake_render.$lastlink)) {
				$quake_render.$r_addent.efrag = ef;
			}
			else {
				$quake_render.$lastlink.entnext = ef;
			}
			$quake_render.$lastlink = ef;
			ef.entnext = null;
			// set the leaf links
			ef.leaf = leaf;
			ef.leafnext = leaf.efrags;
			leaf.efrags = ef;
			return;
		}
		// NODE_MIXED
		var _node = Type.cast(node, $quake_model$mnode_t);
		splitplane = _node.plane;
		sides = $quake_mathlib.boX_ON_PLANE_SIDE($quake_render.$r_emins, $quake_render.$r_emaxs, splitplane);
		if (sides === 3) {
			// split on this plane
			// if this is the first splitter of this bmodel, remember it
			if (ss.isNullOrUndefined($quake_render.$r_pefragtopnode)) {
				$quake_render.$r_pefragtopnode = node;
			}
		}
		// recurse down the contacted sides
		if ((sides & 1) !== 0) {
			$quake_render.$r_SplitEntityOnNode(_node.children[0]);
		}
		if ((sides & 2) !== 0) {
			$quake_render.$r_SplitEntityOnNode(_node.children[1]);
		}
	};
	$quake_render.$r_SplitEntityOnNode2 = function(node) {
		var splitplane;
		var sides;
		if (node.visframe !== $quake_render.$r_visframecount) {
			return;
		}
		if (node.contents < 0) {
			if (node.contents !== $quake_bspfile.contentS_SOLID) {
				$quake_render.$r_pefragtopnode = node;
			}
			// we've reached a non-solid leaf, so it's
			//  visible and not BSP clipped
			return;
		}
		var _node = Type.cast(node, $quake_model$mnode_t);
		splitplane = _node.plane;
		sides = $quake_mathlib.boX_ON_PLANE_SIDE($quake_render.$r_emins, $quake_render.$r_emaxs, splitplane);
		if (sides === 3) {
			// remember first splitter
			$quake_render.$r_pefragtopnode = node;
			return;
		}
		// not split yet; recurse down the contacted side
		if ((sides & 1) !== 0) {
			$quake_render.$r_SplitEntityOnNode2(_node.children[0]);
		}
		else {
			$quake_render.$r_SplitEntityOnNode2(_node.children[1]);
		}
	};
	$quake_render.r_AddEfrags = function(ent) {
		var entmodel;
		var i;
		if (ss.isNullOrUndefined(ent.model)) {
			return;
		}
		if (ss.referenceEquals(ent, $quake_client.cl_entities[0])) {
			return;
		}
		// never add the world
		$quake_render.$r_addent = ent;
		$quake_render.$lastlink = null;
		$quake_render.$r_pefragtopnode = null;
		entmodel = ent.model;
		for (i = 0; i < 3; i++) {
			$quake_render.$r_emins[i] = ent.origin[i] + entmodel.mins[i];
			$quake_render.$r_emaxs[i] = ent.origin[i] + entmodel.maxs[i];
		}
		$quake_render.$r_SplitEntityOnNode($quake_client.cl.worldmodel.nodes[0]);
		ent.topnode = $quake_render.$r_pefragtopnode;
	};
	$quake_render.$r_StoreEfrags = function(ppefrag) {
		var pent;
		var clmodel;
		var pefrag;
		while (ss.isValue(pefrag = ppefrag)) {
			pent = pefrag.entity;
			clmodel = pent.model;
			switch (clmodel.type) {
				case 2:
				case 0:
				case 1: {
					pent = pefrag.entity;
					if (pent.visframe !== $quake_render.r_framecount && $quake_client.cl_numvisedicts < $quake_client.maX_VISEDICTS) {
						$quake_client.cl_visedicts[$quake_client.cl_numvisedicts++] = pent;
						// mark that we've recorded this entity for this frame
						pent.visframe = $quake_render.r_framecount;
					}
					ppefrag = pefrag.leafnext;
					break;
				}
				default: {
					$quake_sys_linux.sys_Error('R_StoreEfrags: Bad entity type ' + clmodel.type + '\n');
					break;
				}
			}
		}
	};
	$quake_render.$r_AnimateLight = function() {
		var i, j, k;
		//
		// light animations
		// 'm' is normal light, 'a' is no light, 'z' is double bright
		i = ss.Int32.trunc($quake_client.cl.time * 10);
		for (j = 0; j < $quake_quakedef.maX_LIGHTSTYLES; j++) {
			if ($quake_client.cl_lightstyle[j].length === 0) {
				$quake_render.d_lightstylevalue[j] = 256;
				continue;
			}
			k = i % $quake_client.cl_lightstyle[j].length;
			k = $quake_client.cl_lightstyle[j].map.charCodeAt(k) - 97;
			k = k * 22;
			$quake_render.d_lightstylevalue[j] = k;
		}
	};
	$quake_render.$r_MarkLights = function(light, bit, _node) {
		var splitplane;
		var dist;
		var surf;
		var i;
		if (_node.contents < 0) {
			return;
		}
		var node = Type.cast(_node, $quake_model$mnode_t);
		splitplane = node.plane;
		dist = $quake_mathlib.dotProduct$1(light.origin, splitplane.normal) - splitplane.dist;
		if (dist > light.radius) {
			$quake_render.$r_MarkLights(light, bit, node.children[0]);
			return;
		}
		if (dist < -light.radius) {
			$quake_render.$r_MarkLights(light, bit, node.children[1]);
			return;
		}
		// mark the polygons
		for (i = 0; i < node.numsurfaces; i++) {
			surf = $quake_client.cl.worldmodel.surfaces[node.firstsurface + i];
			if (surf.dlightframe !== $quake_render.$r_dlightframecount) {
				surf.dlightbits = 0;
				surf.dlightframe = $quake_render.$r_dlightframecount;
			}
			surf.dlightbits |= bit;
		}
		$quake_render.$r_MarkLights(light, bit, node.children[0]);
		$quake_render.$r_MarkLights(light, bit, node.children[1]);
	};
	$quake_render.r_PushDlights = function() {
		var i;
		var l;
		$quake_render.$r_dlightframecount = $quake_render.r_framecount + 1;
		// because the count hasn't
		//  advanced yet for this frame
		for (i = 0; i < $quake_client.maX_DLIGHTS; i++) {
			l = $quake_client.cl_dlights[i];
			if (l.die < $quake_client.cl.time || l.radius === 0) {
				continue;
			}
			$quake_render.$r_MarkLights(l, 1 << i, $quake_client.cl.worldmodel.nodes[0]);
		}
	};
	$quake_render.$recursiveLightPoint = function(_node, start, end) {
		var r;
		var front, back, frac;
		var side;
		var plane;
		var mid = new Array(3);
		var surf;
		var s, t, ds, dt;
		var i;
		var tex;
		var lightmap;
		var scale;
		var maps;
		if (_node.contents < 0) {
			return -1;
		}
		// didn't hit anything
		var node = Type.cast(_node, $quake_model$mnode_t);
		// calculate mid point
		// FIXME: optimize for axial
		plane = node.plane;
		front = $quake_mathlib.dotProduct$1(start, plane.normal) - plane.dist;
		back = $quake_mathlib.dotProduct$1(end, plane.normal) - plane.dist;
		side = front < 0;
		if (back < 0 === side) {
			return $quake_render.$recursiveLightPoint(node.children[(side ? 1 : 0)], start, end);
		}
		frac = front / (front - back);
		mid[0] = start[0] + (end[0] - start[0]) * frac;
		mid[1] = start[1] + (end[1] - start[1]) * frac;
		mid[2] = start[2] + (end[2] - start[2]) * frac;
		// go down front side	
		r = $quake_render.$recursiveLightPoint(node.children[(side ? 1 : 0)], start, mid);
		if (r >= 0) {
			return r;
		}
		// hit something
		if (back < 0 === side) {
			return -1;
		}
		// didn't hit anuthing
		// check for impact on this node
		for (i = 0; i < node.numsurfaces; i++) {
			surf = $quake_client.cl.worldmodel.surfaces[node.firstsurface + i];
			if ((surf.flags & $quake_model.surF_DRAWTILED) !== 0) {
				continue;
			}
			// no lightmaps
			tex = surf.texinfo;
			s = ss.Int32.trunc($quake_mathlib.dotProduct$1(mid, tex.vecs[0]) + tex.vecs[0][3]);
			t = ss.Int32.trunc($quake_mathlib.dotProduct$1(mid, tex.vecs[1]) + tex.vecs[1][3]);
			if (s < surf.texturemins[0] || t < surf.texturemins[1]) {
				continue;
			}
			ds = s - surf.texturemins[0];
			dt = t - surf.texturemins[1];
			if (ds > surf.extents[0] || dt > surf.extents[1]) {
				continue;
			}
			if (ss.isNullOrUndefined(surf.samples)) {
				return 0;
			}
			ds >>= 4;
			dt >>= 4;
			lightmap = surf.samples.ofs;
			r = 0;
			if (ss.isValue(surf.samples)) {
				lightmap += dt * ((surf.extents[0] >> 4) + 1) + ds;
				for (maps = 0; maps < $quake_bspfile.MAXLIGHTMAPS && surf.styles[maps] !== 255; maps++) {
					scale = $quake_render.d_lightstylevalue[surf.styles[maps]];
					r += surf.samples.buffer[lightmap] * scale;
					lightmap += ((surf.extents[0] >> 4) + 1) * ((surf.extents[1] >> 4) + 1);
				}
				r >>= 8;
			}
			return r;
		}
		// go down back side
		return $quake_render.$recursiveLightPoint(node.children[(!side ? 1 : 0)], mid, end);
	};
	$quake_render.$r_LightPoint = function(p) {
		var end = new Array(3);
		var r;
		if (ss.isNullOrUndefined($quake_client.cl.worldmodel.lightdata)) {
			return 255;
		}
		end[0] = p[0];
		end[1] = p[1];
		end[2] = p[2] - 2048;
		r = $quake_render.$recursiveLightPoint($quake_client.cl.worldmodel.nodes[0], p, end);
		if (r === -1) {
			r = 0;
		}
		if (r < $quake_render.r_refdef.ambientlight) {
			r = $quake_render.r_refdef.ambientlight;
		}
		return r;
	};
	$quake_render.r_InitTextures = function() {
		var x, y, m;
		var dest;
		// create a simple checkerboard texture for the default
		$quake_render.r_notexture_mip = new $quake_model$texture_t();
		$quake_render.r_notexture_mip.pixels = new Uint8Array(340);
		$quake_render.r_notexture_mip.width = $quake_render.r_notexture_mip.height = 16;
		$quake_render.r_notexture_mip.offsets[0] = 0;
		$quake_render.r_notexture_mip.offsets[1] = $quake_render.r_notexture_mip.offsets[0] + 256;
		$quake_render.r_notexture_mip.offsets[2] = $quake_render.r_notexture_mip.offsets[1] + 64;
		$quake_render.r_notexture_mip.offsets[3] = $quake_render.r_notexture_mip.offsets[2] + 16;
		for (m = 0; m < 4; m++) {
			dest = $quake_render.r_notexture_mip.offsets[m];
			for (y = 0; y < 16 >> m; y++) {
				for (x = 0; x < 16 >> m; x++) {
					if (y < 8 >> m ^ x < 8 >> m) {
						$quake_render.r_notexture_mip.pixels[dest++] = 0;
					}
					else {
						$quake_render.r_notexture_mip.pixels[dest++] = 255;
					}
				}
			}
		}
	};
	$quake_render.r_Init = function() {
		var dummy;
		$quake_render.$r_InitTurb();
		$quake_cmd.cmd_AddCommand('timerefresh', $quake_render.$r_TimeRefresh_f);
		$quake_cmd.cmd_AddCommand('pointfile', $quake_render.$r_ReadPointFile_f);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_draworder);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_speeds);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_timegraph);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_graphheight);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.r_drawflat);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_ambient);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.r_clearcolor);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_waterwarp);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_fullbright);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_drawentities);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_drawviewmodel);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_aliasstats);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_dspeeds);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_reportsurfout);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_maxsurfs);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_numsurfs);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_reportedgeout);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_maxedges);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_numedges);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_aliastransbase);
		$quake_cvar_t.cvar_RegisterVariable($quake_render.$r_aliastransadj);
		$quake_cvar_t.cvar_SetValue('r_maxedges', 2400);
		$quake_cvar_t.cvar_SetValue('r_maxsurfs', 800);
		$quake_render.$view_clipplanes[0].leftedge = true;
		$quake_render.$view_clipplanes[1].rightedge = true;
		$quake_render.$view_clipplanes[1].leftedge = $quake_render.$view_clipplanes[2].leftedge = $quake_render.$view_clipplanes[3].leftedge = false;
		$quake_render.$view_clipplanes[0].rightedge = $quake_render.$view_clipplanes[2].rightedge = $quake_render.$view_clipplanes[3].rightedge = false;
		$quake_render.r_refdef.xOrigin = $quake_render.XCENTERING;
		$quake_render.r_refdef.yOrigin = $quake_render.YCENTERING;
		$quake_render.$r_InitParticles();
		$quake_draw.d_Init();
	};
	$quake_render.r_NewMap = function() {
		var i;
		// clear out efrags in case the level hasn't been reloaded
		// FIXME: is this one short?
		for (i = 0; i < $quake_client.cl.worldmodel.numleafs; i++) {
			$quake_client.cl.worldmodel.leafs[i].efrags = null;
		}
		$quake_render.$r_viewleaf = null;
		$quake_render.$r_ClearParticles();
		$quake_render.$r_cnumsurfs = ss.Int32.trunc($quake_render.$r_maxsurfs.value);
		if ($quake_render.$r_cnumsurfs <= $quake_render.MINSURFACES) {
			$quake_render.$r_cnumsurfs = $quake_render.MINSURFACES;
		}
		if ($quake_render.$r_cnumsurfs <= $quake_render.NUMSTACKSURFACES) {
			$quake_render.surfaces = new Array($quake_render.$r_cnumsurfs);
			for (var kk = 0; kk < $quake_render.$r_cnumsurfs; kk++) {
				$quake_render.surfaces[kk] = new $quake_render$surf_t();
			}
			$quake_render.surface_p = 0;
			$quake_render.surf_max = $quake_render.$r_cnumsurfs;
			$quake_render.$r_surfsonstack = false;
			// surface 0 doesn't really exist; it's just a dummy because index 0
			// is used to indicate no edge attached to surface
		}
		else {
			$quake_render.$r_surfsonstack = true;
		}
		$quake_render.$r_maxedgesseen = 0;
		$quake_render.$r_maxsurfsseen = 0;
		$quake_render.$r_numallocatededges = ss.Int32.trunc($quake_render.$r_maxedges.value);
		if ($quake_render.$r_numallocatededges < $quake_render.MINEDGES) {
			$quake_render.$r_numallocatededges = $quake_render.MINEDGES;
		}
		if ($quake_render.$r_numallocatededges <= $quake_render.NUMSTACKEDGES) {
			$quake_render.$auxedges = new Array($quake_render.$r_numallocatededges);
			for (var kk1 = 0; kk1 < $quake_render.$r_numallocatededges; kk1++) {
				$quake_render.$auxedges[kk1] = new $quake_render$edge_t();
			}
		}
		$quake_render.r_dowarpold = false;
		$quake_render.r_viewchanged = false;
	};
	$quake_render.r_SetVrect = function(pvrectin, pvrect, lineadj) {
		var h;
		var size;
		size = (($quake_screen.scr_viewsize.value > 100) ? 100 : $quake_screen.scr_viewsize.value);
		if ($quake_client.cl.intermission !== 0) {
			size = 100;
			lineadj = 0;
		}
		size /= 100;
		h = pvrectin.height - lineadj;
		pvrect.width = ss.Int32.trunc(pvrectin.width * size);
		if (pvrect.width < 96) {
			size = 96 / pvrectin.width;
			pvrect.width = 96;
			// min for icons
		}
		pvrect.width &= -8;
		pvrect.height = ss.Int32.trunc(pvrectin.height * size);
		if (pvrect.height > pvrectin.height - lineadj) {
			pvrect.height = pvrectin.height - lineadj;
		}
		pvrect.height &= -2;
		pvrect.x = ss.Int32.div(pvrectin.width - pvrect.width, 2);
		pvrect.y = ss.Int32.div(h - pvrect.height, 2);
		{
			if ($quake_view.lcd_x.value !== 0) {
				pvrect.y >>= 1;
				pvrect.height >>= 1;
			}
		}
	};
	$quake_render.r_ViewChanged = function(pvrect, lineadj, aspect) {
		var i;
		var res_scale;
		$quake_render.r_viewchanged = true;
		$quake_render.r_SetVrect(pvrect, $quake_render.r_refdef.vrect, lineadj);
		$quake_render.r_refdef.horizontalFieldOfView = 2 * Math.tan($quake_render.r_refdef.fov_x / 360 * $quake_mathlib.m_PI);
		$quake_render.r_refdef.fvrectx = $quake_render.r_refdef.vrect.x;
		$quake_render.r_refdef.fvrectx_adj = $quake_render.r_refdef.vrect.x - 0.5;
		$quake_render.r_refdef.vrect_x_adj_shift20 = ($quake_render.r_refdef.vrect.x << 20) + 524288 - 1;
		$quake_render.r_refdef.fvrecty = $quake_render.r_refdef.vrect.y;
		$quake_render.r_refdef.fvrecty_adj = $quake_render.r_refdef.vrect.y - 0.5;
		$quake_render.r_refdef.vrectright = $quake_render.r_refdef.vrect.x + $quake_render.r_refdef.vrect.width;
		$quake_render.r_refdef.vrectright_adj_shift20 = ($quake_render.r_refdef.vrectright << 20) + 524288 - 1;
		$quake_render.r_refdef.fvrectright = $quake_render.r_refdef.vrectright;
		$quake_render.r_refdef.fvrectright_adj = $quake_render.r_refdef.vrectright - 0.5;
		$quake_render.r_refdef.vrectrightedge = $quake_render.r_refdef.vrectright - 0.99;
		$quake_render.r_refdef.vrectbottom = $quake_render.r_refdef.vrect.y + $quake_render.r_refdef.vrect.height;
		$quake_render.r_refdef.fvrectbottom = $quake_render.r_refdef.vrectbottom;
		$quake_render.r_refdef.fvrectbottom_adj = $quake_render.r_refdef.vrectbottom - 0.5;
		$quake_render.r_refdef.aliasvrect.x = ss.Int32.trunc($quake_render.r_refdef.vrect.x * $quake_render.r_aliasuvscale);
		$quake_render.r_refdef.aliasvrect.y = ss.Int32.trunc($quake_render.r_refdef.vrect.y * $quake_render.r_aliasuvscale);
		$quake_render.r_refdef.aliasvrect.width = ss.Int32.trunc($quake_render.r_refdef.vrect.width * $quake_render.r_aliasuvscale);
		$quake_render.r_refdef.aliasvrect.height = ss.Int32.trunc($quake_render.r_refdef.vrect.height * $quake_render.r_aliasuvscale);
		$quake_render.r_refdef.aliasvrectright = $quake_render.r_refdef.aliasvrect.x + $quake_render.r_refdef.aliasvrect.width;
		$quake_render.r_refdef.aliasvrectbottom = $quake_render.r_refdef.aliasvrect.y + $quake_render.r_refdef.aliasvrect.height;
		$quake_render.pixelAspect = aspect;
		$quake_render.$xOrigin = $quake_render.r_refdef.xOrigin;
		$quake_render.$yOrigin = $quake_render.r_refdef.yOrigin;
		$quake_render.$screenAspect = $quake_render.r_refdef.vrect.width * $quake_render.pixelAspect / $quake_render.r_refdef.vrect.height;
		// 320*200 1.0 pixelAspect = 1.6 screenAspect
		// 320*240 1.0 pixelAspect = 1.3333 screenAspect
		// proper 320*200 pixelAspect = 0.8333333
		$quake_render.$verticalFieldOfView = $quake_render.r_refdef.horizontalFieldOfView / $quake_render.$screenAspect;
		// values for perspective projection
		// if math were exact, the values would range from 0.5 to to range+0.5
		// hopefully they wll be in the 0.000001 to range+.999999 and truncate
		// the polygon rasterization will never render in the first row or column
		// but will definately render in the [range] row and column, so adjust the
		// buffer origin to get an exact edge to edge fill
		$quake_render.xcenter = $quake_render.r_refdef.vrect.width * $quake_render.XCENTERING + $quake_render.r_refdef.vrect.x - 0.5;
		$quake_render.$aliasxcenter = $quake_render.xcenter * $quake_render.r_aliasuvscale;
		$quake_render.ycenter = $quake_render.r_refdef.vrect.height * $quake_render.YCENTERING + $quake_render.r_refdef.vrect.y - 0.5;
		$quake_render.$aliasycenter = $quake_render.ycenter * $quake_render.r_aliasuvscale;
		$quake_render.xscale = $quake_render.r_refdef.vrect.width / $quake_render.r_refdef.horizontalFieldOfView;
		$quake_render.$aliasxscale = $quake_render.xscale * $quake_render.r_aliasuvscale;
		$quake_render.xscaleinv = 1 / $quake_render.xscale;
		$quake_render.yscale = $quake_render.xscale * $quake_render.pixelAspect;
		$quake_render.$aliasyscale = $quake_render.yscale * $quake_render.r_aliasuvscale;
		$quake_render.yscaleinv = 1 / $quake_render.yscale;
		$quake_render.$xscaleshrink = ($quake_render.r_refdef.vrect.width - 6) / $quake_render.r_refdef.horizontalFieldOfView;
		$quake_render.$yscaleshrink = $quake_render.$xscaleshrink * $quake_render.pixelAspect;
		// left side clip
		$quake_render.$screenedge[0].normal[0] = -1 / ($quake_render.$xOrigin * $quake_render.r_refdef.horizontalFieldOfView);
		$quake_render.$screenedge[0].normal[1] = 0;
		$quake_render.$screenedge[0].normal[2] = 1;
		$quake_render.$screenedge[0].type = 5;
		// right side clip
		$quake_render.$screenedge[1].normal[0] = 1 / ((1 - $quake_render.$xOrigin) * $quake_render.r_refdef.horizontalFieldOfView);
		$quake_render.$screenedge[1].normal[1] = 0;
		$quake_render.$screenedge[1].normal[2] = 1;
		$quake_render.$screenedge[1].type = 5;
		// top side clip
		$quake_render.$screenedge[2].normal[0] = 0;
		$quake_render.$screenedge[2].normal[1] = -1 / ($quake_render.$yOrigin * $quake_render.$verticalFieldOfView);
		$quake_render.$screenedge[2].normal[2] = 1;
		$quake_render.$screenedge[2].type = 5;
		// bottom side clip
		$quake_render.$screenedge[3].normal[0] = 0;
		$quake_render.$screenedge[3].normal[1] = 1 / ((1 - $quake_render.$yOrigin) * $quake_render.$verticalFieldOfView);
		$quake_render.$screenedge[3].normal[2] = 1;
		$quake_render.$screenedge[3].type = 5;
		for (i = 0; i < 4; i++) {
			$quake_mathlib.vectorNormalize($quake_render.$screenedge[i].normal);
		}
		res_scale = Math.sqrt($quake_render.r_refdef.vrect.width * $quake_render.r_refdef.vrect.height / 48640) * (2 / $quake_render.r_refdef.horizontalFieldOfView);
		$quake_render.$r_aliastransition = $quake_render.$r_aliastransbase.value * res_scale;
		$quake_render.$r_resfudge = $quake_render.$r_aliastransadj.value * res_scale;
		if ($quake_screen.scr_fov.value <= 90) {
			$quake_render.$r_fov_greater_than_90 = false;
		}
		else {
			$quake_render.$r_fov_greater_than_90 = true;
		}
		$quake_draw.d_ViewChanged();
	};
	$quake_render.$r_MarkLeaves = function() {
		var vis;
		var node;
		var i;
		if (ss.referenceEquals($quake_render.$r_oldviewleaf, $quake_render.$r_viewleaf)) {
			return;
		}
		$quake_render.$r_visframecount++;
		$quake_render.$r_oldviewleaf = $quake_render.$r_viewleaf;
		vis = $quake_model.mod_LeafPVS($quake_render.$r_viewleaf, $quake_client.cl.worldmodel);
		for (i = 0; i < $quake_client.cl.worldmodel.numleafs; i++) {
			if ((vis[i >> 3] & 1 << (i & 7)) !== 0) {
				node = $quake_client.cl.worldmodel.leafs[i + 1];
				do {
					if (node.visframe === $quake_render.$r_visframecount) {
						break;
					}
					node.visframe = $quake_render.$r_visframecount;
					node = node.parent;
				} while (ss.isValue(node));
			}
		}
	};
	$quake_render.$r_DrawEntitiesOnList = function() {
		var i, j;
		var lnum;
		var lighting = new $quake_render$alight_t();
		// FIXME: remove and do real lighting
		var lightvec = [-1, 0, 0];
		var dist = new Array(3);
		var add;
		if ($quake_render.$r_drawentities.value === 0) {
			return;
		}
		for (i = 0; i < $quake_client.cl_numvisedicts; i++) {
			$quake_render.currententity = $quake_client.cl_visedicts[i];
			if (ss.referenceEquals($quake_render.currententity, $quake_client.cl_entities[$quake_client.cl.viewentity])) {
				continue;
			}
			// don't draw the player
			switch ($quake_render.currententity.model.type) {
				case 1: {
					$quake_mathlib.vectorCopy($quake_render.currententity.origin, $quake_render.$r_entorigin);
					$quake_mathlib.vectorSubtract($quake_render.r_origin, $quake_render.$r_entorigin, $quake_render.modelorg);
					$quake_render.$r_DrawSprite();
					break;
				}
				case 2: {
					$quake_mathlib.vectorCopy($quake_render.currententity.origin, $quake_render.$r_entorigin);
					$quake_mathlib.vectorSubtract($quake_render.r_origin, $quake_render.$r_entorigin, $quake_render.modelorg);
					if ($quake_render.$r_AliasCheckBBox()) {
						j = $quake_render.$r_LightPoint($quake_render.currententity.origin);
						lighting.ambientlight = j;
						lighting.shadelight = j;
						lighting.plightvec = lightvec;
						for (lnum = 0; lnum < $quake_client.maX_DLIGHTS; lnum++) {
							if ($quake_client.cl_dlights[lnum].die >= $quake_client.cl.time) {
								$quake_mathlib.vectorSubtract($quake_render.currententity.origin, $quake_client.cl_dlights[lnum].origin, dist);
								add = $quake_client.cl_dlights[lnum].radius - $quake_mathlib.length$1(dist);
								if (add > 0) {
									lighting.ambientlight += ss.Int32.trunc(add);
								}
							}
						}
						// clamp lighting so it doesn't overbright as much
						if (lighting.ambientlight > 128) {
							lighting.ambientlight = 128;
						}
						if (lighting.ambientlight + lighting.shadelight > 192) {
							lighting.shadelight = 192 - lighting.ambientlight;
						}
						$quake_render.$r_AliasDrawModel(lighting);
					}
					break;
				}
				default: {
					break;
				}
			}
		}
	};
	$quake_render.$r_DrawViewModel = function() {
		// FIXME: remove and do real lighting
		var lightvec = [-1, 0, 0];
		var j;
		var lnum;
		var dist = new Array(3);
		var add;
		var dl;
		if ($quake_render.$r_drawviewmodel.value === 0 || $quake_render.$r_fov_greater_than_90) {
			return;
		}
		if (($quake_client.cl.items & $quake_quakedef.iT_INVISIBILITY) !== 0) {
			return;
		}
		if ($quake_client.cl.stats[$quake_quakedef.staT_HEALTH] <= 0) {
			return;
		}
		$quake_render.currententity = $quake_client.cl.viewent;
		if (ss.isNullOrUndefined($quake_render.currententity.model)) {
			return;
		}
		$quake_mathlib.vectorCopy($quake_render.currententity.origin, $quake_render.$r_entorigin);
		$quake_mathlib.vectorSubtract($quake_render.r_origin, $quake_render.$r_entorigin, $quake_render.modelorg);
		$quake_mathlib.vectorCopy($quake_render.vup, $quake_render.$viewlightvec);
		$quake_mathlib.vectorInverse($quake_render.$viewlightvec);
		j = $quake_render.$r_LightPoint($quake_render.currententity.origin);
		if (j < 24) {
			j = 24;
		}
		// allways give some light on gun
		$quake_render.$r_viewlighting.ambientlight = j;
		$quake_render.$r_viewlighting.shadelight = j;
		// add dynamic lights		
		for (lnum = 0; lnum < $quake_client.maX_DLIGHTS; lnum++) {
			dl = $quake_client.cl_dlights[lnum];
			if (dl.radius === 0) {
				continue;
			}
			if (dl.die < $quake_client.cl.time) {
				continue;
			}
			$quake_mathlib.vectorSubtract($quake_render.currententity.origin, dl.origin, dist);
			add = dl.radius - $quake_mathlib.length$1(dist);
			if (add > 0) {
				$quake_render.$r_viewlighting.ambientlight += ss.Int32.trunc(add);
			}
		}
		// clamp lighting so it doesn't overbright as much
		if ($quake_render.$r_viewlighting.ambientlight > 128) {
			$quake_render.$r_viewlighting.ambientlight = 128;
		}
		if ($quake_render.$r_viewlighting.ambientlight + $quake_render.$r_viewlighting.shadelight > 192) {
			$quake_render.$r_viewlighting.shadelight = 192 - $quake_render.$r_viewlighting.ambientlight;
		}
		$quake_render.$r_viewlighting.plightvec = lightvec;
		$quake_render.$r_AliasDrawModel($quake_render.$r_viewlighting);
	};
	$quake_render.$r_BmodelCheckBBox = function(clmodel, minmaxs) {
		var i, pindex, clipflags;
		var acceptpt = new Array(3), rejectpt = new Array(3);
		var d;
		clipflags = 0;
		if ($quake_render.currententity.angles[0] !== 0 || $quake_render.currententity.angles[1] !== 0 || $quake_render.currententity.angles[2] !== 0) {
			for (i = 0; i < 4; i++) {
				d = $quake_mathlib.dotProduct$1($quake_render.currententity.origin, $quake_render.$view_clipplanes[i].normal);
				d -= $quake_render.$view_clipplanes[i].dist;
				if (d <= -clmodel.radius) {
					return $quake_render.bmodeL_FULLY_CLIPPED;
				}
				if (d <= clmodel.radius) {
					clipflags |= 1 << i;
				}
			}
		}
		else {
			for (i = 0; i < 4; i++) {
				// generate accept and reject points
				// FIXME: do with fast look-ups or integer tests based on the sign bit
				// of the floating point values
				pindex = $quake_render.$pfrustum_indexes[i];
				rejectpt[0] = minmaxs[$quake_render.$r_frustum_indexes[pindex + 0]];
				rejectpt[1] = minmaxs[$quake_render.$r_frustum_indexes[pindex + 1]];
				rejectpt[2] = minmaxs[$quake_render.$r_frustum_indexes[pindex + 2]];
				d = $quake_mathlib.dotProduct$1(rejectpt, $quake_render.$view_clipplanes[i].normal);
				d -= $quake_render.$view_clipplanes[i].dist;
				if (d <= 0) {
					return $quake_render.bmodeL_FULLY_CLIPPED;
				}
				acceptpt[0] = minmaxs[$quake_render.$r_frustum_indexes[pindex + 3 + 0]];
				acceptpt[1] = minmaxs[$quake_render.$r_frustum_indexes[pindex + 3 + 1]];
				acceptpt[2] = minmaxs[$quake_render.$r_frustum_indexes[pindex + 3 + 2]];
				d = $quake_mathlib.dotProduct$1(acceptpt, $quake_render.$view_clipplanes[i].normal);
				d -= $quake_render.$view_clipplanes[i].dist;
				if (d <= 0) {
					clipflags |= 1 << i;
				}
			}
		}
		return clipflags;
	};
	$quake_render.$r_DrawBEntitiesOnList = function() {
		var i, j, k, clipflags;
		var oldorigin = new Array(3);
		var clmodel;
		var minmaxs = new Array(6);
		if ($quake_render.$r_drawentities.value === 0) {
			return;
		}
		$quake_mathlib.vectorCopy($quake_render.modelorg, oldorigin);
		$quake_render.$insubmodel = true;
		$quake_render.$r_dlightframecount = $quake_render.r_framecount;
		for (i = 0; i < $quake_client.cl_numvisedicts; i++) {
			$quake_render.currententity = $quake_client.cl_visedicts[i];
			switch ($quake_render.currententity.model.type) {
				case 0: {
					clmodel = $quake_render.currententity.model;
					for (j = 0; j < 3; j++) {
						minmaxs[j] = $quake_render.currententity.origin[j] + clmodel.mins[j];
						minmaxs[3 + j] = $quake_render.currententity.origin[j] + clmodel.maxs[j];
					}
					clipflags = $quake_render.$r_BmodelCheckBBox(clmodel, minmaxs);
					if (clipflags !== $quake_render.bmodeL_FULLY_CLIPPED) {
						$quake_mathlib.vectorCopy($quake_render.currententity.origin, $quake_render.$r_entorigin);
						$quake_mathlib.vectorSubtract($quake_render.r_origin, $quake_render.$r_entorigin, $quake_render.modelorg);
						// FIXME: is this needed?
						$quake_mathlib.vectorCopy($quake_render.modelorg, $quake_render.$r_worldmodelorg);
						$quake_render.$r_pcurrentvertbase = clmodel.vertexes;
						// FIXME: stop transforming twice
						$quake_render.r_RotateBmodel();
						// calculate dynamic lighting for bmodel if it's not an
						// instanced model
						if (clmodel.firstmodelsurface !== 0) {
							for (k = 0; k < $quake_client.maX_DLIGHTS; k++) {
								if ($quake_client.cl_dlights[k].die < $quake_client.cl.time || $quake_client.cl_dlights[k].radius === 0) {
									continue;
								}
								$quake_render.$r_MarkLights($quake_client.cl_dlights[k], 1 << k, clmodel.nodes[clmodel.hulls[0].firstclipnode]);
							}
						}
						// if the driver wants polygons, deliver those. Z-buffering is on
						// at this point, so no clipping to the world tree is needed, just
						// frustum clipping
						if ($quake_render.r_drawpolys | $quake_render.$r_drawculledpolys) {
							$quake_render.$r_ZDrawSubmodelPolys(clmodel);
						}
						else {
							$quake_render.$r_pefragtopnode = null;
							for (j = 0; j < 3; j++) {
								$quake_render.$r_emins[j] = minmaxs[j];
								$quake_render.$r_emaxs[j] = minmaxs[3 + j];
							}
							$quake_render.$r_SplitEntityOnNode2($quake_client.cl.worldmodel.nodes[0]);
							if (ss.isValue($quake_render.$r_pefragtopnode)) {
								$quake_render.currententity.topnode = $quake_render.$r_pefragtopnode;
								if ($quake_render.$r_pefragtopnode.contents >= 0) {
									// not a leaf; has to be clipped to the world BSP
									$quake_render.$r_clipflags = clipflags;
									$quake_render.$r_DrawSolidClippedSubmodelPolygons(clmodel);
								}
								else {
									// falls entirely in one leaf, so we just put all the
									// edges in the edge list and let 1/z sorting handle
									// drawing order
									$quake_render.$r_DrawSubmodelPolygons(clmodel, clipflags);
								}
								$quake_render.currententity.topnode = null;
							}
						}
						// put back world rotation and frustum clipping		
						// FIXME: R_RotateBmodel should just work off base_vxx
						$quake_mathlib.vectorCopy($quake_render.base_vpn, $quake_render.vpn);
						$quake_mathlib.vectorCopy($quake_render.base_vup, $quake_render.vup);
						$quake_mathlib.vectorCopy($quake_render.base_vright, $quake_render.vright);
						$quake_mathlib.vectorCopy($quake_render.base_modelorg, $quake_render.modelorg);
						$quake_mathlib.vectorCopy(oldorigin, $quake_render.modelorg);
						$quake_render.r_TransformFrustum();
					}
					break;
				}
				default: {
					break;
				}
			}
		}
		$quake_render.$insubmodel = false;
	};
	$quake_render.$r_EdgeDrawing = function() {
		if (ss.isValue($quake_render.$auxedges)) {
			$quake_render.$r_edges = $quake_render.$auxedges;
		}
		else {
		}
		if ($quake_render.$r_surfsonstack) {
		}
		$quake_render.$r_BeginEdgeFrame();
		$quake_render.$r_RenderWorld();
		if ($quake_render.$r_drawculledpolys) {
			$quake_render.$r_ScanEdges();
		}
		$quake_render.$r_DrawBEntitiesOnList();
		if ($quake_render.$r_dspeeds.value === 0) {
			$quake_sound.s_ExtraUpdate();
			// don't let sound get messed up if going slow
		}
		if (!($quake_render.r_drawpolys | $quake_render.$r_drawculledpolys)) {
			$quake_render.$r_ScanEdges();
		}
	};
	$quake_render.$r_RenderView_ = function() {
		var warpbuffer = new Uint8Array(64000);
		$quake_render.r_warpbuffer = warpbuffer;
		if ($quake_render.$r_timegraph.value !== 0 || $quake_render.$r_speeds.value !== 0 || $quake_render.$r_dspeeds.value !== 0) {
			$quake_render.$r_time1 = $quake_sys_linux.sys_FloatTime();
		}
		$quake_render.$r_SetupFrame();
		$quake_render.$r_MarkLeaves();
		// done here so we know if we're in water
		if (ss.isNullOrUndefined($quake_client.cl_entities[0].model) || ss.isNullOrUndefined($quake_client.cl.worldmodel)) {
			$quake_sys_linux.sys_Error('R_RenderView: NULL worldmodel');
		}
		if ($quake_render.$r_dspeeds.value === 0) {
			$quake_sound.s_ExtraUpdate();
			// don't let sound get messed up if going slow
		}
		$quake_render.$r_EdgeDrawing();
		//draw map 
		if ($quake_render.$r_dspeeds.value === 0) {
			$quake_sound.s_ExtraUpdate();
			// don't let sound get messed up if going slow
		}
		$quake_render.$r_DrawEntitiesOnList();
		//draw zombies etc -  models
		$quake_render.$r_DrawViewModel();
		//draw gun
		$quake_render.$r_DrawParticles();
		if ($quake_render.r_dowarp) {
			$quake_draw.d_WarpScreen();
		}
		$quake_view.v_SetContentsColor($quake_render.$r_viewleaf.contents);
		if ($quake_render.$r_timegraph.value !== 0) {
			$quake_render.$r_TimeGraph();
		}
	};
	$quake_render.r_RenderView = function() {
		$quake_render.$r_RenderView_();
	};
	$quake_render.$r_InitTurb = function() {
		var i;
		for (i = 0; i < $quake_render.siN_BUFFER_SIZE; i++) {
			$quake_render.sintable[i] = ss.Int32.trunc(524288 + Math.sin(i * 3.14159 * 2 / 128) * 524288);
			$quake_render.intsintable[i] = ss.Int32.trunc(3 + Math.sin(i * 3.14159 * 2 / 128) * 3);
			// AMP2, not 20
		}
	};
	$quake_render.$r_CheckVariables = function() {
		if ($quake_render.$r_fullbright.value !== $quake_render.$oldbright) {
			$quake_render.$oldbright = $quake_render.$r_fullbright.value;
			//draw.D_FlushCaches ();	// so all lighting changes
		}
	};
	$quake_render.$r_TimeRefresh_f = function() {
		var i;
		var start, stop, time;
		var startangle;
		var vr = new $quake_vid$vrect_t();
		startangle = ss.Int32.trunc($quake_render.r_refdef.viewangles[1]);
		start = $quake_sys_linux.sys_FloatTime();
		for (i = 0; i < 128; i++) {
			$quake_render.r_refdef.viewangles[1] = i / 128 * 360;
			$quake_render.r_RenderView();
			vr.x = $quake_render.r_refdef.vrect.x;
			vr.y = $quake_render.r_refdef.vrect.y;
			vr.width = $quake_render.r_refdef.vrect.width;
			vr.height = $quake_render.r_refdef.vrect.height;
			vr.pnext = null;
			$quake_vid.viD_Update(vr);
		}
		stop = $quake_sys_linux.sys_FloatTime();
		time = stop - start;
		$quake_console.con_Printf(time + ' seconds (' + 128 / time + ' fps)\n');
		$quake_render.r_refdef.viewangles[1] = startangle;
	};
	$quake_render.$r_LineGraph = function(x, y, h) {
		var i;
		var dest;
		var s;
		// FIXME: should be disabled on no-buffer adapters, or should be in the driver
		x += $quake_render.r_refdef.vrect.x;
		y += $quake_render.r_refdef.vrect.y;
		dest = $quake_screen.vid.rowbytes * y + x;
		s = ss.Int32.trunc($quake_render.$r_graphheight.value);
		if (h > s) {
			h = s;
		}
		for (i = 0; i < h; i++, dest -= $quake_screen.vid.rowbytes * 2) {
			$quake_screen.vid.buffer[dest] = 255;
			$quake_screen.vid.buffer[dest - $quake_screen.vid.rowbytes] = 48;
		}
		for (; i < s; i++, dest -= $quake_screen.vid.rowbytes * 2) {
			$quake_screen.vid.buffer[dest] = 48;
			$quake_screen.vid.buffer[dest - $quake_screen.vid.rowbytes] = 48;
		}
	};
	$quake_render.$r_TimeGraph = function() {
		var a;
		var r_time2;
		var x;
		r_time2 = $quake_sys_linux.sys_FloatTime();
		a = ss.Int32.trunc((r_time2 - $quake_render.$r_time1) / 0.01);
		//a = fabs(mouse_y * 0.05);
		//a = (int)((r_refdef.vieworg[2] + 1024)/1)%(int)r_graphheight.value;
		//a = fabs(velocity[0])/20;
		//a = ((int)fabs(origin[0])/8)%20;
		//a = (cl.idealpitch + 30)/5;
		$quake_render.$r_timings[$quake_render.$timex] = a;
		a = $quake_render.$timex;
		if ($quake_render.r_refdef.vrect.width <= $quake_render.maX_TIMINGS) {
			x = $quake_render.r_refdef.vrect.width - 1;
		}
		else {
			x = $quake_render.r_refdef.vrect.width - ss.Int32.div($quake_render.r_refdef.vrect.width - $quake_render.maX_TIMINGS, 2);
		}
		do {
			$quake_render.$r_LineGraph(x, $quake_render.r_refdef.vrect.height - 2, $quake_render.$r_timings[a]);
			if (x === 0) {
				break;
			}
			// screen too small to hold entire thing
			x--;
			a--;
			if (a === -1) {
				a = 99;
			}
		} while (a !== $quake_render.$timex);
		$quake_render.$timex = ($quake_render.$timex + 1) % $quake_render.maX_TIMINGS;
	};
	$quake_render.r_TransformFrustum = function() {
		var i;
		var v = new Array(3), v2 = new Array(3);
		for (i = 0; i < 4; i++) {
			v[0] = $quake_render.$screenedge[i].normal[2];
			v[1] = -$quake_render.$screenedge[i].normal[0];
			v[2] = $quake_render.$screenedge[i].normal[1];
			v2[0] = v[1] * $quake_render.vright[0] + v[2] * $quake_render.vup[0] + v[0] * $quake_render.vpn[0];
			v2[1] = v[1] * $quake_render.vright[1] + v[2] * $quake_render.vup[1] + v[0] * $quake_render.vpn[1];
			v2[2] = v[1] * $quake_render.vright[2] + v[2] * $quake_render.vup[2] + v[0] * $quake_render.vpn[2];
			$quake_mathlib.vectorCopy(v2, $quake_render.$view_clipplanes[i].normal);
			$quake_render.$view_clipplanes[i].dist = $quake_mathlib.dotProduct$1($quake_render.modelorg, v2);
		}
	};
	$quake_render.transformVector = function(in1, out) {
		out[0] = $quake_mathlib.dotProduct$1(in1, $quake_render.vright);
		out[1] = $quake_mathlib.dotProduct$1(in1, $quake_render.vup);
		out[2] = $quake_mathlib.dotProduct$1(in1, $quake_render.vpn);
	};
	$quake_render.$r_SetUpFrustumIndexes = function() {
		var i, j, pindex;
		pindex = 0;
		for (i = 0; i < 4; i++) {
			for (j = 0; j < 3; j++) {
				if ($quake_render.$view_clipplanes[i].normal[j] < 0) {
					$quake_render.$r_frustum_indexes[pindex + j] = j;
					$quake_render.$r_frustum_indexes[pindex + j + 3] = j + 3;
				}
				else {
					$quake_render.$r_frustum_indexes[pindex + j] = j + 3;
					$quake_render.$r_frustum_indexes[pindex + j + 3] = j;
				}
			}
			// FIXME: do just once at start
			$quake_render.$pfrustum_indexes[i] = pindex;
			pindex += 6;
		}
	};
	$quake_render.$r_SetupFrame = function() {
		var edgecount;
		var vrect = new $quake_vid$vrect_t();
		var w, h;
		// don't allow cheats in multiplayer
		if ($quake_client.cl.maxclients > 1) {
			$quake_cvar_t.cvar_Set('r_draworder', '0');
			$quake_cvar_t.cvar_Set('r_fullbright', '0');
			$quake_cvar_t.cvar_Set('r_ambient', '0');
			$quake_cvar_t.cvar_Set('r_drawflat', '0');
		}
		if ($quake_render.$r_numsurfs.value !== 0) {
		}
		if ($quake_render.$r_numedges.value !== 0) {
		}
		$quake_render.r_refdef.ambientlight = ss.Int32.trunc($quake_render.$r_ambient.value);
		if ($quake_render.r_refdef.ambientlight < 0) {
			$quake_render.r_refdef.ambientlight = 0;
		}
		if (!$quake_server.sv.active) {
			$quake_render.$r_draworder.value = 0;
		}
		// don't let cheaters look behind walls
		$quake_render.$r_CheckVariables();
		$quake_render.$r_AnimateLight();
		$quake_render.r_framecount++;
		$quake_render.$numbtofpolys = 0;
		// build the transformation matrix for the given view angles
		$quake_mathlib.vectorCopy($quake_render.r_refdef.vieworg, $quake_render.modelorg);
		$quake_mathlib.vectorCopy($quake_render.r_refdef.vieworg, $quake_render.r_origin);
		$quake_mathlib.angleVectors($quake_render.r_refdef.viewangles, $quake_render.vpn, $quake_render.vright, $quake_render.vup);
		// current viewleaf
		$quake_render.$r_oldviewleaf = $quake_render.$r_viewleaf;
		$quake_render.$r_viewleaf = $quake_model.mod_PointInLeaf($quake_render.r_origin, $quake_client.cl.worldmodel);
		$quake_render.r_dowarpold = $quake_render.r_dowarp;
		$quake_render.r_dowarp = $quake_render.$r_waterwarp.value !== 0 && $quake_render.$r_viewleaf.contents <= $quake_bspfile.contentS_WATER;
		if ($quake_render.r_dowarp !== $quake_render.r_dowarpold || $quake_render.r_viewchanged || $quake_view.lcd_x.value !== 0) {
			if ($quake_render.r_dowarp) {
				if ($quake_screen.vid.width <= $quake_screen.vid.maxwarpwidth && $quake_screen.vid.height <= $quake_screen.vid.maxwarpheight) {
					vrect.x = 0;
					vrect.y = 0;
					vrect.width = $quake_screen.vid.width;
					vrect.height = $quake_screen.vid.height;
					$quake_render.r_ViewChanged(vrect, $quake_sbar.sb_lines, $quake_screen.vid.aspect);
				}
				else {
					w = $quake_screen.vid.width;
					h = $quake_screen.vid.height;
					if (w > $quake_screen.vid.maxwarpwidth) {
						h *= $quake_screen.vid.maxwarpwidth / w;
						w = $quake_screen.vid.maxwarpwidth;
					}
					if (h > $quake_screen.vid.maxwarpheight) {
						h = $quake_screen.vid.maxwarpheight;
						w *= $quake_screen.vid.maxwarpheight / h;
					}
					vrect.x = 0;
					vrect.y = 0;
					vrect.width = ss.Int32.trunc(w);
					vrect.height = ss.Int32.trunc(h);
					$quake_render.r_ViewChanged(vrect, ss.Int32.trunc($quake_sbar.sb_lines * (h / $quake_screen.vid.height)), $quake_screen.vid.aspect * (h / w) * ($quake_screen.vid.width / $quake_screen.vid.height));
				}
			}
			else {
				vrect.x = 0;
				vrect.y = 0;
				vrect.width = $quake_screen.vid.width;
				vrect.height = $quake_screen.vid.height;
				$quake_render.r_ViewChanged(vrect, $quake_sbar.sb_lines, $quake_screen.vid.aspect);
			}
			$quake_render.r_viewchanged = false;
		}
		// start off with just the four screen edge clip planes
		$quake_render.r_TransformFrustum();
		// save base values
		$quake_mathlib.vectorCopy($quake_render.vpn, $quake_render.base_vpn);
		$quake_mathlib.vectorCopy($quake_render.vright, $quake_render.base_vright);
		$quake_mathlib.vectorCopy($quake_render.vup, $quake_render.base_vup);
		$quake_mathlib.vectorCopy($quake_render.modelorg, $quake_render.base_modelorg);
		$quake_render.$r_SetSkyFrame();
		$quake_render.$r_SetUpFrustumIndexes();
		//r_cache_thrash = false;
		// clear frame counts
		$quake_render.$c_faceclip = 0;
		$quake_render.$d_spanpixcount = 0;
		$quake_render.$r_polycount = 0;
		$quake_render.r_drawnpolycount = 0;
		$quake_render.$r_wholepolycount = 0;
		//r_amodels_drawn = 0;
		$quake_render.$r_outofsurfaces = 0;
		$quake_render.$r_outofedges = 0;
		$quake_draw.d_SetupFrame();
	};
	$quake_render.$r_InitParticles = function() {
		var i;
		i = $quake_common.coM_CheckParm('-particles');
		if (i !== 0) {
			//r_numparticles = (int)(common.Q_atoi(com_argv[i + 1]));
			//if (r_numparticles < ABSOLUTE_MIN_PARTICLES)
			//r_numparticles = ABSOLUTE_MIN_PARTICLES;
		}
		else {
			$quake_render.$r_numparticles = $quake_render.$maX_PARTICLES;
		}
		$quake_render.$particles = new Array($quake_render.$r_numparticles);
		for (var kk = 0; kk < $quake_render.$r_numparticles; kk++) {
			$quake_render.$particles[kk] = new $quake_draw$particle_t();
		}
	};
	$quake_render.r_EntityParticles = function(ent) {
		var count;
		var i;
		var p;
		var angle;
		var sr, sp, sy, cr, cp, cy;
		var forward = new Array(3);
		var dist;
		dist = 64;
		count = 50;
		if ($quake_render.$avelocities.get(0, 0) === 0) {
			for (i = 0; i < 486; i++) {
				$quake_render.$avelocities.set(0, i, ($Helper_helper.rand() & 255) * 0.01);
			}
		}
		for (i = 0; i < $quake_render.NUMVERTEXNORMALS; i++) {
			angle = $quake_client.cl.time * $quake_render.$avelocities.get(i, 0);
			sy = Math.sin(angle);
			cy = Math.cos(angle);
			angle = $quake_client.cl.time * $quake_render.$avelocities.get(i, 1);
			sp = Math.sin(angle);
			cp = Math.cos(angle);
			angle = $quake_client.cl.time * $quake_render.$avelocities.get(i, 2);
			sr = Math.sin(angle);
			cr = Math.cos(angle);
			forward[0] = cp * cy;
			forward[1] = cp * sy;
			forward[2] = -sp;
			if (ss.isNullOrUndefined($quake_render.$free_particles)) {
				return;
			}
			p = $quake_render.$free_particles;
			$quake_render.$free_particles = p.next;
			p.next = $quake_render.$active_particles;
			$quake_render.$active_particles = p;
			p.die = $quake_client.cl.time + 0.01;
			p.color = 111;
			p.type = 4;
			p.org[0] = ent.origin[0] + $quake_render.$r_avertexnormals[i][0] * dist + forward[0] * $quake_render.$beamlength;
			p.org[1] = ent.origin[1] + $quake_render.$r_avertexnormals[i][1] * dist + forward[1] * $quake_render.$beamlength;
			p.org[2] = ent.origin[2] + $quake_render.$r_avertexnormals[i][2] * dist + forward[2] * $quake_render.$beamlength;
		}
	};
	$quake_render.$r_ClearParticles = function() {
		var i;
		$quake_render.$free_particles = $quake_render.$particles[0];
		$quake_render.$active_particles = null;
		for (i = 0; i < $quake_render.$r_numparticles - 1; i++) {
			$quake_render.$particles[i].next = $quake_render.$particles[i + 1];
		}
		$quake_render.$particles[$quake_render.$r_numparticles - 1].next = null;
	};
	$quake_render.$r_ReadPointFile_f = function() {
	};
	$quake_render.r_ParseParticleEffect = function() {
		var org = new Array(3), dir = new Array(3);
		var i, count, msgcount, color;
		for (i = 0; i < 3; i++) {
			org[i] = $quake_common.msG_ReadCoord();
		}
		for (i = 0; i < 3; i++) {
			dir[i] = $quake_common.msG_ReadChar() * 0.0625;
		}
		msgcount = $quake_common.msG_ReadByte();
		color = $quake_common.msG_ReadByte();
		if (msgcount === 255) {
			count = 1024;
		}
		else {
			count = msgcount;
		}
		$quake_render.r_RunParticleEffect(org, dir, color, count);
	};
	$quake_render.r_ParticleExplosion = function(org) {
		var i, j;
		var p;
		for (i = 0; i < 1024; i++) {
			if (ss.isNullOrUndefined($quake_render.$free_particles)) {
				return;
			}
			p = $quake_render.$free_particles;
			$quake_render.$free_particles = p.next;
			p.next = $quake_render.$active_particles;
			$quake_render.$active_particles = p;
			p.die = $quake_client.cl.time + 5;
			p.color = $quake_render.$ramp1[0];
			p.ramp = $Helper_helper.rand() & 3;
			if ((i & 1) !== 0) {
				p.type = 4;
				for (j = 0; j < 3; j++) {
					p.org[j] = org[j] + ($Helper_helper.rand() % 32 - 16);
					p.vel[j] = $Helper_helper.rand() % 512 - 256;
				}
			}
			else {
				p.type = 5;
				for (j = 0; j < 3; j++) {
					p.org[j] = org[j] + ($Helper_helper.rand() % 32 - 16);
					p.vel[j] = $Helper_helper.rand() % 512 - 256;
				}
			}
		}
	};
	$quake_render.r_ParticleExplosion2 = function(org, colorStart, colorLength) {
		var i, j;
		var p;
		var colorMod = 0;
		for (i = 0; i < 512; i++) {
			if (ss.isNullOrUndefined($quake_render.$free_particles)) {
				return;
			}
			p = $quake_render.$free_particles;
			$quake_render.$free_particles = p.next;
			p.next = $quake_render.$active_particles;
			$quake_render.$active_particles = p;
			p.die = $quake_client.cl.time + 0.3;
			p.color = colorStart + colorMod % colorLength;
			colorMod++;
			p.type = 6;
			for (j = 0; j < 3; j++) {
				p.org[j] = org[j] + ($Helper_helper.rand() % 32 - 16);
				p.vel[j] = $Helper_helper.rand() % 512 - 256;
			}
		}
	};
	$quake_render.r_BlobExplosion = function(org) {
		var i, j;
		var p;
		for (i = 0; i < 1024; i++) {
			if (ss.isNullOrUndefined($quake_render.$free_particles)) {
				return;
			}
			p = $quake_render.$free_particles;
			$quake_render.$free_particles = p.next;
			p.next = $quake_render.$active_particles;
			$quake_render.$active_particles = p;
			p.die = $quake_client.cl.time + 1 + ($Helper_helper.rand() & 8) * 0.05;
			if ((i & 1) !== 0) {
				p.type = 6;
				p.color = 66 + $Helper_helper.rand() % 6;
				for (j = 0; j < 3; j++) {
					p.org[j] = org[j] + ($Helper_helper.rand() % 32 - 16);
					p.vel[j] = $Helper_helper.rand() % 512 - 256;
				}
			}
			else {
				p.type = 7;
				p.color = 150 + $Helper_helper.rand() % 6;
				for (j = 0; j < 3; j++) {
					p.org[j] = org[j] + ($Helper_helper.rand() % 32 - 16);
					p.vel[j] = $Helper_helper.rand() % 512 - 256;
				}
			}
		}
	};
	$quake_render.r_RunParticleEffect = function(org, dir, color, count) {
		var i, j;
		var p;
		for (i = 0; i < count; i++) {
			if (ss.isNullOrUndefined($quake_render.$free_particles)) {
				return;
			}
			p = $quake_render.$free_particles;
			$quake_render.$free_particles = p.next;
			p.next = $quake_render.$active_particles;
			$quake_render.$active_particles = p;
			if (count === 1024) {
				// rocket explosion
				p.die = $quake_client.cl.time + 5;
				p.color = $quake_render.$ramp1[0];
				p.ramp = $Helper_helper.rand() & 3;
				if ((i & 1) !== 0) {
					p.type = 4;
					for (j = 0; j < 3; j++) {
						p.org[j] = org[j] + ($Helper_helper.rand() % 32 - 16);
						p.vel[j] = $Helper_helper.rand() % 512 - 256;
					}
				}
				else {
					p.type = 5;
					for (j = 0; j < 3; j++) {
						p.org[j] = org[j] + ($Helper_helper.rand() % 32 - 16);
						p.vel[j] = $Helper_helper.rand() % 512 - 256;
					}
				}
			}
			else {
				p.die = $quake_client.cl.time + 0.1 * ($Helper_helper.rand() % 5);
				p.color = (color & -8) + ($Helper_helper.rand() & 7);
				p.type = 2;
				for (j = 0; j < 3; j++) {
					p.org[j] = org[j] + (($Helper_helper.rand() & 15) - 8);
					p.vel[j] = dir[j] * 15;
					// + (rand()%300)-150;
				}
			}
		}
	};
	$quake_render.r_LavaSplash = function(org) {
		var i, j, k;
		var p;
		var vel;
		var dir = new Array(3);
		for (i = -16; i < 16; i++) {
			for (j = -16; j < 16; j++) {
				for (k = 0; k < 1; k++) {
					if (ss.isNullOrUndefined($quake_render.$free_particles)) {
						return;
					}
					p = $quake_render.$free_particles;
					$quake_render.$free_particles = p.next;
					p.next = $quake_render.$active_particles;
					$quake_render.$active_particles = p;
					p.die = $quake_client.cl.time + 2 + ($Helper_helper.rand() & 31) * 0.02;
					p.color = 224 + ($Helper_helper.rand() & 7);
					p.type = 2;
					dir[0] = j * 8 + ($Helper_helper.rand() & 7);
					dir[1] = i * 8 + ($Helper_helper.rand() & 7);
					dir[2] = 256;
					p.org[0] = org[0] + dir[0];
					p.org[1] = org[1] + dir[1];
					p.org[2] = org[2] + ($Helper_helper.rand() & 63);
					$quake_mathlib.vectorNormalize(dir);
					vel = 50 + ($Helper_helper.rand() & 63);
					$quake_mathlib.vectorScale(dir, vel, p.vel);
				}
			}
		}
	};
	$quake_render.r_TeleportSplash = function(org) {
		var i, j, k;
		var p;
		var vel;
		var dir = new Array(3);
		for (i = -16; i < 16; i += 4) {
			for (j = -16; j < 16; j += 4) {
				for (k = -24; k < 32; k += 4) {
					if (ss.isNullOrUndefined($quake_render.$free_particles)) {
						return;
					}
					p = $quake_render.$free_particles;
					$quake_render.$free_particles = p.next;
					p.next = $quake_render.$active_particles;
					$quake_render.$active_particles = p;
					p.die = $quake_client.cl.time + 0.2 + ($Helper_helper.rand() & 7) * 0.02;
					p.color = 7 + ($Helper_helper.rand() & 7);
					p.type = 2;
					dir[0] = j * 8;
					dir[1] = i * 8;
					dir[2] = k * 8;
					p.org[0] = org[0] + i + ($Helper_helper.rand() & 3);
					p.org[1] = org[1] + j + ($Helper_helper.rand() & 3);
					p.org[2] = org[2] + k + ($Helper_helper.rand() & 3);
					$quake_mathlib.vectorNormalize(dir);
					vel = 50 + ($Helper_helper.rand() & 63);
					$quake_mathlib.vectorScale(dir, vel, p.vel);
				}
			}
		}
	};
	$quake_render.r_RocketTrail = function(start, end, type) {
		var vec = new Array(3);
		var len;
		var j;
		var p;
		var dec;
		$quake_mathlib.vectorSubtract(end, start, vec);
		len = $quake_mathlib.vectorNormalize(vec);
		if (type < 128) {
			dec = 3;
		}
		else {
			dec = 1;
			type -= 128;
		}
		while (len > 0) {
			len -= dec;
			if (ss.isNullOrUndefined($quake_render.$free_particles)) {
				return;
			}
			p = $quake_render.$free_particles;
			$quake_render.$free_particles = p.next;
			p.next = $quake_render.$active_particles;
			$quake_render.$active_particles = p;
			$quake_mathlib.vectorCopy($quake_mathlib.vec3_origin, p.vel);
			p.die = $quake_client.cl.time + 2;
			switch (type) {
				case 0: {
					p.ramp = $Helper_helper.rand() & 3;
					p.color = $quake_render.$ramp3[ss.Int32.trunc(p.ramp)];
					p.type = 3;
					for (j = 0; j < 3; j++) {
						p.org[j] = start[j] + ($Helper_helper.rand() % 6 - 3);
					}
					break;
				}
				case 1: {
					p.ramp = ($Helper_helper.rand() & 3) + 2;
					p.color = $quake_render.$ramp3[ss.Int32.trunc(p.ramp)];
					p.type = 3;
					for (j = 0; j < 3; j++) {
						p.org[j] = start[j] + ($Helper_helper.rand() % 6 - 3);
					}
					break;
				}
				case 2: {
					p.type = 1;
					p.color = 67 + ($Helper_helper.rand() & 3);
					for (j = 0; j < 3; j++) {
						p.org[j] = start[j] + ($Helper_helper.rand() % 6 - 3);
					}
					break;
				}
				case 3:
				case 5: {
					p.die = $quake_client.cl.time + 0.5;
					p.type = 0;
					if (type === 3) {
						p.color = 52 + (($quake_render.$tracercount & 4) << 1);
					}
					else {
						p.color = 230 + (($quake_render.$tracercount & 4) << 1);
					}
					$quake_render.$tracercount++;
					$quake_mathlib.vectorCopy(start, p.org);
					if (($quake_render.$tracercount & 1) !== 0) {
						p.vel[0] = 30 * vec[1];
						p.vel[1] = 30 * -vec[0];
					}
					else {
						p.vel[0] = 30 * -vec[1];
						p.vel[1] = 30 * vec[0];
					}
					break;
				}
				case 4: {
					p.type = 1;
					p.color = 67 + ($Helper_helper.rand() & 3);
					for (j = 0; j < 3; j++) {
						p.org[j] = start[j] + ($Helper_helper.rand() % 6 - 3);
					}
					len -= 3;
					break;
				}
				case 6: {
					p.color = 152 + ($Helper_helper.rand() & 3);
					p.type = 0;
					p.die = $quake_client.cl.time + 0.3;
					for (j = 0; j < 3; j++) {
						p.org[j] = start[j] + (($Helper_helper.rand() & 15) - 8);
					}
					break;
				}
			}
			$quake_mathlib.vectorAdd(start, vec, start);
		}
	};
	$quake_render.$r_DrawParticles = function() {
		var p, kill;
		var grav;
		var i;
		var time2, time3;
		var time1;
		var dvel;
		var frametime;
		$quake_mathlib.vectorScale($quake_render.vright, $quake_render.$xscaleshrink, $quake_render.r_pright);
		$quake_mathlib.vectorScale($quake_render.vup, $quake_render.$yscaleshrink, $quake_render.r_pup);
		$quake_mathlib.vectorCopy($quake_render.vpn, $quake_render.r_ppn);
		frametime = $quake_client.cl.time - $quake_client.cl.oldtime;
		time3 = frametime * 15;
		time2 = frametime * 10;
		// 15;
		time1 = frametime * 5;
		grav = frametime * $quake_server.sv_gravity.value * 0.05;
		dvel = 4 * frametime;
		for (;;) {
			kill = $quake_render.$active_particles;
			if (ss.isValue(kill) && kill.die < $quake_client.cl.time) {
				$quake_render.$active_particles = kill.next;
				kill.next = $quake_render.$free_particles;
				$quake_render.$free_particles = kill;
				continue;
			}
			break;
		}
		for (p = $quake_render.$active_particles; ss.isValue(p); p = p.next) {
			for (;;) {
				kill = p.next;
				if (ss.isValue(kill) && kill.die < $quake_client.cl.time) {
					p.next = kill.next;
					kill.next = $quake_render.$free_particles;
					$quake_render.$free_particles = kill;
					continue;
				}
				break;
			}
			$quake_draw.d_DrawParticle(p);
			p.org[0] += p.vel[0] * frametime;
			p.org[1] += p.vel[1] * frametime;
			p.org[2] += p.vel[2] * frametime;
			switch (p.type) {
				case 0: {
					break;
				}
				case 3: {
					p.ramp += time1;
					if (p.ramp >= 6) {
						p.die = -1;
					}
					else {
						p.color = $quake_render.$ramp3[ss.Int32.trunc(p.ramp)];
					}
					p.vel[2] += grav;
					break;
				}
				case 4: {
					p.ramp += time2;
					if (p.ramp >= 8) {
						p.die = -1;
					}
					else {
						p.color = $quake_render.$ramp1[ss.Int32.trunc(p.ramp)];
					}
					for (i = 0; i < 3; i++) {
						p.vel[i] += p.vel[i] * dvel;
					}
					p.vel[2] -= grav;
					break;
				}
				case 5: {
					p.ramp += time3;
					if (p.ramp >= 8) {
						p.die = -1;
					}
					else {
						p.color = $quake_render.$ramp2[ss.Int32.trunc(p.ramp)];
					}
					for (i = 0; i < 3; i++) {
						p.vel[i] -= p.vel[i] * frametime;
					}
					p.vel[2] -= grav;
					break;
				}
				case 6: {
					for (i = 0; i < 3; i++) {
						p.vel[i] += p.vel[i] * dvel;
					}
					p.vel[2] -= grav;
					break;
				}
				case 7: {
					for (i = 0; i < 2; i++) {
						p.vel[i] -= p.vel[i] * dvel;
					}
					p.vel[2] -= grav;
					break;
				}
				case 1:
				case 2: {
					p.vel[2] -= grav;
					break;
				}
			}
		}
	};
	$quake_render.r_InitSky = function(mt) {
		var i, j;
		var src;
		src = mt.offsets[0];
		for (i = 0; i < 128; i++) {
			for (j = 0; j < 128; j++) {
				$quake_render.$newsky[i * 256 + j + 128] = mt.pixels[src + i * 256 + j + 128];
			}
		}
		for (i = 0; i < 128; i++) {
			for (j = 0; j < 131; j++) {
				if (mt.pixels[src + i * 256 + (j & 127)] !== 0) {
					$quake_render.$bottomsky[i * 131 + j] = mt.pixels[src + i * 256 + (j & 127)];
					$quake_render.$bottommask[i * 131 + j] = 0;
				}
				else {
					$quake_render.$bottomsky[i * 131 + j] = 0;
					$quake_render.$bottommask[i * 131 + j] = 255;
				}
			}
		}
		$quake_render.r_skysource = $quake_render.$newsky;
	};
	$quake_render.r_MakeSky = function() {
		var x, y;
		var ofs, baseofs;
		var xshift, yshift;
		var pnewsky;
		xshift = ss.Int32.trunc($quake_render.skytime * $quake_render.skyspeed);
		yshift = ss.Int32.trunc($quake_render.skytime * $quake_render.skyspeed);
		if (xshift === $quake_render.$xlast && yshift === $quake_render.$ylast) {
			return;
		}
		$quake_render.$xlast = xshift;
		$quake_render.$ylast = yshift;
		pnewsky = 0;
		for (y = 0; y < $quake_draw.SKYSIZE; y++) {
			baseofs = (y + yshift & $quake_draw.SKYMASK) * 131;
			for (x = 0; x < $quake_draw.SKYSIZE; x++) {
				ofs = baseofs + (x + xshift & $quake_draw.SKYMASK);
				$quake_render.$newsky[pnewsky] = $quake_render.$newsky[pnewsky + 128] & $quake_render.$bottommask[ofs] | $quake_render.$bottomsky[ofs];
				pnewsky++;
			}
			pnewsky += 128;
		}
		$quake_render.r_skymade = 1;
	};
	$quake_render.$r_SetSkyFrame = function() {
		var g, s1, s2;
		var temp;
		$quake_render.skyspeed = $quake_render.$iskyspeed;
		$quake_render.skyspeed2 = $quake_render.$iskyspeed2;
		g = $quake_mathlib.greatestCommonDivisor($quake_render.$iskyspeed, $quake_render.$iskyspeed2);
		s1 = ss.Int32.div($quake_render.$iskyspeed, g);
		s2 = ss.Int32.div($quake_render.$iskyspeed2, g);
		temp = $quake_draw.SKYSIZE * s1 * s2;
		$quake_render.skytime = $quake_client.cl.time - ss.Int32.trunc($quake_client.cl.time / temp) * temp;
		$quake_render.r_skymade = 0;
	};
	$quake_render.$r_RotateSprite = function(beamlength) {
		var vec = new Array(3);
		if (beamlength === 0) {
			return;
		}
		$quake_mathlib.vectorScale($quake_render.r_spritedesc.vpn, -beamlength, vec);
		$quake_mathlib.vectorAdd($quake_render.$r_entorigin, vec, $quake_render.$r_entorigin);
		$quake_mathlib.vectorSubtract($quake_render.modelorg, vec, $quake_render.modelorg);
	};
	$quake_render.$r_ClipSpriteFace = function(nump, pclipplane) {
		var i, outcount;
		var dists = new Array(21);
		var frac, clipdist;
		var pclipnormal;
		var in1;
		var out;
		var instep, vert2;
		var outstep;
		clipdist = pclipplane.dist;
		pclipnormal = pclipplane.normal;
		// calc dists
		if ($quake_render.$clip_current !== 0) {
			in1 = $quake_render.$clip_verts[1];
			out = $quake_render.$clip_verts[0];
			$quake_render.$clip_current = 0;
		}
		else {
			in1 = $quake_render.$clip_verts[0];
			out = $quake_render.$clip_verts[1];
			$quake_render.$clip_current = 1;
		}
		for (i = 0; i < nump; i++) {
			instep = in1[i];
			dists[i] = $quake_mathlib.dotProduct$1(instep, pclipnormal) - clipdist;
		}
		// handle wraparound case
		dists[nump] = dists[0];
		for (var kk = 0; kk < 5; kk++) {
			in1[nump][kk] = in1[0][kk];
		}
		// clip the winding
		outstep = 0;
		outcount = 0;
		for (i = 0; i < nump; i++) {
			instep = in1[i];
			if (dists[i] >= 0) {
				for (var kk1 = 0; kk1 < 5; kk1++) {
					out[outstep][kk1] = instep[kk1];
				}
				outstep += 1;
				outcount++;
			}
			if (dists[i] === 0 || dists[i + 1] === 0) {
				continue;
			}
			if (dists[i] > 0 === dists[i + 1] > 0) {
				continue;
			}
			// split it into a new vertex
			frac = dists[i] / (dists[i] - dists[i + 1]);
			vert2 = in1[i + 1];
			out[outstep][0] = instep[0] + frac * (vert2[0] - instep[0]);
			out[outstep][1] = instep[1] + frac * (vert2[1] - instep[1]);
			out[outstep][2] = instep[2] + frac * (vert2[2] - instep[2]);
			out[outstep][3] = instep[3] + frac * (vert2[3] - instep[3]);
			out[outstep][4] = instep[4] + frac * (vert2[4] - instep[4]);
			outstep += 1;
			outcount++;
		}
		return outcount;
	};
	$quake_render.$r_SetupAndDrawSprite = function() {
		var i, nump;
		var dot, scale;
		var pv;
		var pverts;
		var left = new Array(3), up = new Array(3), right = new Array(3), down = new Array(3), transformed = new Array(3), local = new Array(3);
		var outverts = new Array(21);
		for (var kk = 0; kk < 21; kk++) {
			outverts[kk] = new $quake_draw$emitpoint_t();
		}
		dot = $quake_mathlib.dotProduct$1($quake_render.r_spritedesc.vpn, $quake_render.modelorg);
		// backface cull
		if (dot >= 0) {
			return;
		}
		// build the sprite poster in worldspace
		$quake_mathlib.vectorScale($quake_render.r_spritedesc.vright, $quake_render.r_spritedesc.pspriteframe.right, right);
		$quake_mathlib.vectorScale($quake_render.r_spritedesc.vup, $quake_render.r_spritedesc.pspriteframe.up, up);
		$quake_mathlib.vectorScale($quake_render.r_spritedesc.vright, $quake_render.r_spritedesc.pspriteframe.left, left);
		$quake_mathlib.vectorScale($quake_render.r_spritedesc.vup, $quake_render.r_spritedesc.pspriteframe.down, down);
		pverts = $quake_render.$clip_verts[0];
		pverts[0][0] = $quake_render.$r_entorigin[0] + up[0] + left[0];
		pverts[0][1] = $quake_render.$r_entorigin[1] + up[1] + left[1];
		pverts[0][2] = $quake_render.$r_entorigin[2] + up[2] + left[2];
		pverts[0][3] = 0;
		pverts[0][4] = 0;
		pverts[1][0] = $quake_render.$r_entorigin[0] + up[0] + right[0];
		pverts[1][1] = $quake_render.$r_entorigin[1] + up[1] + right[1];
		pverts[1][2] = $quake_render.$r_entorigin[2] + up[2] + right[2];
		pverts[1][3] = $quake_render.$sprite_width;
		pverts[1][4] = 0;
		pverts[2][0] = $quake_render.$r_entorigin[0] + down[0] + right[0];
		pverts[2][1] = $quake_render.$r_entorigin[1] + down[1] + right[1];
		pverts[2][2] = $quake_render.$r_entorigin[2] + down[2] + right[2];
		pverts[2][3] = $quake_render.$sprite_width;
		pverts[2][4] = $quake_render.$sprite_height;
		pverts[3][0] = $quake_render.$r_entorigin[0] + down[0] + left[0];
		pverts[3][1] = $quake_render.$r_entorigin[1] + down[1] + left[1];
		pverts[3][2] = $quake_render.$r_entorigin[2] + down[2] + left[2];
		pverts[3][3] = 0;
		pverts[3][4] = $quake_render.$sprite_height;
		// clip to the frustum in worldspace
		nump = 4;
		$quake_render.$clip_current = 0;
		for (i = 0; i < 4; i++) {
			nump = $quake_render.$r_ClipSpriteFace(nump, $quake_render.$view_clipplanes[i]);
			if (nump < 3) {
				return;
			}
			if (nump >= $quake_render.MAXWORKINGVERTS) {
				$quake_sys_linux.sys_Error('R_SetupAndDrawSprite: too many points');
			}
		}
		// transform vertices into viewspace and project
		$quake_render.r_spritedesc.nearzi = -999999;
		for (i = 0; i < nump; i++) {
			pv = $quake_render.$clip_verts[$quake_render.$clip_current][i];
			$quake_mathlib.vectorSubtract(pv, $quake_render.r_origin, local);
			$quake_render.transformVector(local, transformed);
			if (transformed[2] < $quake_render.neaR_CLIP) {
				transformed[2] = $quake_render.neaR_CLIP;
			}
			outverts[i].zi = 1 / transformed[2];
			if (outverts[i].zi > $quake_render.r_spritedesc.nearzi) {
				$quake_render.r_spritedesc.nearzi = outverts[i].zi;
			}
			outverts[i].s = pv[3];
			outverts[i].t = pv[4];
			scale = $quake_render.xscale * outverts[i].zi;
			outverts[i].u = $quake_render.xcenter + scale * transformed[0];
			scale = $quake_render.yscale * outverts[i].zi;
			outverts[i].v = $quake_render.ycenter - scale * transformed[1];
		}
		// draw it
		$quake_render.r_spritedesc.nump = nump;
		$quake_render.r_spritedesc.pverts = outverts;
		$quake_draw.d_DrawSprite();
	};
	$quake_render.$r_GetSpriteframe = function(psprite) {
		var pspritegroup;
		var pspriteframe;
		var i, numframes, frame;
		//double* pintervals, fullinterval, targettime, time;
		frame = $quake_render.currententity.frame;
		if (frame >= psprite.numframes || frame < 0) {
			$quake_console.con_Printf('R_DrawSprite: no such frame ' + frame + '\n');
			frame = 0;
		}
		if (psprite.frames[frame].type === 0) {
			pspriteframe = Type.cast(psprite.frames[frame].frameptr, $quake_model$mspriteframe_t);
		}
		else {
			pspriteframe = null;
		}
		return pspriteframe;
	};
	$quake_render.$r_DrawSprite = function() {
		var i;
		var psprite;
		var tvec = new Array(3);
		var dot, angle, sr, cr;
		psprite = Type.cast($quake_render.currententity.model.cache, $quake_model$msprite_t);
		$quake_render.r_spritedesc.pspriteframe = $quake_render.$r_GetSpriteframe(psprite);
		if (ss.isNullOrUndefined($quake_render.r_spritedesc.pspriteframe)) {
			return;
		}
		$quake_render.$sprite_width = $quake_render.r_spritedesc.pspriteframe.width;
		$quake_render.$sprite_height = $quake_render.r_spritedesc.pspriteframe.height;
		// TODO: make this caller-selectable
		if (psprite.type === $quake_model.spR_FACING_UPRIGHT) {
			// generate the sprite's axes, with vup straight up in worldspace, and
			// r_spritedesc.vright perpendicular to modelorg.
			// This will not work if the view direction is very close to straight up or
			// down, because the cross product will be between two nearly parallel
			// vectors and starts to approach an undefined state, so we don't draw if
			// the two vectors are less than 1 degree apart
			tvec[0] = -$quake_render.modelorg[0];
			tvec[1] = -$quake_render.modelorg[1];
			tvec[2] = -$quake_render.modelorg[2];
			$quake_mathlib.vectorNormalize(tvec);
			dot = tvec[2];
			// same as DotProduct (tvec, r_spritedesc.vup) because
			//  r_spritedesc.vup is 0, 0, 1
			if (dot > 0.999848 || dot < -0.999848) {
				return;
			}
			$quake_render.r_spritedesc.vup[0] = 0;
			$quake_render.r_spritedesc.vup[1] = 0;
			$quake_render.r_spritedesc.vup[2] = 1;
			$quake_render.r_spritedesc.vright[0] = tvec[1];
			// CrossProduct(r_spritedesc.vup, -modelorg,
			$quake_render.r_spritedesc.vright[1] = -tvec[0];
			//              r_spritedesc.vright)
			$quake_render.r_spritedesc.vright[2] = 0;
			$quake_mathlib.vectorNormalize($quake_render.r_spritedesc.vright);
			$quake_render.r_spritedesc.vpn[0] = -$quake_render.r_spritedesc.vright[1];
			$quake_render.r_spritedesc.vpn[1] = $quake_render.r_spritedesc.vright[0];
			$quake_render.r_spritedesc.vpn[2] = 0;
			// CrossProduct (r_spritedesc.vright, r_spritedesc.vup,
			//  r_spritedesc.vpn)
		}
		else if (psprite.type === $quake_model.spR_VP_PARALLEL) {
			// generate the sprite's axes, completely parallel to the viewplane. There
			// are no problem situations, because the sprite is always in the same
			// position relative to the viewer
			for (i = 0; i < 3; i++) {
				$quake_render.r_spritedesc.vup[i] = $quake_render.vup[i];
				$quake_render.r_spritedesc.vright[i] = $quake_render.vright[i];
				$quake_render.r_spritedesc.vpn[i] = $quake_render.vpn[i];
			}
		}
		else if (psprite.type === $quake_model.spR_VP_PARALLEL_UPRIGHT) {
			// generate the sprite's axes, with vup straight up in worldspace, and
			// r_spritedesc.vright parallel to the viewplane.
			// This will not work if the view direction is very close to straight up or
			// down, because the cross product will be between two nearly parallel
			// vectors and starts to approach an undefined state, so we don't draw if
			// the two vectors are less than 1 degree apart
			dot = $quake_render.vpn[2];
			// same as DotProduct (vpn, r_spritedesc.vup) because
			//  r_spritedesc.vup is 0, 0, 1
			if (dot > 0.999848 || dot < -0.999848) {
				return;
			}
			$quake_render.r_spritedesc.vup[0] = 0;
			$quake_render.r_spritedesc.vup[1] = 0;
			$quake_render.r_spritedesc.vup[2] = 1;
			$quake_render.r_spritedesc.vright[0] = $quake_render.vpn[1];
			// CrossProduct (r_spritedesc.vup, vpn,
			$quake_render.r_spritedesc.vright[1] = -$quake_render.vpn[0];
			//  r_spritedesc.vright)
			$quake_render.r_spritedesc.vright[2] = 0;
			$quake_mathlib.vectorNormalize($quake_render.r_spritedesc.vright);
			$quake_render.r_spritedesc.vpn[0] = -$quake_render.r_spritedesc.vright[1];
			$quake_render.r_spritedesc.vpn[1] = $quake_render.r_spritedesc.vright[0];
			$quake_render.r_spritedesc.vpn[2] = 0;
			// CrossProduct (r_spritedesc.vright, r_spritedesc.vup,
			//  r_spritedesc.vpn)
		}
		else if (psprite.type === $quake_model.spR_ORIENTED) {
			// generate the sprite's axes, according to the sprite's world orientation
			$quake_mathlib.angleVectors($quake_render.currententity.angles, $quake_render.r_spritedesc.vpn, $quake_render.r_spritedesc.vright, $quake_render.r_spritedesc.vup);
		}
		else if (psprite.type === $quake_model.spR_VP_PARALLEL_ORIENTED) {
			// generate the sprite's axes, parallel to the viewplane, but rotated in
			// that plane around the center according to the sprite entity's roll
			// angle. So vpn stays the same, but vright and vup rotate
			angle = $quake_render.currententity.angles[$quake_quakedef.ROLL] * 0.0174532925199433;
			sr = Math.sin(angle);
			cr = Math.cos(angle);
			for (i = 0; i < 3; i++) {
				$quake_render.r_spritedesc.vpn[i] = $quake_render.vpn[i];
				$quake_render.r_spritedesc.vright[i] = $quake_render.vright[i] * cr + $quake_render.vup[i] * sr;
				$quake_render.r_spritedesc.vup[i] = $quake_render.vright[i] * -sr + $quake_render.vup[i] * cr;
			}
		}
		else {
			$quake_sys_linux.sys_Error('R_DrawSprite: Bad sprite type ' + psprite.type);
		}
		$quake_render.$r_RotateSprite(psprite.beamlength);
		$quake_render.$r_SetupAndDrawSprite();
	};
	$quake_render.$r_AddDynamicLights = function() {
		var surf;
		var lnum;
		var sd, td;
		var dist, rad, minlight;
		var impact = new Array(3), local = new Array(3);
		var s, t;
		var i;
		var smax, tmax;
		var tex;
		surf = $quake_render.r_drawsurf.surf;
		smax = (surf.extents[0] >> 4) + 1;
		tmax = (surf.extents[1] >> 4) + 1;
		tex = surf.texinfo;
		for (lnum = 0; lnum < $quake_client.maX_DLIGHTS; lnum++) {
			if ((surf.dlightbits & 1 << lnum) === 0) {
				continue;
			}
			// not lit by this light
			rad = $quake_client.cl_dlights[lnum].radius;
			dist = $quake_mathlib.dotProduct$1($quake_client.cl_dlights[lnum].origin, surf.plane.normal) - surf.plane.dist;
			rad -= Math.abs(dist);
			minlight = $quake_client.cl_dlights[lnum].minlight;
			if (rad < minlight) {
				continue;
			}
			minlight = rad - minlight;
			for (i = 0; i < 3; i++) {
				impact[i] = $quake_client.cl_dlights[lnum].origin[i] - surf.plane.normal[i] * dist;
			}
			local[0] = $quake_mathlib.dotProduct$1(impact, tex.vecs[0]) + tex.vecs[0][3];
			local[1] = $quake_mathlib.dotProduct$1(impact, tex.vecs[1]) + tex.vecs[1][3];
			local[0] -= surf.texturemins[0];
			local[1] -= surf.texturemins[1];
			for (t = 0; t < tmax; t++) {
				td = ss.Int32.trunc(local[1] - t * 16);
				if (td < 0) {
					td = -td;
				}
				for (s = 0; s < smax; s++) {
					sd = ss.Int32.trunc(local[0] - s * 16);
					if (sd < 0) {
						sd = -sd;
					}
					if (sd > td) {
						dist = sd + (td >> 1);
					}
					else {
						dist = td + (sd >> 1);
					}
					if (dist < minlight) {
						$quake_render.$blocklights[t * smax + s] += ss.Int32.trunc((rad - dist) * 256);
					}
				}
			}
		}
	};
	$quake_render.$r_BuildLightMap = function() {
		var smax, tmax;
		var t;
		var i, size;
		var lightmap;
		var scale;
		var maps;
		var surf;
		surf = $quake_render.r_drawsurf.surf;
		smax = (surf.extents[0] >> 4) + 1;
		tmax = (surf.extents[1] >> 4) + 1;
		size = smax * tmax;
		lightmap = 0;
		if ($quake_render.$r_fullbright.value !== 0 || ss.isNullOrUndefined($quake_client.cl.worldmodel.lightdata)) {
			for (i = 0; i < size; i++) {
				$quake_render.$blocklights[i] = 0;
			}
			return;
		}
		// clear to ambient
		for (i = 0; i < size; i++) {
			$quake_render.$blocklights[i] = $quake_render.r_refdef.ambientlight << 8;
		}
		// add all the lightmaps
		if (ss.isValue(surf.samples)) {
			for (maps = 0; maps < $quake_bspfile.MAXLIGHTMAPS && surf.styles[maps] !== 255; maps++) {
				scale = $quake_render.r_drawsurf.lightadj[maps];
				// 8.8 fraction		
				for (i = 0; i < size; i++) {
					$quake_render.$blocklights[i] += surf.samples.buffer[surf.samples.ofs + lightmap + i] * scale;
				}
				lightmap += size;
				// skip to next lightmap*/
			}
		}
		// add all the dynamic lights
		if (surf.dlightframe === $quake_render.r_framecount) {
			$quake_render.$r_AddDynamicLights();
		}
		// bound, invert, and shift
		for (i = 0; i < size; i++) {
			t = 65280 - $quake_render.$blocklights[i] >> 2;
			if (t < 64) {
				t = 64;
			}
			$quake_render.$blocklights[i] = t;
		}
	};
	$quake_render.r_TextureAnimation = function(base) {
		var reletive;
		var count;
		if ($quake_render.currententity.frame !== 0) {
			if (ss.isValue(base.alternate_anims)) {
				base = base.alternate_anims;
			}
		}
		if (base.anim_total === 0) {
			return base;
		}
		reletive = ss.Int32.trunc($quake_client.cl.time * 10) % base.anim_total;
		count = 0;
		while (base.anim_min > reletive || base.anim_max <= reletive) {
			base = base.anim_next;
			if (ss.isNullOrUndefined(base)) {
				$quake_sys_linux.sys_Error('R_TextureAnimation: broken cycle');
			}
			if (++count > 100) {
				$quake_sys_linux.sys_Error('R_TextureAnimation: infinite cycle');
			}
		}
		return base;
	};
	$quake_render.r_DrawSurface = function() {
		var basetptr;
		var smax, tmax, twidth;
		var u;
		var soffset, basetoffset, texwidth;
		var horzblockstep;
		var pcolumndest;
		var pblockdrawer;
		var mt;
		// calculate the lightings
		$quake_render.$r_BuildLightMap();
		$quake_render.$surfrowbytes = $quake_render.r_drawsurf.rowbytes;
		mt = $quake_render.r_drawsurf.texture;
		$quake_render.$r_source = new $Helper_helper$ByteBuffer.$ctor3(mt.pixels, mt.offsets[$quake_render.r_drawsurf.surfmip]);
		// the fractional light values should range from 0 to (VID_GRADES - 1) << 16
		// from a source range of 0 - 255
		texwidth = mt.width >>> $quake_render.r_drawsurf.surfmip;
		$quake_render.$blocksize = 16 >> $quake_render.r_drawsurf.surfmip;
		$quake_render.$blockdivshift = 4 - $quake_render.r_drawsurf.surfmip;
		$quake_render.$blockdivmask = (1 << $quake_render.$blockdivshift) - 1;
		$quake_render.$r_lightwidth = ($quake_render.r_drawsurf.surf.extents[0] >> 4) + 1;
		$quake_render.$r_numhblocks = $quake_render.r_drawsurf.surfwidth >> $quake_render.$blockdivshift;
		$quake_render.$r_numvblocks = $quake_render.r_drawsurf.surfheight >> $quake_render.$blockdivshift;
		//==============================
		if ($quake_render.r_pixbytes === 1) {
			pblockdrawer = $quake_render.$surfmiptable[$quake_render.r_drawsurf.surfmip];
			// TODO: only needs to be set when there is a display settings change
			horzblockstep = $quake_render.$blocksize;
		}
		else {
			pblockdrawer = $quake_render.$r_DrawSurfaceBlock16;
			// TODO: only needs to be set when there is a display settings change
			horzblockstep = $quake_render.$blocksize << 1;
		}
		smax = mt.width >>> $quake_render.r_drawsurf.surfmip;
		twidth = texwidth;
		tmax = mt.height >>> $quake_render.r_drawsurf.surfmip;
		$quake_render.$sourcetstep = texwidth;
		$quake_render.$r_stepback = tmax * twidth;
		$quake_render.$r_sourcemax = $Helper_helper$ByteBuffer.op_Addition($quake_render.$r_source, tmax * smax);
		soffset = $quake_render.r_drawsurf.surf.texturemins[0];
		basetoffset = $quake_render.r_drawsurf.surf.texturemins[1];
		// << 16 components are to guarantee positive values for %
		soffset = ((soffset >> $quake_render.r_drawsurf.surfmip) + (smax << 16)) % smax;
		basetptr = new $Helper_helper$ByteBuffer.$ctor2($quake_render.$r_source, ((basetoffset >> $quake_render.r_drawsurf.surfmip) + (tmax << 16)) % tmax * twidth);
		pcolumndest = new $Helper_helper$ByteBuffer.$ctor1($quake_render.r_drawsurf.surfdat);
		for (u = 0; u < $quake_render.$r_numhblocks; u++) {
			$quake_render.$r_lightptr = new $Helper_helper$UIntBuffer($quake_render.$blocklights, u);
			$quake_render.$prowdestbase = new $Helper_helper$ByteBuffer(pcolumndest);
			$quake_render.$pbasesource = new $Helper_helper$ByteBuffer.$ctor2(basetptr, soffset);
			pblockdrawer();
			soffset = soffset + $quake_render.$blocksize;
			if (soffset >= smax) {
				soffset = 0;
			}
			pcolumndest.add(horzblockstep);
		}
	};
	$quake_render.$r_DrawSurfaceBlock8_mip0 = function() {
		var v, i, b, lightstep, lighttemp, light;
		var pix;
		var psource, prowdest;
		psource = new $Helper_helper$ByteBuffer($quake_render.$pbasesource);
		prowdest = new $Helper_helper$ByteBuffer($quake_render.$prowdestbase);
		for (v = 0; v < $quake_render.$r_numvblocks; v++) {
			// FIXME: make these locals?
			// FIXME: use delta rather than both right and left, like ASM?
			$quake_render.$lightleft = $quake_render.$r_lightptr.get_item(0);
			$quake_render.$lightright = $quake_render.$r_lightptr.get_item(1);
			$quake_render.$r_lightptr.ofs += $quake_render.$r_lightwidth;
			$quake_render.$lightleftstep = $quake_render.$r_lightptr.get_item(0) - $quake_render.$lightleft >> 4;
			$quake_render.$lightrightstep = $quake_render.$r_lightptr.get_item(1) - $quake_render.$lightright >> 4;
			for (i = 0; i < 16; i++) {
				lighttemp = $quake_render.$lightleft - $quake_render.$lightright;
				lightstep = lighttemp >> 4;
				light = $quake_render.$lightright;
				for (b = 15; b >= 0; b--) {
					pix = psource.get_item(b);
					prowdest.set_item(b, $quake_screen.vid.colormap[(light & 65280) + pix]);
					light += lightstep;
				}
				psource.add($quake_render.$sourcetstep);
				$quake_render.$lightright += $quake_render.$lightrightstep;
				$quake_render.$lightleft += $quake_render.$lightleftstep;
				prowdest.add($quake_render.$surfrowbytes);
			}
			if ($Helper_helper$ByteBuffer.op_GreaterThanOrEqual(psource, $quake_render.$r_sourcemax)) {
				psource.sub($quake_render.$r_stepback);
			}
		}
	};
	$quake_render.$r_DrawSurfaceBlock8_mip1 = function() {
		var v, i, b, lightstep, lighttemp, light;
		var pix;
		var psource, prowdest;
		psource = new $Helper_helper$ByteBuffer($quake_render.$pbasesource);
		prowdest = new $Helper_helper$ByteBuffer($quake_render.$prowdestbase);
		for (v = 0; v < $quake_render.$r_numvblocks; v++) {
			// FIXME: make these locals?
			// FIXME: use delta rather than both right and left, like ASM?
			$quake_render.$lightleft = $quake_render.$r_lightptr.get_item(0);
			$quake_render.$lightright = $quake_render.$r_lightptr.get_item(1);
			$quake_render.$r_lightptr = $Helper_helper$UIntBuffer.op_Addition($quake_render.$r_lightptr, $quake_render.$r_lightwidth);
			$quake_render.$lightleftstep = $quake_render.$r_lightptr.get_item(0) - $quake_render.$lightleft >> 3;
			$quake_render.$lightrightstep = $quake_render.$r_lightptr.get_item(1) - $quake_render.$lightright >> 3;
			for (i = 0; i < 8; i++) {
				lighttemp = $quake_render.$lightleft - $quake_render.$lightright;
				lightstep = lighttemp >> 3;
				light = $quake_render.$lightright;
				for (b = 7; b >= 0; b--) {
					pix = psource.get_item(b);
					prowdest.set_item(b, $quake_screen.vid.colormap[(light & 65280) + pix]);
					light += lightstep;
				}
				psource.add($quake_render.$sourcetstep);
				$quake_render.$lightright += $quake_render.$lightrightstep;
				$quake_render.$lightleft += $quake_render.$lightleftstep;
				prowdest.add($quake_render.$surfrowbytes);
			}
			if ($Helper_helper$ByteBuffer.op_GreaterThanOrEqual(psource, $quake_render.$r_sourcemax)) {
				psource.sub($quake_render.$r_stepback);
			}
		}
	};
	$quake_render.$r_DrawSurfaceBlock8_mip2 = function() {
		var v, i, b, lightstep, lighttemp, light;
		var pix;
		var psource, prowdest;
		psource = new $Helper_helper$ByteBuffer($quake_render.$pbasesource);
		prowdest = new $Helper_helper$ByteBuffer($quake_render.$prowdestbase);
		for (v = 0; v < $quake_render.$r_numvblocks; v++) {
			// FIXME: make these locals?
			// FIXME: use delta rather than both right and left, like ASM?
			$quake_render.$lightleft = $quake_render.$r_lightptr.get_item(0);
			$quake_render.$lightright = $quake_render.$r_lightptr.get_item(1);
			$quake_render.$r_lightptr = $Helper_helper$UIntBuffer.op_Addition($quake_render.$r_lightptr, $quake_render.$r_lightwidth);
			$quake_render.$lightleftstep = $quake_render.$r_lightptr.get_item(0) - $quake_render.$lightleft >> 2;
			$quake_render.$lightrightstep = $quake_render.$r_lightptr.get_item(1) - $quake_render.$lightright >> 2;
			for (i = 0; i < 4; i++) {
				lighttemp = $quake_render.$lightleft - $quake_render.$lightright;
				lightstep = lighttemp >> 2;
				light = $quake_render.$lightright;
				for (b = 3; b >= 0; b--) {
					pix = psource.get_item(b);
					prowdest.set_item(b, $quake_screen.vid.colormap[(light & 65280) + pix]);
					light += lightstep;
				}
				psource.add($quake_render.$sourcetstep);
				$quake_render.$lightright += $quake_render.$lightrightstep;
				$quake_render.$lightleft += $quake_render.$lightleftstep;
				prowdest.add($quake_render.$surfrowbytes);
			}
			if ($Helper_helper$ByteBuffer.op_GreaterThanOrEqual(psource, $quake_render.$r_sourcemax)) {
				psource.sub($quake_render.$r_stepback);
			}
		}
	};
	$quake_render.$r_DrawSurfaceBlock8_mip3 = function() {
		var v, i, b, lightstep, lighttemp, light;
		var pix;
		var psource, prowdest;
		psource = new $Helper_helper$ByteBuffer($quake_render.$pbasesource);
		prowdest = new $Helper_helper$ByteBuffer($quake_render.$prowdestbase);
		for (v = 0; v < $quake_render.$r_numvblocks; v++) {
			// FIXME: make these locals?
			// FIXME: use delta rather than both right and left, like ASM?
			$quake_render.$lightleft = $quake_render.$r_lightptr.get_item(0);
			$quake_render.$lightright = $quake_render.$r_lightptr.get_item(1);
			$quake_render.$r_lightptr = $Helper_helper$UIntBuffer.op_Addition($quake_render.$r_lightptr, $quake_render.$r_lightwidth);
			$quake_render.$lightleftstep = $quake_render.$r_lightptr.get_item(0) - $quake_render.$lightleft >> 1;
			$quake_render.$lightrightstep = $quake_render.$r_lightptr.get_item(1) - $quake_render.$lightright >> 1;
			for (i = 0; i < 2; i++) {
				lighttemp = $quake_render.$lightleft - $quake_render.$lightright;
				lightstep = lighttemp >> 1;
				light = $quake_render.$lightright;
				for (b = 1; b >= 0; b--) {
					pix = psource.get_item(b);
					prowdest.set_item(b, $quake_screen.vid.colormap[(light & 65280) + pix]);
					light += lightstep;
				}
				psource.add($quake_render.$sourcetstep);
				$quake_render.$lightright += $quake_render.$lightrightstep;
				$quake_render.$lightleft += $quake_render.$lightleftstep;
				prowdest.add($quake_render.$surfrowbytes);
			}
			if ($Helper_helper$ByteBuffer.op_GreaterThanOrEqual(psource, $quake_render.$r_sourcemax)) {
				psource.sub($quake_render.$r_stepback);
			}
		}
	};
	$quake_render.$r_DrawSurfaceBlock16 = function() {
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.render.aedge_t
	var $quake_render$aedge_t = function(index0, index1) {
		this.index0 = 0;
		this.index1 = 0;
		this.index0 = index0;
		this.index1 = index1;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.render.alight_t
	var $quake_render$alight_t = function() {
		this.ambientlight = 0;
		this.shadelight = 0;
		this.plightvec = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.render.auxvert_t
	var $quake_render$auxvert_t = function() {
		this.fv = new Array(3);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.render.bedge_t
	var $quake_render$bedge_t = function() {
		this.v = new Array(2);
		this.pnext = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.render.btofpoly_t
	var $quake_render$btofpoly_t = function() {
		this.clipflags = 0;
		this.psurf = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.render.clipplane_t
	var $quake_render$clipplane_t = function() {
		this.normal = new Array(3);
		this.dist = 0;
		this.next = null;
		this.leftedge = false;
		this.rightedge = false;
		this.$reserved = new Array(2);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.render.edge_t
	var $quake_render$edge_t = function() {
		this.u = 0;
		this.u_step = 0;
		this.prev = null;
		this.next = null;
		this.surfs = new Array(2);
		this.nextremove = null;
		this.nearzi = 0;
		this.owner = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.render.efrag_t
	var $quake_render$efrag_t = function() {
		this.leaf = null;
		this.leafnext = null;
		this.entity = null;
		this.entnext = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.render.entity_t
	var $quake_render$entity_t = function() {
		this.forcelink = false;
		this.$update_type = 0;
		this.baseline = new $quake_quakedef$entity_state_t();
		this.msgtime = 0;
		this.msg_origins = [new Array(3), new Array(3)];
		this.origin = new Array(3);
		this.msg_angles = [new Array(3), new Array(3)];
		this.angles = new Array(3);
		this.model = null;
		this.efrag = null;
		this.frame = 0;
		this.syncbase = 0;
		this.colormap = null;
		this.effects = 0;
		this.skinnum = 0;
		this.visframe = 0;
		this.$dlightframe = 0;
		this.$dlightbits = 0;
		this.trivial_accept = 0;
		this.topnode = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.render.espan_t
	var $quake_render$espan_t = function() {
		this.u = 0;
		this.v = 0;
		this.count = 0;
		this.pnext = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.render.refdef_t
	var $quake_render$refdef_t = function() {
		this.vrect = new $quake_vid$vrect_t();
		this.aliasvrect = new $quake_vid$vrect_t();
		this.vrectright = 0;
		this.vrectbottom = 0;
		this.aliasvrectright = 0;
		this.aliasvrectbottom = 0;
		this.vrectrightedge = 0;
		this.fvrectx = 0;
		this.fvrecty = 0;
		this.fvrectx_adj = 0;
		this.fvrecty_adj = 0;
		this.vrect_x_adj_shift20 = 0;
		this.vrectright_adj_shift20 = 0;
		this.fvrectright_adj = 0;
		this.fvrectbottom_adj = 0;
		this.fvrectright = 0;
		this.fvrectbottom = 0;
		this.horizontalFieldOfView = 0;
		this.xOrigin = 0;
		this.yOrigin = 0;
		this.vieworg = new Array(3);
		this.viewangles = new Array(3);
		this.fov_x = 0;
		this.fov_y = 0;
		this.ambientlight = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.render.solidstate_t
	var $quake_render$solidstate_t = function() {
	};
	$quake_render$solidstate_t.prototype = { touchessolid: 0, drawnode: 1, nodrawnode: 2 };
	Type.registerEnum(global, 'quake.render$solidstate_t', $quake_render$solidstate_t, false);
	////////////////////////////////////////////////////////////////////////////////
	// quake.render.surf_t
	var $quake_render$surf_t = function() {
		this.next = null;
		this.prev = null;
		this.spans = null;
		this.key = 0;
		this.last_u = 0;
		this.spanstate = 0;
		this.flags = 0;
		this.data = null;
		this.entity = null;
		this.nearzi = 0;
		this.insubmodel = false;
		this.d_ziorigin = 0;
		this.d_zistepu = 0;
		this.d_zistepv = 0;
		this.pad = new Array(2);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.sbar
	var $quake_sbar = function() {
		this.$fragsort = new Array($quake_quakedef.maX_SCOREBOARD);
		this.$scoreboardtext = new Array($quake_quakedef.maX_SCOREBOARD);
		this.$scoreboardtop = new Array($quake_quakedef.maX_SCOREBOARD);
		this.$scoreboardbottom = new Array($quake_quakedef.maX_SCOREBOARD);
		this.$scoreboardcount = new Array($quake_quakedef.maX_SCOREBOARD);
		this.$scoreboardlines = 0;
	};
	$quake_sbar.prototype = {
		$sbar_DrawString: function(x, y, str) {
			if ($quake_client.cl.gametype === $quake_net.gamE_DEATHMATCH) {
				$quake_draw.draw_String(x, y + $quake_screen.vid.height - $quake_sbar.$sbaR_HEIGHT, str);
			}
			else {
				$quake_draw.draw_String(x + ($quake_screen.vid.width - 320 >> 1), y + $quake_screen.vid.height - $quake_sbar.$sbaR_HEIGHT, str);
			}
		},
		$sbar_itoa: function(num, buf) {
			return -1;
		},
		$sbar_SortFrags: function() {
		},
		$sbar_ColorForMap: function(m) {
			return ((m < 128) ? (m + 8) : (m + 8));
		},
		$sbar_UpdateScoreboard: function() {
		},
		$sbar_IntermissionNumber: function(x, y, num, digits, color) {
		},
		$sbar_DeathmatchOverlay: function() {
		}
	};
	$quake_sbar.$sbar_ShowScores = function() {
		if ($quake_sbar.$sb_showscores) {
			return;
		}
		$quake_sbar.$sb_showscores = true;
		$quake_sbar.$sb_updates = 0;
	};
	$quake_sbar.$sbar_DontShowScores = function() {
		$quake_sbar.$sb_showscores = false;
		$quake_sbar.$sb_updates = 0;
	};
	$quake_sbar.sbar_Changed = function() {
		$quake_sbar.$sb_updates = 0;
		// update next frame
	};
	$quake_sbar.sbar_Init = function() {
		var i;
		for (i = 0; i < 10; i++) {
			$quake_sbar.$sb_nums.set(0, i, $quake_draw.draw_PicFromWad('num_' + i));
			$quake_sbar.$sb_nums.set(1, i, $quake_draw.draw_PicFromWad('anum_' + i));
		}
		$quake_sbar.$sb_nums.set(0, 10, $quake_draw.draw_PicFromWad('num_minus'));
		$quake_sbar.$sb_nums.set(1, 10, $quake_draw.draw_PicFromWad('anum_minus'));
		$quake_sbar.$sb_colon = $quake_draw.draw_PicFromWad('num_colon');
		$quake_sbar.$sb_slash = $quake_draw.draw_PicFromWad('num_slash');
		$quake_sbar.$sb_weapons.set(0, 0, $quake_draw.draw_PicFromWad('inv_shotgun'));
		$quake_sbar.$sb_weapons.set(0, 1, $quake_draw.draw_PicFromWad('inv_sshotgun'));
		$quake_sbar.$sb_weapons.set(0, 2, $quake_draw.draw_PicFromWad('inv_nailgun'));
		$quake_sbar.$sb_weapons.set(0, 3, $quake_draw.draw_PicFromWad('inv_snailgun'));
		$quake_sbar.$sb_weapons.set(0, 4, $quake_draw.draw_PicFromWad('inv_rlaunch'));
		$quake_sbar.$sb_weapons.set(0, 5, $quake_draw.draw_PicFromWad('inv_srlaunch'));
		$quake_sbar.$sb_weapons.set(0, 6, $quake_draw.draw_PicFromWad('inv_lightng'));
		$quake_sbar.$sb_weapons.set(1, 0, $quake_draw.draw_PicFromWad('inv2_shotgun'));
		$quake_sbar.$sb_weapons.set(1, 1, $quake_draw.draw_PicFromWad('inv2_sshotgun'));
		$quake_sbar.$sb_weapons.set(1, 2, $quake_draw.draw_PicFromWad('inv2_nailgun'));
		$quake_sbar.$sb_weapons.set(1, 3, $quake_draw.draw_PicFromWad('inv2_snailgun'));
		$quake_sbar.$sb_weapons.set(1, 4, $quake_draw.draw_PicFromWad('inv2_rlaunch'));
		$quake_sbar.$sb_weapons.set(1, 5, $quake_draw.draw_PicFromWad('inv2_srlaunch'));
		$quake_sbar.$sb_weapons.set(1, 6, $quake_draw.draw_PicFromWad('inv2_lightng'));
		for (i = 0; i < 5; i++) {
			$quake_sbar.$sb_weapons.set(2 + i, 0, $quake_draw.draw_PicFromWad('inva' + (i + 1) + '_shotgun'));
			$quake_sbar.$sb_weapons.set(2 + i, 1, $quake_draw.draw_PicFromWad('inva' + (i + 1) + '_sshotgun'));
			$quake_sbar.$sb_weapons.set(2 + i, 2, $quake_draw.draw_PicFromWad('inva' + (i + 1) + '_nailgun'));
			$quake_sbar.$sb_weapons.set(2 + i, 3, $quake_draw.draw_PicFromWad('inva' + (i + 1) + '_snailgun'));
			$quake_sbar.$sb_weapons.set(2 + i, 4, $quake_draw.draw_PicFromWad('inva' + (i + 1) + '_rlaunch'));
			$quake_sbar.$sb_weapons.set(2 + i, 5, $quake_draw.draw_PicFromWad('inva' + (i + 1) + '_srlaunch'));
			$quake_sbar.$sb_weapons.set(2 + i, 6, $quake_draw.draw_PicFromWad('inva' + (i + 1) + '_lightng'));
		}
		$quake_sbar.$sb_ammo[0] = $quake_draw.draw_PicFromWad('sb_shells');
		$quake_sbar.$sb_ammo[1] = $quake_draw.draw_PicFromWad('sb_nails');
		$quake_sbar.$sb_ammo[2] = $quake_draw.draw_PicFromWad('sb_rocket');
		$quake_sbar.$sb_ammo[3] = $quake_draw.draw_PicFromWad('sb_cells');
		$quake_sbar.$sb_armor[0] = $quake_draw.draw_PicFromWad('sb_armor1');
		$quake_sbar.$sb_armor[1] = $quake_draw.draw_PicFromWad('sb_armor2');
		$quake_sbar.$sb_armor[2] = $quake_draw.draw_PicFromWad('sb_armor3');
		$quake_sbar.$sb_items[0] = $quake_draw.draw_PicFromWad('sb_key1');
		$quake_sbar.$sb_items[1] = $quake_draw.draw_PicFromWad('sb_key2');
		$quake_sbar.$sb_items[2] = $quake_draw.draw_PicFromWad('sb_invis');
		$quake_sbar.$sb_items[3] = $quake_draw.draw_PicFromWad('sb_invuln');
		$quake_sbar.$sb_items[4] = $quake_draw.draw_PicFromWad('sb_suit');
		$quake_sbar.$sb_items[5] = $quake_draw.draw_PicFromWad('sb_quad');
		$quake_sbar.$sb_sigil[0] = $quake_draw.draw_PicFromWad('sb_sigil1');
		$quake_sbar.$sb_sigil[1] = $quake_draw.draw_PicFromWad('sb_sigil2');
		$quake_sbar.$sb_sigil[2] = $quake_draw.draw_PicFromWad('sb_sigil3');
		$quake_sbar.$sb_sigil[3] = $quake_draw.draw_PicFromWad('sb_sigil4');
		$quake_sbar.$sb_faces.set(4, 0, $quake_draw.draw_PicFromWad('face1'));
		$quake_sbar.$sb_faces.set(4, 1, $quake_draw.draw_PicFromWad('face_p1'));
		$quake_sbar.$sb_faces.set(3, 0, $quake_draw.draw_PicFromWad('face2'));
		$quake_sbar.$sb_faces.set(3, 1, $quake_draw.draw_PicFromWad('face_p2'));
		$quake_sbar.$sb_faces.set(2, 0, $quake_draw.draw_PicFromWad('face3'));
		$quake_sbar.$sb_faces.set(2, 1, $quake_draw.draw_PicFromWad('face_p3'));
		$quake_sbar.$sb_faces.set(1, 0, $quake_draw.draw_PicFromWad('face4'));
		$quake_sbar.$sb_faces.set(1, 1, $quake_draw.draw_PicFromWad('face_p4'));
		$quake_sbar.$sb_faces.set(0, 0, $quake_draw.draw_PicFromWad('face5'));
		$quake_sbar.$sb_faces.set(0, 1, $quake_draw.draw_PicFromWad('face_p5'));
		$quake_sbar.$sb_face_invis = $quake_draw.draw_PicFromWad('face_invis');
		$quake_sbar.$sb_face_invuln = $quake_draw.draw_PicFromWad('face_invul2');
		$quake_sbar.$sb_face_invis_invuln = $quake_draw.draw_PicFromWad('face_inv2');
		$quake_sbar.$sb_face_quad = $quake_draw.draw_PicFromWad('face_quad');
		$quake_cmd.cmd_AddCommand('+showscores', $quake_sbar.$sbar_ShowScores);
		$quake_cmd.cmd_AddCommand('-showscores', $quake_sbar.$sbar_DontShowScores);
		$quake_sbar.$sb_sbar = $quake_draw.draw_PicFromWad('sbar');
		$quake_sbar.$sb_ibar = $quake_draw.draw_PicFromWad('ibar');
		$quake_sbar.$sb_scorebar = $quake_draw.draw_PicFromWad('scorebar');
		//MED 01/04/97 added new hipnotic weapons
		if ($quake_common.hipnotic) {
			$quake_sbar.$hsb_weapons.set(0, 0, $quake_draw.draw_PicFromWad('inv_laser'));
			$quake_sbar.$hsb_weapons.set(0, 1, $quake_draw.draw_PicFromWad('inv_mjolnir'));
			$quake_sbar.$hsb_weapons.set(0, 2, $quake_draw.draw_PicFromWad('inv_gren_prox'));
			$quake_sbar.$hsb_weapons.set(0, 3, $quake_draw.draw_PicFromWad('inv_prox_gren'));
			$quake_sbar.$hsb_weapons.set(0, 4, $quake_draw.draw_PicFromWad('inv_prox'));
			$quake_sbar.$hsb_weapons.set(1, 0, $quake_draw.draw_PicFromWad('inv2_laser'));
			$quake_sbar.$hsb_weapons.set(1, 1, $quake_draw.draw_PicFromWad('inv2_mjolnir'));
			$quake_sbar.$hsb_weapons.set(1, 2, $quake_draw.draw_PicFromWad('inv2_gren_prox'));
			$quake_sbar.$hsb_weapons.set(1, 3, $quake_draw.draw_PicFromWad('inv2_prox_gren'));
			$quake_sbar.$hsb_weapons.set(1, 4, $quake_draw.draw_PicFromWad('inv2_prox'));
			for (i = 0; i < 5; i++) {
				$quake_sbar.$hsb_weapons.set(2 + i, 0, $quake_draw.draw_PicFromWad('inva' + (i + 1) + '_laser'));
				$quake_sbar.$hsb_weapons.set(2 + i, 1, $quake_draw.draw_PicFromWad('inva' + (i + 1) + '_mjolnir'));
				$quake_sbar.$hsb_weapons.set(2 + i, 2, $quake_draw.draw_PicFromWad('inva' + (i + 1) + '_gren_prox'));
				$quake_sbar.$hsb_weapons.set(2 + i, 3, $quake_draw.draw_PicFromWad('inva' + (i + 1) + '_prox_gren'));
				$quake_sbar.$hsb_weapons.set(2 + i, 4, $quake_draw.draw_PicFromWad('inva' + (i + 1) + '_prox'));
			}
			$quake_sbar.$hsb_items[0] = $quake_draw.draw_PicFromWad('sb_wsuit');
			$quake_sbar.$hsb_items[1] = $quake_draw.draw_PicFromWad('sb_eshld');
		}
		if ($quake_common.rogue) {
			$quake_sbar.$rsb_invbar[0] = $quake_draw.draw_PicFromWad('r_invbar1');
			$quake_sbar.$rsb_invbar[1] = $quake_draw.draw_PicFromWad('r_invbar2');
			$quake_sbar.$rsb_weapons[0] = $quake_draw.draw_PicFromWad('r_lava');
			$quake_sbar.$rsb_weapons[1] = $quake_draw.draw_PicFromWad('r_superlava');
			$quake_sbar.$rsb_weapons[2] = $quake_draw.draw_PicFromWad('r_gren');
			$quake_sbar.$rsb_weapons[3] = $quake_draw.draw_PicFromWad('r_multirock');
			$quake_sbar.$rsb_weapons[4] = $quake_draw.draw_PicFromWad('r_plasma');
			$quake_sbar.$rsb_items[0] = $quake_draw.draw_PicFromWad('r_shield1');
			$quake_sbar.$rsb_items[1] = $quake_draw.draw_PicFromWad('r_agrav1');
			// PGM 01/19/97 - team color border
			$quake_sbar.$rsb_teambord = $quake_draw.draw_PicFromWad('r_teambord');
			// PGM 01/19/97 - team color border
			$quake_sbar.$rsb_ammo[0] = $quake_draw.draw_PicFromWad('r_ammolava');
			$quake_sbar.$rsb_ammo[1] = $quake_draw.draw_PicFromWad('r_ammomulti');
			$quake_sbar.$rsb_ammo[2] = $quake_draw.draw_PicFromWad('r_ammoplasma');
		}
	};
	$quake_sbar.$sbar_DrawPic = function(x, y, pic) {
		if ($quake_client.cl.gametype === $quake_net.gamE_DEATHMATCH) {
			$quake_draw.draw_Pic(x, y + ($quake_screen.vid.height - $quake_sbar.$sbaR_HEIGHT), pic);
		}
		else {
			$quake_draw.draw_Pic(x + ($quake_screen.vid.width - 320 >> 1), y + ($quake_screen.vid.height - $quake_sbar.$sbaR_HEIGHT), pic);
		}
	};
	$quake_sbar.$sbar_DrawTransPic = function(x, y, pic) {
		if ($quake_client.cl.gametype === $quake_net.gamE_DEATHMATCH) {
			$quake_draw.draw_TransPic(x, y + ($quake_screen.vid.height - $quake_sbar.$sbaR_HEIGHT), pic);
		}
		else {
			$quake_draw.draw_TransPic(x + ($quake_screen.vid.width - 320 >> 1), y + ($quake_screen.vid.height - $quake_sbar.$sbaR_HEIGHT), pic);
		}
	};
	$quake_sbar.$sbar_DrawCharacter = function(x, y, num) {
		if ($quake_client.cl.gametype === $quake_net.gamE_DEATHMATCH) {
			$quake_draw.draw_Character(x + 4, y + $quake_screen.vid.height - $quake_sbar.$sbaR_HEIGHT, num);
		}
		else {
			$quake_draw.draw_Character(x + ($quake_screen.vid.width - 320 >> 1) + 4, y + $quake_screen.vid.height - $quake_sbar.$sbaR_HEIGHT, num);
		}
	};
	$quake_sbar.$sbar_DrawNum = function(x, y, num, digits, color) {
		var str;
		var ptr;
		var l, frame;
		//l = Sbar_itoa (num, str);
		str = ''.toString() + num;
		l = str.length;
		ptr = 0;
		if (l > digits) {
			ptr += l - digits;
		}
		if (l < digits) {
			x += (digits - l) * 24;
		}
		while (ptr < str.length) {
			if (str.charCodeAt(ptr) === 45) {
				frame = $quake_sbar.$staT_MINUS;
			}
			else {
				frame = str.charCodeAt(ptr) - 48;
			}
			$quake_sbar.$sbar_DrawTransPic(x, y, $quake_sbar.$sb_nums.get(color, frame));
			x += 24;
			ptr++;
		}
	};
	$quake_sbar.$sbar_SoloScoreboard = function() {
	};
	$quake_sbar.$sbar_DrawScoreboard = function() {
		$quake_sbar.$sbar_SoloScoreboard();
	};
	$quake_sbar.$sbar_DrawInventory = function() {
		var i;
		var num;
		var time;
		var flashon;
		if ($quake_common.rogue) {
			if ($quake_client.cl.stats[$quake_quakedef.staT_ACTIVEWEAPON] >= $quake_quakedef.riT_LAVA_NAILGUN) {
				$quake_sbar.$sbar_DrawPic(0, -24, $quake_sbar.$rsb_invbar[0]);
			}
			else {
				$quake_sbar.$sbar_DrawPic(0, -24, $quake_sbar.$rsb_invbar[1]);
			}
		}
		else {
			$quake_sbar.$sbar_DrawPic(0, -24, $quake_sbar.$sb_ibar);
		}
		// weapons
		for (i = 0; i < 7; i++) {
			if (($quake_client.cl.items & $quake_quakedef.iT_SHOTGUN << i) !== 0) {
				time = $quake_client.cl.item_gettime[i];
				flashon = ss.Int32.trunc(($quake_client.cl.time - time) * 10);
				if (flashon >= 10) {
					if ($quake_client.cl.stats[$quake_quakedef.staT_ACTIVEWEAPON] === $quake_quakedef.iT_SHOTGUN << i) {
						flashon = 1;
					}
					else {
						flashon = 0;
					}
				}
				else {
					flashon = flashon % 5 + 2;
				}
				$quake_sbar.$sbar_DrawPic(i * 24, -16, $quake_sbar.$sb_weapons.get(flashon, i));
				if (flashon > 1) {
					$quake_sbar.$sb_updates = 0;
				}
				// force update to remove flash
			}
		}
		if ($quake_common.rogue) {
			// check for powered up weapon.
			if ($quake_client.cl.stats[$quake_quakedef.staT_ACTIVEWEAPON] >= $quake_quakedef.riT_LAVA_NAILGUN) {
				for (i = 0; i < 5; i++) {
					if ($quake_client.cl.stats[$quake_quakedef.staT_ACTIVEWEAPON] === $quake_quakedef.riT_LAVA_NAILGUN << i) {
						$quake_sbar.$sbar_DrawPic((i + 2) * 24, -16, $quake_sbar.$rsb_weapons[i]);
					}
				}
			}
		}
		// ammo counts
		for (i = 0; i < 4; i++) {
			num = ''.toString() + $quake_client.cl.stats[$quake_quakedef.staT_SHELLS + i];
			if (num.length === 1) {
				num = '  ' + num;
			}
			else if (num.length === 2) {
				num = ' ' + num;
			}
			if (num.charCodeAt(0) !== 32) {
				$quake_sbar.$sbar_DrawCharacter((6 * i + 1) * 8 - 2, -24, 18 + num.charCodeAt(0) - 48);
			}
			if (num.charCodeAt(1) !== 32) {
				$quake_sbar.$sbar_DrawCharacter((6 * i + 2) * 8 - 2, -24, 18 + num.charCodeAt(1) - 48);
			}
			if (num.charCodeAt(2) !== 32) {
				$quake_sbar.$sbar_DrawCharacter((6 * i + 3) * 8 - 2, -24, 18 + num.charCodeAt(2) - 48);
			}
		}
		flashon = 0;
		// items
		for (i = 0; i < 6; i++) {
			if (($quake_client.cl.items & 1 << 17 + i) !== 0) {
				time = $quake_client.cl.item_gettime[17 + i];
				if (time !== 0 && time > $quake_client.cl.time - 2 && flashon !== 0) {
					// flash frame
					$quake_sbar.$sb_updates = 0;
				}
				else {
					//MED 01/04/97 changed keys
					if (!$quake_common.hipnotic || i > 1) {
						$quake_sbar.$sbar_DrawPic(192 + i * 16, -16, $quake_sbar.$sb_items[i]);
					}
				}
				if (time !== 0 && time > $quake_client.cl.time - 2) {
					$quake_sbar.$sb_updates = 0;
				}
			}
		}
		//MED 01/04/97 added hipnotic items
		// hipnotic items
		if ($quake_common.hipnotic) {
			for (i = 0; i < 2; i++) {
				if (($quake_client.cl.items & 1 << 24 + i) !== 0) {
					time = $quake_client.cl.item_gettime[24 + i];
					if (time !== 0 && time > $quake_client.cl.time - 2 && flashon !== 0) {
						// flash frame
						$quake_sbar.$sb_updates = 0;
					}
					else {
						$quake_sbar.$sbar_DrawPic(288 + i * 16, -16, $quake_sbar.$hsb_items[i]);
					}
					if (time !== 0 && time > $quake_client.cl.time - 2) {
						$quake_sbar.$sb_updates = 0;
					}
				}
			}
		}
		if ($quake_common.rogue) {
			// new rogue items
			for (i = 0; i < 2; i++) {
				if (($quake_client.cl.items & 1 << 29 + i) !== 0) {
					time = $quake_client.cl.item_gettime[29 + i];
					if (time !== 0 && time > $quake_client.cl.time - 2 && flashon !== 0) {
						// flash frame
						$quake_sbar.$sb_updates = 0;
					}
					else {
						$quake_sbar.$sbar_DrawPic(288 + i * 16, -16, $quake_sbar.$rsb_items[i]);
					}
					if (time !== 0 && time > $quake_client.cl.time - 2) {
						$quake_sbar.$sb_updates = 0;
					}
				}
			}
		}
		else {
			// sigils
			for (i = 0; i < 4; i++) {
				if (($quake_client.cl.items & 1 << 28 + i) !== 0) {
					time = $quake_client.cl.item_gettime[28 + i];
					if (time !== 0 && time > $quake_client.cl.time - 2 && flashon !== 0) {
						// flash frame
						$quake_sbar.$sb_updates = 0;
					}
					else {
						$quake_sbar.$sbar_DrawPic(288 + i * 8, -16, $quake_sbar.$sb_sigil[i]);
					}
					if (time !== 0 && time > $quake_client.cl.time - 2) {
						$quake_sbar.$sb_updates = 0;
					}
				}
			}
		}
	};
	$quake_sbar.$sbar_DrawFrags = function() {
	};
	$quake_sbar.$sbar_DrawFace = function() {
		var f, anim;
		if (($quake_client.cl.items & 1572864) === 1572864) {
			$quake_sbar.$sbar_DrawPic(112, 0, $quake_sbar.$sb_face_invis_invuln);
			return;
		}
		if (($quake_client.cl.items & $quake_quakedef.iT_QUAD) !== 0) {
			$quake_sbar.$sbar_DrawPic(112, 0, $quake_sbar.$sb_face_quad);
			return;
		}
		if (($quake_client.cl.items & $quake_quakedef.iT_INVISIBILITY) !== 0) {
			$quake_sbar.$sbar_DrawPic(112, 0, $quake_sbar.$sb_face_invis);
			return;
		}
		if (($quake_client.cl.items & $quake_quakedef.iT_INVULNERABILITY) !== 0) {
			$quake_sbar.$sbar_DrawPic(112, 0, $quake_sbar.$sb_face_invuln);
			return;
		}
		if ($quake_client.cl.stats[$quake_quakedef.staT_HEALTH] >= 100) {
			f = 4;
		}
		else {
			f = ss.Int32.div($quake_client.cl.stats[$quake_quakedef.staT_HEALTH], 20);
		}
		if ($quake_client.cl.time <= $quake_client.cl.faceanimtime) {
			anim = 1;
			$quake_sbar.$sb_updates = 0;
			// make sure the anim gets drawn over
		}
		else {
			anim = 0;
		}
		$quake_sbar.$sbar_DrawPic(112, 0, $quake_sbar.$sb_faces.get(f, anim));
	};
	$quake_sbar.sbar_Draw = function() {
		if ($quake_screen.scr_con_current === $quake_screen.vid.height) {
			return;
		}
		// console is full screen
		if ($quake_sbar.$sb_updates >= $quake_screen.vid.numpages) {
			return;
		}
		$quake_screen.scr_copyeverything = true;
		$quake_sbar.$sb_updates++;
		if ($quake_sbar.sb_lines !== 0 && $quake_screen.vid.width > 320) {
			$quake_draw.draw_TileClear(0, $quake_screen.vid.height - $quake_sbar.sb_lines, $quake_screen.vid.width, $quake_sbar.sb_lines);
		}
		if ($quake_sbar.sb_lines > 24) {
			$quake_sbar.$sbar_DrawInventory();
			if ($quake_client.cl.maxclients !== 1) {
				$quake_sbar.$sbar_DrawFrags();
			}
		}
		if ($quake_sbar.$sb_showscores || $quake_client.cl.stats[$quake_quakedef.staT_HEALTH] <= 0) {
			$quake_sbar.$sbar_DrawPic(0, 0, $quake_sbar.$sb_scorebar);
			$quake_sbar.$sbar_DrawScoreboard();
			$quake_sbar.$sb_updates = 0;
		}
		if ($quake_sbar.sb_lines !== 0) {
			$quake_sbar.$sbar_DrawPic(0, 0, $quake_sbar.$sb_sbar);
			// keys (hipnotic only)
			//MED 01/04/97 moved keys here so they would not be overwritten
			if ($quake_common.hipnotic) {
				if (($quake_client.cl.items & $quake_quakedef.iT_KEY1) !== 0) {
					$quake_sbar.$sbar_DrawPic(209, 3, $quake_sbar.$sb_items[0]);
				}
				if (($quake_client.cl.items & $quake_quakedef.iT_KEY2) !== 0) {
					$quake_sbar.$sbar_DrawPic(209, 12, $quake_sbar.$sb_items[1]);
				}
			}
			// armor
			if (($quake_client.cl.items & $quake_quakedef.iT_INVULNERABILITY) !== 0) {
				$quake_sbar.$sbar_DrawNum(24, 0, 666, 3, 1);
				$quake_sbar.$sbar_DrawPic(0, 0, $quake_draw.draw_disc);
			}
			else if ($quake_common.rogue) {
				$quake_sbar.$sbar_DrawNum(24, 0, $quake_client.cl.stats[$quake_quakedef.staT_ARMOR], 3, (($quake_client.cl.stats[$quake_quakedef.staT_ARMOR] <= 25) ? 1 : 0));
				if (($quake_client.cl.items & $quake_quakedef.riT_ARMOR3) !== 0) {
					$quake_sbar.$sbar_DrawPic(0, 0, $quake_sbar.$sb_armor[2]);
				}
				else if (($quake_client.cl.items & $quake_quakedef.riT_ARMOR2) !== 0) {
					$quake_sbar.$sbar_DrawPic(0, 0, $quake_sbar.$sb_armor[1]);
				}
				else if (($quake_client.cl.items & $quake_quakedef.riT_ARMOR1) !== 0) {
					$quake_sbar.$sbar_DrawPic(0, 0, $quake_sbar.$sb_armor[0]);
				}
			}
			else {
				$quake_sbar.$sbar_DrawNum(24, 0, $quake_client.cl.stats[$quake_quakedef.staT_ARMOR], 3, (($quake_client.cl.stats[$quake_quakedef.staT_ARMOR] <= 25) ? 1 : 0));
				if (($quake_client.cl.items & $quake_quakedef.iT_ARMOR3) !== 0) {
					$quake_sbar.$sbar_DrawPic(0, 0, $quake_sbar.$sb_armor[2]);
				}
				else if (($quake_client.cl.items & $quake_quakedef.iT_ARMOR2) !== 0) {
					$quake_sbar.$sbar_DrawPic(0, 0, $quake_sbar.$sb_armor[1]);
				}
				else if (($quake_client.cl.items & $quake_quakedef.iT_ARMOR1) !== 0) {
					$quake_sbar.$sbar_DrawPic(0, 0, $quake_sbar.$sb_armor[0]);
				}
			}
			// face
			$quake_sbar.$sbar_DrawFace();
			// health
			$quake_sbar.$sbar_DrawNum(136, 0, $quake_client.cl.stats[$quake_quakedef.staT_HEALTH], 3, (($quake_client.cl.stats[$quake_quakedef.staT_HEALTH] <= 25) ? 1 : 0));
			// ammo icon
			if ($quake_common.rogue) {
				if (($quake_client.cl.items & $quake_quakedef.riT_SHELLS) !== 0) {
					$quake_sbar.$sbar_DrawPic(224, 0, $quake_sbar.$sb_ammo[0]);
				}
				else if (($quake_client.cl.items & $quake_quakedef.riT_NAILS) !== 0) {
					$quake_sbar.$sbar_DrawPic(224, 0, $quake_sbar.$sb_ammo[1]);
				}
				else if (($quake_client.cl.items & $quake_quakedef.riT_ROCKETS) !== 0) {
					$quake_sbar.$sbar_DrawPic(224, 0, $quake_sbar.$sb_ammo[2]);
				}
				else if (($quake_client.cl.items & $quake_quakedef.riT_CELLS) !== 0) {
					$quake_sbar.$sbar_DrawPic(224, 0, $quake_sbar.$sb_ammo[3]);
				}
				else if (($quake_client.cl.items & $quake_quakedef.riT_LAVA_NAILS) !== 0) {
					$quake_sbar.$sbar_DrawPic(224, 0, $quake_sbar.$rsb_ammo[0]);
				}
				else if (($quake_client.cl.items & $quake_quakedef.riT_PLASMA_AMMO) !== 0) {
					$quake_sbar.$sbar_DrawPic(224, 0, $quake_sbar.$rsb_ammo[1]);
				}
				else if (($quake_client.cl.items & $quake_quakedef.riT_MULTI_ROCKETS) !== 0) {
					$quake_sbar.$sbar_DrawPic(224, 0, $quake_sbar.$rsb_ammo[2]);
				}
			}
			else if (($quake_client.cl.items & $quake_quakedef.iT_SHELLS) !== 0) {
				$quake_sbar.$sbar_DrawPic(224, 0, $quake_sbar.$sb_ammo[0]);
			}
			else if (($quake_client.cl.items & $quake_quakedef.iT_NAILS) !== 0) {
				$quake_sbar.$sbar_DrawPic(224, 0, $quake_sbar.$sb_ammo[1]);
			}
			else if (($quake_client.cl.items & $quake_quakedef.iT_ROCKETS) !== 0) {
				$quake_sbar.$sbar_DrawPic(224, 0, $quake_sbar.$sb_ammo[2]);
			}
			else if (($quake_client.cl.items & $quake_quakedef.iT_CELLS) !== 0) {
				$quake_sbar.$sbar_DrawPic(224, 0, $quake_sbar.$sb_ammo[3]);
			}
			$quake_sbar.$sbar_DrawNum(248, 0, $quake_client.cl.stats[$quake_quakedef.staT_AMMO], 3, (($quake_client.cl.stats[$quake_quakedef.staT_AMMO] <= 10) ? 1 : 0));
		}
		if ($quake_screen.vid.width > 320) {
			if ($quake_client.cl.gametype === $quake_net.gamE_DEATHMATCH) {
				$quake_sbar.$sbar_MiniDeathmatchOverlay();
			}
		}
	};
	$quake_sbar.$sbar_MiniDeathmatchOverlay = function() {
	};
	$quake_sbar.sbar_IntermissionOverlay = function() {
		var pic;
		var dig;
		var num;
		$quake_screen.scr_copyeverything = true;
		$quake_screen.scr_fullupdate = 0;
		pic = $quake_draw.draw_CachePic('gfx/complete.lmp');
		$quake_draw.draw_Pic(64, 24, pic);
		pic = $quake_draw.draw_CachePic('gfx/inter.lmp');
		$quake_draw.draw_TransPic(0, 56, pic);
	};
	$quake_sbar.sbar_FinaleOverlay = function() {
		var pic;
		$quake_screen.scr_copyeverything = true;
		pic = $quake_draw.draw_CachePic('gfx/finale.lmp');
		$quake_draw.draw_TransPic(ss.Int32.div($quake_screen.vid.width - pic.width, 2), 16, pic);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.screen
	var $quake_screen = function() {
	};
	$quake_screen.prototype = {
		$writePCXfile: function(filename, data, width, height, rowbytes, palette) {
		},
		$scR_ModalMessage: function(text) {
			return -1;
		},
		$scR_BringDownConsole: function() {
			var i;
			$quake_screen.scr_centertime_off = 0;
			for (i = 0; i < 20 && $quake_screen.$scr_conlines !== $quake_screen.scr_con_current; i++) {
				$quake_screen.scR_UpdateScreen();
			}
			$quake_vid.viD_SetPalette($quake_host.host_basepal);
		},
		$scR_UpdateWholeScreen: function() {
			$quake_screen.scr_fullupdate = 0;
			$quake_screen.scR_UpdateScreen();
		}
	};
	$quake_screen.scR_CenterPrint = function(str) {
		$quake_screen.$scr_centerstring = str;
		$quake_screen.scr_centertime_off = $quake_screen.$scr_centertime.value;
		$quake_screen.$scr_centertime_start = $quake_client.cl.time;
		// count the number of lines for centering
		$quake_screen.$scr_center_lines = 1;
		for (var i = 0; i < str.length; i++) {
			if (str.charCodeAt(i) === 10) {
				$quake_screen.$scr_center_lines++;
			}
		}
	};
	$quake_screen.$scR_EraseCenterString = function() {
		var y;
		if ($quake_screen.$scr_erase_center++ > $quake_screen.vid.numpages) {
			$quake_screen.$scr_erase_lines = 0;
			return;
		}
		if ($quake_screen.$scr_center_lines <= 4) {
			y = ss.Int32.trunc($quake_screen.vid.height * 0.35);
		}
		else {
			y = 48;
		}
		$quake_screen.scr_copytop = true;
		$quake_draw.draw_TileClear(0, y, $quake_screen.vid.width, 8 * $quake_screen.$scr_erase_lines);
	};
	$quake_screen.$scR_DrawCenterString = function() {
		var start;
		var l;
		var j;
		var x, y;
		var remaining;
		// the finale prints the characters one at a time
		if ($quake_client.cl.intermission !== 0) {
			remaining = ss.Int32.trunc($quake_screen.$scr_printspeed.value * ($quake_client.cl.time - $quake_screen.$scr_centertime_start));
		}
		else {
			remaining = 9999;
		}
		$quake_screen.$scr_erase_center = 0;
		start = 0;
		if ($quake_screen.$scr_center_lines <= 4) {
			y = ss.Int32.trunc($quake_screen.vid.height * 0.35);
		}
		else {
			y = 48;
		}
		do {
			// scan the width of the line
			for (l = 0; l < 40; l++) {
				if (start + l === $quake_screen.$scr_centerstring.length || $quake_screen.$scr_centerstring.charCodeAt(start + l) === 10) {
					break;
				}
			}
			x = ss.Int32.div($quake_screen.vid.width - l * 8, 2);
			for (j = 0; j < l; j++, x += 8) {
				$quake_draw.draw_Character(x, y, $quake_screen.$scr_centerstring.charCodeAt(start + j));
				if (remaining-- === 0) {
					return;
				}
			}
			y += 8;
			while (start !== $quake_screen.$scr_centerstring.length && $quake_screen.$scr_centerstring.charCodeAt(start) !== 10) {
				start++;
			}
			if (start === $quake_screen.$scr_centerstring.length) {
				break;
			}
			start++;
			// skip the \n
		} while (true);
	};
	$quake_screen.$scR_CheckDrawCenterString = function() {
		$quake_screen.scr_copytop = true;
		if ($quake_screen.$scr_center_lines > $quake_screen.$scr_erase_lines) {
			$quake_screen.$scr_erase_lines = $quake_screen.$scr_center_lines;
		}
		$quake_screen.scr_centertime_off -= $quake_host.host_frametime;
		if ($quake_screen.scr_centertime_off <= 0 && $quake_client.cl.intermission === 0) {
			return;
		}
		if ($quake_keys.key_dest !== 0) {
			return;
		}
		$quake_screen.$scR_DrawCenterString();
	};
	$quake_screen.$calcFov = function(fov_x, width, height) {
		var a;
		var x;
		if (fov_x < 1 || fov_x > 179) {
			$quake_sys_linux.sys_Error('Bad fov: ' + fov_x);
		}
		x = width / Math.tan(fov_x / 360 * $quake_mathlib.m_PI);
		a = Math.atan(height / x);
		a = a * 360 / $quake_mathlib.m_PI;
		return a;
	};
	$quake_screen.$scR_CalcRefdef = function() {
		var vrect = new $quake_vid$vrect_t();
		var size;
		$quake_screen.scr_fullupdate = 0;
		// force a background redraw
		$quake_screen.vid.recalc_refdef = false;
		// force the status bar to redraw
		$quake_sbar.sbar_Changed();
		//========================================
		// bound viewsize
		if ($quake_screen.scr_viewsize.value < 30) {
			$quake_cvar_t.cvar_Set('viewsize', '30');
		}
		if ($quake_screen.scr_viewsize.value > 120) {
			$quake_cvar_t.cvar_Set('viewsize', '120');
		}
		// bound field of view
		if ($quake_screen.scr_fov.value < 10) {
			$quake_cvar_t.cvar_Set('fov', '10');
		}
		if ($quake_screen.scr_fov.value > 170) {
			$quake_cvar_t.cvar_Set('fov', '170');
		}
		$quake_render.r_refdef.fov_x = $quake_screen.scr_fov.value;
		$quake_render.r_refdef.fov_y = $quake_screen.$calcFov($quake_render.r_refdef.fov_x, $quake_render.r_refdef.vrect.width, $quake_render.r_refdef.vrect.height);
		// intermission is always full screen	
		if ($quake_client.cl.intermission !== 0) {
			size = 120;
		}
		else {
			size = $quake_screen.scr_viewsize.value;
		}
		if (size >= 120) {
			$quake_sbar.sb_lines = 0;
		}
		else if (size >= 110) {
			$quake_sbar.sb_lines = 24;
		}
		else {
			$quake_sbar.sb_lines = 48;
		}
		// these calculations mirror those in R_Init() for r_refdef, but take no
		// account of water warping
		vrect.x = 0;
		vrect.y = 0;
		vrect.width = $quake_screen.vid.width;
		vrect.height = $quake_screen.vid.height;
		$quake_render.r_SetVrect(vrect, $quake_screen.scr_vrect, $quake_sbar.sb_lines);
		// guard against going from one mode to another that's less than half the
		// vertical resolution
		if ($quake_screen.scr_con_current > $quake_screen.vid.height) {
			$quake_screen.scr_con_current = $quake_screen.vid.height;
		}
		// notify the refresh of the change
		$quake_render.r_ViewChanged(vrect, $quake_sbar.sb_lines, $quake_screen.vid.aspect);
	};
	$quake_screen.$scR_SizeUp_f = function() {
		$quake_cvar_t.cvar_SetValue('viewsize', $quake_screen.scr_viewsize.value + 10);
		$quake_screen.vid.recalc_refdef = true;
	};
	$quake_screen.$scR_SizeDown_f = function() {
		$quake_cvar_t.cvar_SetValue('viewsize', $quake_screen.scr_viewsize.value - 10);
		$quake_screen.vid.recalc_refdef = true;
	};
	$quake_screen.scR_Init = function() {
		$quake_cvar_t.cvar_RegisterVariable($quake_screen.scr_fov);
		$quake_cvar_t.cvar_RegisterVariable($quake_screen.scr_viewsize);
		$quake_cvar_t.cvar_RegisterVariable($quake_screen.$scr_conspeed);
		$quake_cvar_t.cvar_RegisterVariable($quake_screen.$scr_showram);
		$quake_cvar_t.cvar_RegisterVariable($quake_screen.$scr_showturtle);
		$quake_cvar_t.cvar_RegisterVariable($quake_screen.$scr_showpause);
		$quake_cvar_t.cvar_RegisterVariable($quake_screen.$scr_centertime);
		$quake_cvar_t.cvar_RegisterVariable($quake_screen.$scr_printspeed);
		//
		// register our commands
		//
		$quake_cmd.cmd_AddCommand('screenshot', $quake_screen.$scR_ScreenShot_f);
		$quake_cmd.cmd_AddCommand('sizeup', $quake_screen.$scR_SizeUp_f);
		$quake_cmd.cmd_AddCommand('sizedown', $quake_screen.$scR_SizeDown_f);
		$quake_screen.$scr_ram = $quake_draw.draw_PicFromWad('ram');
		$quake_screen.$scr_net = $quake_draw.draw_PicFromWad('net');
		$quake_screen.$scr_turtle = $quake_draw.draw_PicFromWad('turtle');
		$quake_screen.$scr_initialized = true;
	};
	$quake_screen.$scR_DrawRam = function() {
		if ($quake_screen.$scr_showram.value === 0) {
			return;
		}
		return;
		$quake_draw.draw_Pic($quake_screen.scr_vrect.x + 32, $quake_screen.scr_vrect.y, $quake_screen.$scr_ram);
	};
	$quake_screen.$scR_DrawTurtle = function() {
		if ($quake_screen.$scr_showturtle.value === 0) {
			return;
		}
		if ($quake_host.host_frametime < 0.1) {
			$quake_screen.$count = 0;
			return;
		}
		$quake_screen.$count++;
		if ($quake_screen.$count < 3) {
			return;
		}
		$quake_draw.draw_Pic($quake_screen.scr_vrect.x, $quake_screen.scr_vrect.y, $quake_screen.$scr_turtle);
	};
	$quake_screen.$scR_DrawNet = function() {
		if ($quake_host.realtime - $quake_client.cl.last_received_message < 0.3) {
			return;
		}
		if ($quake_client.cls.demoplayback) {
			return;
		}
		$quake_draw.draw_Pic($quake_screen.scr_vrect.x + 64, $quake_screen.scr_vrect.y, $quake_screen.$scr_net);
	};
	$quake_screen.$scR_DrawPause = function() {
		var pic;
		if ($quake_screen.$scr_showpause.value === 0) {
			return;
		}
		if (!$quake_client.cl.paused) {
			return;
		}
		pic = $quake_draw.draw_CachePic('gfx/pause.lmp');
		$quake_draw.draw_Pic(ss.Int32.div($quake_screen.vid.width - pic.width, 2), ss.Int32.div($quake_screen.vid.height - 48 - pic.height, 2), pic);
	};
	$quake_screen.$scR_DrawLoading = function() {
		var pic;
		if (!$quake_screen.$scr_drawloading) {
			return;
		}
		pic = $quake_draw.draw_CachePic('gfx/loading.lmp');
		$quake_draw.draw_Pic(ss.Int32.div($quake_screen.vid.width - pic.width, 2), ss.Int32.div($quake_screen.vid.height - 48 - pic.height, 2), pic);
	};
	$quake_screen.$scR_SetUpToDrawConsole = function() {
		$quake_console.con_CheckResize();
		if ($quake_screen.$scr_drawloading) {
			return;
		}
		// never a console with loading plaque
		// decide on the height of the console
		$quake_console.con_forcedup = $quake_client.cls.signon !== $quake_client.SIGNONS;
		if ($quake_console.con_forcedup) {
			$quake_screen.$scr_conlines = $quake_screen.vid.height;
			// full screen
			$quake_screen.scr_con_current = $quake_screen.$scr_conlines;
		}
		else if ($quake_keys.key_dest === 1) {
			$quake_screen.$scr_conlines = ss.Int32.div($quake_screen.vid.height, 2);
		}
		else {
			$quake_screen.$scr_conlines = 0;
		}
		// none visible
		if ($quake_screen.$scr_conlines < $quake_screen.scr_con_current) {
			$quake_screen.scr_con_current -= $quake_screen.$scr_conspeed.value * $quake_host.host_frametime;
			if ($quake_screen.$scr_conlines > $quake_screen.scr_con_current) {
				$quake_screen.scr_con_current = $quake_screen.$scr_conlines;
			}
		}
		else if ($quake_screen.$scr_conlines > $quake_screen.scr_con_current) {
			$quake_screen.scr_con_current += $quake_screen.$scr_conspeed.value * $quake_host.host_frametime;
			if ($quake_screen.$scr_conlines < $quake_screen.scr_con_current) {
				$quake_screen.scr_con_current = $quake_screen.$scr_conlines;
			}
		}
		if ($quake_screen.$clearconsole++ < $quake_screen.vid.numpages) {
			$quake_screen.scr_copytop = true;
			$quake_draw.draw_TileClear(0, ss.Int32.trunc($quake_screen.scr_con_current), $quake_screen.vid.width, $quake_screen.vid.height - ss.Int32.trunc($quake_screen.scr_con_current));
			$quake_sbar.sbar_Changed();
		}
		else if ($quake_screen.clearnotify++ < $quake_screen.vid.numpages) {
			$quake_screen.scr_copytop = true;
			$quake_draw.draw_TileClear(0, 0, $quake_screen.vid.width, $quake_console.con_notifylines);
		}
		else {
			$quake_console.con_notifylines = 0;
		}
	};
	$quake_screen.$scR_DrawConsole = function() {
		if ($quake_screen.scr_con_current !== 0) {
			$quake_screen.scr_copyeverything = true;
			$quake_console.con_DrawConsole(ss.Int32.trunc($quake_screen.scr_con_current), true);
			$quake_screen.$clearconsole = 0;
		}
		else {
			if ($quake_keys.key_dest === 0 || $quake_keys.key_dest === 2) {
				$quake_console.con_DrawNotify();
			}
			// only draw notify in game
		}
	};
	$quake_screen.$scR_ScreenShot_f = function() {
	};
	$quake_screen.scR_BeginLoadingPlaque = function() {
		$quake_sound.s_StopAllSounds(true);
		if ($quake_client.cls.state !== 2) {
			return;
		}
		if ($quake_client.cls.signon !== $quake_client.SIGNONS) {
			return;
		}
		// redraw with no console and the loading plaque
		$quake_console.con_ClearNotify();
		$quake_screen.scr_centertime_off = 0;
		$quake_screen.scr_con_current = 0;
		$quake_screen.$scr_drawloading = true;
		$quake_screen.scr_fullupdate = 0;
		$quake_sbar.sbar_Changed();
		$quake_screen.scR_UpdateScreen();
		$quake_screen.$scr_drawloading = false;
		$quake_screen.scr_disabled_for_loading = true;
		$quake_screen.$scr_disabled_time = $quake_host.realtime;
		$quake_screen.scr_fullupdate = 0;
	};
	$quake_screen.scR_EndLoadingPlaque = function() {
		$quake_screen.scr_disabled_for_loading = false;
		$quake_screen.scr_fullupdate = 0;
		$quake_console.con_ClearNotify();
	};
	$quake_screen.$scR_DrawNotifyString = function() {
		var start;
		var l;
		var j;
		var x, y;
		start = 0;
		y = ss.Int32.trunc($quake_screen.vid.height * 0.35);
		do {
			// scan the width of the line
			for (l = 0; l < 40; l++) {
				if (start + l === $quake_screen.$scr_notifystring.length || $quake_screen.$scr_notifystring.charCodeAt(start + l) === 10) {
					break;
				}
			}
			x = ss.Int32.div($quake_screen.vid.width - l * 8, 2);
			for (j = 0; j < l; j++, x += 8) {
				$quake_draw.draw_Character(x, y, $quake_screen.$scr_notifystring.charCodeAt(start + j));
			}
			y += 8;
			while (start !== $quake_screen.$scr_notifystring.length && $quake_screen.$scr_notifystring.charCodeAt(start) !== 10) {
				start++;
			}
			if (start === $quake_screen.$scr_notifystring.length) {
				break;
			}
			start++;
			// skip the \n
		} while (true);
	};
	$quake_screen.scR_UpdateScreen = function() {
		var vrect = new $quake_vid$vrect_t();
		if ($quake_screen.$scr_skipupdate || $quake_screen.$block_drawing) {
			return;
		}
		$quake_screen.scr_copytop = false;
		$quake_screen.scr_copyeverything = false;
		if ($quake_screen.scr_disabled_for_loading) {
			if ($quake_host.realtime - $quake_screen.$scr_disabled_time > 60) {
				$quake_screen.scr_disabled_for_loading = false;
				$quake_console.con_Printf('load failed.\n');
			}
			else {
				return;
			}
		}
		if ($quake_client.cls.state === 0) {
			return;
		}
		// stdout only
		if (!$quake_screen.$scr_initialized || !$quake_console.con_initialized) {
			return;
		}
		// not initialized yet
		if ($quake_screen.scr_viewsize.value !== $quake_screen.$oldscr_viewsize) {
			$quake_screen.$oldscr_viewsize = $quake_screen.scr_viewsize.value;
			$quake_screen.vid.recalc_refdef = true;
		}
		//
		// check for vid changes
		//
		if ($quake_screen.$oldfov !== $quake_screen.scr_fov.value) {
			$quake_screen.$oldfov = $quake_screen.scr_fov.value;
			$quake_screen.vid.recalc_refdef = true;
		}
		if ($quake_screen.$oldscreensize !== $quake_screen.scr_viewsize.value) {
			$quake_screen.$oldscreensize = $quake_screen.scr_viewsize.value;
			$quake_screen.vid.recalc_refdef = true;
		}
		if ($quake_screen.vid.recalc_refdef) {
			// something changed, so reorder the screen
			$quake_screen.$scR_CalcRefdef();
		}
		if ($quake_screen.scr_fullupdate++ < $quake_screen.vid.numpages) {
			// clear the entire screen
			$quake_screen.scr_copyeverything = true;
			$quake_draw.draw_TileClear(0, 0, $quake_screen.vid.width, $quake_screen.vid.height);
			$quake_sbar.sbar_Changed();
		}
		$quake_screen.$scR_SetUpToDrawConsole();
		$quake_screen.$scR_EraseCenterString();
		$quake_view.v_RenderView();
		if ($quake_screen.$scr_drawdialog) {
			$quake_sbar.sbar_Draw();
			$quake_draw.draw_FadeScreen();
			$quake_screen.$scR_DrawNotifyString();
			$quake_screen.scr_copyeverything = true;
		}
		else if ($quake_screen.$scr_drawloading) {
			$quake_screen.$scR_DrawLoading();
			$quake_sbar.sbar_Draw();
		}
		else if ($quake_client.cl.intermission === 1 && $quake_keys.key_dest === 0) {
			$quake_sbar.sbar_IntermissionOverlay();
		}
		else if ($quake_client.cl.intermission === 2 && $quake_keys.key_dest === 0) {
			$quake_sbar.sbar_FinaleOverlay();
			$quake_screen.$scR_CheckDrawCenterString();
		}
		else if ($quake_client.cl.intermission === 3 && $quake_keys.key_dest === 0) {
			$quake_screen.$scR_CheckDrawCenterString();
		}
		else {
			$quake_screen.$scR_DrawRam();
			$quake_screen.$scR_DrawNet();
			$quake_screen.$scR_DrawTurtle();
			$quake_screen.$scR_DrawPause();
			$quake_screen.$scR_CheckDrawCenterString();
			$quake_sbar.sbar_Draw();
			$quake_screen.$scR_DrawConsole();
			$quake_menu.m_Draw();
		}
		$quake_view.v_UpdatePalette();
		//
		// update one of three areas
		//
		if ($quake_screen.scr_copyeverything) {
			vrect.x = 0;
			vrect.y = 0;
			vrect.width = $quake_screen.vid.width;
			vrect.height = $quake_screen.vid.height;
			vrect.pnext = null;
			$quake_vid.viD_Update(vrect);
		}
		else if ($quake_screen.scr_copytop) {
			vrect.x = 0;
			vrect.y = 0;
			vrect.width = $quake_screen.vid.width;
			vrect.height = $quake_screen.vid.height - $quake_sbar.sb_lines;
			vrect.pnext = null;
			$quake_vid.viD_Update(vrect);
		}
		else {
			vrect.x = $quake_screen.scr_vrect.x;
			vrect.y = $quake_screen.scr_vrect.y;
			vrect.width = $quake_screen.scr_vrect.width;
			vrect.height = $quake_screen.scr_vrect.height;
			vrect.pnext = null;
			$quake_vid.viD_Update(vrect);
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.server
	var $quake_server = function() {
	};
	$quake_server.prototype = {
		$sV_CheckAllEnts: function() {
		}
	};
	$quake_server.sV_Init = function() {
		var i;
		$quake_cvar_t.cvar_RegisterVariable($quake_server.$sv_maxvelocity);
		$quake_cvar_t.cvar_RegisterVariable($quake_server.sv_gravity);
		$quake_cvar_t.cvar_RegisterVariable($quake_server.$sv_friction);
		$quake_cvar_t.cvar_RegisterVariable($quake_server.$sv_edgefriction);
		$quake_cvar_t.cvar_RegisterVariable($quake_server.$sv_stopspeed);
		$quake_cvar_t.cvar_RegisterVariable($quake_server.$sv_maxspeed);
		$quake_cvar_t.cvar_RegisterVariable($quake_server.$sv_accelerate);
		$quake_cvar_t.cvar_RegisterVariable($quake_server.$sv_idealpitchscale);
		//cvar_t.Cvar_RegisterVariable(sv_aim);
		$quake_cvar_t.cvar_RegisterVariable($quake_server.$sv_nostep);
		for (i = 0; i < $quake_quakedef.maX_MODELS; i++) {
			$quake_server.$localmodels[i] = '*' + i;
		}
	};
	$quake_server.$sV_SendServerinfo = function(client) {
		var i;
		var s;
		var message;
		$quake_common.msG_WriteByte(client.message, $quake_net.svc_print);
		message = '\nVERSION ' + $quake_quakedef.VERSION + ' SERVER (' + $quake_prog.pr_crc + ' CRC)';
		$quake_common.msG_WriteString(client.message, message);
		$quake_common.msG_WriteByte(client.message, $quake_net.svc_serverinfo);
		$quake_common.msG_WriteLong(client.message, $quake_net.protocoL_VERSION);
		$quake_common.msG_WriteByte(client.message, $quake_server.svs.maxclients);
		if ($quake_host.coop.value === 0 && $quake_host.deathmatch.value !== 0) {
			$quake_common.msG_WriteByte(client.message, $quake_net.gamE_DEATHMATCH);
		}
		else {
			$quake_common.msG_WriteByte(client.message, $quake_net.gamE_COOP);
		}
		//sprintf(message, pr_strings + sv.edicts->v.message);
		message = $quake_prog.pr_string($quake_server.sv.edicts[0].v.message);
		$quake_common.msG_WriteString(client.message, message);
		for (i = 1, s = $quake_server.sv.model_precache[i]; ss.isValue(s); i++) {
			s = $quake_server.sv.model_precache[i];
			$quake_common.msG_WriteString(client.message, s);
		}
		$quake_common.msG_WriteByte(client.message, 0);
		for (i = 1, s = $quake_server.sv.sound_precache[i]; ss.isValue(s); i++) {
			s = $quake_server.sv.sound_precache[i];
			$quake_common.msG_WriteString(client.message, s);
		}
		$quake_common.msG_WriteByte(client.message, 0);
		// send music
		$quake_common.msG_WriteByte(client.message, $quake_net.svc_cdtrack);
		$quake_common.msG_WriteByte(client.message, ss.Int32.trunc($quake_server.sv.edicts[0].v.sounds));
		$quake_common.msG_WriteByte(client.message, ss.Int32.trunc($quake_server.sv.edicts[0].v.sounds));
		// set view	
		$quake_common.msG_WriteByte(client.message, $quake_net.svc_setview);
		$quake_common.msG_WriteShort(client.message, $quake_prog.nuM_FOR_EDICT(client.edict));
		$quake_common.msG_WriteByte(client.message, $quake_net.svc_signonnum);
		$quake_common.msG_WriteByte(client.message, 1);
		client.sendsignon = true;
		client.spawned = false;
		// need prespawn, spawn, etc
	};
	$quake_server.$sV_ConnectClient = function(clientnum) {
		var ent;
		var client;
		var edictnum;
		var netconnection;
		var i;
		var spawn_parms = new Array($quake_server.nuM_SPAWN_PARMS);
		client = $quake_server.svs.clients[clientnum];
		$quake_console.con_DPrintf('Client ' + client.netconnection.address + ' connected\n');
		edictnum = clientnum + 1;
		ent = $quake_prog.edicT_NUM(edictnum);
		// set up the client_t
		netconnection = client.netconnection;
		client.netconnection = netconnection;
		client.name = 'unconnected';
		client.active = true;
		client.spawned = false;
		client.edict = ent;
		client.message.data = client.msgbuf;
		client.message.maxsize = client.msgbuf.length;
		client.message.allowoverflow = true;
		// we can catch it*/
		client.privileged = false;
		{
			// call the progs to get default spawn parms for the new client
			$quake_prog.pR_ExecuteProgram($quake_prog.pr_functions[$quake_prog.pr_global_struct[0].setNewParms]);
			for (i = 0; i < $quake_server.nuM_SPAWN_PARMS; i++) {
				client.spawn_parms[i] = $quake_prog.cast_float($quake_prog.pr_globals_read(43 + i));
			}
		}
		$quake_server.$sV_SendServerinfo(client);
	};
	$quake_server.sV_CheckForNewClients = function() {
		var ret;
		var i;
		//
		// check for new connections
		//
		while (true) {
			ret = $quake_net.neT_CheckNewConnections();
			if (ss.isNullOrUndefined(ret)) {
				break;
			}
			// 
			// init a new client structure
			//	
			for (i = 0; i < $quake_server.svs.maxclients; i++) {
				if (!$quake_server.svs.clients[i].active) {
					break;
				}
			}
			if (i === $quake_server.svs.maxclients) {
				$quake_sys_linux.sys_Error('Host_CheckForNewClients: no free clients');
			}
			$quake_server.svs.clients[i].netconnection = ret;
			$quake_server.$sV_ConnectClient(i);
			$quake_net.net_activeconnections++;
		}
	};
	$quake_server.sV_ClearDatagram = function() {
		$quake_common.sZ_Clear($quake_server.sv.datagram);
	};
	$quake_server.$sV_WriteEntitiesToClient = function(clent, msg) {
		var e, i;
		var bits;
		var org = new Array(3);
		var miss;
		var ent;
		// send over all entities (excpet the client) that touch the pvs
		for (e = 1; e < $quake_server.sv.num_edicts; e++) {
			ent = $quake_server.sv.edicts[e];
			// ignore if not touching a PV leaf
			if (!ss.referenceEquals(ent, clent)) {
				// ignore ents without visible models
				if (ent.v.modelindex === 0 || ss.isNullOrUndefined($quake_prog.pr_string(ent.v.model))) {
					continue;
				}
			}
			if (msg.maxsize - msg.cursize < 16) {
				$quake_console.con_Printf('packet overflow\n');
				return;
			}
			// send an update
			bits = 0;
			for (i = 0; i < 3; i++) {
				miss = ent.v.origin[i] - ent.baseline.origin[i];
				if (miss < -0.1 || miss > 0.1) {
					bits |= $quake_net.u_ORIGIN1 << i;
				}
			}
			if (ent.v.angles[0] !== ent.baseline.angles[0]) {
				bits |= $quake_net.u_ANGLE1;
			}
			if (ent.v.angles[1] !== ent.baseline.angles[1]) {
				bits |= $quake_net.u_ANGLE2;
			}
			if (ent.v.angles[2] !== ent.baseline.angles[2]) {
				bits |= $quake_net.u_ANGLE3;
			}
			if (ent.v.movetype === 4) {
				bits |= $quake_net.u_NOLERP;
			}
			// don't mess up the step animation
			if (ent.baseline.colormap !== ent.v.colormap) {
				bits |= $quake_net.u_COLORMAP;
			}
			if (ent.baseline.skin !== ent.v.skin) {
				bits |= $quake_net.u_SKIN;
			}
			if (ent.baseline.frame !== ent.v.frame) {
				bits |= $quake_net.u_FRAME;
			}
			if (ent.baseline.effects !== ent.v.effects) {
				bits |= $quake_net.u_EFFECTS;
			}
			if (ent.baseline.modelindex !== ent.v.modelindex) {
				bits |= $quake_net.u_MODEL;
			}
			if (e >= 256) {
				bits |= $quake_net.u_LONGENTITY;
			}
			if (bits >= 256) {
				bits |= $quake_net.u_MOREBITS;
			}
			//
			// write the message
			//
			$quake_common.msG_WriteByte(msg, bits | $quake_net.u_SIGNAL);
			if ((bits & $quake_net.u_MOREBITS) !== 0) {
				$quake_common.msG_WriteByte(msg, bits >> 8);
			}
			if ((bits & $quake_net.u_LONGENTITY) !== 0) {
				$quake_common.msG_WriteShort(msg, e);
			}
			else {
				$quake_common.msG_WriteByte(msg, e);
			}
			if ((bits & $quake_net.u_MODEL) !== 0) {
				$quake_common.msG_WriteByte(msg, ss.Int32.trunc(ent.v.modelindex));
			}
			if ((bits & $quake_net.u_FRAME) !== 0) {
				$quake_common.msG_WriteByte(msg, ss.Int32.trunc(ent.v.frame));
			}
			if ((bits & $quake_net.u_COLORMAP) !== 0) {
				$quake_common.msG_WriteByte(msg, ss.Int32.trunc(ent.v.colormap));
			}
			if ((bits & $quake_net.u_SKIN) !== 0) {
				$quake_common.msG_WriteByte(msg, ss.Int32.trunc(ent.v.skin));
			}
			if ((bits & $quake_net.u_EFFECTS) !== 0) {
				$quake_common.msG_WriteByte(msg, ss.Int32.trunc(ent.v.effects));
			}
			if ((bits & $quake_net.u_ORIGIN1) !== 0) {
				$quake_common.msG_WriteCoord(msg, ent.v.origin[0]);
			}
			if ((bits & $quake_net.u_ANGLE1) !== 0) {
				$quake_common.msG_WriteAngle(msg, ent.v.angles[0]);
			}
			if ((bits & $quake_net.u_ORIGIN2) !== 0) {
				$quake_common.msG_WriteCoord(msg, ent.v.origin[1]);
			}
			if ((bits & $quake_net.u_ANGLE2) !== 0) {
				$quake_common.msG_WriteAngle(msg, ent.v.angles[1]);
			}
			if ((bits & $quake_net.u_ORIGIN3) !== 0) {
				$quake_common.msG_WriteCoord(msg, ent.v.origin[2]);
			}
			if ((bits & $quake_net.u_ANGLE3) !== 0) {
				$quake_common.msG_WriteAngle(msg, ent.v.angles[2]);
			}
		}
	};
	$quake_server.$sV_CleanupEnts = function() {
		var e;
		var ent;
		for (e = 1; e < $quake_server.sv.num_edicts; e++) {
			ent = $quake_server.sv.edicts[e];
			ent.v.effects = ss.Int32.trunc(ent.v.effects) & -3;
		}
	};
	$quake_server.sV_WriteClientdataToMessage = function(ent, msg) {
		var bits;
		var i;
		var other;
		var items;
		//
		// send a damage message
		//
		if (ent.v.dmg_take !== 0 || ent.v.dmg_save !== 0) {
			other = $quake_prog.proG_TO_EDICT(ent.v.dmg_inflictor);
			$quake_common.msG_WriteByte(msg, $quake_net.svc_damage);
			$quake_common.msG_WriteByte(msg, ss.Int32.trunc(ent.v.dmg_save));
			$quake_common.msG_WriteByte(msg, ss.Int32.trunc(ent.v.dmg_take));
			for (i = 0; i < 3; i++) {
				$quake_common.msG_WriteCoord(msg, other.v.origin[i] + 0.5 * (other.v.mins[i] + other.v.maxs[i]));
			}
			ent.v.dmg_take = 0;
			ent.v.dmg_save = 0;
		}
		//
		// send the current viewpos offset from the view entity
		//
		$quake_server.$sV_SetIdealPitch();
		// how much to look up / down ideally
		// a fixangle might get lost in a dropped packet.  Oh well.
		if (ent.v.fixangle !== 0) {
			$quake_common.msG_WriteByte(msg, $quake_net.svc_setangle);
			for (i = 0; i < 3; i++) {
				$quake_common.msG_WriteAngle(msg, ent.v.angles[i]);
			}
			ent.v.fixangle = 0;
		}
		bits = 0;
		if (ent.v.view_ofs[2] !== 22) {
			bits |= $quake_net.sU_VIEWHEIGHT;
		}
		if (ent.v.idealpitch !== 0) {
			bits |= $quake_net.sU_IDEALPITCH;
		}
		// stuff the sigil bits into the high bits of items for sbar, or else
		// mix in items2
		//val = GetEdictFieldValue(ent, "items2");
		//if (val)
		//items = (int)ent->v.items | ((int)val->_float << 23);
		//else
		items = ss.Int32.trunc(ent.v.items) | ss.Int32.trunc($quake_prog.pr_global_struct[0].serverflags) << 28;
		bits |= $quake_net.sU_ITEMS;
		if ((ss.Int32.trunc(ent.v.flags) & $quake_server.fL_ONGROUND) !== 0) {
			bits |= $quake_net.sU_ONGROUND;
		}
		if (ent.v.waterlevel >= 2) {
			bits |= $quake_net.sU_INWATER;
		}
		for (i = 0; i < 3; i++) {
			if (ent.v.punchangle[i] !== 0) {
				bits |= $quake_net.sU_PUNCH1 << i;
			}
			if (ent.v.velocity[i] !== 0) {
				bits |= $quake_net.sU_VELOCITY1 << i;
			}
		}
		if (ent.v.weaponframe !== 0) {
			bits |= $quake_net.sU_WEAPONFRAME;
		}
		if (ent.v.armorvalue !== 0) {
			bits |= $quake_net.sU_ARMOR;
		}
		//	if (ent.v.weapon != 0)
		bits |= $quake_net.sU_WEAPON;
		// send the data
		$quake_common.msG_WriteByte(msg, $quake_net.svc_clientdata);
		$quake_common.msG_WriteShort(msg, bits);
		if ((bits & $quake_net.sU_VIEWHEIGHT) !== 0) {
			$quake_common.msG_WriteChar(msg, ss.Int32.trunc(ent.v.view_ofs[2]));
		}
		if ((bits & $quake_net.sU_IDEALPITCH) !== 0) {
			$quake_common.msG_WriteChar(msg, ss.Int32.trunc(ent.v.idealpitch));
		}
		for (i = 0; i < 3; i++) {
			if ((bits & $quake_net.sU_PUNCH1 << i) !== 0) {
				$quake_common.msG_WriteChar(msg, ss.Int32.trunc(ent.v.punchangle[i]));
			}
			if ((bits & $quake_net.sU_VELOCITY1 << i) !== 0) {
				$quake_common.msG_WriteChar(msg, ss.Int32.div(ss.Int32.trunc(ent.v.velocity[i]), 16));
			}
		}
		// [always sent]	if (bits & SU_ITEMS)
		$quake_common.msG_WriteLong(msg, items);
		if ((bits & $quake_net.sU_WEAPONFRAME) !== 0) {
			$quake_common.msG_WriteByte(msg, ss.Int32.trunc(ent.v.weaponframe));
		}
		if ((bits & $quake_net.sU_ARMOR) !== 0) {
			$quake_common.msG_WriteByte(msg, ss.Int32.trunc(ent.v.armorvalue));
		}
		if ((bits & $quake_net.sU_WEAPON) !== 0) {
			$quake_common.msG_WriteByte(msg, $quake_server.sV_ModelIndex($quake_prog.pr_string(ent.v.weaponmodel)));
		}
		$quake_common.msG_WriteShort(msg, ss.Int32.trunc(ent.v.health));
		$quake_common.msG_WriteByte(msg, ss.Int32.trunc(ent.v.currentammo));
		$quake_common.msG_WriteByte(msg, ss.Int32.trunc(ent.v.ammo_shells));
		$quake_common.msG_WriteByte(msg, ss.Int32.trunc(ent.v.ammo_nails));
		$quake_common.msG_WriteByte(msg, ss.Int32.trunc(ent.v.ammo_rockets));
		$quake_common.msG_WriteByte(msg, ss.Int32.trunc(ent.v.ammo_cells));
		if ($quake_common.standard_quake) {
			$quake_common.msG_WriteByte(msg, ss.Int32.trunc(ent.v.weapon));
		}
		else {
			for (i = 0; i < 32; i++) {
				if ((ss.Int32.trunc(ent.v.weapon) & 1 << i) !== 0) {
					$quake_common.msG_WriteByte(msg, i);
					break;
				}
			}
		}
	};
	$quake_server.$sV_SendClientDatagram = function(client) {
		var buf = new Uint8Array($quake_quakedef.maX_DATAGRAM);
		var msg = new $quake_common$sizebuf_t();
		msg.data = buf;
		msg.maxsize = buf.length;
		msg.cursize = 0;
		$quake_common.msG_WriteByte(msg, $quake_net.svc_time);
		$quake_common.msG_WriteFloat(msg, $quake_server.sv.time);
		// add the client specific data to the datagram
		$quake_server.sV_WriteClientdataToMessage(client.edict, msg);
		$quake_server.$sV_WriteEntitiesToClient(client.edict, msg);
		// copy the server datagram if there is space
		if (msg.cursize + $quake_server.sv.datagram.cursize < msg.maxsize) {
			$quake_common.sZ_Write(msg, $quake_server.sv.datagram.data, $quake_server.sv.datagram.cursize);
		}
		// send the datagram
		if ($quake_net.neT_SendUnreliableMessage(client.netconnection, msg) === -1) {
			return false;
		}
		return true;
	};
	$quake_server.$sV_UpdateToReliableMessages = function() {
		var i, j;
		var client;
		// check for changes to be sent over the reliable streams
		for (i = 0; i < $quake_server.svs.maxclients; i++) {
			$quake_host.host_client = $quake_server.svs.clients[i];
			if ($quake_host.host_client.old_frags !== $quake_host.host_client.edict.v.frags) {
				for (j = 0; j < $quake_server.svs.maxclients; j++) {
					client = $quake_server.svs.clients[j];
					if (!client.active) {
						continue;
					}
					$quake_common.msG_WriteByte(client.message, $quake_net.svc_updatefrags);
					$quake_common.msG_WriteByte(client.message, i);
					$quake_common.msG_WriteShort(client.message, ss.Int32.trunc($quake_host.host_client.edict.v.frags));
				}
				$quake_host.host_client.old_frags = ss.Int32.trunc($quake_host.host_client.edict.v.frags);
			}
		}
		for (j = 0; j < $quake_server.svs.maxclients; j++) {
			client = $quake_server.svs.clients[j];
			if (!client.active) {
				continue;
			}
			$quake_common.sZ_Write(client.message, $quake_server.sv.reliable_datagram.data, $quake_server.sv.reliable_datagram.cursize);
		}
		$quake_common.sZ_Clear($quake_server.sv.reliable_datagram);
	};
	$quake_server.$sV_SendNop = function(client) {
		var msg = new $quake_common$sizebuf_t();
		var buf = new Uint8Array(4);
		msg.data = buf;
		msg.maxsize = buf.length;
		msg.cursize = 0;
		$quake_common.msG_WriteChar(msg, $quake_net.svc_nop);
		$quake_net.neT_SendUnreliableMessage(client.netconnection, msg);
		client.last_message = $quake_host.realtime;
	};
	$quake_server.sV_SendClientMessages = function() {
		var i;
		// update frags, names, etc
		$quake_server.$sV_UpdateToReliableMessages();
		// build individual updates
		for (i = 0; i < $quake_server.svs.maxclients; i++) {
			$quake_host.host_client = $quake_server.svs.clients[i];
			if (!$quake_host.host_client.active) {
				continue;
			}
			if ($quake_host.host_client.spawned) {
				if (!$quake_server.$sV_SendClientDatagram($quake_host.host_client)) {
					continue;
				}
			}
			else {
				// the player isn't totally in the game yet
				// send small keepalive messages if too much time has passed
				// send a full message when the next signon stage has been requested
				// some other message data (name changes, etc) may accumulate 
				// between signon stages
				if (!$quake_host.host_client.sendsignon) {
					if ($quake_host.realtime - $quake_host.host_client.last_message > 5) {
						$quake_server.$sV_SendNop($quake_host.host_client);
					}
					continue;
					// don't send out non-signon messages
				}
			}
			// check for an overflowed message.  Should only happen
			// on a very fucked up connection that backs up a lot, then
			// changes level
			if ($quake_host.host_client.message.overflowed) {
				$quake_host.host_client.message.overflowed = false;
				continue;
			}
			if ($quake_host.host_client.message.cursize !== 0 || $quake_host.host_client.dropasap) {
				if (!$quake_net.neT_CanSendMessage($quake_host.host_client.netconnection)) {
					//				I_Printf ("can't write\n");
					continue;
				}
				if (!$quake_host.host_client.dropasap) {
					$quake_net.neT_SendMessage($quake_host.host_client.netconnection, $quake_host.host_client.message);
					$quake_common.sZ_Clear($quake_host.host_client.message);
					$quake_host.host_client.last_message = $quake_host.realtime;
					$quake_host.host_client.sendsignon = false;
				}
			}
		}
		// clear muzzle flashes
		$quake_server.$sV_CleanupEnts();
	};
	$quake_server.sV_ModelIndex = function(name) {
		var i;
		if (ss.isNullOrUndefined(name) || name.length === 0) {
			return 0;
		}
		for (i = 0; i < $quake_quakedef.maX_MODELS && ss.isValue($quake_server.sv.model_precache[i]); i++) {
			if ($quake_server.sv.model_precache[i].compareTo(name) === 0) {
				return i;
			}
		}
		if (i === $quake_quakedef.maX_MODELS || ss.isNullOrUndefined($quake_server.sv.model_precache[i])) {
			$quake_sys_linux.sys_Error('SV_ModelIndex: model ' + name + ' not precached');
		}
		return i;
	};
	$quake_server.$sV_CreateBaseline = function() {
		var i;
		var svent;
		var entnum;
		for (entnum = 0; entnum < $quake_server.sv.num_edicts; entnum++) {
			// get the current server version
			svent = $quake_prog.edicT_NUM(entnum);
			if (svent.free) {
				continue;
			}
			if (entnum > $quake_server.svs.maxclients && svent.v.modelindex === 0) {
				continue;
			}
			//
			// create entity baseline
			//
			$quake_mathlib.vectorCopy(svent.v.origin, svent.baseline.origin);
			$quake_mathlib.vectorCopy(svent.v.angles, svent.baseline.angles);
			svent.baseline.frame = ss.Int32.trunc(svent.v.frame);
			svent.baseline.skin = ss.Int32.trunc(svent.v.skin);
			if (entnum > 0 && entnum <= $quake_server.svs.maxclients) {
				svent.baseline.colormap = entnum;
				svent.baseline.modelindex = $quake_server.sV_ModelIndex('progs/player.mdl');
			}
			else {
				svent.baseline.colormap = 0;
				svent.baseline.modelindex = $quake_server.sV_ModelIndex($quake_prog.pr_string(svent.v.model));
			}
			//
			// add to the message
			//
			$quake_common.msG_WriteByte($quake_server.sv.signon, $quake_net.svc_spawnbaseline);
			$quake_common.msG_WriteShort($quake_server.sv.signon, entnum);
			$quake_common.msG_WriteByte($quake_server.sv.signon, svent.baseline.modelindex);
			$quake_common.msG_WriteByte($quake_server.sv.signon, svent.baseline.frame);
			$quake_common.msG_WriteByte($quake_server.sv.signon, svent.baseline.colormap);
			$quake_common.msG_WriteByte($quake_server.sv.signon, svent.baseline.skin);
			for (i = 0; i < 3; i++) {
				$quake_common.msG_WriteCoord($quake_server.sv.signon, svent.baseline.origin[i]);
				$quake_common.msG_WriteAngle($quake_server.sv.signon, svent.baseline.angles[i]);
			}
		}
	};
	$quake_server.$sV_SendReconnect = function() {
		var data = new Uint8Array(128);
		var msg = new $quake_common$sizebuf_t();
		msg.data = data;
		msg.cursize = 0;
		msg.maxsize = data.length;
		$quake_common.msG_WriteChar(msg, $quake_net.svc_stufftext);
		$quake_common.msG_WriteString(msg, 'reconnect\n');
		$quake_net.neT_SendToAll(msg, 5);
		if ($quake_client.cls.state !== 0) {
			$quake_cmd.cmd_ExecuteString($System_StringExtensions.toCharArray('reconnect\n\0'), 1);
		}
	};
	$quake_server.sV_SpawnServer = function(server) {
		var ent;
		var i;
		// let's not have any servers with no name
		if ($quake_net.hostname._string.length === 0) {
			$quake_cvar_t.cvar_Set('hostname', 'UNNAMED');
		}
		$quake_screen.scr_centertime_off = 0;
		$quake_console.con_DPrintf('SpawnServer: ' + server + '\n');
		$quake_server.svs.changelevel_issued = false;
		// now safe to issue another
		//
		// tell all connected clients that we are going to a new level
		//
		if ($quake_server.sv.active) {
			$quake_server.$sV_SendReconnect();
		}
		//
		// make cvars consistant
		//
		if ($quake_host.coop.value !== 0) {
			$quake_cvar_t.cvar_SetValue('deathmatch', 0);
		}
		$quake_host.current_skill = ss.Int32.trunc($quake_host.skill.value + 0.5);
		if ($quake_host.current_skill < 0) {
			$quake_host.current_skill = 0;
		}
		if ($quake_host.current_skill > 3) {
			$quake_host.current_skill = 3;
		}
		$quake_cvar_t.cvar_SetValue('skill', $quake_host.current_skill);
		//
		// set up the new server
		//
		$quake_host.host_ClearMemory();
		$quake_server.sv.name = server;
		// load progs to get entity field count
		$quake_prog.pR_LoadProgs();
		// allocate server memory
		$quake_server.sv.max_edicts = $quake_quakedef.maX_EDICTS;
		$quake_server.sv.edicts = new Array($quake_server.sv.max_edicts);
		for (var kk = 0; kk < $quake_server.sv.max_edicts; kk++) {
			$quake_server.sv.edicts[kk] = new $quake_prog$edict_t(kk);
			$quake_server.sv.edicts[kk].v.variables = new Array($quake_prog.pr_edict_size - $quake_prog.sizeof_edict_t);
		}
		$quake_server.sv.datagram.maxsize = $quake_server.sv.datagram_buf.length;
		$quake_server.sv.datagram.cursize = 0;
		$quake_server.sv.datagram.data = $quake_server.sv.datagram_buf;
		$quake_server.sv.reliable_datagram.maxsize = $quake_server.sv.reliable_datagram_buf.length;
		$quake_server.sv.reliable_datagram.cursize = 0;
		$quake_server.sv.reliable_datagram.data = $quake_server.sv.reliable_datagram_buf;
		$quake_server.sv.signon.maxsize = $quake_server.sv.signon_buf.length;
		$quake_server.sv.signon.cursize = 0;
		$quake_server.sv.signon.data = $quake_server.sv.signon_buf;
		// leave slots at start for clients only
		$quake_server.sv.num_edicts = $quake_server.svs.maxclients + 1;
		for (i = 0; i < $quake_server.svs.maxclients; i++) {
			ent = $quake_prog.edicT_NUM(i + 1);
			$quake_server.svs.clients[i].edict = ent;
		}
		$quake_server.sv.state = 0;
		$quake_server.sv.paused = false;
		$quake_server.sv.time = 1;
		$quake_server.sv.name = server;
		$quake_server.sv.modelname = 'maps/' + server + '.bsp';
		$quake_server.sv.worldmodel = $quake_model.mod_ForName($quake_server.sv.modelname, false);
		if (ss.isNullOrUndefined($quake_server.sv.worldmodel)) {
			$quake_console.con_Printf('Couldn\'t spawn server ' + $quake_server.sv.modelname + '\n');
			$quake_server.sv.active = false;
			return;
		}
		$quake_server.sv.models[1] = $quake_server.sv.worldmodel;
		//
		// clear world interaction links
		//
		//SV_ClearWorld();
		//sv.model_precache[0] = pr_strings;
		$quake_server.sv.model_precache[0] = '';
		$quake_server.sv.model_precache[1] = $quake_server.sv.modelname;
		for (i = 1; i < $quake_server.sv.worldmodel.numsubmodels; i++) {
			$quake_server.sv.model_precache[1 + i] = $quake_server.$localmodels[i];
			$quake_server.sv.models[i + 1] = $quake_model.mod_ForName($quake_server.$localmodels[i], false);
		}
		//
		// load the rest of the entities
		//	
		ent = $quake_prog.edicT_NUM(0);
		ent.v.clear();
		ent.free = false;
		ent.v.model = $quake_prog.getStringIndex($quake_server.sv.worldmodel.name) - 15000;
		ent.v.modelindex = 1;
		// world model
		ent.v.solid = 4;
		ent.v.movetype = 7;
		if ($quake_host.coop.value !== 0) {
			$quake_prog.pr_global_struct[0].coop = $quake_host.coop.value;
		}
		else {
			$quake_prog.pr_global_struct[0].deathmatch = $quake_host.deathmatch.value;
		}
		$quake_prog.pr_global_struct[0].mapname = $quake_prog.getStringIndex($quake_server.sv.name) - 15000;
		// serverflags are for cross level information (sigils)
		$quake_prog.pr_global_struct[0].serverflags = $quake_server.svs.serverflags;
		$quake_prog.eD_LoadFromFile($quake_server.sv.worldmodel.entities);
		$quake_server.sv.active = true;
		// all setup is completed, any further precache statements are errors
		$quake_server.sv.state = 1;
		// run two frames to allow everything to settle
		$quake_host.host_frametime = 0.1;
		$quake_server.sV_Physics();
		$quake_server.sV_Physics();
		// create a baseline for more efficient communications
		$quake_server.$sV_CreateBaseline();
		// send serverinfo to all connected clients
		for (i = 0; i < $quake_server.svs.maxclients; i++) {
			$quake_host.host_client = $quake_server.svs.clients[i];
			if ($quake_host.host_client.active) {
				$quake_server.$sV_SendServerinfo($quake_host.host_client);
			}
		}
		$quake_console.con_DPrintf('Server spawned.\n');
	};
	$quake_server.$sV_CheckVelocity = function(ent) {
		var i;
		//
		// bound velocity
		//
		for (i = 0; i < 3; i++) {
			if (isNaN(ent.v.velocity[i])) {
				$quake_console.con_Printf('Got a NaN velocity on ' + $quake_prog.pr_string(ent.v.classname) + '\n');
				ent.v.velocity[i] = 0;
			}
			if (isNaN(ent.v.origin[i])) {
				$quake_console.con_Printf('Got a NaN origin on ' + $quake_prog.pr_string(ent.v.classname) + '\n');
				ent.v.origin[i] = 0;
			}
			if (ent.v.velocity[i] > $quake_server.$sv_maxvelocity.value) {
				ent.v.velocity[i] = $quake_server.$sv_maxvelocity.value;
			}
			else if (ent.v.velocity[i] < -$quake_server.$sv_maxvelocity.value) {
				ent.v.velocity[i] = -$quake_server.$sv_maxvelocity.value;
			}
		}
	};
	$quake_server.$sV_RunThink = function(ent) {
		var thinktime;
		thinktime = ent.v.nextthink;
		if (thinktime <= 0 || thinktime > $quake_server.sv.time + $quake_host.host_frametime) {
			return true;
		}
		if (thinktime < $quake_server.sv.time) {
			thinktime = $quake_server.sv.time;
		}
		// don't let things stay in the past.
		// it is possible to start that way
		// by a trigger with a local time.
		ent.v.nextthink = 0;
		$quake_prog.pr_global_struct[0].time = thinktime;
		$quake_prog.pr_global_struct[0].self = $quake_prog.edicT_TO_PROG(ent);
		$quake_prog.pr_global_struct[0].other = $quake_prog.edicT_TO_PROG($quake_server.sv.edicts[0]);
		$quake_prog.pR_ExecuteProgram($quake_prog.pr_functions[ent.v.think]);
		return !ent.free;
	};
	$quake_server.$sV_AddGravity = function(ent) {
		var ent_gravity;
		//eval_t	*val;
		//
		//val = GetEdictFieldValue(ent, "gravity");
		//if (val && val._float)
		//ent_gravity = val._float;
		//else
		ent_gravity = 1;
		ent.v.velocity[2] -= ent_gravity * $quake_server.sv_gravity.value * $quake_host.host_frametime;
	};
	$quake_server.$sV_Physics_Pusher = function(ent) {
		var thinktime;
		var oldltime;
		var movetime;
		oldltime = ent.v.ltime;
		thinktime = ent.v.nextthink;
		if (thinktime < ent.v.ltime + $quake_host.host_frametime) {
			movetime = thinktime - ent.v.ltime;
			if (movetime < 0) {
				movetime = 0;
			}
		}
		else {
			movetime = $quake_host.host_frametime;
		}
		if (movetime !== 0) {
			//SV_PushMove (ent, movetime);	// advances ent.v.ltime if not blocked
		}
		if (thinktime > oldltime && thinktime <= ent.v.ltime) {
			ent.v.nextthink = 0;
			$quake_prog.pr_global_struct[0].time = $quake_server.sv.time;
			$quake_prog.pr_global_struct[0].self = $quake_prog.edicT_TO_PROG(ent);
			$quake_prog.pr_global_struct[0].other = $quake_prog.edicT_TO_PROG($quake_server.sv.edicts[0]);
			$quake_prog.pR_ExecuteProgram($quake_prog.pr_functions[ent.v.think]);
			if (ent.free) {
				return;
			}
		}
	};
	$quake_server.$sV_Physics_Client = function(ent, num) {
		if (!$quake_server.svs.clients[num - 1].active) {
			return;
		}
		// unconnected slot
		//
		// call standard client pre-think
		//	
		$quake_prog.pr_global_struct[0].time = $quake_server.sv.time;
		$quake_prog.pr_global_struct[0].self = $quake_prog.edicT_TO_PROG(ent);
		$quake_prog.pR_ExecuteProgram($quake_prog.pr_functions[$quake_prog.pr_global_struct[0].playerPreThink]);
		//
		// do a move
		//
		$quake_server.$sV_CheckVelocity(ent);
		//
		// decide which move function to call
		//
		switch (ss.Int32.trunc(ent.v.movetype)) {
			case 0: {
				if (!$quake_server.$sV_RunThink(ent)) {
					return;
				}
				break;
			}
			case 3: {
				if (!$quake_server.$sV_RunThink(ent)) {
					return;
				}
				break;
			}
			case 6:
			case 10: {
				break;
			}
			case 5: {
				if (!$quake_server.$sV_RunThink(ent)) {
					return;
				}
				break;
			}
			case 8: {
				if (!$quake_server.$sV_RunThink(ent)) {
					return;
				}
				$quake_mathlib.vectorMA(ent.v.origin, $quake_host.host_frametime, ent.v.velocity, ent.v.origin);
				break;
			}
			default: {
				$quake_sys_linux.sys_Error('SV_Physics_client: bad movetype ' + ss.Int32.trunc(ent.v.movetype));
				break;
			}
		}
		//
		// call standard player post-think
		//		
		//SV_LinkEdict (ent, true);
		$quake_prog.pr_global_struct[0].time = $quake_server.sv.time;
		$quake_prog.pr_global_struct[0].self = $quake_prog.edicT_TO_PROG(ent);
		$quake_prog.pR_ExecuteProgram($quake_prog.pr_functions[$quake_prog.pr_global_struct[0].playerPostThink]);
	};
	$quake_server.$sV_Physics_None = function(ent) {
		// regular thinking
		$quake_server.$sV_RunThink(ent);
	};
	$quake_server.$sV_Physics_Noclip = function(ent) {
		// regular thinking
		if (!$quake_server.$sV_RunThink(ent)) {
			return;
		}
		$quake_mathlib.vectorMA(ent.v.angles, $quake_host.host_frametime, ent.v.avelocity, ent.v.angles);
		$quake_mathlib.vectorMA(ent.v.origin, $quake_host.host_frametime, ent.v.velocity, ent.v.origin);
		//SV_LinkEdict (ent, false);
	};
	$quake_server.$sV_Physics_Toss = function(ent) {
		//trace_t	trace;
		var move = new Array(3);
		var backoff;
		// regular thinking
		if (!$quake_server.$sV_RunThink(ent)) {
			return;
		}
		// if onground, return without moving
		if ((ss.Int32.trunc(ent.v.flags) & $quake_server.fL_ONGROUND) !== 0) {
			return;
		}
		$quake_server.$sV_CheckVelocity(ent);
		// add gravity
		if (ent.v.movetype !== 5 && ent.v.movetype !== 9) {
			$quake_server.$sV_AddGravity(ent);
		}
		// move angles
		$quake_mathlib.vectorMA(ent.v.angles, $quake_host.host_frametime, ent.v.avelocity, ent.v.angles);
		// move origin
		$quake_mathlib.vectorScale(ent.v.velocity, $quake_host.host_frametime, move);
		//trace = SV_PushEntity (ent, move);
		//if (trace.fraction == 1)
		//return;
		if (ent.free) {
			return;
		}
		if (ent.v.movetype === 10) {
			backoff = 1.5;
		}
		else {
			backoff = 1;
		}
		//ClipVelocity (ent.v.velocity, trace.plane.normal, ent.v.velocity, backoff);
		// stop if on ground
		//if (trace.plane.normal[2] > 0.7)
		//{
		//if (ent.v.velocity[2] < 60 || ent.v.movetype != MOVETYPE_BOUNCE)
		//{
		//ent.v.flags = (int)ent.v.flags | FL_ONGROUND;
		//ent.v.groundentity = EDICT_TO_PROG(trace.ent);
		//VectorCopy (vec3_origin, ent.v.velocity);
		//VectorCopy (vec3_origin, ent.v.avelocity);
		//}
		//}
		// check for in water
		//SV_CheckWaterTransition (ent);
	};
	$quake_server.sV_Physics = function() {
		var i;
		var ent;
		// let the progs know that a new frame has started
		$quake_prog.pr_global_struct[0].self = $quake_prog.edicT_TO_PROG($quake_server.sv.edicts[0]);
		$quake_prog.pr_global_struct[0].other = $quake_prog.edicT_TO_PROG($quake_server.sv.edicts[0]);
		$quake_prog.pr_global_struct[0].time = $quake_server.sv.time;
		$quake_prog.pR_ExecuteProgram($quake_prog.pr_functions[$quake_prog.pr_global_struct[0].startFrame]);
		//SV_CheckAllEnts ();
		//
		// treat each object in turn
		//
		for (i = 0; i < $quake_server.sv.num_edicts; i++) {
			ent = $quake_server.sv.edicts[i];
			if (ent.free) {
				continue;
			}
			if ($quake_prog.pr_global_struct[0].force_retouch !== 0) {
				//SV_LinkEdict (ent, true);	// force retouch even for stationary
			}
			if (i > 0 && i <= $quake_server.svs.maxclients) {
				$quake_server.$sV_Physics_Client(ent, i);
			}
			else if (ent.v.movetype === 7) {
				$quake_server.$sV_Physics_Pusher(ent);
			}
			else if (ent.v.movetype === 0) {
				$quake_server.$sV_Physics_None(ent);
			}
			else if (ent.v.movetype === 8) {
				$quake_server.$sV_Physics_Noclip(ent);
			}
			else if (ent.v.movetype === 6 || ent.v.movetype === 10 || ent.v.movetype === 5 || ent.v.movetype === 9) {
				$quake_server.$sV_Physics_Toss(ent);
			}
			else {
				$quake_sys_linux.sys_Error('SV_Physics: bad movetype ' + ss.Int32.trunc(ent.v.movetype));
			}
		}
		if ($quake_prog.pr_global_struct[0].force_retouch !== 0) {
			$quake_prog.pr_global_struct[0].force_retouch--;
		}
		$quake_server.sv.time += $quake_host.host_frametime;
	};
	$quake_server.$sV_SetIdealPitch = function() {
		var angleval, sinval, cosval;
		//trace_t	tr;
		var top = new Array(3), bottom = new Array(3);
		var z = new Array($quake_server.$maX_FORWARD);
		var i, j;
		var step, dir, steps;
		if ((ss.Int32.trunc($quake_server.sv_player.v.flags) & $quake_server.fL_ONGROUND) === 0) {
			return;
		}
		angleval = $quake_server.sv_player.v.angles[$quake_quakedef.YAW] * $quake_mathlib.m_PI * 2 / 360;
		sinval = Math.sin(angleval);
		cosval = Math.cos(angleval);
		for (i = 0; i < $quake_server.$maX_FORWARD; i++) {
			top[0] = $quake_server.sv_player.v.origin[0] + cosval * (i + 3) * 12;
			top[1] = $quake_server.sv_player.v.origin[1] + sinval * (i + 3) * 12;
			top[2] = $quake_server.sv_player.v.origin[2] + $quake_server.sv_player.v.view_ofs[2];
			bottom[0] = top[0];
			bottom[1] = top[1];
			bottom[2] = top[2] - 160;
			//tr = SV_Move (top, vec3_origin, vec3_origin, bottom, 1, sv_player);
			//if (tr.allsolid)
			//return;	// looking at a wall, leave ideal the way is was
			//if (tr.fraction == 1)
			//return;	// near a dropoff
			//
			//z[i] = top[2] + tr.fraction*(bottom[2]-top[2]);
		}
		dir = 0;
		steps = 0;
		for (j = 1; j < i; j++) {
			step = ss.Int32.trunc(z[j] - z[j - 1]);
			if (step > -0.1 && step < $quake_quakedef.oN_EPSILON) {
				continue;
			}
			if (dir !== 0 && (step - dir > $quake_quakedef.oN_EPSILON || step - dir < -0.1)) {
				return;
			}
			// mixed changes
			steps++;
			dir = step;
		}
		if (dir === 0) {
			$quake_server.sv_player.v.idealpitch = 0;
			return;
		}
		if (steps < 2) {
			return;
		}
		$quake_server.sv_player.v.idealpitch = -dir * $quake_server.$sv_idealpitchscale.value;
	};
	$quake_server.$sV_UserFriction = function() {
		var vel;
		var speed, newspeed, control;
		var start = new Array(3), stop = new Array(3);
		var friction;
		//trace_t	trace;
		vel = $quake_server.$velocity;
		speed = Math.sqrt(vel[0] * vel[0] + vel[1] * vel[1]);
		if (speed === 0) {
			return;
		}
		// if the leading edge is over a dropoff, increase friction
		start[0] = stop[0] = $quake_server.$origin[0] + vel[0] / speed * 16;
		start[1] = stop[1] = $quake_server.$origin[1] + vel[1] / speed * 16;
		start[2] = $quake_server.$origin[2] + $quake_server.sv_player.v.mins[2];
		stop[2] = start[2] - 34;
		//trace = SV_Move (start, vec3_origin, vec3_origin, stop, true, sv_player);
		//if (trace.fraction == 1.0)
		//friction = sv_friction.value*sv_edgefriction.value;
		//else
		friction = $quake_server.$sv_friction.value;
		// apply friction	
		control = ((speed < $quake_server.$sv_stopspeed.value) ? $quake_server.$sv_stopspeed.value : speed);
		newspeed = speed - $quake_host.host_frametime * control * friction;
		if (newspeed < 0) {
			newspeed = 0;
		}
		newspeed /= speed;
		vel[0] = vel[0] * newspeed;
		vel[1] = vel[1] * newspeed;
		vel[2] = vel[2] * newspeed;
	};
	$quake_server.$sV_Accelerate = function() {
		var i;
		var addspeed, accelspeed, currentspeed;
		currentspeed = $quake_mathlib.dotProduct$1($quake_server.$velocity, $quake_server.$wishdir);
		addspeed = $quake_server.$wishspeed - currentspeed;
		if (addspeed <= 0) {
			return;
		}
		accelspeed = $quake_server.$sv_accelerate.value * $quake_host.host_frametime * $quake_server.$wishspeed;
		if (accelspeed > addspeed) {
			accelspeed = addspeed;
		}
		for (i = 0; i < 3; i++) {
			$quake_server.$velocity[i] += accelspeed * $quake_server.$wishdir[i];
		}
	};
	$quake_server.$sV_AirAccelerate = function(wishveloc) {
		var i;
		var addspeed, wishspd, accelspeed, currentspeed;
		wishspd = $quake_mathlib.vectorNormalize(wishveloc);
		if (wishspd > 30) {
			wishspd = 30;
		}
		currentspeed = $quake_mathlib.dotProduct$1($quake_server.$velocity, wishveloc);
		addspeed = wishspd - currentspeed;
		if (addspeed <= 0) {
			return;
		}
		//	accelspeed = sv_accelerate.value * host_frametime;
		accelspeed = $quake_server.$sv_accelerate.value * $quake_server.$wishspeed * $quake_host.host_frametime;
		if (accelspeed > addspeed) {
			accelspeed = addspeed;
		}
		for (i = 0; i < 3; i++) {
			$quake_server.$velocity[i] += accelspeed * wishveloc[i];
		}
	};
	$quake_server.$dropPunchAngle = function() {
		var len;
		len = $quake_mathlib.vectorNormalize($quake_server.sv_player.v.punchangle);
		len -= 10 * $quake_host.host_frametime;
		if (len < 0) {
			len = 0;
		}
		$quake_mathlib.vectorScale($quake_server.sv_player.v.punchangle, len, $quake_server.sv_player.v.punchangle);
	};
	$quake_server.$sV_WaterMove = function() {
		var i;
		var wishvel = new Array(3);
		var speed, newspeed, wishspeed, addspeed, accelspeed;
		//
		// user intentions
		//
		$quake_mathlib.angleVectors($quake_server.sv_player.v.v_angle, $quake_server.$forward, $quake_server.$right, $quake_server.$up);
		for (i = 0; i < 3; i++) {
			wishvel[i] = $quake_server.$forward[i] * $quake_server.$cmd.forwardmove + $quake_server.$right[i] * $quake_server.$cmd.sidemove;
		}
		if ($quake_server.$cmd.forwardmove === 0 && $quake_server.$cmd.sidemove === 0 && $quake_server.$cmd.upmove === 0) {
			wishvel[2] -= 60;
		}
		else {
			wishvel[2] += $quake_server.$cmd.upmove;
		}
		wishspeed = $quake_mathlib.length$1(wishvel);
		if (wishspeed > $quake_server.$sv_maxspeed.value) {
			$quake_mathlib.vectorScale(wishvel, $quake_server.$sv_maxspeed.value / wishspeed, wishvel);
			wishspeed = $quake_server.$sv_maxspeed.value;
		}
		wishspeed *= 0.7;
		//
		// water friction
		//
		speed = $quake_mathlib.length$1($quake_server.$velocity);
		if (speed !== 0) {
			newspeed = speed - $quake_host.host_frametime * speed * $quake_server.$sv_friction.value;
			if (newspeed < 0) {
				newspeed = 0;
			}
			$quake_mathlib.vectorScale($quake_server.$velocity, newspeed / speed, $quake_server.$velocity);
		}
		else {
			newspeed = 0;
		}
		//
		// water acceleration
		//
		if (wishspeed === 0) {
			return;
		}
		addspeed = wishspeed - newspeed;
		if (addspeed <= 0) {
			return;
		}
		$quake_mathlib.vectorNormalize(wishvel);
		accelspeed = $quake_server.$sv_accelerate.value * wishspeed * $quake_host.host_frametime;
		if (accelspeed > addspeed) {
			accelspeed = addspeed;
		}
		for (i = 0; i < 3; i++) {
			$quake_server.$velocity[i] += accelspeed * wishvel[i];
		}
	};
	$quake_server.$sV_WaterJump = function() {
		if ($quake_server.sv.time > $quake_server.sv_player.v.teleport_time || $quake_server.sv_player.v.waterlevel === 0) {
			$quake_server.sv_player.v.flags = ss.Int32.trunc($quake_server.sv_player.v.flags) & -2049;
			$quake_server.sv_player.v.teleport_time = 0;
		}
		$quake_server.sv_player.v.velocity[0] = $quake_server.sv_player.v.movedir[0];
		$quake_server.sv_player.v.velocity[1] = $quake_server.sv_player.v.movedir[1];
	};
	$quake_server.$sV_AirMove = function() {
		var i;
		var wishvel = new Array(3);
		var fmove, smove;
		$quake_mathlib.angleVectors($quake_server.sv_player.v.angles, $quake_server.$forward, $quake_server.$right, $quake_server.$up);
		fmove = $quake_server.$cmd.forwardmove;
		smove = $quake_server.$cmd.sidemove;
		// hack to not let you back into teleporter
		if ($quake_server.sv.time < $quake_server.sv_player.v.teleport_time && fmove < 0) {
			fmove = 0;
		}
		for (i = 0; i < 3; i++) {
			wishvel[i] = $quake_server.$forward[i] * fmove + $quake_server.$right[i] * smove;
		}
		if (ss.Int32.trunc($quake_server.sv_player.v.movetype) !== $quake_server.movetypE_WALK) {
			wishvel[2] = $quake_server.$cmd.upmove;
		}
		else {
			wishvel[2] = 0;
		}
		$quake_mathlib.vectorCopy(wishvel, $quake_server.$wishdir);
		$quake_server.$wishspeed = $quake_mathlib.vectorNormalize($quake_server.$wishdir);
		if ($quake_server.$wishspeed > $quake_server.$sv_maxspeed.value) {
			$quake_mathlib.vectorScale(wishvel, $quake_server.$sv_maxspeed.value / $quake_server.$wishspeed, wishvel);
			$quake_server.$wishspeed = $quake_server.$sv_maxspeed.value;
		}
		if ($quake_server.sv_player.v.movetype === 8) {
			// noclip
			$quake_mathlib.vectorCopy(wishvel, $quake_server.$velocity);
		}
		else if ($quake_server.$onground) {
			$quake_server.$sV_UserFriction();
			$quake_server.$sV_Accelerate();
		}
		else {
			// not on ground, so little effect on velocity
			$quake_server.$sV_AirAccelerate(wishvel);
		}
	};
	$quake_server.$sV_ClientThink = function() {
		var v_angle = new Array(3);
		if ($quake_server.sv_player.v.movetype === 0) {
			return;
		}
		$quake_server.$onground = (ss.Int32.trunc($quake_server.sv_player.v.flags) & $quake_server.fL_ONGROUND) !== 0;
		$quake_server.$origin = $quake_server.sv_player.v.origin;
		$quake_server.$velocity = $quake_server.sv_player.v.velocity;
		$quake_server.$dropPunchAngle();
		//
		// if dead, behave differently
		//
		if ($quake_server.sv_player.v.health <= 0) {
			return;
		}
		//
		// angles
		// show 1/3 the pitch angle and all the roll angle
		$quake_server.$cmd = $quake_host.host_client.cmd;
		$quake_server.$angles = $quake_server.sv_player.v.angles;
		$quake_mathlib.vectorAdd($quake_server.sv_player.v.v_angle, $quake_server.sv_player.v.punchangle, v_angle);
		$quake_server.$angles[$quake_quakedef.ROLL] = $quake_view.v_CalcRoll($quake_server.sv_player.v.angles, $quake_server.sv_player.v.velocity) * 4;
		if ($quake_server.sv_player.v.fixangle === 0) {
			$quake_server.$angles[$quake_quakedef.PITCH] = -v_angle[$quake_quakedef.PITCH] / 3;
			$quake_server.$angles[$quake_quakedef.YAW] = v_angle[$quake_quakedef.YAW];
		}
		if ((ss.Int32.trunc($quake_server.sv_player.v.flags) & $quake_server.fL_WATERJUMP) !== 0) {
			$quake_server.$sV_WaterJump();
			return;
		}
		//
		// walk
		//
		if ($quake_server.sv_player.v.waterlevel >= 2 && $quake_server.sv_player.v.movetype !== 8) {
			$quake_server.$sV_WaterMove();
			return;
		}
		$quake_server.$sV_AirMove();
	};
	$quake_server.$sV_ReadClientMove = function(move) {
		var i;
		var angle = new Array(3);
		var bits;
		// read ping time
		$quake_host.host_client.ping_times[$quake_host.host_client.num_pings % $quake_server.nuM_PING_TIMES] = $quake_server.sv.time - $quake_common.msG_ReadFloat();
		$quake_host.host_client.num_pings++;
		// read current angles	
		for (i = 0; i < 3; i++) {
			angle[i] = $quake_common.msG_ReadAngle();
		}
		$quake_mathlib.vectorCopy(angle, $quake_host.host_client.edict.v.v_angle);
		// read movement
		move.forwardmove = $quake_common.msG_ReadShort();
		move.sidemove = $quake_common.msG_ReadShort();
		move.upmove = $quake_common.msG_ReadShort();
		// read buttons
		bits = $quake_common.msG_ReadByte();
		$quake_host.host_client.edict.v.button0 = bits & 1;
		$quake_host.host_client.edict.v.button2 = (bits & 2) >> 1;
		i = $quake_common.msG_ReadByte();
		if (i !== 0) {
			$quake_host.host_client.edict.v.impulse = i;
		}
	};
	$quake_server.$sV_ReadClientMessage = function() {
		var $state = 0, ret, cmd, s;
		$sm1:
		for (;;) {
			switch ($state) {
				case 0: {
					$state = 1;
					continue $sm1;
				}
				case 1: {
					$state = 3;
					continue $sm1;
				}
				case 3: {
					ret = $quake_net.neT_GetMessage($quake_host.host_client.netconnection);
					if (ret === -1) {
						$quake_sys_linux.sys_Printf('SV_ReadClientMessage: NET_GetMessage failed\n');
						return false;
					}
					if (ret === 0) {
						return true;
					}
					$quake_common.msG_BeginReading();
					while (true) {
						if (!$quake_host.host_client.active) {
							return false;
						}
						// a command caused an error
						if ($quake_common.msg_badread) {
							$quake_sys_linux.sys_Printf('SV_ReadClientMessage: badread\n');
							return false;
						}
						cmd = $quake_common.msG_ReadChar();
						switch (cmd) {
							case -1: {
								$state = 3;
								continue $sm1;
							}
							default: {
								$quake_sys_linux.sys_Printf('SV_ReadClientMessage: unknown command char\n');
								return false;
							}
							case 1: {
								break;
							}
							case 4: {
								s = $quake_common.msG_ReadString();
								if ($quake_host.host_client.privileged) {
									ret = 2;
								}
								else {
									ret = 0;
								}
								if (s.startsWith('status')) {
									ret = 1;
								}
								else if (s.startsWith('god')) {
									ret = 1;
								}
								else if (s.startsWith('notarget')) {
									ret = 1;
								}
								else if (s.startsWith('fly')) {
									ret = 1;
								}
								else if (s.startsWith('name')) {
									ret = 1;
								}
								else if (s.startsWith('noclip')) {
									ret = 1;
								}
								else if (s.startsWith('say')) {
									ret = 1;
								}
								else if (s.startsWith('say_team')) {
									ret = 1;
								}
								else if (s.startsWith('tell')) {
									ret = 1;
								}
								else if (s.startsWith('color')) {
									ret = 1;
								}
								else if (s.startsWith('kill')) {
									ret = 1;
								}
								else if (s.startsWith('pause')) {
									ret = 1;
								}
								else if (s.startsWith('spawn')) {
									ret = 1;
								}
								else if (s.startsWith('begin')) {
									ret = 1;
								}
								else if (s.startsWith('prespawn')) {
									ret = 1;
								}
								else if (s.startsWith('kick')) {
									ret = 1;
								}
								else if (s.startsWith('ping')) {
									ret = 1;
								}
								else if (s.startsWith('give')) {
									ret = 1;
								}
								else if (s.startsWith('ban')) {
									ret = 1;
								}
								if (ret === 2) {
									$quake_cmd.cbuf_InsertText(s);
								}
								else if (ret === 1) {
									$quake_cmd.cmd_ExecuteString($System_StringExtensions.toCharArray(s + '\0'), 0);
								}
								else {
									$quake_console.con_DPrintf($quake_host.host_client.name + ' tried to ' + s + '\n');
								}
								break;
							}
							case 2: {
								return false;
							}
							case 3: {
								$quake_server.$sV_ReadClientMove($quake_host.host_client.cmd);
								break;
							}
						}
					}
					$state = 2;
					continue $sm1;
				}
				case 2: {
					if (ret === 1) {
						$state = 1;
						continue $sm1;
					}
					return true;
				}
				default: {
					break $sm1;
				}
			}
		}
	};
	$quake_server.sV_RunClients = function() {
		var i;
		for (i = 0; i < $quake_server.svs.maxclients; i++) {
			$quake_host.host_client = $quake_server.svs.clients[i];
			if (!$quake_host.host_client.active) {
				continue;
			}
			$quake_server.sv_player = $quake_host.host_client.edict;
			if (!$quake_server.$sV_ReadClientMessage()) {
				continue;
			}
			if (!$quake_host.host_client.spawned) {
				continue;
			}
			// always pause in single player if in console or menus
			if (!$quake_server.sv.paused && ($quake_server.svs.maxclients > 1 || $quake_keys.key_dest === 0)) {
				$quake_server.$sV_ClientThink();
			}
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.server.client_t
	var $quake_server$client_t = function() {
		this.active = false;
		this.spawned = false;
		this.dropasap = false;
		this.privileged = false;
		this.sendsignon = false;
		this.last_message = 0;
		this.netconnection = null;
		this.cmd = new $quake_client$usercmd_t();
		this.$wishdir = new Array(3);
		this.message = new $quake_common$sizebuf_t();
		this.msgbuf = new Uint8Array($quake_quakedef.maX_MSGLEN);
		this.edict = null;
		this.name = null;
		this.colors = 0;
		this.ping_times = new Array($quake_server.nuM_PING_TIMES);
		this.num_pings = 0;
		this.spawn_parms = new Array($quake_server.nuM_SPAWN_PARMS);
		this.old_frags = 0;
		this.index = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.server.server_state_t
	var $quake_server$server_state_t = function() {
	};
	$quake_server$server_state_t.prototype = { ss_loading: 0, ss_active: 1 };
	Type.registerEnum(global, 'quake.server$server_state_t', $quake_server$server_state_t, false);
	////////////////////////////////////////////////////////////////////////////////
	// quake.server.server_static_t
	var $quake_server$server_static_t = function() {
		this.maxclients = 0;
		this.maxclientslimit = 0;
		this.clients = null;
		this.serverflags = 0;
		this.changelevel_issued = false;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.server.server_t
	var $quake_server$server_t = function() {
		this.active = false;
		this.paused = false;
		this.loadgame = false;
		this.time = 0;
		this.$lastcheck = 0;
		this.$lastchecktime = 0;
		this.name = null;
		this.modelname = null;
		this.worldmodel = null;
		this.model_precache = new Array($quake_quakedef.maX_MODELS);
		this.models = new Array($quake_quakedef.maX_MODELS);
		this.sound_precache = new Array($quake_quakedef.maX_SOUNDS);
		this.lightstyles = new Array($quake_quakedef.maX_LIGHTSTYLES);
		this.num_edicts = 0;
		this.max_edicts = 0;
		this.edicts = null;
		this.state = 0;
		this.datagram = new $quake_common$sizebuf_t();
		this.datagram_buf = new Uint8Array($quake_quakedef.maX_DATAGRAM);
		this.reliable_datagram = new $quake_common$sizebuf_t();
		this.reliable_datagram_buf = new Uint8Array($quake_quakedef.maX_DATAGRAM);
		this.signon = new $quake_common$sizebuf_t();
		this.signon_buf = new Uint8Array(8192);
		for (var kk = 0; kk < $quake_quakedef.maX_MODELS; kk++) {
			this.models[kk] = new $quake_model$model_t();
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.sound
	var $quake_sound = function() {
	};
	$quake_sound.s_AmbientOff = function() {
		$quake_sound.$snd_ambient = false;
	};
	$quake_sound.s_AmbientOn = function() {
		$quake_sound.$snd_ambient = true;
	};
	$quake_sound.s_SoundInfo_f = function() {
	};
	$quake_sound.s_Startup = function() {
		var rc;
		if (!$quake_sound.$snd_initialized) {
			return;
		}
		$quake_sound.$sound_started = 1;
	};
	$quake_sound.s_Init = function() {
		var kk;
		for (kk = 0; kk < $quake_sound.maX_CHANNELS; kk++) {
			$quake_sound.$channels[kk] = new $quake_sound$channel_t();
		}
		$quake_console.con_Printf('\nSound Initialization\n');
		if ($quake_common.coM_CheckParm('-nosound') !== 0) {
			return;
		}
		$quake_cmd.cmd_AddCommand('play', $quake_sound.s_Play);
		$quake_cmd.cmd_AddCommand('playvol', $quake_sound.s_PlayVol);
		$quake_cmd.cmd_AddCommand('stopsound', $quake_sound.s_StopAllSoundsC);
		$quake_cmd.cmd_AddCommand('soundlist', $quake_sound.s_SoundList);
		$quake_cmd.cmd_AddCommand('soundinfo', $quake_sound.s_SoundInfo_f);
		$quake_cvar_t.cvar_RegisterVariable($quake_sound.$nosound);
		$quake_cvar_t.cvar_RegisterVariable($quake_sound.$volume);
		$quake_cvar_t.cvar_RegisterVariable($quake_sound.$precache);
		$quake_cvar_t.cvar_RegisterVariable($quake_sound.$loadas8bit);
		$quake_cvar_t.cvar_RegisterVariable($quake_sound.$bgmvolume);
		$quake_cvar_t.cvar_RegisterVariable($quake_sound.$bgmbuffer);
		$quake_cvar_t.cvar_RegisterVariable($quake_sound.$ambient_level);
		$quake_cvar_t.cvar_RegisterVariable($quake_sound.$ambient_fade);
		$quake_cvar_t.cvar_RegisterVariable($quake_sound.$snd_noextraupdate);
		$quake_cvar_t.cvar_RegisterVariable($quake_sound.$snd_show);
		$quake_cvar_t.cvar_RegisterVariable($quake_sound.$_snd_mixahead);
		//if (host_parms.memsize < 0x800000)
		//{
		//Cvar_Set ("loadas8bit", "1");
		//Con_Printf ("loading all sounds as 8bit\n");
		//}
		$quake_sound.$snd_initialized = true;
		$quake_sound.s_Startup();
		$quake_sound.$known_sfx = new Array($quake_sound.$maX_SFX);
		for (kk = 0; kk < $quake_sound.$maX_SFX; kk++) {
			$quake_sound.$known_sfx[kk] = new $quake_sound$sfx_t();
		}
		$quake_sound.$num_sfx = 0;
		// provides a tick sound until washed clean
		//	if (shm.buffer)
		//		shm.buffer[4] = shm.buffer[5] = 0x7f;	// force a pop for debugging
		for (kk = 0; kk < $quake_bspfile.nuM_AMBIENTS; kk++) {
			$quake_sound.$ambient_sfx[kk] = new $quake_sound$sfx_t();
		}
		$quake_sound.$ambient_sfx[$quake_bspfile.ambienT_WATER] = $quake_sound.s_PrecacheSound('ambience/water1.wav');
		$quake_sound.$ambient_sfx[$quake_bspfile.ambienT_SKY] = $quake_sound.s_PrecacheSound('ambience/wind2.wav');
		$quake_sound.s_StopAllSounds(true);
	};
	$quake_sound.s_Shutdown = function() {
		if ($quake_sound.$sound_started === 0) {
			return;
		}
		$quake_sound.$sound_started = 0;
	};
	$quake_sound.s_FindName = function(name) {
		var i;
		var sfx;
		if (ss.isNullOrUndefined(name)) {
			$quake_sys_linux.sys_Error('S_FindName: NULL\n');
		}
		if (name.length >= $quake_quakedef.maX_QPATH) {
			$quake_sys_linux.sys_Error('Sound name too long: ' + name);
		}
		// see if already loaded
		for (i = 0; i < $quake_sound.$num_sfx; i++) {
			if ($quake_sound.$known_sfx[i].name.compareTo(name) === 0) {
				return $quake_sound.$known_sfx[i];
			}
		}
		if ($quake_sound.$num_sfx === $quake_sound.$maX_SFX) {
			$quake_sys_linux.sys_Error('S_FindName: out of sfx_t');
		}
		sfx = $quake_sound.$known_sfx[i];
		sfx.name = name;
		$quake_sound.$num_sfx++;
		return sfx;
	};
	$quake_sound.s_TouchSound = function(name) {
		var sfx;
		if ($quake_sound.$sound_started === 0) {
			return;
		}
		sfx = $quake_sound.s_FindName(name);
	};
	$quake_sound.s_PrecacheSound = function(name) {
		var sfx;
		if ($quake_sound.$sound_started === 0 || $quake_sound.$nosound.value !== 0) {
			return null;
		}
		sfx = $quake_sound.s_FindName(name);
		// cache it in
		if ($quake_sound.$precache.value !== 0) {
			$quake_sound.s_LoadSound(sfx);
		}
		return sfx;
	};
	$quake_sound.snD_PickChannel = function(entnum, entchannel) {
		var ch_idx;
		var first_to_die;
		var life_left;
		// Check for replacement sound, or find the best one to replace
		first_to_die = -1;
		life_left = new $System_TimeSpan.$ctor1($System_TimeSpan.maxValue.get_ticks());
		for (ch_idx = $quake_bspfile.nuM_AMBIENTS; ch_idx < 12; ch_idx++) {
			if (entchannel !== 0 && $quake_sound.$channels[ch_idx].entnum === entnum && ($quake_sound.$channels[ch_idx].entchannel === entchannel || entchannel === -1)) {
				// allways override sound from same entity
				if (entnum === 195) {
					$quake_console.con_Printf('REPLACE ' + $quake_sound.$channels[ch_idx].sfx.name + '\n');
				}
				first_to_die = ch_idx;
				break;
			}
			// don't let monster sounds override player sounds
			if ($quake_sound.$channels[ch_idx].entnum === $quake_client.cl.viewentity && entnum !== $quake_client.cl.viewentity && ss.isValue($quake_sound.$channels[ch_idx].sfx)) {
				continue;
			}
			if (ss.isValue($quake_sound.$channels[ch_idx].media)) {
				// compute left time
				var end = $quake_sound.$channels[ch_idx].media.get_naturalDuration().get_timeSpan().subtract($quake_sound.$channels[ch_idx].media.get_position());
				if (end.compareTo(life_left) < 0) {
					life_left = end;
					first_to_die = ch_idx;
				}
			}
			else {
				first_to_die = ch_idx;
			}
			//                if (channels[ch_idx].sfx == null)
			//                {
			//                first_to_die = ch_idx;
			//                break;
			//                }
			//                first_to_die = ch_idx;
		}
		if (first_to_die === -1) {
			return null;
		}
		if (ss.isValue($quake_sound.$channels[first_to_die].sfx)) {
			if (ss.isValue($quake_sound.$channels[first_to_die].media) && $quake_sound.$channels[first_to_die].media.get_currentState() !== 3) {
				//if (channels[first_to_die].looping == 1)
				//channels[first_to_die].media.MediaEnded -= media_MediaEnded;
				$quake_sound.$channels[first_to_die].media.stop();
				$InnoveWare_Page.thePage.get_parentCanvas().get_children().remove($quake_sound.$channels[first_to_die].media);
				$quake_sound.$channels[first_to_die].media = null;
			}
			$quake_sound.$channels[first_to_die].sfx = null;
		}
		return $quake_sound.$channels[first_to_die];
	};
	$quake_sound.snD_Spatialize = function(ch) {
		var dot;
		var ldist, rdist, dist;
		var lscale, rscale, scale;
		var source_vec = new Array(3);
		var snd;
		// anything coming from the view entity will allways be full volume
		if (ch.entnum === $quake_client.cl.viewentity) {
			ch.leftvol = ch.master_vol;
			ch.rightvol = ch.master_vol;
			return;
		}
		// calculate stereo seperation and distance attenuation
		snd = ch.sfx;
		$quake_mathlib.vectorSubtract(ch.origin, $quake_sound.$listener_origin, source_vec);
		dist = $quake_mathlib.vectorNormalize(source_vec) * ch.dist_mult;
		dot = $quake_mathlib.dotProduct$1($quake_sound.$listener_right, source_vec);
		rscale = 1 + dot;
		lscale = 1 - dot;
		// add in distance effect
		scale = (1 - dist) * rscale;
		ch.rightvol = ss.Int32.trunc(ch.master_vol * scale);
		if (ch.rightvol < 0) {
			ch.rightvol = 0;
		}
		scale = (1 - dist) * lscale;
		ch.leftvol = ss.Int32.trunc(ch.master_vol * scale);
		if (ch.leftvol < 0) {
			ch.leftvol = 0;
		}
	};
	$quake_sound.s_StartSound = function(entnum, entchannel, sfx, origin, fvol, attenuation) {
		var target_chan, check;
		var sc;
		var vol;
		var ch_idx;
		var skip;
		//if (entnum != 195)
		//return;
		if ($quake_sound.$sound_started === 0) {
			return;
		}
		if (ss.isNullOrUndefined(sfx)) {
			return;
		}
		if ($quake_sound.$nosound.value !== 0) {
			return;
		}
		vol = ss.Int32.trunc(fvol * 255);
		// pick a channel to play on
		target_chan = $quake_sound.snD_PickChannel(entnum, entchannel);
		if (ss.isNullOrUndefined(target_chan)) {
			return;
		}
		// spatialize
		$quake_mathlib.vectorCopy(origin, target_chan.origin);
		target_chan.dist_mult = attenuation / $quake_sound.$sound_nominal_clip_dist;
		target_chan.master_vol = vol;
		target_chan.entnum = entnum;
		target_chan.entchannel = entchannel;
		$quake_sound.snD_Spatialize(target_chan);
		if (target_chan.leftvol === 0 && target_chan.rightvol === 0) {
			return;
		}
		// not audible at all
		// new channel
		sc = $quake_sound.s_LoadSound(sfx);
		if (ss.isNullOrUndefined(sc)) {
			target_chan.sfx = null;
			return;
			// couldn't load the sound's data
		}
		target_chan.sfx = sfx;
		//            if (sc.loopstart != -1)
		//            console.Con_Printf(sfx.name + " " + entnum + " " + entchannel + "\n");
		var media = new $System_Windows_Controls_MediaElement();
		target_chan.media = media;
		media.set_autoPlay(true);
		media.setSource(new $System_IO_MemoryStream(sc.data));
		media.set_tag(target_chan);
		//if (sc.loopstart != -1)
		//{
		//media.MediaEnded += media_MediaEnded;
		//target_chan.looping = 1;
		//}
		//else
		media.add_mediaEnded(function() {
			$quake_sound.$media_MediaEnded2(media, null);
		});
		$quake_sound.setVolume(target_chan);
		$InnoveWare_Page.thePage.get_parentCanvas().get_children().add(media);
	};
	$quake_sound.s_StopSound = function(entnum, entchannel) {
		var i;
		for (i = 0; i < $quake_sound.maX_DYNAMIC_CHANNELS; i++) {
			if ($quake_sound.$channels[i].entnum === entnum && $quake_sound.$channels[i].entchannel === entchannel) {
				if (ss.isValue($quake_sound.$channels[i].media)) {
					$quake_sound.$channels[i].media.stop();
					$InnoveWare_Page.thePage.get_parentCanvas().get_children().remove($quake_sound.$channels[i].media);
				}
				$quake_sound.$channels[i].sfx = null;
				return;
			}
		}
	};
	$quake_sound.s_StopAllSounds = function(clear) {
		var i;
		if ($quake_sound.$sound_started === 0) {
			return;
		}
		$quake_sound.$total_channels = 12;
		// no statics
		for (i = 0; i < $quake_sound.maX_CHANNELS; i++) {
			if (ss.isValue($quake_sound.$channels[i].sfx)) {
				if (ss.isValue($quake_sound.$channels[i].media)) {
					$quake_sound.$channels[i].media.stop();
					$InnoveWare_Page.thePage.get_parentCanvas().get_children().remove($quake_sound.$channels[i].media);
				}
				$quake_sound.$channels[i].sfx = null;
			}
		}
	};
	$quake_sound.s_StopAllSoundsC = function() {
		$quake_sound.s_StopAllSounds(true);
	};
	$quake_sound.setVolume = function(ch) {
		if (ch.leftvol === 0 && ch.rightvol === 0) {
			ch.media.set_volume(0);
		}
		else {
			var max = ch.rightvol;
			if (ch.leftvol > max) {
				max = ch.leftvol;
			}
			ch.media.set_volume(ch.master_vol / 255);
			ch.media.set_balance((ch.rightvol - ch.leftvol) / max);
		}
	};
	$quake_sound.s_StaticSound = function(sfx, origin, vol, attenuation) {
		var ss;
		var sc;
		if (ss.isNullOrUndefined(sfx)) {
			return;
		}
		if ($quake_sound.$total_channels === $quake_sound.maX_CHANNELS) {
			$quake_console.con_Printf('total_channels == MAX_CHANNELS\n');
			return;
		}
		ss = $quake_sound.$channels[$quake_sound.$total_channels];
		$quake_sound.$total_channels++;
		sc = $quake_sound.s_LoadSound(sfx);
		if (ss.isNullOrUndefined(sc)) {
			return;
		}
		if (sc.loopstart === -1) {
			$quake_console.con_Printf('Sound ' + sfx.name + ' not looped\n');
			return;
		}
		ss.sfx = sfx;
		$quake_mathlib.vectorCopy(origin, ss.origin);
		ss.master_vol = ss.Int32.trunc(vol);
		ss.dist_mult = attenuation / 64 / $quake_sound.$sound_nominal_clip_dist;
		$quake_sound.snD_Spatialize(ss);
		var media = new $System_Windows_Controls_MediaElement();
		ss.media = media;
		media.set_autoPlay(true);
		media.setSource(new $System_IO_MemoryStream(sc.data));
		media.set_tag(ss);
		throw new $System_NotImplementedException();
		$quake_sound.setVolume(ss);
		$InnoveWare_Page.thePage.get_parentCanvas().get_children().add(media);
	};
	$quake_sound.$media_MediaEnded = function(sender, e) {
		var media = Type.cast(sender, $System_Windows_Controls_MediaElement);
		media.stop();
		media.play();
	};
	$quake_sound.$media_MediaEnded2 = function(sender, e) {
		var media = Type.cast(sender, $System_Windows_Controls_MediaElement);
		media.stop();
		var ch = Type.cast(media.get_tag(), $quake_sound$channel_t);
		$InnoveWare_Page.thePage.get_parentCanvas().get_children().remove(media);
		ch.sfx = null;
	};
	$quake_sound.s_UpdateAmbientSounds = function() {
		var l;
		var vol;
		var ambient_channel;
		var chan;
		if (!$quake_sound.$snd_ambient) {
			return;
		}
		// calc ambient sound levels
		if (ss.isNullOrUndefined($quake_client.cl.worldmodel)) {
			return;
		}
		l = $quake_model.mod_PointInLeaf($quake_sound.$listener_origin, $quake_client.cl.worldmodel);
		if (ss.isNullOrUndefined(l) || $quake_sound.$ambient_level.value === 0) {
			for (ambient_channel = 0; ambient_channel < $quake_bspfile.nuM_AMBIENTS; ambient_channel++) {
				$quake_sound.$channels[ambient_channel].sfx = null;
			}
			return;
		}
		for (ambient_channel = 0; ambient_channel < $quake_bspfile.nuM_AMBIENTS; ambient_channel++) {
			chan = $quake_sound.$channels[ambient_channel];
			chan.sfx = $quake_sound.$ambient_sfx[ambient_channel];
			vol = $quake_sound.$ambient_level.value * l.ambient_sound_level[ambient_channel];
			if (vol < 8) {
				vol = 0;
			}
			// don't adjust volume too fast
			if (chan.master_vol < vol) {
				chan.master_vol += ss.Int32.trunc($quake_host.host_frametime * $quake_sound.$ambient_fade.value);
				if (chan.master_vol > vol) {
					chan.master_vol = ss.Int32.trunc(vol);
				}
			}
			else if (chan.master_vol > vol) {
				chan.master_vol -= ss.Int32.trunc($quake_host.host_frametime * $quake_sound.$ambient_fade.value);
				if (chan.master_vol < vol) {
					chan.master_vol = ss.Int32.trunc(vol);
				}
			}
			chan.leftvol = chan.rightvol = chan.master_vol;
		}
	};
	$quake_sound.s_Update = function(origin, forward, right, up) {
		var i, j;
		var total;
		var ch;
		var combine;
		if ($quake_sound.$sound_started === 0 || $quake_sound.$snd_blocked > 0) {
			return;
		}
		$quake_mathlib.vectorCopy(origin, $quake_sound.$listener_origin);
		$quake_mathlib.vectorCopy(forward, $quake_sound.$listener_forward);
		$quake_mathlib.vectorCopy(right, $quake_sound.$listener_right);
		$quake_mathlib.vectorCopy(up, $quake_sound.$listener_up);
		// update general area ambient sound sources
		$quake_sound.s_UpdateAmbientSounds();
		combine = null;
		// update spatialization for static and dynamic sounds	
		for (i = $quake_bspfile.nuM_AMBIENTS; i < $quake_sound.$total_channels; i++) {
			ch = $quake_sound.$channels[i];
			if (ss.isNullOrUndefined(ch.sfx)) {
				continue;
			}
			$quake_sound.snD_Spatialize(ch);
			// respatialize channel
			if (ch.leftvol === 0 && ch.rightvol === 0) {
				continue;
			}
			// try to combine static sounds with a previous channel of the same
			// sound effect so we don't mix five torches every frame
			if (i >= 12) {
				// see if it can just use the last one
				if (ss.isValue(combine) && ss.referenceEquals(combine.sfx, ch.sfx)) {
					combine.leftvol += ch.leftvol;
					combine.rightvol += ch.rightvol;
					ch.leftvol = ch.rightvol = 0;
					continue;
				}
				// search for one
				combine = $quake_sound.$channels[12];
				for (j = 12; j < i; j++) {
					combine = $quake_sound.$channels[j];
					if (ss.referenceEquals(combine.sfx, ch.sfx)) {
						break;
					}
				}
				if (j === $quake_sound.$total_channels) {
					combine = null;
				}
				else {
					if (!ss.referenceEquals(combine, ch) && ss.isValue(combine)) {
						combine.leftvol += ch.leftvol;
						combine.rightvol += ch.rightvol;
						ch.leftvol = ch.rightvol = 0;
					}
					continue;
				}
			}
		}
		//
		// debugging output
		//
		if ($quake_sound.$snd_show.value !== 0) {
			total = 0;
			for (i = 0; i < $quake_sound.$total_channels; i++) {
				ch = $quake_sound.$channels[i];
				if (ss.isValue(ch.sfx) && (ch.leftvol !== 0 || ch.rightvol !== 0)) {
					//Con_Printf ("%3i %3i %s\n", ch.leftvol, ch.rightvol, ch.sfx.name);
					total++;
				}
			}
			$quake_console.con_Printf('----(' + total + ')----\n');
		}
		// mix some sound
		$quake_sound.s_Update_();
	};
	$quake_sound.s_ExtraUpdate = function() {
		if ($quake_sound.$snd_noextraupdate.value !== 0) {
			return;
		}
		// don't pollute timings
		$quake_sound.s_Update_();
	};
	$quake_sound.s_Update_ = function() {
		var i;
		var ch;
		// paint in the channels.
		for (i = 0; i < $quake_sound.$total_channels; i++) {
			ch = $quake_sound.$channels[i];
			if (ss.isNullOrUndefined(ch.sfx) || ss.isNullOrUndefined(ch.media)) {
				continue;
			}
			$quake_sound.setVolume(ch);
			//if (ch.entnum == 195)
			//console.Con_Printf("UPDATE " + ch.sfx.name + " " + ch.master_vol + " " + ch.leftvol + " " + ch.rightvol + "\n");
			//if (ch.media.CurrentState == System.Windows.Media.MediaElementState.Playing)
			//{
			//TimeSpan end = ch.media.NaturalDuration.TimeSpan.Subtract(new TimeSpan(5000000));
			//if (ch.sfx.cache.loopstart != -1 && ch.media.Position.CompareTo(end) >= 0)
			//{
			//ch.media.Position = new TimeSpan(ch.media.Position.Subtract(end).Ticks);
			//}
			//}
			//else
			//if (ch.media.CurrentState == System.Windows.Media.MediaElementState.Paused)
			//{
			//if (ch.sfx.cache.loopstart != -1)
			//{
			////ch.media.Position = new TimeSpan(0);
			//ch.media.Stop();
			//ch.media.Play();
			//}
			//else
			//{
			//ch.media.Stop();
			//Page.thePage.parentCanvas.Children.Remove(ch.media);
			//ch.media = null;
			//ch.sfx = null;
			//}
			//}
		}
	};
	$quake_sound.s_Play = function() {
		var i;
		var name = $System_StringExtensions.stringOfLength(256);
		var sfx;
		i = 1;
		while (i < $quake_cmd.cmd_Argc()) {
			if ($quake_cmd.cmd_Argv(i).indexOf(String.fromCharCode(46)) === -1) {
				name = $quake_cmd.cmd_Argv(i);
				name += '.wav';
			}
			else {
				name = $quake_cmd.cmd_Argv(i);
			}
			sfx = $quake_sound.s_PrecacheSound(name);
			$quake_sound.s_StartSound($quake_sound.$hashS_Play++, 0, sfx, $quake_sound.$listener_origin, 1, 1);
			i++;
		}
	};
	$quake_sound.s_PlayVol = function() {
	};
	$quake_sound.s_SoundList = function() {
		var i;
		var sfx;
		var sc;
		var size, total;
		total = 0;
		for (i = 0; i < $quake_sound.$num_sfx; i++) {
			sfx = $quake_sound.$known_sfx[i];
			sc = sfx.cache;
			if (ss.isNullOrUndefined(sc)) {
				continue;
			}
			//size = sc.length*sc.width*(sc.stereo+1);
			//total += size;
			if (sc.loopstart >= 0) {
				$quake_console.con_Printf('L');
			}
			else {
				$quake_console.con_Printf(' ');
			}
			$quake_console.con_Printf(sfx.name);
			//"(%2db) %6i : %s\n", sc.width * 8, size, sfx.name);
		}
		$quake_console.con_Printf('Total resident: ' + total + '\n');
	};
	$quake_sound.s_LocalSound = function(sound) {
		var sfx;
		if ($quake_sound.$nosound.value !== 0) {
			return;
		}
		if ($quake_sound.$sound_started === 0) {
			return;
		}
		sfx = $quake_sound.s_PrecacheSound(sound);
		if (ss.isNullOrUndefined(sfx)) {
			$quake_console.con_Printf('S_LocalSound: can\'t cache ' + sound + '\n');
			return;
		}
		$quake_sound.s_StartSound($quake_client.cl.viewentity, -1, sfx, $quake_mathlib.vec3_origin, 1, 1);
	};
	$quake_sound.s_LoadSound = function(s) {
		var namebuffer = $System_StringExtensions.stringOfLength(256);
		var data;
		var sc;
		// see if still in memory
		sc = s.cache;
		if (ss.isValue(sc)) {
			return sc;
		}
		//Con_Printf ("S_LoadSound: %x\n", (int)stackbuf);
		// load it in
		namebuffer = 'sound/';
		namebuffer += s.name;
		namebuffer += '.mp3';
		//	Con_Printf ("loading %s\n",namebuffer);
		data = $quake_common.coM_LoadStackFile(namebuffer, null, 0);
		if (ss.isNullOrUndefined(data)) {
			$quake_console.con_Printf('Couldn\'t load ' + namebuffer + '\n');
			return null;
		}
		sc = new $quake_sound$sfxcache_t();
		s.cache = sc;
		if (ss.isNullOrUndefined(sc)) {
			return null;
		}
		sc.loopstart = -1;
		for (var kk = 0; kk < $quake_sound.$loops.length; kk++) {
			if (s.name.compareTo($quake_sound.$loops[kk]) === 0) {
				sc.loopstart = 1;
				break;
			}
		}
		sc.data = data;
		return sc;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.sound.channel_t
	var $quake_sound$channel_t = function() {
		this.sfx = null;
		this.leftvol = 0;
		this.rightvol = 0;
		this.looping = 0;
		this.entnum = 0;
		this.entchannel = 0;
		this.origin = new Array(3);
		this.dist_mult = 0;
		this.master_vol = 0;
		this.skip = 0;
		this.media = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.sound.sfx_t
	var $quake_sound$sfx_t = function() {
		this.name = $System_StringExtensions.stringOfLength($quake_quakedef.maX_QPATH);
		this.cache = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.sound.sfxcache_t
	var $quake_sound$sfxcache_t = function() {
		this.loopstart = 0;
		this.data = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.sys_linux
	var $quake_sys_linux = function() {
		this.$isDedicated = false;
		this.$cachedir = '/tmp';
	};
	$quake_sys_linux.prototype = {
		$sys_DebugNumber: function(y, val) {
		},
		$sys_Warn: function(warning) {
			ss.Debug.writeln('Warning: ' + warning);
		},
		$sys_FileTime: function(path) {
			return -1;
		},
		$sys_mkdir: function(path) {
		},
		$sys_DebugLog: function(file, fmt, strings) {
		},
		$sys_EditFile: function(filename) {
		},
		$alarm_handler: function(x) {
			//oktogo=1;
		},
		$floating_point_exception_handler: function(whatever) {
		},
		$sys_ConsoleInput: function() {
			return null;
		},
		$sys_HighFPPrecision: function() {
		},
		$sys_LowFPPrecision: function() {
		},
		$sys_MakeCodeWriteable: function(startaddr, length) {
		}
	};
	$quake_sys_linux.sys_Printf = function(text) {
		$quake_sys_linux.$printbuffer += text;
		if ($quake_sys_linux.$printbuffer.charCodeAt($quake_sys_linux.$printbuffer.length - 1) === 10) {
			ss.Debug.writeln($quake_sys_linux.$printbuffer.substring(0, $quake_sys_linux.$printbuffer.length - 1));
			$quake_sys_linux.$printbuffer = '';
		}
	};
	$quake_sys_linux.sys_Quit = function() {
	};
	$quake_sys_linux.$sys_Init = function() {
	};
	$quake_sys_linux.sys_Error = function(error) {
		console.info('Error: ' + error);
		//            Debug.WriteLine("Error: " + error);
		//            Host_Shutdown ();
		throw new ss.Exception();
	};
	$quake_sys_linux.$findhandle = function() {
		var i;
		for (i = 1; i < $quake_sys_linux.$maX_HANDLES; i++) {
			if (ss.isNullOrUndefined($quake_sys_linux.sys_handles[i])) {
				return i;
			}
		}
		$quake_sys_linux.sys_Error('out of handles');
		return -1;
	};
	$quake_sys_linux.sys_FileOpenRead = function(path, handle) {
		if (path.startsWith('./')) {
			path = path.substring(2);
		}
		var si = getResourceStream(new $System_Uri('InnoveWare;component/' + path, 2));
		if (ss.isNullOrUndefined(si)) {
			handle.$ = -1;
			return -1;
		}
		handle.$ = $quake_sys_linux.$findhandle();
		$quake_sys_linux.sys_handles[handle.$] = si;
		return si.get_stream().get_length();
	};
	$quake_sys_linux.sys_FileOpenWrite = function(path) {
		return -1;
	};
	$quake_sys_linux.sys_FileWrite = function(handle, src, count) {
		return -1;
	};
	$quake_sys_linux.sys_FileClose = function(handle) {
		$quake_sys_linux.sys_handles[handle].get_stream().close();
		$quake_sys_linux.sys_handles[handle] = null;
	};
	$quake_sys_linux.sys_FileSeek = function(handle, position) {
		$quake_sys_linux.sys_handles[handle].get_stream().seek(position, 0);
	};
	$quake_sys_linux.sys_FileRead = function(handle, dest, count) {
		return $quake_sys_linux.sys_handles[handle].get_stream().read(dest, 0, count);
	};
	$quake_sys_linux.sys_FloatTime = function() {
		var now = Date.get_now();
		return DateTimeExtensions.getTicks(now) / 10000000;
	};
	$quake_sys_linux.$sys_LineRefresh = function() {
	};
	$quake_sys_linux.main = function(c, v) {
		var time, oldtime, newtime;
		var parms = new $quake_quakedef$quakeparms_t();
		var j;
		//COM_InitArgv(c, v);
		//parms.argc = com_argc;
		//parms.argv = com_argv;
		parms.memsize = 8388608;
		parms.basedir = $quake_sys_linux.$basedir;
		$quake_host.host_Init(parms);
		$quake_sys_linux.$sys_Init();
		if ($quake_common.coM_CheckParm('-nostdout') !== 0) {
			$quake_sys_linux.$nostdout = 1;
		}
		else {
			ss.Debug.writeln('Linux Quake -- Version ' + $quake_quakedef.linuX_VERSION);
		}
		//cmd.Cbuf_InsertText("menu_main\n");
		return 0;
		//    oldtime = Sys_FloatTime () - 0.1;
		//    while (true)
		//    {
		//        newtime = Sys_FloatTime ();
		//        time = newtime - oldtime;
		//        /*if (cls.state == ca_dedicated)
		//        {   // play vcrfiles at max speed
		//            if (time < sys_ticrate.value && (vcrFile == -1 || recording) )
		//            {
		//                usleep(1);
		//                continue;       // not time to run a server only tic yet
		//            }
		//            time = sys_ticrate.value;
		//        }*/
		//        /*if (time > sys_ticrate.value*2)
		//            oldtime = newtime;
		//        else
		//            oldtime += time;*/
		//        host.Host_Frame (time);
		//        if (sys_linerefresh.value != 0)
		//            Sys_LineRefresh ();
		//        Thread.Sleep(200);
		//    }
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.vid
	var $quake_vid = function() {
		this.$vid_testendtime = 0;
		this.$vid_wait = new $quake_cvar_t('vid_wait', '0');
		this.$vid_nopageflip = new $quake_cvar_t.$ctor1('vid_nopageflip', '0', true);
		this.$_vid_wait_override = new $quake_cvar_t.$ctor1('_vid_wait_override', '0', true);
		this.$_vid_default_mode = new $quake_cvar_t.$ctor1('_vid_default_mode', '0', true);
		this.$_vid_default_mode_win = new $quake_cvar_t.$ctor1('_vid_default_mode_win', '1', true);
		this.$vid_config_x = new $quake_cvar_t.$ctor1('vid_config_x', '800', true);
		this.$vid_config_y = new $quake_cvar_t.$ctor1('vid_config_y', '600', true);
		this.$vid_stretch_by_2 = new $quake_cvar_t.$ctor1('vid_stretch_by_2', '1', true);
		this.$_windowed_mouse = new $quake_cvar_t.$ctor1('_windowed_mouse', '0', true);
		this.$vid_fullscreen_mode = new $quake_cvar_t.$ctor1('vid_fullscreen_mode', '3', true);
		this.$vid_windowed_mode = new $quake_cvar_t.$ctor1('vid_windowed_mode', '0', true);
		this.$block_switch = new $quake_cvar_t.$ctor1('block_switch', '0', true);
		this.$vid_window_x = new $quake_cvar_t.$ctor1('vid_window_x', '0', true);
		this.$vid_window_y = new $quake_cvar_t.$ctor1('vid_window_y', '0', true);
		this.$d_con_indirect = 0;
	};
	$quake_vid.prototype = {
		$viD_NumModes: function() {
			return $quake_vid.$numvidmodes;
		},
		$viD_Shutdown: function() {
			$quake_vid.$vid_testingmode = 0;
		},
		$d_BeginDirectRect: function(x, y, pbitmap, width, height) {
		},
		$d_EndDirectRect: function(x, y, width, height) {
		},
		$viD_MenuDraw: function() {
		}
	};
	$quake_vid.viD_Init = function(palette) {
		$quake_vid.$vid_testingmode = 0;
		$quake_vid.$vid_modenum = ss.Int32.trunc($quake_vid.$vid_mode.value);
		$quake_vid.$viD_SetMode($quake_vid.$vid_modenum, palette);
		$quake_vid.$vid_realmode = $quake_vid.$vid_modenum;
		$quake_draw.d_pzbuffer = new Array($quake_screen.vid.width * $quake_screen.vid.height);
	};
	$quake_vid.$viD_SetMode = function(modenum, palette) {
		var stat;
		if (modenum >= $quake_vid.$numvidmodes || modenum < 0) {
			$quake_cvar_t.cvar_SetValue('vid_mode', $quake_vid.$vid_modenum);
			$quake_vid.$nomodecheck = true;
			$quake_console.con_Printf('No such video mode: ' + modenum);
			$quake_vid.$nomodecheck = false;
			modenum = 0;
			// mode hasn't been set yet, so initialize to base
			//  mode since they gave us an invalid initial mode
			return 0;
		}
		// initialize the new mode
		$quake_screen.vid.width = $InnoveWare_Page.gwidth;
		$quake_screen.vid.height = $InnoveWare_Page.gheight;
		$quake_screen.vid.aspect = $quake_screen.vid.height / $quake_screen.vid.width * 1.33333333333333;
		$quake_screen.vid.rowbytes = $quake_screen.vid.width;
		$quake_screen.vid.numpages = 1;
		$quake_screen.vid.colormap = $quake_host.host_colormap;
		$quake_screen.vid.fullbright = 256 - BitConverter.toInt32($quake_screen.vid.colormap, 8192);
		$quake_draw.d_InitCaches(656400);
		$quake_screen.vid.maxwarpwidth = $quake_draw.warP_WIDTH;
		$quake_screen.vid.maxwarpheight = $quake_draw.warP_HEIGHT;
		$quake_vid.viD_SetPalette(palette);
		$quake_screen.vid.buffer = new Uint8Array($quake_screen.vid.width * $quake_screen.vid.height);
		//surface = new BitmapData(vid_current_palette, screen.vid.buffer, (int)screen.vid.width, (int)screen.vid.height);
		$quake_vid.$surface = new $System_Windows_Media_Imaging_WriteableBitmap($quake_screen.vid.width, $quake_screen.vid.height);
		$InnoveWare_Page.thePage.get_image().source = $quake_vid.$surface;
		//Page.thePage.image2.Source = surface;
		//Page.thePage.image3.Source = surface;
		//Page.thePage.image4.Source = surface;
		$quake_screen.vid.conbuffer = $quake_screen.vid.buffer;
		$quake_screen.vid.conrowbytes = $quake_screen.vid.rowbytes;
		$quake_screen.vid.conwidth = $quake_screen.vid.width;
		$quake_screen.vid.conheight = $quake_screen.vid.height;
		$quake_vid.$vid_modenum = modenum;
		$quake_cvar_t.cvar_SetValue('vid_mode', $quake_vid.$vid_modenum);
		$quake_screen.vid.recalc_refdef = true;
		return 1;
	};
	$quake_vid.viD_SetPalette = function(palette) {
		if (!ss.referenceEquals(palette, $quake_vid.$vid_current_palette)) {
			$System_Buffer.blockCopy$1(palette, 0, $quake_vid.$vid_current_palette, 0, 768);
			//if (surface != null)
			//surface.UpdatePalette();
		}
	};
	$quake_vid.viD_ShiftPalette = function(palette) {
		$quake_vid.viD_SetPalette(palette);
	};
	$quake_vid.viD_Update = function(rects) {
		var ofs = $quake_vid.$surface.pixelWidth * rects.y + rects.x;
		var imageData = $quake_vid.$surface.context.getImageData(0, 0, $quake_vid.$surface.canvas.width, $quake_vid.$surface.canvas.height);
		for (var r = 0; r < rects.height; r++) {
			for (var col = 0; col < rects.width; col++) {
				var c = $quake_screen.vid.buffer[ofs + col];
				var offset = (ofs + col) * 4;
				//r
				imageData.data[offset] = $quake_vid.$vid_current_palette[c * 3];
				//g
				imageData.data[offset + 1] = $quake_vid.$vid_current_palette[c * 3 + 1];
				//b
				imageData.data[offset + 2] = $quake_vid.$vid_current_palette[c * 3 + 2];
				//a
				imageData.data[offset + 3] = 255;
				// todo only need to do this once???????
			}
			ofs += $quake_vid.$surface.pixelWidth;
		}
		$quake_vid.$surface.context.putImageData(imageData, 0, 0);
		//Page.thePage.image.Source = surface;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.vid.viddef_t
	var $quake_vid$viddef_t = function() {
		this.buffer = null;
		this.colormap = null;
		this.$colormap16 = null;
		this.fullbright = 0;
		this.rowbytes = 0;
		this.width = 0;
		this.height = 0;
		this.aspect = 0;
		this.numpages = 0;
		this.recalc_refdef = false;
		this.conbuffer = null;
		this.conrowbytes = 0;
		this.conwidth = 0;
		this.conheight = 0;
		this.maxwarpwidth = 0;
		this.maxwarpheight = 0;
		this.$direct = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.vid.vrect_t
	var $quake_vid$vrect_t = function() {
		this.x = 0;
		this.y = 0;
		this.width = 0;
		this.height = 0;
		this.pnext = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.view
	var $quake_view = function() {
	};
	$quake_view.v_CalcRoll = function(angles, velocity) {
		var sign;
		var side;
		var value;
		$quake_mathlib.angleVectors(angles, $quake_view.$forward, $quake_view.$right, $quake_view.$up);
		side = $quake_mathlib.dotProduct$1(velocity, $quake_view.$right);
		sign = ((side < 0) ? -1 : 1);
		side = Math.abs(side);
		value = $quake_view.$cl_rollangle.value;
		//	if (cl.inwater)
		//		value *= 6;
		if (side < $quake_view.$cl_rollspeed.value) {
			side = side * value / $quake_view.$cl_rollspeed.value;
		}
		else {
			side = value;
		}
		return side * sign;
	};
	$quake_view.$v_CalcBob = function() {
		var bob;
		var cycle;
		cycle = $quake_client.cl.time - ss.Int32.trunc($quake_client.cl.time / $quake_view.$cl_bobcycle.value) * $quake_view.$cl_bobcycle.value;
		cycle /= $quake_view.$cl_bobcycle.value;
		if (cycle < $quake_view.$cl_bobup.value) {
			cycle = $quake_mathlib.m_PI * cycle / $quake_view.$cl_bobup.value;
		}
		else {
			cycle = $quake_mathlib.m_PI + $quake_mathlib.m_PI * (cycle - $quake_view.$cl_bobup.value) / (1 - $quake_view.$cl_bobup.value);
		}
		// bob is proportional to velocity in the xy plane
		// (don't count Z, or jumping messes it up)
		bob = Math.sqrt($quake_client.cl.velocity[0] * $quake_client.cl.velocity[0] + $quake_client.cl.velocity[1] * $quake_client.cl.velocity[1]) * $quake_view.$cl_bob.value;
		//Con_Printf ("speed: %5.1f\n", Length(cl.velocity));
		bob = bob * 0.3 + bob * 0.7 * Math.sin(cycle);
		if (bob > 4) {
			bob = 4;
		}
		else if (bob < -7) {
			bob = -7;
		}
		return bob;
	};
	$quake_view.v_StartPitchDrift = function() {
		if ($quake_client.cl.laststop === $quake_client.cl.time) {
			return;
			// something else is keeping it from drifting
		}
		if ($quake_client.cl.nodrift || $quake_client.cl.pitchvel === 0) {
			$quake_client.cl.pitchvel = $quake_view.$v_centerspeed.value;
			$quake_client.cl.nodrift = false;
			$quake_client.cl.driftmove = 0;
		}
	};
	$quake_view.v_StopPitchDrift = function() {
		$quake_client.cl.laststop = $quake_client.cl.time;
		$quake_client.cl.nodrift = true;
		$quake_client.cl.pitchvel = 0;
	};
	$quake_view.$v_DriftPitch = function() {
		var delta, move;
		if ($quake_host.noclip_anglehack || !$quake_client.cl.onground || $quake_client.cls.demoplayback) {
			$quake_client.cl.driftmove = 0;
			$quake_client.cl.pitchvel = 0;
			return;
		}
		// don't count small mouse motion
		if ($quake_client.cl.nodrift) {
			//if (Math.Abs(client.cl.cmd.forwardmove) < client.cl_forwardspeed.value)
			//client.cl.driftmove = 0;
			//else
			$quake_client.cl.driftmove += $quake_host.host_frametime;
			if ($quake_client.cl.driftmove > $quake_view.$v_centermove.value) {
				$quake_view.v_StartPitchDrift();
			}
			return;
		}
		delta = $quake_client.cl.idealpitch - $quake_client.cl.viewangles[$quake_quakedef.PITCH];
		if (delta === 0) {
			$quake_client.cl.pitchvel = 0;
			return;
		}
		move = $quake_host.host_frametime * $quake_client.cl.pitchvel;
		$quake_client.cl.pitchvel += $quake_host.host_frametime * $quake_view.$v_centerspeed.value;
		//Con_Printf ("move: %f (%f)\n", move, host_frametime);
		if (delta > 0) {
			if (move > delta) {
				$quake_client.cl.pitchvel = 0;
				move = delta;
			}
			$quake_client.cl.viewangles[$quake_quakedef.PITCH] += move;
		}
		else if (delta < 0) {
			if (move > -delta) {
				$quake_client.cl.pitchvel = 0;
				move = -delta;
			}
			$quake_client.cl.viewangles[$quake_quakedef.PITCH] -= move;
		}
	};
	$quake_view.$buildGammaTable = function(g) {
		var i, inf;
		if (g === 1) {
			for (i = 0; i < 256; i++) {
				$quake_view.$gammatable[i] = i;
			}
			return;
		}
		for (i = 0; i < 256; i++) {
			inf = ss.Int32.trunc(255 * Math.pow((i + 0.5) / 255.5, g) + 0.5);
			if (inf < 0) {
				inf = 0;
			}
			if (inf > 255) {
				inf = 255;
			}
			$quake_view.$gammatable[i] = inf;
		}
	};
	$quake_view.$v_CheckGamma = function() {
		if ($quake_view.v_gamma.value === $quake_view.$oldgammavalue) {
			return false;
		}
		$quake_view.$oldgammavalue = $quake_view.v_gamma.value;
		$quake_view.$buildGammaTable($quake_view.v_gamma.value);
		$quake_screen.vid.recalc_refdef = true;
		// force a surface cache flush
		return true;
	};
	$quake_view.v_ParseDamage = function() {
		var armor, blood;
		var from = new Array(3);
		var i;
		var forward = new Array(3), right = new Array(3), up = new Array(3);
		var ent;
		var side;
		var count;
		armor = $quake_common.msG_ReadByte();
		blood = $quake_common.msG_ReadByte();
		for (i = 0; i < 3; i++) {
			from[i] = $quake_common.msG_ReadCoord();
		}
		count = blood * 0.5 + armor * 0.5;
		if (count < 10) {
			count = 10;
		}
		$quake_client.cl.faceanimtime = $quake_client.cl.time + 0.2;
		// but sbar face into pain frame
		$quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].percent += ss.Int32.trunc(3 * count);
		if ($quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].percent < 0) {
			$quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].percent = 0;
		}
		if ($quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].percent > 150) {
			$quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].percent = 150;
		}
		if (armor > blood) {
			$quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].destcolor[0] = 200;
			$quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].destcolor[1] = 100;
			$quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].destcolor[2] = 100;
		}
		else if (armor !== 0) {
			$quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].destcolor[0] = 220;
			$quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].destcolor[1] = 50;
			$quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].destcolor[2] = 50;
		}
		else {
			$quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].destcolor[0] = 255;
			$quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].destcolor[1] = 0;
			$quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].destcolor[2] = 0;
		}
		//
		// calculate view angle kicks
		//
		ent = $quake_client.cl_entities[$quake_client.cl.viewentity];
		$quake_mathlib.vectorSubtract(from, ent.origin, from);
		$quake_mathlib.vectorNormalize(from);
		$quake_mathlib.angleVectors(ent.angles, forward, right, up);
		side = $quake_mathlib.dotProduct$1(from, right);
		$quake_view.$v_dmg_roll = count * side * $quake_view.$v_kickroll.value;
		side = $quake_mathlib.dotProduct$1(from, forward);
		$quake_view.$v_dmg_pitch = count * side * $quake_view.$v_kickpitch.value;
		$quake_view.$v_dmg_time = $quake_view.$v_kicktime.value;
	};
	$quake_view.$v_cshift_f = function() {
		$quake_view.$cshift_empty.destcolor[0] = parseInt($quake_cmd.cmd_Argv(1));
		$quake_view.$cshift_empty.destcolor[1] = parseInt($quake_cmd.cmd_Argv(2));
		$quake_view.$cshift_empty.destcolor[2] = parseInt($quake_cmd.cmd_Argv(3));
		$quake_view.$cshift_empty.percent = parseInt($quake_cmd.cmd_Argv(4));
	};
	$quake_view.$v_BonusFlash_f = function() {
		$quake_client.cl.cshifts[$quake_client.cshifT_BONUS].destcolor[0] = 215;
		$quake_client.cl.cshifts[$quake_client.cshifT_BONUS].destcolor[1] = 186;
		$quake_client.cl.cshifts[$quake_client.cshifT_BONUS].destcolor[2] = 69;
		$quake_client.cl.cshifts[$quake_client.cshifT_BONUS].percent = 50;
	};
	$quake_view.v_SetContentsColor = function(contents) {
		switch (contents) {
			case -1:
			case -2: {
				$quake_client.cl.cshifts[$quake_client.cshifT_CONTENTS] = $quake_view.$cshift_empty;
				break;
			}
			case -5: {
				$quake_client.cl.cshifts[$quake_client.cshifT_CONTENTS] = $quake_view.$cshift_lava;
				break;
			}
			case -4: {
				$quake_client.cl.cshifts[$quake_client.cshifT_CONTENTS] = $quake_view.$cshift_slime;
				break;
			}
			default: {
				$quake_client.cl.cshifts[$quake_client.cshifT_CONTENTS] = $quake_view.$cshift_water;
				break;
			}
		}
	};
	$quake_view.$v_CalcPowerupCshift = function() {
		if (($quake_client.cl.items & $quake_quakedef.iT_QUAD) !== 0) {
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].destcolor[0] = 0;
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].destcolor[1] = 0;
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].destcolor[2] = 255;
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].percent = 30;
		}
		else if (($quake_client.cl.items & $quake_quakedef.iT_SUIT) !== 0) {
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].destcolor[0] = 0;
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].destcolor[1] = 255;
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].destcolor[2] = 0;
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].percent = 20;
		}
		else if (($quake_client.cl.items & $quake_quakedef.iT_INVISIBILITY) !== 0) {
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].destcolor[0] = 100;
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].destcolor[1] = 100;
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].destcolor[2] = 100;
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].percent = 100;
		}
		else if (($quake_client.cl.items & $quake_quakedef.iT_INVULNERABILITY) !== 0) {
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].destcolor[0] = 255;
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].destcolor[1] = 255;
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].destcolor[2] = 0;
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].percent = 30;
		}
		else {
			$quake_client.cl.cshifts[$quake_client.cshifT_POWERUP].percent = 0;
		}
	};
	$quake_view.v_UpdatePalette = function() {
		var i, j;
		var new1;
		var basepal, newpal;
		var pal = new Uint8Array(768);
		var r, g, b;
		var force;
		$quake_view.$v_CalcPowerupCshift();
		new1 = false;
		for (i = 0; i < $quake_client.nuM_CSHIFTS; i++) {
			if ($quake_client.cl.cshifts[i].percent !== $quake_client.cl.prev_cshifts[i].percent) {
				new1 = true;
				$quake_client.cl.prev_cshifts[i].percent = $quake_client.cl.cshifts[i].percent;
			}
			for (j = 0; j < 3; j++) {
				if ($quake_client.cl.cshifts[i].destcolor[j] !== $quake_client.cl.prev_cshifts[i].destcolor[j]) {
					new1 = true;
					$quake_client.cl.prev_cshifts[i].destcolor[j] = $quake_client.cl.cshifts[i].destcolor[j];
				}
			}
		}
		// drop the damage value
		$quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].percent -= ss.Int32.trunc($quake_host.host_frametime * 150);
		if ($quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].percent <= 0) {
			$quake_client.cl.cshifts[$quake_client.cshifT_DAMAGE].percent = 0;
		}
		// drop the bonus value
		$quake_client.cl.cshifts[$quake_client.cshifT_BONUS].percent -= ss.Int32.trunc($quake_host.host_frametime * 100);
		if ($quake_client.cl.cshifts[$quake_client.cshifT_BONUS].percent <= 0) {
			$quake_client.cl.cshifts[$quake_client.cshifT_BONUS].percent = 0;
		}
		force = $quake_view.$v_CheckGamma();
		if (!new1 && !force) {
			return;
		}
		basepal = 0;
		newpal = 0;
		for (i = 0; i < 256; i++) {
			r = $quake_host.host_basepal[basepal + 0];
			g = $quake_host.host_basepal[basepal + 1];
			b = $quake_host.host_basepal[basepal + 2];
			basepal += 3;
			for (j = 0; j < $quake_client.nuM_CSHIFTS; j++) {
				r += $quake_client.cl.cshifts[j].percent * ($quake_client.cl.cshifts[j].destcolor[0] - r) >> 8;
				g += $quake_client.cl.cshifts[j].percent * ($quake_client.cl.cshifts[j].destcolor[1] - g) >> 8;
				b += $quake_client.cl.cshifts[j].percent * ($quake_client.cl.cshifts[j].destcolor[2] - b) >> 8;
			}
			pal[newpal + 0] = $quake_view.$gammatable[r];
			pal[newpal + 1] = $quake_view.$gammatable[g];
			pal[newpal + 2] = $quake_view.$gammatable[b];
			newpal += 3;
		}
		$quake_vid.viD_ShiftPalette(pal);
	};
	$quake_view.$angledelta = function(a) {
		a = $quake_mathlib.anglemod(a);
		if (a > 180) {
			a -= 360;
		}
		return a;
	};
	$quake_view.$calcGunAngle = function() {
		var yaw, pitch, move;
		yaw = $quake_render.r_refdef.viewangles[$quake_quakedef.YAW];
		pitch = -$quake_render.r_refdef.viewangles[$quake_quakedef.PITCH];
		yaw = $quake_view.$angledelta(yaw - $quake_render.r_refdef.viewangles[$quake_quakedef.YAW]) * 0.4;
		if (yaw > 10) {
			yaw = 10;
		}
		if (yaw < -10) {
			yaw = -10;
		}
		pitch = $quake_view.$angledelta(-pitch - $quake_render.r_refdef.viewangles[$quake_quakedef.PITCH]) * 0.4;
		if (pitch > 10) {
			pitch = 10;
		}
		if (pitch < -10) {
			pitch = -10;
		}
		move = $quake_host.host_frametime * 20;
		if (yaw > $quake_view.$oldyaw) {
			if ($quake_view.$oldyaw + move < yaw) {
				yaw = $quake_view.$oldyaw + move;
			}
		}
		else if ($quake_view.$oldyaw - move > yaw) {
			yaw = $quake_view.$oldyaw - move;
		}
		if (pitch > $quake_view.$oldpitch) {
			if ($quake_view.$oldpitch + move < pitch) {
				pitch = $quake_view.$oldpitch + move;
			}
		}
		else if ($quake_view.$oldpitch - move > pitch) {
			pitch = $quake_view.$oldpitch - move;
		}
		$quake_view.$oldyaw = yaw;
		$quake_view.$oldpitch = pitch;
		$quake_client.cl.viewent.angles[$quake_quakedef.YAW] = $quake_render.r_refdef.viewangles[$quake_quakedef.YAW] + yaw;
		$quake_client.cl.viewent.angles[$quake_quakedef.PITCH] = -($quake_render.r_refdef.viewangles[$quake_quakedef.PITCH] + pitch);
		$quake_client.cl.viewent.angles[$quake_quakedef.ROLL] -= $quake_view.$v_idlescale.value * Math.sin($quake_client.cl.time * $quake_view.$v_iroll_cycle.value) * $quake_view.$v_iroll_level.value;
		$quake_client.cl.viewent.angles[$quake_quakedef.PITCH] -= $quake_view.$v_idlescale.value * Math.sin($quake_client.cl.time * $quake_view.$v_ipitch_cycle.value) * $quake_view.$v_ipitch_level.value;
		$quake_client.cl.viewent.angles[$quake_quakedef.YAW] -= $quake_view.$v_idlescale.value * Math.sin($quake_client.cl.time * $quake_view.$v_iyaw_cycle.value) * $quake_view.$v_iyaw_level.value;
	};
	$quake_view.$v_BoundOffsets = function() {
		var ent;
		ent = $quake_client.cl_entities[$quake_client.cl.viewentity];
		// absolutely bound refresh reletive to entity clipping hull
		// so the view can never be inside a solid wall
		if ($quake_render.r_refdef.vieworg[0] < ent.origin[0] - 14) {
			$quake_render.r_refdef.vieworg[0] = ent.origin[0] - 14;
		}
		else if ($quake_render.r_refdef.vieworg[0] > ent.origin[0] + 14) {
			$quake_render.r_refdef.vieworg[0] = ent.origin[0] + 14;
		}
		if ($quake_render.r_refdef.vieworg[1] < ent.origin[1] - 14) {
			$quake_render.r_refdef.vieworg[1] = ent.origin[1] - 14;
		}
		else if ($quake_render.r_refdef.vieworg[1] > ent.origin[1] + 14) {
			$quake_render.r_refdef.vieworg[1] = ent.origin[1] + 14;
		}
		if ($quake_render.r_refdef.vieworg[2] < ent.origin[2] - 22) {
			$quake_render.r_refdef.vieworg[2] = ent.origin[2] - 22;
		}
		else if ($quake_render.r_refdef.vieworg[2] > ent.origin[2] + 30) {
			$quake_render.r_refdef.vieworg[2] = ent.origin[2] + 30;
		}
	};
	$quake_view.$v_AddIdle = function() {
		$quake_render.r_refdef.viewangles[$quake_quakedef.ROLL] += $quake_view.$v_idlescale.value * Math.sin($quake_client.cl.time * $quake_view.$v_iroll_cycle.value) * $quake_view.$v_iroll_level.value;
		$quake_render.r_refdef.viewangles[$quake_quakedef.PITCH] += $quake_view.$v_idlescale.value * Math.sin($quake_client.cl.time * $quake_view.$v_ipitch_cycle.value) * $quake_view.$v_ipitch_level.value;
		$quake_render.r_refdef.viewangles[$quake_quakedef.YAW] += $quake_view.$v_idlescale.value * Math.sin($quake_client.cl.time * $quake_view.$v_iyaw_cycle.value) * $quake_view.$v_iyaw_level.value;
	};
	$quake_view.$v_CalcViewRoll = function() {
		var side;
		side = $quake_view.v_CalcRoll($quake_client.cl_entities[$quake_client.cl.viewentity].angles, $quake_client.cl.velocity);
		$quake_render.r_refdef.viewangles[$quake_quakedef.ROLL] += side;
		if ($quake_view.$v_dmg_time > 0) {
			$quake_render.r_refdef.viewangles[$quake_quakedef.ROLL] += $quake_view.$v_dmg_time / $quake_view.$v_kicktime.value * $quake_view.$v_dmg_roll;
			$quake_render.r_refdef.viewangles[$quake_quakedef.PITCH] += $quake_view.$v_dmg_time / $quake_view.$v_kicktime.value * $quake_view.$v_dmg_pitch;
			$quake_view.$v_dmg_time -= $quake_host.host_frametime;
		}
		if ($quake_client.cl.stats[$quake_quakedef.staT_HEALTH] <= 0) {
			$quake_render.r_refdef.viewangles[$quake_quakedef.ROLL] = 80;
			// dead view angle
			return;
		}
	};
	$quake_view.$v_CalcIntermissionRefdef = function() {
		var ent, view;
		var old;
		// ent is the player model (visible when out of body)
		ent = $quake_client.cl_entities[$quake_client.cl.viewentity];
		// view is the weapon model (only visible from inside body)
		view = $quake_client.cl.viewent;
		$quake_mathlib.vectorCopy(ent.origin, $quake_render.r_refdef.vieworg);
		$quake_mathlib.vectorCopy(ent.angles, $quake_render.r_refdef.viewangles);
		view.model = null;
		// allways idle in intermission
		old = $quake_view.$v_idlescale.value;
		$quake_view.$v_idlescale.value = 1;
		$quake_view.$v_AddIdle();
		$quake_view.$v_idlescale.value = old;
	};
	$quake_view.$v_CalcRefdef = function() {
		var ent, view;
		var i;
		var forward = new Array(3), right = new Array(3), up = new Array(3);
		var angles = new Array(3);
		var bob;
		$quake_view.$v_DriftPitch();
		// ent is the player model (visible when out of body)
		ent = $quake_client.cl_entities[$quake_client.cl.viewentity];
		// view is the weapon model (only visible from inside body)
		view = $quake_client.cl.viewent;
		// transform the view offset by the model's matrix to get the offset from
		// model origin for the view
		ent.angles[$quake_quakedef.YAW] = $quake_client.cl.viewangles[$quake_quakedef.YAW];
		// the model should face
		// the view dir
		ent.angles[$quake_quakedef.PITCH] = -$quake_client.cl.viewangles[$quake_quakedef.PITCH];
		// the model should face
		// the view dir
		bob = $quake_view.$v_CalcBob();
		// refresh position
		$quake_mathlib.vectorCopy(ent.origin, $quake_render.r_refdef.vieworg);
		$quake_render.r_refdef.vieworg[2] += $quake_client.cl.viewheight + bob;
		// never let it sit exactly on a node line, because a water plane can
		// dissapear when viewed with the eye exactly on it.
		// the server protocol only specifies to 1/16 pixel, so add 1/32 in each axis
		$quake_render.r_refdef.vieworg[0] += 0.03125;
		$quake_render.r_refdef.vieworg[1] += 0.03125;
		$quake_render.r_refdef.vieworg[2] += 0.03125;
		//client.cl.viewangles[0] = 0; //stops player looking up!
		$quake_mathlib.vectorCopy($quake_client.cl.viewangles, $quake_render.r_refdef.viewangles);
		$quake_view.$v_CalcViewRoll();
		$quake_view.$v_AddIdle();
		// offsets
		angles[$quake_quakedef.PITCH] = -ent.angles[$quake_quakedef.PITCH];
		// because entity pitches are
		//  actually backward
		angles[$quake_quakedef.YAW] = ent.angles[$quake_quakedef.YAW];
		angles[$quake_quakedef.ROLL] = ent.angles[$quake_quakedef.ROLL];
		$quake_mathlib.angleVectors(angles, forward, right, up);
		for (i = 0; i < 3; i++) {
			$quake_render.r_refdef.vieworg[i] += $quake_view.$scr_ofsx.value * forward[i] + $quake_view.$scr_ofsy.value * right[i] + $quake_view.$scr_ofsz.value * up[i];
		}
		$quake_view.$v_BoundOffsets();
		// set up gun position
		$quake_mathlib.vectorCopy($quake_client.cl.viewangles, view.angles);
		$quake_view.$calcGunAngle();
		$quake_mathlib.vectorCopy(ent.origin, view.origin);
		view.origin[2] += $quake_client.cl.viewheight;
		for (i = 0; i < 3; i++) {
			view.origin[i] += forward[i] * bob * 0.4;
			//		view.origin[i] += right[i]*bob*0.4;
			//		view.origin[i] += up[i]*bob*0.8;
		}
		view.origin[2] += bob;
		// fudge position around to keep amount of weapon visible
		// roughly equal with different FOV
		if ($quake_screen.scr_viewsize.value === 110) {
			view.origin[2] += 1;
		}
		else if ($quake_screen.scr_viewsize.value === 100) {
			view.origin[2] += 2;
		}
		else if ($quake_screen.scr_viewsize.value === 90) {
			view.origin[2] += 1;
		}
		else if ($quake_screen.scr_viewsize.value === 80) {
			view.origin[2] += 0.5;
		}
		view.model = $quake_client.cl.model_precache[$quake_client.cl.stats[$quake_quakedef.staT_WEAPON]];
		view.frame = $quake_client.cl.stats[$quake_quakedef.staT_WEAPONFRAME];
		view.colormap = $quake_screen.vid.colormap;
		// set up the refresh position
		$quake_mathlib.vectorAdd($quake_render.r_refdef.viewangles, $quake_client.cl.punchangle, $quake_render.r_refdef.viewangles);
		// smooth out stair step ups
		if ($quake_client.cl.onground && ent.origin[2] - $quake_view.$oldz > 0) {
			var steptime;
			steptime = $quake_client.cl.time - $quake_client.cl.oldtime;
			if (steptime < 0) {
				steptime = 0;
			}
			$quake_view.$oldz += steptime * 80;
			if ($quake_view.$oldz > ent.origin[2]) {
				$quake_view.$oldz = ent.origin[2];
			}
			if (ent.origin[2] - $quake_view.$oldz > 12) {
				$quake_view.$oldz = ent.origin[2] - 12;
			}
			$quake_render.r_refdef.vieworg[2] += $quake_view.$oldz - ent.origin[2];
			view.origin[2] += $quake_view.$oldz - ent.origin[2];
		}
		else {
			$quake_view.$oldz = ent.origin[2];
		}
		if ($quake_chase.chase_active.value !== 0) {
			$quake_chase.chase_Update();
		}
	};
	$quake_view.v_RenderView = function() {
		if ($quake_console.con_forcedup) {
			return;
		}
		// don't allow cheats in multiplayer
		if ($quake_client.cl.maxclients > 1) {
			$quake_cvar_t.cvar_Set('scr_ofsx', '0');
			$quake_cvar_t.cvar_Set('scr_ofsy', '0');
			$quake_cvar_t.cvar_Set('scr_ofsz', '0');
		}
		if ($quake_client.cl.intermission !== 0) {
			// intermission / finale rendering
			$quake_view.$v_CalcIntermissionRefdef();
		}
		else if (!$quake_client.cl.paused) {
			$quake_view.$v_CalcRefdef();
		}
		$quake_render.r_PushDlights();
		$quake_render.r_RenderView();
		if ($quake_view.$crosshair.value !== 0) {
			$quake_draw.draw_Character(ss.Int32.trunc($quake_screen.scr_vrect.x + ss.Int32.div($quake_screen.scr_vrect.width, 2) + $quake_view.$cl_crossx.value), ss.Int32.trunc($quake_screen.scr_vrect.y + ss.Int32.div($quake_screen.scr_vrect.height, 2) + $quake_view.$cl_crossy.value), 43);
		}
	};
	$quake_view.v_Init = function() {
		$quake_cmd.cmd_AddCommand('v_cshift', $quake_view.$v_cshift_f);
		$quake_cmd.cmd_AddCommand('bf', $quake_view.$v_BonusFlash_f);
		$quake_cmd.cmd_AddCommand('centerview', $quake_view.v_StartPitchDrift);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.lcd_x);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$lcd_yaw);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$v_centermove);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$v_centerspeed);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$v_iyaw_cycle);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$v_iroll_cycle);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$v_ipitch_cycle);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$v_iyaw_level);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$v_iroll_level);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$v_ipitch_level);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$v_idlescale);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$crosshair);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$cl_crossx);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$cl_crossy);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$gl_cshiftpercent);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$scr_ofsx);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$scr_ofsy);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$scr_ofsz);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$cl_rollspeed);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$cl_rollangle);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$cl_bob);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$cl_bobcycle);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$cl_bobup);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$v_kicktime);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$v_kickroll);
		$quake_cvar_t.cvar_RegisterVariable($quake_view.$v_kickpitch);
		$quake_view.$buildGammaTable(1);
		// no gamma yet
		$quake_cvar_t.cvar_RegisterVariable($quake_view.v_gamma);
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.wad
	var $quake_wad = function() {
	};
	$quake_wad.prototype = {
		$w_GetLumpNum: function(num, offset) {
			var lump;
			if (num < 0 || num > $quake_wad.$wad_numlumps) {
				$quake_sys_linux.sys_Error('W_GetLumpNum: bad number: ' + num);
			}
			lump = $quake_wad.$wad_lumps[num];
			var buf = new Uint8Array(lump.$size);
			for (var kk = 0; kk < lump.$size; kk++) {
				buf[kk] = $quake_wad.$wad_base[lump.$filepos + kk];
			}
			return buf;
		}
	};
	$quake_wad.$w_CleanupName = function(_str) {
		return _str.toLowerCase();
	};
	$quake_wad.w_LoadWadFile = function(filename) {
		var lump_p;
		var header = new $quake_$wad$wadinfo_t();
		var i;
		var infotableofs;
		var ofs = {};
		var kk;
		$quake_wad.$wad_base = $quake_common.coM_LoadHunkFile(filename);
		if (ss.isNullOrUndefined($quake_wad.$wad_base)) {
			$quake_sys_linux.sys_Error('W_LoadWadFile: couldn\'t load ' + filename);
		}
		ofs.$ = 0;
		header.$identification = $quake_common.parseString$1($quake_wad.$wad_base, ofs, 4);
		header.$numlumps = $quake_common.parseInt($quake_wad.$wad_base, ofs);
		header.$infotableofs = $quake_common.parseInt($quake_wad.$wad_base, ofs);
		if (header.$identification !== 'WAD2') {
			$quake_sys_linux.sys_Error('Wad file ' + filename + 'doesn\'t have WAD2 id');
		}
		$quake_wad.$wad_numlumps = header.$numlumps;
		infotableofs = header.$infotableofs;
		$quake_wad.$wad_lumps = new Array($quake_wad.$wad_numlumps);
		ofs.$ = infotableofs;
		for (kk = 0; kk < $quake_wad.$wad_numlumps; kk++) {
			$quake_wad.$wad_lumps[kk] = new $quake_$wad$lumpinfo_t();
			$quake_wad.$wad_lumps[kk].$filepos = $quake_common.parseInt($quake_wad.$wad_base, ofs);
			$quake_wad.$wad_lumps[kk].$disksize = $quake_common.parseInt($quake_wad.$wad_base, ofs);
			$quake_wad.$wad_lumps[kk].$size = $quake_common.parseInt($quake_wad.$wad_base, ofs);
			$quake_wad.$wad_lumps[kk].$type = $quake_common.parseChar($quake_wad.$wad_base, ofs);
			$quake_wad.$wad_lumps[kk].$compression = $quake_common.parseChar($quake_wad.$wad_base, ofs);
			$quake_wad.$wad_lumps[kk].$pad1 = $quake_common.parseChar($quake_wad.$wad_base, ofs);
			$quake_wad.$wad_lumps[kk].$pad2 = $quake_common.parseChar($quake_wad.$wad_base, ofs);
			$quake_wad.$wad_lumps[kk].$name = $quake_common.parseString$1($quake_wad.$wad_base, ofs, 16);
		}
		for (i = 0; i < $quake_wad.$wad_numlumps; i++) {
			lump_p = $quake_wad.$wad_lumps[i];
			lump_p.$name = $quake_wad.$w_CleanupName(lump_p.$name);
		}
	};
	$quake_wad.$w_GetLumpinfo = function(name) {
		var i;
		var lump_p;
		var clean;
		clean = name;
		clean = $quake_wad.$w_CleanupName(clean);
		for (i = 0; i < $quake_wad.$wad_numlumps; i++) {
			lump_p = $quake_wad.$wad_lumps[i];
			if (clean.compareTo(lump_p.$name) === 0) {
				return lump_p;
			}
		}
		$quake_sys_linux.sys_Error('W_GetLumpinfo: ' + name + ' not found');
		return null;
	};
	$quake_wad.w_GetLumpName = function(name) {
		var lump;
		lump = $quake_wad.$w_GetLumpinfo(name);
		var buf = new Uint8Array(lump.$size);
		for (var kk = 0; kk < lump.$size; kk++) {
			buf[kk] = $quake_wad.$wad_base[lump.$filepos + kk];
		}
		return buf;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.wad.qpic_t
	var $quake_wad$qpic_t = function() {
		this.width = 0;
		this.height = 0;
		this.data = null;
	};
	$quake_wad$qpic_t.op_Implicit = function(buf) {
		var ofs = { $: 0 };
		var qpic = new $quake_wad$qpic_t();
		qpic.width = $quake_common.parseInt(buf, ofs);
		qpic.height = $quake_common.parseInt(buf, ofs);
		qpic.data = new Uint8Array(buf.length - ofs.$);
		$System_Buffer.blockCopy$1(buf, ofs.$, qpic.data, 0, buf.length - ofs.$);
		return qpic;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.world
	var $quake_world = function() {
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.world.plane_t
	var $quake_world$plane_t = function() {
		this.$normal = new Array(3);
		this.$dist = 0;
	};
	////////////////////////////////////////////////////////////////////////////////
	// quake.world.trace_t
	var $quake_world$trace_t = function() {
		this.$allsolid = false;
		this.$startsolid = false;
		this.$inopen = false;
		this.$inwater = false;
		this.$fraction = 0;
		this.$endpos = new Array(3);
		this.$plane = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.Buffer
	var $System_Buffer = function() {
	};
	$System_Buffer.blockCopy = function(src, srcOffset, dst, dstOffset, count) {
		for (var i = 0; i < count; i++) {
			dst[i + dstOffset] = src[i + srcOffset];
		}
	};
	$System_Buffer.blockCopy$1 = function(src, srcOffset, dst, dstOffset, count) {
		for (var i = 0; i < count; i++) {
			dst[i + dstOffset] = src[i + srcOffset];
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.Convert
	var $System_Convert = function() {
	};
	$System_Convert.toString$1 = function(value) {
		return value.toString();
	};
	$System_Convert.toChar = function(value) {
		return value;
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.FormatException
	var $System_FormatException = function() {
		ss.Exception.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.NotImplementedException
	var $System_NotImplementedException = function() {
		ss.Exception.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.Random
	var $System_Random = function() {
		this.$mt = null;
		var ticks = DateTimeExtensions.getTicks(Date.get_now());
		this.$mt = new MersenneTwister(ticks);
		//Environment.TickCount - actual MS Random
	};
	$System_Random.prototype = {
		nextDouble: function() {
			return this.$mt.genrand_real1();
		},
		next: function() {
			var real = this.$mt.genrand_real1();
			return Math.floor(real * 2147483647);
		},
		next$1: function(maxValue) {
			var real = this.$mt.genrand_real1();
			return Math.floor(real * maxValue);
		}
	};
	$System_Random.$ctor1 = function(seed) {
		this.$mt = null;
		this.$mt = new MersenneTwister(seed);
	};
	$System_Random.$ctor1.prototype = $System_Random.prototype;
	////////////////////////////////////////////////////////////////////////////////
	// System.StringExtensions
	var $System_StringExtensions = function() {
	};
	$System_StringExtensions.toCharArray = function(str) {
		throw new $System_NotImplementedException();
	};
	$System_StringExtensions.stringOfLength = function(length) {
		return String.fromChar(String.fromCharCode(0), length);
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.TimeSpan
	var $System_TimeSpan = function() {
		this.$_ticks = 0;
	};
	$System_TimeSpan.prototype = {
		get_ticks: function() {
			return this.$_ticks;
		},
		subtract: function(ts) {
			var ticks = this.$_ticks - ts.$_ticks;
			return new $System_TimeSpan.$ctor1(ticks);
		},
		compareTo: function(value) {
			if (ss.isNullOrUndefined(value)) {
				return 1;
			}
			var num = value.$_ticks;
			if (this.$_ticks > num) {
				return 1;
			}
			return ((this.$_ticks < num) ? -1 : 0);
		}
	};
	$System_TimeSpan.$ctor1 = function(ticks) {
		this.$_ticks = 0;
		this.$_ticks = ticks;
	};
	$System_TimeSpan.$ctor1.prototype = $System_TimeSpan.prototype;
	////////////////////////////////////////////////////////////////////////////////
	// System.Uri
	var $System_Uri = function(uriString, uriKind) {
		this.$uriString = null;
		this.$uriString = uriString;
	};
	$System_Uri.prototype = {
		toString: function() {
			return this.$uriString;
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.UriKind
	var $System_UriKind = function() {
	};
	$System_UriKind.prototype = { relativeOrAbsolute: 0, absolute: 1, relative: 2 };
	Type.registerEnum(global, 'System.UriKind', $System_UriKind, false);
	////////////////////////////////////////////////////////////////////////////////
	// System.Globalization.CultureInfo
	var $System_Globalization_CultureInfo = function(enUs) {
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.IO.BinaryReader
	var $System_IO_BinaryReader = function(stream) {
		this.$stream = null;
		this.$stream = stream;
	};
	$System_IO_BinaryReader.prototype = {
		readSingle: function() {
			return this.$stream.readFloat32();
		},
		readDouble: function() {
			return this.$stream.readFloat64();
		},
		readInt32: function() {
			return this.$stream.readInt32();
		},
		$readBytes: function(size) {
			return this.$stream.readBytes(size);
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.IO.MemoryStream
	var $System_IO_MemoryStream = function(data) {
		Stream.call(this, data.buffer);
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.IO.SeekOrigin
	var $System_IO_SeekOrigin = function() {
	};
	$System_IO_SeekOrigin.prototype = { begin: 0, current: 1, end: 2 };
	Type.registerEnum(global, 'System.IO.SeekOrigin', $System_IO_SeekOrigin, false);
	////////////////////////////////////////////////////////////////////////////////
	// System.Windows.Duration
	var $System_Windows_Duration = function(timeSpan) {
		this.$_timeSpan = null;
		this.$_timeSpan = timeSpan;
	};
	$System_Windows_Duration.prototype = {
		get_timeSpan: function() {
			return this.$_timeSpan;
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.Windows.MessageBox
	var $System_Windows_MessageBox = function() {
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.Windows.RoutedEventArgs
	var $System_Windows_RoutedEventArgs = function() {
		ss.EventArgs.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.Windows.Controls.Canvas
	var $System_Windows_Controls_Canvas = function() {
		this.$_children = [];
	};
	$System_Windows_Controls_Canvas.prototype = {
		get_children: function() {
			return this.$_children;
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.Windows.Controls.Image
	var $System_Windows_Controls_Image = function() {
		this.source = null;
	};
	$System_Windows_Controls_Image.prototype = {
		get_children: function() {
			throw new $System_NotImplementedException();
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.Windows.Controls.MediaElement
	var $System_Windows_Controls_MediaElement = function() {
		this.$_stream = null;
		this.$_duration = null;
		this.$_timePlayed = 0;
		this.$_tag = null;
		this.$_volume = 0;
		this.$_balance = 0;
		this.$1$AutoPlayField = false;
		this.bufferSource = null;
		this.audioGain = null;
		this.$1$MediaEndedField = null;
	};
	$System_Windows_Controls_MediaElement.prototype = {
		get_autoPlay: function() {
			return this.$1$AutoPlayField;
		},
		set_autoPlay: function(value) {
			this.$1$AutoPlayField = value;
		},
		get_tag: function() {
			return this.$_tag;
		},
		set_tag: function(value) {
			this.$_tag = value;
		},
		add_mediaEnded: function(value) {
			this.$1$MediaEndedField = Function.combine(this.$1$MediaEndedField, value);
		},
		remove_mediaEnded: function(value) {
			this.$1$MediaEndedField = Function.remove(this.$1$MediaEndedField, value);
		},
		get_volume: function() {
			return this.$_volume;
		},
		set_volume: function(value) {
			if (ss.isValue(this.audioGain)) {
				this.audioGain.value = value;
			}
			this.$_volume = value;
		},
		get_balance: function() {
			return this.$_balance;
		},
		set_balance: function(value) {
			this.$_balance = value;
		},
		get_position: function() {
			return new $System_TimeSpan.$ctor1(DateTimeExtensions.getTicks(Date.get_now()) - DateTimeExtensions.getTicks(this.$_timePlayed));
		},
		setNaturalDuration: function(duration) {
			this.$_duration = new $System_Windows_Duration(new $System_TimeSpan.$ctor1(duration));
		},
		get_naturalDuration: function() {
			return this.$_duration;
		},
		get_currentState: function() {
			// todo: can get playback state from js
			return 3;
		},
		setSource: function(stream) {
			this.$_stream = stream;
			if (this.get_autoPlay()) {
				this.play();
			}
		},
		stop: function() {
			throw new $System_NotImplementedException();
		},
		play: function() {
			this.$_timePlayed = Date.get_now();
			//.GetTicks();
			playSound(this.$_stream.dataStream._buffer, this);
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.Windows.Media.MediaElementState
	var $System_Windows_Media_MediaElementState = function() {
	};
	$System_Windows_Media_MediaElementState.prototype = { closed: 0, opening: 1, buffering: 2, playing: 3, paused: 4, stopped: 5, individualizing: 6, acquiringLicense: 7 };
	Type.registerEnum(global, 'System.Windows.Media.MediaElementState', $System_Windows_Media_MediaElementState, false);
	////////////////////////////////////////////////////////////////////////////////
	// System.Windows.Media.Imaging.BitmapImage
	var $System_Windows_Media_Imaging_BitmapImage = function() {
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.Windows.Media.Imaging.WriteableBitmap
	var $System_Windows_Media_Imaging_WriteableBitmap = function(width, height) {
		this.canvas = null;
		this.context = null;
		this.pixelWidth = 0;
		this.pixelHeight = 0;
		this.pixelWidth = width;
		this.pixelHeight = height;
		this.canvas = document.getElementById('gameCanvas');
		this.context = this.canvas.getContext('2d');
	};
	////////////////////////////////////////////////////////////////////////////////
	// System.Windows.Resources.StreamResourceInfo
	var $System_Windows_Resources_StreamResourceInfo = function(stream, contentType) {
		this.$_stream = null;
		if (ss.isNullOrUndefined(stream)) {
			throw new ss.Exception('stream');
		}
		this.$_stream = stream;
	};
	$System_Windows_Resources_StreamResourceInfo.prototype = {
		get_stream: function() {
			return this.$_stream;
		}
	};
	Type.registerClass(global, 'Window', $Window, Object);
	Type.registerClass(global, 'Helper.helper', $Helper_helper, Object);
	Type.registerClass(global, 'Helper.helper$ByteBuffer', $Helper_helper$ByteBuffer, Object);
	Type.registerClass(global, 'Helper.helper$FILE', $Helper_helper$FILE, Object);
	Type.registerClass(global, 'Helper.helper$ObjectBuffer', $Helper_helper$ObjectBuffer, Object);
	Type.registerClass(global, 'Helper.helper$UIntBuffer', $Helper_helper$UIntBuffer, Object);
	Type.registerClass(global, 'InnoveWare.Page', $InnoveWare_Page, Object);
	Type.registerClass(global, 'Missing.ArrayHelpers', $Missing_ArrayHelpers, Object);
	Type.registerClass(null, 'quake.$client$kbutton_t', $quake_$client$kbutton_t, Object);
	Type.registerClass(null, 'quake.$cmd$cmd_function_t', $quake_$cmd$cmd_function_t, Object);
	Type.registerClass(null, 'quake.$cmd$cmdalias_t', $quake_$cmd$cmdalias_t, Object);
	Type.registerClass(null, 'quake.$common$dpackfile_t', $quake_$common$dpackfile_t, Object);
	Type.registerClass(null, 'quake.$common$dpackheader_t', $quake_$common$dpackheader_t, Object);
	Type.registerClass(null, 'quake.$common$pack_t', $quake_$common$pack_t, Object);
	Type.registerClass(null, 'quake.$common$packfile_t', $quake_$common$packfile_t, Object);
	Type.registerClass(null, 'quake.$common$searchpath_t', $quake_$common$searchpath_t, Object);
	Type.registerClass(null, 'quake.$draw$rectdesc_t', $quake_$draw$rectdesc_t, Object);
	Type.registerClass(null, 'quake.$keys$keyname_t', $quake_$keys$keyname_t, Object);
	Type.registerClass(null, 'quake.$menu$episode_t', $quake_$menu$episode_t, Object);
	Type.registerClass(null, 'quake.$menu$level_t', $quake_$menu$level_t, Object);
	Type.registerClass(null, 'quake.$screen$pcx_t', $quake_$screen$pcx_t, Object);
	Type.registerClass(null, 'quake.$vrect_s', $quake_$vrect_s, Object);
	Type.registerClass(null, 'quake.$wad$lumpinfo_t', $quake_$wad$lumpinfo_t, Object);
	Type.registerClass(null, 'quake.$wad$wadinfo_t', $quake_$wad$wadinfo_t, Object);
	Type.registerClass(global, 'quake.bspfile', $quake_bspfile, Object);
	Type.registerClass(global, 'quake.bspfile$ByteBuffer', $quake_bspfile$ByteBuffer, Object);
	Type.registerClass(global, 'quake.bspfile$dclipnode_t', $quake_bspfile$dclipnode_t, Object);
	Type.registerClass(global, 'quake.bspfile$dedge_t', $quake_bspfile$dedge_t, Object);
	Type.registerClass(global, 'quake.bspfile$dface_t', $quake_bspfile$dface_t, Object);
	Type.registerClass(global, 'quake.bspfile$dheader_t', $quake_bspfile$dheader_t, Object);
	Type.registerClass(global, 'quake.bspfile$dleaf_t', $quake_bspfile$dleaf_t, Object);
	Type.registerClass(global, 'quake.bspfile$dmiptexlump_t', $quake_bspfile$dmiptexlump_t, Object);
	Type.registerClass(global, 'quake.bspfile$dmodel_t', $quake_bspfile$dmodel_t, Object);
	Type.registerClass(global, 'quake.bspfile$dnode_t', $quake_bspfile$dnode_t, Object);
	Type.registerClass(global, 'quake.bspfile$dplane_t', $quake_bspfile$dplane_t, Object);
	Type.registerClass(global, 'quake.bspfile$dvertex_t', $quake_bspfile$dvertex_t, Object);
	Type.registerClass(global, 'quake.bspfile$lump_t', $quake_bspfile$lump_t, Object);
	Type.registerClass(global, 'quake.bspfile$miptex_t', $quake_bspfile$miptex_t, Object);
	Type.registerClass(global, 'quake.bspfile$texinfo_t', $quake_bspfile$texinfo_t, Object);
	Type.registerClass(global, 'quake.chase', $quake_chase, Object);
	Type.registerClass(global, 'quake.client', $quake_client, Object);
	Type.registerClass(global, 'quake.client$beam_t', $quake_client$beam_t, Object);
	Type.registerClass(global, 'quake.client$client_state_t', $quake_client$client_state_t, Object);
	Type.registerClass(global, 'quake.client$client_static_t', $quake_client$client_static_t, Object);
	Type.registerClass(global, 'quake.client$cshift_t', $quake_client$cshift_t, Object);
	Type.registerClass(global, 'quake.client$dlight_t', $quake_client$dlight_t, Object);
	Type.registerClass(global, 'quake.client$lightstyle_t', $quake_client$lightstyle_t, Object);
	Type.registerClass(global, 'quake.client$scoreboard_t', $quake_client$scoreboard_t, Object);
	Type.registerClass(global, 'quake.client$usercmd_t', $quake_client$usercmd_t, Object);
	Type.registerClass(global, 'quake.cmd', $quake_cmd, Object);
	Type.registerClass(global, 'quake.common', $quake_common, Object);
	Type.registerClass(global, 'quake.common$sizebuf_t', $quake_common$sizebuf_t, Object);
	Type.registerClass(global, 'quake.console', $quake_console, Object);
	Type.registerClass(global, 'quake.crc', $quake_crc, Object);
	Type.registerClass(global, 'quake.cvar_t', $quake_cvar_t, Object);
	Type.registerClass(global, 'quake.draw', $quake_draw, Object);
	Type.registerClass(global, 'quake.draw$adivtab_t', $quake_draw$adivtab_t, Object);
	Type.registerClass(global, 'quake.draw$affinetridesc_t', $quake_draw$affinetridesc_t, Object);
	Type.registerClass(global, 'quake.draw$cachepic_t', $quake_draw$cachepic_t, Object);
	Type.registerClass(global, 'quake.draw$drawsurf_t', $quake_draw$drawsurf_t, Object);
	Type.registerClass(global, 'quake.draw$edgetable', $quake_draw$edgetable, Object);
	Type.registerClass(global, 'quake.draw$emitpoint_t', $quake_draw$emitpoint_t, Object);
	Type.registerClass(global, 'quake.draw$finalvert_t', $quake_draw$finalvert_t, Object);
	Type.registerClass(global, 'quake.draw$particle_t', $quake_draw$particle_t, Object);
	Type.registerClass(global, 'quake.draw$polydesc_t', $quake_draw$polydesc_t, Object);
	Type.registerClass(global, 'quake.draw$polyvert_t', $quake_draw$polyvert_t, Object);
	Type.registerClass(global, 'quake.draw$screenpart_t', $quake_draw$screenpart_t, Object);
	Type.registerClass(global, 'quake.draw$spanpackage_t', $quake_draw$spanpackage_t, Object);
	Type.registerClass(global, 'quake.draw$spritedesc_t', $quake_draw$spritedesc_t, Object);
	Type.registerClass(global, 'quake.draw$sspan_t', $quake_draw$sspan_t, Object);
	Type.registerClass(global, 'quake.draw$surfcache_t', $quake_draw$surfcache_t, Object);
	Type.registerClass(global, 'quake.draw$zpointdesc_t', $quake_draw$zpointdesc_t, Object);
	Type.registerClass(global, 'quake.host', $quake_host, Object);
	Type.registerClass(global, 'quake.host_abortserver', $quake_host_abortserver, ss.Exception);
	Type.registerClass(global, 'quake.keys', $quake_keys, Object);
	Type.registerClass(global, 'quake.mathlib', $quake_mathlib, Object);
	Type.registerClass(global, 'quake.menu', $quake_menu, Object);
	Type.registerClass(global, 'quake.model', $quake_model, Object);
	Type.registerClass(global, 'quake.model$aliashdr_t', $quake_model$aliashdr_t, Object);
	Type.registerClass(global, 'quake.model$daliasframe_t', $quake_model$daliasframe_t, Object);
	Type.registerClass(global, 'quake.model$daliasframetype_t', $quake_model$daliasframetype_t, Object);
	Type.registerClass(global, 'quake.model$daliasgroup_t', $quake_model$daliasgroup_t, Object);
	Type.registerClass(global, 'quake.model$daliasskingroup_t', $quake_model$daliasskingroup_t, Object);
	Type.registerClass(global, 'quake.model$daliasskintype_t', $quake_model$daliasskintype_t, Object);
	Type.registerClass(global, 'quake.model$dsprite_t', $quake_model$dsprite_t, Object);
	Type.registerClass(global, 'quake.model$dspriteframe_t', $quake_model$dspriteframe_t, Object);
	Type.registerClass(global, 'quake.model$dspriteframetype_t', $quake_model$dspriteframetype_t, Object);
	Type.registerClass(global, 'quake.model$dspritegroup_t', $quake_model$dspritegroup_t, Object);
	Type.registerClass(global, 'quake.model$dspriteinterval_t', $quake_model$dspriteinterval_t, Object);
	Type.registerClass(global, 'quake.model$dtriangle_t', $quake_model$dtriangle_t, Object);
	Type.registerClass(global, 'quake.model$hull_t', $quake_model$hull_t, Object);
	Type.registerClass(global, 'quake.model$maliasframedesc_t', $quake_model$maliasframedesc_t, Object);
	Type.registerClass(global, 'quake.model$maliasgroup_t', $quake_model$maliasgroup_t, Object);
	Type.registerClass(global, 'quake.model$maliasgroupframedesc_t', $quake_model$maliasgroupframedesc_t, Object);
	Type.registerClass(global, 'quake.model$maliasskindesc_t', $quake_model$maliasskindesc_t, Object);
	Type.registerClass(global, 'quake.model$maliasskingroup_t', $quake_model$maliasskingroup_t, Object);
	Type.registerClass(global, 'quake.model$mdl_t', $quake_model$mdl_t, Object);
	Type.registerClass(global, 'quake.model$medge_t', $quake_model$medge_t, Object);
	Type.registerClass(global, 'quake.model$node_or_leaf_t', $quake_model$node_or_leaf_t, Object);
	Type.registerClass(global, 'quake.model$mleaf_t', $quake_model$mleaf_t, $quake_model$node_or_leaf_t);
	Type.registerClass(global, 'quake.model$mnode_t', $quake_model$mnode_t, $quake_model$node_or_leaf_t);
	Type.registerClass(global, 'quake.model$model_t', $quake_model$model_t, Object);
	Type.registerClass(global, 'quake.model$mplane_t', $quake_model$mplane_t, Object);
	Type.registerClass(global, 'quake.model$msprite_t', $quake_model$msprite_t, Object);
	Type.registerClass(global, 'quake.model$mspriteframe_t', $quake_model$mspriteframe_t, Object);
	Type.registerClass(global, 'quake.model$mspriteframedesc_t', $quake_model$mspriteframedesc_t, Object);
	Type.registerClass(global, 'quake.model$mspritegroup_t', $quake_model$mspritegroup_t, Object);
	Type.registerClass(global, 'quake.model$msurface_t', $quake_model$msurface_t, Object);
	Type.registerClass(global, 'quake.model$mtexinfo_t', $quake_model$mtexinfo_t, Object);
	Type.registerClass(global, 'quake.model$mtriangle_t', $quake_model$mtriangle_t, Object);
	Type.registerClass(global, 'quake.model$mvertex_t', $quake_model$mvertex_t, Object);
	Type.registerClass(global, 'quake.model$stvert_t', $quake_model$stvert_t, Object);
	Type.registerClass(global, 'quake.model$texture_t', $quake_model$texture_t, Object);
	Type.registerClass(global, 'quake.model$trivertx_t', $quake_model$trivertx_t, Object);
	Type.registerClass(global, 'quake.net', $quake_net, Object);
	Type.registerClass(global, 'quake.net$hostcache_t', $quake_net$hostcache_t, Object);
	Type.registerClass(global, 'quake.net$net_driver_t', $quake_net$net_driver_t, Object);
	Type.registerClass(global, 'quake.net$qsocket_t', $quake_net$qsocket_t, Object);
	Type.registerClass(global, 'quake.prog', $quake_prog, Object);
	Type.registerClass(global, 'quake.prog$ddef_t', $quake_prog$ddef_t, Object);
	Type.registerClass(global, 'quake.prog$dfunction_t', $quake_prog$dfunction_t, Object);
	Type.registerClass(global, 'quake.prog$dprograms_t', $quake_prog$dprograms_t, Object);
	Type.registerClass(global, 'quake.prog$dstatement_t', $quake_prog$dstatement_t, Object);
	Type.registerClass(global, 'quake.prog$edict_t', $quake_prog$edict_t, Object);
	Type.registerClass(global, 'quake.prog$entvars_t', $quake_prog$entvars_t, Object);
	Type.registerClass(global, 'quake.prog$eval_t', $quake_prog$eval_t, Object);
	Type.registerClass(global, 'quake.prog$globalvars_t', $quake_prog$globalvars_t, Object);
	Type.registerClass(global, 'quake.prog$prstack_t', $quake_prog$prstack_t, Object);
	Type.registerClass(global, 'quake.quakedef', $quake_quakedef, Object);
	Type.registerClass(global, 'quake.quakedef$entity_state_t', $quake_quakedef$entity_state_t, Object);
	Type.registerClass(global, 'quake.quakedef$quakeparms_t', $quake_quakedef$quakeparms_t, Object);
	Type.registerClass(global, 'quake.render', $quake_render, Object);
	Type.registerClass(global, 'quake.render$aedge_t', $quake_render$aedge_t, Object);
	Type.registerClass(global, 'quake.render$alight_t', $quake_render$alight_t, Object);
	Type.registerClass(global, 'quake.render$auxvert_t', $quake_render$auxvert_t, Object);
	Type.registerClass(global, 'quake.render$bedge_t', $quake_render$bedge_t, Object);
	Type.registerClass(global, 'quake.render$btofpoly_t', $quake_render$btofpoly_t, Object);
	Type.registerClass(global, 'quake.render$clipplane_t', $quake_render$clipplane_t, Object);
	Type.registerClass(global, 'quake.render$edge_t', $quake_render$edge_t, Object);
	Type.registerClass(global, 'quake.render$efrag_t', $quake_render$efrag_t, Object);
	Type.registerClass(global, 'quake.render$entity_t', $quake_render$entity_t, Object);
	Type.registerClass(global, 'quake.render$espan_t', $quake_render$espan_t, Object);
	Type.registerClass(global, 'quake.render$refdef_t', $quake_render$refdef_t, Object);
	Type.registerClass(global, 'quake.render$surf_t', $quake_render$surf_t, Object);
	Type.registerClass(global, 'quake.sbar', $quake_sbar, Object);
	Type.registerClass(global, 'quake.screen', $quake_screen, Object);
	Type.registerClass(global, 'quake.server', $quake_server, Object);
	Type.registerClass(global, 'quake.server$client_t', $quake_server$client_t, Object);
	Type.registerClass(global, 'quake.server$server_static_t', $quake_server$server_static_t, Object);
	Type.registerClass(global, 'quake.server$server_t', $quake_server$server_t, Object);
	Type.registerClass(global, 'quake.sound', $quake_sound, Object);
	Type.registerClass(global, 'quake.sound$channel_t', $quake_sound$channel_t, Object);
	Type.registerClass(global, 'quake.sound$sfx_t', $quake_sound$sfx_t, Object);
	Type.registerClass(global, 'quake.sound$sfxcache_t', $quake_sound$sfxcache_t, Object);
	Type.registerClass(global, 'quake.sys_linux', $quake_sys_linux, Object);
	Type.registerClass(global, 'quake.vid', $quake_vid, Object);
	Type.registerClass(global, 'quake.vid$viddef_t', $quake_vid$viddef_t, Object);
	Type.registerClass(global, 'quake.vid$vrect_t', $quake_vid$vrect_t, Object);
	Type.registerClass(global, 'quake.view', $quake_view, Object);
	Type.registerClass(global, 'quake.wad', $quake_wad, Object);
	Type.registerClass(global, 'quake.wad$qpic_t', $quake_wad$qpic_t, Object);
	Type.registerClass(global, 'quake.world', $quake_world, Object);
	Type.registerClass(global, 'quake.world$plane_t', $quake_world$plane_t, Object);
	Type.registerClass(global, 'quake.world$trace_t', $quake_world$trace_t, Object);
	Type.registerClass(global, 'System.Buffer', $System_Buffer, Object);
	Type.registerClass(global, 'System.Convert', $System_Convert, Object);
	Type.registerClass(global, 'System.FormatException', $System_FormatException, ss.Exception);
	Type.registerClass(global, 'System.NotImplementedException', $System_NotImplementedException, ss.Exception);
	Type.registerClass(global, 'System.Random', $System_Random, Object);
	Type.registerClass(global, 'System.StringExtensions', $System_StringExtensions, Object);
	Type.registerClass(global, 'System.TimeSpan', $System_TimeSpan, Object);
	Type.registerClass(global, 'System.Uri', $System_Uri, Object);
	Type.registerClass(global, 'System.Globalization.CultureInfo', $System_Globalization_CultureInfo, Object);
	Type.registerClass(global, 'System.IO.BinaryReader', $System_IO_BinaryReader, Object);
	Type.registerClass(global, 'System.IO.MemoryStream', $System_IO_MemoryStream);
	Type.registerClass(global, 'System.Windows.Duration', $System_Windows_Duration, Object);
	Type.registerClass(global, 'System.Windows.MessageBox', $System_Windows_MessageBox, Object);
	Type.registerClass(global, 'System.Windows.RoutedEventArgs', $System_Windows_RoutedEventArgs, ss.EventArgs);
	Type.registerClass(global, 'System.Windows.Controls.Canvas', $System_Windows_Controls_Canvas, Object);
	Type.registerClass(global, 'System.Windows.Controls.Image', $System_Windows_Controls_Image, Object);
	Type.registerClass(global, 'System.Windows.Controls.MediaElement', $System_Windows_Controls_MediaElement, Object);
	Type.registerClass(global, 'System.Windows.Media.Imaging.BitmapImage', $System_Windows_Media_Imaging_BitmapImage, Object);
	Type.registerClass(global, 'System.Windows.Media.Imaging.WriteableBitmap', $System_Windows_Media_Imaging_WriteableBitmap, Object);
	Type.registerClass(global, 'System.Windows.Resources.StreamResourceInfo', $System_Windows_Resources_StreamResourceInfo, Object);
	$1$ResourcesField = null;
	set_resources(new (Type.makeGenericType(ss.Dictionary$2, [String, Object]))());
	$Helper_helper.seeK_SET = 0;
	$Helper_helper.$r = new $System_Random();
	$quake_quakedef.VERSION = 1.09;
	$quake_quakedef.linuX_VERSION = 1.3;
	$quake_quakedef.GAMENAME = 'id1';
	$quake_quakedef.$cachE_SIZE = 32;
	$quake_quakedef.minimuM_MEMORY = 5570560;
	$quake_quakedef.minimuM_MEMORY_LEVELPAK = 6619136;
	$quake_quakedef.$maX_NUM_ARGVS = 50;
	$quake_quakedef.PITCH = 0;
	$quake_quakedef.YAW = 1;
	$quake_quakedef.ROLL = 2;
	$quake_quakedef.maX_QPATH = 64;
	$quake_quakedef.maX_OSPATH = 128;
	$quake_quakedef.oN_EPSILON = 0.1;
	$quake_quakedef.maX_MSGLEN = 8000;
	$quake_quakedef.maX_DATAGRAM = 1024;
	$quake_quakedef.maX_EDICTS = 600;
	$quake_quakedef.maX_LIGHTSTYLES = 64;
	$quake_quakedef.maX_MODELS = 256;
	$quake_quakedef.maX_SOUNDS = 256;
	$quake_quakedef.$savegamE_COMMENT_LENGTH = 39;
	$quake_quakedef.maX_STYLESTRING = 64;
	$quake_quakedef.maX_CL_STATS = 32;
	$quake_quakedef.staT_HEALTH = 0;
	$quake_quakedef.staT_FRAGS = 1;
	$quake_quakedef.staT_WEAPON = 2;
	$quake_quakedef.staT_AMMO = 3;
	$quake_quakedef.staT_ARMOR = 4;
	$quake_quakedef.staT_WEAPONFRAME = 5;
	$quake_quakedef.staT_SHELLS = 6;
	$quake_quakedef.staT_NAILS = 7;
	$quake_quakedef.staT_ROCKETS = 8;
	$quake_quakedef.staT_CELLS = 9;
	$quake_quakedef.staT_ACTIVEWEAPON = 10;
	$quake_quakedef.staT_TOTALSECRETS = 11;
	$quake_quakedef.staT_TOTALMONSTERS = 12;
	$quake_quakedef.staT_SECRETS = 13;
	$quake_quakedef.staT_MONSTERS = 14;
	$quake_quakedef.iT_SHOTGUN = 1;
	$quake_quakedef.iT_SUPER_SHOTGUN = 2;
	$quake_quakedef.iT_NAILGUN = 4;
	$quake_quakedef.iT_SUPER_NAILGUN = 8;
	$quake_quakedef.iT_GRENADE_LAUNCHER = 16;
	$quake_quakedef.iT_ROCKET_LAUNCHER = 32;
	$quake_quakedef.iT_LIGHTNING = 64;
	$quake_quakedef.iT_SUPER_LIGHTNING = 128;
	$quake_quakedef.iT_SHELLS = 256;
	$quake_quakedef.iT_NAILS = 512;
	$quake_quakedef.iT_ROCKETS = 1024;
	$quake_quakedef.iT_CELLS = 2048;
	$quake_quakedef.iT_AXE = 4096;
	$quake_quakedef.iT_ARMOR1 = 8192;
	$quake_quakedef.iT_ARMOR2 = 16384;
	$quake_quakedef.iT_ARMOR3 = 32768;
	$quake_quakedef.iT_SUPERHEALTH = 65536;
	$quake_quakedef.iT_KEY1 = 131072;
	$quake_quakedef.iT_KEY2 = 262144;
	$quake_quakedef.iT_INVISIBILITY = 524288;
	$quake_quakedef.iT_INVULNERABILITY = 1048576;
	$quake_quakedef.iT_SUIT = 2097152;
	$quake_quakedef.iT_QUAD = 4194304;
	$quake_quakedef.iT_SIGIL1 = 268435456;
	$quake_quakedef.iT_SIGIL2 = 536870912;
	$quake_quakedef.iT_SIGIL3 = 1073741824;
	$quake_quakedef.iT_SIGIL4 = -2147483648;
	$quake_quakedef.riT_SHELLS = 128;
	$quake_quakedef.riT_NAILS = 256;
	$quake_quakedef.riT_ROCKETS = 512;
	$quake_quakedef.riT_CELLS = 1024;
	$quake_quakedef.riT_AXE = 2048;
	$quake_quakedef.riT_LAVA_NAILGUN = 4096;
	$quake_quakedef.riT_LAVA_SUPER_NAILGUN = 8192;
	$quake_quakedef.riT_MULTI_GRENADE = 16384;
	$quake_quakedef.riT_MULTI_ROCKET = 32768;
	$quake_quakedef.riT_PLASMA_GUN = 65536;
	$quake_quakedef.riT_ARMOR1 = 8388608;
	$quake_quakedef.riT_ARMOR2 = 16777216;
	$quake_quakedef.riT_ARMOR3 = 33554432;
	$quake_quakedef.riT_LAVA_NAILS = 67108864;
	$quake_quakedef.riT_PLASMA_AMMO = 134217728;
	$quake_quakedef.riT_MULTI_ROCKETS = 268435456;
	$quake_quakedef.riT_SHIELD = 536870912;
	$quake_quakedef.riT_ANTIGRAV = 1073741824;
	$quake_quakedef.riT_SUPERHEALTH = -2147483648;
	$quake_quakedef.hiT_PROXIMITY_GUN_BIT = 16;
	$quake_quakedef.hiT_MJOLNIR_BIT = 7;
	$quake_quakedef.hiT_LASER_CANNON_BIT = 23;
	$quake_quakedef.hiT_PROXIMITY_GUN = 65536;
	$quake_quakedef.hiT_MJOLNIR = 128;
	$quake_quakedef.hiT_LASER_CANNON = 8388608;
	$quake_quakedef.hiT_WETSUIT = 33554432;
	$quake_quakedef.hiT_EMPATHY_SHIELDS = 67108864;
	$quake_quakedef.maX_SCOREBOARD = 16;
	$quake_quakedef.$maX_SCOREBOARDNAME = 32;
	$quake_quakedef.$sounD_CHANNELS = 8;
	$quake_bspfile.maX_MAP_HULLS = 4;
	$quake_bspfile.maX_MAP_MODELS = 256;
	$quake_bspfile.maX_MAP_BRUSHES = 4096;
	$quake_bspfile.maX_MAP_ENTITIES = 1024;
	$quake_bspfile.maX_MAP_ENTSTRING = 65536;
	$quake_bspfile.maX_MAP_PLANES = 32767;
	$quake_bspfile.maX_MAP_NODES = 32767;
	$quake_bspfile.maX_MAP_CLIPNODES = 32767;
	$quake_bspfile.maX_MAP_LEAFS = 8192;
	$quake_bspfile.maX_MAP_VERTS = 65535;
	$quake_bspfile.maX_MAP_FACES = 65535;
	$quake_bspfile.maX_MAP_MARKSURFACES = 65535;
	$quake_bspfile.maX_MAP_TEXINFO = 4096;
	$quake_bspfile.maX_MAP_EDGES = 256000;
	$quake_bspfile.maX_MAP_SURFEDGES = 512000;
	$quake_bspfile.maX_MAP_TEXTURES = 512;
	$quake_bspfile.maX_MAP_MIPTEX = 2097152;
	$quake_bspfile.maX_MAP_LIGHTING = 1048576;
	$quake_bspfile.maX_MAP_VISIBILITY = 1048576;
	$quake_bspfile.maX_MAP_PORTALS = 65536;
	$quake_bspfile.maX_KEY = 32;
	$quake_bspfile.maX_VALUE = 1024;
	$quake_bspfile.BSPVERSION = 29;
	$quake_bspfile.TOOLVERSION = 2;
	$quake_bspfile.lumP_ENTITIES = 0;
	$quake_bspfile.lumP_PLANES = 1;
	$quake_bspfile.lumP_TEXTURES = 2;
	$quake_bspfile.lumP_VERTEXES = 3;
	$quake_bspfile.lumP_VISIBILITY = 4;
	$quake_bspfile.lumP_NODES = 5;
	$quake_bspfile.lumP_TEXINFO = 6;
	$quake_bspfile.lumP_FACES = 7;
	$quake_bspfile.lumP_LIGHTING = 8;
	$quake_bspfile.lumP_CLIPNODES = 9;
	$quake_bspfile.lumP_LEAFS = 10;
	$quake_bspfile.lumP_MARKSURFACES = 11;
	$quake_bspfile.lumP_EDGES = 12;
	$quake_bspfile.lumP_SURFEDGES = 13;
	$quake_bspfile.lumP_MODELS = 14;
	$quake_bspfile.headeR_LUMPS = 15;
	$quake_bspfile.sizeof_dmodel_t = 64;
	$quake_bspfile.MIPLEVELS = 4;
	$quake_bspfile.sizeof_miptex_t = 40;
	$quake_bspfile.sizeof_dvertex_t = 12;
	$quake_bspfile.planE_X = 0;
	$quake_bspfile.planE_Y = 1;
	$quake_bspfile.planE_Z = 2;
	$quake_bspfile.planE_ANYX = 3;
	$quake_bspfile.planE_ANYY = 4;
	$quake_bspfile.planE_ANYZ = 5;
	$quake_bspfile.sizeof_dplane_t = 20;
	$quake_bspfile.contentS_EMPTY = -1;
	$quake_bspfile.contentS_SOLID = -2;
	$quake_bspfile.contentS_WATER = -3;
	$quake_bspfile.contentS_SLIME = -4;
	$quake_bspfile.contentS_LAVA = -5;
	$quake_bspfile.contentS_SKY = -6;
	$quake_bspfile.contentS_ORIGIN = -7;
	$quake_bspfile.contentS_CLIP = -8;
	$quake_bspfile.contentS_CURRENT_0 = -9;
	$quake_bspfile.contentS_CURRENT_90 = -10;
	$quake_bspfile.contentS_CURRENT_180 = -11;
	$quake_bspfile.contentS_CURRENT_270 = -12;
	$quake_bspfile.contentS_CURRENT_UP = -13;
	$quake_bspfile.contentS_CURRENT_DOWN = -14;
	$quake_bspfile.sizeof_dnode_t = 24;
	$quake_bspfile.sizeof_texinfo_t = 40;
	$quake_bspfile.teX_SPECIAL = 1;
	$quake_bspfile.sizeof_dedge_t = 4;
	$quake_bspfile.MAXLIGHTMAPS = 4;
	$quake_bspfile.sizeof_dface_t = 20;
	$quake_bspfile.ambienT_WATER = 0;
	$quake_bspfile.ambienT_SKY = 1;
	$quake_bspfile.ambienT_SLIME = 2;
	$quake_bspfile.ambienT_LAVA = 3;
	$quake_bspfile.nuM_AMBIENTS = 4;
	$quake_bspfile.sizeof_dleaf_t = 28;
	$System_TimeSpan.maxValue = new $System_TimeSpan.$ctor1(100000000000);
	$quake_crc.crC_INIT_VALUE = 65535;
	$quake_crc.crC_XOR_VALUE = 0;
	$quake_crc.$crctable = [0, 4129, 8258, 12387, 16516, 20645, 24774, 28903, 33032, 37161, 41290, 45419, 49548, 53677, 57806, 61935, 4657, 528, 12915, 8786, 21173, 17044, 29431, 25302, 37689, 33560, 45947, 41818, 54205, 50076, 62463, 58334, 9314, 13379, 1056, 5121, 25830, 29895, 17572, 21637, 42346, 46411, 34088, 38153, 58862, 62927, 50604, 54669, 13907, 9842, 5649, 1584, 30423, 26358, 22165, 18100, 46939, 42874, 38681, 34616, 63455, 59390, 55197, 51132, 18628, 22757, 26758, 30887, 2112, 6241, 10242, 14371, 51660, 55789, 59790, 63919, 35144, 39273, 43274, 47403, 23285, 19156, 31415, 27286, 6769, 2640, 14899, 10770, 56317, 52188, 64447, 60318, 39801, 35672, 47931, 43802, 27814, 31879, 19684, 23749, 11298, 15363, 3168, 7233, 60846, 64911, 52716, 56781, 44330, 48395, 36200, 40265, 32407, 28342, 24277, 20212, 15891, 11826, 7761, 3696, 65439, 61374, 57309, 53244, 48923, 44858, 40793, 36728, 37256, 33193, 45514, 41451, 53516, 49453, 61774, 57711, 4224, 161, 12482, 8419, 20484, 16421, 28742, 24679, 33721, 37784, 41979, 46042, 49981, 54044, 58239, 62302, 689, 4752, 8947, 13010, 16949, 21012, 25207, 29270, 46570, 42443, 38312, 34185, 62830, 58703, 54572, 50445, 13538, 9411, 5280, 1153, 29798, 25671, 21540, 17413, 42971, 47098, 34713, 38840, 59231, 63358, 50973, 55100, 9939, 14066, 1681, 5808, 26199, 30326, 17941, 22068, 55628, 51565, 63758, 59695, 39368, 35305, 47498, 43435, 22596, 18533, 30726, 26663, 6336, 2273, 14466, 10403, 52093, 56156, 60223, 64286, 35833, 39896, 43963, 48026, 19061, 23124, 27191, 31254, 2801, 6864, 10931, 14994, 64814, 60687, 56684, 52557, 48554, 44427, 40424, 36297, 31782, 27655, 23652, 19525, 15522, 11395, 7392, 3265, 61215, 65342, 53085, 57212, 44955, 49082, 36825, 40952, 28183, 32310, 20053, 24180, 11923, 16050, 3793, 7920];
	$InnoveWare_Page.bitmap = new $System_Windows_Media_Imaging_BitmapImage();
	$InnoveWare_Page.thePage = null;
	$InnoveWare_Page.gwidth = 0;
	$InnoveWare_Page.gheight = 0;
	$InnoveWare_Page.stats = null;
	$quake_menu.$m_state = 0;
	$quake_menu.$m_entersound = false;
	$quake_menu.$m_recursiveDraw = false;
	$quake_menu.$identityTable = new Uint8Array(256);
	$quake_menu.$translationTable = new Uint8Array(256);
	$quake_menu.$m_main_cursor = 0;
	$quake_menu.$maiN_ITEMS = 5;
	$quake_menu.$m_singleplayer_cursor = 0;
	$quake_menu.$singleplayeR_ITEMS = 3;
	$quake_menu.$load_cursor = 0;
	$quake_menu.$maX_SAVEGAMES = 12;
	$quake_menu.$m_filenames = new Array($quake_menu.$maX_SAVEGAMES);
	$quake_menu.$loadable = new Array($quake_menu.$maX_SAVEGAMES);
	$quake_menu.$m_multiplayer_cursor = 0;
	$quake_menu.$multiplayeR_ITEMS = 3;
	$quake_menu.$setup_cursor = 4;
	$quake_menu.$setup_cursor_table = [40, 56, 80, 104, 140];
	$quake_menu.$setup_hostname = null;
	$quake_menu.$setup_myname = null;
	$quake_menu.$setup_oldtop = 0;
	$quake_menu.$setup_oldbottom = 0;
	$quake_menu.$setup_top = 0;
	$quake_menu.$setup_bottom = 0;
	$quake_menu.$nuM_SETUP_CMDS = 5;
	$quake_menu.$optionS_ITEMS = 13;
	$quake_menu.$slideR_RANGE = 10;
	$quake_menu.$options_cursor = 0;
	$quake_menu.$help_page = 0;
	$quake_menu.$nuM_HELP_PAGES = 6;
	$quake_menu.$msgNumber = 0;
	$quake_menu.$m_quit_prevstate = 0;
	$quake_menu.$wasInMenus = false;
	$quake_menu.$quitMessage = ['  Are you gonna quit    ', '  this game just like   ', '   everything else?     ', '                        ', ' Milord, methinks that  ', '   thou art a lowly     ', ' quitter. Is this true? ', '                        ', ' Do I need to bust your ', '  face open for trying  ', '        to quit?        ', '                        ', ' Man, I oughta smack you', '   for trying to quit!  ', '     Press Y to get     ', '      smacked out.      ', ' Press Y to quit like a ', '   big loser in life.   ', '  Press N to stay proud ', '    and successful!     ', '   If you press Y to    ', '  quit, I will summon   ', '  Satan all over your   ', '      hard drive!       ', '  Um, Asmodeus dislikes ', ' his children trying to ', ' quit. Press Y to return', '   to your Tinkertoys.  ', '  If you quit now, I\'ll ', '  throw a blanket-party ', '   for you next time!   ', '                        '];
	$quake_menu.$nuM_SERIALCONFIG_CMDS = 6;
	$quake_menu.$isA_uarts = [1016, 760, 1000, 744];
	$quake_menu.$isA_IRQs = [4, 3, 4, 3];
	$quake_menu.$nuM_MODEMCONFIG_CMDS = 5;
	$quake_menu.$nuM_LANCONFIG_CMDS = 3;
	$quake_menu.$levels = [new $quake_$menu$level_t('start', 'Entrance'), new $quake_$menu$level_t('e1m1', 'Slipgate Complex'), new $quake_$menu$level_t('e1m2', 'Castle of the Damned'), new $quake_$menu$level_t('e1m3', 'The Necropolis'), new $quake_$menu$level_t('e1m4', 'The Grisly Grotto'), new $quake_$menu$level_t('e1m5', 'Gloom Keep'), new $quake_$menu$level_t('e1m6', 'The Door To Chthon'), new $quake_$menu$level_t('e1m7', 'The House of Chthon'), new $quake_$menu$level_t('e1m8', 'Ziggurat Vertigo'), new $quake_$menu$level_t('e2m1', 'The Installation'), new $quake_$menu$level_t('e2m2', 'Ogre Citadel'), new $quake_$menu$level_t('e2m3', 'Crypt of Decay'), new $quake_$menu$level_t('e2m4', 'The Ebon Fortress'), new $quake_$menu$level_t('e2m5', 'The Wizard\'s Manse'), new $quake_$menu$level_t('e2m6', 'The Dismal Oubliette'), new $quake_$menu$level_t('e2m7', 'Underearth'), new $quake_$menu$level_t('e3m1', 'Termination Central'), new $quake_$menu$level_t('e3m2', 'The Vaults of Zin'), new $quake_$menu$level_t('e3m3', 'The Tomb of Terror'), new $quake_$menu$level_t('e3m4', 'Satan\'s Dark Delight'), new $quake_$menu$level_t('e3m5', 'Wind Tunnels'), new $quake_$menu$level_t('e3m6', 'Chambers of Torment'), new $quake_$menu$level_t('e3m7', 'The Haunted Halls'), new $quake_$menu$level_t('e4m1', 'The Sewage System'), new $quake_$menu$level_t('e4m2', 'The Tower of Despair'), new $quake_$menu$level_t('e4m3', 'The Elder God Shrine'), new $quake_$menu$level_t('e4m4', 'The Palace of Hate'), new $quake_$menu$level_t('e4m5', 'Hell\'s Atrium'), new $quake_$menu$level_t('e4m6', 'The Pain Maze'), new $quake_$menu$level_t('e4m7', 'Azure Agony'), new $quake_$menu$level_t('e4m8', 'The Nameless City'), new $quake_$menu$level_t('end', 'Shub-Niggurath\'s Pit'), new $quake_$menu$level_t('dm1', 'Place of Two Deaths'), new $quake_$menu$level_t('dm2', 'Claustrophobopolis'), new $quake_$menu$level_t('dm3', 'The Abandoned Base'), new $quake_$menu$level_t('dm4', 'The Bad Place'), new $quake_$menu$level_t('dm5', 'The Cistern'), new $quake_$menu$level_t('dm6', 'The Dark Zone')];
	$quake_menu.$hipnoticlevels = [new $quake_$menu$level_t('start', 'Command HQ'), new $quake_$menu$level_t('hip1m1', 'The Pumping Station'), new $quake_$menu$level_t('hip1m2', 'Storage Facility'), new $quake_$menu$level_t('hip1m3', 'The Lost Mine'), new $quake_$menu$level_t('hip1m4', 'Research Facility'), new $quake_$menu$level_t('hip1m5', 'Military Complex'), new $quake_$menu$level_t('hip2m1', 'Ancient Realms'), new $quake_$menu$level_t('hip2m2', 'The Black Cathedral'), new $quake_$menu$level_t('hip2m3', 'The Catacombs'), new $quake_$menu$level_t('hip2m4', 'The Crypt'), new $quake_$menu$level_t('hip2m5', 'Mortum\'s Keep'), new $quake_$menu$level_t('hip2m6', 'The Gremlin\'s Domain'), new $quake_$menu$level_t('hip3m1', 'Tur Torment'), new $quake_$menu$level_t('hip3m2', 'Pandemonium'), new $quake_$menu$level_t('hip3m3', 'Limbo'), new $quake_$menu$level_t('hip3m4', 'The Gauntlet'), new $quake_$menu$level_t('hipend', 'Armagon\'s Lair'), new $quake_$menu$level_t('hipdm1', 'The Edge of Oblivion')];
	$quake_menu.$roguelevels = [new $quake_$menu$level_t('start', 'Split Decision'), new $quake_$menu$level_t('r1m1', 'Deviant\'s Domain'), new $quake_$menu$level_t('r1m2', 'Dread Portal'), new $quake_$menu$level_t('r1m3', 'Judgement Call'), new $quake_$menu$level_t('r1m4', 'Cave of Death'), new $quake_$menu$level_t('r1m5', 'Towers of Wrath'), new $quake_$menu$level_t('r1m6', 'Temple of Pain'), new $quake_$menu$level_t('r1m7', 'Tomb of the Overlord'), new $quake_$menu$level_t('r2m1', 'Tempus Fugit'), new $quake_$menu$level_t('r2m2', 'Elemental Fury I'), new $quake_$menu$level_t('r2m3', 'Elemental Fury II'), new $quake_$menu$level_t('r2m4', 'Curse of Osiris'), new $quake_$menu$level_t('r2m5', 'Wizard\'s Keep'), new $quake_$menu$level_t('r2m6', 'Blood Sacrifice'), new $quake_$menu$level_t('r2m7', 'Last Bastion'), new $quake_$menu$level_t('r2m8', 'Source of Evil'), new $quake_$menu$level_t('ctf1', 'Division of Change')];
	$quake_menu.$episodes = [new $quake_$menu$episode_t('Welcome to Quake', 0, 1), new $quake_$menu$episode_t('Doomed Dimension', 1, 8), new $quake_$menu$episode_t('Realm of Black Magic', 9, 7), new $quake_$menu$episode_t('Netherworld', 16, 7), new $quake_$menu$episode_t('The Elder World', 23, 8), new $quake_$menu$episode_t('Final Level', 31, 1), new $quake_$menu$episode_t('Deathmatch Arena', 32, 6)];
	$quake_menu.$hipnoticepisodes = [new $quake_$menu$episode_t('Scourge of Armagon', 0, 1), new $quake_$menu$episode_t('Fortress of the Dead', 1, 5), new $quake_$menu$episode_t('Dominion of Darkness', 6, 6), new $quake_$menu$episode_t('The Rift', 12, 4), new $quake_$menu$episode_t('Final Level', 16, 1), new $quake_$menu$episode_t('Deathmatch Arena', 17, 1)];
	$quake_menu.$rogueepisodes = [new $quake_$menu$episode_t('Introduction', 0, 1), new $quake_$menu$episode_t('Hell\'s Fortress', 1, 7), new $quake_$menu$episode_t('Corridors of Time', 8, 8), new $quake_$menu$episode_t('Deathmatch Arena', 16, 1)];
	$quake_menu.$startepisode = 0;
	$quake_menu.$startlevel = 0;
	$quake_menu.$maxplayers = 0;
	$quake_menu.$m_serverInfoMessage = false;
	$quake_menu.$m_serverInfoMessageTime = 0;
	$quake_menu.$gameoptions_cursor_table = [40, 56, 64, 72, 80, 88, 96, 112, 120];
	$quake_menu.$nuM_GAMEOPTIONS = 9;
	$quake_menu.$gameoptions_cursor = 0;
	$quake_cvar_t.$cvar_vars = null;
	$quake_cvar_t.$cvar_null_string = '';
	$quake_vid.viD_CBITS = 6;
	$quake_vid.viD_GRADES = 64;
	$quake_vid.$surface = null;
	$quake_vid.$vid_modenum = 0;
	$quake_vid.$vid_testingmode = 0;
	$quake_vid.$vid_realmode = 0;
	$quake_vid.$vid_mode = new $quake_cvar_t.$ctor1('vid_mode', '0', false);
	$quake_vid.$numvidmodes = 1;
	$quake_vid.$firstupdate = 1;
	$quake_vid.$vid_current_palette = new Uint8Array(768);
	$quake_vid.$nomodecheck = false;
	$quake_vid.$vid_line = 0;
	$quake_vid.$vid_wmodes = 0;
	$quake_vid.$vid_column_size = 0;
	$quake_vid.$maX_COLUMN_SIZE = 11;
	$quake_view.lcd_x = new $quake_cvar_t('lcd_x', '0');
	$quake_view.$lcd_yaw = new $quake_cvar_t('lcd_yaw', '0');
	$quake_view.$scr_ofsx = new $quake_cvar_t.$ctor1('scr_ofsx', '0', false);
	$quake_view.$scr_ofsy = new $quake_cvar_t.$ctor1('scr_ofsy', '0', false);
	$quake_view.$scr_ofsz = new $quake_cvar_t.$ctor1('scr_ofsz', '0', false);
	$quake_view.$cl_rollspeed = new $quake_cvar_t('cl_rollspeed', '200');
	$quake_view.$cl_rollangle = new $quake_cvar_t('cl_rollangle', '2.0');
	$quake_view.$cl_bob = new $quake_cvar_t.$ctor1('cl_bob', '0.02', false);
	$quake_view.$cl_bobcycle = new $quake_cvar_t.$ctor1('cl_bobcycle', '0.6', false);
	$quake_view.$cl_bobup = new $quake_cvar_t.$ctor1('cl_bobup', '0.5', false);
	$quake_view.$v_kicktime = new $quake_cvar_t.$ctor1('v_kicktime', '0.5', false);
	$quake_view.$v_kickroll = new $quake_cvar_t.$ctor1('v_kickroll', '0.6', false);
	$quake_view.$v_kickpitch = new $quake_cvar_t.$ctor1('v_kickpitch', '0.6', false);
	$quake_view.$v_iyaw_cycle = new $quake_cvar_t.$ctor1('v_iyaw_cycle', '2', false);
	$quake_view.$v_iroll_cycle = new $quake_cvar_t.$ctor1('v_iroll_cycle', '0.5', false);
	$quake_view.$v_ipitch_cycle = new $quake_cvar_t.$ctor1('v_ipitch_cycle', '1', false);
	$quake_view.$v_iyaw_level = new $quake_cvar_t.$ctor1('v_iyaw_level', '0.3', false);
	$quake_view.$v_iroll_level = new $quake_cvar_t.$ctor1('v_iroll_level', '0.1', false);
	$quake_view.$v_ipitch_level = new $quake_cvar_t.$ctor1('v_ipitch_level', '0.3', false);
	$quake_view.$v_idlescale = new $quake_cvar_t.$ctor1('v_idlescale', '0', false);
	$quake_view.$crosshair = new $quake_cvar_t.$ctor1('crosshair', '0', true);
	$quake_view.$cl_crossx = new $quake_cvar_t.$ctor1('cl_crossx', '0', false);
	$quake_view.$cl_crossy = new $quake_cvar_t.$ctor1('cl_crossy', '0', false);
	$quake_view.$gl_cshiftpercent = new $quake_cvar_t.$ctor1('gl_cshiftpercent', '100', false);
	$quake_view.$v_dmg_time = 0;
	$quake_view.$v_dmg_roll = 0;
	$quake_view.$v_dmg_pitch = 0;
	$quake_view.$forward = new Array(3);
	$quake_view.$right = new Array(3);
	$quake_view.$up = new Array(3);
	$quake_view.$v_centermove = new $quake_cvar_t.$ctor1('v_centermove', '0.15', false);
	$quake_view.$v_centerspeed = new $quake_cvar_t('v_centerspeed', '500');
	$quake_view.$cshift_empty = new $quake_client$cshift_t.$ctor1([130, 80, 50], 0);
	$quake_view.$cshift_water = new $quake_client$cshift_t.$ctor1([130, 80, 50], 128);
	$quake_view.$cshift_slime = new $quake_client$cshift_t.$ctor1([0, 25, 5], 150);
	$quake_view.$cshift_lava = new $quake_client$cshift_t.$ctor1([255, 80, 0], 150);
	$quake_view.v_gamma = new $quake_cvar_t.$ctor1('gamma', '1', true);
	$quake_view.$gammatable = new Array(256);
	$quake_view.$oldgammavalue = 0;
	$quake_view.$oldyaw = 0;
	$quake_view.$oldpitch = 0;
	$quake_view.$oldz = 0;
	$quake_sound.$channels = new Array($quake_sound.maX_CHANNELS);
	$quake_sound.$total_channels = 0;
	$quake_sound.$snd_blocked = 0;
	$quake_sound.$snd_ambient = true;
	$quake_sound.$snd_initialized = false;
	$quake_sound.$listener_origin = new Array(3);
	$quake_sound.$listener_forward = new Array(3);
	$quake_sound.$listener_right = new Array(3);
	$quake_sound.$listener_up = new Array(3);
	$quake_sound.$sound_nominal_clip_dist = 1000;
	$quake_sound.$soundtime = 0;
	$quake_sound.$paintedtime = 0;
	$quake_sound.$maX_SFX = 512;
	$quake_sound.$known_sfx = null;
	$quake_sound.$num_sfx = 0;
	$quake_sound.$ambient_sfx = new Array($quake_bspfile.nuM_AMBIENTS);
	$quake_sound.$sound_started = 0;
	$quake_sound.$bgmvolume = new $quake_cvar_t.$ctor1('bgmvolume', '1', true);
	$quake_sound.$volume = new $quake_cvar_t.$ctor1('volume', '0.7', true);
	$quake_sound.$nosound = new $quake_cvar_t('nosound', '0');
	$quake_sound.$precache = new $quake_cvar_t('precache', '1');
	$quake_sound.$loadas8bit = new $quake_cvar_t('loadas8bit', '0');
	$quake_sound.$bgmbuffer = new $quake_cvar_t('bgmbuffer', '4096');
	$quake_sound.$ambient_level = new $quake_cvar_t('ambient_level', '0.3');
	$quake_sound.$ambient_fade = new $quake_cvar_t('ambient_fade', '100');
	$quake_sound.$snd_noextraupdate = new $quake_cvar_t('snd_noextraupdate', '0');
	$quake_sound.$snd_show = new $quake_cvar_t('snd_show', '0');
	$quake_sound.$_snd_mixahead = new $quake_cvar_t.$ctor1('_snd_mixahead', '0.1', true);
	$quake_sound.$hashS_Play = 345;
	$quake_sound.$loops = ['ambience/drip1.wav', 'ambience/fire1.wav', 'ambience/hum1.wav', 'ambience/swamp1.wav', 'ambience/swamp2.wav', 'ambience/water1.wav', 'ambience/wind2.wav', 'doors/basesec1.wav', 'doors/doormv1.wav', 'doors/stndr1.wav', 'doors/winch2.wav', 'plats/medplat1.wav', 'plats/train1.wav'];
	$quake_sound.defaulT_SOUND_PACKET_VOLUME = 255;
	$quake_sound.defaulT_SOUND_PACKET_ATTENUATION = 1;
	$quake_sound.maX_CHANNELS = 128;
	$quake_sound.maX_DYNAMIC_CHANNELS = 8;
	$quake_sbar.$sbaR_HEIGHT = 24;
	$quake_sbar.$sb_updates = 0;
	$quake_sbar.$staT_MINUS = 10;
	$quake_sbar.$sb_nums = Array.multidim($quake_wad$qpic_t.getDefaultValue(), 2, 11);
	$quake_sbar.$sb_colon = null;
	$quake_sbar.$sb_slash = null;
	$quake_sbar.$sb_ibar = null;
	$quake_sbar.$sb_sbar = null;
	$quake_sbar.$sb_scorebar = null;
	$quake_sbar.$sb_weapons = Array.multidim($quake_wad$qpic_t.getDefaultValue(), 7, 8);
	$quake_sbar.$sb_ammo = new Array(4);
	$quake_sbar.$sb_sigil = new Array(4);
	$quake_sbar.$sb_armor = new Array(3);
	$quake_sbar.$sb_items = new Array(32);
	$quake_sbar.$sb_faces = Array.multidim($quake_wad$qpic_t.getDefaultValue(), 7, 2);
	$quake_sbar.$sb_face_invis = null;
	$quake_sbar.$sb_face_quad = null;
	$quake_sbar.$sb_face_invuln = null;
	$quake_sbar.$sb_face_invis_invuln = null;
	$quake_sbar.$sb_showscores = false;
	$quake_sbar.sb_lines = 0;
	$quake_sbar.$rsb_invbar = new Array(2);
	$quake_sbar.$rsb_weapons = new Array(5);
	$quake_sbar.$rsb_items = new Array(2);
	$quake_sbar.$rsb_ammo = new Array(3);
	$quake_sbar.$rsb_teambord = null;
	$quake_sbar.$hsb_weapons = Array.multidim($quake_wad$qpic_t.getDefaultValue(), 7, 5);
	$quake_sbar.$hsb_items = new Array(2);
	$quake_screen.scr_copytop = false;
	$quake_screen.scr_copyeverything = false;
	$quake_screen.scr_con_current = 0;
	$quake_screen.$scr_conlines = 0;
	$quake_screen.$oldscreensize = 0;
	$quake_screen.$oldfov = 0;
	$quake_screen.scr_viewsize = new $quake_cvar_t.$ctor1('viewsize', '100', true);
	$quake_screen.scr_fov = new $quake_cvar_t('fov', '90');
	$quake_screen.$scr_conspeed = new $quake_cvar_t('scr_conspeed', '300');
	$quake_screen.$scr_centertime = new $quake_cvar_t('scr_centertime', '2');
	$quake_screen.$scr_showram = new $quake_cvar_t('showram', '1');
	$quake_screen.$scr_showturtle = new $quake_cvar_t('showturtle', '0');
	$quake_screen.$scr_showpause = new $quake_cvar_t('showpause', '1');
	$quake_screen.$scr_printspeed = new $quake_cvar_t('scr_printspeed', '8');
	$quake_screen.$scr_initialized = false;
	$quake_screen.$scr_ram = null;
	$quake_screen.$scr_net = null;
	$quake_screen.$scr_turtle = null;
	$quake_screen.scr_fullupdate = 0;
	$quake_screen.$clearconsole = 0;
	$quake_screen.clearnotify = 0;
	$quake_screen.vid = new $quake_vid$viddef_t();
	$quake_screen.scr_vrect = new $quake_vid$vrect_t();
	$quake_screen.scr_disabled_for_loading = false;
	$quake_screen.$scr_drawloading = false;
	$quake_screen.$scr_disabled_time = 0;
	$quake_screen.$scr_skipupdate = false;
	$quake_screen.$block_drawing = false;
	$quake_screen.$scr_centerstring = null;
	$quake_screen.$scr_centertime_start = 0;
	$quake_screen.scr_centertime_off = 0;
	$quake_screen.$scr_center_lines = 0;
	$quake_screen.$scr_erase_lines = 0;
	$quake_screen.$scr_erase_center = 0;
	$quake_screen.$count = 0;
	$quake_screen.$scr_notifystring = null;
	$quake_screen.$scr_drawdialog = false;
	$quake_screen.$oldscr_viewsize = 0;
	$quake_screen.$oldlcd_x = 0;
	$quake_wad.$cmP_NONE = 0;
	$quake_wad.$cmP_LZSS = 1;
	$quake_wad.$tyP_NONE = 0;
	$quake_wad.$tyP_LABEL = 1;
	$quake_wad.$tyP_LUMPY = 64;
	$quake_wad.$tyP_PALETTE = 64;
	$quake_wad.$tyP_QTEX = 65;
	$quake_wad.$tyP_QPIC = 66;
	$quake_wad.$tyP_SOUND = 67;
	$quake_wad.$tyP_MIPTEX = 68;
	$quake_wad.$sizeof_wadinfo_t = 12;
	$quake_wad.$wad_numlumps = 0;
	$quake_wad.$wad_lumps = null;
	$quake_wad.$wad_base = null;
	$quake_render.MAXCLIPPLANES = 11;
	$quake_render.toP_RANGE = 16;
	$quake_render.bottoM_RANGE = 96;
	$quake_render.$fva = [new Array(8), new Array(8)];
	$quake_render.$av = new Array(8);
	$quake_render.$av0 = 0;
	$quake_render.$av1 = 0;
	$quake_render.lighT_MIN = 5;
	$quake_render.r_affinetridesc = new $quake_draw$affinetridesc_t();
	$quake_render.acolormap = null;
	$quake_render.$r_apverts = null;
	$quake_render.$pmdl = null;
	$quake_render.$r_plightvec = new Array(3);
	$quake_render.$r_ambientlight = 0;
	$quake_render.$r_shadelight = 0;
	$quake_render.$paliashdr = null;
	$quake_render.$pfinalverts = null;
	$quake_render.$pauxverts = null;
	$quake_render.$ziscale = 0;
	$quake_render.$pmodel = null;
	$quake_render.$alias_forward = new Array(3);
	$quake_render.$alias_right = new Array(3);
	$quake_render.$alias_up = new Array(3);
	$quake_render.$pskindesc = null;
	$quake_render.$r_amodels_drawn = 0;
	$quake_render.$a_skinwidth = 0;
	$quake_render.$r_anumverts = 0;
	$quake_render.$aliastransform = [new Array(4), new Array(4), new Array(4)];
	$quake_render.$aedges = [new $quake_render$aedge_t(0, 1), new $quake_render$aedge_t(1, 2), new $quake_render$aedge_t(2, 3), new $quake_render$aedge_t(3, 0), new $quake_render$aedge_t(4, 5), new $quake_render$aedge_t(5, 6), new $quake_render$aedge_t(6, 7), new $quake_render$aedge_t(7, 4), new $quake_render$aedge_t(0, 5), new $quake_render$aedge_t(1, 4), new $quake_render$aedge_t(2, 7), new $quake_render$aedge_t(3, 6)];
	$quake_render.NUMVERTEXNORMALS = 162;
	$quake_render.$r_avertexnormals = [[-0.525731, 0, 0.850651], [-0.442863, 0.238856, 0.864188], [-0.295242, 0, 0.955423], [-0.309017, 0.5, 0.809017], [-0.16246, 0.262866, 0.951056], [0, 0, 1], [0, 0.850651, 0.525731], [-0.147621, 0.716567, 0.681718], [0.147621, 0.716567, 0.681718], [0, 0.525731, 0.850651], [0.309017, 0.5, 0.809017], [0.525731, 0, 0.850651], [0.295242, 0, 0.955423], [0.442863, 0.238856, 0.864188], [0.16246, 0.262866, 0.951056], [-0.681718, 0.147621, 0.716567], [-0.809017, 0.309017, 0.5], [-0.587785, 0.425325, 0.688191], [-0.850651, 0.525731, 0], [-0.864188, 0.442863, 0.238856], [-0.716567, 0.681718, 0.147621], [-0.688191, 0.587785, 0.425325], [-0.5, 0.809017, 0.309017], [-0.238856, 0.864188, 0.442863], [-0.425325, 0.688191, 0.587785], [-0.716567, 0.681718, -0.147621], [-0.5, 0.809017, -0.309017], [-0.525731, 0.850651, 0], [0, 0.850651, -0.525731], [-0.238856, 0.864188, -0.442863], [0, 0.955423, -0.295242], [-0.262866, 0.951056, -0.16246], [0, 1, 0], [0, 0.955423, 0.295242], [-0.262866, 0.951056, 0.16246], [0.238856, 0.864188, 0.442863], [0.262866, 0.951056, 0.16246], [0.5, 0.809017, 0.309017], [0.238856, 0.864188, -0.442863], [0.262866, 0.951056, -0.16246], [0.5, 0.809017, -0.309017], [0.850651, 0.525731, 0], [0.716567, 0.681718, 0.147621], [0.716567, 0.681718, -0.147621], [0.525731, 0.850651, 0], [0.425325, 0.688191, 0.587785], [0.864188, 0.442863, 0.238856], [0.688191, 0.587785, 0.425325], [0.809017, 0.309017, 0.5], [0.681718, 0.147621, 0.716567], [0.587785, 0.425325, 0.688191], [0.955423, 0.295242, 0], [1, 0, 0], [0.951056, 0.16246, 0.262866], [0.850651, -0.525731, 0], [0.955423, -0.295242, 0], [0.864188, -0.442863, 0.238856], [0.951056, -0.16246, 0.262866], [0.809017, -0.309017, 0.5], [0.681718, -0.147621, 0.716567], [0.850651, 0, 0.525731], [0.864188, 0.442863, -0.238856], [0.809017, 0.309017, -0.5], [0.951056, 0.16246, -0.262866], [0.525731, 0, -0.850651], [0.681718, 0.147621, -0.716567], [0.681718, -0.147621, -0.716567], [0.850651, 0, -0.525731], [0.809017, -0.309017, -0.5], [0.864188, -0.442863, -0.238856], [0.951056, -0.16246, -0.262866], [0.147621, 0.716567, -0.681718], [0.309017, 0.5, -0.809017], [0.425325, 0.688191, -0.587785], [0.442863, 0.238856, -0.864188], [0.587785, 0.425325, -0.688191], [0.688191, 0.587785, -0.425325], [-0.147621, 0.716567, -0.681718], [-0.309017, 0.5, -0.809017], [0, 0.525731, -0.850651], [-0.525731, 0, -0.850651], [-0.442863, 0.238856, -0.864188], [-0.295242, 0, -0.955423], [-0.16246, 0.262866, -0.951056], [0, 0, -1], [0.295242, 0, -0.955423], [0.16246, 0.262866, -0.951056], [-0.442863, -0.238856, -0.864188], [-0.309017, -0.5, -0.809017], [-0.16246, -0.262866, -0.951056], [0, -0.850651, -0.525731], [-0.147621, -0.716567, -0.681718], [0.147621, -0.716567, -0.681718], [0, -0.525731, -0.850651], [0.309017, -0.5, -0.809017], [0.442863, -0.238856, -0.864188], [0.16246, -0.262866, -0.951056], [0.238856, -0.864188, -0.442863], [0.5, -0.809017, -0.309017], [0.425325, -0.688191, -0.587785], [0.716567, -0.681718, -0.147621], [0.688191, -0.587785, -0.425325], [0.587785, -0.425325, -0.688191], [0, -0.955423, -0.295242], [0, -1, 0], [0.262866, -0.951056, -0.16246], [0, -0.850651, 0.525731], [0, -0.955423, 0.295242], [0.238856, -0.864188, 0.442863], [0.262866, -0.951056, 0.16246], [0.5, -0.809017, 0.309017], [0.716567, -0.681718, 0.147621], [0.525731, -0.850651, 0], [-0.238856, -0.864188, -0.442863], [-0.5, -0.809017, -0.309017], [-0.262866, -0.951056, -0.16246], [-0.850651, -0.525731, 0], [-0.716567, -0.681718, -0.147621], [-0.716567, -0.681718, 0.147621], [-0.525731, -0.850651, 0], [-0.5, -0.809017, 0.309017], [-0.238856, -0.864188, 0.442863], [-0.262866, -0.951056, 0.16246], [-0.864188, -0.442863, 0.238856], [-0.809017, -0.309017, 0.5], [-0.688191, -0.587785, 0.425325], [-0.681718, -0.147621, 0.716567], [-0.442863, -0.238856, 0.864188], [-0.587785, -0.425325, 0.688191], [-0.309017, -0.5, 0.809017], [-0.147621, -0.716567, 0.681718], [-0.425325, -0.688191, 0.587785], [-0.16246, -0.262866, 0.951056], [0.442863, -0.238856, 0.864188], [0.16246, -0.262866, 0.951056], [0.309017, -0.5, 0.809017], [0.147621, -0.716567, 0.681718], [0, -0.525731, 0.850651], [0.425325, -0.688191, 0.587785], [0.587785, -0.425325, 0.688191], [0.688191, -0.587785, 0.425325], [-0.955423, 0.295242, 0], [-0.951056, 0.16246, 0.262866], [-1, 0, 0], [-0.850651, 0, 0.525731], [-0.955423, -0.295242, 0], [-0.951056, -0.16246, 0.262866], [-0.864188, 0.442863, -0.238856], [-0.951056, 0.16246, -0.262866], [-0.809017, 0.309017, -0.5], [-0.864188, -0.442863, -0.238856], [-0.951056, -0.16246, -0.262866], [-0.809017, -0.309017, -0.5], [-0.681718, 0.147621, -0.716567], [-0.681718, -0.147621, -0.716567], [-0.850651, 0, -0.525731], [-0.688191, 0.587785, -0.425325], [-0.587785, 0.425325, -0.688191], [-0.425325, 0.688191, -0.587785], [-0.425325, -0.688191, -0.587785], [-0.587785, -0.425325, -0.688191], [-0.688191, -0.587785, -0.425325]];
	$quake_render.$finalverts = null;
	$quake_render.$auxverts = null;
	$quake_render.$tmatrix = [$Missing_ArrayHelpers.explcitDoubleArray(4), $Missing_ArrayHelpers.explcitDoubleArray(4), $Missing_ArrayHelpers.explcitDoubleArray(4)];
	$quake_render.$viewmatrix = [$Missing_ArrayHelpers.explcitDoubleArray(4), $Missing_ArrayHelpers.explcitDoubleArray(4), $Missing_ArrayHelpers.explcitDoubleArray(4)];
	$quake_render.$insubmodel = false;
	$quake_render.currententity = null;
	$quake_render.modelorg = new Array(3);
	$quake_render.base_modelorg = new Array(3);
	$quake_render.$r_entorigin = new Array(3);
	$quake_render.$entity_rotation = [new Array(3), new Array(3), new Array(3)];
	$quake_render.$r_worldmodelorg = new Array(3);
	$quake_render.$r_currentbkey = 0;
	$quake_render.maX_BMODEL_VERTS = 500;
	$quake_render.maX_BMODEL_EDGES = 1000;
	$quake_render.$pbverts = null;
	$quake_render.$pbedges = null;
	$quake_render.$numbverts = 0;
	$quake_render.$numbedges = 0;
	$quake_render.$pfrontenter = null;
	$quake_render.$pfrontexit = null;
	$quake_render.$makeclippededge = false;
	$quake_render.$btofpolys = null;
	$quake_render.MAXLEFTCLIPEDGES = 100;
	$quake_render.fullY_CLIPPED_CACHED = 2147483648;
	$quake_render.framecounT_MASK = 2147483647;
	$quake_render.$cacheoffset = 0;
	$quake_render.$c_faceclip = 0;
	$quake_render.$view_clipplanes = new Array(4);
	$quake_render.$world_clipplanes = new Array(16);
	$quake_render.$r_pedge = null;
	$quake_render.$r_leftclipped = false;
	$quake_render.$r_rightclipped = false;
	$quake_render.$makeleftedge = false;
	$quake_render.$makerightedge = false;
	$quake_render.$r_nearzionly = false;
	$quake_render.sintable = new Array($quake_render.siN_BUFFER_SIZE);
	$quake_render.intsintable = new Array($quake_render.siN_BUFFER_SIZE);
	$quake_render.$r_leftenter = new $quake_model$mvertex_t();
	$quake_render.$r_leftexit = new $quake_model$mvertex_t();
	$quake_render.$r_rightenter = new $quake_model$mvertex_t();
	$quake_render.$r_rightexit = new $quake_model$mvertex_t();
	$quake_render.$r_emitted = 0;
	$quake_render.$r_nearzi = 0;
	$quake_render.$r_u1 = 0;
	$quake_render.$r_v1 = 0;
	$quake_render.$r_lzi1 = 0;
	$quake_render.$r_ceilv1 = 0;
	$quake_render.$r_lastvertvalid = false;
	$quake_render.$auxedges = null;
	$quake_render.$r_edges = null;
	$quake_render.$edge_p = 0;
	$quake_render.$edge_max = 0;
	$quake_render.surfaces = null;
	$quake_render.surface_p = 0;
	$quake_render.surf_max = 0;
	$quake_render.$newedges = new Array($quake_render.MAXHEIGHT);
	$quake_render.$removeedges = new Array($quake_render.MAXHEIGHT);
	$quake_render.$basespans = null;
	$quake_render.$span_p = 0;
	$quake_render.$max_span_p = 0;
	$quake_render.$r_currentkey = 0;
	$quake_render.$current_iv = 0;
	$quake_render.$edge_head_u_shift20 = 0;
	$quake_render.$edge_tail_u_shift20 = 0;
	$quake_render.$pdrawfunc = null;
	$quake_render.$edge_head = new $quake_render$edge_t();
	$quake_render.$edge_tail = new $quake_render$edge_t();
	$quake_render.$edge_aftertail = new $quake_render$edge_t();
	$quake_render.$edge_sentinel = new $quake_render$edge_t();
	$quake_render.$fv = 0;
	$quake_render.$r_pefragtopnode = null;
	$quake_render.$lastlink = null;
	$quake_render.$r_emins = new Array(3);
	$quake_render.$r_emaxs = new Array(3);
	$quake_render.$r_addent = null;
	$quake_render.$r_dlightframecount = 0;
	$quake_render.aliaS_BASE_SIZE_RATIO = 0.0909090909090909;
	$quake_render.bmodeL_FULLY_CLIPPED = 16;
	$quake_render.XCENTERING = 0.5;
	$quake_render.YCENTERING = 0.5;
	$quake_render.cliP_EPSILON = 0.001;
	$quake_render.backfacE_EPSILON = 0.01;
	$quake_render.disT_NOT_SET = 98765;
	$quake_render.neaR_CLIP = 0.01;
	$quake_render.MAXBVERTINDEXES = 1000;
	$quake_render.maX_BTOFPOLYS = 5000;
	$quake_render.MAXALIASVERTS = 2000;
	$quake_render.aliaS_Z_CLIP_PLANE = 5;
	$quake_render.AMP = 524288;
	$quake_render.amP2 = 3;
	$quake_render.SPEED = 20;
	$quake_render.$viewlightvec = new Array(3);
	var $t1 = new $quake_render$alight_t();
	$t1.ambientlight = 128;
	$t1.shadelight = 192;
	$t1.plightvec = $quake_render.$viewlightvec;
	$quake_render.$r_viewlighting = $t1;
	$quake_render.$r_time1 = 0;
	$quake_render.$r_numallocatededges = 0;
	$quake_render.r_drawpolys = false;
	$quake_render.$r_drawculledpolys = false;
	$quake_render.r_worldpolysbacktofront = false;
	$quake_render.r_recursiveaffinetriangles = true;
	$quake_render.r_pixbytes = 1;
	$quake_render.r_aliasuvscale = 1;
	$quake_render.$r_outofsurfaces = 0;
	$quake_render.$r_outofedges = 0;
	$quake_render.r_dowarp = false;
	$quake_render.r_dowarpold = false;
	$quake_render.r_viewchanged = false;
	$quake_render.$numbtofpolys = 0;
	$quake_render.$pbtofpolys = null;
	$quake_render.$r_pcurrentvertbase = null;
	$quake_render.c_surf = 0;
	$quake_render.$r_maxsurfsseen = 0;
	$quake_render.$r_maxedgesseen = 0;
	$quake_render.$r_cnumsurfs = 0;
	$quake_render.$r_surfsonstack = false;
	$quake_render.$r_clipflags = 0;
	$quake_render.r_warpbuffer = null;
	$quake_render.$r_fov_greater_than_90 = false;
	$quake_render.vup = new Array(3);
	$quake_render.base_vup = new Array(3);
	$quake_render.vpn = new Array(3);
	$quake_render.base_vpn = new Array(3);
	$quake_render.vright = new Array(3);
	$quake_render.base_vright = new Array(3);
	$quake_render.r_origin = new Array(3);
	$quake_render.r_refdef = new $quake_render$refdef_t();
	$quake_render.xcenter = 0;
	$quake_render.ycenter = 0;
	$quake_render.xscale = 0;
	$quake_render.yscale = 0;
	$quake_render.xscaleinv = 0;
	$quake_render.yscaleinv = 0;
	$quake_render.$xscaleshrink = 0;
	$quake_render.$yscaleshrink = 0;
	$quake_render.$aliasxscale = 0;
	$quake_render.$aliasyscale = 0;
	$quake_render.$aliasxcenter = 0;
	$quake_render.$aliasycenter = 0;
	$quake_render.pixelAspect = 0;
	$quake_render.$screenAspect = 0;
	$quake_render.$verticalFieldOfView = 0;
	$quake_render.$xOrigin = 0;
	$quake_render.$yOrigin = 0;
	$quake_render.$screenedge = new Array(4);
	$quake_render.r_framecount = 1;
	$quake_render.$r_visframecount = 0;
	$quake_render.$d_spanpixcount = 0;
	$quake_render.$r_polycount = 0;
	$quake_render.r_drawnpolycount = 0;
	$quake_render.$r_wholepolycount = 0;
	$quake_render.$pfrustum_indexes = new Array(4);
	$quake_render.$r_frustum_indexes = new Array(24);
	$quake_render.$r_viewleaf = null;
	$quake_render.$r_oldviewleaf = null;
	$quake_render.r_notexture_mip = null;
	$quake_render.$r_aliastransition = 0;
	$quake_render.$r_resfudge = 0;
	$quake_render.d_lightstylevalue = new Array(256);
	$quake_render.$r_draworder = new $quake_cvar_t('r_draworder', '0');
	$quake_render.$r_speeds = new $quake_cvar_t('r_speeds', '0');
	$quake_render.$r_timegraph = new $quake_cvar_t('r_timegraph', '0');
	$quake_render.$r_graphheight = new $quake_cvar_t('r_graphheight', '10');
	$quake_render.r_clearcolor = new $quake_cvar_t('r_clearcolor', '2');
	$quake_render.$r_waterwarp = new $quake_cvar_t('r_waterwarp', '1');
	$quake_render.$r_fullbright = new $quake_cvar_t('r_fullbright', '0');
	$quake_render.$r_drawentities = new $quake_cvar_t('r_drawentities', '1');
	$quake_render.$r_drawviewmodel = new $quake_cvar_t('r_drawviewmodel', '1');
	$quake_render.$r_aliasstats = new $quake_cvar_t('r_polymodelstats', '0');
	$quake_render.$r_dspeeds = new $quake_cvar_t('r_dspeeds', '0');
	$quake_render.r_drawflat = new $quake_cvar_t('r_drawflat', '0');
	$quake_render.$r_ambient = new $quake_cvar_t('r_ambient', '0');
	$quake_render.$r_reportsurfout = new $quake_cvar_t('r_reportsurfout', '0');
	$quake_render.$r_maxsurfs = new $quake_cvar_t('r_maxsurfs', '0');
	$quake_render.$r_numsurfs = new $quake_cvar_t('r_numsurfs', '0');
	$quake_render.$r_reportedgeout = new $quake_cvar_t('r_reportedgeout', '0');
	$quake_render.$r_maxedges = new $quake_cvar_t('r_maxedges', '0');
	$quake_render.$r_numedges = new $quake_cvar_t('r_numedges', '0');
	$quake_render.$r_aliastransbase = new $quake_cvar_t('r_aliastransbase', '200');
	$quake_render.$r_aliastransadj = new $quake_cvar_t('r_aliastransadj', '100');
	$quake_render.$oldbright = 0;
	$quake_render.maX_TIMINGS = 100;
	$quake_render.$timex = 0;
	$quake_render.$r_timings = new Array($quake_render.maX_TIMINGS);
	$quake_render.$maX_PARTICLES = 2048;
	$quake_render.$absolutE_MIN_PARTICLES = 512;
	$quake_render.$ramp1 = [111, 109, 107, 105, 103, 101, 99, 97];
	$quake_render.$ramp2 = [111, 110, 109, 108, 107, 106, 104, 102];
	$quake_render.$ramp3 = [109, 107, 6, 5, 4, 3, 0, 0];
	$quake_render.$active_particles = null;
	$quake_render.$free_particles = null;
	$quake_render.$particles = null;
	$quake_render.$r_numparticles = 0;
	$quake_render.r_pright = new Array(3);
	$quake_render.r_pup = new Array(3);
	$quake_render.r_ppn = new Array(3);
	$quake_render.$avelocities = Array.multidim(Number.getDefaultValue(), $quake_render.NUMVERTEXNORMALS, 3);
	$quake_render.$beamlength = 16;
	$quake_render.$tracercount = 0;
	$quake_render.MAXVERTS = 16;
	$quake_render.MAXWORKINGVERTS = 20;
	$quake_render.MAXHEIGHT = 1024;
	$quake_render.MAXWIDTH = 1280;
	$quake_render.MAXDIMENSION = $quake_render.MAXWIDTH;
	$quake_render.siN_BUFFER_SIZE = 1408;
	$quake_render.infinitE_DISTANCE = 65536;
	$quake_render.NUMSTACKEDGES = 2400;
	$quake_render.MINEDGES = $quake_render.NUMSTACKEDGES;
	$quake_render.NUMSTACKSURFACES = 800;
	$quake_render.MINSURFACES = $quake_render.NUMSTACKSURFACES;
	$quake_render.MAXSPANS = 3000;
	$quake_render.aliaS_LEFT_CLIP = 1;
	$quake_render.aliaS_TOP_CLIP = 2;
	$quake_render.aliaS_RIGHT_CLIP = 4;
	$quake_render.aliaS_BOTTOM_CLIP = 8;
	$quake_render.aliaS_Z_CLIP = 16;
	$quake_render.aliaS_ONSEAM = 32;
	$quake_render.aliaS_XY_CLIP_MASK = 15;
	$quake_render.$iskyspeed = 8;
	$quake_render.$iskyspeed2 = 2;
	$quake_render.skyspeed = 0;
	$quake_render.skyspeed2 = 0;
	$quake_render.skytime = 0;
	$quake_render.r_skysource = null;
	$quake_render.r_skymade = 0;
	$quake_render.$bottomsky = new Uint8Array(16768);
	$quake_render.$bottommask = new Uint8Array(16768);
	$quake_render.$newsky = new Uint8Array(32768);
	$quake_render.$xlast = -1;
	$quake_render.$ylast = -1;
	$quake_render.$clip_current = 0;
	$quake_render.$clip_verts = [new Array($quake_render.MAXWORKINGVERTS), new Array($quake_render.MAXWORKINGVERTS)];
	$quake_render.$sprite_width = 0;
	$quake_render.$sprite_height = 0;
	$quake_render.r_spritedesc = new $quake_draw$spritedesc_t();
	$quake_render.r_drawsurf = new $quake_draw$drawsurf_t();
	$quake_render.$lightleft = 0;
	$quake_render.$sourcesstep = 0;
	$quake_render.$blocksize = 0;
	$quake_render.$sourcetstep = 0;
	$quake_render.$lightdelta = 0;
	$quake_render.$lightdeltastep = 0;
	$quake_render.$lightright = 0;
	$quake_render.$lightleftstep = 0;
	$quake_render.$lightrightstep = 0;
	$quake_render.$blockdivshift = 0;
	$quake_render.$blockdivmask = 0;
	$quake_render.$prowdestbase = null;
	$quake_render.$pbasesource = null;
	$quake_render.$surfrowbytes = 0;
	$quake_render.$r_lightptr = null;
	$quake_render.$r_stepback = 0;
	$quake_render.$r_lightwidth = 0;
	$quake_render.$r_numhblocks = 0;
	$quake_render.$r_numvblocks = 0;
	$quake_render.$r_source = null;
	$quake_render.$r_sourcemax = null;
	$quake_render.$surfmiptable = [$quake_render.$r_DrawSurfaceBlock8_mip0, $quake_render.$r_DrawSurfaceBlock8_mip1, $quake_render.$r_DrawSurfaceBlock8_mip2, $quake_render.$r_DrawSurfaceBlock8_mip3];
	$quake_render.$blocklights = new Array(324);
	$quake_render.$r_bmodelactive = 0;
	var kk;
	var i, j;
	for (kk = 0; kk < 4; kk++) {
		$quake_render.$screenedge[kk] = new $quake_model$mplane_t();
	}
	for (kk = 0; kk < 4; kk++) {
		$quake_render.$view_clipplanes[kk] = new $quake_render$clipplane_t();
	}
	for (kk = 0; kk < 16; kk++) {
		$quake_render.$world_clipplanes[kk] = new $quake_render$clipplane_t();
	}
	for (i = 0; i < 2; i++) {
		for (j = 0; j < $quake_render.MAXWORKINGVERTS; j++) {
			$quake_render.$clip_verts[i][j] = new Array(5);
		}
	}
	for (i = 0; i < 2; i++) {
		for (j = 0; j < 8; j++) {
			$quake_render.$fva[i][j] = new $quake_draw$finalvert_t();
		}
	}
	for (kk = 0; kk < 8; kk++) {
		$quake_render.$av[kk] = new $quake_render$auxvert_t();
	}
	$quake_render.$r_alias_init();
	$quake_draw.$r_rectdesc = new $quake_$draw$rectdesc_t();
	$quake_draw.$draw_chars = null;
	$quake_draw.draw_disc = null;
	$quake_draw.$draw_backtile = null;
	$quake_draw.maX_CACHED_PICS = 128;
	$quake_draw.$menu_cachepics = new Array($quake_draw.maX_CACHED_PICS);
	$quake_draw.$menu_numcachepics = 0;
	$quake_draw.$miplevel = 0;
	$quake_draw.$scale_for_mip = 0;
	$quake_draw.$screenwidth = 0;
	$quake_draw.$ubasestep = 0;
	$quake_draw.$errorterm = 0;
	$quake_draw.$erroradjustup = 0;
	$quake_draw.$erroradjustdown = 0;
	$quake_draw.$transformed_modelorg = new Array(3);
	$quake_draw.warP_WIDTH = 320;
	$quake_draw.warP_HEIGHT = 200;
	$quake_draw.maX_LBM_HEIGHT = 480;
	$quake_draw.particlE_Z_CLIP = 8;
	$quake_draw.dR_SOLID = 0;
	$quake_draw.dR_TRANSPARENT = 1;
	$quake_draw.transparenT_COLOR = 255;
	$quake_draw.turB_TEX_SIZE = 64;
	$quake_draw.CYCLE = 128;
	$quake_draw.tilE_SIZE = 128;
	$quake_draw.SKYSHIFT = 7;
	$quake_draw.SKYSIZE = 128;
	$quake_draw.SKYMASK = 127;
	$quake_draw.nuM_MIPS = 4;
	$quake_draw.$d_subdiv16 = new $quake_cvar_t('d_subdiv16', '1');
	$quake_draw.$d_mipcap = new $quake_cvar_t('d_mipcap', '0');
	$quake_draw.$d_mipscale = new $quake_cvar_t('d_mipscale', '1');
	$quake_draw.$d_roverwrapped = false;
	$quake_draw.$d_minmip = 0;
	$quake_draw.$d_scalemip = new Array(3);
	$quake_draw.$basemip = [1, 0.4, 0.2];
	$quake_draw.$d_pdrawspans = null;
	$quake_draw.SCANBUFFERPAD = 4096;
	$quake_draw.r_SKY_SMASK = 8323072;
	$quake_draw.r_SKY_TMASK = 8323072;
	$quake_draw.dS_SPAN_LIST_END = -128;
	$quake_draw.surfcachE_SIZE_AT_320X200 = 614400;
	$quake_draw.$d_vrectx = 0;
	$quake_draw.$d_vrecty = 0;
	$quake_draw.$d_vrectright_particle = 0;
	$quake_draw.$d_vrectbottom_particle = 0;
	$quake_draw.$d_y_aspect_shift = 0;
	$quake_draw.$d_pix_min = 0;
	$quake_draw.$d_pix_max = 0;
	$quake_draw.$d_pix_shift = 0;
	$quake_draw.$d_scantable = new Array($quake_render.MAXHEIGHT);
	$quake_draw.$zspantable = new Array($quake_render.MAXHEIGHT);
	$quake_draw.dpS_MAXSPANS = 1025;
	$quake_draw.$r_p0 = new Array(6);
	$quake_draw.$r_p1 = new Array(6);
	$quake_draw.$r_p2 = new Array(6);
	$quake_draw.$d_pcolormap = 0;
	$quake_draw.$d_aflatcolor = 0;
	$quake_draw.$d_xdenom = 0;
	$quake_draw.$pedgetable = null;
	$quake_draw.$edgetables = [new $quake_draw$edgetable(0, 1, $quake_draw.$r_p0, $quake_draw.$r_p2, null, 2, $quake_draw.$r_p0, $quake_draw.$r_p1, $quake_draw.$r_p2), new $quake_draw$edgetable(0, 2, $quake_draw.$r_p1, $quake_draw.$r_p0, $quake_draw.$r_p2, 1, $quake_draw.$r_p1, $quake_draw.$r_p2, null), new $quake_draw$edgetable(1, 1, $quake_draw.$r_p0, $quake_draw.$r_p2, null, 1, $quake_draw.$r_p1, $quake_draw.$r_p2, null), new $quake_draw$edgetable(0, 1, $quake_draw.$r_p1, $quake_draw.$r_p0, null, 2, $quake_draw.$r_p1, $quake_draw.$r_p2, $quake_draw.$r_p0), new $quake_draw$edgetable(0, 2, $quake_draw.$r_p0, $quake_draw.$r_p2, $quake_draw.$r_p1, 1, $quake_draw.$r_p0, $quake_draw.$r_p1, null), new $quake_draw$edgetable(0, 1, $quake_draw.$r_p2, $quake_draw.$r_p1, null, 1, $quake_draw.$r_p2, $quake_draw.$r_p0, null), new $quake_draw$edgetable(0, 1, $quake_draw.$r_p2, $quake_draw.$r_p1, null, 2, $quake_draw.$r_p2, $quake_draw.$r_p0, $quake_draw.$r_p1), new $quake_draw$edgetable(0, 2, $quake_draw.$r_p2, $quake_draw.$r_p1, $quake_draw.$r_p0, 1, $quake_draw.$r_p2, $quake_draw.$r_p0, null), new $quake_draw$edgetable(0, 1, $quake_draw.$r_p1, $quake_draw.$r_p0, null, 1, $quake_draw.$r_p1, $quake_draw.$r_p2, null), new $quake_draw$edgetable(1, 1, $quake_draw.$r_p2, $quake_draw.$r_p1, null, 1, $quake_draw.$r_p0, $quake_draw.$r_p1, null), new $quake_draw$edgetable(1, 1, $quake_draw.$r_p1, $quake_draw.$r_p0, null, 1, $quake_draw.$r_p2, $quake_draw.$r_p0, null), new $quake_draw$edgetable(0, 1, $quake_draw.$r_p0, $quake_draw.$r_p2, null, 1, $quake_draw.$r_p0, $quake_draw.$r_p1, null)];
	$quake_draw.$a_sstepxfrac = 0;
	$quake_draw.$a_tstepxfrac = 0;
	$quake_draw.$r_lstepx = 0;
	$quake_draw.$a_ststepxwhole = 0;
	$quake_draw.$r_sstepx = 0;
	$quake_draw.$r_tstepx = 0;
	$quake_draw.$r_lstepy = 0;
	$quake_draw.$r_sstepy = 0;
	$quake_draw.$r_tstepy = 0;
	$quake_draw.$r_zistepx = 0;
	$quake_draw.$r_zistepy = 0;
	$quake_draw.$d_aspancount = 0;
	$quake_draw.$d_countextrastep = 0;
	$quake_draw.$a_spans = null;
	$quake_draw.$d_edgespanpackage = null;
	$quake_draw.$d_pedgespanpackage = 0;
	$quake_draw.$ystart = 0;
	$quake_draw.$d_pdest = 0;
	$quake_draw.$d_ptex = 0;
	$quake_draw.$d_pz = 0;
	$quake_draw.$d_sfrac = 0;
	$quake_draw.$d_tfrac = 0;
	$quake_draw.$d_light = 0;
	$quake_draw.$d_zi = 0;
	$quake_draw.$d_ptexextrastep = 0;
	$quake_draw.$d_sfracextrastep = 0;
	$quake_draw.$d_tfracextrastep = 0;
	$quake_draw.$d_lightextrastep = 0;
	$quake_draw.$d_pdestextrastep = 0;
	$quake_draw.$d_lightbasestep = 0;
	$quake_draw.$d_pdestbasestep = 0;
	$quake_draw.$d_ptexbasestep = 0;
	$quake_draw.$d_sfracbasestep = 0;
	$quake_draw.$d_tfracbasestep = 0;
	$quake_draw.$d_ziextrastep = 0;
	$quake_draw.$d_zibasestep = 0;
	$quake_draw.$d_pzextrastep = 0;
	$quake_draw.$d_pzbasestep = 0;
	$quake_draw.$adivtab = [new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(1, -1), new $quake_draw$adivtab_t(1, -2), new $quake_draw$adivtab_t(1, -3), new $quake_draw$adivtab_t(1, -4), new $quake_draw$adivtab_t(1, -5), new $quake_draw$adivtab_t(1, -6), new $quake_draw$adivtab_t(1, -7), new $quake_draw$adivtab_t(2, -1), new $quake_draw$adivtab_t(2, -3), new $quake_draw$adivtab_t(3, 0), new $quake_draw$adivtab_t(3, -3), new $quake_draw$adivtab_t(5, 0), new $quake_draw$adivtab_t(7, -1), new $quake_draw$adivtab_t(15, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-15, 0), new $quake_draw$adivtab_t(-8, 1), new $quake_draw$adivtab_t(-5, 0), new $quake_draw$adivtab_t(-4, 1), new $quake_draw$adivtab_t(-3, 0), new $quake_draw$adivtab_t(-3, 3), new $quake_draw$adivtab_t(-3, 6), new $quake_draw$adivtab_t(-2, 1), new $quake_draw$adivtab_t(-2, 3), new $quake_draw$adivtab_t(-2, 5), new $quake_draw$adivtab_t(-2, 7), new $quake_draw$adivtab_t(-2, 9), new $quake_draw$adivtab_t(-2, 11), new $quake_draw$adivtab_t(-2, 13), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-1, 1), new $quake_draw$adivtab_t(0, -14), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(1, -1), new $quake_draw$adivtab_t(1, -2), new $quake_draw$adivtab_t(1, -3), new $quake_draw$adivtab_t(1, -4), new $quake_draw$adivtab_t(1, -5), new $quake_draw$adivtab_t(1, -6), new $quake_draw$adivtab_t(2, 0), new $quake_draw$adivtab_t(2, -2), new $quake_draw$adivtab_t(2, -4), new $quake_draw$adivtab_t(3, -2), new $quake_draw$adivtab_t(4, -2), new $quake_draw$adivtab_t(7, 0), new $quake_draw$adivtab_t(14, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-14, 0), new $quake_draw$adivtab_t(-7, 0), new $quake_draw$adivtab_t(-5, 1), new $quake_draw$adivtab_t(-4, 2), new $quake_draw$adivtab_t(-3, 1), new $quake_draw$adivtab_t(-3, 4), new $quake_draw$adivtab_t(-2, 0), new $quake_draw$adivtab_t(-2, 2), new $quake_draw$adivtab_t(-2, 4), new $quake_draw$adivtab_t(-2, 6), new $quake_draw$adivtab_t(-2, 8), new $quake_draw$adivtab_t(-2, 10), new $quake_draw$adivtab_t(-2, 12), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-1, 1), new $quake_draw$adivtab_t(-1, 2), new $quake_draw$adivtab_t(0, -13), new $quake_draw$adivtab_t(0, -13), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(1, -1), new $quake_draw$adivtab_t(1, -2), new $quake_draw$adivtab_t(1, -3), new $quake_draw$adivtab_t(1, -4), new $quake_draw$adivtab_t(1, -5), new $quake_draw$adivtab_t(1, -6), new $quake_draw$adivtab_t(2, -1), new $quake_draw$adivtab_t(2, -3), new $quake_draw$adivtab_t(3, -1), new $quake_draw$adivtab_t(4, -1), new $quake_draw$adivtab_t(6, -1), new $quake_draw$adivtab_t(13, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-13, 0), new $quake_draw$adivtab_t(-7, 1), new $quake_draw$adivtab_t(-5, 2), new $quake_draw$adivtab_t(-4, 3), new $quake_draw$adivtab_t(-3, 2), new $quake_draw$adivtab_t(-3, 5), new $quake_draw$adivtab_t(-2, 1), new $quake_draw$adivtab_t(-2, 3), new $quake_draw$adivtab_t(-2, 5), new $quake_draw$adivtab_t(-2, 7), new $quake_draw$adivtab_t(-2, 9), new $quake_draw$adivtab_t(-2, 11), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-1, 1), new $quake_draw$adivtab_t(-1, 2), new $quake_draw$adivtab_t(-1, 3), new $quake_draw$adivtab_t(0, -12), new $quake_draw$adivtab_t(0, -12), new $quake_draw$adivtab_t(0, -12), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(1, -1), new $quake_draw$adivtab_t(1, -2), new $quake_draw$adivtab_t(1, -3), new $quake_draw$adivtab_t(1, -4), new $quake_draw$adivtab_t(1, -5), new $quake_draw$adivtab_t(2, 0), new $quake_draw$adivtab_t(2, -2), new $quake_draw$adivtab_t(3, 0), new $quake_draw$adivtab_t(4, 0), new $quake_draw$adivtab_t(6, 0), new $quake_draw$adivtab_t(12, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-12, 0), new $quake_draw$adivtab_t(-6, 0), new $quake_draw$adivtab_t(-4, 0), new $quake_draw$adivtab_t(-3, 0), new $quake_draw$adivtab_t(-3, 3), new $quake_draw$adivtab_t(-2, 0), new $quake_draw$adivtab_t(-2, 2), new $quake_draw$adivtab_t(-2, 4), new $quake_draw$adivtab_t(-2, 6), new $quake_draw$adivtab_t(-2, 8), new $quake_draw$adivtab_t(-2, 10), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-1, 1), new $quake_draw$adivtab_t(-1, 2), new $quake_draw$adivtab_t(-1, 3), new $quake_draw$adivtab_t(-1, 4), new $quake_draw$adivtab_t(0, -11), new $quake_draw$adivtab_t(0, -11), new $quake_draw$adivtab_t(0, -11), new $quake_draw$adivtab_t(0, -11), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(1, -1), new $quake_draw$adivtab_t(1, -2), new $quake_draw$adivtab_t(1, -3), new $quake_draw$adivtab_t(1, -4), new $quake_draw$adivtab_t(1, -5), new $quake_draw$adivtab_t(2, -1), new $quake_draw$adivtab_t(2, -3), new $quake_draw$adivtab_t(3, -2), new $quake_draw$adivtab_t(5, -1), new $quake_draw$adivtab_t(11, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-11, 0), new $quake_draw$adivtab_t(-6, 1), new $quake_draw$adivtab_t(-4, 1), new $quake_draw$adivtab_t(-3, 1), new $quake_draw$adivtab_t(-3, 4), new $quake_draw$adivtab_t(-2, 1), new $quake_draw$adivtab_t(-2, 3), new $quake_draw$adivtab_t(-2, 5), new $quake_draw$adivtab_t(-2, 7), new $quake_draw$adivtab_t(-2, 9), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-1, 1), new $quake_draw$adivtab_t(-1, 2), new $quake_draw$adivtab_t(-1, 3), new $quake_draw$adivtab_t(-1, 4), new $quake_draw$adivtab_t(-1, 5), new $quake_draw$adivtab_t(0, -10), new $quake_draw$adivtab_t(0, -10), new $quake_draw$adivtab_t(0, -10), new $quake_draw$adivtab_t(0, -10), new $quake_draw$adivtab_t(0, -10), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(1, -1), new $quake_draw$adivtab_t(1, -2), new $quake_draw$adivtab_t(1, -3), new $quake_draw$adivtab_t(1, -4), new $quake_draw$adivtab_t(2, 0), new $quake_draw$adivtab_t(2, -2), new $quake_draw$adivtab_t(3, -1), new $quake_draw$adivtab_t(5, 0), new $quake_draw$adivtab_t(10, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-10, 0), new $quake_draw$adivtab_t(-5, 0), new $quake_draw$adivtab_t(-4, 2), new $quake_draw$adivtab_t(-3, 2), new $quake_draw$adivtab_t(-2, 0), new $quake_draw$adivtab_t(-2, 2), new $quake_draw$adivtab_t(-2, 4), new $quake_draw$adivtab_t(-2, 6), new $quake_draw$adivtab_t(-2, 8), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-1, 1), new $quake_draw$adivtab_t(-1, 2), new $quake_draw$adivtab_t(-1, 3), new $quake_draw$adivtab_t(-1, 4), new $quake_draw$adivtab_t(-1, 5), new $quake_draw$adivtab_t(-1, 6), new $quake_draw$adivtab_t(0, -9), new $quake_draw$adivtab_t(0, -9), new $quake_draw$adivtab_t(0, -9), new $quake_draw$adivtab_t(0, -9), new $quake_draw$adivtab_t(0, -9), new $quake_draw$adivtab_t(0, -9), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(1, -1), new $quake_draw$adivtab_t(1, -2), new $quake_draw$adivtab_t(1, -3), new $quake_draw$adivtab_t(1, -4), new $quake_draw$adivtab_t(2, -1), new $quake_draw$adivtab_t(3, 0), new $quake_draw$adivtab_t(4, -1), new $quake_draw$adivtab_t(9, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-9, 0), new $quake_draw$adivtab_t(-5, 1), new $quake_draw$adivtab_t(-3, 0), new $quake_draw$adivtab_t(-3, 3), new $quake_draw$adivtab_t(-2, 1), new $quake_draw$adivtab_t(-2, 3), new $quake_draw$adivtab_t(-2, 5), new $quake_draw$adivtab_t(-2, 7), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-1, 1), new $quake_draw$adivtab_t(-1, 2), new $quake_draw$adivtab_t(-1, 3), new $quake_draw$adivtab_t(-1, 4), new $quake_draw$adivtab_t(-1, 5), new $quake_draw$adivtab_t(-1, 6), new $quake_draw$adivtab_t(-1, 7), new $quake_draw$adivtab_t(0, -8), new $quake_draw$adivtab_t(0, -8), new $quake_draw$adivtab_t(0, -8), new $quake_draw$adivtab_t(0, -8), new $quake_draw$adivtab_t(0, -8), new $quake_draw$adivtab_t(0, -8), new $quake_draw$adivtab_t(0, -8), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(1, -1), new $quake_draw$adivtab_t(1, -2), new $quake_draw$adivtab_t(1, -3), new $quake_draw$adivtab_t(2, 0), new $quake_draw$adivtab_t(2, -2), new $quake_draw$adivtab_t(4, 0), new $quake_draw$adivtab_t(8, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-8, 0), new $quake_draw$adivtab_t(-4, 0), new $quake_draw$adivtab_t(-3, 1), new $quake_draw$adivtab_t(-2, 0), new $quake_draw$adivtab_t(-2, 2), new $quake_draw$adivtab_t(-2, 4), new $quake_draw$adivtab_t(-2, 6), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-1, 1), new $quake_draw$adivtab_t(-1, 2), new $quake_draw$adivtab_t(-1, 3), new $quake_draw$adivtab_t(-1, 4), new $quake_draw$adivtab_t(-1, 5), new $quake_draw$adivtab_t(-1, 6), new $quake_draw$adivtab_t(-1, 7), new $quake_draw$adivtab_t(-1, 8), new $quake_draw$adivtab_t(0, -7), new $quake_draw$adivtab_t(0, -7), new $quake_draw$adivtab_t(0, -7), new $quake_draw$adivtab_t(0, -7), new $quake_draw$adivtab_t(0, -7), new $quake_draw$adivtab_t(0, -7), new $quake_draw$adivtab_t(0, -7), new $quake_draw$adivtab_t(0, -7), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(1, -1), new $quake_draw$adivtab_t(1, -2), new $quake_draw$adivtab_t(1, -3), new $quake_draw$adivtab_t(2, -1), new $quake_draw$adivtab_t(3, -1), new $quake_draw$adivtab_t(7, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-7, 0), new $quake_draw$adivtab_t(-4, 1), new $quake_draw$adivtab_t(-3, 2), new $quake_draw$adivtab_t(-2, 1), new $quake_draw$adivtab_t(-2, 3), new $quake_draw$adivtab_t(-2, 5), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-1, 1), new $quake_draw$adivtab_t(-1, 2), new $quake_draw$adivtab_t(-1, 3), new $quake_draw$adivtab_t(-1, 4), new $quake_draw$adivtab_t(-1, 5), new $quake_draw$adivtab_t(-1, 6), new $quake_draw$adivtab_t(-1, 7), new $quake_draw$adivtab_t(-1, 8), new $quake_draw$adivtab_t(-1, 9), new $quake_draw$adivtab_t(0, -6), new $quake_draw$adivtab_t(0, -6), new $quake_draw$adivtab_t(0, -6), new $quake_draw$adivtab_t(0, -6), new $quake_draw$adivtab_t(0, -6), new $quake_draw$adivtab_t(0, -6), new $quake_draw$adivtab_t(0, -6), new $quake_draw$adivtab_t(0, -6), new $quake_draw$adivtab_t(0, -6), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(1, -1), new $quake_draw$adivtab_t(1, -2), new $quake_draw$adivtab_t(2, 0), new $quake_draw$adivtab_t(3, 0), new $quake_draw$adivtab_t(6, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-6, 0), new $quake_draw$adivtab_t(-3, 0), new $quake_draw$adivtab_t(-2, 0), new $quake_draw$adivtab_t(-2, 2), new $quake_draw$adivtab_t(-2, 4), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-1, 1), new $quake_draw$adivtab_t(-1, 2), new $quake_draw$adivtab_t(-1, 3), new $quake_draw$adivtab_t(-1, 4), new $quake_draw$adivtab_t(-1, 5), new $quake_draw$adivtab_t(-1, 6), new $quake_draw$adivtab_t(-1, 7), new $quake_draw$adivtab_t(-1, 8), new $quake_draw$adivtab_t(-1, 9), new $quake_draw$adivtab_t(-1, 10), new $quake_draw$adivtab_t(0, -5), new $quake_draw$adivtab_t(0, -5), new $quake_draw$adivtab_t(0, -5), new $quake_draw$adivtab_t(0, -5), new $quake_draw$adivtab_t(0, -5), new $quake_draw$adivtab_t(0, -5), new $quake_draw$adivtab_t(0, -5), new $quake_draw$adivtab_t(0, -5), new $quake_draw$adivtab_t(0, -5), new $quake_draw$adivtab_t(0, -5), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(1, -1), new $quake_draw$adivtab_t(1, -2), new $quake_draw$adivtab_t(2, -1), new $quake_draw$adivtab_t(5, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-5, 0), new $quake_draw$adivtab_t(-3, 1), new $quake_draw$adivtab_t(-2, 1), new $quake_draw$adivtab_t(-2, 3), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-1, 1), new $quake_draw$adivtab_t(-1, 2), new $quake_draw$adivtab_t(-1, 3), new $quake_draw$adivtab_t(-1, 4), new $quake_draw$adivtab_t(-1, 5), new $quake_draw$adivtab_t(-1, 6), new $quake_draw$adivtab_t(-1, 7), new $quake_draw$adivtab_t(-1, 8), new $quake_draw$adivtab_t(-1, 9), new $quake_draw$adivtab_t(-1, 10), new $quake_draw$adivtab_t(-1, 11), new $quake_draw$adivtab_t(0, -4), new $quake_draw$adivtab_t(0, -4), new $quake_draw$adivtab_t(0, -4), new $quake_draw$adivtab_t(0, -4), new $quake_draw$adivtab_t(0, -4), new $quake_draw$adivtab_t(0, -4), new $quake_draw$adivtab_t(0, -4), new $quake_draw$adivtab_t(0, -4), new $quake_draw$adivtab_t(0, -4), new $quake_draw$adivtab_t(0, -4), new $quake_draw$adivtab_t(0, -4), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(1, -1), new $quake_draw$adivtab_t(2, 0), new $quake_draw$adivtab_t(4, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-4, 0), new $quake_draw$adivtab_t(-2, 0), new $quake_draw$adivtab_t(-2, 2), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-1, 1), new $quake_draw$adivtab_t(-1, 2), new $quake_draw$adivtab_t(-1, 3), new $quake_draw$adivtab_t(-1, 4), new $quake_draw$adivtab_t(-1, 5), new $quake_draw$adivtab_t(-1, 6), new $quake_draw$adivtab_t(-1, 7), new $quake_draw$adivtab_t(-1, 8), new $quake_draw$adivtab_t(-1, 9), new $quake_draw$adivtab_t(-1, 10), new $quake_draw$adivtab_t(-1, 11), new $quake_draw$adivtab_t(-1, 12), new $quake_draw$adivtab_t(0, -3), new $quake_draw$adivtab_t(0, -3), new $quake_draw$adivtab_t(0, -3), new $quake_draw$adivtab_t(0, -3), new $quake_draw$adivtab_t(0, -3), new $quake_draw$adivtab_t(0, -3), new $quake_draw$adivtab_t(0, -3), new $quake_draw$adivtab_t(0, -3), new $quake_draw$adivtab_t(0, -3), new $quake_draw$adivtab_t(0, -3), new $quake_draw$adivtab_t(0, -3), new $quake_draw$adivtab_t(0, -3), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(1, -1), new $quake_draw$adivtab_t(3, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-3, 0), new $quake_draw$adivtab_t(-2, 1), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-1, 1), new $quake_draw$adivtab_t(-1, 2), new $quake_draw$adivtab_t(-1, 3), new $quake_draw$adivtab_t(-1, 4), new $quake_draw$adivtab_t(-1, 5), new $quake_draw$adivtab_t(-1, 6), new $quake_draw$adivtab_t(-1, 7), new $quake_draw$adivtab_t(-1, 8), new $quake_draw$adivtab_t(-1, 9), new $quake_draw$adivtab_t(-1, 10), new $quake_draw$adivtab_t(-1, 11), new $quake_draw$adivtab_t(-1, 12), new $quake_draw$adivtab_t(-1, 13), new $quake_draw$adivtab_t(0, -2), new $quake_draw$adivtab_t(0, -2), new $quake_draw$adivtab_t(0, -2), new $quake_draw$adivtab_t(0, -2), new $quake_draw$adivtab_t(0, -2), new $quake_draw$adivtab_t(0, -2), new $quake_draw$adivtab_t(0, -2), new $quake_draw$adivtab_t(0, -2), new $quake_draw$adivtab_t(0, -2), new $quake_draw$adivtab_t(0, -2), new $quake_draw$adivtab_t(0, -2), new $quake_draw$adivtab_t(0, -2), new $quake_draw$adivtab_t(0, -2), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(2, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-2, 0), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-1, 1), new $quake_draw$adivtab_t(-1, 2), new $quake_draw$adivtab_t(-1, 3), new $quake_draw$adivtab_t(-1, 4), new $quake_draw$adivtab_t(-1, 5), new $quake_draw$adivtab_t(-1, 6), new $quake_draw$adivtab_t(-1, 7), new $quake_draw$adivtab_t(-1, 8), new $quake_draw$adivtab_t(-1, 9), new $quake_draw$adivtab_t(-1, 10), new $quake_draw$adivtab_t(-1, 11), new $quake_draw$adivtab_t(-1, 12), new $quake_draw$adivtab_t(-1, 13), new $quake_draw$adivtab_t(-1, 14), new $quake_draw$adivtab_t(0, -1), new $quake_draw$adivtab_t(0, -1), new $quake_draw$adivtab_t(0, -1), new $quake_draw$adivtab_t(0, -1), new $quake_draw$adivtab_t(0, -1), new $quake_draw$adivtab_t(0, -1), new $quake_draw$adivtab_t(0, -1), new $quake_draw$adivtab_t(0, -1), new $quake_draw$adivtab_t(0, -1), new $quake_draw$adivtab_t(0, -1), new $quake_draw$adivtab_t(0, -1), new $quake_draw$adivtab_t(0, -1), new $quake_draw$adivtab_t(0, -1), new $quake_draw$adivtab_t(0, -1), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-1, 1), new $quake_draw$adivtab_t(-1, 2), new $quake_draw$adivtab_t(-1, 3), new $quake_draw$adivtab_t(-1, 4), new $quake_draw$adivtab_t(-1, 5), new $quake_draw$adivtab_t(-1, 6), new $quake_draw$adivtab_t(-1, 7), new $quake_draw$adivtab_t(-1, 8), new $quake_draw$adivtab_t(-1, 9), new $quake_draw$adivtab_t(-1, 10), new $quake_draw$adivtab_t(-1, 11), new $quake_draw$adivtab_t(-1, 12), new $quake_draw$adivtab_t(-1, 13), new $quake_draw$adivtab_t(-1, 14), new $quake_draw$adivtab_t(-1, 15), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(-1, -14), new $quake_draw$adivtab_t(-1, -13), new $quake_draw$adivtab_t(-1, -12), new $quake_draw$adivtab_t(-1, -11), new $quake_draw$adivtab_t(-1, -10), new $quake_draw$adivtab_t(-1, -9), new $quake_draw$adivtab_t(-1, -8), new $quake_draw$adivtab_t(-1, -7), new $quake_draw$adivtab_t(-1, -6), new $quake_draw$adivtab_t(-1, -5), new $quake_draw$adivtab_t(-1, -4), new $quake_draw$adivtab_t(-1, -3), new $quake_draw$adivtab_t(-1, -2), new $quake_draw$adivtab_t(-1, -1), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 1), new $quake_draw$adivtab_t(0, 1), new $quake_draw$adivtab_t(0, 1), new $quake_draw$adivtab_t(0, 1), new $quake_draw$adivtab_t(0, 1), new $quake_draw$adivtab_t(0, 1), new $quake_draw$adivtab_t(0, 1), new $quake_draw$adivtab_t(0, 1), new $quake_draw$adivtab_t(0, 1), new $quake_draw$adivtab_t(0, 1), new $quake_draw$adivtab_t(0, 1), new $quake_draw$adivtab_t(0, 1), new $quake_draw$adivtab_t(0, 1), new $quake_draw$adivtab_t(0, 1), new $quake_draw$adivtab_t(0, 1), new $quake_draw$adivtab_t(-1, -13), new $quake_draw$adivtab_t(-1, -12), new $quake_draw$adivtab_t(-1, -11), new $quake_draw$adivtab_t(-1, -10), new $quake_draw$adivtab_t(-1, -9), new $quake_draw$adivtab_t(-1, -8), new $quake_draw$adivtab_t(-1, -7), new $quake_draw$adivtab_t(-1, -6), new $quake_draw$adivtab_t(-1, -5), new $quake_draw$adivtab_t(-1, -4), new $quake_draw$adivtab_t(-1, -3), new $quake_draw$adivtab_t(-1, -2), new $quake_draw$adivtab_t(-1, -1), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-2, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(2, 0), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 2), new $quake_draw$adivtab_t(0, 2), new $quake_draw$adivtab_t(0, 2), new $quake_draw$adivtab_t(0, 2), new $quake_draw$adivtab_t(0, 2), new $quake_draw$adivtab_t(0, 2), new $quake_draw$adivtab_t(0, 2), new $quake_draw$adivtab_t(0, 2), new $quake_draw$adivtab_t(0, 2), new $quake_draw$adivtab_t(0, 2), new $quake_draw$adivtab_t(0, 2), new $quake_draw$adivtab_t(0, 2), new $quake_draw$adivtab_t(0, 2), new $quake_draw$adivtab_t(0, 2), new $quake_draw$adivtab_t(-1, -12), new $quake_draw$adivtab_t(-1, -11), new $quake_draw$adivtab_t(-1, -10), new $quake_draw$adivtab_t(-1, -9), new $quake_draw$adivtab_t(-1, -8), new $quake_draw$adivtab_t(-1, -7), new $quake_draw$adivtab_t(-1, -6), new $quake_draw$adivtab_t(-1, -5), new $quake_draw$adivtab_t(-1, -4), new $quake_draw$adivtab_t(-1, -3), new $quake_draw$adivtab_t(-1, -2), new $quake_draw$adivtab_t(-1, -1), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-2, -1), new $quake_draw$adivtab_t(-3, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(3, 0), new $quake_draw$adivtab_t(1, 1), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 3), new $quake_draw$adivtab_t(0, 3), new $quake_draw$adivtab_t(0, 3), new $quake_draw$adivtab_t(0, 3), new $quake_draw$adivtab_t(0, 3), new $quake_draw$adivtab_t(0, 3), new $quake_draw$adivtab_t(0, 3), new $quake_draw$adivtab_t(0, 3), new $quake_draw$adivtab_t(0, 3), new $quake_draw$adivtab_t(0, 3), new $quake_draw$adivtab_t(0, 3), new $quake_draw$adivtab_t(0, 3), new $quake_draw$adivtab_t(0, 3), new $quake_draw$adivtab_t(-1, -11), new $quake_draw$adivtab_t(-1, -10), new $quake_draw$adivtab_t(-1, -9), new $quake_draw$adivtab_t(-1, -8), new $quake_draw$adivtab_t(-1, -7), new $quake_draw$adivtab_t(-1, -6), new $quake_draw$adivtab_t(-1, -5), new $quake_draw$adivtab_t(-1, -4), new $quake_draw$adivtab_t(-1, -3), new $quake_draw$adivtab_t(-1, -2), new $quake_draw$adivtab_t(-1, -1), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-2, -2), new $quake_draw$adivtab_t(-2, 0), new $quake_draw$adivtab_t(-4, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(4, 0), new $quake_draw$adivtab_t(2, 0), new $quake_draw$adivtab_t(1, 1), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 4), new $quake_draw$adivtab_t(0, 4), new $quake_draw$adivtab_t(0, 4), new $quake_draw$adivtab_t(0, 4), new $quake_draw$adivtab_t(0, 4), new $quake_draw$adivtab_t(0, 4), new $quake_draw$adivtab_t(0, 4), new $quake_draw$adivtab_t(0, 4), new $quake_draw$adivtab_t(0, 4), new $quake_draw$adivtab_t(0, 4), new $quake_draw$adivtab_t(0, 4), new $quake_draw$adivtab_t(0, 4), new $quake_draw$adivtab_t(-1, -10), new $quake_draw$adivtab_t(-1, -9), new $quake_draw$adivtab_t(-1, -8), new $quake_draw$adivtab_t(-1, -7), new $quake_draw$adivtab_t(-1, -6), new $quake_draw$adivtab_t(-1, -5), new $quake_draw$adivtab_t(-1, -4), new $quake_draw$adivtab_t(-1, -3), new $quake_draw$adivtab_t(-1, -2), new $quake_draw$adivtab_t(-1, -1), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-2, -3), new $quake_draw$adivtab_t(-2, -1), new $quake_draw$adivtab_t(-3, -1), new $quake_draw$adivtab_t(-5, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(5, 0), new $quake_draw$adivtab_t(2, 1), new $quake_draw$adivtab_t(1, 2), new $quake_draw$adivtab_t(1, 1), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 5), new $quake_draw$adivtab_t(0, 5), new $quake_draw$adivtab_t(0, 5), new $quake_draw$adivtab_t(0, 5), new $quake_draw$adivtab_t(0, 5), new $quake_draw$adivtab_t(0, 5), new $quake_draw$adivtab_t(0, 5), new $quake_draw$adivtab_t(0, 5), new $quake_draw$adivtab_t(0, 5), new $quake_draw$adivtab_t(0, 5), new $quake_draw$adivtab_t(0, 5), new $quake_draw$adivtab_t(-1, -9), new $quake_draw$adivtab_t(-1, -8), new $quake_draw$adivtab_t(-1, -7), new $quake_draw$adivtab_t(-1, -6), new $quake_draw$adivtab_t(-1, -5), new $quake_draw$adivtab_t(-1, -4), new $quake_draw$adivtab_t(-1, -3), new $quake_draw$adivtab_t(-1, -2), new $quake_draw$adivtab_t(-1, -1), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-2, -4), new $quake_draw$adivtab_t(-2, -2), new $quake_draw$adivtab_t(-2, 0), new $quake_draw$adivtab_t(-3, 0), new $quake_draw$adivtab_t(-6, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(6, 0), new $quake_draw$adivtab_t(3, 0), new $quake_draw$adivtab_t(2, 0), new $quake_draw$adivtab_t(1, 2), new $quake_draw$adivtab_t(1, 1), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 6), new $quake_draw$adivtab_t(0, 6), new $quake_draw$adivtab_t(0, 6), new $quake_draw$adivtab_t(0, 6), new $quake_draw$adivtab_t(0, 6), new $quake_draw$adivtab_t(0, 6), new $quake_draw$adivtab_t(0, 6), new $quake_draw$adivtab_t(0, 6), new $quake_draw$adivtab_t(0, 6), new $quake_draw$adivtab_t(0, 6), new $quake_draw$adivtab_t(-1, -8), new $quake_draw$adivtab_t(-1, -7), new $quake_draw$adivtab_t(-1, -6), new $quake_draw$adivtab_t(-1, -5), new $quake_draw$adivtab_t(-1, -4), new $quake_draw$adivtab_t(-1, -3), new $quake_draw$adivtab_t(-1, -2), new $quake_draw$adivtab_t(-1, -1), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-2, -5), new $quake_draw$adivtab_t(-2, -3), new $quake_draw$adivtab_t(-2, -1), new $quake_draw$adivtab_t(-3, -2), new $quake_draw$adivtab_t(-4, -1), new $quake_draw$adivtab_t(-7, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(7, 0), new $quake_draw$adivtab_t(3, 1), new $quake_draw$adivtab_t(2, 1), new $quake_draw$adivtab_t(1, 3), new $quake_draw$adivtab_t(1, 2), new $quake_draw$adivtab_t(1, 1), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 7), new $quake_draw$adivtab_t(0, 7), new $quake_draw$adivtab_t(0, 7), new $quake_draw$adivtab_t(0, 7), new $quake_draw$adivtab_t(0, 7), new $quake_draw$adivtab_t(0, 7), new $quake_draw$adivtab_t(0, 7), new $quake_draw$adivtab_t(0, 7), new $quake_draw$adivtab_t(0, 7), new $quake_draw$adivtab_t(-1, -7), new $quake_draw$adivtab_t(-1, -6), new $quake_draw$adivtab_t(-1, -5), new $quake_draw$adivtab_t(-1, -4), new $quake_draw$adivtab_t(-1, -3), new $quake_draw$adivtab_t(-1, -2), new $quake_draw$adivtab_t(-1, -1), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-2, -6), new $quake_draw$adivtab_t(-2, -4), new $quake_draw$adivtab_t(-2, -2), new $quake_draw$adivtab_t(-2, 0), new $quake_draw$adivtab_t(-3, -1), new $quake_draw$adivtab_t(-4, 0), new $quake_draw$adivtab_t(-8, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(8, 0), new $quake_draw$adivtab_t(4, 0), new $quake_draw$adivtab_t(2, 2), new $quake_draw$adivtab_t(2, 0), new $quake_draw$adivtab_t(1, 3), new $quake_draw$adivtab_t(1, 2), new $quake_draw$adivtab_t(1, 1), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 8), new $quake_draw$adivtab_t(0, 8), new $quake_draw$adivtab_t(0, 8), new $quake_draw$adivtab_t(0, 8), new $quake_draw$adivtab_t(0, 8), new $quake_draw$adivtab_t(0, 8), new $quake_draw$adivtab_t(0, 8), new $quake_draw$adivtab_t(0, 8), new $quake_draw$adivtab_t(-1, -6), new $quake_draw$adivtab_t(-1, -5), new $quake_draw$adivtab_t(-1, -4), new $quake_draw$adivtab_t(-1, -3), new $quake_draw$adivtab_t(-1, -2), new $quake_draw$adivtab_t(-1, -1), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-2, -7), new $quake_draw$adivtab_t(-2, -5), new $quake_draw$adivtab_t(-2, -3), new $quake_draw$adivtab_t(-2, -1), new $quake_draw$adivtab_t(-3, -3), new $quake_draw$adivtab_t(-3, 0), new $quake_draw$adivtab_t(-5, -1), new $quake_draw$adivtab_t(-9, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(9, 0), new $quake_draw$adivtab_t(4, 1), new $quake_draw$adivtab_t(3, 0), new $quake_draw$adivtab_t(2, 1), new $quake_draw$adivtab_t(1, 4), new $quake_draw$adivtab_t(1, 3), new $quake_draw$adivtab_t(1, 2), new $quake_draw$adivtab_t(1, 1), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 9), new $quake_draw$adivtab_t(0, 9), new $quake_draw$adivtab_t(0, 9), new $quake_draw$adivtab_t(0, 9), new $quake_draw$adivtab_t(0, 9), new $quake_draw$adivtab_t(0, 9), new $quake_draw$adivtab_t(0, 9), new $quake_draw$adivtab_t(-1, -5), new $quake_draw$adivtab_t(-1, -4), new $quake_draw$adivtab_t(-1, -3), new $quake_draw$adivtab_t(-1, -2), new $quake_draw$adivtab_t(-1, -1), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-2, -8), new $quake_draw$adivtab_t(-2, -6), new $quake_draw$adivtab_t(-2, -4), new $quake_draw$adivtab_t(-2, -2), new $quake_draw$adivtab_t(-2, 0), new $quake_draw$adivtab_t(-3, -2), new $quake_draw$adivtab_t(-4, -2), new $quake_draw$adivtab_t(-5, 0), new $quake_draw$adivtab_t(-10, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(10, 0), new $quake_draw$adivtab_t(5, 0), new $quake_draw$adivtab_t(3, 1), new $quake_draw$adivtab_t(2, 2), new $quake_draw$adivtab_t(2, 0), new $quake_draw$adivtab_t(1, 4), new $quake_draw$adivtab_t(1, 3), new $quake_draw$adivtab_t(1, 2), new $quake_draw$adivtab_t(1, 1), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 10), new $quake_draw$adivtab_t(0, 10), new $quake_draw$adivtab_t(0, 10), new $quake_draw$adivtab_t(0, 10), new $quake_draw$adivtab_t(0, 10), new $quake_draw$adivtab_t(0, 10), new $quake_draw$adivtab_t(-1, -4), new $quake_draw$adivtab_t(-1, -3), new $quake_draw$adivtab_t(-1, -2), new $quake_draw$adivtab_t(-1, -1), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-2, -9), new $quake_draw$adivtab_t(-2, -7), new $quake_draw$adivtab_t(-2, -5), new $quake_draw$adivtab_t(-2, -3), new $quake_draw$adivtab_t(-2, -1), new $quake_draw$adivtab_t(-3, -4), new $quake_draw$adivtab_t(-3, -1), new $quake_draw$adivtab_t(-4, -1), new $quake_draw$adivtab_t(-6, -1), new $quake_draw$adivtab_t(-11, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(11, 0), new $quake_draw$adivtab_t(5, 1), new $quake_draw$adivtab_t(3, 2), new $quake_draw$adivtab_t(2, 3), new $quake_draw$adivtab_t(2, 1), new $quake_draw$adivtab_t(1, 5), new $quake_draw$adivtab_t(1, 4), new $quake_draw$adivtab_t(1, 3), new $quake_draw$adivtab_t(1, 2), new $quake_draw$adivtab_t(1, 1), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 11), new $quake_draw$adivtab_t(0, 11), new $quake_draw$adivtab_t(0, 11), new $quake_draw$adivtab_t(0, 11), new $quake_draw$adivtab_t(0, 11), new $quake_draw$adivtab_t(-1, -3), new $quake_draw$adivtab_t(-1, -2), new $quake_draw$adivtab_t(-1, -1), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-2, -10), new $quake_draw$adivtab_t(-2, -8), new $quake_draw$adivtab_t(-2, -6), new $quake_draw$adivtab_t(-2, -4), new $quake_draw$adivtab_t(-2, -2), new $quake_draw$adivtab_t(-2, 0), new $quake_draw$adivtab_t(-3, -3), new $quake_draw$adivtab_t(-3, 0), new $quake_draw$adivtab_t(-4, 0), new $quake_draw$adivtab_t(-6, 0), new $quake_draw$adivtab_t(-12, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(12, 0), new $quake_draw$adivtab_t(6, 0), new $quake_draw$adivtab_t(4, 0), new $quake_draw$adivtab_t(3, 0), new $quake_draw$adivtab_t(2, 2), new $quake_draw$adivtab_t(2, 0), new $quake_draw$adivtab_t(1, 5), new $quake_draw$adivtab_t(1, 4), new $quake_draw$adivtab_t(1, 3), new $quake_draw$adivtab_t(1, 2), new $quake_draw$adivtab_t(1, 1), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 12), new $quake_draw$adivtab_t(0, 12), new $quake_draw$adivtab_t(0, 12), new $quake_draw$adivtab_t(0, 12), new $quake_draw$adivtab_t(-1, -2), new $quake_draw$adivtab_t(-1, -1), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-2, -11), new $quake_draw$adivtab_t(-2, -9), new $quake_draw$adivtab_t(-2, -7), new $quake_draw$adivtab_t(-2, -5), new $quake_draw$adivtab_t(-2, -3), new $quake_draw$adivtab_t(-2, -1), new $quake_draw$adivtab_t(-3, -5), new $quake_draw$adivtab_t(-3, -2), new $quake_draw$adivtab_t(-4, -3), new $quake_draw$adivtab_t(-5, -2), new $quake_draw$adivtab_t(-7, -1), new $quake_draw$adivtab_t(-13, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(13, 0), new $quake_draw$adivtab_t(6, 1), new $quake_draw$adivtab_t(4, 1), new $quake_draw$adivtab_t(3, 1), new $quake_draw$adivtab_t(2, 3), new $quake_draw$adivtab_t(2, 1), new $quake_draw$adivtab_t(1, 6), new $quake_draw$adivtab_t(1, 5), new $quake_draw$adivtab_t(1, 4), new $quake_draw$adivtab_t(1, 3), new $quake_draw$adivtab_t(1, 2), new $quake_draw$adivtab_t(1, 1), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 13), new $quake_draw$adivtab_t(0, 13), new $quake_draw$adivtab_t(0, 13), new $quake_draw$adivtab_t(-1, -1), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-2, -12), new $quake_draw$adivtab_t(-2, -10), new $quake_draw$adivtab_t(-2, -8), new $quake_draw$adivtab_t(-2, -6), new $quake_draw$adivtab_t(-2, -4), new $quake_draw$adivtab_t(-2, -2), new $quake_draw$adivtab_t(-2, 0), new $quake_draw$adivtab_t(-3, -4), new $quake_draw$adivtab_t(-3, -1), new $quake_draw$adivtab_t(-4, -2), new $quake_draw$adivtab_t(-5, -1), new $quake_draw$adivtab_t(-7, 0), new $quake_draw$adivtab_t(-14, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(14, 0), new $quake_draw$adivtab_t(7, 0), new $quake_draw$adivtab_t(4, 2), new $quake_draw$adivtab_t(3, 2), new $quake_draw$adivtab_t(2, 4), new $quake_draw$adivtab_t(2, 2), new $quake_draw$adivtab_t(2, 0), new $quake_draw$adivtab_t(1, 6), new $quake_draw$adivtab_t(1, 5), new $quake_draw$adivtab_t(1, 4), new $quake_draw$adivtab_t(1, 3), new $quake_draw$adivtab_t(1, 2), new $quake_draw$adivtab_t(1, 1), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 14), new $quake_draw$adivtab_t(0, 14), new $quake_draw$adivtab_t(-1, 0), new $quake_draw$adivtab_t(-2, -13), new $quake_draw$adivtab_t(-2, -11), new $quake_draw$adivtab_t(-2, -9), new $quake_draw$adivtab_t(-2, -7), new $quake_draw$adivtab_t(-2, -5), new $quake_draw$adivtab_t(-2, -3), new $quake_draw$adivtab_t(-2, -1), new $quake_draw$adivtab_t(-3, -6), new $quake_draw$adivtab_t(-3, -3), new $quake_draw$adivtab_t(-3, 0), new $quake_draw$adivtab_t(-4, -1), new $quake_draw$adivtab_t(-5, 0), new $quake_draw$adivtab_t(-8, -1), new $quake_draw$adivtab_t(-15, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(15, 0), new $quake_draw$adivtab_t(7, 1), new $quake_draw$adivtab_t(5, 0), new $quake_draw$adivtab_t(3, 3), new $quake_draw$adivtab_t(3, 0), new $quake_draw$adivtab_t(2, 3), new $quake_draw$adivtab_t(2, 1), new $quake_draw$adivtab_t(1, 7), new $quake_draw$adivtab_t(1, 6), new $quake_draw$adivtab_t(1, 5), new $quake_draw$adivtab_t(1, 4), new $quake_draw$adivtab_t(1, 3), new $quake_draw$adivtab_t(1, 2), new $quake_draw$adivtab_t(1, 1), new $quake_draw$adivtab_t(1, 0), new $quake_draw$adivtab_t(0, 15), new $quake_draw$adivtab_t(-2, -14), new $quake_draw$adivtab_t(-2, -12), new $quake_draw$adivtab_t(-2, -10), new $quake_draw$adivtab_t(-2, -8), new $quake_draw$adivtab_t(-2, -6), new $quake_draw$adivtab_t(-2, -4), new $quake_draw$adivtab_t(-2, -2), new $quake_draw$adivtab_t(-2, 0), new $quake_draw$adivtab_t(-3, -5), new $quake_draw$adivtab_t(-3, -2), new $quake_draw$adivtab_t(-4, -4), new $quake_draw$adivtab_t(-4, 0), new $quake_draw$adivtab_t(-6, -2), new $quake_draw$adivtab_t(-8, 0), new $quake_draw$adivtab_t(-16, 0), new $quake_draw$adivtab_t(0, 0), new $quake_draw$adivtab_t(16, 0), new $quake_draw$adivtab_t(8, 0), new $quake_draw$adivtab_t(5, 1), new $quake_draw$adivtab_t(4, 0), new $quake_draw$adivtab_t(3, 1), new $quake_draw$adivtab_t(2, 4), new $quake_draw$adivtab_t(2, 2), new $quake_draw$adivtab_t(2, 0), new $quake_draw$adivtab_t(1, 7), new $quake_draw$adivtab_t(1, 6), new $quake_draw$adivtab_t(1, 5), new $quake_draw$adivtab_t(1, 4), new $quake_draw$adivtab_t(1, 3), new $quake_draw$adivtab_t(1, 2), new $quake_draw$adivtab_t(1, 1), new $quake_draw$adivtab_t(1, 0)];
	$quake_draw.$skintable = new Array($quake_draw.maX_LBM_HEIGHT);
	$quake_draw.$skinwidth = 0;
	$quake_draw.$skinstart = null;
	$quake_draw.$spans = null;
	$quake_draw.$r_turb_pbase = 0;
	$quake_draw.$r_turb_pdest = 0;
	$quake_draw.$r_turb_s = 0;
	$quake_draw.$r_turb_t = 0;
	$quake_draw.$r_turb_sstep = 0;
	$quake_draw.$r_turb_tstep = 0;
	$quake_draw.$r_turb_turb = 0;
	$quake_draw.$r_turb_spancount = 0;
	$quake_draw.skY_SPAN_SHIFT = 5;
	$quake_draw.skY_SPAN_MAX = 32;
	$quake_draw.$sprite_height = 0;
	$quake_draw.$minindex = 0;
	$quake_draw.$maxindex = 0;
	$quake_draw.$sprite_spans = null;
	$quake_draw.$surfscale = 0;
	$quake_draw.$r_cache_thrash = false;
	$quake_draw.$sc_size = 0;
	$quake_draw.GUARDSIZE = 4;
	$quake_draw.$d_sdivzstepu = 0;
	$quake_draw.$d_tdivzstepu = 0;
	$quake_draw.$d_zistepu = 0;
	$quake_draw.$d_sdivzstepv = 0;
	$quake_draw.$d_tdivzstepv = 0;
	$quake_draw.$d_zistepv = 0;
	$quake_draw.$d_sdivzorigin = 0;
	$quake_draw.$d_tdivzorigin = 0;
	$quake_draw.$d_ziorigin = 0;
	$quake_draw.$sadjust = 0;
	$quake_draw.$tadjust = 0;
	$quake_draw.$bbextents = 0;
	$quake_draw.$bbextentt = 0;
	$quake_draw.$cacheblock = null;
	$quake_draw.$cacheofs = 0;
	$quake_draw.$cachewidth = 0;
	$quake_draw.d_viewbuffer = null;
	$quake_draw.d_pzbuffer = null;
	$quake_draw.$d_zrowbytes = 0;
	$quake_draw.$d_zwidth = 0;
	for (var kk = 0; kk < $quake_draw.maX_CACHED_PICS; kk++) {
		$quake_draw.$menu_cachepics[kk] = new $quake_draw$cachepic_t();
	}
	$quake_draw.$d_polyse_init();
	$quake_model.$colors = [16, 224, 240, 16, 176, 128, 16, 48];
	$quake_model.$icolor = 0;
	$quake_model.sidE_FRONT = 0;
	$quake_model.sidE_BACK = 1;
	$quake_model.sidE_ON = 2;
	$quake_model.sizeof_texture_t = 60;
	$quake_model.surF_PLANEBACK = 2;
	$quake_model.surF_DRAWSKY = 4;
	$quake_model.surF_DRAWSPRITE = 8;
	$quake_model.surF_DRAWTURB = 16;
	$quake_model.surF_DRAWTILED = 32;
	$quake_model.surF_DRAWBACKGROUND = 64;
	$quake_model.eF_ROCKET = 1;
	$quake_model.eF_GRENADE = 2;
	$quake_model.eF_GIB = 4;
	$quake_model.eF_ROTATE = 8;
	$quake_model.eF_TRACER = 16;
	$quake_model.eF_ZOMGIB = 32;
	$quake_model.eF_TRACER2 = 64;
	$quake_model.eF_TRACER3 = 128;
	$quake_model.$loadmodel = null;
	$quake_model.$loadname = null;
	$quake_model.$mod_novis = new Uint8Array(1024);
	$quake_model.maX_MOD_KNOWN = 256;
	$quake_model.$mod_known = new Array($quake_model.maX_MOD_KNOWN);
	$quake_model.$mod_numknown = 0;
	$quake_model.nL_PRESENT = 0;
	$quake_model.nL_NEEDS_LOADED = 1;
	$quake_model.nL_UNREFERENCED = 2;
	$quake_model.$decompressed = new Uint8Array(1024);
	$quake_model.$mod_base = null;
	$quake_model.$aniM_CYCLE = 2;
	$quake_model.aliaS_VERSION = 6;
	$quake_model.aliaS_ONSEAM = 32;
	$quake_model.sizeof_mdl_t = 84;
	$quake_model.sizeof_stvert_t = 12;
	$quake_model.sizeof_dtriangle_t = 16;
	$quake_model.dT_FACES_FRONT = 16;
	$quake_model.sizeof_trivertx_t = 4;
	$quake_model.sizeof_daliasframe_t = 24;
	$quake_model.sizeof_daliasgroup_t = 12;
	$quake_model.sizeof_daliasskingroup_t = 4;
	$quake_model.sizeof_daliasframetype_t = 4;
	$quake_model.sizeof_daliasskintype_t = 4;
	$quake_model.IDPOLYHEADER = 1330660425;
	$quake_model.spritE_VERSION = 1;
	$quake_model.sizeof_dsprite_t = 36;
	$quake_model.spR_VP_PARALLEL_UPRIGHT = 0;
	$quake_model.spR_FACING_UPRIGHT = 1;
	$quake_model.spR_VP_PARALLEL = 2;
	$quake_model.spR_ORIENTED = 3;
	$quake_model.spR_VP_PARALLEL_ORIENTED = 4;
	$quake_model.sizeof_dspriteframe_t = 16;
	$quake_model.sizeof_dspritegroup_t = 4;
	$quake_model.sizeof_dspriteframetype_t = 4;
	$quake_model.IDSPRITEHEADER = 1347634249;
	for (var kk = 0; kk < $quake_model.maX_MOD_KNOWN; kk++) {
		$quake_model.$mod_known[kk] = new $quake_model$model_t();
	}
	$quake_sys_linux.$nostdout = 0;
	$quake_sys_linux.$basedir = '.';
	$quake_sys_linux.$sys_linerefresh = new $quake_cvar_t('sys_linerefresh', '0');
	$quake_sys_linux.$printbuffer = '';
	$quake_sys_linux.$maX_HANDLES = 10;
	$quake_sys_linux.sys_handles = new Array($quake_sys_linux.$maX_HANDLES);
	$quake_mathlib.m_PI = 3.14159265358979;
	$quake_mathlib.vec3_origin = [0, 0, 0];
	$quake_prog.sizeof_globalvars_t = 368;
	$quake_prog.sizeof_entvars_t = 420;
	$quake_prog.progheadeR_CRC = 5927;
	$quake_prog.maX_ENT_LEAFS = 16;
	$quake_prog.sizeof_edict_t = 516;
	$quake_prog.$out = $System_StringExtensions.stringOfLength(256);
	$quake_prog.$pr_builtin = [$quake_prog.$pF_Fixme, $quake_prog.$pF_makevectors, $quake_prog.$pF_setorigin, $quake_prog.$pF_setmodel, $quake_prog.$pF_setsize, $quake_prog.$pF_Fixme, $quake_prog.$pF_break, $quake_prog.$pF_random, $quake_prog.$pF_sound, $quake_prog.$pF_normalize, $quake_prog.$pF_error, $quake_prog.$pF_objerror, $quake_prog.$pF_vlen, $quake_prog.$pF_vectoyaw, $quake_prog.$pF_Spawn, $quake_prog.$pF_Remove, $quake_prog.$pF_traceline, $quake_prog.$pF_checkclient, $quake_prog.$pF_Find, $quake_prog.$pF_precache_sound, $quake_prog.$pF_precache_model, $quake_prog.$pF_stuffcmd, $quake_prog.$pF_findradius, $quake_prog.$pF_bprint, $quake_prog.$pF_sprint, $quake_prog.$pF_dprint, $quake_prog.$pF_ftos, $quake_prog.$pF_vtos, $quake_prog.$pF_coredump, $quake_prog.$pF_traceon, $quake_prog.$pF_traceoff, $quake_prog.$pF_eprint, $quake_prog.$pF_walkmove, $quake_prog.$pF_Fixme, $quake_prog.$pF_droptofloor, $quake_prog.$pF_lightstyle, $quake_prog.$pF_rint, $quake_prog.$pF_floor, $quake_prog.$pF_ceil, $quake_prog.$pF_Fixme, $quake_prog.$pF_checkbottom, $quake_prog.$pF_pointcontents, $quake_prog.$pF_Fixme, $quake_prog.$pF_fabs, $quake_prog.$pF_aim, $quake_prog.$pF_cvar, $quake_prog.$pF_localcmd, $quake_prog.$pF_nextent, $quake_prog.$pF_particle, $quake_prog.$pF_changeyaw, $quake_prog.$pF_Fixme, $quake_prog.$pF_vectoangles, $quake_prog.$pF_WriteByte, $quake_prog.$pF_WriteChar, $quake_prog.$pF_WriteShort, $quake_prog.$pF_WriteLong, $quake_prog.$pF_WriteCoord, $quake_prog.$pF_WriteAngle, $quake_prog.$pF_WriteString, $quake_prog.$pF_WriteEntity, $quake_prog.$pF_Fixme, $quake_prog.$pF_Fixme, $quake_prog.$pF_Fixme, $quake_prog.$pF_Fixme, $quake_prog.$pF_Fixme, $quake_prog.$pF_Fixme, $quake_prog.$pF_Fixme, null, $quake_prog.$pF_precache_file, $quake_prog.$pF_makestatic, $quake_prog.$pF_changelevel, $quake_prog.$pF_Fixme, $quake_prog.$pF_cvar_set, $quake_prog.$pF_centerprint, $quake_prog.$pF_ambientsound, $quake_prog.$pF_precache_model, $quake_prog.$pF_precache_sound, $quake_prog.$pF_precache_file, $quake_prog.$pF_setspawnparms];
	$quake_prog.$pr_builtins = $quake_prog.$pr_builtin;
	$quake_prog.$pr_numbuiltins = $quake_prog.$pr_builtin.length;
	$quake_prog.ofS_NULL = 0;
	$quake_prog.ofS_RETURN = 1;
	$quake_prog.ofS_PARM0 = 4;
	$quake_prog.ofS_PARM1 = 7;
	$quake_prog.ofS_PARM2 = 10;
	$quake_prog.ofS_PARM3 = 13;
	$quake_prog.ofS_PARM4 = 16;
	$quake_prog.ofS_PARM5 = 19;
	$quake_prog.ofS_PARM6 = 22;
	$quake_prog.ofS_PARM7 = 25;
	$quake_prog.reserveD_OFS = 28;
	$quake_prog.sizeof_dstatement_t = 8;
	$quake_prog.sizeof_ddef_t = 8;
	$quake_prog.deF_SAVEGLOBAL = 32768;
	$quake_prog.maX_PARMS = 8;
	$quake_prog.sizeof_dfunction_t = 36;
	$quake_prog.proG_VERSION = 6;
	$quake_prog.$progs = null;
	$quake_prog.pr_functions = null;
	$quake_prog.$pr_strings = null;
	$quake_prog.$pr_fielddefs = null;
	$quake_prog.$pr_globaldefs = null;
	$quake_prog.$pr_statements = null;
	$quake_prog.pr_global_struct = null;
	$quake_prog.pr_edict_size = 0;
	$quake_prog.pr_crc = 0;
	$quake_prog.$nomonsters = new $quake_cvar_t('nomonsters', '0');
	$quake_prog.$gamecfg = new $quake_cvar_t('gamecfg', '0');
	$quake_prog.$scratch1 = new $quake_cvar_t('scratch1', '0');
	$quake_prog.$scratch2 = new $quake_cvar_t('scratch2', '0');
	$quake_prog.$scratch3 = new $quake_cvar_t('scratch3', '0');
	$quake_prog.$scratch4 = new $quake_cvar_t('scratch4', '0');
	$quake_prog.$savedgamecfg = new $quake_cvar_t.$ctor1('savedgamecfg', '0', true);
	$quake_prog.$saved1 = new $quake_cvar_t.$ctor1('saved1', '0', true);
	$quake_prog.$saved2 = new $quake_cvar_t.$ctor1('saved2', '0', true);
	$quake_prog.$saved3 = new $quake_cvar_t.$ctor1('saved3', '0', true);
	$quake_prog.$saved4 = new $quake_cvar_t.$ctor1('saved4', '0', true);
	$quake_prog.$stringDictionary = new (Type.makeGenericType(ss.Dictionary$2, [String, ss.Int32]))();
	$quake_prog.$stringPool = new Array(1000);
	$quake_prog.$strings = 0;
	$quake_prog.$line = $System_StringExtensions.stringOfLength(256);
	$quake_prog.maX_STACK_DEPTH = 32;
	$quake_prog.$pr_stack = new Array($quake_prog.maX_STACK_DEPTH);
	$quake_prog.$pr_depth = 0;
	$quake_prog.localstacK_SIZE = 2048;
	$quake_prog.$localstack = new Array($quake_prog.localstacK_SIZE);
	$quake_prog.$localstack_used = 0;
	$quake_prog.$pr_trace = false;
	$quake_prog.$pr_xfunction = null;
	$quake_prog.$pr_xstatement = 0;
	$quake_prog.$pr_argc = 0;
	$quake_prog.$pr_opnames = ['DONE', 'MUL_F', 'MUL_V', 'MUL_FV', 'MUL_VF', 'DIV', 'ADD_F', 'ADD_V', 'SUB_F', 'SUB_V', 'EQ_F', 'EQ_V', 'EQ_S', 'EQ_E', 'EQ_FNC', 'NE_F', 'NE_V', 'NE_S', 'NE_E', 'NE_FNC', 'LE', 'GE', 'LT', 'GT', 'INDIRECT', 'INDIRECT', 'INDIRECT', 'INDIRECT', 'INDIRECT', 'INDIRECT', 'ADDRESS', 'STORE_F', 'STORE_V', 'STORE_S', 'STORE_ENT', 'STORE_FLD', 'STORE_FNC', 'STOREP_F', 'STOREP_V', 'STOREP_S', 'STOREP_ENT', 'STOREP_FLD', 'STOREP_FNC', 'RETURN', 'NOT_F', 'NOT_V', 'NOT_S', 'NOT_ENT', 'NOT_FNC', 'IF', 'IFNOT', 'CALL0', 'CALL1', 'CALL2', 'CALL3', 'CALL4', 'CALL5', 'CALL6', 'CALL7', 'CALL8', 'STATE', 'GOTO', 'AND', 'OR', 'BITAND', 'BITOR'];
	$quake_server.nuM_PING_TIMES = 16;
	$quake_server.nuM_SPAWN_PARMS = 16;
	$quake_server.movetypE_NONE = 0;
	$quake_server.movetypE_ANGLENOCLIP = 1;
	$quake_server.movetypE_ANGLECLIP = 2;
	$quake_server.movetypE_WALK = 3;
	$quake_server.movetypE_STEP = 4;
	$quake_server.movetypE_FLY = 5;
	$quake_server.movetypE_TOSS = 6;
	$quake_server.movetypE_PUSH = 7;
	$quake_server.movetypE_NOCLIP = 8;
	$quake_server.movetypE_FLYMISSILE = 9;
	$quake_server.movetypE_BOUNCE = 10;
	$quake_server.soliD_NOT = 0;
	$quake_server.soliD_TRIGGER = 1;
	$quake_server.soliD_BBOX = 2;
	$quake_server.soliD_SLIDEBOX = 3;
	$quake_server.soliD_BSP = 4;
	$quake_server.fL_FLY = 1;
	$quake_server.fL_SWIM = 2;
	$quake_server.fL_CONVEYOR = 4;
	$quake_server.fL_CLIENT = 8;
	$quake_server.fL_INWATER = 16;
	$quake_server.fL_MONSTER = 32;
	$quake_server.fL_GODMODE = 64;
	$quake_server.fL_NOTARGET = 128;
	$quake_server.fL_ITEM = 256;
	$quake_server.fL_ONGROUND = 512;
	$quake_server.fL_PARTIALGROUND = 1024;
	$quake_server.fL_WATERJUMP = 2048;
	$quake_server.fL_JUMPRELEASED = 4096;
	$quake_server.eF_BRIGHTFIELD = 1;
	$quake_server.eF_MUZZLEFLASH = 2;
	$quake_server.eF_BRIGHTLIGHT = 4;
	$quake_server.eF_DIMLIGHT = 8;
	$quake_server.spawnflaG_NOT_EASY = 256;
	$quake_server.spawnflaG_NOT_MEDIUM = 512;
	$quake_server.spawnflaG_NOT_HARD = 1024;
	$quake_server.spawnflaG_NOT_DEATHMATCH = 2048;
	$quake_server.sv = new $quake_server$server_t();
	$quake_server.svs = new $quake_server$server_static_t();
	$quake_server.$localmodels = new Array($quake_quakedef.maX_MODELS);
	$quake_server.$sv_friction = new $quake_cvar_t.$ctor2('sv_friction', '4', false, true);
	$quake_server.$sv_stopspeed = new $quake_cvar_t('sv_stopspeed', '100');
	$quake_server.sv_gravity = new $quake_cvar_t.$ctor2('sv_gravity', '800', false, true);
	$quake_server.$sv_maxvelocity = new $quake_cvar_t('sv_maxvelocity', '2000');
	$quake_server.$sv_nostep = new $quake_cvar_t('sv_nostep', '0');
	$quake_server.movE_EPSILON = 0.01;
	$quake_server.sv_player = null;
	$quake_server.$sv_edgefriction = new $quake_cvar_t('edgefriction', '2');
	$quake_server.$forward = new Array(3);
	$quake_server.$right = new Array(3);
	$quake_server.$up = new Array(3);
	$quake_server.$wishdir = new Array(3);
	$quake_server.$wishspeed = 0;
	$quake_server.$angles = null;
	$quake_server.$origin = null;
	$quake_server.$velocity = null;
	$quake_server.$onground = false;
	$quake_server.$cmd = new $quake_client$usercmd_t();
	$quake_server.$sv_idealpitchscale = new $quake_cvar_t('sv_idealpitchscale', '0.8');
	$quake_server.$maX_FORWARD = 6;
	$quake_server.$sv_maxspeed = new $quake_cvar_t.$ctor2('sv_maxspeed', '320', false, true);
	$quake_server.$sv_accelerate = new $quake_cvar_t('sv_accelerate', '10');
	$quake_host.host_initialized = false;
	$quake_host.host_frametime = 0;
	$quake_host.host_time = 0;
	$quake_host.realtime = 0;
	$quake_host.$oldrealtime = 0;
	$quake_host.host_framecount = 0;
	$quake_host.$minimum_memory = 0;
	$quake_host.host_client = null;
	$quake_host.host_basepal = null;
	$quake_host.host_colormap = null;
	$quake_host.$host_framerate = new $quake_cvar_t('host_framerate', '0');
	$quake_host.$host_speeds = new $quake_cvar_t('host_speeds', '0');
	$quake_host.$sys_ticrate = new $quake_cvar_t('sys_ticrate', '0.05');
	$quake_host.$serverprofile = new $quake_cvar_t('serverprofile', '0');
	$quake_host.$fraglimit = new $quake_cvar_t.$ctor2('fraglimit', '0', false, true);
	$quake_host.$timelimit = new $quake_cvar_t.$ctor2('timelimit', '0', false, true);
	$quake_host.$teamplay = new $quake_cvar_t.$ctor2('teamplay', '0', false, true);
	$quake_host.$samelevel = new $quake_cvar_t('samelevel', '0');
	$quake_host.$noexit = new $quake_cvar_t.$ctor2('noexit', '0', false, true);
	$quake_host.developer = new $quake_cvar_t('developer', '1');
	$quake_host.skill = new $quake_cvar_t('skill', '1');
	$quake_host.deathmatch = new $quake_cvar_t('deathmatch', '0');
	$quake_host.coop = new $quake_cvar_t('coop', '0');
	$quake_host.$pausable = new $quake_cvar_t('pausable', '1');
	$quake_host.$temp1 = new $quake_cvar_t('temp1', '0');
	$quake_host.$inerror = false;
	$quake_host.$time1 = 0;
	$quake_host.$time2 = 0;
	$quake_host.$time3 = 0;
	$quake_host.$timetotal = 0;
	$quake_host.$timecount = 0;
	$quake_host.$vcR_SIGNATURE = 1447252529;
	$quake_host.$isdown = false;
	$quake_host.current_skill = 0;
	$quake_host.noclip_anglehack = false;
	$quake_host.$savegamE_VERSION = 5;
	$quake_client.cshifT_CONTENTS = 0;
	$quake_client.cshifT_DAMAGE = 1;
	$quake_client.cshifT_BONUS = 2;
	$quake_client.cshifT_POWERUP = 3;
	$quake_client.nuM_CSHIFTS = 4;
	$quake_client.$namE_LENGTH = 64;
	$quake_client.SIGNONS = 4;
	$quake_client.maX_DLIGHTS = 32;
	$quake_client.$maX_BEAMS = 24;
	$quake_client.$maX_EFRAGS = 640;
	$quake_client.$maX_MAPSTRING = 2048;
	$quake_client.maX_DEMOS = 8;
	$quake_client.$maX_DEMONAME = 16;
	$quake_client.$maX_TEMP_ENTITIES = 64;
	$quake_client.$maX_STATIC_ENTITIES = 128;
	$quake_client.maX_VISEDICTS = 256;
	$quake_client.$in_mlook = new $quake_$client$kbutton_t();
	$quake_client.$in_klook = new $quake_$client$kbutton_t();
	$quake_client.$in_left = new $quake_$client$kbutton_t();
	$quake_client.$in_right = new $quake_$client$kbutton_t();
	$quake_client.$in_forward = new $quake_$client$kbutton_t();
	$quake_client.$in_back = new $quake_$client$kbutton_t();
	$quake_client.$in_lookup = new $quake_$client$kbutton_t();
	$quake_client.$in_lookdown = new $quake_$client$kbutton_t();
	$quake_client.$in_moveleft = new $quake_$client$kbutton_t();
	$quake_client.$in_moveright = new $quake_$client$kbutton_t();
	$quake_client.$in_strafe = new $quake_$client$kbutton_t();
	$quake_client.$in_speed = new $quake_$client$kbutton_t();
	$quake_client.$in_use = new $quake_$client$kbutton_t();
	$quake_client.$in_jump = new $quake_$client$kbutton_t();
	$quake_client.$in_attack = new $quake_$client$kbutton_t();
	$quake_client.$in_up = new $quake_$client$kbutton_t();
	$quake_client.$in_down = new $quake_$client$kbutton_t();
	$quake_client.$in_impulse = 0;
	$quake_client.$cl_upspeed = new $quake_cvar_t('cl_upspeed', '200');
	$quake_client.$cl_forwardspeed = new $quake_cvar_t.$ctor1('cl_forwardspeed', '200', true);
	$quake_client.$cl_backspeed = new $quake_cvar_t.$ctor1('cl_backspeed', '200', true);
	$quake_client.$cl_sidespeed = new $quake_cvar_t('cl_sidespeed', '350');
	$quake_client.$cl_movespeedkey = new $quake_cvar_t('cl_movespeedkey', '2.0');
	$quake_client.$cl_yawspeed = new $quake_cvar_t('cl_yawspeed', '140');
	$quake_client.$cl_pitchspeed = new $quake_cvar_t('cl_pitchspeed', '150');
	$quake_client.$cl_anglespeedkey = new $quake_cvar_t('cl_anglespeedkey', '1.5');
	$quake_client.cl_name = new $quake_cvar_t.$ctor1('_cl_name', 'player', true);
	$quake_client.cl_color = new $quake_cvar_t.$ctor1('_cl_color', '0', true);
	$quake_client.$cl_shownet = new $quake_cvar_t('cl_shownet', '0');
	$quake_client.$cl_nolerp = new $quake_cvar_t('cl_nolerp', '0');
	$quake_client.$lookspring = new $quake_cvar_t.$ctor1('lookspring', '0', true);
	$quake_client.$lookstrafe = new $quake_cvar_t.$ctor1('lookstrafe', '0', true);
	$quake_client.$sensitivity = new $quake_cvar_t.$ctor1('sensitivity', '3', true);
	$quake_client.$m_pitch = new $quake_cvar_t.$ctor1('m_pitch', '0.022', true);
	$quake_client.$m_yaw = new $quake_cvar_t.$ctor1('m_yaw', '0.022', true);
	$quake_client.$m_forward = new $quake_cvar_t.$ctor1('m_forward', '1', true);
	$quake_client.$m_side = new $quake_cvar_t.$ctor1('m_side', '0.8', true);
	$quake_client.cls = new $quake_client$client_static_t();
	$quake_client.cl = new $quake_client$client_state_t();
	$quake_client.$cl_efrags = new Array($quake_client.$maX_EFRAGS);
	$quake_client.cl_entities = new Array($quake_quakedef.maX_EDICTS);
	$quake_client.$cl_static_entities = new Array($quake_client.$maX_STATIC_ENTITIES);
	$quake_client.cl_lightstyle = new Array($quake_quakedef.maX_LIGHTSTYLES);
	$quake_client.cl_dlights = new Array($quake_client.maX_DLIGHTS);
	$quake_client.cl_numvisedicts = 0;
	$quake_client.cl_visedicts = new Array($quake_client.maX_VISEDICTS);
	$quake_client.$lastmsg = 0;
	$quake_client.$num_temp_entities = 0;
	$quake_client.$cl_temp_entities = new Array($quake_client.$maX_TEMP_ENTITIES);
	$quake_client.$cl_beams = new Array($quake_client.$maX_BEAMS);
	$quake_client.$cl_sfx_wizhit = null;
	$quake_client.$cl_sfx_knighthit = null;
	$quake_client.$cl_sfx_tink1 = null;
	$quake_client.$cl_sfx_ric1 = null;
	$quake_client.$cl_sfx_ric2 = null;
	$quake_client.$cl_sfx_ric3 = null;
	$quake_client.$cl_sfx_r_exp3 = null;
	var kk;
	for (kk = 0; kk < $quake_client.$maX_EFRAGS; kk++) {
		$quake_client.$cl_efrags[kk] = new $quake_render$efrag_t();
	}
	for (kk = 0; kk < $quake_quakedef.maX_EDICTS; kk++) {
		$quake_client.cl_entities[kk] = new $quake_render$entity_t();
	}
	for (kk = 0; kk < $quake_client.$maX_STATIC_ENTITIES; kk++) {
		$quake_client.$cl_static_entities[kk] = new $quake_render$entity_t();
	}
	for (kk = 0; kk < $quake_client.$maX_TEMP_ENTITIES; kk++) {
		$quake_client.$cl_temp_entities[kk] = new $quake_render$entity_t();
	}
	for (kk = 0; kk < $quake_quakedef.maX_LIGHTSTYLES; kk++) {
		$quake_client.cl_lightstyle[kk] = new $quake_client$lightstyle_t();
	}
	for (kk = 0; kk < $quake_client.maX_DLIGHTS; kk++) {
		$quake_client.cl_dlights[kk] = new $quake_client$dlight_t();
	}
	for (kk = 0; kk < $quake_client.$maX_BEAMS; kk++) {
		$quake_client.$cl_beams[kk] = new $quake_client$beam_t();
	}
	$quake_net.neT_NAMELEN = 64;
	$quake_net.neT_MAXMESSAGE = 8192;
	$quake_net.maX_NET_DRIVERS = 8;
	$quake_net.HOSTCACHESIZE = 8;
	$quake_net.$localconnectpending = false;
	$quake_net.$loop_client = null;
	$quake_net.$loop_server = null;
	$quake_net.$net_activeSockets = null;
	$quake_net.$net_freeSockets = null;
	$quake_net.$net_numsockets = 0;
	$quake_net.$listening = false;
	$quake_net.net_message = new $quake_common$sizebuf_t();
	$quake_net.net_activeconnections = 0;
	$quake_net.$messagesSent = 0;
	$quake_net.$messagesReceived = 0;
	$quake_net.$unreliableMessagesSent = 0;
	$quake_net.$unreliableMessagesReceived = 0;
	$quake_net.$net_messagetimeout = new $quake_cvar_t('net_messagetimeout', '300');
	$quake_net.hostname = new $quake_cvar_t('hostname', 'UNNAMED');
	$quake_net.$config_com_port = new $quake_cvar_t.$ctor1('_config_com_port', '0x3f8', true);
	$quake_net.$config_com_irq = new $quake_cvar_t.$ctor1('_config_com_irq', '4', true);
	$quake_net.$config_com_baud = new $quake_cvar_t.$ctor1('_config_com_baud', '57600', true);
	$quake_net.$config_com_modem = new $quake_cvar_t.$ctor1('_config_com_modem', '1', true);
	$quake_net.$config_modem_dialtype = new $quake_cvar_t.$ctor1('_config_modem_dialtype', 'T', true);
	$quake_net.$config_modem_clear = new $quake_cvar_t.$ctor1('_config_modem_clear', 'ATZ', true);
	$quake_net.$config_modem_init = new $quake_cvar_t.$ctor1('_config_modem_init', '', true);
	$quake_net.$config_modem_hangup = new $quake_cvar_t.$ctor1('_config_modem_hangup', 'AT H', true);
	$quake_net.$net_driverlevel = 0;
	$quake_net.$net_time = 0;
	$quake_net.$hostCacheCount = 0;
	$quake_net.$hostcache = new Array($quake_net.HOSTCACHESIZE);
	$quake_net.$net_drivers = [new $quake_net$net_driver_t('Loopback', false, $quake_net.$loop_Init, $quake_net.$loop_Listen, $quake_net.$loop_SearchForHosts, $quake_net.$loop_Connect, $quake_net.$loop_CheckNewConnections, $quake_net.$loop_GetMessage, $quake_net.$loop_SendMessage, $quake_net.$loop_SendUnreliableMessage, $quake_net.$loop_CanSendMessage, $quake_net.$loop_CanSendUnreliableMessage, $quake_net.$loop_Close, $quake_net.$loop_Shutdown)];
	$quake_net.$net_numdrivers = 1;
	$quake_net.protocoL_VERSION = 15;
	$quake_net.u_MOREBITS = 1;
	$quake_net.u_ORIGIN1 = 2;
	$quake_net.u_ORIGIN2 = 4;
	$quake_net.u_ORIGIN3 = 8;
	$quake_net.u_ANGLE2 = 16;
	$quake_net.u_NOLERP = 32;
	$quake_net.u_FRAME = 64;
	$quake_net.u_SIGNAL = 128;
	$quake_net.u_ANGLE1 = 256;
	$quake_net.u_ANGLE3 = 512;
	$quake_net.u_MODEL = 1024;
	$quake_net.u_COLORMAP = 2048;
	$quake_net.u_SKIN = 4096;
	$quake_net.u_EFFECTS = 8192;
	$quake_net.u_LONGENTITY = 16384;
	$quake_net.sU_VIEWHEIGHT = 1;
	$quake_net.sU_IDEALPITCH = 2;
	$quake_net.sU_PUNCH1 = 4;
	$quake_net.sU_PUNCH2 = 8;
	$quake_net.sU_PUNCH3 = 16;
	$quake_net.sU_VELOCITY1 = 32;
	$quake_net.sU_VELOCITY2 = 64;
	$quake_net.sU_VELOCITY3 = 128;
	$quake_net.sU_ITEMS = 512;
	$quake_net.sU_ONGROUND = 1024;
	$quake_net.sU_INWATER = 2048;
	$quake_net.sU_WEAPONFRAME = 4096;
	$quake_net.sU_ARMOR = 8192;
	$quake_net.sU_WEAPON = 16384;
	$quake_net.snD_VOLUME = 1;
	$quake_net.snD_ATTENUATION = 2;
	$quake_net.snD_LOOPING = 4;
	$quake_net.defaulT_VIEWHEIGHT = 22;
	$quake_net.gamE_COOP = 0;
	$quake_net.gamE_DEATHMATCH = 1;
	$quake_net.svc_bad = 0;
	$quake_net.svc_nop = 1;
	$quake_net.svc_disconnect = 2;
	$quake_net.svc_updatestat = 3;
	$quake_net.svc_version = 4;
	$quake_net.svc_setview = 5;
	$quake_net.svc_sound = 6;
	$quake_net.svc_time = 7;
	$quake_net.svc_print = 8;
	$quake_net.svc_stufftext = 9;
	$quake_net.svc_setangle = 10;
	$quake_net.svc_serverinfo = 11;
	$quake_net.svc_lightstyle = 12;
	$quake_net.svc_updatename = 13;
	$quake_net.svc_updatefrags = 14;
	$quake_net.svc_clientdata = 15;
	$quake_net.svc_stopsound = 16;
	$quake_net.svc_updatecolors = 17;
	$quake_net.svc_particle = 18;
	$quake_net.svc_damage = 19;
	$quake_net.svc_spawnstatic = 20;
	$quake_net.svc_spawnbaseline = 22;
	$quake_net.svc_temp_entity = 23;
	$quake_net.svc_setpause = 24;
	$quake_net.svc_signonnum = 25;
	$quake_net.svc_centerprint = 26;
	$quake_net.svc_killedmonster = 27;
	$quake_net.svc_foundsecret = 28;
	$quake_net.svc_spawnstaticsound = 29;
	$quake_net.svc_intermission = 30;
	$quake_net.svc_finale = 31;
	$quake_net.svc_cdtrack = 32;
	$quake_net.svc_sellscreen = 33;
	$quake_net.svc_cutscene = 34;
	$quake_net.clc_bad = 0;
	$quake_net.clc_nop = 1;
	$quake_net.clc_disconnect = 2;
	$quake_net.clc_move = 3;
	$quake_net.clc_stringcmd = 4;
	$quake_net.tE_SPIKE = 0;
	$quake_net.tE_SUPERSPIKE = 1;
	$quake_net.tE_GUNSHOT = 2;
	$quake_net.tE_EXPLOSION = 3;
	$quake_net.tE_TAREXPLOSION = 4;
	$quake_net.tE_LIGHTNING1 = 5;
	$quake_net.tE_LIGHTNING2 = 6;
	$quake_net.tE_WIZSPIKE = 7;
	$quake_net.tE_KNIGHTSPIKE = 8;
	$quake_net.tE_LIGHTNING3 = 9;
	$quake_net.tE_LAVASPLASH = 10;
	$quake_net.tE_TELEPORT = 11;
	$quake_net.tE_EXPLOSION2 = 12;
	$quake_net.tE_BEAM = 13;
	for (var kk = 0; kk < $quake_net.HOSTCACHESIZE; kk++) {
		$quake_net.$hostcache[kk] = new $quake_net$hostcache_t();
	}
	$quake_common.$nuM_SAFE_ARGVS = 7;
	$quake_common.$registered = new $quake_cvar_t('registered', '0');
	$quake_common.$cmdline = new $quake_cvar_t.$ctor2('cmdline', '0', false, true);
	$quake_common.$com_modified = false;
	$quake_common.$proghack = false;
	$quake_common.$static_registered = true;
	$quake_common.msg_suppress_1 = false;
	$quake_common.$paK0_COUNT = 339;
	$quake_common.$paK0_CRC = 32981;
	$quake_common.com_token = null;
	$quake_common.com_argc = 0;
	$quake_common.com_argv = null;
	$quake_common.$com_cmdline = null;
	$quake_common.standard_quake = true;
	$quake_common.rogue = false;
	$quake_common.hipnotic = false;
	$quake_common.$pop = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26112, 0, 0, 0, 26112, 0, 0, 102, 0, 0, 0, 0, 103, 0, 0, 26213, 0, 0, 0, 0, 101, 26112, 99, 25953, 0, 0, 0, 0, 97, 25955, 100, 25953, 0, 0, 0, 0, 97, 25956, 100, 25956, 0, 25705, 26985, 25600, 100, 25956, 99, 25960, 25088, 100, 26724, 0, 25192, 25955, 0, 25959, 26979, 100, 26468, 99, 26983, 25856, 0, 25190, 26473, 27240, 26472, 27241, 26470, 25088, 0, 98, 25958, 26214, 26214, 26214, 25954, 0, 0, 0, 98, 25444, 26212, 25442, 0, 0, 0, 0, 0, 98, 26210, 0, 0, 0, 0, 0, 0, 97, 26209, 0, 0, 0, 0, 0, 0, 0, 25856, 0, 0, 0, 0, 0, 0, 0, 25600, 0, 0, 0];
	$quake_common.$msg_readcount = 0;
	$quake_common.msg_badread = false;
	$quake_common.com_filesize = 0;
	$quake_common.$sizeof_dpackfile_t = 64;
	$quake_common.$sizeof_dpackheader_t = 12;
	$quake_common.$maX_FILES_IN_PACK = 2048;
	$quake_common.$com_cachedir = null;
	$quake_common.com_gamedir = null;
	$quake_common.$com_searchpaths = null;
	$quake_cmd.$maX_ALIAS_NAME = 32;
	$quake_cmd.$cmd_alias = new $quake_$cmd$cmdalias_t();
	$quake_cmd.$cmd_wait = false;
	$quake_cmd.$cmd_text = new $quake_common$sizebuf_t();
	$quake_cmd.$maX_ARGS = 80;
	$quake_cmd.$cmd_argc = 0;
	$quake_cmd.$cmd_argv = new Array($quake_cmd.$maX_ARGS);
	$quake_cmd.$cmd_null_string = '';
	$quake_cmd.$cmd_args = null;
	$quake_cmd.cmd_source = 0;
	$quake_cmd.$cmd_functions = null;
	$quake_keys.k_TAB = 9;
	$quake_keys.k_ENTER = 13;
	$quake_keys.k_ESCAPE = 27;
	$quake_keys.k_SPACE = 32;
	$quake_keys.k_BACKSPACE = 127;
	$quake_keys.k_UPARROW = 128;
	$quake_keys.k_DOWNARROW = 129;
	$quake_keys.k_LEFTARROW = 130;
	$quake_keys.k_RIGHTARROW = 131;
	$quake_keys.k_ALT = 132;
	$quake_keys.k_CTRL = 133;
	$quake_keys.k_SHIFT = 134;
	$quake_keys.k_F1 = 135;
	$quake_keys.k_F2 = 136;
	$quake_keys.k_F3 = 137;
	$quake_keys.k_F4 = 138;
	$quake_keys.k_F5 = 139;
	$quake_keys.k_F6 = 140;
	$quake_keys.k_F7 = 141;
	$quake_keys.k_F8 = 142;
	$quake_keys.k_F9 = 143;
	$quake_keys.k_F10 = 144;
	$quake_keys.k_F11 = 145;
	$quake_keys.k_F12 = 146;
	$quake_keys.k_INS = 147;
	$quake_keys.k_DEL = 148;
	$quake_keys.k_PGDN = 149;
	$quake_keys.k_PGUP = 150;
	$quake_keys.k_HOME = 151;
	$quake_keys.k_END = 152;
	$quake_keys.k_PAUSE = 255;
	$quake_keys.k_MOUSE1 = 200;
	$quake_keys.k_MOUSE2 = 201;
	$quake_keys.k_MOUSE3 = 202;
	$quake_keys.k_JOY1 = 203;
	$quake_keys.k_JOY2 = 204;
	$quake_keys.k_JOY3 = 205;
	$quake_keys.k_JOY4 = 206;
	$quake_keys.k_AUX1 = 207;
	$quake_keys.k_AUX2 = 208;
	$quake_keys.k_AUX3 = 209;
	$quake_keys.k_AUX4 = 210;
	$quake_keys.k_AUX5 = 211;
	$quake_keys.k_AUX6 = 212;
	$quake_keys.k_AUX7 = 213;
	$quake_keys.k_AUX8 = 214;
	$quake_keys.k_AUX9 = 215;
	$quake_keys.k_AUX10 = 216;
	$quake_keys.k_AUX11 = 217;
	$quake_keys.k_AUX12 = 218;
	$quake_keys.k_AUX13 = 219;
	$quake_keys.k_AUX14 = 220;
	$quake_keys.k_AUX15 = 221;
	$quake_keys.k_AUX16 = 222;
	$quake_keys.k_AUX17 = 223;
	$quake_keys.k_AUX18 = 224;
	$quake_keys.k_AUX19 = 225;
	$quake_keys.k_AUX20 = 226;
	$quake_keys.k_AUX21 = 227;
	$quake_keys.k_AUX22 = 228;
	$quake_keys.k_AUX23 = 229;
	$quake_keys.k_AUX24 = 230;
	$quake_keys.k_AUX25 = 231;
	$quake_keys.k_AUX26 = 232;
	$quake_keys.k_AUX27 = 233;
	$quake_keys.k_AUX28 = 234;
	$quake_keys.k_AUX29 = 235;
	$quake_keys.k_AUX30 = 236;
	$quake_keys.k_AUX31 = 237;
	$quake_keys.k_AUX32 = 238;
	$quake_keys.k_MWHEELUP = 239;
	$quake_keys.k_MWHEELDOWN = 240;
	$quake_keys.MAXCMDLINE = 256;
	$quake_keys.key_lines = new Array(32);
	$quake_keys.key_linepos = 0;
	$quake_keys.edit_line = 0;
	$quake_keys.$history_line = 0;
	$quake_keys.key_dest = 0;
	$quake_keys.$key_count = 0;
	$quake_keys.$keybindings = new Array(256);
	$quake_keys.$consolekeys = new Array(256);
	$quake_keys.$keynames = [new $quake_$keys$keyname_t('TAB', $quake_keys.k_TAB), new $quake_$keys$keyname_t('ENTER', $quake_keys.k_ENTER), new $quake_$keys$keyname_t('ESCAPE', $quake_keys.k_ESCAPE), new $quake_$keys$keyname_t('SPACE', $quake_keys.k_SPACE), new $quake_$keys$keyname_t('BACKSPACE', $quake_keys.k_BACKSPACE), new $quake_$keys$keyname_t('UPARROW', $quake_keys.k_UPARROW), new $quake_$keys$keyname_t('DOWNARROW', $quake_keys.k_DOWNARROW), new $quake_$keys$keyname_t('LEFTARROW', $quake_keys.k_LEFTARROW), new $quake_$keys$keyname_t('RIGHTARROW', $quake_keys.k_RIGHTARROW), new $quake_$keys$keyname_t('ALT', $quake_keys.k_ALT), new $quake_$keys$keyname_t('CTRL', $quake_keys.k_CTRL), new $quake_$keys$keyname_t('SHIFT', $quake_keys.k_SHIFT), new $quake_$keys$keyname_t('F1', $quake_keys.k_F1), new $quake_$keys$keyname_t('F2', $quake_keys.k_F2), new $quake_$keys$keyname_t('F3', $quake_keys.k_F3), new $quake_$keys$keyname_t('F4', $quake_keys.k_F4), new $quake_$keys$keyname_t('F5', $quake_keys.k_F5), new $quake_$keys$keyname_t('F6', $quake_keys.k_F6), new $quake_$keys$keyname_t('F7', $quake_keys.k_F7), new $quake_$keys$keyname_t('F8', $quake_keys.k_F8), new $quake_$keys$keyname_t('F9', $quake_keys.k_F9), new $quake_$keys$keyname_t('F10', $quake_keys.k_F10), new $quake_$keys$keyname_t('F11', $quake_keys.k_F11), new $quake_$keys$keyname_t('F12', $quake_keys.k_F12), new $quake_$keys$keyname_t('INS', $quake_keys.k_INS), new $quake_$keys$keyname_t('DEL', $quake_keys.k_DEL), new $quake_$keys$keyname_t('PGDN', $quake_keys.k_PGDN), new $quake_$keys$keyname_t('PGUP', $quake_keys.k_PGUP), new $quake_$keys$keyname_t('HOME', $quake_keys.k_HOME), new $quake_$keys$keyname_t('END', $quake_keys.k_END), new $quake_$keys$keyname_t('MOUSE1', $quake_keys.k_MOUSE1), new $quake_$keys$keyname_t('MOUSE2', $quake_keys.k_MOUSE2), new $quake_$keys$keyname_t('MOUSE3', $quake_keys.k_MOUSE3), new $quake_$keys$keyname_t('JOY1', $quake_keys.k_JOY1), new $quake_$keys$keyname_t('JOY2', $quake_keys.k_JOY2), new $quake_$keys$keyname_t('JOY3', $quake_keys.k_JOY3), new $quake_$keys$keyname_t('JOY4', $quake_keys.k_JOY4), new $quake_$keys$keyname_t('AUX1', $quake_keys.k_AUX1), new $quake_$keys$keyname_t('AUX2', $quake_keys.k_AUX2), new $quake_$keys$keyname_t('AUX3', $quake_keys.k_AUX3), new $quake_$keys$keyname_t('AUX4', $quake_keys.k_AUX4), new $quake_$keys$keyname_t('AUX5', $quake_keys.k_AUX5), new $quake_$keys$keyname_t('AUX6', $quake_keys.k_AUX6), new $quake_$keys$keyname_t('AUX7', $quake_keys.k_AUX7), new $quake_$keys$keyname_t('AUX8', $quake_keys.k_AUX8), new $quake_$keys$keyname_t('AUX9', $quake_keys.k_AUX9), new $quake_$keys$keyname_t('AUX10', $quake_keys.k_AUX10), new $quake_$keys$keyname_t('AUX11', $quake_keys.k_AUX11), new $quake_$keys$keyname_t('AUX12', $quake_keys.k_AUX12), new $quake_$keys$keyname_t('AUX13', $quake_keys.k_AUX13), new $quake_$keys$keyname_t('AUX14', $quake_keys.k_AUX14), new $quake_$keys$keyname_t('AUX15', $quake_keys.k_AUX15), new $quake_$keys$keyname_t('AUX16', $quake_keys.k_AUX16), new $quake_$keys$keyname_t('AUX17', $quake_keys.k_AUX17), new $quake_$keys$keyname_t('AUX18', $quake_keys.k_AUX18), new $quake_$keys$keyname_t('AUX19', $quake_keys.k_AUX19), new $quake_$keys$keyname_t('AUX20', $quake_keys.k_AUX20), new $quake_$keys$keyname_t('AUX21', $quake_keys.k_AUX21), new $quake_$keys$keyname_t('AUX22', $quake_keys.k_AUX22), new $quake_$keys$keyname_t('AUX23', $quake_keys.k_AUX23), new $quake_$keys$keyname_t('AUX24', $quake_keys.k_AUX24), new $quake_$keys$keyname_t('AUX25', $quake_keys.k_AUX25), new $quake_$keys$keyname_t('AUX26', $quake_keys.k_AUX26), new $quake_$keys$keyname_t('AUX27', $quake_keys.k_AUX27), new $quake_$keys$keyname_t('AUX28', $quake_keys.k_AUX28), new $quake_$keys$keyname_t('AUX29', $quake_keys.k_AUX29), new $quake_$keys$keyname_t('AUX30', $quake_keys.k_AUX30), new $quake_$keys$keyname_t('AUX31', $quake_keys.k_AUX31), new $quake_$keys$keyname_t('AUX32', $quake_keys.k_AUX32), new $quake_$keys$keyname_t('PAUSE', $quake_keys.k_PAUSE), new $quake_$keys$keyname_t('MWHEELUP', $quake_keys.k_MWHEELUP), new $quake_$keys$keyname_t('MWHEELDOWN', $quake_keys.k_MWHEELDOWN), new $quake_$keys$keyname_t('SEMICOLON', 59), new $quake_$keys$keyname_t(null, 0)];
	$quake_console.$con_linewidth = 0;
	$quake_console.$con_cursorspeed = 4;
	$quake_console.$coN_TEXTSIZE = 16384;
	$quake_console.con_forcedup = false;
	$quake_console.con_totallines = 0;
	$quake_console.con_backscroll = 0;
	$quake_console.$con_current = 0;
	$quake_console.$con_x = 0;
	$quake_console.$con_text = null;
	$quake_console.$con_notifytime = new $quake_cvar_t('con_notifytime', '3');
	$quake_console.$nuM_CON_TIMES = 4;
	$quake_console.$con_times = new Array($quake_console.$nuM_CON_TIMES);
	$quake_console.$con_vislines = 0;
	$quake_console.$con_debuglog = false;
	$quake_console.$MAXCMDLINE = 256;
	$quake_console.con_initialized = false;
	$quake_console.con_notifylines = 0;
	$quake_console.$cr = false;
	$quake_console.$MAXPRINTMSG = 4096;
	$quake_console.$inupdate = false;
	$quake_chase.$chase_back = new $quake_cvar_t('chase_back', '100');
	$quake_chase.$chase_up = new $quake_cvar_t('chase_up', '16');
	$quake_chase.$chase_right = new $quake_cvar_t('chase_right', '0');
	$quake_chase.chase_active = new $quake_cvar_t('chase_active', '0');
	$quake_chase.$chase_dest = new Array(3);
	$quake_$vrect_s.$x = 0;
	$quake_$vrect_s.$y = 4;
	$quake_$vrect_s.$width = 8;
	$quake_$vrect_s.$height = 12;
	$quake_world.movE_NORMAL = 0;
	$quake_world.movE_NOMONSTERS = 1;
	$quake_world.movE_MISSILE = 2;
	main();
})();
