import { Controller } from 'egg';
import { IMovie } from '../type/IMovie';
import { ResponseHelper } from '../lib/responseHelper';

export default class MovieController extends Controller {
	public async findAllMovie() {
		const { ctx } = this;

		console.log(ctx.response, 11)
		const result = await ctx.model.Movie.findAll()
		ctx.body = ResponseHelper.sendData(result)
	}

	public async addMovie() {
		const { ctx } = this;

		const { body } = this.ctx.request;

		const validateResult = await this.ctx.validate('movie.index.addMovie', body);
		if (!validateResult) return

		await ctx.service.movie.addMovie(body)
	}

	public async editMovie() {
		const { ctx } = this;

		const { body } = this.ctx.request;

		const validateResult = await this.ctx.validate('movie.index.editMovie', body);
		if (!validateResult) return;

		const id = body.id;
		delete body.age;
		const movie: IMovie = {
			...body,
		}
		await ctx.service.movie.editMovie(id, movie);
	}

	public async delMovie() {
		const { ctx } = this;

		const { body } = this.ctx.request;

		const validateResult = await this.ctx.validate('movie.index.delMovie', body);
		if (!validateResult) return

		await ctx.service.movie.delMovie(body.id)
	}
}
