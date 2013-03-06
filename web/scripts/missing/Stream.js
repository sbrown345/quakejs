window.Stream = function(arrayBuffer) {
    this.dataStream = new DataStream(arrayBuffer, 0, DataStream.LITTLE_ENDIAN);
};
Stream.prototype = {
    get_position: function() {
        return this.dataStream.position;
    },
    get_length: function() {
        return this.dataStream._byteLength;
    },
    get_buffer: function() {
        return this.dataStream.buffer;
    },
    read: function(buffer, offset, count) {
        for (var i = 0; i < count; i++) {
            buffer[offset + i] = this.dataStream.readUint8();
        }
    },
    readByte: function() {
        return this.dataStream.readUint8();
    },
    readBytes: function(size) {
        return this.dataStream.readUint8Array(size);
    },
    readInt32: function() {
        return this.dataStream.readInt32();
    },
    readFloat32: function() {
        return this.dataStream.readFloat32();
    },
    readFloat64: function() {
        return this.dataStream.readFloat64();
    },
    seek: function(/*long */offset, /*SeekOrigin */origin) {
        this.dataStream.position = offset;
    },
    close: function() {
        delete this.dataStream;
    },
    writeInt32: function(value) {
        this.dataStream.writeInt32(value);
    },
    writeFloat32: function (value) {
        this.dataStream.writeFloat32(value);
    },
    writeUint8Array: function (array) {
        this.dataStream.writeUint8Array(array);
    }
};

window.MemoryStream = function(data) {
    Stream.call(this, data.buffer);
};
MemoryStream.prototype = new Stream();
MemoryStream.prototype.constructor.callback = MemoryStream;
