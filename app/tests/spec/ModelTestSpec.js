define(['../../js/models/movie'],
	function(backboneModel){
		describe("Backbone Model", function() {
			var modelDefaults = {
			    Title: 'No title',
				Year : '1900',
			    Type : '',
			    Genre : 'unknown',
			    Director : 'unknown',
			    Plot : 'Unknown',
			    imdbRating : '1.0',
			    imdbVotes : '0',
			    Poster : '',
			    Actors : '',
			    watched : false
		    };
			var model;

			beforeEach(function(){
				model = new backboneModel();
			});

			afterEach(function(){
				model.destroy();
			});

			it('Should have the correct default variables',function(){
				expect(model.defaults).toEqual(modelDefaults);
			});

			it('Should toggle the watched flag', function(){
				expect(model.get('watched')).toBeFalsy();
				model.watched();
				expect(model.get('watched')).toBeTruthy();
			});
		});
	});