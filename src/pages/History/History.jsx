import SingleEntry from "../../components/history/SingleEntry";
import responses from '../../../public/mocked_responses.json';
import { Smiley, SmileyMeh, SmileySad } from '@phosphor-icons/react';

const History = () => {
  const status = [
    {
      grade: 'positive',
      emoji: <Smiley size={60} color='#2f9e44'/>,
    },
    {
      grade: 'neutral',
      emoji: <SmileyMeh size={60} color='#868e96'/>,
    },
    {
      grade: 'negative',
      emoji: <SmileySad size={60} color='#e03131'/>,
    },
  ];
  return <section className="fix-height">
    <h1>History</h1>
    {responses.map((object, index)=>(
      <SingleEntry object={object} status={status[object.summary_score]}key={index}/>
    ))}
  </section>
}

export default History;