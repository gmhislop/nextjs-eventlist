import EventItem from './event-item';
import styles from './event-list.module.css';
import useSWR from 'swr'

const EventList = (props) => {
  // const { items } = props;
  const fetcher = (url) => fetch(url).then(res => res.json());
  const { data, error, isLoading } = useSWR('https://nextjs-course-8cb56-default-rtdb.firebaseio.com/events.json', fetcher)
  
    if (error) return <div>Failed to fetch users.</div>
    if (isLoading) return <h2>Loading...</h2>
  
  return (
    <ul className={styles.list}>
      {data.map((event) => (
        <EventItem 
        key={event.id}
        id={event.id} 
        title={event.title} 
        image={event.image} 
        location={event.location} 
        date={event.date} />
      ))}
    </ul>
  );
};
export default EventList;
