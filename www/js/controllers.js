angular.module('starter.controllers', ['ionic'])
    .controller('addPlayer', function ($scope, $ionicModal) {
        $scope.players=[{
            name: 'bank',
            money: 30000,
            checked: false,
            minus: 0,
            plus: 0
        }];



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
                money: player.money,
                checked: false,
                minus: 0,
                plus: 0
            });
            console.log($scope.players)
            $scope.closeModal();

        };



         $ionicModal.fromTemplateUrl('templates/payment.html', function(modal) {
                $scope.paymentModal = modal;
            }, {
                scope: $scope,
                animation: 'slide-in-up'
            });


            $scope.openPaymentModal = function () {
                $scope.paymentModal.show();

            };
            $scope.closePaymentModal = function () {
                $scope.paymentModal.hide();
            };

            $scope.calculatePayments = function(player){

                $scope.closePaymentModal();
                console.log($scope.players)
            }
    })



