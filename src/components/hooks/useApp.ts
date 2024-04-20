import { create } from 'zustand';

export const useApp = create((set) => ({
	urls: [] satisfies string[],
	addUrl: (url: string) =>
		set((state) => ({
			urls: [...state.urls, url]
		}))
}));
