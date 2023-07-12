
export enum Pages {
	Index = '/',
	LevelSelection = '/levels',
	Editor = '/editor',
	PlayLevel = '/play/:levelId',
	Test = '/test'
}

export enum PageParams {
	LevelId = ':levelId',
}

export interface RouteParams {
	levelId: string|undefined;
}