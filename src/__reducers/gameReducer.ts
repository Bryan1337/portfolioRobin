import { getCoordinateTileKey, getDimension, getExitYPosition } from 'Scripts/coordinateHelper';
import { AppCarOrientations, CreateGameProperties, GameObjectSizes, GameObjectTypes, GameState, GameTile, GameTileMatrix2 } from 'Types/gameTypes';
import { AnyAction } from 'redux';
import { GameObject, MoveTurn } from './../__types/gameTypes';
import { LevelData } from './../components/app/level_selection/LevelSelection';

export const initialAppState: GameState = {
	gridSize: 6,
	selectedObject: null,
	selectedTile: null,
	gameTiles: {},
	placementDirection: AppCarOrientations.Horizontal,
	placementLength: GameObjectSizes.Small,
	placementType: GameObjectTypes.Vehicle,
	gameObjects: {},
	levelData: {},
	turnQueue: [],
	undoQueue: [],
	redoQueue: [],
}

export const gameReducer = (state: GameState = initialAppState, action: AnyAction) => {
	switch (action.type) {
		case 'SET_GRID_SIZE': {

			const maxSize = 10;

			const minSize = 3;

			const newGridSize = Math.min(maxSize, Math.max(minSize, action.size));

			return {
				...state,
				gridSize: newGridSize,
			}
		}
		case 'SET_PLACEMENT_TYPE': {

			let newPlacementLength = state.placementLength

			if (action.placementType === GameObjectTypes.Wall) {

				newPlacementLength = GameObjectSizes.Tiny;

			} else {

				newPlacementLength = Math.max(GameObjectSizes.Small, state.placementType);
			}

			return {
				...state,
				placementType: action.placementType,
				placementLength: newPlacementLength,
			}
		}
		case 'SET_TURN_QUEUE': {
			return {
				...state,
				turnQueue: action.queue,
			}
		}
		case 'SET_PLACEMENT_LENGTH': {

			const { selectedTile, placementDirection, gridSize } = state;

			const { length } = action;

			if(Boolean(selectedTile)) {

				const dimension = getDimension(placementDirection);

				if (selectedTile![dimension] + length >= gridSize) {

					const newSelectedTile = {
						...selectedTile
					}

					const maxDimensionPosition = gridSize - length;

					newSelectedTile[dimension] = maxDimensionPosition;

					return {
						...state,
						selectedTile: newSelectedTile,
						placementLength: length,
					}
				}
			}

			return {
				...state,
				placementLength: action.length
			}
		}
		case 'SET_PLACEMENT_DIRECTION': {

			const { selectedTile, placementLength, gridSize } = state;

			const { direction } = action;

			if (Boolean(selectedTile)) {

				const dimension = getDimension(direction);

				if (selectedTile![dimension] + placementLength >= gridSize) {

					const newSelectedTile = {
						...selectedTile
					}

					const maxDimensionPosition = gridSize - placementLength;

					newSelectedTile[dimension] = maxDimensionPosition;

					return {
						...state,
						selectedTile: newSelectedTile,
						placementDirection: direction,
					}
				}
			}

			return {
				...state,
				placementDirection: direction,
			}
		}
		case 'UNDO_MOVE_OBJECT': {

			let { gameObject, toX, toY, fromX, fromY } = action.moveTurn as MoveTurn;

			const newUndoQueue = [...state.undoQueue].filter((_, index) => index !== 0);

			const newRedoQueue = [...state.redoQueue ];

			const oldCoordinate = getCoordinateTileKey(toX, toY)

			const newCoordinate = getCoordinateTileKey(fromX, fromY)

			const newGameObject = {
				...gameObject,
				xPosition: fromX,
				yPosition: fromY,
			}

			newRedoQueue.unshift({
				gameObject: newGameObject,
				toX,
				toY,
				fromX,
				fromY,
			})

			const newGameObjects = {
				...state.gameObjects
			}

			delete newGameObjects[oldCoordinate];

			newGameObjects[newCoordinate] = newGameObject;

			return {
				...state,
				gameObjects: newGameObjects,
				undoQueue: newUndoQueue,
				redoQueue: newRedoQueue,
				selectedObject: null,
			}
		}
		case 'REDO_MOVE_OBJECT': {

			const { gameObject, fromX, fromY, toX, toY } = action.moveTurn as MoveTurn;

			const oldCoordinate = getCoordinateTileKey(fromX, fromY);

			const newCoordinate = getCoordinateTileKey(toX, toY);

			const newGameObjects = {
				...state.gameObjects
			}

			const newUndoQueue = [...state.undoQueue]

			const newRedoQueue = [...state.redoQueue].filter((_, index) => index !== 0);

			const newGameObject = {
				...gameObject,
				xPosition: toX,
				yPosition: toY,
			};

			newUndoQueue.unshift({
				gameObject: newGameObject,
				fromX: gameObject.xPosition,
				fromY: gameObject.yPosition,
				toX,
				toY,
			})

			delete newGameObjects[oldCoordinate];

			newGameObjects[newCoordinate] = newGameObject;

			return {
				...state,
				gameObjects: newGameObjects,
				undoQueue: newUndoQueue,
				redoQueue: newRedoQueue,
				selectedObject: null,
			}
		}
		case 'MOVE_OBJECT': {

			const { gameObject, fromX, fromY, toX, toY } = action.moveTurn as MoveTurn;

			const oldCoordinate = getCoordinateTileKey(fromX, fromY);

			const newCoordinate = getCoordinateTileKey(toX, toY);

			const newGameObjects = {
				...state.gameObjects
			}

			const newUndoQueue = [...state.undoQueue]

			const newGameObject = {
				...gameObject,
				xPosition: toX,
				yPosition: toY,
			};

			newUndoQueue.unshift({
				gameObject: newGameObject,
				fromX: gameObject.xPosition,
				fromY: gameObject.yPosition,
				toX,
				toY,
			})

			delete newGameObjects[oldCoordinate];

			newGameObjects[newCoordinate] = newGameObject;

			return {
				...state,
				gameObjects: newGameObjects,
				undoQueue: newUndoQueue,
				redoQueue: [],
				selectedObject: null,
			}
		}
		case 'CREATE_GAME': {

			const { gridSize, gameObjects } : CreateGameProperties = action.game;

			const newGameObjects: Record<string, GameObject> = {};

			const gameTiles: GameTileMatrix2<GameTile> = {}

			Array.from({ length: gridSize }).forEach((_, yIndex) => {

				Array.from({ length: gridSize }).forEach((_, xIndex) => {

					gameTiles[getCoordinateTileKey(xIndex, yIndex)] = {
						xPosition: xIndex,
						yPosition: yIndex,
					}
				})
			})

			Object.keys(gameObjects).forEach((coordinate) => {

				const gameObject = gameObjects[coordinate];

				newGameObjects[coordinate] = gameObject;

				if(gameObject.orientation === AppCarOrientations.Horizontal) {

					for(let xIndex = gameObject.xPosition; xIndex < gameObject.xPosition + gameObject.size; xIndex++) {

						const coordinate = getCoordinateTileKey(xIndex, gameObject.yPosition);

						gameTiles[coordinate].vehicleKey = gameObject.key;
					}
				}

				if(gameObject.orientation === AppCarOrientations.Vertical) {

					for(let yIndex = gameObject.yPosition; yIndex < gameObject.yPosition + gameObject.size; yIndex++) {

						const coordinate = getCoordinateTileKey(gameObject.xPosition, yIndex);

						gameTiles[coordinate].vehicleKey = gameObject.key;
					}
				}
			})

			const exitYPosition = getExitYPosition(gridSize);
			/** Win tile */
			gameTiles[getCoordinateTileKey(gridSize, exitYPosition)] = {
				yPosition: exitYPosition,
				xPosition: gridSize,
			}

			return {
				...state,
				gameTiles,
				gameObjects: newGameObjects,
				gridSize,
				undoQueue: [],
				redoQueue: [],
			}
		}
		case 'CREATE_GAME_PROPERTIES': {

			const levelData : LevelData = action.levelData;

			return {
				...state,
				levelData,
			}
		}
		case 'ADD_OBJECT': {

			const { xPosition, yPosition } = action.gameObject as GameObject;

			const newGameObjects = {
				...state.gameObjects,
				[getCoordinateTileKey(xPosition, yPosition)]: action.gameObject
			}

			return {
				...state,
				gameObjects: newGameObjects,
			}
		}
		case 'SELECT_OBJECT': {
			return {
				...state,
				selectedObject: action.gameObject,
			}
		}
		case 'SET_SELECTED_TILE': {

			const { tile } = action;

			const { gridSize, placementLength, placementDirection } = state;

			const newSelectedTile = {
				xPosition: Math.min(gridSize - 1, Math.max(0, tile.xPosition)),
				yPosition: Math.min(gridSize - 1, Math.max(0, tile.yPosition)),
			}

			const dimension = getDimension(placementDirection);

			let limitedDimensionPosition = Math.max(0, Math.min(tile[dimension], gridSize - 1));

			if (limitedDimensionPosition + placementLength > gridSize) {

				limitedDimensionPosition = gridSize - placementLength;
			}

			newSelectedTile[dimension] = limitedDimensionPosition;

			return {
				...state,
				selectedTile: newSelectedTile,
			}
		}
		case 'REMOVE_OBJECT': {

			const newGameObjects = { ...state.gameObjects }

			const { xPosition, yPosition } = action.tile;

			const coordinate = getCoordinateTileKey(xPosition, yPosition);

			delete newGameObjects[coordinate];

			return {
				...state,
				gameObjects: newGameObjects,
			}
		}
		default:
			return state
	}
}
