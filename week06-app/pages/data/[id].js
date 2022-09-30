import { getDataIds, getData } from '../../lib/data';

export async function getStaticProps({ params }) {
  const item = await getData(params.id);
  return {
    props: {
      item
    }
  };
}

export async function getStaticPaths() {
  const path = await getDataIds();
  return {
    path,
    fallback: false
  };
}

export default function Individual({ item }) {
  console.log(item);
  return (
    <article className="card col-6">
      <div className="card-body">
        <h5 className="card-title">{item.data.first_name}</h5>
        {item.data.last_name ?
          <h5 className="btn btn-primary">{item.data.last_name}</h5>
          : null
        }
        <p className="card-text">{item.data.race}</p>
      </div>
    </article>
  );
}