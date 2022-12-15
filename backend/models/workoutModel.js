/**
 *  SCHEMA : veritabanındaki belirli bir belgenin yapısını veya bir belge türünü tanımlar
 *  MODEL : modelin görevi şemayı belirli bir modele uygulamaktır.
 */

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)