define(['../../js/routers/router'],
	function(backboneRouter){
		describe('Backbone Router',function(){
			var router;

			beforeEach(function(){
				router = new backboneRouter.router();
			});

			afterEach(function(){
				Backbone.history.stop();
			});

			it('Should have a home route', function(){
				expect(router.routes['']).toEqual('home');
			});

			it('Should have a movie route', function(){
				expect(router.routes['movie/:id']).toEqual('movie');
			});

			it('Should navigate to the home page', function(){
				spyOn(backboneRouter.router.prototype, 'home');
				var localRouter = new backboneRouter.router();
				Backbone.history.start();

				localRouter.navigate('');
				expect(backboneRouter.router.prototype.home).toHaveBeenCalled();
			});

			it('Should navigate to the movie page', function(){
				spyOn(backboneRouter.router.prototype, 'movie');
				var localRouter = new backboneRouter.router();
				Backbone.history.start();

				router.navigate('movie/123',{trigger:true});
				expect(backboneRouter.router.prototype.movie).toHaveBeenCalled();
				router.navigate('',{trigger:true});
			});
		});
	});