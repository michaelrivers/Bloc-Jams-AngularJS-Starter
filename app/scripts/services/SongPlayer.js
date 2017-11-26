(function() {
     function SongPlayer() {
          var SongPlayer = {};

          var currentSong = null;

          /**
          * @desc Buzz object audio file
          * @type {Object}
          */
          var currentBuzzObject = null;

          /**
           * @function setSong
           * @desc Stops currently playing song and loads new audio file as currentBuzzObject
           * @param {Object} song
           */
          var setSong = function(song) {
              if (currentBuzzObject) {
                  currentBuzzObject.stop();
                  currentSong.playing = null;
              }

              currentBuzzObject = new buzz.sound(song.audioUrl, {
                  formats: ['mp3'],
                  preload: true
              });

              currentSong = song;
          };

          /**
           * @function playSong
           * @desc Plays currentBuzzObject.play() and sets the play property of song to true
           */
          var playSong = function() {
              if(currentBuzzObject) {
                  currentBuzzObject.play();
                  currentSong.playing = true;
              }

          };

          /**
           * @function SongPlayer.play
           * @desc Checks for a currentSong, If  currentSong is not playing it will run setSong function. if currentSong exists it will be paused.
           * @param {Object} song
           */
          SongPlayer.play = function(song) {
              if (currentSong !== song) {

              setSong(song);
              playSong();
          }else if (currentSong === song) {
              if (currentBuzzObject.isPaused()) {
                 playSong();
              }
          }
        };

          SongPlayer.pause = function(song) {
              currentBuzzObject.pause();
              song.playing = false;
          };

          return SongPlayer;
     }

     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();
