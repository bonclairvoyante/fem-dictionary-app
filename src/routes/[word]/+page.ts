import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`${URL}${params.word}`);

	if (!response.ok) {
		throw error(response.status, "Sorry pal, we couldn't find definitions for the word you were looking for. You could try the search again at a later time or head to the web instead.",
			
		);
	}
	const definition = await response.json();
	return {
		definition
	};
};
