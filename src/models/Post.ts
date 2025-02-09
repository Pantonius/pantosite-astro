import type { InferEntrySchema, RenderedContent } from "astro:content";

export type CollectionPost = {
	id: string;
	body?: string;
	collection: "blog" | "projects";
	data: InferEntrySchema<"blog"> | InferEntrySchema<"projects">;
	rendered?: RenderedContent;
	filePath?: string;
	digest?: string;
	deferredRender?: boolean;
};

export const isCollectionPost = (post: any): post is CollectionPost => {
	return post.collection === "blog" || post.collection === "projects";
}

export type Post = {
	id: string;
	title: string;
	heroImage?: string;
	pubDate: Date;
	updatedDate?: Date;
	description: string;

	rendered?: RenderedContent;
	filePath?: string;
	body?: string;
	digest?: string;
	deferredRender?: boolean;
	collection: "blog" | "projects";
};

export const convertPost = (post: CollectionPost): Post => {
	return {
		id: post.id,
		title: post.data.title,
		heroImage: post.data.heroImage,
		pubDate: new Date(post.data.pubDate),
		updatedDate: post.data.updatedDate ? new Date(post.data.updatedDate) : undefined,
		description: post.data.description,

		rendered: post.rendered,
		filePath: post.filePath,
		body: post.body,
		digest: post.digest,
		deferredRender: post.deferredRender,
		collection: post.collection
	};
}

export const convertCollectionPost = (post: Post): CollectionPost => {
	return {
		id: post.id,
		collection: post.collection,
		data: {
			title: post.title,
			heroImage: post.heroImage,
			pubDate: post.pubDate,
			updatedDate: post.updatedDate,
			description: post.description
		},
		rendered: post.rendered,
		filePath: post.filePath,
		body: post.body,
		digest: post.digest,
		deferredRender: post.deferredRender
	};
}
