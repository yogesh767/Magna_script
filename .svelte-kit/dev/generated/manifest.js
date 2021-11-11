const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\page1.svelte"),
	() => import("..\\..\\..\\src\\routes\\page2.svelte"),
	() => import("..\\..\\..\\src\\routes\\page3.svelte"),
	() => import("..\\..\\..\\src\\routes\\[slug].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/page1.svelte
	[/^\/page1\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/page2.svelte
	[/^\/page2\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/page3.svelte
	[/^\/page3\/?$/, [c[0], c[5]], [c[1]]],

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	// src/routes/[slug].svelte
	[/^\/([^/]+?)\/?$/, [c[0], c[6]], [c[1]], (m) => ({ slug: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];