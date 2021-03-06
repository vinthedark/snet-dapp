/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/*eslint-disable*/

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var face_common_pb = require('./face_common_pb.js');
goog.exportSymbol('snet_face_landmarks.Empty', null, global);
goog.exportSymbol('snet_face_landmarks.FaceLandmarkHeader', null, global);
goog.exportSymbol('snet_face_landmarks.FaceLandmarkRequest', null, global);
goog.exportSymbol('snet_face_landmarks.FaceLandmarkResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
snet_face_landmarks.FaceLandmarkHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_face_landmarks.FaceLandmarkHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_face_landmarks.FaceLandmarkHeader.displayName = 'snet_face_landmarks.FaceLandmarkHeader';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_face_landmarks.FaceLandmarkHeader.prototype.toObject = function(opt_includeInstance) {
  return snet_face_landmarks.FaceLandmarkHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_face_landmarks.FaceLandmarkHeader} msg The msg instance to transform.
 * @return {!Object}
 */
snet_face_landmarks.FaceLandmarkHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    landmarkModel: msg.getLandmarkModel(),
    faces: (f = msg.getFaces()) && face_common_pb.FaceDetections.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!snet_face_landmarks.FaceLandmarkHeader}
 */
snet_face_landmarks.FaceLandmarkHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_face_landmarks.FaceLandmarkHeader;
  return snet_face_landmarks.FaceLandmarkHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_face_landmarks.FaceLandmarkHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_face_landmarks.FaceLandmarkHeader}
 */
snet_face_landmarks.FaceLandmarkHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLandmarkModel(value);
      break;
    case 2:
      var value = new face_common_pb.FaceDetections;
      reader.readMessage(value,face_common_pb.FaceDetections.deserializeBinaryFromReader);
      msg.setFaces(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_face_landmarks.FaceLandmarkHeader} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_face_landmarks.FaceLandmarkHeader.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_face_landmarks.FaceLandmarkHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_face_landmarks.FaceLandmarkHeader.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getLandmarkModel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getFaces();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      face_common_pb.FaceDetections.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_face_landmarks.FaceLandmarkHeader} The clone.
 */
snet_face_landmarks.FaceLandmarkHeader.prototype.cloneMessage = function() {
  return /** @type {!snet_face_landmarks.FaceLandmarkHeader} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string landmark_model = 1;
 * @return {string}
 */
snet_face_landmarks.FaceLandmarkHeader.prototype.getLandmarkModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
snet_face_landmarks.FaceLandmarkHeader.prototype.setLandmarkModel = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional FaceDetections faces = 2;
 * @return {snet_face_landmarks.FaceDetections}
 */
snet_face_landmarks.FaceLandmarkHeader.prototype.getFaces = function() {
  return /** @type{snet_face_landmarks.FaceDetections} */ (
    jspb.Message.getWrapperField(this, face_common_pb.FaceDetections, 2));
};


/** @param {snet_face_landmarks.FaceDetections|undefined} value  */
snet_face_landmarks.FaceLandmarkHeader.prototype.setFaces = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


snet_face_landmarks.FaceLandmarkHeader.prototype.clearFaces = function() {
  this.setFaces(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
snet_face_landmarks.FaceLandmarkHeader.prototype.hasFaces = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
snet_face_landmarks.FaceLandmarkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_face_landmarks.FaceLandmarkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_face_landmarks.FaceLandmarkRequest.displayName = 'snet_face_landmarks.FaceLandmarkRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_face_landmarks.FaceLandmarkRequest.prototype.toObject = function(opt_includeInstance) {
  return snet_face_landmarks.FaceLandmarkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_face_landmarks.FaceLandmarkRequest} msg The msg instance to transform.
 * @return {!Object}
 */
snet_face_landmarks.FaceLandmarkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && snet_face_landmarks.FaceLandmarkHeader.toObject(includeInstance, f),
    imageChunk: (f = msg.getImageChunk()) && face_common_pb.ImageRGB.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!snet_face_landmarks.FaceLandmarkRequest}
 */
snet_face_landmarks.FaceLandmarkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_face_landmarks.FaceLandmarkRequest;
  return snet_face_landmarks.FaceLandmarkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_face_landmarks.FaceLandmarkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_face_landmarks.FaceLandmarkRequest}
 */
snet_face_landmarks.FaceLandmarkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new snet_face_landmarks.FaceLandmarkHeader;
      reader.readMessage(value,snet_face_landmarks.FaceLandmarkHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new face_common_pb.ImageRGB;
      reader.readMessage(value,face_common_pb.ImageRGB.deserializeBinaryFromReader);
      msg.setImageChunk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_face_landmarks.FaceLandmarkRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_face_landmarks.FaceLandmarkRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_face_landmarks.FaceLandmarkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_face_landmarks.FaceLandmarkRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      snet_face_landmarks.FaceLandmarkHeader.serializeBinaryToWriter
    );
  }
  f = this.getImageChunk();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      face_common_pb.ImageRGB.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_face_landmarks.FaceLandmarkRequest} The clone.
 */
