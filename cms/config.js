export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'pvul/nextjs-netlify-cms',
    branch: 'main',
  },
  local_backend: true,
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      folder: 'content/pages',
      fields: [
        {
          label: 'Hero Title',
          name: 'hero_title',
          widget: 'string',
        },
        {
          label: 'Hero Description',
          name: 'hero_description',
          widget: 'markdown',
        },
        {
          label: 'Hero Image',
          name: 'hero_image',
          widget: 'image',
        },
      ],
    },
  ],
};
