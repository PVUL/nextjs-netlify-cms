import { GetStaticProps } from 'next'
import Image from 'next/image'

interface HomeAttributes {
  hero_title: string
  hero_description: string
  hero_image: string
}

interface Props {
  content: { attributes: HomeAttributes }
}

const HomePage = ({ content }: Props) => {
  const { attributes } = content

  return (
    <>
      <h1>{attributes.hero_title}</h1>
      <p>{attributes.hero_description}</p>
      <Image src={attributes.hero_image} alt="hero image" />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../_content/pages/${'home'}.md`)
  return { props: { content: content.default } }
}

export default HomePage