snet_face_landmarks.FaceLandmarkRequest.prototype.cloneMessage = function() {
  return /** @type {!snet_face_landmarks.FaceLandmarkRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional FaceLandmarkHeader header = 1;
 * @return {snet_face_landmarks.FaceLandmarkHeader}
 */
snet_face_landmarks.FaceLandmarkRequest.prototype.getHeader = function() {
  return /** @type{snet_face_landmarks.FaceLandmarkHeader} */ (
    jspb.Message.getWrapperField(this, snet_face_landmarks.FaceLandmarkHeader, 1));
};


/** @param {snet_face_landmarks.FaceLandmarkHeader|undefined} value  */
snet_face_landmarks.FaceLandmarkRequest.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


snet_face_landmarks.FaceLandmarkRequest.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
snet_face_landmarks.FaceLandmarkRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ImageRGB image_chunk = 2;
 * @return {snet_face_landmarks.ImageRGB}
 */
snet_face_landmarks.FaceLandmarkRequest.prototype.getImageChunk = function() {
  return /** @type{snet_face_landmarks.ImageRGB} */ (
    jspb.Message.getWrapperField(this, face_common_pb.ImageRGB, 2));
};


/** @param {snet_face_landmarks.ImageRGB|undefined} value  */
snet_face_landmarks.FaceLandmarkRequest.prototype.setImageChunk = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


snet_face_landmarks.FaceLandmarkRequest.prototype.clearImageChunk = function() {
  this.setImageChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
snet_face_landmarks.FaceLandmarkRequest.prototype.hasImageChunk = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
snet_face_landmarks.FaceLandmarkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, snet_face_landmarks.FaceLandmarkResponse.repeatedFields_, null);
};
goog.inherits(snet_face_landmarks.FaceLandmarkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_face_landmarks.FaceLandmarkResponse.displayName = 'snet_face_landmarks.FaceLandmarkResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
snet_face_landmarks.FaceLandmarkResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_face_landmarks.FaceLandmarkResponse.prototype.toObject = function(opt_includeInstance) {
  return snet_face_landmarks.FaceLandmarkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_face_landmarks.FaceLandmarkResponse} msg The msg instance to transform.
 * @return {!Object}
 */
snet_face_landmarks.FaceLandmarkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    landmarkedFacesList: jspb.Message.toObjectList(msg.getLandmarkedFacesList(),
    face_common_pb.FaceLandmarks.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!snet_face_landmarks.FaceLandmarkResponse}
 */
snet_face_landmarks.FaceLandmarkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_face_landmarks.FaceLandmarkResponse;
  return snet_face_landmarks.FaceLandmarkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_face_landmarks.FaceLandmarkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_face_landmarks.FaceLandmarkResponse}
 */
snet_face_landmarks.FaceLandmarkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new face_common_pb.FaceLandmarks;
      reader.readMessage(value,face_common_pb.FaceLandmarks.deserializeBinaryFromReader);
      msg.getLandmarkedFacesList().push(value);
      msg.setLandmarkedFacesList(msg.getLandmarkedFacesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_face_landmarks.FaceLandmarkResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_face_landmarks.FaceLandmarkResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_face_landmarks.FaceLandmarkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_face_landmarks.FaceLandmarkResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getLandmarkedFacesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      face_common_pb.FaceLandmarks.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_face_landmarks.FaceLandmarkResponse} The clone.
 */
snet_face_landmarks.FaceLandmarkResponse.prototype.cloneMessage = function() {
  return /** @type {!snet_face_landmarks.FaceLandmarkResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated FaceLandmarks landmarked_faces = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!snet_face_landmarks.FaceLandmarks>}
 */
snet_face_landmarks.FaceLandmarkResponse.prototype.getLandmarkedFacesList = function() {
  return /** @type{!Array.<!snet_face_landmarks.FaceLandmarks>} */ (
    jspb.Message.getRepeatedWrapperField(this, face_common_pb.FaceLandmarks, 1));
};


/** @param {Array.<!snet_face_landmarks.FaceLandmarks>} value  */
snet_face_landmarks.FaceLandmarkResponse.prototype.setLandmarkedFacesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


snet_face_landmarks.FaceLandmarkResponse.prototype.clearLandmarkedFacesList = function() {
  this.setLandmarkedFacesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
snet_face_landmarks.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_face_landmarks.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_face_landmarks.Empty.displayName = 'snet_face_landmarks.Empty';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_face_landmarks.Empty.prototype.toObject = function(opt_includeInstance) {
  return snet_face_landmarks.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_face_landmarks.Empty} msg The msg instance to transform.
 * @return {!Object}
 */
snet_face_landmarks.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!snet_face_landmarks.Empty}
 */
snet_face_landmarks.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_face_landmarks.Empty;
  return snet_face_landmarks.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_face_landmarks.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_face_landmarks.Empty}
 */
snet_face_landmarks.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_face_landmarks.Empty} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_face_landmarks.Empty.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_face_landmarks.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_face_landmarks.Empty.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_face_landmarks.Empty} The clone.
 */
snet_face_landmarks.Empty.prototype.cloneMessage = function() {
  return /** @type {!snet_face_landmarks.Empty} */ (jspb.Message.cloneMessage(this));
};


goog.object.extend(exports, snet_face_landmarks);
