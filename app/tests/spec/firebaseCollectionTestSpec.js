define(['../../js/collections/firebaseCollection'],
    function(firebaseCollection){
        var collection;
        var server;

        describe("Firebase Collection", function() {
            beforeEach(function(){
                server = sinon.fakeServer.create();

                collection = new firebaseCollection({
                    url : '/movies'
                });
            });

            afterEach(function(){
                server.restore();
            });

            it('Should be able to fetch variables',function(){
                server.respondWith("GET", "/movies",
                    [200, { "Content-Type": "application/json" },
                        '{"Title":"The Lord of the Rings: The Fellowship of the Ring","Year":"2001","imdbID":"tt0120737","Type":"movie"}']);

                collection.fetch();
                server.respond();
                expect(collection.length).toBe(1);
            });
        });
    });