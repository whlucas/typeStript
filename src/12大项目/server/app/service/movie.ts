import { Service } from 'egg';
import { IMovie } from '../type/IMovie';

export default class Test extends Service {

	public async addMovie(movie: IMovie) {
		const { ctx } = this

		return await ctx.model.Movie.create(movie);
	}

	public async editMovie(id: number, movie: IMovie) {
		const { ctx } = this

		return await ctx.model.Movie.update(movie, {
			where: {
				id,
			},
		})
	}

	public async delMovie(id: number) {
		const { ctx } = this

		return await ctx.model.Movie.destroy({
			where: {
				id,
			},
			force: true, // 控制是真实的物理删除，还是软删除，软删除只会在deleted_at的地方进行标记来说明他是被删除的，物理删除就是把这一条数据删了
		})
	}
}
