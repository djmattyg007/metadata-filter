import { removeVersion } from '../../src/functions';

import { testFilterFunction } from '../helper/test-function';

testFilterFunction(removeVersion, [
	{
		description: 'should do nothing with clean string',
		funcParameter: 'Track Title',
		expectedValue: 'Track Title',
	},
	{
		description: 'should remove "(Album Version)" string',
		funcParameter: 'Track Title (Album Version)',
		expectedValue: 'Track Title ',
	},
	{
		description: 'should remove "[Album Version]" string',
		funcParameter: 'Track Title [Album Version]',
		expectedValue: 'Track Title ',
	},
	{
		description: 'should remove "(Rerecorded)" string',
		funcParameter: 'Track Title (Rerecorded)',
		expectedValue: 'Track Title ',
	},
	{
		description: 'should remove "[Rerecorded]" string',
		funcParameter: 'Track Title [Rerecorded]',
		expectedValue: 'Track Title ',
	},
	{
		description: 'should remove "(Re-recorded)" string',
		funcParameter: 'Track Title (Rerecorded)',
		expectedValue: 'Track Title ',
	},
	{
		description: 'should remove "[Re-recorded]" string',
		funcParameter: 'Track Title [Rerecorded]',
		expectedValue: 'Track Title ',
	},
	{
		description: 'should remove "(Single Version)" string',
		funcParameter: 'Track Title (Single Version)',
		expectedValue: 'Track Title ',
	},
	{
		description: 'should remove "(Edit)" string',
		funcParameter: 'Track Title (Edit)',
		expectedValue: 'Track Title ',
	},
	{
		description: 'should remove "- Mono Version" string',
		funcParameter: 'Track Title - Mono Version',
		expectedValue: 'Track Title ',
	},
	{
		description: 'should remove "- Stereo Version" string',
		funcParameter: 'Track Title - Stereo Version',
		expectedValue: 'Track Title ',
	},
	{
		description: 'should remove "(Deluxe Edition)" string',
		funcParameter: 'Album Title (Deluxe Edition)',
		expectedValue: 'Album Title ',
	},
]);
