import WordsContainer from './_components/WordsContainer'
import Header from '@/ui/Header'

export default function Home() {
  return (
    <div className="bg-white w-full p-7 rounded-lg h-full">
      <Header title="Word Translations" />
      <WordsContainer />
    </div>
  )
}
