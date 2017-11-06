(function() {
    function AlbumCtrl() {
        this.albumData = (angular.copy(albumPicasso));
        console.log(this.albumData, "test");
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();
