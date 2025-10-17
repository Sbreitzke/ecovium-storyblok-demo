import Head from "next/head";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page({ story }) {
  story = useStoryblokState(story);

  return (
    <div>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {story ? (
        <StoryblokComponent blok={story.content} />
      ) : (
        <div>Story not found</div>
      )}
    </div>
  );
}

export async function getStaticProps({ params }) {
  // Join the slug array to create the full path
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();

  try {
    let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

    return {
      props: {
        story: data ? data.story : false,
        key: data ? data.story.id : false,
      },
      revalidate: 3600, // revalidate every hour
    };
  } catch (error) {
    // Story not found
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();

  let { data } = await storyblokApi.get("cdn/links/", {
    version: "draft",
  });

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    // Skip home story as it's handled by index.js
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    // Get array of slugs for the path
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: "blocking", // Enable ISR for new pages
  };
}
