import { get } from "@Utils/http";
import { getToken } from "@Utils/index";
import { IBlog } from "@Interfaces/blog";
import { urls } from "@Core/constants";

// =====================================================
const fetchInterceptor = () => {
  const token = getToken();
  return {
    async get<T>(url: string): Promise<T | null> {
      const response = await get<T>(url, {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + token,
        },
      });
      if (response && response.parsedBody) {
        return response.parsedBody;
      }
      return null;
    },
  };
};
const getAllBlogs = async () => {
  // return await fetchInterceptor().get<IBlog[]>(urls.allBlogs);
  return [
    {
      _id: "1",
      thumbnail:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      name: "Announcing the official ReqterCMS integration for Netlify!",
      shortdescription:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
        {
          text: "Announcements",
        },
      ],
      publishdate: "November 13, 2020",
      slug: "reqtercms-netlify-integration",
    },
    {
      _id: "2",
      thumbnail:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      name: "Product Update December 2020",
      shortdescription:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
      ],
      publishdate: "November 13, 2020",
      slug: "reqtercms-update-december",
    },
    {
      _id: "1",
      thumbnail:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      name: "Announcing the official ReqterCMS integration for Vercel!",
      shortdescription:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
        {
          text: "Announcements",
        },
      ],
      publishdate: "November 13, 2020",
      slug: "reqtercms-vercel-integration",
    },
    {
      _id: "2",
      thumbnail:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      name: "Product Update Jun 2020",
      shortdescription:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
      ],
      publishdate: "November 13, 2020",
      slug: "reqtercms-jun-updates",
    },
    {
      _id: "1",
      thumbnail:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      name: "Announcing the official ReqterCMS integration for Heroku!",
      shortdescription:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
        {
          text: "Announcements",
        },
      ],
      publishdate: "November 13, 2020",
      slug: "reqtercms-heroku-integration",
    },
    {
      _id: "2",
      thumbnail:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      name: "Product Update April 2020",
      shortdescription:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
      ],
      publishdate: "November 13, 2020",
      slug: "reqtercms-april-updates",
    },
  ];
};
const getBlogBySlug = async (slug: string) => {
  // const blogs = await fetchInterceptor().get<IBlog[]>(urls.allBlogs);
  const blogs = [
    {
      _id: "1",
      thumbnail:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      name: "Announcing the official ReqterCMS integration for Netlify!",
      shortdescription:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
        {
          text: "Announcements",
        },
      ],
      publishdate: "November 13, 2020",
      slug: "reqtercms-netlify-integration",
    },
    {
      _id: "2",
      thumbnail:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      name: "Product Update December 2020",
      shortdescription:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
      ],
      publishdate: "November 13, 2020",
      slug: "reqtercms-update-december",
    },
    {
      _id: "1",
      thumbnail:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      name: "Announcing the official ReqterCMS integration for Vercel!",
      shortdescription:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
        {
          text: "Announcements",
        },
      ],
      publishdate: "November 13, 2020",
      slug: "reqtercms-vercel-integration",
    },
    {
      _id: "2",
      thumbnail:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      name: "Product Update Jun 2020",
      shortdescription:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
      ],
      publishdate: "November 13, 2020",
      slug: "reqtercms-jun-updates",
    },
    {
      _id: "1",
      thumbnail:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      name: "Announcing the official ReqterCMS integration for Heroku!",
      shortdescription:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
        {
          text: "Announcements",
        },
      ],
      publishdate: "November 13, 2020",
      slug: "reqtercms-heroku-integration",
    },
    {
      _id: "2",
      thumbnail:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      name: "Product Update April 2020",
      shortdescription:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
      ],
      publishdate: "November 13, 2020",
      slug: "reqtercms-april-updates",
    },
  ];
  return blogs?.find((item) => item.slug === slug);
};
export { getAllBlogs, getBlogBySlug };
