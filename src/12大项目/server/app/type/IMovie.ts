// 电影
export interface IMovie {
	name: string;
	type: string;
	areas: string;
	timeLong: number;
	isHot?: boolean;
	isComing?: boolean;
	isClassic?: boolean;
	description?: string;
	poster?: string;
}
