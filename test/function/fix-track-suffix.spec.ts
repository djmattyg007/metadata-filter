import { fixTrackSuffix } from '../../src/functions';

import { testFilterFunction } from '../helper/test-function';

testFilterFunction(fixTrackSuffix, [
	{
		description: 'should do nothing with correct suffix',
		funcParameter: 'Track Title (Artist Remix)',
		expectedValue: 'Track Title (Artist Remix)',
	},
	{
		description: 'should do nothing with correct suffix',
		funcParameter: 'Track Title (Remix)',
		expectedValue: 'Track Title (Remix)',
	},
	{
		description: 'should replace invalid "Remix" suffix',
		funcParameter: 'Track Title - Artist Remix',
		expectedValue: 'Track Title (Artist Remix)',
	},
	{
		description: 'should replace invalid "X Remix" suffix',
		funcParameter: 'Track Title - Remix',
		expectedValue: 'Track Title (Remix)',
	},
	{
		description: 'should replace invalid "X Dub" suffix',
		funcParameter: 'Track Title - Group X dub',
		expectedValue: 'Track Title (Group X dub)',
	},
	{
		description: 'should replace invalid "X Edit" suffix',
		funcParameter: 'Track Title - Group X edit',
		expectedValue: 'Track Title (Group X edit)',
	},
	{
		description: 'should replace invalid "X Mix" suffix',
		funcParameter: 'Track Title - Group X mix',
		expectedValue: 'Track Title (Group X mix)',
	},
	{
		description: 'should replace invalid multifle suffixes',
		funcParameter: 'Track Title - Group X Remix Edit',
		expectedValue: 'Track Title (Group X Remix Edit)',
	},
	{
		description: 'should replace invalid "VIP" suffix',
		funcParameter: 'Track Title - VIP',
		expectedValue: 'Track Title (VIP)',
	},
	{
		description: 'should replace invalid "X Version" suffix',
		funcParameter: 'Track Title - Short Version',
		expectedValue: 'Track Title (Short Version)',
	},
	{
		description: 'should remove "- Original" sufix',
		funcParameter: 'Track Title - Original',
		expectedValue: 'Track Title ',
	},
]);
