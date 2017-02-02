"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var mock_songs_1 = require('./mock-songs');
var core_1 = require('@angular/core');
var SongService = (function () {
    function SongService() {
    }
    SongService.prototype.getSongs = function () {
        return Promise.resolve(mock_songs_1.SONGS);
    };
    SongService.prototype.getSongsSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getSongs()); }, 2000);
        });
    };
    SongService.prototype.getSong = function (id) {
        return this.getSongs()
            .then(function (songs) { return songs.find(function (song) { return song.id === id; }); });
    };
    SongService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SongService);
    return SongService;
}());
exports.SongService = SongService;
//# sourceMappingURL=song.service.js.map