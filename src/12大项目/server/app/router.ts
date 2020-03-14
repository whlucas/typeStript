import { Application } from 'egg';

export default (app: Application) => {
	const { controller, router } = app;

	router.get('/findAllMovie', controller.movie.findAllMovie)

	router.post('/addMovie', controller.movie.addMovie)

	router.post('/editMovie', controller.movie.editMovie)

	router.post('/delMovie', controller.movie.delMovie)
};
