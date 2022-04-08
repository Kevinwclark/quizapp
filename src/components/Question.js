import OutlinedCard from './Card';

export default function Question(props) {
  console.log(props)
  return (
    <ul>
      <OutlinedCard {...props} />
    </ul>
  );
}

