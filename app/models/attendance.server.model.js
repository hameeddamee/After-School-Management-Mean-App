'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Attendance Schema
 */
var AttendanceSchema = new Schema({
    // Document ID of child this Attendance belongs to
    childID: {
        type: String,
        required: ''
    },
    // TODO remove this, get info from associated Child document
    childName: {
        type: String,
        required: ''
    },
    // Date this Attendance occurred
    date: {
        day: {
            type: Number,
            required: ''
        },
        month: {
            type: Number,
            required: ''
        },
        year: {
            type: Number,
            required: ''
        }
    },
    // Indicates if the child attended the class (true) or was absent (false)
    attended:{
        type: Boolean
    },
    // If attended is false, this indicates if the absence was scheduled (true) or unscheduled (false)
    scheduledAbsent:{
        type: Boolean
    },
    // Information about the signout for this Attendance
    signout: {
        // Exact time the child was signed out
        time:{
            type: Date
        },
        // Name of person who signed the child out
        guardian:{
            type: String
        }
    },
    // Indicates if this Attendance is for an Advent (true) or a regular class (false)
    isAdvent:{
        type: Boolean,
        default: false
    },
    // If isAdvent is true, this is the ID of the associated Advent document
    adventID:{
        type: String,
        default: ''
    }



});

mongoose.model('Attendance', AttendanceSchema);