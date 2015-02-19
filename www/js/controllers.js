angular.module('starter.controllers', [])
    .controller('addPlayer', function ($scope, $ionicModal) {
        $scope.players=[];
        $scope.players.lists= [];

        $ionicModal.fromTemplateUrl('templates/addplayer.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function () {
            $scope.modal.show();

        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });

        $scope.playerAdd = function(players, list){
            $scope.players.lists.push({name:$scope.list.name, money:$scope.list.name});
            $scope.closeModal();
            console.log($scope.players.lists)
        }

    })

