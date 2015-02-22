angular.module('starter.controllers', [])
    .controller('addPlayer', function ($scope, $ionicModal) {
        $scope.players=[];



        $ionicModal.fromTemplateUrl('templates/addplayer.html', function(modal) {
            $scope.addPlayer = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });


        $scope.openModal = function () {
            $scope.addPlayer.show();

        };
        $scope.closeModal = function () {
            $scope.addPlayer.hide();
        };


        $scope.playerAdd = function(player){
            $scope.players.push({
                name: player.name,
                money: player.money
            });

            $scope.closeModal();

            console.log($scope.players)
        }

    })



