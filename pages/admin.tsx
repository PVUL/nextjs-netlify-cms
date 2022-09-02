import dynamic from 'next/dynamic'
import config from '../cms/config'

const CMS = dynamic(
  // @ts-expect-error
  async () =>
    await import('netlify-cms-app').then((cms) => {
      // @ts-expect-error
      cms.init({ config })
    }),
  { ssr: false, loading: () => <p>Loading...</p> },
)

const AdminPage: React.FC = () => {
  // @ts-expect-error
  return <CMS />
}

export default AdminPage
