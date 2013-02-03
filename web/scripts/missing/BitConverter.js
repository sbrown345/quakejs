BitConverter = {
    toUInt32: function (/*byte[]*/ value, /*int*/ startIndex) {
        var ds = new DataStream(value);
        ds.position = startIndex;
        var val = ds.readUint32();
        return val;
    },
    toInt32: function (/*byte[]*/ value, /*int*/ startIndex) {
        var ds = new DataStream(value);
        ds.position = startIndex;
        var val = ds.readInt32();
        return val;
    },
    toUInt16: function (/*byte[]*/ value, /*int*/ startIndex) {
        var ds = new DataStream(value);
        ds.position = startIndex;
        var val = ds.readUint16();
        return val;
    },
    toInt16: function (/*byte[]*/ value, /*int*/ startIndex) {
        var ds = new DataStream(value);
        ds.position = startIndex;
        var val = ds.readInt16();
        return val;
    },
    toSingle: function (/*byte[]*/ value, /*int*/ startIndex) {
        var ds = new DataStream(value);
        ds.position = startIndex;
        var val = ds.readFloat32();
        return val;
    }/*,
    getBytesFromFloat: function (f) {
        var view = new DataView(new ArrayBuffer(4));
        view.setFloat32(0, f);
        //var dat = [view.getUint8(3), view.getUint8(2), view.getUint8(1), view.getUint8(0)];
        return view;
    }*/
};
